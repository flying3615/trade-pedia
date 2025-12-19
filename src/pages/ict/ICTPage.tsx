import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ictConcepts, type ICTConcept } from '../../data/ict-concepts';

// 分类颜色映射
const categoryColors = {
  bullish: 'border-blue-300 bg-blue-50/80',
  bearish: 'border-red-300 bg-red-50/80',
  neutral: 'border-gray-300 bg-gray-50/80',
};

// 组件：图片展示卡片
function ImageCard({ concept }: { concept: ICTConcept }) {
  const categoryColorClass = categoryColors[concept.category];

  return (
    <div className={`rounded-xl overflow-hidden shadow-lg border-2 ${categoryColorClass} hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col h-full`}>
      <div className="relative h-64 bg-white border-b border-gray-100">
        <img
          src={`/images/ict/${concept.filename}`}
          alt={concept.title}
          className="absolute inset-0 w-full h-full object-contain p-4"
        />
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${concept.category === 'bullish' ? 'bg-green-100 text-green-800' :
            concept.category === 'bearish' ? 'bg-red-100 text-red-800' :
              'bg-gray-100 text-gray-800'
            }`}>
            {concept.category === 'bullish' ? '看涨' :
              concept.category === 'bearish' ? '看跌' : '中性'}
          </span>
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1" title={concept.title}>{concept.title}</h3>
        <p className="text-sm text-gray-600 mb-3 flex-1 overflow-hidden line-clamp-2" title={concept.description}>
          {concept.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {concept.keywords.slice(0, 3).map((keyword, index) => (
            <span key={`${concept.id}-keyword-${index}`} className="px-2 py-1 bg-white/60 text-gray-600 border border-gray-200 rounded-full text-xs">
              {keyword}
            </span>
          ))}
          {concept.keywords.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded-full text-xs">+{concept.keywords.length - 3}</span>
          )}
        </div>

        <Link
          to={`/ict/${concept.id}`}
          className="w-full py-2.5 px-4 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors duration-200 text-sm font-medium text-center flex items-center justify-center group"
        >
          查看详细说明
          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default function ICTPage() {
  const [filter, setFilter] = useState<'all' | 'bullish' | 'bearish' | 'neutral'>('all');

  // 预计算筛选结果，避免在渲染时计算
  const filteredConcepts = filter === 'all'
    ? ictConcepts
    : ictConcepts.filter(concept => concept.category === filter);

  const filterButtons = [
    { key: 'all', label: '全部', count: ictConcepts.length },
    { key: 'bullish', label: '看涨', count: ictConcepts.filter(c => c.category === 'bullish').length },
    { key: 'bearish', label: '看跌', count: ictConcepts.filter(c => c.category === 'bearish').length },
    { key: 'neutral', label: '中性', count: ictConcepts.filter(c => c.category === 'neutral').length },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* 页面头部 */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              ICT 交易概念图解
            </h1>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Inner Circle Trader (ICT) 交易方法的核心概念可视化展示，点击卡片查看详细解读
            </p>
          </div>
        </div>
      </div>

      {/* 筛选器 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl p-1.5 shadow-sm border inline-flex">
            <div className="flex space-x-1">
              {filterButtons.map((button) => (
                <button
                  key={button.key}
                  onClick={() => setFilter(button.key as any)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center ${filter === button.key
                    ? 'bg-slate-800 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                >
                  {button.label}
                  <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${filter === button.key ? 'bg-slate-600 text-white' : 'bg-gray-100 text-gray-600'
                    }`}>
                    {button.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 图片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-12">
          {filteredConcepts.map((concept) => (
            <ImageCard key={concept.id} concept={concept} />
          ))}
        </div>

        {/* 空状态 */}
        {filteredConcepts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-gray-500 text-lg">暂无相关图片</p>
          </div>
        )}
      </div>
    </div>
  );
}