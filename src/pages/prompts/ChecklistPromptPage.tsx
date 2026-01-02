import { useState } from 'react';
import { Copy, Check, ClipboardList, FileCode } from 'lucide-react';

const checklistPrompt = `<!-- Checklist Prompt 内容待更新 -->

<checklist_prompt>
    <description>
        这里将放置 Checklist 相关的 AI Prompt 内容。
        请稍后提供具体内容进行更新。
    </description>
</checklist_prompt>`;

export default function ChecklistPromptPage() {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(checklistPrompt);
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
                        <h1 className="text-2xl font-bold text-white">Checklist Prompt</h1>
                        <p className="text-slate-400 text-sm">Trading Checklist AI Instructions</p>
                    </div>
                </div>
                <p className="text-slate-300">
                    这是用于辅助开仓检查的 AI 提示词，内容待更新。
                </p>
            </div>

            {/* Copy Button */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                    <FileCode className="h-4 w-4" />
                    <span>XML 格式 Prompt</span>
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
                    <span className="text-xs text-slate-500 ml-2">checklist-prompt.xml</span>
                </div>
                <pre className="p-4 overflow-x-auto text-sm leading-relaxed max-h-[600px] overflow-y-auto bg-slate-950">
                    <code className="text-slate-300 whitespace-pre">{checklistPrompt}</code>
                </pre>
            </div>

            {/* Placeholder Notice */}
            <div className="mt-8 p-6 rounded-xl bg-amber-900/20 border border-amber-700/30">
                <h3 className="text-lg font-bold text-amber-400 mb-2">⏳ 内容待更新</h3>
                <p className="text-sm text-slate-300">
                    此页面的 Prompt 内容将在后续更新，请稍后提供具体内容。
                </p>
            </div>
        </div>
    );
}
