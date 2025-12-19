// 建仓决策树页面 v2.0
// 基于交易形态指南的完整决策树系统
// 使用 React Flow 实现决策树可视化，支持详细讲解Modal



import React, { useCallback, useState } from 'react';
import {
  ReactFlow,
  type Node,
  type Edge,
  addEdge,
  type Connection,
  useNodesState,
  useEdgesState,
  Controls,
  MiniMap,
  Background,
  BackgroundVariant,
  Handle,
  Position,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import DecisionTreeModal from '@/components/decision-tree/DecisionTreeModal';

// 自定义决策节点组件
function DecisionNode({
  data,
}: {
  data: { label: string; question?: string; details?: string };
}) {
  return (
    <div className='group relative px-5 py-4 shadow-xl rounded-xl bg-white border border-slate-200 max-w-xs transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 dark:bg-slate-900/90 dark:border-slate-700 dark:shadow-slate-900/50 backdrop-blur-sm'>
      {/* Decorative gradient border effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <Handle type='target' position={Position.Top} className="!bg-slate-400 dark:!bg-slate-500 !w-3 !h-3" />
      <Handle type='source' position={Position.Bottom} className="!bg-slate-400 dark:!bg-slate-500 !w-3 !h-3" />

      <div className='relative z-10'>
        <div className='font-bold text-base text-slate-900 dark:text-slate-100 mb-1'>{data.label}</div>
        {data.question && (
          <div className='text-sm text-slate-600 font-medium dark:text-slate-400 leading-snug'>
            {data.question}
          </div>
        )}
        {data.details && (
          <div className='mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-500 italic'>
            {data.details}
          </div>
        )}
      </div>
    </div>
  );
}

// 自定义结果节点组件 - 支持点击展示详细讲解
function ResultNode({
  data,
  onClick,
}: {
  data: {
    label: string;
    action?: string;
    tooltip?: string;
    details?: string;
    category?: string;
    description?: string;
    entryRules?: string[];
    riskManagement?: any;
    psychology?: string[];
    examples?: any;
    statistics?: any;
    keyLevels?: string[];
  };
  onClick?: () => void;
}) {
  const categoryStyles = {
    strong_trend: {
      border: 'border-l-4 border-l-red-500 border-red-200 dark:border-red-800 dark:border-l-red-500',
      bg: 'bg-gradient-to-br from-red-50 to-white dark:from-red-950/30 dark:to-slate-900',
      text: 'text-red-900 dark:text-red-100',
      action: 'text-red-700 dark:text-red-300',
      glow: 'shadow-red-500/20'
    },
    trend_continuation: {
      border: 'border-l-4 border-l-blue-500 border-blue-200 dark:border-blue-800 dark:border-l-blue-500',
      bg: 'bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/30 dark:to-slate-900',
      text: 'text-blue-900 dark:text-blue-100',
      action: 'text-blue-700 dark:text-blue-300',
      glow: 'shadow-blue-500/20'
    },
    equilibrium: {
      border: 'border-l-4 border-l-orange-500 border-orange-200 dark:border-orange-800 dark:border-l-orange-500',
      bg: 'bg-gradient-to-br from-orange-50 to-white dark:from-orange-950/30 dark:to-slate-900',
      text: 'text-orange-900 dark:text-orange-100',
      action: 'text-orange-700 dark:text-orange-300',
      glow: 'shadow-orange-500/20'
    },
    reversal: {
      border: 'border-l-4 border-l-purple-500 border-purple-200 dark:border-purple-800 dark:border-l-purple-500',
      bg: 'bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/30 dark:to-slate-900',
      text: 'text-purple-900 dark:text-purple-100',
      action: 'text-purple-700 dark:text-purple-300',
      glow: 'shadow-purple-500/20'
    },
    default: {
      border: 'border-l-4 border-l-emerald-500 border-emerald-200 dark:border-emerald-800 dark:border-l-emerald-500',
      bg: 'bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950/30 dark:to-slate-900',
      text: 'text-emerald-900 dark:text-emerald-100',
      action: 'text-emerald-700 dark:text-emerald-300',
      glow: 'shadow-emerald-500/20'
    },
  };

  const style =
    categoryStyles[data.category as keyof typeof categoryStyles] ||
    categoryStyles.default;

  return (
    <div
      className={`group relative px-5 py-4 shadow-lg rounded-xl border ${style.border} ${style.bg} max-w-xs cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:${style.glow} dark:shadow-none`}
      title={data.tooltip || '点击查看详细讲解'}
      onClick={onClick}
    >
      <Handle type='target' position={Position.Top} className="!bg-slate-400 dark:!bg-slate-500 !w-3 !h-3" />

      <div className='relative z-10'>
        <div className={`font-bold text-base ${style.text} mb-1.5 flex items-center justify-between`}>
          {data.label}
          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-black/10 dark:bg-white/10 px-2 py-0.5 rounded-full">详细</span>
        </div>

        {data.action && (
          <div className={`text-sm font-medium ${style.action} mb-2 leading-snug`}>
            {data.action}
          </div>
        )}

        {data.details && (
          <div className='pt-2 border-t border-black/5 dark:border-white/5 text-xs opacity-80 italic'>
            {data.details}
          </div>
        )}
      </div>
    </div>
  );
}

// 节点类型映射
const nodeTypes = {
  decision: DecisionNode,
  result: ResultNode,
};

// 扩展的节点数据 - 包含详细讲解内容
const initialNodes: Node[] = [
  // 第一步：市场脉络判断
  {
    id: 'context',
    type: 'decision',
    position: { x: 500, y: 50 },
    data: {
      label: '市场脉络 (Context)',
      question: '当前市场处于哪个阶段？',
      details: 'K线形态、动能表现、回撤深度',
    },
  },
  {
    id: 'spike',
    type: 'decision',
    position: { x: -27.729411764705873, y: 193.91764705882352 },
    data: {
      label: '急速 (Spike)',
      question: '连续顺畅趋势K线，回撤极浅？',
      details: '穿透支撑/阻力，动能强劲，小时间级别为窄幅通道',
    },
  },
  {
    id: 'tight_channel',
    type: 'decision',
    position: { x: 331.75294117647053, y: 240.14352941176463 },
    data: {
      label: '窄幅通道 (Tight Channel)',
      question: '稍短趋势K线，有轻微停顿回调？',
      details: '回调温和，趋势延续性强',
    },
  },
  {
    id: 'broad_channel',
    type: 'decision',
    position: { x: 618.2470588235294, y: 237.71058823529415 },
    data: {
      label: '宽幅通道 (Broad Channel)',
      question: '回调明显、持续时间久、深度较大？',
      details: '回撤明显，可能出现持续或反转',
    },
  },
  {
    id: 'trading_range',
    type: 'decision',
    position: { x: 957.0494117647056, y: 185.40235294117647 },
    data: {
      label: '区间 (Trading Range)',
      question: '双边交易特征明显，多空势均力敌？',
      details: '80%的时间市场处于这种状态，回调75%以上，持续20根K线以上',
    },
  },

  // 强势趋势建仓形态分支
  {
    id: 'strong_trend_setups',
    type: 'decision',
    position: { x: 160.52705882352947, y: 358.515294117647 },
    data: {
      label: '强势趋势建仓',
      question: '选择具体建仓形态',
      details: '动能交易者策略，高胜率风格',
    },
  },
  {
    id: 'momentum_entry',
    type: 'decision',
    position: { x: -82.47058823529413, y: 517.0305882352941 },
    data: {
      label: '动能确认？',
      question: '是否有明确突破K线？',
      details: '穿透支撑/阻力，动能最强时入场，同时期待回调后第二推',
    },
  },
  {
    id: 'close_based_entry',
    type: 'result',
    position: { x: -213.9741176470588, y: 703.524705882353 },
    data: {
      label: '收线追进 (T-MOM)',
      action: '收线时市价追进突破方向',
      details: '波段/剥头皮交易风格，高胜率(60%)，1.0倍盈亏比，1-5根K线',
      category: 'strong_trend',
      description: '收线追进是一种动能交易策略，当关键水平位被突破且K线收线确认后立即入场。这种策略强调动能的持续性和突破的有效性。',
      entryRules: [
        '市场给不到回调机会入场',
        '图表左侧无明显阻力/支撑阻挡',
        '后续有良好跟进，而且远离突破点',
        '入场时机为K线收线后市价追进',
        '快速止损，避免动能衰竭',
        '注意区别于高潮运动',
      ],
      riskManagement: {
        stopLoss: '突破K线的低点/高点外设止损, 推动的起点外，等回调趋势恢复后缩紧止损',
        target: '1:1盈亏比，或关键下一水平位',
        riskReward: '初始宽止损等距1.0倍盈亏比',
      },
      psychology: [
        '克服恐惧心理，动能确认后果断入场',
        '严格执行止损，不抱侥幸心理',
        '接受小幅回撤作为交易成本',
        '专注动能的持续性而非绝对价格',
        '可以小仓位参与，降低风险',
      ],
      examples: {
        bullish: 'MSTZ在10月底份急速上涨行情，k线重叠度低，基本没回调',
        bearish: 'MSTX在10月底份急速下跌行情，k线重叠度低，基本没回调',
        bullishImage: '/images/examples/t-mom/t-mom-bullish.png',
        bearishImage: '/images/examples/t-mom/t-mom-bearish.png',
        additionalImages: [
          '/images/examples/t-mom/spike1.png',
          '/images/examples/t-mom/no-block.png',
          '/images/examples/t-mom/not-good.png',
          '/images/examples/t-mom/stop-loss.png',
          '/images/examples/t-mom/take-profit.png',
          '/images/examples/t-mom/BOF.png',
        ],
      },
      statistics: {
        winRate: '60%',
        avgBars: '3根',
        riskReward: '1:1',
      },
      keyLevels: [
        '前波段高低点',
        '重要支撑阻力位',
        '趋势线/通道线',
        '心理整数关口',
      ],
    },
  },
  {
    id: '20ma_gap_check',
    type: 'decision',
    position: { x: 224.4541176470588, y: 518.2470588235296 },
    data: {
      label: '均线缺口形态？',
      question: '连续20根以上K线未触及均线？',
      details: '价格远离均线后首次回撤',
    },
  },
  {
    id: 'ma_gap_type',
    type: 'decision',
    position: { x: 84.80941176470589, y: 665.8141176470588 },
    data: {
      label: '缺口类型',
      question: '首次均线回撤还是20均线缺口？',
      details: '微观多空竞合后顺势方重新占优',
    },
  },
  {
    id: 'first_ma_gap',
    type: 'result',
    position: { x: -46.69411764705882, y: 866.9058823529411 },
    data: {
      label: '第一均线缺口 (T-MAG)',
      action: '信号K线外设止损，回调末端入场',
      details: '剥头皮交易风格，高胜率(60%)，1.0倍盈亏比',
      category: 'strong_trend',
      description: '第一均线缺口是指价格首次远离均线后回撤到均线附近的机会。这种策略利用趋势的惯性和均线的吸引力。',
      entryRules: [
        '观察首次回撤到均线附近的表现',
        '等待信号K线确认回调结束',
        '在回调末端低点/高点外设止损',
        '均线突破后不应该有强劲跟进',
        '价格穿透均线后迅速反转',
      ],
      riskManagement: {
        stopLoss: '信号K线低点/高点外设止损',
        target: '前期高点/低点，或等距运动',
        riskReward: '1.0倍盈亏比',
      },
      psychology: [
        '耐心等待完美的回调入场点',
        '相信趋势的持续性和均线的吸引力',
        '避免在深度回调时恐慌离场',
      ],
      examples: {
        bullish: '黄金连续上涨远离20日均线，首次回撤至均线附近出现反转K线后做多',
        bearish: '原油跌破均线后大幅下跌，首次反弹至均线附近受阻后做空',
      },
      statistics: {
        winRate: '60%',
        avgBars: '4根',
        riskReward: '1.0:1',
      },
      keyLevels: [
        '20日均线',
        '前期趋势高点/低点',
        '重要支撑阻力位',
      ],
    },
  },
  {
    id: '20ma_gap',
    type: 'result',
    position: { x: 221.17882352941172, y: 868.1223529411764 },
    data: {
      label: '20均线缺口 (T-MAG)',
      action: '重要波段点外设止损，同侧高/低1入场',
      details: '剥头皮交易风格，60%胜率，强势趋势延续，利用均线防线',
      category: 'strong_trend',
      description: '20均线缺口是指价格连续20-30根K线未触及20日均线后出现的回撤机会。这种强趋势延续模式成功率较高。',
      entryRules: [
        '确认连续20根K线未触及20日均线',
        '观察回撤是否在重要支撑位附近企稳',
        '寻找同侧的高1或低1入场机会',
        '在重要波段点外设止损',
        '趋势通常在均线附近获得支撑/阻力',
      ],
      riskManagement: {
        stopLoss: '重要波段点外设止损',
        target: '前期重要高/低点',
        riskReward: '1.0-1.5倍盈亏比',
      },
      psychology: [
        '强势趋势中的谨慎乐观',
        '在关键位置保持耐心等待确认',
        '相信市场趋势的力量',
      ],
      examples: {
        bullish: '美股连续上涨20天未触20日线，首次回调至重要支撑位后反转向上',
        bearish: '比特币连续下跌20天后首次反弹至20日线附近受阻',
      },
      statistics: {
        winRate: '65%',
        avgBars: '5根',
        riskReward: '1.2:1',
      },
      keyLevels: [
        '20日均线',
        '重要波段高/低点',
        '前期趋势线',
      ],
    },
  },

  // 趋势持续与测试形态分支
  {
    id: 'continuation_setups',
    type: 'decision',
    position: { x: 928.4470588235295, y: 362.16470588235296 },
    data: {
      label: '趋势持续与测试',
      question: '选择具体建仓形态',
      details: '波段交易策略，中高盈亏比',
    },
  },
  {
    id: 'counter_test',
    type: 'decision',
    position: { x: 642.3270588235296, y: 486.61882352941166 },
    data: {
      label: '逆势测试？',
      question: '是否出现逆势K线但动能不足？',
      details: '低1失败，顺1成功是关键',
    },
  },
  {
    id: 'counter_pro_1',
    type: 'result',
    position: { x: 640.9858823529413, y: 662.1647058823529 },
    data: {
      label: '逆1顺1 (T-C1P1)',
      action: '逆势的第一次尝试失败后顺势入场',
      details: '波段交易风格，2.0倍盈亏比，60%胜率',
      category: 'trend_continuation',
      description: '逆1顺1是一种经典的回调入场策略，通过观察逆势推动失败和顺势推动成功来确认趋势延续。',
      entryRules: [
        '初始动能强劲，远离突破点',
        '注意突破方向没有明显阻力/支撑位',
        '观察逆势推动1的尝试（低1或高1），回调幅度越浅越好',
        '等待顺势推动1的确认（突破逆势高点/低点）',
        '在顺势突破前逆势高点/低点时，用停损单突破入场',
        '止损设在逆势推动的高点/低点外',
      ],
      riskManagement: {
        stopLoss: '逆势推动的最高点/最低点外设止损',
        target: '第一段推动的等距测量，或重要阻力支撑位',
        riskReward: '2.0倍盈亏比',
      },
      psychology: [
        '耐心等待逆势推动失败确认',
        '在顺势突破时果断入场',
        '价值交易者逻辑，顺势动能稍弱，采用保守的AB=CD目标',
        '如果已有头寸，潜在加仓位置'
      ],
      examples: {
        bullish: 'BTC 9月上涨趋势中，出现逆势下跌低1，随后突破前期高点做多',
        bearish: 'BTC 11月下跌趋势中，出现逆势上涨高1，随后跌破前期低点做空',
        bullishImage: '/images/examples/t-c1p1/c1p1-bullish.png',
        bearishImage: '/images/examples/t-c1p1/c1p1-bearish.png',
        additionalImages: [
          '/images/examples/t-c1p1/SL-TP.png',
          '/images/examples/t-c1p1/c1p1-example.png',
          '/images/examples/t-c1p1/bad-pullback.png',
          '/images/examples/t-c1p1/block.png',
          '/images/examples/t-c1p1/vs.png',
        ],
      },
      statistics: {
        winRate: '60%',
        avgBars: '3-6根',
        riskReward: '2:1',
      },
      keyLevels: [
        '逆势推动的高/低点',
        '前期重要波段点',
        '趋势线位置',
      ],
    },
  },
  {
    id: 'breakout_test',
    type: 'decision',
    position: { x: 850.7176470588238, y: 585.1529411764704 },
    data: {
      label: '突破测试？',
      question: '是否有成功突破后折返测试？',
      details: '突破动能是否延续到第二推',
    },
  },
  {
    id: 'breakout_pullback',
    type: 'result',
    position: { x: 791.1105882352942, y: 778.9458823529412 },
    data: {
      label: '突破回调 (T-BOPB)',
      action: '测试点确认后，逆势疲弱时入场',
      details: '波段交易风格，2.0倍盈亏比，60%胜率，等待第二推，目标等距运动',
      category: 'trend_continuation',
      description: '突破回调策略利用突破后的自然回撤，在确认突破有效后于回调结束点入场，类似C1P1入场。',
      entryRules: [
        '确认突破成功',
        '后续有良好跟进，远离突破点',
        '观察突破后的回调是否在突破点获得支撑/阻力',
        '等待逆势动能衰竭的信号',
        '在回调低点/高点外设止损',
        '目标为等距运动或下一重要水平位',
      ],
      riskManagement: {
        stopLoss: '回调低点/高点外设止损',
        target: '等距运动，AB=CD模式，或重要阻力位',
        riskReward: '2.0倍盈亏比',
      },
      psychology: [
        '相信突破的有效性',
        '耐心等待完美的回调确认',
        '在逆势疲弱时果断入场',
        '类似C1P1入场，区别于回调k线数量',
      ],
      examples: {
        bullish: 'BTC 6月上涨趋势中，出现突破后回调测试，随后反弹做多',
        bearish: 'BTC 11月下跌趋势中，出现突破后回调测试，随后回落做空',
        bullishImage: '/images/examples/t-bopb/bullish.png',
        bearishImage: '/images/examples/t-bopb/bearish.png',
        additionalImages: [
          '/images/examples/t-bopb/example.png',
          '/images/examples/t-bopb/example2.png',
        ],
      },
      statistics: {
        winRate: '60%',
        avgBars: '6-10根',
        riskReward: '2.0:1',
      },
      keyLevels: [
        '突破点位',
        '回调确认点',
        '等距运动目标位',
      ],
    },
  },
  {
    id: 'double_test',
    type: 'decision',
    position: { x: 984.7788235294116, y: 700.7176470588238 },
    data: {
      label: '双重测试？',
      question: '是否两次测试同一水平失败？',
      details: '磁体测试失败，逆势动能疲弱',
    },
  },
  {
    id: 'double_top_bottom',
    type: 'result',
    position: { x: 978.6964705882351, y: 881.1294117647058 },
    data: {
      label: '双重顶/底 (T-DTB)',
      action: '第二次测试失败后顺势突破入场',
      details: '波段交易风格，2.0倍盈亏比，60%胜率，旗形回调变体，目标AB=CD等距',
      category: 'trend_continuation',
      description: '双重顶/底策略通过两次测试同一水平位失败来确认趋势的延续性。',
      entryRules: [
        '观察两次测试同一支撑/阻力的表现',
        '确认第二次测试未能创新高/新低',
        '等待顺势突破的确认市价单入场',
        '在第二次测试失败后停损单高/低1突破入场',
        '原趋势发起k线上方/下方（宽止损）或止损设在第二次测试的高点/低点外（窄止损）',
      ],
      riskManagement: {
        stopLoss: '第二次测试的高点/低点外设止损',
        target: '等距运动，AB=CD模式，或重要水平位',
        riskReward: '2.0倍盈亏比',
      },
      psychology: [
        '耐心等待二次确认',
        '相信市场惯性原理',
        '只交易回调极值持平或过冲的相对容易些，避免左侧交易',
        '窄止损需要承受频繁止损代价，双重顶底也算是小型交易区间',
      ],
      examples: {
        bullish: 'TSLA 11月上涨趋势中，出现逆势下跌高1，高2，入场做多',
        bearish: '三种不同程度的双重顶',
        bullishImage: '/images/examples/t-dtb/bullish.png',
        bearishImage: '/images/examples/t-dtb/bearish.png',
        additionalImages: [
          '/images/examples/t-dtb/dtb.png',
          '/images/examples/t-dtb/pullback1.png',
          '/images/examples/t-dtb/stoploss.png',
          '/images/examples/t-dtb/narrow-stoploss.png',
          '/images/examples/t-dtb/combo.png',
        ],
      },
      statistics: {
        winRate: '40%',
        avgBars: '6-15根',
        riskReward: '2.0:1',
      },
      keyLevels: [
        '双重测试的支撑/阻力位',
        '突破确认点',
        '等距运动目标位',
      ],
    },
  },
  {
    id: 'wedge_test',
    type: 'decision',
    position: { x: 1094.5105882352943, y: 486.61882352941166 },
    data: {
      label: '楔形结构？',
      question: '是否三次推动失败，倾斜收敛？',
      details: '楔形底/顶，逆势力量消耗',
    },
  },
  {
    id: 'wedge_top_bottom',
    type: 'result',
    position: { x: 1178.4470588235292, y: 618.3717647058825 },
    data: {
      label: '楔形顶/底 (T-WDG)',
      action: '楔形突破后，趋势恢复时入场（对决线）',
      details: '波段交易风格，2.0倍盈亏比，50%胜率，三推失败，逆势方动能衰退',
      category: 'trend_continuation',
      description: '楔形结构表示趋势动能的衰减，当三次推动都无法有效突破时，趋势恢复的可能性很高。',
      entryRules: [
        '识别倾斜收敛的楔形结构',
        '确认三次推动都未能有效突破',
        '观察逆势动能的明显衰竭',
        '等待楔形突破的确认',
        '在趋势恢复时高/低1突破入场',
        '选择合适策略，注意和T-DTB和T-C1P1入场有重叠部分',
        '如果已介入T-DTB和T-C1P1入场，需要调整止盈位置',
        '适用与对决线策略'
      ],
      riskManagement: {
        stopLoss: '楔形顶点/底点外设止损',
        target: '楔形高度的2倍，或重要水平位',
        riskReward: '2.0倍盈亏比',
      },
      psychology: [
        '理解市场动能的自然衰减规律',
        '耐心等待完美的突破时机',
        '只交易回调极值持平或过冲的相对容易些，避免左侧交易',
        '如出现在趋势末尾说，明趋势动能减弱，胜率更低',
      ],
      examples: {
        bullish: '对决线嵌套形态',
        bearish: 'MSTR 11月15号日内对三推决线昨日收盘，趋势恢复',
        bullishImage: '/images/examples/t-wdg/bullish.png',
        bearishImage: '/images/examples/t-wdg/duel.png',
        additionalImages: [
          '/images/examples/t-wdg/example.png',
          '/images/examples/t-wdg/adjust.png',
          '/images/examples/t-wdg/real.png',
          '/images/examples/t-wdg/rule.png',
          '/images/examples/t-wdg/duel-line.png',
        ],
      },
      statistics: {
        winRate: '50%',
        avgBars: '15-25根',
        riskReward: '2:1',
      },
      keyLevels: [
        '楔形边界线',
        '突破确认点',
        '楔形高度目标',
      ],
    },
  },

  // 均衡或区间形态分支
  {
    id: 'range_setups',
    type: 'decision',
    position: { x: 1217.3741176470587, y: 303.7741176470589 },
    data: {
      label: '均衡或区间形态',
      question: '选择具体建仓形态',
      details: '80%概率突破失败，逆势策略',
    },
  },
  {
    id: 'breakout_failure',
    type: 'decision',
    position: { x: 1326.6070588235298, y: 486.61882352941194 },
    data: {
      label: '突破失败？',
      question: '是否出现突破但缺乏跟进？',
      details: '影线可视为突破失败信号',
    },
  },
  {
    id: 'fade_breakout',
    type: 'result',
    position: { x: 1302.1529411764704, y: 763.1317647058822 },
    data: {
      label: '看衰突破 (E-FDB)',
      action: '突破失败后，信号K线反向突破时做空',
      details: '80%概率回归区间，逆势交易',
      category: 'equilibrium',
      description: '看衰突破策略利用区间市场中大部分突破都会失败的特性，在突破失败时逆势入场。',
      entryRules: [
        '最好持续20根K线以上，并且对原趋势极值做过尝试，未能突破',
        '区间有足够宽度，以确保盈亏比合理',
        '观察突破是否缺乏后续动能跟进',
        '寻找长影线等突破失败的信号',
        '等待反向突破的确认信号',
        '在信号K线反向突破时停损单突破入场',
      ],
      riskManagement: {
        stopLoss: '信号K线高点/低点外设止损',
        target: '区间另一端1/2至区间1/3（胜率高）',
        riskReward: '0.5-1倍盈亏比',
      },
      psychology: [
        '区间需要高度和持续时间的双重确认',
        '理解区间市场的特点',
        '在突破失败时保持冷静',
        '相信回归均值的规律',
      ],
      examples: {
        bullish: 'BTC 6月突破区间下沿失败，出现长下影线，随后反弹做多',
        bearish: 'LULU 10月27号区间上沿突破失败，出现长阴线，随后回落做空',
        bullishImage: '/images/examples/e-fdb/bullish.png',
        bearishImage: '/images/examples/e-fdb/bearish.png',
        additionalImages: [
          '/images/examples/e-fdb/define.png',
          '/images/examples/e-fdb/example.png',
          '/images/examples/e-fdb/stoploss.png',
          '/images/examples/e-fdb/takeprofit.png',
        ],
      },
      statistics: {
        winRate: '80%',
        avgBars: '6根',
        riskReward: '>1:1',
      },
      keyLevels: [
        '区间边界线',
        '突破失败确认点',
        '区间中位线',
      ],
    },
  },
  {
    id: 'magnet_rush',
    type: 'decision',
    position: { x: 1537.555294117647, y: 437.9599999999998 },
    data: {
      label: '磁体冲刺？',
      question: '价格是否快速奔向明确磁体？',
      details: '支撑/阻力、前波段点、均线等',
    },
  },
  {
    id: 'rush_to_magnet',
    type: 'result',
    position: { x: 1546.0705882352938, y: 765.564705882353 },
    data: {
      label: '急赴磁体 (E-RTM)',
      action: '收线追进，目标是磁体位置',
      details: '剥头皮交易风格，>1.0倍盈亏比，60%胜率，动能追进，磁体处高潮结束',
      category: 'equilibrium',
      description: '急赴磁体策略利用价格快速奔向关键水平位的动能，在确认方向后追进入场。',
      entryRules: [
        '识别明确的区间边缘',
        '观察价格快速奔向磁体的1/3-1/4处动能',
        '在动能确认后追市价单或停损单入场',
        '目标为磁体位置，到达后平仓',
        '价格行进途中无明显其他磁体造成阻拦',
      ],
      riskManagement: {
        stopLoss: '前一波段点外设止损',
        target: '磁体位置',
        riskReward: '小于1.0倍盈亏比',
      },
      psychology: [
        '快速反应，跟上市场节奏',
        '到达目标后果断平仓',
        '区间内第二推陷阱',
        '不贪心，磁体处止盈',
      ],
      examples: {
        bullish: 'BTC 双向奔赴磁体',
        bearish: 'BTC 磁体吸引到区间下沿附近位置，快速下跌',
        bullishImage: '/images/examples/e-rtm/dual.png',
        bearishImage: '/images/examples/e-rtm/bearish.png',
        additionalImages: [
          '/images/examples/e-rtm/example.png',
          '/images/examples/e-rtm/condition.png',
        ],
      },
      statistics: {
        winRate: '80%',
        avgBars: '4根',
        riskReward: '>1:1',
      },
      keyLevels: [
        '靠近区间磁体的1/3-1/4处',
        '重要支撑阻力位',
        '前期波段点',
        '心理关口',
      ],
    },
  },

  // 反转形态分支
  {
    id: 'reversal_setups',
    type: 'decision',
    position: { x: 450.37411764705894, y: 460.35529411764696 },
    data: {
      label: '反转形态',
      question: '选择具体建仓形态',
      details: '趋势末期，动能衰退期',
    },
  },
  {
    id: 'final_flag_check',
    type: 'decision',
    position: { x: 421.1788235294117, y: 691.8588235294118 },
    data: {
      label: '末端旗形？',
      question: '趋势末期旗形未能引发延续？',
      details: '关键磁体突破失败，逆势方占优',
    },
  },
  {
    id: 'final_flag_reversal',
    type: 'result',
    position: { x: 546.4752941176471, y: 878.3529411764705 },
    data: {
      label: '末端旗形反转 (R-FFL)',
      action: '高潮后动能丧失，重要波段点外止损',
      details: '波段交易风格，至少2.0倍盈亏比，40%胜率，大波段反转交易',
      category: 'reversal',
      description: '末端旗形反转是趋势末期的重要反转信号，需背靠磁体作为依据，通常出现在大幅趋势后的动能衰竭阶段。',
      entryRules: [
        '确认之前有大幅趋势运动',
        '观察末端出现旗形整理但无法延续趋势',
        '寻找关键磁体突破失败的信号,通道线侧左侧入场（优先）',
        '确认逆势动能开始占优，趋势线被突破右侧入场',
        '在反转信号确认后止停损单突破入场',
      ],
      riskManagement: {
        stopLoss: '重要波段点外设止损',
        target: '2.5倍盈亏比，或前期重要水平位',
        riskReward: '2.5倍盈亏比',
      },
      psychology: [
        '识别趋势末期的危险信号',
        '在动能丧失时保持敏锐',
        '相信大级别反转的可能性',
        '左侧入场更具数学优势',
        '右侧入场需注意区间上沿',
      ],
      examples: {
        bullish: '对决线嵌套形态',
        bearish: '区间内趋势逆转',
        bullishImage: '/images/examples/r-ffl/bullish.png',
        bearishImage: '/images/examples/r-ffl/bearish.png',
        additionalImages: [
          '/images/examples/r-ffl/rule.png',
          '/images/examples/r-ffl/left.png',
          '/images/examples/r-ffl/right.png',
          '/images/examples/r-ffl/measuremove.png',
          '/images/examples/r-ffl/setup.png',
        ],
      },
      statistics: {
        winRate: '50%',
        avgBars: '左侧入场10根两次推动\n右侧入场5根一次推动',
        riskReward: '2.5:1',
      },
      keyLevels: [
        '前期重要波段点',
        '末端旗形边界',
        '关键支撑阻力位',
      ],
    },
  },
];

// 初始边数据（交易决策树）
const initialEdges: Edge[] = [
  // 市场脉络分支
  {
    id: 'context-spike',
    source: 'context',
    target: 'spike',
    label: '急速',
    type: 'smoothstep',
  },
  {
    id: 'context-tight',
    source: 'context',
    target: 'tight_channel',
    label: '窄幅通道',
    type: 'smoothstep',
  },
  {
    id: 'context-broad',
    source: 'context',
    target: 'broad_channel',
    label: '宽幅通道',
    type: 'smoothstep',
  },
  {
    id: 'context-range',
    source: 'context',
    target: 'trading_range',
    label: '区间',
    type: 'smoothstep',
  },

  // 强势趋势分支
  {
    id: 'spike-strong',
    source: 'spike',
    target: 'strong_trend_setups',
    label: '强顺势',
    type: 'smoothstep',
  },
  {
    id: 'tight-strong',
    source: 'tight_channel',
    target: 'strong_trend_setups',
    label: '顺势为主',
    type: 'smoothstep',
  },

  // 强势趋势具体形态
  {
    id: 'strong-momentum',
    source: 'strong_trend_setups',
    target: 'momentum_entry',
    label: '动能突破',
    type: 'smoothstep',
  },
  {
    id: 'momentum-entry',
    source: 'momentum_entry',
    target: 'close_based_entry',
    label: '确认突破',
    type: 'smoothstep',
  },

  {
    id: 'strong-ma-gap',
    source: 'strong_trend_setups',
    target: '20ma_gap_check',
    label: '均线缺口',
    type: 'smoothstep',
  },
  {
    id: 'ma-gap-confirm',
    source: '20ma_gap_check',
    target: 'ma_gap_type',
    label: '连续未触20线',
    type: 'smoothstep',
  },
  {
    id: 'gap-first',
    source: 'ma_gap_type',
    target: 'first_ma_gap',
    label: '首次回撤',
    type: 'smoothstep',
  },
  {
    id: 'gap-20',
    source: 'ma_gap_type',
    target: '20ma_gap',
    label: '20线缺口',
    type: 'smoothstep',
  },

  // 趋势持续与测试分支
  {
    id: 'broad-continuation',
    source: 'broad_channel',
    target: 'continuation_setups',
    label: '持续/测试',
    type: 'smoothstep',
  },

  // 趋势持续具体形态
  {
    id: 'cont-counter',
    source: 'continuation_setups',
    target: 'counter_test',
    label: '逆1顺1',
    type: 'smoothstep',
  },
  {
    id: 'counter-entry',
    source: 'counter_test',
    target: 'counter_pro_1',
    label: '逆势失败',
    type: 'smoothstep',
  },

  {
    id: 'cont-breakout',
    source: 'continuation_setups',
    target: 'breakout_test',
    label: '突破回调',
    type: 'smoothstep',
  },
  {
    id: 'breakout-entry',
    source: 'breakout_test',
    target: 'breakout_pullback',
    label: '测试确认',
    type: 'smoothstep',
  },

  {
    id: 'cont-double',
    source: 'continuation_setups',
    target: 'double_test',
    label: '双重顶/底',
    type: 'smoothstep',
  },
  {
    id: 'double-entry',
    source: 'double_test',
    target: 'double_top_bottom',
    label: '两次失败',
    type: 'smoothstep',
  },

  {
    id: 'cont-wedge',
    source: 'continuation_setups',
    target: 'wedge_test',
    label: '楔形结构',
    type: 'smoothstep',
  },
  {
    id: 'wedge-entry',
    source: 'wedge_test',
    target: 'wedge_top_bottom',
    label: '三推失败',
    type: 'smoothstep',
  },

  // 区间形态分支
  {
    id: 'range-setups',
    source: 'trading_range',
    target: 'range_setups',
    label: '双边交易',
    type: 'smoothstep',
  },

  // 区间具体形态
  {
    id: 'range-fade',
    source: 'range_setups',
    target: 'breakout_failure',
    label: '看衰突破',
    type: 'smoothstep',
  },
  {
    id: 'fade-entry',
    source: 'breakout_failure',
    target: 'fade_breakout',
    label: '突破失败',
    type: 'smoothstep',
  },

  {
    id: 'range-rush',
    source: 'range_setups',
    target: 'magnet_rush',
    label: '急赴磁体',
    type: 'smoothstep',
  },
  {
    id: 'rush-entry',
    source: 'magnet_rush',
    target: 'rush_to_magnet',
    label: '磁体冲刺',
    type: 'smoothstep',
  },

  // 反转形态分支
  {
    id: 'broad-reversal',
    source: 'broad_channel',
    target: 'reversal_setups',
    label: '反转可能',
    type: 'smoothstep',
  },
  {
    id: 'reversal-flag',
    source: 'reversal_setups',
    target: 'final_flag_check',
    label: '末端旗形',
    type: 'smoothstep',
  },
  {
    id: 'final-entry',
    source: 'final_flag_check',
    target: 'final_flag_reversal',
    label: '动能丧失',
    type: 'smoothstep',
  },
];

export default function DecisionTreePage() {
  const [nodes, _setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, _setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNodeData, setSelectedNodeData] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onConnect = useCallback(
    (params: Connection) => _setEdges((eds) => addEdge(params, eds)),
    [_setEdges]
  );

  const handleNodeClick = useCallback((_: React.MouseEvent, node: Node) => {
    // 只对结果节点（最终子节点）打开modal
    if (node.type === 'result') {
      setSelectedNodeData(node.data);
      setIsModalOpen(true);
    }
  }, []);

  return (
    <div className='w-full h-[calc(100vh-64px)] bg-slate-50 dark:bg-slate-950'>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={handleNodeClick}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition='top-right'
        className='bg-transparent'
        defaultEdgeOptions={{
          style: { stroke: '#475569', strokeWidth: 2 },
          type: 'smoothstep',
        }}
      >
        <Controls className='bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg shadow-lg dark:bg-slate-800/80 dark:border-slate-700 [&>button]:dark:bg-slate-800 [&>button]:dark:text-slate-200 [&>button:hover]:dark:bg-slate-700' />
        <MiniMap className='bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg shadow-lg dark:bg-slate-800/80 dark:border-slate-700' />
        <Background
          variant={BackgroundVariant.Dots}
          gap={16}
          size={1}
          color="#94a3b8"
          className='opacity-30'
        />
      </ReactFlow>

      {/* 详细讲解Modal */}
      <DecisionTreeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        nodeData={selectedNodeData || {}}
      />
    </div>
  );
}
