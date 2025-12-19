// 决策树详细讲解Modal组件


import React, { useState } from 'react';
import { X, TrendingUp, Target, BarChart3, Clock, Zap, Calculator } from 'lucide-react';

interface DecisionTreeModalProps {
  isOpen: boolean;
  onClose: () => void;
  nodeData: {
    label: string;
    action?: string;
    category?: string;
    details?: string;
    // 新增的详细讲解数据
    description?: string;
    entryRules?: string[];
    riskManagement?: {
      stopLoss: string;
      target: string;
      riskReward: string;
    };
    psychology?: string[];
    examples?: {
      bullish: string;
      bearish: string;
      bullishImage?: string;
      bearishImage?: string;
      additionalImages?: string[];
    };
    statistics?: {
      winRate: string;
      avgBars: string;
      riskReward: string;
    };
    keyLevels?: string[];
  };
}

// 凯利公式计算函数
function calculateKellyPosition(winRate: number, riskReward: number) {
  // 凯利公式: f* = (bp - q) / b
  // 其中 b = 盈亏比, p = 胜率, q = 败率 (1-p)
  const p = winRate / 100;
  const q = 1 - p;
  const b = riskReward;

  const kellyFraction = (b * p - q) / b;

  // 限制凯利比例在0-100%之间，且考虑风险管理，保守使用50%的凯利比例
  const conservativeKelly = Math.max(0, Math.min(kellyFraction * 0.5, 1));

  return {
    kellyFraction: kellyFraction * 100,
    conservativeKelly: conservativeKelly * 100,
    recommendation: conservativeKelly * 100, // 推荐仓位就是保守凯利
  };
}

// 解析胜率字符串为数字
function parseWinRate(winRateStr: string): number {
  const num = parseFloat(winRateStr.replace('%', ''));
  return isNaN(num) ? 0 : num;
}

// 解析盈亏比字符串为数字
function parseRiskReward(riskRewardStr: string): number {
  const ratio = riskRewardStr.replace(':', '/').replace('≥', '').replace('>', '').trim();
  const parts = ratio.split('/');
  if (parts.length === 2) {
    const reward = parseFloat(parts[0]);
    const risk = parseFloat(parts[1]);
    return isNaN(reward) || isNaN(risk) || risk === 0 ? 0 : reward / risk;
  }

  // 处理单个数字的情况（如 >1:1）
  const num = parseFloat(parts[0]);
  return isNaN(num) ? 1 : num;
}

// 凯利公式详细提示组件
function KellyTooltip({
  winRate,
  riskReward,
  isVisible,
  position
}: {
  winRate: string;
  riskReward: string;
  isVisible: boolean;
  position: { x: number; y: number };
}) {
  const winRateNum = parseWinRate(winRate);
  const riskRewardNum = parseRiskReward(riskReward);
  const { kellyFraction, conservativeKelly, recommendation } = calculateKellyPosition(winRateNum, riskRewardNum);

  if (!isVisible) return null;

  return (
    <div
      className="fixed z-50 bg-gray-900 text-white p-4 rounded-lg shadow-xl max-w-sm border border-gray-700"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translateY(-100%)',
      }}
    >
      <div className="text-sm font-semibold mb-3 flex items-center">
        <Calculator className="w-4 h-4 mr-2" />
        凯利公式计算详情
      </div>

      <div className="space-y-2 text-xs">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="text-gray-300">胜率 (p)</div>
            <div className="font-mono text-blue-400">{winRate}</div>
          </div>
          <div>
            <div className="text-gray-300">盈亏比 (b)</div>
            <div className="font-mono text-green-400">{riskReward}</div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-2">
          <div className="text-gray-300 mb-2">计算步骤：</div>
          <div className="space-y-1 font-mono text-xs">
            <div>q = 1 - p = {(1 - winRateNum / 100).toFixed(2)}</div>
            <div>原始凯利 = (b×p - q) / b</div>
            <div className="text-yellow-400">
              = ({riskRewardNum}×{winRateNum / 100} - {(1 - winRateNum / 100).toFixed(2)}) / {riskRewardNum}
              = {kellyFraction.toFixed(1)}%
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-2 space-y-1">
          <div className="flex justify-between">
            <span className="text-gray-300">原始凯利：</span>
            <span className="text-orange-400 font-mono">{kellyFraction.toFixed(1)}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">保守凯利 (50%安全边际)：</span>
            <span className="text-yellow-400 font-mono">{conservativeKelly.toFixed(1)}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">推荐仓位：</span>
            <span className="text-green-400 font-mono">{recommendation.toFixed(1)}%</span>
          </div>
        </div>

        <div className="text-xs text-gray-400 mt-3 border-t border-gray-700 pt-2">
          * 凯利公式：f* = (bp - q) / b，为理论最优仓位
        </div>
      </div>
    </div>
  );
}

export default function DecisionTreeModal({
  isOpen,
  onClose,
  nodeData,
}: DecisionTreeModalProps) {
  const [kellyTooltipVisible, setKellyTooltipVisible] = useState(false);
  const [kellyTooltipPosition, setKellyTooltipPosition] = useState({ x: 0, y: 0 });

  const handleKellyHover = (event: React.MouseEvent) => {
    if (nodeData.statistics?.winRate && nodeData.statistics?.riskReward) {
      const rect = event.currentTarget.getBoundingClientRect();
      setKellyTooltipPosition({
        x: rect.left + rect.width / 2,
        y: rect.top - 10,
      });
      setKellyTooltipVisible(true);
    }
  };

  const handleKellyLeave = () => {
    setKellyTooltipVisible(false);
  };

  if (!isOpen) return null;

  const categoryColors = {
    strong_trend: {
      bg: 'from-red-50 to-pink-50',
      border: 'border-red-200',
      text: 'text-red-800',
      icon: 'text-red-600',
    },
    trend_continuation: {
      bg: 'from-blue-50 to-indigo-50',
      border: 'border-blue-200',
      text: 'text-blue-800',
      icon: 'text-blue-600',
    },
    equilibrium: {
      bg: 'from-orange-50 to-yellow-50',
      border: 'border-orange-200',
      text: 'text-orange-800',
      icon: 'text-orange-600',
    },
    reversal: {
      bg: 'from-purple-50 to-violet-50',
      border: 'border-purple-200',
      text: 'text-purple-800',
      icon: 'text-purple-600',
    },
    default: {
      bg: 'from-emerald-50 to-green-50',
      border: 'border-emerald-200',
      text: 'text-emerald-800',
      icon: 'text-emerald-600',
    },
  };

  const colors =
    categoryColors[nodeData.category as keyof typeof categoryColors] ||
    categoryColors.default;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 背景遮罩 */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal内容 */}
      <div className="relative w-full max-w-4xl max-h-[90vh] mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className={`bg-gradient-to-r ${colors.bg} ${colors.border} border-b p-4`}>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h2 className={`text-lg font-bold ${colors.text} mb-1`}>
                {nodeData.label}
              </h2>
              {nodeData.action && (
                <p className={`text-sm ${colors.text} opacity-90`}>
                  {nodeData.action}
                </p>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-white/20 rounded transition-colors"
            >
              <X className={`w-5 h-5 ${colors.icon}`} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="p-4 space-y-6">
            {/* 基本描述 */}
            {nodeData.description && (
              <section>
                <h3 className="text-base font-semibold text-gray-800 mb-2 flex items-center">
                  <BarChart3 className="w-4 h-4 mr-2 text-blue-600" />
                  策略描述
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed bg-gray-50 p-3 rounded-lg">
                  {nodeData.description}
                </p>
              </section>
            )}

            {/* 入场规则 */}
            {nodeData.entryRules && nodeData.entryRules.length > 0 && (
              <section>
                <h3 className="text-base font-semibold text-gray-800 mb-2 flex items-center">
                  <Target className="w-4 h-4 mr-2 text-green-600" />
                  入场规则
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {nodeData.entryRules.map((rule, index) => (
                    <div
                      key={index}
                      className="flex items-start text-gray-700 bg-green-50 p-2 rounded-lg text-sm"
                    >
                      <span className='flex-shrink-0 w-4 h-4 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-medium mr-2 mt-0.5'>
                        {index + 1}
                      </span>
                      <span className='flex-1 leading-tight'>{rule}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 风险管理 */}
            {nodeData.riskManagement && (
              <section>
                <h3 className="text-base font-semibold text-gray-800 mb-2 flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-red-600" />
                  风险管理
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                    <h4 className="font-medium text-red-800 mb-1.5 text-sm">止损设置</h4>
                    <p className="text-red-700 text-xs">
                      {nodeData.riskManagement.stopLoss}
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                    <h4 className="font-medium text-green-800 mb-1.5 text-sm">目标设置</h4>
                    <p className="text-green-700 text-xs">
                      {nodeData.riskManagement.target}
                    </p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                    <h4 className="font-medium text-blue-800 mb-1.5 text-sm">盈亏比</h4>
                    <p className="text-blue-700 text-xs">
                      {nodeData.riskManagement.riskReward}
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* 心理要点 */}
            {nodeData.psychology && nodeData.psychology.length > 0 && (
              <section>
                <h3 className="text-base font-semibold text-gray-800 mb-2 flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-purple-600" />
                  交易心理
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {nodeData.psychology.map((point, index) => (
                    <div
                      key={index}
                      className="text-purple-800 flex items-start text-sm bg-purple-50 p-2 rounded-lg border border-purple-100"
                    >
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-purple-400 rounded-full mr-2 mt-2" />
                      <span className="flex-1 leading-tight">{point}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 实际案例 */}
            {nodeData.examples && (
              <section>
                <h3 className="text-base font-semibold text-gray-800 mb-2">
                  实际案例分析
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                    <h4 className="font-medium text-green-800 mb-2 text-sm">多头案例</h4>
                    {nodeData.examples?.bullishImage && (
                      <div className="mb-2">
                        <img
                          src={nodeData.examples?.bullishImage || '/images/placeholder-chart.svg'}
                          alt="多头案例图表"
                          className="w-full h-36 object-cover rounded border border-green-200 cursor-pointer transition-transform hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.src = '/images/placeholder-chart.svg';
                          }}
                          onClick={() => {
                            // 点击放大查看图片
                            const modal = document.createElement('div');
                            modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/80';
                            modal.innerHTML = `
                              <div class="relative max-w-4xl max-h-[90vh] mx-4">
                                <img src="${nodeData.examples?.bullishImage}" alt="多头案例图表" class="max-w-full max-h-full object-contain rounded-lg" />
                                <button class="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl" onclick="this.parentElement.parentElement.remove()">×</button>
                              </div>
                            `;
                            document.body.appendChild(modal);
                            modal.addEventListener('click', (e) => {
                              if (e.target === modal) modal.remove();
                            });
                          }}
                        />
                      </div>
                    )}
                    <p className="text-green-700 text-xs">
                      {nodeData.examples?.bullish}
                    </p>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg border border-red-100">
                    <h4 className="font-medium text-red-800 mb-2 text-sm">空头案例</h4>
                    {nodeData.examples?.bearishImage && (
                      <div className="mb-2">
                        <img
                          src={nodeData.examples?.bearishImage || '/images/placeholder-chart.svg'}
                          alt="空头案例图表"
                          className="w-full h-36 object-cover rounded border border-red-200 cursor-pointer transition-transform hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.src = '/images/placeholder-chart.svg';
                          }}
                          onClick={() => {
                            // 点击放大查看图片
                            const modal = document.createElement('div');
                            modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/80';
                            modal.innerHTML = `
                              <div class="relative max-w-4xl max-h-[90vh] mx-4">
                                <img src="${nodeData.examples?.bearishImage}" alt="空头案例图表" class="max-w-full max-h-full object-contain rounded-lg" />
                                <button class="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl" onclick="this.parentElement.parentElement.remove()">×</button>
                              </div>
                            `;
                            document.body.appendChild(modal);
                            modal.addEventListener('click', (e) => {
                              if (e.target === modal) modal.remove();
                            });
                          }}
                        />
                      </div>
                    )}
                    <p className="text-red-700 text-xs">
                      {nodeData.examples?.bearish}
                    </p>
                  </div>
                </div>

                {/* 添加更多案例图片的预留区域 */}
                {nodeData.examples?.additionalImages && nodeData.examples?.additionalImages.length > 0 && (
                  <div className="mt-3">
                    <h4 className="font-medium text-gray-800 mb-2 text-sm">更多案例图表</h4>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                      {nodeData.examples?.additionalImages.map((imageSrc, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={imageSrc}
                            alt={`案例图表 ${index + 1}`}
                            className="w-full h-16 object-cover rounded border border-gray-200 cursor-pointer transition-transform group-hover:scale-105"
                            onError={(e) => {
                              e.currentTarget.src = '/images/placeholder-chart.svg';
                            }}
                            onClick={() => {
                              // 点击放大查看图片
                              const modal = document.createElement('div');
                              modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/80';
                              modal.innerHTML = `
                                <div class="relative max-w-4xl max-h-[90vh] mx-4">
                                  <img src="${imageSrc}" alt="案例图表 ${index + 1}" class="max-w-full max-h-full object-contain rounded-lg" />
                                  <button class="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl" onclick="this.parentElement.parentElement.remove()">×</button>
                                </div>
                              `;
                              document.body.appendChild(modal);
                              modal.addEventListener('click', (e) => {
                                if (e.target === modal) modal.remove();
                              });
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )}

            {/* 统计数据 */}
            {nodeData.statistics && (
              <section>
                <h3 className="text-base font-semibold text-gray-800 mb-2">
                  历史统计
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <div className="text-center bg-blue-50 p-2.5 rounded border border-blue-100">
                    <div className="text-lg font-bold text-blue-600">
                      {nodeData.statistics.winRate}
                    </div>
                    <div className="text-blue-700 text-xs">胜率</div>
                  </div>
                  <div className="text-center bg-orange-50 p-2.5 rounded border border-orange-100">
                    <div className="text-lg font-bold text-orange-600">
                      {nodeData.statistics.avgBars}
                    </div>
                    <div className="text-orange-700 text-xs">平均持仓K线数</div>
                  </div>
                  <div className="text-center bg-purple-50 p-2.5 rounded border border-purple-100">
                    <div className="text-lg font-bold text-purple-600">
                      {nodeData.statistics.riskReward}
                    </div>
                    <div className="text-purple-700 text-xs">盈亏比</div>
                  </div>
                  {/* 凯利仓位信息 */}
                  {nodeData.statistics.winRate && nodeData.statistics.riskReward && (
                    <div
                      className="text-center bg-indigo-50 p-2.5 rounded border border-indigo-100 cursor-help hover:bg-indigo-100 transition-colors"
                      onMouseEnter={handleKellyHover}
                      onMouseLeave={handleKellyLeave}
                    >
                      <div className="text-lg font-bold text-indigo-600">
                        {(() => {
                          const winRateNum = parseWinRate(nodeData.statistics!.winRate);
                          const riskRewardNum = parseRiskReward(nodeData.statistics!.riskReward);
                          const { recommendation } = calculateKellyPosition(winRateNum, riskRewardNum);
                          return `${recommendation.toFixed(1)}%`;
                        })()}
                      </div>
                      <div className="text-indigo-700 text-xs">凯利仓位</div>
                      <div className="text-xs text-indigo-600 mt-1">
                        <Calculator className="w-3 h-3 inline mr-1" />
                        悬停查看详情
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* 关键水平位 */}
            {nodeData.keyLevels && nodeData.keyLevels.length > 0 && (
              <section>
                <h3 className="text-base font-semibold text-gray-800 mb-2">
                  关键水平位
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {nodeData.keyLevels.map((level, index) => (
                    <div
                      key={index}
                      className="text-yellow-800 flex items-start text-sm bg-yellow-50 p-2 rounded-lg border border-yellow-100"
                    >
                      <TrendingUp className="w-3.5 h-3.5 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="flex-1 leading-tight">{level}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>

        {/* 凯利公式详细提示 */}
        {nodeData.statistics?.winRate && nodeData.statistics?.riskReward && (
          <KellyTooltip
            winRate={nodeData.statistics.winRate}
            riskReward={nodeData.statistics.riskReward}
            isVisible={kellyTooltipVisible}
            position={kellyTooltipPosition}
          />
        )}
      </div>
    </div>
  );
}