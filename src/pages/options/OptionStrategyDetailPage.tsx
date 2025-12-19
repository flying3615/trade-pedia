import { useMemo, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { findStrategy } from '../../data/options/strategies'
import PayoffChart from '../../components/options/PayoffChart'
import CompositionSteps from '../../components/options/CompositionSteps'
import SingleLegsChart from '../../components/options/SingleLegsChart'
import MetricsPanel from '../../components/options/MetricsPanel'
import LegEditor from '../../components/options/LegEditor'

export default function OptionStrategyDetailPage() {
    const { id } = useParams()
    const strategy = useMemo(() => (id ? findStrategy(id) : undefined), [id])
    const [draft, setDraft] = useState(strategy)

    useEffect(() => { setDraft(strategy) }, [strategy])

    // Use draft if editing enabled (not fully implemented yet) or fallback to strategy
    const s = draft ?? strategy

    if (!s) {
        return (
            <section className="p-8 text-center">
                <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-200">策略未找到</h1>
                <p className="text-slate-600 dark:text-slate-400">无效的策略标识：{id}</p>
            </section>
        )
    }

    return (
        <div className="flex flex-col lg:flex-row h-full overflow-y-auto lg:overflow-hidden bg-white dark:bg-slate-950">
            {/* Left Content (Charts) - Scrollable on Desktop */}
            <div className="flex-1 lg:overflow-y-auto p-4 lg:p-8 space-y-8 bg-slate-50/50 dark:bg-slate-950">
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">即时编辑 (预览)</h2>
                        <button
                            onClick={() => strategy && setDraft(strategy)}
                            disabled={!strategy}
                            className="px-3 py-1 text-sm rounded bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 disabled:opacity-50"
                        >
                            重置
                        </button>
                    </div>

                    <div className="mb-4 p-4 border border-slate-100 rounded-lg bg-slate-50 dark:bg-slate-800/50 dark:border-slate-700">
                        <label className="flex items-center text-sm font-medium text-slate-700 dark:text-slate-300">
                            参考标的价 (S₀):
                            <input
                                type="number"
                                className="ml-2 rounded border border-slate-300 px-2 py-1 text-sm dark:border-slate-600 dark:bg-slate-800"
                                value={s.referencePrice}
                                onFocus={(e) => e.target.select()}
                                onChange={(e) => {
                                    const newPrice = Number(e.target.value);
                                    if (newPrice > 0) {
                                        setDraft({ ...s, referencePrice: newPrice });
                                    }
                                }}
                            />
                        </label>
                    </div>
                    <LegEditor strategy={s} onChange={setDraft} />
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">到期盈亏图</h2>
                    <div className="h-[400px] w-full">
                        <PayoffChart strategy={s} />
                    </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <MetricsPanel strategy={s} />
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">单腿到期盈亏（对照学习）</h2>
                    <SingleLegsChart strategy={s} />
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">逐步叠加演示</h2>
                    <CompositionSteps strategy={s} />
                </div>
            </div>

            {/* Right Sidebar (Details) - Independent Scroll on Desktop */}
            <div className="lg:w-[400px] xl:w-[450px] lg:border-l border-slate-200 dark:border-slate-800 lg:overflow-y-auto bg-white dark:bg-slate-950">
                <div className="p-6 lg:p-8 space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white leading-tight">{s.name}</h1>

                        {s.tags && (
                            <div className="flex flex-wrap gap-2">
                                {s.tags.map((t) => (
                                    <span
                                        key={t}
                                        className="inline-flex items-center rounded-md bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        )}

                        {s.description && (
                            <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                                {s.description}
                            </p>
                        )}
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white pb-2 border-b border-slate-100 dark:border-slate-800">
                            组成腿
                        </h2>
                        <ul className="space-y-3">
                            {s.legs.map((leg) => (
                                <li key={leg.id} className="text-sm bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
                                    {leg.kind === 'stock' ? (
                                        <div className="flex flex-col gap-1">
                                            <span className="font-medium text-slate-900 dark:text-white">股票</span>
                                            <div className="flex justify-between text-slate-600 dark:text-slate-400 text-xs">
                                                <span>{leg.position === 'long' ? '买入' : '卖出'} {leg.qty} 股</span>
                                                <span>@ {leg.entryPrice}</span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col gap-1">
                                            <span className="font-medium text-slate-900 dark:text-white">
                                                {leg.option?.type === 'call' ? '看涨 (Call)' : '看跌 (Put)'}
                                            </span>
                                            <div className="flex justify-between text-slate-600 dark:text-slate-400 text-xs">
                                                <span>{leg.position === 'long' ? '买入' : '卖出'} {leg.qty} 张</span>
                                                <span>行权价: {leg.option?.strike}</span>
                                            </div>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {(s.concept || (s.formula && s.formula.length > 0) || s.example) && (
                        <div className="space-y-6">
                            {s.concept && (
                                <div className="p-4 bg-indigo-50/50 dark:bg-indigo-950/20 rounded-xl border border-indigo-100 dark:border-indigo-900/30">
                                    <h2 className="text-sm font-bold text-indigo-900 dark:text-indigo-300 mb-2">💡 核心概念</h2>
                                    <p className="text-sm text-indigo-800 dark:text-indigo-200/80 leading-relaxed">{s.concept}</p>
                                </div>
                            )}

                            {s.formula && s.formula.length > 0 && (
                                <div>
                                    <h2 className="text-sm font-bold text-slate-900 dark:text-white mb-3">关键公式</h2>
                                    <ul className="list-disc pl-4 space-y-2">
                                        {s.formula.map((f) => (
                                            <li key={f} className="text-sm text-slate-600 dark:text-slate-400 pl-1">{f}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {s.example && (
                                <div>
                                    <h2 className="text-sm font-bold text-slate-900 dark:text-white mb-3">举例说明</h2>
                                    <div className="text-sm text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-800 leading-relaxed">
                                        {s.example}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    <div className="grid grid-cols-1 gap-4 pt-4">
                        {s.suitableFor && (
                            <div className="space-y-2">
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                                    适用场景
                                </h3>
                                <div className="text-sm text-slate-600 dark:text-slate-400 pl-3.5">
                                    {s.suitableFor.join('、')}
                                </div>
                            </div>
                        )}

                        {(s.pros || s.cons) && (
                            <div className="grid grid-cols-2 gap-4">
                                {s.pros && (
                                    <div className="space-y-2">
                                        <h3 className="font-bold text-green-700 dark:text-green-400 text-sm flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                            优点
                                        </h3>
                                        <ul className="text-sm text-slate-600 dark:text-slate-400 pl-3.5 space-y-1">
                                            {s.pros.map(p => <li key={p}>{p}</li>)}
                                        </ul>
                                    </div>
                                )}
                                {s.cons && (
                                    <div className="space-y-2">
                                        <h3 className="font-bold text-red-700 dark:text-red-400 text-sm flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                            缺点
                                        </h3>
                                        <ul className="text-sm text-slate-600 dark:text-slate-400 pl-3.5 space-y-1">
                                            {s.cons.map(c => <li key={c}>{c}</li>)}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}

                        {s.risks && (
                            <div className="space-y-2 pt-2">
                                <h3 className="font-bold text-orange-700 dark:text-orange-400 text-sm flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                                    风险提示
                                </h3>
                                <ul className="text-sm text-slate-600 dark:text-slate-400 pl-3.5 space-y-1">
                                    {s.risks.map(r => <li key={r}>{r}</li>)}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
