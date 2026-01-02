import { Link } from 'react-router-dom';
import {
    Crosshair,
    TrendingUp,
    CircleDollarSign,
    Newspaper,
    GitBranch,
    Target,
    Shield,
    Zap,
    BookOpen,
    ChevronRight,
    Bot
} from 'lucide-react';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    href: string;
    gradient: string;
    delay?: number;
}

function FeatureCard({ icon, title, description, href, gradient }: FeatureCardProps) {
    return (
        <Link
            to={href}
            className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${gradient}`}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm">
                    {icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    {title}
                    <ChevronRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">{description}</p>
            </div>
        </Link>
    );
}

interface StatItemProps {
    value: string;
    label: string;
}

function StatItem({ value, label }: StatItemProps) {
    return (
        <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">{value}</div>
            <div className="text-sm text-slate-400">{label}</div>
        </div>
    );
}

interface PrincipleCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

function PrincipleCard({ icon, title, description }: PrincipleCardProps) {
    return (
        <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <div className="shrink-0 w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                {icon}
            </div>
            <div>
                <h4 className="font-semibold text-white mb-1">{title}</h4>
                <p className="text-sm text-slate-400">{description}</p>
            </div>
        </div>
    );
}

export default function IntroPage() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
                    <Zap className="h-4 w-4" />
                    专业交易员的知识库
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Price Action Wiki
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    一站式交易知识平台，整合 ICT/SMC 概念、期权策略、市场要闻，
                    <br className="hidden md:block" />
                    帮助你建立系统化的交易框架。
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50">
                <StatItem value="13+" label="开仓检查项" />
                <StatItem value="20+" label="ICT 概念" />
                <StatItem value="15+" label="期权策略" />
                <StatItem value="24/7" label="实时要闻" />
            </div>

            {/* Feature Cards */}
            <div className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <BookOpen className="h-6 w-6 text-indigo-400" />
                    核心功能
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <FeatureCard
                        icon={<Crosshair className="h-6 w-6 text-white" />}
                        title="开仓 Checklist"
                        description="13 项系统化检查流程，从 D1 宏观趋势到 M15 微观入场，确保每笔交易都经过完整验证，避免冲动交易。"
                        href="/checklist/trend-liquidity"
                        gradient="bg-gradient-to-br from-rose-600 to-orange-600"
                    />
                    <FeatureCard
                        icon={<TrendingUp className="h-6 w-6 text-white" />}
                        title="ICT 交易概念"
                        description="深入学习 Inner Circle Trader 方法论：FVG、Order Block、流动性扫损、结构破坏等核心概念，配合图解说明。"
                        href="/ict"
                        gradient="bg-gradient-to-br from-indigo-600 to-purple-600"
                    />
                    <FeatureCard
                        icon={<CircleDollarSign className="h-6 w-6 text-white" />}
                        title="期权策略库"
                        description="从新手入门到高级策略，涵盖看涨、看跌、中性策略，每个策略配有详细的盈亏图解和使用场景说明。"
                        href="/options/strategies"
                        gradient="bg-gradient-to-br from-emerald-600 to-teal-600"
                    />
                    <FeatureCard
                        icon={<Newspaper className="h-6 w-6 text-white" />}
                        title="市场要闻"
                        description="实时追踪外汇市场重要新闻和经济数据发布，了解可能影响市场波动的关键事件。"
                        href="/news"
                        gradient="bg-gradient-to-br from-blue-600 to-cyan-600"
                    />
                    <FeatureCard
                        icon={<GitBranch className="h-6 w-6 text-white" />}
                        title="太妃决策树"
                        description="可视化的交易决策流程图，帮助你在复杂的市场情况下做出结构化的交易决策。"
                        href="/decision-tree"
                        gradient="bg-gradient-to-br from-amber-600 to-yellow-600"
                    />
                    <FeatureCard
                        icon={<Bot className="h-6 w-6 text-white" />}
                        title="AI Prompts"
                        description="专业的交易 AI 提示词，包含交易教练和 Checklist 验证助手，上传图表即可获得分析和点位建议。"
                        href="/prompts/coach"
                        gradient="bg-gradient-to-br from-violet-600 to-fuchsia-600"
                    />
                </div>
            </div>

            {/* Trading Principles */}
            <div className="mb-16">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Target className="h-6 w-6 text-amber-400" />
                    交易原则
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <PrincipleCard
                        icon={<TrendingUp className="h-5 w-5" />}
                        title="顺势而为"
                        description="永远不要逆大周期趋势交易。D1 和 H4 方向一致时，胜率最高。"
                    />
                    <PrincipleCard
                        icon={<Target className="h-5 w-5" />}
                        title="等待确认"
                        description="不做多直到低点被扫，不做空直到高点被扫。耐心等待扫损 + 位移。"
                    />
                    <PrincipleCard
                        icon={<Shield className="h-5 w-5" />}
                        title="风控第一"
                        description="每笔交易风险控制在 1-2%，止损必须放在结构点之外，无例外。"
                    />
                    <PrincipleCard
                        icon={<Zap className="h-5 w-5" />}
                        title="Kill Zone 交易"
                        description="只在高波动时段入场（伦敦/纽约开盘），避开亚盘和非农日。"
                    />
                </div>
            </div>

            {/* CTA Section */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-indigo-900/50 to-purple-900/50 border border-indigo-700/30">
                <h3 className="text-2xl font-bold text-white mb-3">准备好开始了吗？</h3>
                <p className="text-slate-400 mb-6">使用开仓 Checklist 开始你的下一笔交易</p>
                <Link
                    to="/checklist/trend-liquidity"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-colors"
                >
                    <Crosshair className="h-5 w-5" />
                    打开 Checklist
                    <ChevronRight className="h-5 w-5" />
                </Link>
            </div>

            {/* Footer Note */}
            <div className="mt-12 text-center text-sm text-slate-500">
                <p>📖 本站内容仅供学习参考，不构成投资建议。交易有风险，入市需谨慎。</p>
            </div>
        </div>
    );
}
