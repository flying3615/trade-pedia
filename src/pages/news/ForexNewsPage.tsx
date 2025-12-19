import { useState, useEffect } from 'react';
import { Clock, Filter, AlertCircle, RefreshCw, DollarSign, TrendingUp, Calendar, Globe } from 'lucide-react';
import { scanRedFolders, getCurrentCacheStatus } from '../../services/forexNewsService';
import type { FilteredEvents } from '../../types/forexNews';

// 统计卡片组件
function SummaryCard({ icon: Icon, label, count, colorClass, isActive, onClick }: {
    icon: React.ElementType;
    label: string;
    count: number;
    colorClass: string;
    isActive: boolean;
    onClick: () => void;
}) {
    return (
        <div
            onClick={onClick}
            className={`cursor-pointer transition-all duration-200 bg-white dark:bg-slate-800 p-4 rounded-lg border shadow-sm flex items-center ${isActive
                ? 'border-indigo-500 ring-2 ring-indigo-500/20 shadow-md ring-offset-2 dark:ring-offset-slate-900'
                : 'border-gray-100 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-500'
                }`}
        >
            <div className={`p-2 rounded-lg ${colorClass} mr-3`}>
                <Icon className="h-5 w-5" />
            </div>
            <div>
                <div className={`text-xl font-bold ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-800 dark:text-white'}`}>
                    {count}
                </div>
                <div className={`text-xs ${isActive ? 'text-indigo-500 font-medium' : 'text-gray-500 dark:text-gray-400'}`}>
                    {label}
                </div>
            </div>
        </div>
    );
}

export default function ForexNewsPage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<FilteredEvents | null>(null);
    const [cacheStatus, setCacheStatus] = useState({ isUsingCache: false, lastUpdate: new Date() });
    const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);

    // 本地化设置
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const loadData = async () => {
        setLoading(true);
        setError(null);
        try {
            const result = await scanRedFolders({
                targetCurrencies: ['USD', 'GBP', 'EUR', 'JPY'],
                impactFilter: ['High'],
                enableTimezoneConversion: true,
                localTimezone: userTimezone
            });
            setData(result);

            const status = getCurrentCacheStatus();
            setCacheStatus({
                isUsingCache: status.isUsingCache,
                lastUpdate: new Date()
            });
        } catch (err) {
            setError(err instanceof Error ? err.message : '加载失败');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    // 辅助函数：格式化时间
    const formatTime = (isoString: string) => {
        try {
            return new Date(isoString).toLocaleString('zh-CN', {
                timeZone: userTimezone,
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            });
        } catch {
            return isoString;
        }
    };

    // 判断事件状态：upcoming (即将发生), past (已过期)
    const getEventStatus = (isoString: string): 'upcoming' | 'soon' | 'past' => {
        const eventTime = new Date(isoString).getTime();
        const now = Date.now();
        const hoursUntil = (eventTime - now) / (1000 * 60 * 60);

        if (hoursUntil < 0) return 'past';
        if (hoursUntil <= 24) return 'soon'; // 24小时内即将发生
        return 'upcoming';
    };

    // 筛选并排序事件
    const sortedEvents = data?.redEvents
        ? [...data.redEvents]
            .filter(e => !selectedCurrency || e.country === selectedCurrency)
            .sort((a, b) => {
                const statusA = getEventStatus(a.date);
                const statusB = getEventStatus(b.date);

                // 优先级：soon > upcoming > past
                const priority: Record<string, number> = { soon: 0, upcoming: 1, past: 2 };
                if (priority[statusA] !== priority[statusB]) {
                    return priority[statusA] - priority[statusB];
                }

                // 同状态下按时间排序
                return new Date(a.date).getTime() - new Date(b.date).getTime();
            })
        : [];

    // 样式辅助
    const getImpactColor = (impact: string) => {
        return impact === 'High'
            ? 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800'
            : 'bg-gray-100 dark:bg-slate-700';
    };

    // 根据事件状态获取行样式
    const getRowStyle = (isoString: string) => {
        const status = getEventStatus(isoString);
        if (status === 'soon') {
            return 'bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500';
        }
        if (status === 'past') {
            return 'opacity-50';
        }
        return '';
    };

    const toggleCurrency = (currency: string) => {
        setSelectedCurrency(prev => prev === currency ? null : currency);
    };

    if (loading && !data) {
        return (
            <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-2" />
                加载数据中...
            </div>
        );
    }

    if (error && !data) {
        return (
            <div className="p-8 text-center text-red-500">
                <AlertCircle className="h-8 w-8 mx-auto mb-2" />
                错误: {error}
            </div>
        );
    }

    return (
        <div className="p-6 max-w-5xl mx-auto">
            {/* 标题区域 */}
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">外汇红标事件扫描</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">ICT 策略重点关注数据 • {userTimezone}</p>
                </div>
                <button
                    onClick={loadData}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition"
                    disabled={loading}
                >
                    <RefreshCw className={`h-5 w-5 text-gray-600 dark:text-gray-400 ${loading ? 'animate-spin' : ''}`} />
                </button>
            </div>

            {/* ICT 警告 */}
            {data?.hasUSDEvents && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-r-lg flex items-start">
                    <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mr-3 mt-0.5 shrink-0" />
                    <div>
                        <h3 className="text-red-800 dark:text-red-300 font-bold">ICT 策略警告</h3>
                        <p className="text-red-700 dark:text-red-400 text-sm">本周有美元(USD)高影响事件。注意美股/黄金可能出现 Judas Swing (假突破)。</p>
                    </div>
                </div>
            )}

            {/* 统计卡片 */}
            {data && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <SummaryCard
                        icon={DollarSign}
                        label="USD 事件"
                        count={data.summary.USD}
                        colorClass="bg-blue-50 text-blue-500 dark:bg-blue-900/30 dark:text-blue-400"
                        isActive={selectedCurrency === 'USD'}
                        onClick={() => toggleCurrency('USD')}
                    />
                    <SummaryCard
                        icon={TrendingUp}
                        label="GBP 事件"
                        count={data.summary.GBP}
                        colorClass="bg-purple-50 text-purple-500 dark:bg-purple-900/30 dark:text-purple-400"
                        isActive={selectedCurrency === 'GBP'}
                        onClick={() => toggleCurrency('GBP')}
                    />
                    <SummaryCard
                        icon={Calendar}
                        label="EUR 事件"
                        count={data.summary.EUR}
                        colorClass="bg-green-50 text-green-500 dark:bg-green-900/30 dark:text-green-400"
                        isActive={selectedCurrency === 'EUR'}
                        onClick={() => toggleCurrency('EUR')}
                    />
                    <SummaryCard
                        icon={Globe}
                        label="JPY 事件"
                        count={data.summary.JPY}
                        colorClass="bg-orange-50 text-orange-500 dark:bg-orange-900/30 dark:text-orange-400"
                        isActive={selectedCurrency === 'JPY'}
                        onClick={() => toggleCurrency('JPY')}
                    />
                </div>
            )}

            {/* 事件列表 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm overflow-hidden">
                {sortedEvents.length === 0 ? (
                    <div className="p-10 text-center text-gray-400 dark:text-gray-500">
                        <Filter className="h-10 w-10 mx-auto mb-2 opacity-50" />
                        <p>{selectedCurrency ? `本周没有符合条件的 ${selectedCurrency} 事件` : '本周没有符合条件的红标事件'}</p>
                        {selectedCurrency && (
                            <button
                                onClick={() => setSelectedCurrency(null)}
                                className="mt-4 text-sm text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
                            >
                                清除筛选
                            </button>
                        )}
                    </div>
                ) : (
                    <div className="divide-y divide-gray-100 dark:divide-slate-700">
                        {sortedEvents.map((event, idx) => (
                            <div key={idx} className={`p-4 hover:bg-gray-50 dark:hover:bg-slate-700/50 transition flex items-center justify-between ${getRowStyle(event.date)}`}>
                                <div className="flex items-center space-x-4">
                                    <div className="flex flex-col items-center w-14">
                                        <span className="text-xs font-bold text-gray-500 dark:text-gray-400">{event.country}</span>
                                        <span className={`text-xs px-2 py-0.5 rounded-full mt-1 ${getImpactColor(event.impact)}`}>
                                            {event.impact}
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 dark:text-white">{event.title}</h4>
                                        <div className="flex items-center flex-wrap text-sm text-gray-500 dark:text-gray-400 mt-1 gap-x-3">
                                            <span className="flex items-center"><Clock className="h-3 w-3 mr-1" /> {formatTime(event.date)}</span>
                                            {getEventStatus(event.date) === 'soon' && (
                                                <span className="text-amber-600 dark:text-amber-400 font-medium">即将发布</span>
                                            )}
                                            {getEventStatus(event.date) === 'past' && (
                                                <span className="text-gray-400 dark:text-gray-500">已发布</span>
                                            )}
                                            {event.forecast && <span className="text-blue-600 dark:text-blue-400">预期: {event.forecast}</span>}
                                            {event.previous && <span>前值: {event.previous}</span>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {cacheStatus.isUsingCache && (
                <div className="text-center mt-4 text-xs text-gray-400 dark:text-gray-500">
                    数据来源: 本地缓存 • 自动更新优化
                </div>
            )}
        </div>
    );
}
