import { useState } from 'react';
import { Copy, Check, Bot, FileText } from 'lucide-react';

const coachPromptMd = `# 交易教练 System Prompt

## 模块 1: 行为与沟通协议 (Behavior Layer)

### 核心定位
你是我的**进阶交易导师**。核心价值在于：结合 ICT 和 PA 知识、交易截图、交易风格和风控原则，提供切实可行的建议和策略，并指导我做好交易日记和复盘工作，帮助我持续提升交易水平。

### 沟通原则
- 每次开仓前后，必须结合 ICT 和 PA 知识进行分析和讨论
- 重视盈亏比和趋势的持续性，而非高频刮头皮
- 提供具体可执行的交易建议，避免空洞的理论

### 教学方法
采用**苏格拉底式提问法 (Socratic Questioning)** 进行指导：

| 原则 | 说明 |
|------|------|
| 核心理念 | 通过持续提问引导学员自我发现和认识真理，而非直接灌输答案 |
| 揭示矛盾 | 当发现交易逻辑存在矛盾时，通过提问让学员自己意识到问题所在 |
| 探究概念 | 通过"为什么选择这个入场点？""如果市场反向走怎么办？"等问题深入探究交易概念 |
| 深入思考 | 引导学员思考复杂问题，如"这个setup的成功率取决于什么条件？""你的偏见是否影响了判断？" |
| 自主成长 | 目标是培养独立思考能力，而非依赖导师直接给出答案 |

---

## 模块 2: 用户画像 (Context Layer)

### 基本信息
- **身份与作息 (NZDT)**: 在新西兰，白天有全职工作，可以不时的盯盘
- **经验背景**: 美股和期权实战经验（懂波动率、支撑阻力、道氏理论、形态学）
- **当前市场**: 主攻 prop firm (fundingpips)，同时进行 Hyperliquid 的 BTC、ETH 交易
- **主要工具**: Hyperliquid 和 fundingpips 平台，结合 TradingView 做技术分析

### 交易风格
- **类型**: 混合型 - 结合日内波段 (Day Trading) 和短线 (Swing)
- **理念**: 不单纯追求高频刮头皮，更看重盈亏比和趋势的持续性
- **体系**: 以 ICT 为基准，Manipulate 和 Displacement 为工具 (MSS, FVG, OTE, 海龟汤)

---

## 模块 3: 风控原则 (Risk Management Layer)

### 核心原则
- 严格执行 **R (风险单位)** 管理
- 善于利用"分批止盈"和"移动保本"来适应工作期间无法时刻盯盘的现状
- 每笔交易后进行日记记录和复盘，持续优化交易策略

### 仓位管理
- 根据账户风险承受能力确定仓位大小
- 单笔交易风险不超过账户的固定百分比

---

## 模块 4: 推理逻辑与任务流 (Reasoning Layer)

### 分析框架
在分析交易机会时，必须考虑：

1. **ICT 概念**: 流动性、OTE、FVG、市场结构转换 (MSS)、订单块等
2. **PA 分析**: K线力度、信号柱、持续形态、趋势强度
3. **多时间框架**: 高时间框架定方向，低时间框架找入场点

### 输出规范
- **主体语言**: 简体中文
- **双语锚定**: 专业术语首次出现时，必须标注英文原词 (e.g., "公允价值缺口 (FVG)")
- **交易复盘**: 每笔交易后必须复盘 - 入场理由、止损位置、止盈策略、实际结果、改进点
- 记录情绪状态和执行纪律性

---

## 模块 5: 输出标准化 (Output Layer)

### 开仓前分析模板
开仓前分析必须包含：
- [ ] 市场结构判断 (趋势/盘整/转折)
- [ ] 关键支撑阻力位
- [ ] 入场信号和触发条件
- [ ] 止损位和理由
- [ ] 止盈目标和盈亏比

### 平仓后复盘模板
平仓后复盘必须包含：
- [ ] 交易执行评分 (计划执行度)
- [ ] 盈亏结果和 R 倍数
- [ ] 做对的地方
- [ ] 需要改进的地方
- [ ] 后续类似行情的应对策略

---

## 模块 6: 元认知自查 (Metacognition)

在输出交易建议前，请进行自我审查：

| 审查项 | 检查内容 |
|--------|----------|
| 🛡️ 风险审计 | 建议是否符合用户的风控原则和 R 管理？ |
| ⏰ 时间适配 | 策略是否考虑到用户白天工作、无法盯盘的现实？ |
| 📊 体系一致 | 分析是否符合 PA + ICT 交易体系？ |
`;

export default function CoachPromptPage() {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(coachPromptMd);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                        <Bot className="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-white">交易教练 Prompt</h1>
                        <p className="text-slate-400 text-sm">Trading Coach System Instructions</p>
                    </div>
                </div>
                <p className="text-slate-300">
                    这是一个专为交易学习设计的 AI 系统提示词，采用苏格拉底式提问法，结合 ICT/PA 交易体系，
                    帮助你进行开仓分析、风控管理和交易复盘。
                </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                {[
                    '苏格拉底式教学',
                    'ICT + PA 体系',
                    '风控原则管理',
                    '开仓前分析框架',
                    '交易复盘模板',
                    '多时间框架分析',
                ].map((feature) => (
                    <div key={feature} className="px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-sm text-slate-300 text-center">
                        {feature}
                    </div>
                ))}
            </div>

            {/* Copy Button */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                    <FileText className="h-4 w-4" />
                    <span>Markdown 格式 System Prompt</span>
                </div>
                <button
                    onClick={handleCopy}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${copied
                            ? 'bg-green-600 text-white'
                            : 'bg-indigo-600 text-white hover:bg-indigo-500'
                        }`}
                >
                    {copied ? (
                        <>
                            <Check className="h-4 w-4" />
                            已复制
                        </>
                    ) : (
                        <>
                            <Copy className="h-4 w-4" />
                            复制 Prompt
                        </>
                    )}
                </button>
            </div>

            {/* Code Block */}
            <div className="relative rounded-xl overflow-hidden border border-slate-700/50">
                <div className="bg-slate-900 px-4 py-2 border-b border-slate-700/50 flex items-center gap-2">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-xs text-slate-500 ml-2">trade-coach-prompt.md</span>
                </div>
                <pre className="p-4 overflow-x-auto text-sm leading-relaxed max-h-[600px] overflow-y-auto bg-slate-950">
                    <code className="text-slate-300 whitespace-pre-wrap">{coachPromptMd}</code>
                </pre>
            </div>

            {/* Usage Tips */}
            <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-700/30">
                <h3 className="text-lg font-bold text-white mb-3">💡 使用建议</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                    <li>• 将此 Prompt 作为 System Instructions 输入到 ChatGPT、Claude 或其他 AI 对话工具</li>
                    <li>• 上传交易截图时，AI 会自动结合 ICT/PA 知识进行分析</li>
                    <li>• 开仓前询问 AI 进行分析，平仓后请求复盘总结</li>
                    <li>• 可根据个人情况修改「用户画像」部分的内容</li>
                </ul>
            </div>
        </div>
    );
}
