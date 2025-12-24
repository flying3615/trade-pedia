import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { X, ZoomIn } from 'lucide-react';
import { ictConcepts, type ICTConcept } from '../../data/ict-concepts';

export default function ICTConceptDetail() {
    const { id } = useParams<{ id: string }>();
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);

    const concept = ictConcepts.find((c) => c.id === id);

    // Handle ESC key to close modal
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isImageModalOpen) {
                setIsImageModalOpen(false);
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isImageModalOpen]);

    if (!concept) {
        return <Navigate to="/ict" replace />;
    }

    const sections: { key: keyof ICTConcept['explanation']; title: string }[] = [
        { key: 'overview', title: '概述' },
        { key: 'setup', title: '建仓条件' },
        { key: 'entry', title: '入场时机' },
        { key: 'exit', title: '出场条件' },
        { key: 'psychology', title: '心理要点' },
        { key: 'examples', title: '实例说明' }
    ];

    return (
        <>
            <div className="flex flex-col lg:flex-row h-full overflow-hidden bg-white dark:bg-slate-950">
                {/* Left Column: Image (Sticky/Independent) */}
                <div className="lg:w-[45%] h-64 lg:h-full bg-slate-100 dark:bg-slate-900 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 flex items-center justify-center p-4 lg:p-8 relative">
                    <div className="relative w-full h-full flex items-center justify-center group">
                        <img
                            src={`/images/ict/${concept.filename}`}
                            alt={concept.title}
                            className="max-w-full max-h-full object-contain shadow-sm rounded-lg cursor-pointer transition-transform hover:scale-[1.02]"
                            onClick={() => setIsImageModalOpen(true)}
                        />
                        {/* Zoom hint overlay */}
                        <div
                            className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-colors cursor-pointer rounded-lg"
                            onClick={() => setIsImageModalOpen(true)}
                        >
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white px-3 py-2 rounded-lg flex items-center gap-2">
                                <ZoomIn className="w-4 h-4" />
                                <span className="text-sm">点击放大</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Content (Scrollable) */}
                <div className="flex-1 h-full overflow-y-auto bg-white dark:bg-slate-950">
                    <div className="max-w-3xl mx-auto px-6 py-8 lg:px-10 lg:py-12 space-y-10">

                        {/* Header */}
                        <div className="space-y-4 border-b border-slate-100 dark:border-slate-800 pb-8">
                            <div className="flex items-center gap-3 flex-wrap">
                                <span className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${concept.category === 'bullish' ? 'bg-green-50 text-green-700 ring-green-600/20 dark:bg-green-900/20 dark:text-green-400 dark:ring-green-400/20' :
                                    concept.category === 'bearish' ? 'bg-red-50 text-red-700 ring-red-600/20 dark:bg-red-900/20 dark:text-red-400 dark:ring-red-400/20' :
                                        'bg-slate-50 text-slate-700 ring-slate-600/20 dark:bg-slate-800 dark:text-slate-400 dark:ring-slate-400/20'
                                    }`}>
                                    {concept.category === 'bullish' ? '看涨' :
                                        concept.category === 'bearish' ? '看跌' : '中性'}
                                </span>
                                <div className="flex gap-2 flex-wrap">
                                    {concept.keywords.map((keyword, index) => (
                                        <span key={index} className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 dark:bg-indigo-900/20 dark:text-indigo-400 dark:ring-indigo-400/20">
                                            {keyword}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white leading-tight">{concept.title}</h1>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">{concept.description}</p>
                        </div>

                        {/* Sections */}
                        <div className="space-y-12">
                            {sections.map((section) => (
                                <div key={section.key} id={section.key}>
                                    <h2 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                                        <span className="w-1.5 h-6 bg-indigo-500 rounded-full mr-3"></span>
                                        {section.title}
                                    </h2>
                                    <div className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
                                        {(() => {
                                            const content = concept.explanation[section.key];
                                            const paragraphs = content.split('\n');

                                            return paragraphs.map((paragraph, index) => {
                                                if (paragraph.trim() === '') return null;

                                                // Inline Image [IMG:filename.png]
                                                if (paragraph.startsWith('[IMG:') && paragraph.endsWith(']')) {
                                                    const imageName = paragraph.slice(5, -1);
                                                    return (
                                                        <div key={`img-${index}`} className="my-6">
                                                            <img
                                                                src={`/images/ict/${imageName}`}
                                                                alt={imageName}
                                                                className="max-w-full rounded-lg shadow-md border border-slate-200 dark:border-slate-700"
                                                            />
                                                        </div>
                                                    );
                                                }

                                                // Bullet points
                                                if (paragraph.startsWith('•')) {
                                                    return (
                                                        <div key={`bullet-${index}`} className="flex items-start mb-2 pl-2">
                                                            <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                                                            <span className="flex-1">{paragraph.substring(2)}</span>
                                                        </div>
                                                    );
                                                }

                                                // Numbered Steps
                                                if (/^\d+\./.test(paragraph.trim())) {
                                                    const [stepNumber, ...rest] = paragraph.split(':');
                                                    return (
                                                        <div key={`step-${index}`} className="flex items-start mb-4 pl-1 group">
                                                            <span className="font-bold text-indigo-600 dark:text-indigo-400 mr-2 shrink-0">{stepNumber}:</span>
                                                            <span className="font-medium text-slate-800 dark:text-slate-200">{rest.join(':')}</span>
                                                        </div>
                                                    );
                                                }

                                                // Core Concepts / Tips boxes
                                                if (paragraph.includes('核心理念') || paragraph.includes('核心逻辑') || paragraph.includes('总结一句话')) {
                                                    return (
                                                        <div key={`core-${index}`} className="my-4 p-4 bg-indigo-50 dark:bg-indigo-950/30 border-l-4 border-indigo-500 rounded-r-md">
                                                            <p className="font-medium text-indigo-900 dark:text-indigo-200">{paragraph}</p>
                                                        </div>
                                                    );
                                                }

                                                // Action / Strategy boxes
                                                if (paragraph.includes('操作') || paragraph.includes('策略') || paragraph.includes('小贴士')) {
                                                    return (
                                                        <div key={`action-${index}`} className="my-4 p-4 bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-400 dark:border-amber-500 rounded-r-md">
                                                            <p className="font-medium text-amber-900 dark:text-amber-200">{paragraph}</p>
                                                        </div>
                                                    );
                                                }

                                                // Standard Paragraph
                                                return (
                                                    <p key={`para-${index}`} className="mb-4 last:mb-0">
                                                        {paragraph}
                                                    </p>
                                                );
                                            });
                                        })()}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Footer Spacer */}
                        <div className="h-20"></div>
                    </div>
                </div>
            </div>

            {/* Image Modal */}
            {isImageModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                    onClick={() => setIsImageModalOpen(false)}
                >
                    {/* Close button */}
                    <button
                        className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                        onClick={() => setIsImageModalOpen(false)}
                    >
                        <X className="w-6 h-6 text-white" />
                    </button>

                    {/* Hint text */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
                        点击任意位置关闭 · 按 ESC 退出
                    </div>

                    {/* Full size image */}
                    <img
                        src={`/images/ict/${concept.filename}`}
                        alt={concept.title}
                        className="max-w-[95vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
}

