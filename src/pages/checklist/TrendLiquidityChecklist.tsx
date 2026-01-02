import { useState, useCallback } from 'react';
import { CheckCircle2, Circle, AlertTriangle, Target, TrendingUp, Search, Crosshair, ArrowDownCircle, ArrowUpCircle, RotateCcw, Rocket } from 'lucide-react';

type TradeDirection = 'long' | 'short' | null;

interface ChecklistItemData {
    id: string;
    title: string;
    description?: string;
    longCondition?: string;
    shortCondition?: string;
    tip?: string;
    warning?: string;
}

const checklistItems: ChecklistItemData[] = [
    // 第一阶段：宏观定调 (3项)
    {
        id: 'key_levels',
        title: '绘制战场地图 (Key Levels)',
        description: '在图表上标记出：PWH/PWL (上周高低), PDH/PDL (昨日高低)',
        tip: '不需要标 Session 高低点，那个留给 M15 阶段去看',
    },
    {
        id: 'trend',
        title: '趋势方向判读 (Trend)',
        longCondition: '价格在 EMA 20 上方 → 多头趋势',
        shortCondition: '价格在 EMA 20 下方 → 空头趋势',
    },
    {
        id: 'space_check',
        title: '空间与冲突检查 (Space Check)',
        longCondition: '现价上方是否有 PWH 或 PDH 压制？\n• 距离很近 (< 20点) → 不操作 / 等突破\n• 距离较远 (> 50点) → 可以做，目标就是那个高点',
        shortCondition: '现价下方是否有 PWL 或 PDL 支撑？\n• 距离很近 (< 20点) → 不操作 / 等突破\n• 距离较远 (> 50点) → 可以做，目标就是那个低点',
    },
    // 第二阶段：微观狩猎 (1项)
    {
        id: 'sweep',
        title: '等待「扫损」(The Sweep)',
        longCondition: '等待 M15 价格跌破一个短期的 Swing Low (内部低点)',
        shortCondition: '等待 M15 价格突破一个短期的 Swing High (内部高点)',
        tip: '口诀：不做多，直到低点被扫；不做空，直到高点被扫',
    },
    // 第三阶段：确认扳机 (2项)
    {
        id: 'displacement',
        title: '寻找强力位移 (Displacement)',
        description: '扫损发生后，是否出现了一根（或连续）巨大的实体 K 线反向运动？',
        longCondition: '大阳线吞没阴线，且收盘价突破了前一根阴线的高点',
        shortCondition: '大阴线吞没阳线，且收盘价跌破了前一根阳线的低点',
    },
    {
        id: 'mss_fvg',
        title: '结构破坏 (MSS) 与 FVG 形成',
        description: '这波位移是否打破了微观结构 (MSS)？是否留下了清晰可见的 FVG？',
        warning: '如果没有 FVG，说明机构没进场，放弃交易',
    },
    // 第四阶段：精准入场 (3项)
    {
        id: 'entry',
        title: '挂单入场 (The Retest)',
        description: '在 FVG 区域（或 OTE 0.618-0.79）挂限价单',
        warning: '不要追单！耐心等它回来填补缺口',
    },
    {
        id: 'stoploss',
        title: '硬止损设置 (Structure Stop)',
        longCondition: '止损放在最低点下方（扫损针极值点之外）',
        shortCondition: '止损放在最高点上方（扫损针极值点之外）',
    },
    {
        id: 'takeprofit',
        title: '止盈设置 (Target)',
        description: 'TP1: 1:1 盈亏比或最近的反向流动性（推保本）；TP2: H4 的外部流动性 (ERL)',
    },
];

interface ChecklistItemProps {
    item: ChecklistItemData;
    checked: boolean;
    onToggle: () => void;
    direction: TradeDirection;
    phase: number;
}

function ChecklistItem({ item, checked, onToggle, direction, phase }: ChecklistItemProps) {
    const phaseColors: Record<number, string> = {
        1: 'border-indigo-500/50',
        2: 'border-amber-500/50',
        3: 'border-red-500/50',
        4: 'border-green-500/50',
    };

    return (
        <div
            className={`bg-slate-800/50 rounded-lg p-4 border-l-4 ${phaseColors[phase] || 'border-slate-500/50'} 
        cursor-pointer transition-all hover:bg-slate-700/50 ${checked ? 'ring-2 ring-green-500/50' : ''}`}
            onClick={onToggle}
        >
            <div className="flex items-start gap-3">
                <div className="mt-0.5">
                    {checked ? (
                        <CheckCircle2 className="h-6 w-6 text-green-500" />
                    ) : (
                        <Circle className="h-6 w-6 text-slate-500" />
                    )}
                </div>
                <div className="flex-1">
                    <h4 className={`font-semibold ${checked ? 'text-green-400 line-through' : 'text-white'}`}>
                        {item.title}
                    </h4>

                    {item.description && (
                        <p className="mt-1 text-sm text-slate-300">{item.description}</p>
                    )}

                    {(item.longCondition || item.shortCondition) && (
                        <div className="mt-2 space-y-1.5 text-sm">
                            {direction !== 'short' && item.longCondition && (
                                <div className={`flex items-start gap-2 p-2 rounded ${direction === 'long' ? 'bg-green-900/30 border border-green-700/50' : 'bg-slate-700/30'}`}>
                                    <ArrowUpCircle className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />
                                    <span className="text-slate-200 whitespace-pre-line">{item.longCondition}</span>
                                </div>
                            )}
                            {direction !== 'long' && item.shortCondition && (
                                <div className={`flex items-start gap-2 p-2 rounded ${direction === 'short' ? 'bg-red-900/30 border border-red-700/50' : 'bg-slate-700/30'}`}>
                                    <ArrowDownCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                                    <span className="text-slate-200 whitespace-pre-line">{item.shortCondition}</span>
                                </div>
                            )}
                        </div>
                    )}

                    {item.tip && (
                        <p className="mt-2 text-xs text-indigo-400 flex items-center gap-1.5">
                            <Target className="h-3.5 w-3.5" />
                            {item.tip}
                        </p>
                    )}

                    {item.warning && (
                        <p className="mt-2 text-xs text-amber-400 flex items-center gap-1.5">
                            <AlertTriangle className="h-3.5 w-3.5" />
                            {item.warning}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

interface PhaseProps {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    description?: string;
    children: React.ReactNode;
    itemsChecked: number;
    totalItems: number;
}

function Phase({ icon, title, subtitle, description, children, itemsChecked, totalItems }: PhaseProps) {
    const allChecked = itemsChecked === totalItems;

    return (
        <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                    {icon}
                    <div>
                        <h3 className="text-base font-bold text-white">{title}</h3>
                        <p className="text-xs text-slate-400">{subtitle}</p>
                    </div>
                </div>
                <div className={`px-2 py-1 rounded text-xs font-semibold ${allChecked ? 'bg-green-900/50 text-green-400' : 'bg-slate-700 text-slate-400'}`}>
                    {itemsChecked}/{totalItems}
                </div>
            </div>
            {description && (
                <p className="text-slate-400 text-xs mb-3 italic">{description}</p>
            )}
            <div className="space-y-2">
                {children}
            </div>
        </div>
    );
}

export default function TrendLiquidityChecklist() {
    const [direction, setDirection] = useState<TradeDirection>(null);
    const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

    const toggleItem = useCallback((id: string) => {
        setCheckedItems(prev => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }
            return next;
        });
    }, []);

    const resetAll = useCallback(() => {
        setCheckedItems(new Set());
        setDirection(null);
    }, []);

    const allChecked = checkedItems.size === checklistItems.length;
    const progress = (checkedItems.size / checklistItems.length) * 100;

    const phases = [
        { start: 0, end: 3, icon: <TrendingUp className="h-5 w-5 text-indigo-400" />, title: '第一阶段：宏观定调', subtitle: 'H4 Context & Key Levels', description: '大周期决定方向，不做逆势单。' },
        { start: 3, end: 4, icon: <Search className="h-5 w-5 text-amber-400" />, title: '第二阶段：微观狩猎', subtitle: 'M15 Setup', description: '寻找内部流动性 (IRL) 作为燃料。' },
        { start: 4, end: 6, icon: <Crosshair className="h-5 w-5 text-red-400" />, title: '第三阶段：确认扳机', subtitle: 'The Displacement', description: '解决「入场过早」和「逆势接刀」的核心滤网。' },
        { start: 6, end: 9, icon: <CheckCircle2 className="h-5 w-5 text-green-400" />, title: '第四阶段：精准入场', subtitle: 'Execution', description: '扣动扳机。' },
    ];

    return (
        <div className="max-w-3xl mx-auto px-4 py-6">
            {/* Header */}
            <div className="text-center mb-6">
                <h1 className="text-2xl font-bold text-white mb-1 flex items-center justify-center gap-2">
                    <span>📋</span> 趋势与流动性狙击系统
                </h1>
                <p className="text-sm text-slate-400">Trend & Liquidity Protocol</p>
            </div>

            {/* Direction Selector */}
            <div className="mb-6 flex items-center justify-center gap-3">
                <span className="text-slate-400 text-sm">交易方向：</span>
                <button
                    onClick={() => setDirection(direction === 'long' ? null : 'long')}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 ${direction === 'long'
                        ? 'bg-green-600 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                        }`}
                >
                    <ArrowUpCircle className="h-4 w-4" />
                    做多
                </button>
                <button
                    onClick={() => setDirection(direction === 'short' ? null : 'short')}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 ${direction === 'short'
                        ? 'bg-red-600 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                        }`}
                >
                    <ArrowDownCircle className="h-4 w-4" />
                    做空
                </button>
                <button
                    onClick={resetAll}
                    className="px-3 py-2 rounded-lg bg-slate-700 text-slate-300 hover:bg-slate-600 transition-all"
                    title="重置所有"
                >
                    <RotateCcw className="h-4 w-4" />
                </button>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
                <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm text-slate-400">完成进度</span>
                    <span className="text-sm font-semibold text-white">{checkedItems.size}/{checklistItems.length}</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                        className={`h-full transition-all duration-300 ${allChecked ? 'bg-green-500' : 'bg-indigo-500'}`}
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            {/* Phases */}
            {phases.map((phase, phaseIndex) => {
                const phaseItems = checklistItems.slice(phase.start, phase.end);
                const phaseChecked = phaseItems.filter(item => checkedItems.has(item.id)).length;

                return (
                    <Phase
                        key={phaseIndex}
                        icon={phase.icon}
                        title={phase.title}
                        subtitle={phase.subtitle}
                        description={phase.description}
                        itemsChecked={phaseChecked}
                        totalItems={phaseItems.length}
                    >
                        {phaseItems.map((item) => (
                            <ChecklistItem
                                key={item.id}
                                item={item}
                                checked={checkedItems.has(item.id)}
                                onToggle={() => toggleItem(item.id)}
                                direction={direction}
                                phase={phaseIndex + 1}
                            />
                        ))}
                    </Phase>
                );
            })}

            {/* Execute Button */}
            <div className="sticky bottom-4 mt-8">
                <button
                    disabled={!allChecked}
                    className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${allChecked
                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-900/50 hover:from-green-500 hover:to-emerald-500'
                        : 'bg-slate-700 text-slate-500 cursor-not-allowed'
                        }`}
                >
                    <Rocket className={`h-6 w-6 ${allChecked ? 'animate-pulse' : ''}`} />
                    {allChecked ? '✅ 所有条件已满足，可以下单！' : `还需完成 ${checklistItems.length - checkedItems.size} 个检查项`}
                </button>
            </div>

            {/* Mentor Words */}
            <div className="mt-8 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-xl p-4 border border-indigo-700/30">
                <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                    <span>🚀</span> 导师寄语
                </h3>
                <div className="space-y-1 text-xs text-slate-300">
                    <p>少了 <strong className="text-red-400">Displacement</strong> = 猜顶底</p>
                    <p>少了 <strong className="text-indigo-400">EMA 20</strong> = 逆大势</p>
                    <p>少了 <strong className="text-green-400">Sweep</strong> = 追涨杀跌</p>
                </div>
            </div>
        </div>
    );
}
