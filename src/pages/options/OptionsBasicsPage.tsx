import { Link } from 'react-router-dom'
import GlossaryTooltip from '../../components/options/GlossaryTooltip'

export default function OptionsBasicsPage() {
    return (
        <div className="max-w-4xl mx-auto pb-20 space-y-12">
            <section className="space-y-4">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">欢迎来到期权的世界！</h1>
                <p className="text-xl text-slate-600 dark:text-slate-400">
                    别担心，期权没有想象中那么复杂。在这里，我们将用最简单的比喻，带你一步步揭开它的面纱。
                </p>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">第一步：理解核心概念</h2>
                <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm dark:bg-slate-900 dark:border-slate-800">
                    <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-white">什么是期权？一张“未来的优惠券”</h3>
                    <div className="space-y-4 text-slate-600 dark:text-slate-300">
                        <p>
                            你可以把
                            <GlossaryTooltip term="期权 (Option)">期权</GlossaryTooltip>
                            想象成一张“优惠券”或“预售券”。这张券给你在未来某个特定时间（
                            <GlossaryTooltip term="到期日 (Expiration Date)">到期日</GlossaryTooltip>
                            ），以一个约定好的价格（
                            <GlossaryTooltip term="执行价 (Strike Price)">执行价</GlossaryTooltip>
                            ），买入或卖出某样东西（比如股票）的“权利”。
                        </p>
                        <p>
                            关键在于，这仅仅是一个“权利”，而不是“义务”。就像你有一张汉堡优惠券，如果汉堡店的现价远高于你的券面价，你会很乐意使用它；但如果现价更便宜，你可以选择不用，优惠券过期作废，你损失的只是买券的钱。
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <strong><GlossaryTooltip term="看涨期权 (Call)">看涨期权 (Call)</GlossaryTooltip></strong>
                                ：一张允许你“买入”的优惠券，当你认为价格会涨的时候使用。好比一张“低价购房券”。
                            </li>
                            <li>
                                <strong><GlossaryTooltip term="看跌期权 (Put)">看跌期权 (Put)</GlossaryTooltip></strong>
                                ：一张允许你“卖出”的优惠券，当你认为价格会跌的时候使用。好比一张“高价回收券”或“财产保险单”。
                            </li>
                        </ul>
                        <p>理解“权利而非义务”这一点，你就已经掌握了期权最核心的秘密！</p>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">第二步：认识交易双方：买方与卖方</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm dark:bg-slate-900 dark:border-slate-800">
                        <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-white">买方 (Long)</h3>
                        <div className="space-y-3 text-slate-600 dark:text-slate-300">
                            <p>支付一笔费用（<GlossaryTooltip term="权利金 (Premium)">权利金</GlossaryTooltip>），获得权利。他们是风险的承担者，但风险被锁定在所支付的权利金范围内。</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>最大亏损</strong>：已支付的权利金。</li>
                                <li><strong>最大盈利</strong>：理论上无限（对于看涨）或巨大（对于看跌）。</li>
                                <li><strong>心态</strong>：“我想用小成本博取大收益”。</li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm dark:bg-slate-900 dark:border-slate-800">
                        <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-white">卖方 (Short)</h3>
                        <div className="space-y-3 text-slate-600 dark:text-slate-300">
                            <p>收取买方支付的权利金，并承担在特定条件下履行合约的义务。他们是权利的授予者，通过承担风险来赚取时间价值。</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>最大盈利</strong>：收到的权利金。</li>
                                <li><strong>最大亏损</strong>：理论上无限（特别是裸卖看涨）。</li>
                                <li><strong>心态</strong>：“我认为市场不会像买方预期的那样波动，我想赚取这笔权利金”。</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">核心概念：价内 vs. 价外 (Moneyness)</h2>
                <p className="text-slate-500 dark:text-slate-400">“Moneyness”描述了期权的执行价（Strike）与标的资产当前价格的关系，这直接决定了期权是否具有内在价值。</p>
                <div className="grid gap-6 md:grid-cols-3">
                    <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm dark:bg-slate-900 dark:border-slate-800">
                        <h3 className="text-lg font-semibold mb-3 text-emerald-600 dark:text-emerald-400">ITM - 价内</h3>
                        <div className="text-slate-600 dark:text-slate-300">
                            <p className="mb-2">如果立即行权，该期权具有内在价值。</p>
                            <ul className="list-disc pl-5 text-sm">
                                <li><strong>看涨:</strong> 执行价 &lt; 标的现价</li>
                                <li><strong>看跌:</strong> 执行价 &gt; 标的现价</li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm dark:bg-slate-900 dark:border-slate-800">
                        <h3 className="text-lg font-semibold mb-3 text-slate-900 dark:text-slate-100">ATM - 平价</h3>
                        <p className="text-slate-600 dark:text-slate-300">
                            执行价非常接近或等于标的现价。通常流动性最好，时间价值最高。
                        </p>
                    </div>
                    <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm dark:bg-slate-900 dark:border-slate-800">
                        <h3 className="text-lg font-semibold mb-3 text-slate-500 dark:text-slate-400">OTM - 价外</h3>
                        <div className="text-slate-600 dark:text-slate-300">
                            <p className="mb-2">立即行权无内在价值，价值全为时间价值。</p>
                            <ul className="list-disc pl-5 text-sm">
                                <li><strong>看涨:</strong> 执行价 &gt; 标的现价</li>
                                <li><strong>看跌:</strong> 执行价 &lt; 标的现价</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">核心概念：认识"希腊字母"(The Greeks)</h2>
                <div className="space-y-4">
                    <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm dark:bg-slate-900 dark:border-slate-800">
                        <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white flex items-center gap-2">
                            <span className="text-2xl font-serif text-indigo-500">Δ</span> Delta: 速度
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300">衡量股价每变动 $1，期权价格会变动多少。也可以近似看作期权到期成为实值的概率。</p>
                    </div>
                    <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm dark:bg-slate-900 dark:border-slate-800">
                        <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white flex items-center gap-2">
                            <span className="text-2xl font-serif text-indigo-500">Γ</span> Gamma: 加速度
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300">衡量股价每变动 $1，Delta 会变动多少。就像油门，Gamma越高，Delta变化越快。</p>
                    </div>
                    <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm dark:bg-slate-900 dark:border-slate-800">
                        <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white flex items-center gap-2">
                            <span className="text-2xl font-serif text-indigo-500">Θ</span> Theta: 时间流逝
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300">衡量每天时间流逝导致的价值损耗。是买方的敌人，卖方的朋友。</p>
                    </div>
                    <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm dark:bg-slate-900 dark:border-slate-800">
                        <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white flex items-center gap-2">
                            <span className="text-2xl font-serif text-indigo-500">V</span> Vega: 波动率
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300">衡量隐含波动率(IV)变化对价格的影响。恐慌时IV升高，期权变贵。</p>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">第三步：从四个基础策略开始</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    <Link to="/options/strategies/long-call" className="block group">
                        <div className="h-full p-6 rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md hover:border-indigo-500 dark:bg-slate-900 dark:border-slate-800 dark:hover:border-indigo-500">
                            <h3 className="text-lg font-semibold mb-2 text-indigo-600 dark:text-indigo-400 group-hover:underline">买入看涨期权 (Long Call) &rarr;</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-2">最纯粹的看涨方式。以小博大，风险有限，收益无限。</p>
                            <p className="text-xs font-medium text-slate-500 uppercase">适合：强烈看涨</p>
                        </div>
                    </Link>

                    <Link to="/options/strategies/long-put" className="block group">
                        <div className="h-full p-6 rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md hover:border-indigo-500 dark:bg-slate-900 dark:border-slate-800 dark:hover:border-indigo-500">
                            <h3 className="text-lg font-semibold mb-2 text-indigo-600 dark:text-indigo-400 group-hover:underline">买入看跌期权 (Long Put) &rarr;</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-2">看跌获利或为持仓买保险。风险有限，收益巨大。</p>
                            <p className="text-xs font-medium text-slate-500 uppercase">适合：强烈看跌 / 保护持仓</p>
                        </div>
                    </Link>

                    <Link to="/options/strategies/covered-call" className="block group">
                        <div className="h-full p-6 rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md hover:border-indigo-500 dark:bg-slate-900 dark:border-slate-800 dark:hover:border-indigo-500">
                            <h3 className="text-lg font-semibold mb-2 text-indigo-600 dark:text-indigo-400 group-hover:underline">备兑看涨 (Covered Call) &rarr;</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-2">持有股票并卖出看涨期权。把股票“出租”赚取租金。</p>
                            <p className="text-xs font-medium text-slate-500 uppercase">适合：长期持股，温和看涨/中性</p>
                        </div>
                    </Link>

                    <Link to="/options/strategies/protective-put" className="block group">
                        <div className="h-full p-6 rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md hover:border-indigo-500 dark:bg-slate-900 dark:border-slate-800 dark:hover:border-indigo-500">
                            <h3 className="text-lg font-semibold mb-2 text-indigo-600 dark:text-indigo-400 group-hover:underline">配对看跌 (Protective Put) &rarr;</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-2">给股票买保险。保留上涨收益，锁定下跌风险。</p>
                            <p className="text-xs font-medium text-slate-500 uppercase">适合：持股但担心短期风险</p>
                        </div>
                    </Link>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">新手常见问题</h2>
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 space-y-6">
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-1">Q: 期权交易需要多少资金开始？</h4>
                        <p className="text-slate-600 dark:text-slate-300">A: 买入期权最低可能只需几百元，但建议至少准备5000-10000元作为初始资金，以便分散风险和应对波动。</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-1">Q: 期权交易风险很大吗？</h4>
                        <p className="text-slate-600 dark:text-slate-300">A: 取决于策略。作为买方，最大损失是权利金（有限）。作为裸卖方，风险可能是无限的。关键在于理解策略并合理控制仓位。</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-1">Q: 我应该从哪种策略开始？</h4>
                        <p className="text-slate-600 dark:text-slate-300">A: 建议从简单的买入看涨(Long Call)或看跌(Long Put)开始，风险可控且逻辑简单。持有正股的朋友可以尝试备兑(Covered Call)。</p>
                    </div>
                </div>
            </section>

            <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-center">
                <Link to="/options/strategies">
                    <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow transition-colors">
                        进入策略库探索更多
                    </button>
                </Link>
            </div>
        </div>
    )
}
