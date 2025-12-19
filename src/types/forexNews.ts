// 外汇新闻事件类型定义
export interface ForexEvent {
    title: string;
    country: string; // "USD", "GBP", "EUR", "JPY"
    date: string;    // ISO 格式 "2024-06-20T14:30:00-04:00"
    time: string;    // 从 date 提取的时间
    impact: string;  // "High", "Medium", "Low", "Non-Economic"
    forecast: string;
    previous: string;
    currency?: string;
}

// 筛选配置
export interface ICTFilter {
    targetCurrencies: string[]; // 例如 ['USD', 'GBP']
    impactFilter: string[];     // 例如 ['High']
    enableTimezoneConversion: boolean;
    localTimezone: string;      // 例如 'Pacific/Auckland'
}

// 过滤后的结果结构
export interface FilteredEvents {
    redEvents: ForexEvent[];
    totalEvents: number;
    hasUSDEvents: boolean;
    summary: {
        USD: number;
        GBP: number;
        EUR: number;
        JPY: number;
        other: number;
    };
}
