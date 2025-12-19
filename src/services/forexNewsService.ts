import type { ForexEvent, ICTFilter, FilteredEvents } from '../types/forexNews';

// 指向后端代理地址
const FOREX_FACTORY_API = '/api/forex-factory';

// 默认配置：ICT 策略只关注红标
const DEFAULT_ICT_FILTER: ICTFilter = {
    targetCurrencies: ['USD', 'GBP', 'EUR', 'JPY'],
    impactFilter: ['High'],
    enableTimezoneConversion: true,
    localTimezone: 'Pacific/Auckland'
};

const CACHE_KEY = 'forex_factory_cache';
const CACHE_DURATION = 4 * 60 * 60 * 1000; // 缓存 4 小时

interface CacheData {
    data: ForexEvent[];
    timestamp: number;
}

// 获取缓存状态
export function getCurrentCacheStatus() {
    try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (!cached) return { isUsingCache: false, cacheAgeMinutes: 0, nextUpdateInMinutes: 0 };

        const cacheData: CacheData = JSON.parse(cached);
        const now = Date.now();
        const cacheAge = now - cacheData.timestamp;

        return {
            isUsingCache: cacheAge < CACHE_DURATION,
            cacheAgeMinutes: Math.round(cacheAge / 1000 / 60),
            nextUpdateInMinutes: Math.max(0, Math.round((CACHE_DURATION - cacheAge) / 1000 / 60))
        };
    } catch {
        return { isUsingCache: false, cacheAgeMinutes: 0, nextUpdateInMinutes: 0 };
    }
}

// 从 API 或缓存获取原始数据
async function fetchForexNewsData(): Promise<ForexEvent[]> {
    // Check Cache
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
        const cacheData: CacheData = JSON.parse(cached);
        if (Date.now() - cacheData.timestamp < CACHE_DURATION) {
            console.log('Using cached forex data');
            return cacheData.data;
        }
    }

    // Fetch API
    try {
        const response = await fetch(FOREX_FACTORY_API);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();

        const events: ForexEvent[] = data.map((item: any) => ({
            title: item.title,
            country: item.country,
            date: item.date,
            time: '',
            impact: item.impact,
            forecast: item.forecast,
            previous: item.previous
        }));

        // Update Cache
        localStorage.setItem(CACHE_KEY, JSON.stringify({
            data: events,
            timestamp: Date.now()
        }));

        return events;
    } catch (error) {
        console.error('Fetch failed:', error);
        // Fallback to stale cache if API fails
        if (cached) return JSON.parse(cached).data;
        throw error;
    }
}

// 核心功能：扫描红标事件
export async function scanRedFolders(filter: ICTFilter = DEFAULT_ICT_FILTER): Promise<FilteredEvents> {
    const events = await fetchForexNewsData();

    // 1. 过滤
    const redEvents = events.filter(e =>
        filter.impactFilter.includes(e.impact) &&
        filter.targetCurrencies.includes(e.country)
    );

    // 2. 统计
    const summary = redEvents.reduce((acc, e) => {
        const key = e.country as keyof typeof acc;
        if (key in acc) {
            acc[key] = acc[key] + 1;
        } else {
            acc.other = acc.other + 1;
        }
        return acc;
    }, { USD: 0, GBP: 0, EUR: 0, JPY: 0, other: 0 });

    return {
        redEvents,
        totalEvents: events.length,
        hasUSDEvents: summary.USD > 0,
        summary
    };
}
