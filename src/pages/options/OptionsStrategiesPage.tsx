import { useMemo, useState } from 'react'
import { strategies } from '../../data/options/strategies'
import StrategyCard from '../../components/options/StrategyCard'
import { loadUserStrategies } from '../../lib/options/userStrategies'
import { Filter, Layers, Zap } from 'lucide-react'

type Group = { name: string; items: typeof strategies }
type GroupingMode = 'outlook' | 'difficulty'

/** 按方向分组 */
function classifyByOutlook(name: string, tags?: string[]): '看多' | '看空' | '中性' {
    const text = `${name} ${(tags ?? []).join(' ')}`
    const has = (kw: string) => text.includes(kw)
    if (has('看多') || has('牛市')) return '看多'
    if (has('看空') || has('熊市')) return '看空'
    return '中性'
}

/** 按策略内在复杂度（期权腿数量）进行分组 */
function classifyByDifficulty(s: { id: string; legs: any[] }): '新手入门' | '中级策略' | '高级策略' {
    // 特例：某些策略虽然腿数不多，但概念上属于高级
    if (s.id === 'box-spread' || s.id === 'calendar-spread') {
        return '高级策略'
    }

    const legs = s.legs?.length ?? 0
    if (legs <= 1) return '新手入门'
    if (legs === 2) return '中级策略'
    return '高级策略'
}

export default function OptionsStrategiesPage() {
    const [groupingMode, setGroupingMode] = useState<GroupingMode>('outlook')

    const groups = useMemo<Group[]>(() => {
        const map = new Map<string, typeof strategies>()

        if (groupingMode === 'outlook') {
            for (const s of strategies) {
                const g = classifyByOutlook(s.name, s.tags)
                if (!map.has(g)) map.set(g, [])
                map.get(g)!.push(s)
            }
            const order: Array<'看多' | '看空' | '中性'> = ['看多', '看空', '中性']
            const out: Group[] = order
                .filter((g) => map.has(g))
                .map((g) => ({ name: g as string, items: map.get(g)! } as Group))
            return out
        } else {
            for (const s of strategies) {
                const g = classifyByDifficulty(s)
                if (!map.has(g)) map.set(g, [])
                map.get(g)!.push(s)
            }
            const order: Array<'新手入门' | '中级策略' | '高级策略'> = ['新手入门', '中级策略', '高级策略']
            const out: Group[] = order
                .filter((g) => map.has(g))
                .map((g) => ({ name: g as string, items: map.get(g)! } as Group))
            return out
        }
    }, [groupingMode])

    // 用户自定义策略（始终显示在最前）
    const userStrategiesGroup = useMemo<Group | null>(() => {
        const mine = loadUserStrategies()
        if (mine.length) {
            return { name: '我的策略', items: mine }
        }
        return null
    }, [])

    return (
        <div className="space-y-8 pb-12">
            <div className="border-b border-gray-200 pb-5 dark:border-gray-800">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">期权策略库</h1>
                <p className="mt-2 max-w-4xl text-sm text-gray-500 dark:text-gray-400">
                    浏览我们精心挑选和分类的多种期权策略，助您在不同市场环境下找到最佳交易方案。
                </p>
            </div>

            <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <Filter className='w-4 h-4' />
                    分组方式：
                </span>
                <div className="flex rounded-md bg-gray-100 p-1 dark:bg-slate-800">
                    <button
                        onClick={() => setGroupingMode('outlook')}
                        className={`flex items-center gap-2 rounded-sm px-3 py-1.5 text-sm font-medium transition-all ${groupingMode === 'outlook'
                                ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white'
                                : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                            }`}
                    >
                        <Zap className="h-4 w-4" />
                        按多空方向
                    </button>
                    <button
                        onClick={() => setGroupingMode('difficulty')}
                        className={`flex items-center gap-2 rounded-sm px-3 py-1.5 text-sm font-medium transition-all ${groupingMode === 'difficulty'
                                ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white'
                                : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                            }`}
                    >
                        <Layers className="h-4 w-4" />
                        按策略难度
                    </button>
                </div>
            </div>

            <div className="space-y-12">
                {userStrategiesGroup && (
                    <div>
                        <h2 className="mb-6 flex items-center text-xl font-bold text-slate-900 dark:text-white">
                            <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                                ★
                            </span>
                            {userStrategiesGroup.name}
                        </h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {userStrategiesGroup.items.map((s) => (
                                <StrategyCard key={s.id} s={s} />
                            ))}
                        </div>
                    </div>
                )}

                {groups.map((g) => (
                    <div key={g.name}>
                        <h2 className="mb-6 flex items-center text-xl font-bold text-slate-900 dark:text-white">
                            <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                                {g.name === '看多' && '📈'}
                                {g.name === '看空' && '📉'}
                                {g.name === '中性' && '⚖️'}
                                {g.name === '新手入门' && '👶'}
                                {g.name === '中级策略' && '👨‍🎓'}
                                {g.name === '高级策略' && '🧙‍♂️'}
                            </span>
                            {g.name}
                        </h2>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {g.items.map((s) => (
                                <StrategyCard key={s.id} s={s} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
