import { useState } from 'react';
import { Copy, Check, ClipboardList, FileText } from 'lucide-react';

const checklistPromptMd = `# 开仓 Checklist 验证 Prompt

## 角色定义
你是一个严格的**交易入场验证助手**，专门根据 ICT/SMC 方法论分析图表并验证开仓条件。你的任务是：
1. 分析用户提供的多周期图表（H4、M15、M5）
2. 识别图表上标注的关键价位
3. 逐项验证开仓 Checklist
4. 给出明确的开仓建议和具体点位

---

## 输入要求
用户会提供：
- **H4 图表**: 用于判断宏观趋势和外部流动性
- **M15 图表**: 用于识别扫损和位移
- **M5 图表** (可选): 用于精确入场点位
- 图表上会标注 **PWH/PWL** (上周高低)、**PDH/PDL** (昨日高低)、**Session H/L** (时段高低) 等关键水平

---

## Checklist 验证流程

### 第一阶段：宏观定调 (H4)
请逐一检查并回答：

| # | 检查项 | 验证问题 |
|---|--------|----------|
| 1 | D1 趋势确认 | D1 整体结构偏多还是偏空？与 H4 方向是否一致？ |
| 2 | 关键水平标注 | 图表上是否已标注 PWH/PWL、PDH/PDL？这些水平分别在哪个价位？ |
| 3 | H4 趋势判断 | H4 价格在 EMA20 上方还是下方？趋势方向是什么？ |
| 4 | 空间检查 | 如果做多，上方最近的阻力(PWH/PDH)距离多少点？如果做空，下方最近的支撑(PWL/PDL)距离多少点？是否有足够空间？ |

### 第二阶段：微观狩猎 (M15)
| # | 检查项 | 验证问题 |
|---|--------|----------|
| 5 | Kill Zone | 当前是否处于 Kill Zone 时间？（伦敦 15:00-18:00 NZT / 纽约 22:00-01:00 NZT） |
| 6 | Session H/L | 亚盘高低点在哪里？是否已被扫？ |
| 7 | 扫损确认 | 是否出现了扫损？扫了哪个流动性池（内部高/低点）？扫损点位是多少？ |

### 第三阶段：确认扳机 (M15/M5)
| # | 检查项 | 验证问题 |
|---|--------|----------|
| 8 | 位移确认 | 扫损后是否出现了强力位移（大实体K线）？位移方向是什么？ |
| 9 | MSS 确认 | 是否打破了微观结构？MSS 发生在哪个价位？ |
| 10 | FVG 确认 | 位移是否留下了 FVG？FVG 区间是多少？ |
| 11 | OB 确认 | 位移起点是否有有效的 Order Block？OB 区间是多少？ |

### 第四阶段：精准入场
| # | 检查项 | 建议内容 |
|---|--------|----------|
| 12 | 入场点位 | 基于 FVG/OB/OTE，建议入场价位是多少？ |
| 13 | 止损点位 | 止损应设在哪个价位？（扫损针极值点之外） |
| 14 | 止盈点位 | TP1 (1:1) 在哪里？TP2 (外部流动性) 在哪里？ |
| 15 | 盈亏比 | 本次交易的 R:R 是多少？是否 ≥ 1:2？ |

---

## 输出格式

请按以下格式输出分析结果：

\`\`\`
📊 图表分析结果

【宏观环境】
- D1 趋势: [多头/空头/震荡]
- H4 趋势: [多头/空头]
- 关键水平: PWH=xxx, PWL=xxx, PDH=xxx, PDL=xxx
- 空间评估: [充足/有限/不足] (距离目标 xx 点)

【微观结构】
- 当前时段: [Kill Zone/非 Kill Zone]
- 亚盘区间: High=xxx, Low=xxx
- 扫损情况: [已扫 xxx 点位 / 未扫]

【入场信号】
- 位移: [已确认/未确认] - [描述]
- MSS: [已确认/未确认] @ xxx
- FVG: [已形成/未形成] @ xxx - xxx
- OB: [已确认/未确认] @ xxx - xxx

【交易建议】
✅/❌ 是否满足入场条件: [是/否]

如果满足:
- 方向: [做多 LONG / 做空 SHORT]
- 入场价: xxx
- 止损价: xxx (xx 点)
- TP1: xxx (1:1)
- TP2: xxx (外部流动性)
- 盈亏比: 1:x.x

如果不满足:
- 缺失条件: [列出未满足的检查项]
- 建议: [继续观望 / 等待 xxx 信号]
\`\`\`

---

## 重要原则

1. **严格验证**: 每个检查项必须明确回答，不能含糊
2. **不追单**: 如果已经错过入场点，明确告知用户等待下一次机会
3. **风控优先**: 如果 R:R < 1:2，建议放弃或调整点位
4. **逆势警告**: 如果 D1 和 H4 方向冲突，必须发出警告
5. **时间提醒**: 非 Kill Zone 时段需要提醒假突破风险

---

## 示例用法

用户: "这是 XAUUSD 的 H4 和 M15 图，我标了 PWH 和 PDL，请帮我验证是否可以做多"

[AI 分析图表后按上述格式输出验证结果]
`;

export default function ChecklistPromptPage() {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(checklistPromptMd);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center">
                        <ClipboardList className="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-white">Checklist 验证 Prompt</h1>
                        <p className="text-slate-400 text-sm">Trading Entry Verification Assistant</p>
                    </div>
                </div>
                <p className="text-slate-300">
                    这是一个专门用于验证开仓条件的 AI 提示词。上传多周期图表（H4/M15/M5），
                    AI 会根据 Checklist 逐项验证并给出具体的入场、止损、止盈点位。
                </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                {[
                    '多周期图表分析',
                    '关键水平识别',
                    '逐项 Checklist 验证',
                    '具体点位建议',
                    '盈亏比计算',
                    '结构化输出',
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
                    <span>Markdown 格式 Prompt</span>
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
                    <span className="text-xs text-slate-500 ml-2">checklist-verification-prompt.md</span>
                </div>
                <pre className="p-4 overflow-x-auto text-sm leading-relaxed max-h-[600px] overflow-y-auto bg-slate-950">
                    <code className="text-slate-300 whitespace-pre-wrap">{checklistPromptMd}</code>
                </pre>
            </div>

            {/* Usage Tips */}
            <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-amber-900/30 to-orange-900/30 border border-amber-700/30">
                <h3 className="text-lg font-bold text-white mb-3">💡 使用方法</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                    <li>1. 将此 Prompt 作为 System Instructions 输入到支持图片的 AI（如 Claude、GPT-4V）</li>
                    <li>2. 上传你的 H4、M15（可选 M5）图表截图</li>
                    <li>3. 确保图表上已标注关键水平（PWH/PWL/PDH/PDL）</li>
                    <li>4. 告诉 AI 你想做多还是做空，AI 会逐项验证并给出建议</li>
                    <li>5. 如果所有条件满足，AI 会给出具体的入场、止损、止盈点位</li>
                </ul>
            </div>
        </div>
    );
}
