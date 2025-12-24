export interface ICTConcept {
    id: string;
    title: string;
    filename: string;
    description: string;
    category: 'bullish' | 'bearish' | 'neutral';
    keywords: string[];
    explanation: {
        overview: string;
        setup: string;
        entry: string;
        exit: string;
        psychology: string;
        examples: string;
    };
}

export const ictConcepts: ICTConcept[] = [
    {
        id: 'amd',
        title: 'AMD 市场结构',
        filename: 'ICT_AMD.png',
        description: 'AMD市场结构分析图表',
        category: 'neutral',
        keywords: ['市场结构', 'AMD', '技术分析'],
        explanation: {
            overview: 'AMD每日循环核心逻辑：\n' +
                '每一天的行情，通常都会演绎一个完整的剧本，叫做AMD：\n' +
                'A (Accumulation 累积/震荡): 亚洲盘\n' +
                'M (Manipulation 操纵/诱骗): 伦敦盘\n' +
                'D (Distribution 派发/趋势): 纽约盘\n\n' +
                'AMD是ICT交易法中的时间框架分析体系，它基于全球主要金融市场的开盘时间，揭示了主力在一天中分三幕上演的完整剧本。理解这个循环，能让你像看电影一样看懂每天的行情走势。',
            setup: '三大时段详解 (新西兰时间版)：\n' +
                '第一幕：亚洲盘 (Asian Range) —— "画地为牢"\n' +
                '• 新西兰时间：下午13:00 - 晚上19:00\n' +
                '• 特征：Accumulation (累积)，波动率低，价格在窄幅区间横盘震荡\n' +
                '• 主力目的：造流动性，在上方制造等高点(EQH)，下方制造等低点(EQL)\n' +
                '• 你的策略：观望/画线，千万别做突破，必死无疑\n' +
                '• 关键任务：画出亚洲盘最高点和最低点(Asian High/Low)，这是晚上猎杀目标\n\n' +
                '第二幕：伦敦盘 (London Open) —— "犹大摆动 (Judas Swing)"\n' +
                '• 新西兰时间：晚上20:00 - 23:00 (黄金时间!)\n' +
                '• 特征：Manipulation (操纵)，法兰克福和伦敦银行开门，算法启动\n' +
                '• 剧本：价格突然向一个方向剧烈突破(通常是假突破)\n' +
                '• 目的：扫掉亚洲盘积累的止损(海龟汤!)\n' +
                '• 你的策略：猎杀时刻，如果你看涨，等待跌破Asian Low后迅速收回做多；看跌则等待涨破Asian High后收回做空',
            entry: 'AMD交易操作指南：\n' +
                '亚洲盘策略：\n' +
                '• 画出Asian High和Asian Low两条横线\n' +
                '• 观察价格在区间内的累积行为\n' +
                '• 寻找等高点(EQH)和等低点(EQL)的形成\n' +
                '• 绝对不要做突破，保持观望\n\n' +
                '伦敦盘策略：\n' +
                '• 等待黄金时间晚上20:00-23:00的突破\n' +
                '• 看涨：等价格跌破Asian Low后SFP收回立刻做多\n' +
                '• 看跌：等价格涨破Asian High后SFP收回立刻做空\n' +
                '• 这是最舒服的交易时间，吃完晚饭刚好开工\n\n' +
                '纽约盘策略：\n' +
                '• 不建议熬夜，除非有重大数据发布\n' +
                '• 挂单流：在睡前挂单在NY OTE(纽约回撤位)\n' +
                '• 如果伦敦盘已确立趋势，等待回踩后继续跟进',
            exit: 'AMD交易风险管理：\n' +
                '亚洲盘：无操作，无风险\n\n' +
                '伦敦盘：\n' +
                '• 止损：设在Asian High/Low的另一侧\n' +
                '• 止盈：目标为下一个流动性池子或2:1风险回报比\n' +
                '• 如果突破后没有SFP收回，立即止损\n\n' +
                '纽约盘：\n' +
                '• 如果熬夜操作，设置紧止损\n' +
                '• 挂单交易：设置在合理回撤位的限价单\n' +
                '• 数据风险：重大经济数据发布时谨慎操作\n' +
                '• 流动性耗尽：当价格到达预期目标时获利了结',
            psychology: 'AMD交易心理建设：\n' +
                '• 时间观念：严格按照时段操作，不要逆时段交易\n' +
                '• 耐心等待：亚洲盘绝对不要急躁，等待伦敦盘的黄金机会\n' +
                '• 节奏感：像看电影一样看待行情，三幕剧各有精彩\n' +
                '• 纪律性：只在指定时段操作，不要在其他时间盲目入场\n' +
                '• 流动性思维：理解每个时段主力获取流动性的目的\n' +
                '• 新西兰时区优势：正好覆盖亚洲和伦敦开盘，避开纽约熬夜\n' +
                '• 轻松交易：伦敦盘是最舒服的交易时间，享受晚餐后的黄金时光\n' +
                '• 数据驱动：重大数据发布时要特别小心，可能打乱AMD节奏',
            examples: 'AMD实战案例分析：\n' +
                '案例一：典型的AMD剧本\n' +
                '• 亚洲盘(13:00-19:00)：价格在50美元区间内横盘，波动率极低\n' +
                '• 观察：主力在区间上沿反复测试，形成EQH；下沿也形成EQL\n' +
                '• 画线：在最高点和最低点画出Asian High和Asian Low\n' +
                '• 结果：收盘时价格在区间中部，为伦敦盘突破做准备\n\n' +
                '案例二：伦敦盘犹大摆动\n' +
                '• 时间：晚上20:00，价格突然向下突破Asian Low\n' +
                '• 突破幅度：刺破50点，然后立刻收回(SFP确认)\n' +
                '• 操作：看到SFP确认，立即做多，止损设在突破最低点\n' +
                '• 结果：价格开始真正的上涨，目标直指Asian High和上方的EQH\n\n' +
                '案例三：纽约盘趋势延续\n' +
                '• 背景：伦敦盘确立上涨趋势，价格突破Asian High后继续上涨\n' +
                '• 纽约盘(02:00-05:00)：美股开盘，波动率激增\n' +
                '• 挂单策略：在睡前设置NY OTE限价单，目标是回踩接人\n' +
                '• 结果：价格在凌晨回踩到OTE位置后继续上涨，完成完整剧本\n\n' +
                'AMD核心要点：\n' +
                '• 时段识别：每个时段都有其特定的目的和操作策略\n' +
                '• 流动性制造：亚洲盘造势，伦敦盘取势，纽约盘派势\n' +
                '• 新西兰优势：时区完美匹配亚洲和伦敦开盘时间\n' +
                '• 节奏掌控：像导演一样掌控交易节奏，不急不躁\n' +
                '• 黄金时间：伦敦盘是最佳交易时机，务必把握'
        }
    },
    {
        id: 'bullish-breaker',
        title: '看涨突破块 (Bullish Breaker)',
        filename: 'ICT_BULLISH_BREAKER.png',
        description: 'ICT高级概念：失效的看跌OB转化为看涨支撑，趋势反转的关键信号',
        category: 'bullish',
        keywords: ['Breaker Block', '突破块', 'MSS', '市场结构转换', 'PD Array'],
        explanation: {
            overview: 'Breaker Block（突破块）是ICT交易体系中的高级PD Array概念。Bullish Breaker是当看跌订单块被暴力突破失效后，转化为新的看涨支撑区域。\n' +
                '\n' +
                'Breaker Block的本质：\n' +
                '• Breaker = 失效的Order Block转化而来\n' +
                '• 当OB被暴力突破，原来的阻力变成支撑（反之亦然）\n' +
                '• 这是ICT中"角色转换"(Role Reversal)的核心体现\n' +
                '\n' +
                'Bullish Breaker的定义：\n' +
                '• 原本是一个看跌OB（阻力）\n' +
                '• 价格暴力突破该OB并收盘在其上方\n' +
                '• 突破伴随MSS（市场结构转换）\n' +
                '• 原来的阻力现在变成支撑\n' +
                '\n' +
                '为什么Breaker有效：\n' +
                '• 原来在此做空的机构被套牢\n' +
                '• 他们需要在突破后止损（制造买盘）\n' +
                '• 新的多头力量入场\n' +
                '• 当价格回测时，多方会保护这个新支撑',
            setup: 'Bullish Breaker完整五步结构：\n' +
                '\n' +
                '第一步：Old Low（前低）\n' +
                '• 左边的一个相对低点\n' +
                '• 这里有多头的止损单\n' +
                '• 也是流动性所在\n' +
                '\n' +
                '第二步：Swing High（摆动高点）\n' +
                '• 形成一个阶段性高点\n' +
                '• 这里形成了看跌OB（后来会变成Breaker）\n' +
                '• 价格从这里被打下去\n' +
                '\n' +
                '第三步：Liquidity Sweep（流动性扫荡）\n' +
                '• 价格跌破Old Low\n' +
                '• 创出更低的低点（Lower Low）\n' +
                '• 扫掉多头止损，吸收流动性\n' +
                '• 这是诱空陷阱\n' +
                '\n' +
                '第四步：MSS（市场结构转换）\n' +
                '• 价格暴力反转\n' +
                '• 巨大的看涨K线突破Swing High\n' +
                '• 原来的看跌OB被突破失效\n' +
                '• 此刻Breaker Block正式形成\n' +
                '• 空头全部被套\n' +
                '\n' +
                '第五步：Entry（入场回测）\n' +
                '• 价格回调到原来的Swing High位置\n' +
                '• 这里现在是Bullish Breaker支撑\n' +
                '• 等待入场确认信号后做多\n' +
                '\n' +
                'Breaker有效性验证：\n' +
                '• ✅ 必须有Displacement（暴力突破）\n' +
                '• ✅ 突破伴随FVG形成\n' +
                '• ✅ 形成清晰的MSS\n' +
                '• ✅ 符合HTF看涨Bias',
            entry: '入场策略详解：\n' +
                '\n' +
                '入场方式一：Breaker上沿入场\n' +
                '• 位置：Breaker Block的High（原OB的High）\n' +
                '• 方法：在此位置挂限价买单\n' +
                '• 优点：更高的入场概率\n' +
                '• 缺点：止损距离较大\n' +
                '\n' +
                '入场方式二：Breaker中轴入场\n' +
                '• 位置：Breaker Block的50%位置\n' +
                '• 方法：挂限价买单\n' +
                '• 优点：更好的风险回报比\n' +
                '\n' +
                '入场方式三：Breaker + FVG汇合\n' +
                '• 寻找：Breaker区域内是否有LTF的FVG\n' +
                '• 入场：在FVG的CE位置\n' +
                '• 优点：双重PD Array汇合，极高胜率\n' +
                '\n' +
                '入场确认信号：\n' +
                '• 在Breaker区域收出看涨吞没\n' +
                '• 形成长下影线Pin Bar\n' +
                '• LTF出现MSS确认\n' +
                '• 在Breaker内形成更小的Bullish OB\n' +
                '\n' +
                '入场checklist：\n' +
                '• ✅ HTF Bias看涨\n' +
                '• ✅ 已确认MSS（结构转换）\n' +
                '• ✅ Breaker是新鲜的（第一次回测）\n' +
                '• ✅ 存在入场确认信号\n' +
                '• ✅ 止损位置合理（Breaker下方）',
            exit: '出场策略与风险管理：\n' +
                '\n' +
                '止损设置：\n' +
                '• 标准止损：Breaker Low之下\n' +
                '• 保守止损：Swing Low（流动性扫荡的最低点）之下\n' +
                '• 技术止损：如果K线收盘跌破Breaker\n' +
                '\n' +
                'Breaker失效条件：\n' +
                '• 价格在Breaker下方收盘\n' +
                '• 重新跌破MSS形成点\n' +
                '• HTF Bias反转为看跌\n' +
                '\n' +
                '止盈目标：\n' +
                '• 第一目标：MSS形成时的高点\n' +
                '• 第二目标：上方流动性（BSL）\n' +
                '• 第三目标：HTF的看涨目标位\n' +
                '\n' +
                '分批出场：\n' +
                '• 第一目标减仓50%\n' +
                '• 移动止损到入场价\n' +
                '• 剩余仓位追踪到更远目标',
            psychology: 'Breaker Block交易心理：\n' +
                '\n' +
                '理解角色转换：\n' +
                '• 阻力变支撑是交易中最强大的概念之一\n' +
                '• Breaker代表市场力量的根本性转变\n' +
                '• 原来的空头被套，现在变成买盘来源\n' +
                '\n' +
                '常见心理误区：\n' +
                '• 误区一：任何突破都会形成Breaker\n' +
                '  → 正确：必须有Displacement和MSS确认\n' +
                '• 误区二：Breaker可以无限次回测\n' +
                '  → 正确：第一次回测效果最好\n' +
                '\n' +
                '正确的交易心态：\n' +
                '• 耐心等待MSS确认\n' +
                '• 等待回测入场，不追突破\n' +
                '• 相信角色转换的力量\n' +
                '• 严格止损，接受可能失败\n' +
                '\n' +
                '机构视角：\n' +
                '• "原来的空头正在止损离场"\n' +
                '• "他们的止损就是我的入场"\n' +
                '• "Breaker是市场力量转变的证明"',
            examples: 'Bullish Breaker实战案例：\n' +
                '\n' +
                '案例一：标准Bullish Breaker入场\n' +
                '• 背景：日线下跌趋势中寻找反转\n' +
                '• 第一步：识别到4H Swing High（看跌OB）\n' +
                '• 第二步：价格跌破前低，扫荡流动性\n' +
                '• 第三步：暴力反转，突破Swing High形成MSS\n' +
                '• 第四步：等待价格回测到原Swing High（现Breaker）\n' +
                '• 入场：Breaker中轴位置\n' +
                '• 止损：Breaker下方\n' +
                '• 目标：MSS高点以上\n' +
                '• 结果：完美触及后反弹\n' +
                '\n' +
                '案例二：Breaker + OTE汇合\n' +
                '• 发现：Breaker区域恰好在OTE区域（61.8%-79%）\n' +
                '• 优势：双重PD Array汇合\n' +
                '• 入场：OTE + Breaker的交汇处\n' +
                '• 结果：极高概率成功\n' +
                '\n' +
                '案例三：失败的Breaker（学习案例）\n' +
                '• 错误：没有等待MSS确认就入场\n' +
                '• 结果：价格继续下跌\n' +
                '• 教训：MSS是Breaker形成的必要条件\n' +
                '\n' +
                'Breaker核心要点：\n' +
                '• Breaker = 失效的OB + MSS确认\n' +
                '• 阻力变支撑（或反之）\n' +
                '• 第一次回测效果最佳\n' +
                '• 配合其他PD Array使用更佳\n' +
                '• 严格止损，接受失败'
        }
    },
    {
        id: 'bearish-breaker',
        title: '看跌突破块 (Bearish Breaker)',
        filename: 'ICT_BEARISH_BREAKER.png',
        description: 'ICT高级概念：失效的看涨OB转化为看跌阻力，趋势反转的关键信号',
        category: 'bearish',
        keywords: ['Breaker Block', '突破块', 'MSS', '市场结构转换', 'PD Array'],
        explanation: {
            overview: 'Bearish Breaker是ICT交易体系中的高级PD Array概念。当看涨订单块被暴力突破失效后，转化为新的看跌阻力区域。\n' +
                '\n' +
                'Bearish Breaker的本质：\n' +
                '• Breaker = 失效的Order Block转化而来\n' +
                '• 当看涨OB被暴力跌破，原来的支撑变成阻力\n' +
                '• 这是ICT中"角色转换"(Role Reversal)的核心体现\n' +
                '\n' +
                'Bearish Breaker的定义：\n' +
                '• 原本是一个看涨OB（支撑）\n' +
                '• 价格暴力跌破该OB并收盘在其下方\n' +
                '• 跌破伴随MSS（市场结构转换）\n' +
                '• 原来的支撑现在变成阻力\n' +
                '\n' +
                '为什么Bearish Breaker有效：\n' +
                '• 原来在此做多的机构被套牢\n' +
                '• 他们需要在跌破后止损（制造卖盘）\n' +
                '• 新的空头力量入场\n' +
                '• 当价格反弹回测时，空方会保护这个新阻力',
            setup: 'Bearish Breaker完整五步结构：\n' +
                '\n' +
                '第一步：Old High（前高）\n' +
                '• 左边的一个相对高点\n' +
                '• 这里有空头的止损单\n' +
                '• 也是上方流动性所在\n' +
                '\n' +
                '第二步：Swing Low（摆动低点）\n' +
                '• 形成一个阶段性低点\n' +
                '• 这里形成了看涨OB（后来会变成Breaker）\n' +
                '• 价格从这里被拉上去\n' +
                '\n' +
                '第三步：Liquidity Sweep（流动性扫荡）\n' +
                '• 价格涨破Old High\n' +
                '• 创出更高的高点（Higher High）\n' +
                '• 扫掉空头止损，吸收上方流动性\n' +
                '• 这是诱多陷阱\n' +
                '\n' +
                '第四步：MSS（市场结构转换）\n' +
                '• 价格暴力反转向下\n' +
                '• 巨大的看跌K线跌破Swing Low\n' +
                '• 原来的看涨OB被突破失效\n' +
                '• 此刻Bearish Breaker正式形成\n' +
                '• 多头全部被套\n' +
                '\n' +
                '第五步：Entry（入场回测）\n' +
                '• 价格反弹到原来的Swing Low位置\n' +
                '• 这里现在是Bearish Breaker阻力\n' +
                '• 等待入场确认信号后做空\n' +
                '\n' +
                'Breaker有效性验证：\n' +
                '• ✅ 必须有Displacement（暴力跌破）\n' +
                '• ✅ 跌破伴随看跌FVG (SIBI)形成\n' +
                '• ✅ 形成清晰的MSS\n' +
                '• ✅ 符合HTF看跌Bias',
            entry: '入场策略详解：\n' +
                '\n' +
                '入场方式一：Breaker下沿入场\n' +
                '• 位置：Breaker Block的Low（原OB的Low）\n' +
                '• 方法：在此位置挂限价卖单\n' +
                '• 优点：更高的入场概率\n' +
                '• 缺点：止损距离较大\n' +
                '\n' +
                '入场方式二：Breaker中轴入场\n' +
                '• 位置：Breaker Block的50%位置\n' +
                '• 方法：挂限价卖单\n' +
                '• 优点：更好的风险回报比\n' +
                '\n' +
                '入场方式三：Breaker + SIBI汇合\n' +
                '• 寻找：Breaker区域内是否有LTF的看跌FVG\n' +
                '• 入场：在FVG的CE位置\n' +
                '• 优点：双重PD Array汇合，极高胜率\n' +
                '\n' +
                '入场确认信号：\n' +
                '• 在Breaker区域收出看跌吞没\n' +
                '• 形成长上影线Pin Bar\n' +
                '• LTF出现MSS确认\n' +
                '• 在Breaker内形成更小的Bearish OB\n' +
                '\n' +
                '入场checklist：\n' +
                '• ✅ HTF Bias看跌\n' +
                '• ✅ 已确认MSS（结构转换）\n' +
                '• ✅ Breaker是新鲜的（第一次回测）\n' +
                '• ✅ 存在入场确认信号\n' +
                '• ✅ 止损位置合理（Breaker上方）',
            exit: '出场策略与风险管理：\n' +
                '\n' +
                '止损设置：\n' +
                '• 标准止损：Breaker High之上\n' +
                '• 保守止损：Swing High（流动性扫荡的最高点）之上\n' +
                '• 技术止损：如果K线收盘涨破Breaker\n' +
                '\n' +
                'Breaker失效条件：\n' +
                '• 价格在Breaker上方收盘\n' +
                '• 重新涨破MSS形成点\n' +
                '• HTF Bias反转为看涨\n' +
                '\n' +
                '止盈目标：\n' +
                '• 第一目标：MSS形成时的低点\n' +
                '• 第二目标：下方流动性（SSL）\n' +
                '• 第三目标：HTF的看跌目标位\n' +
                '\n' +
                '分批出场：\n' +
                '• 第一目标减仓50%\n' +
                '• 移动止损到入场价\n' +
                '• 剩余仓位追踪到更远目标',
            psychology: 'Bearish Breaker交易心理：\n' +
                '\n' +
                '理解角色转换：\n' +
                '• 支撑变阻力是交易中最强大的概念之一\n' +
                '• Breaker代表市场力量的根本性转变\n' +
                '• 原来的多头被套，现在变成卖盘来源\n' +
                '\n' +
                '常见心理误区：\n' +
                '• 误区一：反弹就是做多机会\n' +
                '  → 正确：Breaker回测是做空机会\n' +
                '• 误区二：跌破支撑后不可能再涨回来\n' +
                '  → 正确：价格通常会回测一次确认\n' +
                '\n' +
                '正确的交易心态：\n' +
                '• 耐心等待MSS确认\n' +
                '• 等待反弹回测入场，不追空\n' +
                '• 相信角色转换的力量\n' +
                '• 严格止损，接受可能失败\n' +
                '\n' +
                '机构视角：\n' +
                '• "原来的多头正在止损离场"\n' +
                '• "他们的止损就是我的做空入场"\n' +
                '• "反弹是送钱的机会"',
            examples: 'Bearish Breaker实战案例：\n' +
                '\n' +
                '案例一：标准Bearish Breaker入场\n' +
                '• 背景：日线上涨趋势中寻找反转\n' +
                '• 第一步：识别到4H Swing Low（看涨OB）\n' +
                '• 第二步：价格涨破前高，扫荡流动性\n' +
                '• 第三步：暴力反转下跌，跌破Swing Low形成MSS\n' +
                '• 第四步：等待价格反弹到原Swing Low（现Breaker）\n' +
                '• 入场：Breaker中轴位置做空\n' +
                '• 止损：Breaker上方\n' +
                '• 目标：MSS低点以下\n' +
                '• 结果：完美遇阻后继续下跌\n' +
                '\n' +
                '案例二：Breaker + Premium汇合\n' +
                '• 发现：Breaker区域恰好在溢价区（Premium）\n' +
                '• 优势：双重确认\n' +
                '• 入场：Premium + Breaker的交汇处做空\n' +
                '• 结果：极高概率成功\n' +
                '\n' +
                '案例三：失败的Breaker（学习案例）\n' +
                '• 错误：没有等待MSS确认就追空\n' +
                '• 结果：价格继续上涨\n' +
                '• 教训：MSS是Breaker形成的必要条件\n' +
                '\n' +
                'Bearish Breaker核心要点：\n' +
                '• Breaker = 失效的看涨OB + MSS确认\n' +
                '• 支撑变阻力\n' +
                '• 第一次回测效果最佳\n' +
                '• 反弹是做空入场机会\n' +
                '• 严格止损，接受失败'
        }
    },
    {
        id: 'bullish-order-block',
        title: '看涨订单块 (Bullish Order Block)',
        filename: 'ICT_BULLISH_ORDER_BLOCK.png',
        description: 'ICT核心概念：机构大量买入的价格区域，下跌趋势反转的关键支撑',
        category: 'bullish',
        keywords: ['订单块', 'Order Block', 'OB', 'Bullish OB', 'PD Array'],
        explanation: {
            overview: 'Order Block（订单块）是ICT交易体系中最重要的PD Array（溢价/折价阵列）之一。看涨订单块代表机构大量买入订单集中的区域，是未来价格回调时的强支撑。\n' +
                '\n' +
                'Order Block的本质：\n' +
                '• OB是机构在某一位置大量建仓的"脚印"\n' +
                '• 当价格回到这个区域时，机构会保护这些仓位\n' +
                '• 因此OB成为高概率的支撑/阻力区域\n' +
                '\n' +
                '看涨OB的定义：\n' +
                '• 在价格暴力上涨（Displacement）之前的最后一根下跌K线\n' +
                '• 这根下跌K线通常是红色（看跌）K线\n' +
                '• 紧随其后必须有强势的上涨K线作为确认\n' +
                '\n' +
                '为什么OB有效：\n' +
                '• 机构在OB区域建立了大量多头仓位\n' +
                '• 他们不会让价格轻易跌破自己的成本区\n' +
                '• 当价格回测OB时，机构会增加买盘保护仓位\n' +
                '• 这创造了散户可以利用的入场机会',
            setup: 'Order Block识别与验证：\n' +
                '\n' +
                '标准看涨OB结构：\n' +
                '• 最后一根下跌K线：这就是Order Block\n' +
                '• OB区域：从该K线的Open到Low\n' +
                '• Displacement：紧随OB的暴力上涨K线\n' +
                '• 确认条件：Displacement必须伴随FVG（公允价值缺口）\n' +
                '\n' +
                'Mean Threshold（中轴线）详解：\n' +
                '• 位置：OB区域的50%位置\n' +
                '• 计算：(OB High + OB Low) / 2\n' +
                '• 重要性：多头的"最后防线"\n' +
                '• 规则：健康的OB回测不应收盘跌破MT\n' +
                '• 入场：在MT附近挂单是最常用的入场方式\n' +
                '\n' +
                'OB有效性验证标准：\n' +
                '• ✅ 紧随其后有Displacement（暴力上涨）\n' +
                '• ✅ Displacement中包含FVG\n' +
                '• ✅ OB符合HTF的Bias方向\n' +
                '• ✅ OB位于折扣区（Discount Zone）\n' +
                '• ❌ 没有Displacement的OB无效\n' +
                '• ❌ 被多次回测的OB效力降低\n' +
                '\n' +
                'OB层级与时间框架：\n' +
                '• HTF OB > LTF OB（高时间框架优先）\n' +
                '• 日线OB > 4H OB > 1H OB > 15M OB\n' +
                '• 使用LTF精细化入场，用HTF确定方向',
            entry: '入场策略详解：\n' +
                '\n' +
                '入场方式一：OB上沿入场\n' +
                '• 位置：OB区域的High\n' +
                '• 方法：在OB High挂限价买单\n' +
                '• 优点：更高的入场概率\n' +
                '• 缺点：止损距离较大\n' +
                '\n' +
                '入场方式二：Mean Threshold入场\n' +
                '• 位置：OB区域的50%位置\n' +
                '• 方法：在MT挂限价买单\n' +
                '• 优点：更好的风险回报比\n' +
                '• 缺点：可能错过不回测MT的行情\n' +
                '\n' +
                '入场方式三：OB下沿入场（激进）\n' +
                '• 位置：OB区域的Low附近\n' +
                '• 方法：等待价格刺入OB底部后反弹\n' +
                '• 优点：最佳风险回报比\n' +
                '• 缺点：需要精确时机，可能被止损\n' +
                '\n' +
                '入场确认信号：\n' +
                '• 在OB区域收出看涨吞没\n' +
                '• 在OB区域形成Pin Bar（长下影线）\n' +
                '• 在OB区域出现MSS（市场结构转换）\n' +
                '• 在LTF形成更小的看涨OB\n' +
                '\n' +
                '入场checklist：\n' +
                '• ✅ HTF Bias看涨\n' +
                '• ✅ OB位于折扣区\n' +
                '• ✅ OB是新鲜的（未被回测）\n' +
                '• ✅ 存在确认信号\n' +
                '• ✅ 止损位置合理',
            exit: '出场策略与风险管理：\n' +
                '\n' +
                '止损设置：\n' +
                '• 标准止损：OB Low之下几个点\n' +
                '• 保守止损：Swing Low之下\n' +
                '• 技术止损：如果K线收盘跌破OB，考虑止损\n' +
                '\n' +
                'OB失效条件：\n' +
                '• 价格在OB区域下方收盘（不是刺穿）\n' +
                '• OB被连续多次回测后变弱\n' +
                '• HTF Bias反转为看跌\n' +
                '• 出现更大级别的看跌结构\n' +
                '\n' +
                '止盈目标：\n' +
                '• 第一目标：Displacement留下的FVG高点\n' +
                '• 第二目标：前高（Swing High）\n' +
                '• 第三目标：上方流动性（BSL）\n' +
                '• 最终目标：HTF关键阻力位\n' +
                '\n' +
                '分批出场：\n' +
                '• 第一目标减仓50%\n' +
                '• 移动止损到入场价\n' +
                '• 剩余仓位追踪到更远目标',
            psychology: 'Order Block交易心理：\n' +
                '\n' +
                '常见心理误区：\n' +
                '• 误区一：所有OB都会起作用\n' +
                '  → 正确：只有符合条件的优质OB才值得交易\n' +
                '• 误区二：价格必须精确触及OB\n' +
                '  → 正确：有时价格在OB附近就会反转\n' +
                '• 误区三：OB被触及就可以入场\n' +
                '  → 正确：需要入场确认信号\n' +
                '\n' +
                '正确的交易心态：\n' +
                '• 耐心等待：等待价格回到OB区域\n' +
                '• 选择性交易：只交易高质量OB\n' +
                '• 接受止损：OB不是100%有效\n' +
                '• 保护本金：严格执行止损\n' +
                '\n' +
                '机构视角思考：\n' +
                '• "这里是机构建仓的区域"\n' +
                '• "他们会保护自己的仓位"\n' +
                '• "我在跟随聪明钱入场"\n' +
                '• "止损在OB失效的位置是合理的"',
            examples: 'Order Block实战案例：\n' +
                '\n' +
                '案例一：标准看涨OB回测入场\n' +
                '• 背景：日线看涨Bias\n' +
                '• 发现：4H图形成清晰的看涨OB\n' +
                '• OB特征：红K线 + 后面有暴力绿K线Displacement\n' +
                '• 等待：价格回测到OB区域\n' +
                '• 入场：在MT位置挂限价单\n' +
                '• 止损：OB Low之下\n' +
                '• 目标：前高（1:3 RR）\n' +
                '• 结果：价格在OB获得支撑后继续上涨\n' +
                '\n' +
                '案例二：OB + FVG汇合入场\n' +
                '• 背景：4H看涨\n' +
                '• 发现：1H OB内部包含15M FVG\n' +
                '• 优势：双重PD Array汇合\n' +
                '• 入场：FVG的CE位置\n' +
                '• 止损：OB下方（更小的止损）\n' +
                '• 结果：极高胜率入场\n' +
                '\n' +
                '案例三：OB失效转Breaker\n' +
                '• 背景：看涨OB被暴力跌破\n' +
                '• 转变：该OB变成Bearish Breaker Block\n' +
                '• 新策略：等价格反弹到该区域时做空\n' +
                '• 原理：失效的支撑变成阻力\n' +
                '\n' +
                'OB核心要点总结：\n' +
                '• OB是暴力行情前的最后一根反向K线\n' +
                '• 必须有Displacement确认OB有效性\n' +
                '• Mean Threshold是最佳入场位置\n' +
                '• 只交易符合HTF Bias的OB\n' +
                '• 严格止损，接受OB可能失效\n' +
                '• 失效的OB可能变成反向Breaker'
        }
    },
    {
        id: 'bearish-order-block',
        title: '看跌订单块 (Bearish Order Block)',
        filename: 'ICT_BEARISH_ORDER_BLOCK.png',
        description: 'ICT核心概念：机构大量卖出的价格区域，上涨趋势反转的关键阻力',
        category: 'bearish',
        keywords: ['订单块', 'Order Block', 'OB', 'Bearish OB', 'PD Array'],
        explanation: {
            overview: 'Bearish Order Block（看跌订单块）是ICT交易体系中的核心PD Array之一。它代表机构大量卖出订单集中的区域，是未来价格反弹时的强阻力。\n' +
                '\n' +
                'Bearish OB的本质：\n' +
                '• OB是机构在某一位置大量出货的"脚印"\n' +
                '• 当价格回到这个区域时，机构会继续出货保护空头仓位\n' +
                '• 因此OB成为高概率的阻力区域\n' +
                '\n' +
                '看跌OB的定义：\n' +
                '• 在价格暴力下跌（Displacement）之前的最后一根上涨K线\n' +
                '• 这根上涨K线通常是绿色（看涨）K线\n' +
                '• 紧随其后必须有强势的下跌K线作为确认\n' +
                '\n' +
                '为什么Bearish OB有效：\n' +
                '• 机构在OB区域建立了大量空头仓位\n' +
                '• 他们不会让价格轻易涨破自己的成本区\n' +
                '• 当价格回测OB时，机构会增加卖盘保护仓位\n' +
                '• 这创造了散户可以利用的做空机会',
            setup: 'Bearish Order Block识别与验证：\n' +
                '\n' +
                '标准看跌OB结构：\n' +
                '• 最后一根上涨K线：这就是Order Block\n' +
                '• OB区域：从该K线的Open到High\n' +
                '• Displacement：紧随OB的暴力下跌K线\n' +
                '• 确认条件：Displacement必须伴随FVG（公允价值缺口）\n' +
                '\n' +
                'Mean Threshold（中轴线）详解：\n' +
                '• 位置：OB区域的50%位置\n' +
                '• 计算：(OB High + OB Low) / 2\n' +
                '• 重要性：空头的"最后防线"\n' +
                '• 规则：健康的OB回测不应收盘涨破MT\n' +
                '• 入场：在MT附近挂单是最常用的做空方式\n' +
                '\n' +
                'OB有效性验证标准：\n' +
                '• ✅ 紧随其后有Displacement（暴力下跌）\n' +
                '• ✅ Displacement中包含看跌FVG (SIBI)\n' +
                '• ✅ OB符合HTF的看跌Bias\n' +
                '• ✅ OB位于溢价区（Premium Zone）\n' +
                '• ❌ 没有Displacement的OB无效\n' +
                '• ❌ 被多次回测的OB效力降低\n' +
                '\n' +
                'OB层级与时间框架：\n' +
                '• HTF OB > LTF OB（高时间框架优先）\n' +
                '• 使用LTF精细化入场，用HTF确定方向',
            entry: '入场策略详解：\n' +
                '\n' +
                '入场方式一：OB下沿入场\n' +
                '• 位置：OB区域的Low\n' +
                '• 方法：在OB Low挂限价卖单\n' +
                '• 优点：更高的入场概率\n' +
                '• 缺点：止损距离较大\n' +
                '\n' +
                '入场方式二：Mean Threshold入场\n' +
                '• 位置：OB区域的50%位置\n' +
                '• 方法：在MT挂限价卖单\n' +
                '• 优点：更好的风险回报比\n' +
                '• 缺点：可能错过不回测MT的行情\n' +
                '\n' +
                '入场方式三：OB上沿入场（激进）\n' +
                '• 位置：OB区域的High附近\n' +
                '• 方法：等待价格刺入OB顶部后回落\n' +
                '• 优点：最佳风险回报比\n' +
                '• 缺点：需要精确时机，可能被止损\n' +
                '\n' +
                '入场确认信号：\n' +
                '• 在OB区域收出看跌吞没\n' +
                '• 在OB区域形成Pin Bar（长上影线）\n' +
                '• 在OB区域出现MSS（市场结构转换）\n' +
                '• 在LTF形成更小的看跌OB\n' +
                '\n' +
                '入场checklist：\n' +
                '• ✅ HTF Bias看跌\n' +
                '• ✅ OB位于溢价区\n' +
                '• ✅ OB是新鲜的（未被回测）\n' +
                '• ✅ 存在确认信号\n' +
                '• ✅ 止损位置合理',
            exit: '出场策略与风险管理：\n' +
                '\n' +
                '止损设置：\n' +
                '• 标准止损：OB High之上几个点\n' +
                '• 保守止损：Swing High之上\n' +
                '• 技术止损：如果K线收盘涨破OB，考虑止损\n' +
                '\n' +
                'OB失效条件：\n' +
                '• 价格在OB区域上方收盘（不是刺穿）\n' +
                '• OB被连续多次回测后变弱\n' +
                '• HTF Bias反转为看涨\n' +
                '• 出现更大级别的看涨结构\n' +
                '\n' +
                '止盈目标：\n' +
                '• 第一目标：Displacement留下的FVG低点\n' +
                '• 第二目标：前低（Swing Low）\n' +
                '• 第三目标：下方流动性（SSL）\n' +
                '• 最终目标：HTF关键支撑位\n' +
                '\n' +
                '分批出场：\n' +
                '• 第一目标减仓50%\n' +
                '• 移动止损到入场价\n' +
                '• 剩余仓位追踪到更远目标',
            psychology: 'Bearish OB交易心理：\n' +
                '\n' +
                '常见心理误区：\n' +
                '• 误区一：上涨中做空很危险\n' +
                '  → 正确：在OB回测时做空是顺应HTF趋势\n' +
                '• 误区二：价格涨到OB就立即做空\n' +
                '  → 正确：需要等待入场确认信号\n' +
                '• 误区三：OB必须100%有效\n' +
                '  → 正确：接受OB可能失效，严格止损\n' +
                '\n' +
                '正确的交易心态：\n' +
                '• 耐心等待：等待价格反弹到OB区域\n' +
                '• 逆向思维：反弹是做空机会，不是恐惧来源\n' +
                '• 选择性交易：只交易高质量OB\n' +
                '• 保护本金：严格执行止损\n' +
                '\n' +
                '机构视角思考：\n' +
                '• "这里是机构出货的区域"\n' +
                '• "他们会保护自己的空头仓位"\n' +
                '• "反弹到OB是机构的第二次做空机会"\n' +
                '• "我在跟随聪明钱做空"',
            examples: 'Bearish Order Block实战案例：\n' +
                '\n' +
                '案例一：标准看跌OB回测入场\n' +
                '• 背景：日线看跌Bias\n' +
                '• 发现：4H图形成清晰的看跌OB\n' +
                '• OB特征：绿K线 + 后面有暴力红K线Displacement\n' +
                '• 等待：价格反弹到OB区域\n' +
                '• 入场：在MT位置挂限价卖单\n' +
                '• 止损：OB High之上\n' +
                '• 目标：前低（1:3 RR）\n' +
                '• 结果：价格在OB遇阻后继续下跌\n' +
                '\n' +
                '案例二：OB + SIBI汇合入场\n' +
                '• 背景：4H看跌\n' +
                '• 发现：1H OB内部包含15M看跌FVG (SIBI)\n' +
                '• 优势：双重PD Array汇合\n' +
                '• 入场：FVG的CE位置\n' +
                '• 止损：OB上方（更小的止损）\n' +
                '• 结果：极高胜率做空入场\n' +
                '\n' +
                '案例三：OB失效转Bullish Breaker\n' +
                '• 背景：看跌OB被暴力涨破\n' +
                '• 转变：该OB变成Bullish Breaker Block\n' +
                '• 新策略：等价格回调到该区域时做多\n' +
                '• 原理：失效的阻力变成支撑\n' +
                '\n' +
                'Bearish OB核心要点总结：\n' +
                '• OB是暴力下跌前的最后一根上涨K线\n' +
                '• 必须有Displacement确认OB有效性\n' +
                '• Mean Threshold是最佳做空位置\n' +
                '• 只交易符合HTF看跌Bias的OB\n' +
                '• 严格止损，接受OB可能失效\n' +
                '• 失效的OB可能变成反向Breaker'
        }
    },
    {
        id: 'fvg-ce',
        title: '公平价值缺口 (FVG)',
        filename: 'ICT_FVG_CE.png',
        description: 'ICT核心概念：价格失衡区域与机构订单流的关键标识',
        category: 'neutral',
        keywords: ['FVG', '公平价值缺口', 'Imbalance', 'SIBI', 'BISI', 'CE'],
        explanation: {
            overview: 'FVG（Fair Value Gap）公平价值缺口是ICT交易体系中最基础也是最重要的概念之一。它代表市场的失衡状态，是机构订单流留下的"脚印"。\n' +
                '\n' +
                'FVG的本质定义：\n' +
                '• FVG是由三根K线形成的价格失衡区域\n' +
                '• 第一根K线的High/Low与第三根K线的Low/High之间存在缺口\n' +
                '• 这个缺口代表中间K线运动过快，导致成交不充分\n' +
                '• 市场有天然的倾向去"填补"这些缺口\n' +
                '\n' +
                'FVG的两种类型：\n' +
                '• BISI（Buyside Imbalance Sellside Inefficiency）：\n' +
                '  - 看涨FVG，买方失衡\n' +
                '  - 价格向上暴涨时形成\n' +
                '  - 回调时提供支撑\n' +
                '\n' +
                '• SIBI（Sellside Imbalance Buyside Inefficiency）：\n' +
                '  - 看跌FVG，卖方失衡\n' +
                '  - 价格向下暴跌时形成\n' +
                '  - 反弹时提供阻力\n' +
                '\n' +
                'FVG的核心逻辑：\n' +
                '• 价格运动过快 → 产生失衡 → 形成FVG\n' +
                '• 市场需要回来"公平交易" → 填补缺口\n' +
                '• 填补过程中提供入场机会',
            setup: 'FVG识别方法与关键元素：\n' +
                '\n' +
                'FVG形成条件（以看涨FVG为例）：\n' +
                '• 第一根K线（Candle 1）：记录其High\n' +
                '• 第二根K线（Candle 2）：暴力上涨的K线\n' +
                '• 第三根K线（Candle 3）：记录其Low\n' +
                '• FVG区域：Candle 1 High 到 Candle 3 Low\n' +
                '• 条件：Candle 3 Low > Candle 1 High（存在缺口）\n' +
                '\n' +
                'CE（Consequent Encroachment）核心入场：\n' +
                '• CE = FVG区域的50%中轴线\n' +
                '• 这是FVG最精准的入场位置\n' +
                '• 计算公式：CE = (FVG High + FVG Low) / 2\n' +
                '• 在CE挂单可获得最佳风险回报比\n' +
                '\n' +
                'FVG的层级重要性：\n' +
                '• 高时间框架FVG > 低时间框架FVG\n' +
                '• 日线FVG > 4小时FVG > 1小时FVG > 15分钟FVG\n' +
                '• 始终以HTF的FVG为主要参考\n' +
                '\n' +
                'FVG有效性判断：\n' +
                '• 新鲜的FVG：从未被回测过，有效性最强\n' +
                '• 部分填补的FVG：被测试但未完全填补，仍有效\n' +
                '• 完全填补的FVG：已被价格穿透并收盘，基本失效\n' +
                '• 反转的FVG（Inversion FVG）：失守后角色转换',
            entry: '入场策略详解：\n' +
                '\n' +
                '看涨FVG入场（BISI）：\n' +
                '• 前提：HTF看涨Bias确认\n' +
                '• 观察：识别价格上涨过程中的FVG\n' +
                '• 入场方式一：在CE位置挂限价买单\n' +
                '• 入场方式二：等价格触及FVG后收出确认K线\n' +
                '• 入场方式三：配合OTE区域汇合入场\n' +
                '• 止损：FVG下沿之下\n' +
                '\n' +
                '看跌FVG入场（SIBI）：\n' +
                '• 前提：HTF看跌Bias确认\n' +
                '• 观察：识别价格下跌过程中的FVG\n' +
                '• 入场方式一：在CE位置挂限价卖单\n' +
                '• 入场方式二：等价格触及FVG后收出确认K线\n' +
                '• 入场方式三：配合OTE区域汇合入场\n' +
                '• 止损：FVG上沿之上\n' +
                '\n' +
                'FVG入场确认清单：\n' +
                '• ✅ HTF Bias与FVG方向一致\n' +
                '• ✅ FVG是新鲜的或仅被部分填补\n' +
                '• ✅ 存在其他PD Array汇合（OB、Breaker等）\n' +
                '• ✅ 入场点接近CE位置\n' +
                '• ✅ 止损距离合理（FVG边缘之外）',
            exit: '出场策略与风险管理：\n' +
                '\n' +
                '止损设置：\n' +
                '• 标准止损：FVG区域边缘之外\n' +
                '  - 看涨FVG：止损设在FVG Low下方\n' +
                '  - 看跌FVG：止损设在FVG High上方\n' +
                '• 保守止损：外扩几个点以防假突破\n' +
                '\n' +
                '止盈目标：\n' +
                '• 第一目标：对面的FVG（如果存在）\n' +
                '• 第二目标：流动性池子（BSL/SSL）\n' +
                '• 第三目标：HTF关键支撑阻力位\n' +
                '\n' +
                'FVG失效条件：\n' +
                '• 价格完全穿透FVG并收盘\n' +
                '• FVG被反复测试多次后变弱\n' +
                '• HTF Bias反转\n' +
                '• 此时应止损或考虑反向入场\n' +
                '\n' +
                '分批出场：\n' +
                '• 第一目标减仓30%-50%\n' +
                '• 移动止损到入场价\n' +
                '• 剩余仓位追踪到最终目标',
            psychology: 'FVG交易心理建设：\n' +
                '\n' +
                '常见误区：\n' +
                '• 错误：所有FVG都会被填补\n' +
                '• 正确：只有符合HTF Bias的FVG才值得关注\n' +
                '• 错误：FVG是100%的支撑阻力\n' +
                '• 正确：FVG只是概率性的入场区域\n' +
                '\n' +
                '正确心态：\n' +
                '• 耐心等待：不追逐每一个FVG\n' +
                '• 选择性入场：只在高概率FVG入场\n' +
                '• 接受失败：FVG可能被突破，这是正常的\n' +
                '• 汇合思维：寻找多个技术信号汇合\n' +
                '\n' +
                '高级理解：\n' +
                '• FVG是机构的"脚印"，不是魔法线\n' +
                '• 市场不一定会填补每一个FVG\n' +
                '• 强势趋势可能直接略过FVG\n' +
                '• FVG的价值在于提供结构化入场框架\n' +
                '\n' +
                '记住：\n' +
                '• FVG是概率优势，不是确定性保证\n' +
                '• 严格止损是使用FVG的前提\n' +
                '• HTF Bias决定FVG的有效性',
            examples: 'FVG实战案例分析：\n' +
                '\n' +
                '案例一：标准看涨FVG + CE入场\n' +
                '• 背景：日线看涨偏见，价格在回调中\n' +
                '• 发现：4小时图上形成清晰的看涨FVG\n' +
                '• FVG区域：103 - 112\n' +
                '• CE位置：(103+112)/2 = 107.5\n' +
                '• 入场：在107.5挂限价买单\n' +
                '• 止损：102（FVG下方）\n' +
                '• 结果：价格精准回踩CE后反弹\n' +
                '\n' +
                '案例二：FVG + OB汇合入场\n' +
                '• 背景：4小时看涨\n' +
                '• 发现：1小时FVG内部存在15分钟Bullish OB\n' +
                '• 汇合优势：双重确认，提高胜率\n' +
                '• 入场：OB区域内挂单\n' +
                '• 止损：OB和FVG共同下方\n' +
                '• 风险：更小的止损距离\n' +
                '\n' +
                '案例三：Inversion FVG（角色转换）\n' +
                '• 背景：看涨FVG被暴力跌破\n' +
                '• 现象：之前的支撑FVG变成阻力\n' +
                '• 入场：价格反弹到该FVG时做空\n' +
                '• 原理：支撑阻力角色转换\n' +
                '• 这是高级FVG应用\n' +
                '\n' +
                'FVG核心要点总结：\n' +
                '• FVG = 三根K线形成的失衡区域\n' +
                '• CE = FVG中轴线，最佳入场位置\n' +
                '• 只交易符合HTF Bias的FVG\n' +
                '• 寻找PD Array汇合提高胜率\n' +
                '• 使用FVG边缘作为止损参考\n' +
                '• Inversion FVG是高级应用'
        }
    },
    {
        id: 'ote',
        title: '最优交易入场 (OTE)',
        filename: 'ICT_OTE.png',
        description: 'ICT核心入场策略：基于斐波那契回撤的机构级入场位置',
        category: 'neutral',
        keywords: ['OTE', '斐波那契', '折扣区', '溢价区', 'Premium', 'Discount'],
        explanation: {
            overview: 'OTE（Optimal Trade Entry）最优交易入场是ICT交易体系中最重要的入场概念之一。它基于斐波那契回撤原理，定义了机构最可能挂单的精确位置。\n' +
                '\n' +
                '核心概念 - Premium vs Discount：\n' +
                '• Premium Zone（溢价区）：0% - 50% 区间，价格相对"昂贵"\n' +
                '• Discount Zone（折扣区）：50% - 100% 区间，价格相对"便宜"\n' +
                '• Equilibrium（均衡点）：50% 位置，分割溢价区和折扣区的分界线\n' +
                '\n' +
                '黄金法则：\n' +
                '• 做多时：只在折扣区（Discount）寻找机会\n' +
                '• 做空时：只在溢价区（Premium）寻找机会\n' +
                '• 永远不要在均衡点附近入场，风险回报比极差\n' +
                '\n' +
                'OTE的本质：\n' +
                '• 机构不会在高位追涨或低位杀跌\n' +
                '• 聪明钱总是在回撤时加仓\n' +
                '• OTE区域是机构限价单最密集的位置\n' +
                '• 理解OTE就是理解机构的交易习惯',
            setup: 'OTE完整结构与关键位置：\n' +
                '\n' +
                '斐波那契层级详解：\n' +
                '• 0%（Swing High）：本轮行情的高点\n' +
                '• 23.6%：微弱回撤，通常不足以入场\n' +
                '• 38.2%：浅回撤，可作为激进入场参考\n' +
                '• 50%（Equilibrium）：均衡点，分界线\n' +
                '• 61.8%：OTE核心区域开始\n' +
                '• 70.5%：OTE区域中心（ICT最强调的位置）\n' +
                '• 79%：OTE核心区域结束，也是止损位置参考\n' +
                '• 100%（Swing Low）：本轮行情的低点\n' +
                '\n' +
                'OTE杀戮区域（Kill Zone）：\n' +
                '• 范围：61.8% - 79%\n' +
                '• 最佳入场：70.5% 附近\n' +
                '• 止损参考：79% 下方\n' +
                '• 这是机构限价单最密集的区域\n' +
                '\n' +
                'OTE与PD Array的结合：\n' +
                '• 当OTE区域内存在FVG（公允价值缺口）→ 高概率入场\n' +
                '• 当OTE区域内存在Order Block → 极高概率入场\n' +
                '• 当OTE区域内存在Breaker Block → 顶级入场信号\n' +
                '• 多个PD Array confluence（汇合）= 最强入场点',
            entry: '入场策略与确认方法：\n' +
                '\n' +
                '看涨OTE入场（Bullish OTE）：\n' +
                '• 前提：更高时间框架看涨偏见（Bullish Bias）\n' +
                '• 确认：价格从高点回撤进入61.8%-79%区域\n' +
                '• 入场触发：\n' +
                '  - 在OTE区域内出现看涨吞没\n' +
                '  - 在OTE区域内形成SFP（假突破）\n' +
                '  - 价格触及OTE区域内的FVG并反弹\n' +
                '  - 在OTE区域内的Order Block获得支撑\n' +
                '\n' +
                '看跌OTE入场（Bearish OTE）：\n' +
                '• 前提：更高时间框架看跌偏见（Bearish Bias）\n' +
                '• 确认：价格从低点反弹进入61.8%-79%区域（倒置）\n' +
                '• 入场触发：\n' +
                '  - 在OTE区域内出现看跌吞没\n' +
                '  - 在OTE区域内形成SFP\n' +
                '  - 价格触及OTE区域内的看跌FVG并回落\n' +
                '  - 在OTE区域内的Bearish OB遇阻\n' +
                '\n' +
                '入场确认清单：\n' +
                '• ✅ HTF Bias确认（日线/4小时方向）\n' +
                '• ✅ 价格进入OTE区域（61.8%-79%）\n' +
                '• ✅ 存在PD Array汇合（FVG/OB/Breaker）\n' +
                '• ✅ 出现入场触发信号（吞没/SFP/MSS）\n' +
                '• ✅ 止损可控（通常在79%下方）',
            exit: '出场策略与风险管理：\n' +
                '\n' +
                '止损设置：\n' +
                '• 标准止损：79%回撤位下方（做多）或上方（做空）\n' +
                '• 保守止损：Swing Low/High下方/上方\n' +
                '• 激进止损：OTE区域内PD Array的末端\n' +
                '\n' +
                '止盈目标：\n' +
                '• 第一目标：前高/前低（-1:1 RR）\n' +
                '• 第二目标：对面的流动性池子（BSL/SSL）\n' +
                '• 最终目标：更高时间框架的流动性目标\n' +
                '\n' +
                '分批出场策略：\n' +
                '• 第一目标位减仓50%\n' +
                '• 移动止损到入场价\n' +
                '• 剩余仓位追踪到最终目标\n' +
                '\n' +
                '风险回报比计算：\n' +
                '• OTE入场通常提供最佳R:R\n' +
                '• 典型风险回报比：1:3 到 1:5\n' +
                '• 因为入场点离止损近，离目标远\n' +
                '• 这是机构级入场的核心优势',
            psychology: 'OTE交易心理建设：\n' +
                '\n' +
                '常见心理陷阱：\n' +
                '• FOMO：在溢价区追涨，错过OTE入场\n' +
                '• 恐惧：价格回撤到OTE时不敢入场\n' +
                '• 急躁：不等确认信号就急于入场\n' +
                '• 贪婪：入场后不愿意分批出场\n' +
                '\n' +
                '正确的交易心态：\n' +
                '• 耐心等待：价格必须进入OTE区域\n' +
                '• 纪律执行：没有确认信号不入场\n' +
                '• 接受错过：不是每次回撤都会形成机会\n' +
                '• 风险优先：先确定止损位再考虑入场\n' +
                '\n' +
                '机构思维模式：\n' +
                '• "我不追价格，我让价格来找我"\n' +
                '• "在折扣区买入，在溢价区卖出"\n' +
                '• "回撤不是威胁，而是机会"\n' +
                '• "风险管理比入场更重要"\n' +
                '\n' +
                '记住：\n' +
                '• OTE不是预测工具，而是入场框架\n' +
                '• 必须结合HTF Bias使用\n' +
                '• 没有100%的OTE，接受止损是交易的一部分',
            examples: 'OTE实战案例分析：\n' +
                '\n' +
                '案例一：标准看涨OTE\n' +
                '• 背景：日线看涨，价格从Swing Low上涨后回调\n' +
                '• 观察：画出斐波那契回撤（Low到High）\n' +
                '• OTE区域：61.8%-79%之间\n' +
                '• 汇合：OTE区域内存在4小时FVG\n' +
                '• 入场触发：价格触及FVG后收出看涨吞没\n' +
                '• 止损：79%回撤位下方\n' +
                '• 目标：前高（1:3 RR）\n' +
                '• 结果：价格突破前高，达到预期目标\n' +
                '\n' +
                '案例二：OTE + Order Block汇合\n' +
                '• 背景：4小时看涨偏见\n' +
                '• 发现：价格回撤进入OTE区域\n' +
                '• 关键：OTE区域内有15分钟Bullish OB\n' +
                '• 入场：在OB上沿挂限价单\n' +
                '• 止损：OB下方\n' +
                '• 优势：双重汇合提供极高胜率\n' +
                '• 结果：价格在OB获得支撑后上涨\n' +
                '\n' +
                '案例三：失败的OTE（学习案例）\n' +
                '• 背景：误判HTF Bias\n' +
                '• 错误：在下跌趋势中寻找看涨OTE\n' +
                '• 结果：价格突破79%回撤位继续下跌\n' +
                '• 教训：OTE必须符合HTF方向\n' +
                '• 反思：没有HTF Bias确认，OTE只是普通回撤\n' +
                '\n' +
                'OTE核心要点总结：\n' +
                '• 只在折扣区做多，只在溢价区做空\n' +
                '• 61.8%-79%是OTE核心区域\n' +
                '• 必须结合HTF Bias使用\n' +
                '• 寻找PD Array汇合提高胜率\n' +
                '• 等待入场触发信号\n' +
                '• 严格风险管理，接受止损'
        }
    },
    {
        id: 'unicorn',
        title: 'ICT UNICORN (神奇组合)',
        filename: 'ICT_BULLISH_UNICORN.png',
        description: 'Breaker Block + FVG的完美组合交易策略',
        category: 'bullish',
        keywords: ['UNiCORN', '神奇组合', '订单块', '公平价值缺口'],
        explanation: {
            overview: 'ICT UNiCORN是一种极其稀有但威力巨大的交易策略，它巧妙地结合了Breaker Block和FVG两种ICT核心技术。当Breaker Block与FVG形成完美交集时，便诞生了这个被交易员们称为"神奇组合"的入场机会。',
            setup: '看涨UNiCORN完整结构组合：\n' +
                '• Setup阶段(做空陷阱)：价格不断下跌，创造出Old Low(前低)，这就是未来的Breaker Block(绿色框)位置\n' +
                '• Liquidity Sweep阶段(扫损/猎杀)：价格继续下跌，跌破前低，制造出Lower Low，这时候空头狂欢，多头止损被清除\n' +
                '• Displacement阶段(暴力拉升)：突然一根巨大的绿色K线拔地而起，不仅吞没之前跌幅，还冲破MSS线(橙色虚线)，确认趋势反转\n' +
                '• 留下FVG：暴力拉升留下Bullish FVG(看涨缺口)(蓝色框)\n' +
                '• Unicorn Entry区域：价格回踩，触及绿色Breaker顶部和蓝色FVG内部的紫色重叠区\n' +
                '• 双重确认：紫色重叠区就是完美的做多点，同时获得Breaker支撑和FVG吸引力',
            entry: '看涨UNiCORN四阶段操作流程：\n' +
                '第一阶段：做空陷阱(Setup)\n' +
                '• 观察：价格不断下跌，创造Old Low(前低)\n' +
                '• 机构意图：在下方制造支撑位，为后续扫损做准备\n' +
                '• 位置：这里将成为未来的Breaker Block(绿色框)\n' +
                '• 散户行为：多头认为支撑牢固，准备抄底\n\n' +
                '第二阶段：扫损猎杀(Liquidity Sweep)\n' +
                '• 观察：价格继续下跌，跌破前低制造Lower Low\n' +
                '• 现象：空头狂欢，多头止损被大量清除\n' +
                '• 流动性获取：机构在下方获得了大量流动性\n' +
                '• 散户心理：恐慌加剧，纷纷止损离场\n\n' +
                '第三阶段：暴力拉升(Displacement)\n' +
                '• 观察：巨大的绿色K线拔地而起\n' +
                '• 突破：不仅吞没之前跌幅，还冲破MSS线(橙色虚线)\n' +
                '• 趋势确认：MSS突破确认下跌趋势反转\n' +
                '• FVG形成：暴力拉升留下Bullish FVG(蓝色框)\n\n' +
                '第四阶段：独角兽入场(Unicorn Entry)\n' +
                '• 价格回踩：开始回踩测试关键位置\n' +
                '• 双重确认：既踩到绿色Breaker顶部，又踩进蓝色FVG内部\n' +
                '• 紫色重叠区：这就是完美的做多点\n' +
                '• 入场信号：价格触及紫色区域时收出下影线，确认支撑有效',
            exit: '看涨UNiCORN出场策略：\n' +
                '止损设置：\n' +
                '• 主止损：放在Old Low位置下方一点点\n' +
                '• 备选止损：如果价格跌破Lower Low，说明趋势判断错误\n' +
                '• MSS确认：MSS线(橙色虚线)是重要支撑，跌破确认趋势破坏\n' +
                '• 逻辑：已经完成向上流动性获取，下方不应再有大量空头\n\n' +
                '止盈目标：\n' +
                '• 第一目标：前期重要阻力位或2:1风险回报比\n' +
                '• 第二目标：上方的重要流动性池子(等高点或FVG)\n' +
                '• 最终目标：如果趋势强劲，可以持有到更大周期目标\n' +
                '• 分批策略：在重要阻力位逐步减仓，保留核心仓位\n\n' +
                '风险管理：\n' +
                '• 价格突破前高后，可将止损移到入场价\n' +
                '• 如果在紫色重叠区入场，风险相对较低\n' +
                '• 观察成交量，配合放量突破效果更佳',
            psychology: '看涨UNiCORN心理建设：\n' +
                '• 陷阱识别：看到下跌时，不要被表面跌幅迷惑，这是为扫损做准备\n' +
                '• 扫损意识：当价格跌破前低时，要明白这是机构在"拿流动性"，不是趋势延续\n' +
                '• 反转确认：看到巨大绿K线冲破MSS线时，要坚定地确认趋势已反转\n' +
                '• 入场时机：回踩到紫色重叠区时，这是机构给的送钱机会，不是继续下跌信号\n' +
                '• 耐心等待：整个过程需要4个阶段的完整配合，不要急于抄底\n' +
                '• 风险控制：如果价格跌破Old Low，要果断止损，不要抱侥幸心理\n' +
                '• 趋势思维：始终记住这是下跌趋势中的反转，不要被短期下跌迷惑\n' +
                '• 流动性思考：每个阶段都在获取或释放流动性，要理解背后的机构逻辑',
            examples: '看涨UNiCORN四阶段实战案例：\n' +
                '案例一：经典做空陷阱剧本\n' +
                '• Setup阶段：价格持续下跌，在低位形成Old Low(前低)\n' +
                '• 机构意图：在下方制造Breaker Block支撑位，为后续扫损做准备\n' +
                '• 散户行为：多头认为支撑牢固，准备在此位置抄底\n' +
                '• 市场氛围：看似稳固的底部，实际是机构布下的陷阱\n\n' +
                '案例二：扫损猎杀与流动性获取\n' +
                '• Liquidity Sweep：价格继续下跌，跌破Old Low制造Lower Low\n' +
                '• 散户反应：多头恐慌止损，空头狂欢，认为趋势继续下跌\n' +
                '• 机构策略：大量清除多头止损，获得充足的流动性\n' +
                '• 心理战：这是最黑暗的时刻，也是反转即将开始的前兆\n\n' +
                '案例三：暴力拉升与趋势确认\n' +
                '• Displacement：巨大绿色K线突然拔地而起\n' +
                '• MSS突破：不仅吞没之前跌幅，还冲破MSS线(橙色虚线)\n' +
                '• 趋势反转：MSS确认下跌趋势正式转为上涨趋势\n' +
                '• FVG形成：暴力拉升留下Bullish FVG(蓝色框)\n' +
                '• 机构逻辑：已完成向下流动性获取，现在开始向上派发\n\n' +
                '案例四：独角兽入场完美时机\n' +
                '• 价格回踩：开始回踩测试关键支撑位置\n' +
                '• 双重确认：既踩到绿色Breaker顶部，又踩进蓝色FVG内部\n' +
                '• 紫色重叠区：这就是传说中的独角兽入场点(Perfect Buy Zone)\n' +
                '• 入场信号：价格触及紫色区域并收出下影线，确认支撑有效\n' +
                '• 风险控制：止损设在Old Low下方，如果被跌破说明判断错误\n\n' +
                '看涨UNiCORN核心要点：\n' +
                '• 四阶段完整性：Setup→Liquidity Sweep→Displacement→Unicorn Entry缺一不可\n' +
                '• 扫损与反转：下破是为了拿流动性，上涨才是真实意图\n' +
                '• 双重确认：Breaker+FVG重叠提供最强支撑\n' +
                '• MSS确认：突破MSS线是趋势反转的关键确认信号\n' +
                '• 流动性思维：每个阶段都对应流动性获取或释放\n' +
                '• 紫色重叠区：这是机构给的最佳入场机会，务必把握\n' +
                '总结：UNiCORN是ICT交易法中的王冠宝石，掌握了这个策略就掌握了顶级交易技能！'
        }
    },
    {
        id: 'bearish-unicorn',
        title: 'ICT 看跌 UNICORN (神奇组合)',
        filename: 'ICT_BEARISH_UNICORN.png',
        description: 'Breaker Block + FVG的看跌神奇组合交易策略',
        category: 'bearish',
        keywords: ['看跌UNiCORN', '神奇组合', '订单块', '公平价值缺口'],
        explanation: {
            overview: 'ICT 看跌UNiCORN是与看涨UNiCORN相对应的反向策略，它巧妙地结合了看跌Breaker Block和FVG两种ICT核心技术。当价格暴跌后反弹到Breaker Block与FVG的重叠区域时，便诞生了这个反向下单机会。',
            setup: '看跌UNiCORN完整结构（诱多阶段）：\n' +
                '• Setup阶段：左侧的绿色K线一路上涨，制造出"Old High"（图中灰色虚线）\n' +
                '• Breaker Block位置：这里也是未来的Breaker Block（红色框）的形成位置\n' +
                '• The Trap阶段：价格冲高，创出新高（High 2），完成Liquidity Sweep（扫损）\n' +
                '• Bearish OB形成：此时最高点那根K线就是Bearish OB（看跌订单块）（图中深绿色小框）\n' +
                '• Displacement阶段：巨大的红色长阴线，跌破结构并留下FVG（失衡缺口）（图中蓝色框）\n' +
                '• 关键确认：红色阴线必须收在MSS线（橙色虚线）下方，确认趋势反转\n' +
                '• Re-Entry区域：价格反弹回踩，紫色区域就是完美的做空点（Unicorn Entry）',
            entry: '看跌UNiCORN操作流程：\n' +
                '第一步：诱多阶段（Setup）\n' +
                '• 观察左侧绿色K线上涨走势，制造"Old High"（灰色虚线位置）\n' +
                '• 这里是未来的Breaker Block（红色框）形成位置\n' +
                '• 耐心等待，不急于操作\n\n' +
                '第二步：陷阱阶段（The Trap）\n' +
                '• 价格冲高创出新高（High 2），完成Liquidity Sweep\n' +
                '• 突破交易者在此时追多，但这是机构拿流动性的陷阱\n' +
                '• 最高点形成Bearish OB（深绿色小框）\n\n' +
                '第三步：暴力下砸（Displacement）\n' +
                '• 巨大红色长阴线跌破结构，留下FVG（蓝色框）\n' +
                '• 关键：阴线必须收在MSS线（橙色虚线）下方\n' +
                '• 确认趋势反转成立\n\n' +
                '第四步：独角兽入场（Re-Entry）\n' +
                '• 价格反弹回踩，触及紫色重叠区域\n' +
                '• 既踩到红色框（Breaker）的底部，又踩进蓝色框（FVG）内部\n' +
                '• 紫色区域就是完美的做空点（Unicorn Entry）',
            exit: '看跌UNiCORN出场策略：\n' +
                '止损设置：\n' +
                '• 位置：放在Bearish OB（深绿色小框）的最高点上方一点点\n' +
                '• 备选：MSS线（橙色虚线）也是重要支撑，如果被突破说明趋势破坏\n' +
                '• 逻辑：如果价格涨破Bearish OB，说明主力不想砸盘，趋势可能反转\n\n' +
                '止盈目标：\n' +
                '• 第一目标：Old High位置（灰色虚线），也就是最初的诱多点\n' +
                '• 第二目标：前期重要的等高点或流动性池子\n' +
                '• 最终目标：下方的重要支撑位或2:1风险回报比\n\n' +
                '减仓策略：\n' +
                '• 第一目标位减仓50%，锁定部分利润\n' +
                '• 剩余仓位追踪止损或持有到最终目标\n' +
                '• 观察反弹强度，决定是否需要调整策略',
            psychology: '看跌UNiCORN心理建设：\n' +
                '• 诱多识别：看到绿线上涨时，不要被表面涨幅迷惑，这是为扫损做准备\n' +
                '• 陷阱意识：当价格突破前高时，要明白这是机构在"拿流动性"，不是趋势延续\n' +
                '• 反转确认：看到巨大红阴线跌破MSS线时，要坚定地确认趋势已反转\n' +
                '• 入场时机：反弹到紫色重叠区时，这是机构给的送钱机会，不是抄底信号\n' +
                '• 耐心等待：整个过程需要4个阶段的完整配合，不要急于操作\n' +
                '• 风险控制：如果价格涨破Bearish OB，要果断止损，不要抱侥幸心理\n' +
                '• 趋势思维：始终记住这是下跌趋势中的反弹，不要被短期上涨迷惑\n' +
                '• 流动性思考：每个阶段都在获取或释放流动性，要理解背后的机构逻辑',
            examples: '实战应用案例：\n' +
                '看跌UNiCORN的形成过程：\n' +
                '1. 市场经历强势下跌（大红柱子Displacement）\n' +
                '2. 价格暴跌后开始反弹，机构用绿柱子向上拉升\n' +
                '3. 反弹过程中，FVG和看跌OB形成重叠区域\n' +
                '4. 价格触及蓝色FVG上沿，这就是绝佳做空机会\n' +
                '5. 在红色箭头位置挂单做空，等待价格继续下跌\n' +
                '关键要点：不要觉得跌势结束了，要把反弹当作机构布下的诱多陷阱！'
        }
    },
    {
        id: 'liquidity-trap',
        title: '流动性陷阱 (Liquidity Trap)',
        filename: 'ICT_LIQUIDITY_TRAP.png',
        description: '散户与主力视角的流动性陷阱分析',
        category: 'neutral',
        keywords: ['流动性陷阱', '散户', '主力', '扫损'],
        explanation: {
            overview: '流动性陷阱展示了散户（Retail Trader）和主力（Smart Money）在面对同样行情时完全不同的剧本。这是理解机构如何利用散户心理进行反向操作的经典案例。',
            setup: '两种主要陷阱类型：\n' +
                '• 左图：等低点陷阱（The Equal Lows Trap）对应SSL（卖方流动性）\n' +
                '• 右图：趋势线陷阱（Trendline Liquidity）对应趋势线流动性\n' +
                '• 散户视角：认为技术形态是支撑，疯狂在该位置下单\n' +
                '• ICT视角：这些位置下方全是散户止损单，是主力的流动性池子',
            entry: '实战操作策略：\n' +
                '看到左图（双底）：千万别在蓝线位置挂单做多！等它跌破蓝线，捞回来的时候再进场\n' +
                '看到右图（趋势线）：千万别去接飞刀！如果价格跌破趋势线，通常会直接去测试这条线的最底端\n' +
                '• 识别散户行为：观察技术形态被大众认可的程度\n' +
                '• 等待扫损信号：价格突破关键位置触发散户止损\n' +
                '• 反向操作：在流动性被清理后寻找入场机会',
            exit: '出场条件：\n' +
                '流动性扫损后：如果价格V型反转，快速获利了结\n' +
                '趋势线突破：一旦跌破，不要抱侥幸心理，立即止损\n' +
                '流动性耗尽：等待下一个流动性池子出现时考虑减仓\n' +
                '风险控制：严格止损，不要与趋势作对',
            psychology: '心理要点：\n' +
                '• 散户心理：看到技术形态就认为找到了"密码"，缺乏对流动性的理解\n' +
                '• 主力策略：故意触发散户止损来完成自己的建仓或平仓\n' +
                '• 认知差异：同样的图形，散户看到机会，主力看到流动性\n' +
                '• 耐心等待：不要急于在看起来"安全"的位置下单\n' +
                '• 逆向思维：当所有人都认为某个位置是支撑时，它往往是最危险的地方',
            examples: '实战应用案例：\n' +
                '左图（等低点陷阱）分析：\n' +
                '• 散户视角：看到价格两次触底，认为这是"双底支撑"，疯狂做多\n' +
                '• 散户行为：把止损放在蓝线下方，心理想"跌不下去的"\n' +
                '• ICT视角：蓝线下方全是散户止损单，主力故意砸盘触发\n' +
                '• 结果：THE SWEEP完成后，价格V型反转\n\n' +
                '右图（趋势线陷阱）分析：\n' +
                '• 散户视角：沿完美斜线上涨，认为是"趋势支撑"\n' +
                '• 散户行为：每次回踩买入，止损放在红色$位置\n' +
                '• ICT视角：趋势线下方积累太多止损单，变成"火药桶"\n' +
                '• 结果：LIQUIDITY RUN导致极速暴跌\n\n' +
                '记住：技术分析不是圣杯，理解流动性才是制胜关键！'
        }
    },
    {
        id: 'after-sweep',
        title: '真假突破与扫损分析 (Breakout vs Sweep)',
        filename: 'ICT_FAKE_BREAKOUT.png',
        description: '结合扫损反转与真假突破的完整分析体系',
        category: 'neutral',
        keywords: ['真假突破', '扫损', '假突破', 'SFP'],
        explanation: {
            overview: '这个概念结合了扫损反转与真假突破的完整分析体系，教你看穿市场中的各种"陷阱"。无论是跌破双底还是突破阻力，关键在于理解主力的真实意图和下一步动作。决胜的关键不在突破本身，而在于突破后方的结构。',
            setup: '双重分析框架：\n' +
                '• 扫损反转 (Sweep/Reversal)：主力故意触发流动性后的反转信号\n' +
                '• 真突破 (Real Breakout)：趋势延续，流动性耗尽后的继续前进\n' +
                '• 核心判断：观察突破后的结构变化和收盘位置\n' +
                '• 散户行为：容易被表面现象迷惑，缺乏深度分析\n' +
                '• ICT视角：通过流动性分析判断主力的真实意图',
            entry: '实战操作策略：\n' +
                '剧本一：扫损反转（The Sweep / Turtle Soup）\n' +
                '• 下方结构：双底下方藏有1小时或4小时级别的看涨订单块（Bullish OB）\n' +
                '• 主力动作：把价格"按"进水里，触碰到下方OB\n' +
                '• K线形态：SFP - 价格插针跌破但实体迅速收回\n' +
                '• 操作：看到收盘收回去了，做多！止损放在那根针的最低点\n\n' +
                '剧本二：真突破（The Breakout / Expansion）\n' +
                '• 下方结构：真空（Void）或下一个关键支撑在很远位置\n' +
                '• 主力动作：用大阴线实体直接砸穿双底\n' +
                '• K线形态：收盘价实实在在收在双底下方\n' +
                '• 操作：等价格反抽双底（支撑变阻力）时，做空！',
            exit: '出场条件：\n' +
                '扫损反转：价格突破上方阻力或达到合理盈利目标时减仓\n' +
                '真突破：价格回到突破位置附近时建立反向仓位\n' +
                '关键确认：观察收盘价位置和成交量变化确认突破质量\n' +
                '结构破坏：支撑阻力角色转换时调整交易方向',
            psychology: '心理要点：\n' +
                '• 认知升级：从"看到突破"到"理解突破背后的逻辑"的思维转变\n' +
                '• 逆向思维：主力的进场点往往在散户的恐慌点\n' +
                '• 结构分析：不要被K线的表面走势迷惑，要看到更深层的市场结构\n' +
                '• 耐心等待：真正的机会需要等待完美的信号出现\n' +
                '• 纪律执行：严格按照技术形态和风险控制规则操作\n' +
                '• 流动性思维：所有突破的本质都是对流动性的获取或释放',
            examples: '实战应用案例：\n' +
                '案例一：扫损反转的完整流程\n' +
                '• 市场背景：价格在一个关键支撑位附近反复测试\n' +
                '• 散户行为：认为支撑牢固，大量买单聚集\n' +
                '• 主力动作：\n' +
                '  - 故意跌破支撑，触发散户止损\n' +
                '  - 在更低位置遇到强劲支撑（订单块）\n' +
                '  - 迅速收回支撑位上方\n' +
                '  - 形成SFP形态\n' +
                '• 结果：散户被清洗，主力获得廉价筹码，价格开始上涨\n\n' +
                '案例二：真突破的完整流程\n' +
                '• 市场背景：价格在阻力位附近整理，积累动能\n' +
                '• 散户行为：认为阻力难以突破，准备做空\n' +
                '• 主力动作：\n' +
                '  - 用强势K线实体突破阻力\n' +
                '  - 收盘价稳定在突破位置之上\n' +
                '  - 等待回踩确认支撑有效\n' +
                '  - 继续向更高目标推进\n' +
                '• 结果：突破成立，价格进入新的上涨阶段\n\n' +
                '核心要点：同样的突破动作，因为背后逻辑不同，结局完全不同。学会识别主力的真实意图是交易成功的关键！'
        }
    },
    {
        id: 'fvg-varia',
        title: 'FVG 变体形态 (FVG Variations)',
        filename: 'ICT_FVG_VARIA.png',
        description: '三种FVG缺口形态的完整分析与应用',
        category: 'neutral',
        keywords: ['FVG变体', '缺口形态', '成交量失衡', '支撑变阻力'],
        explanation: {
            overview: '这张图表清晰地展示了你在ICT实战中最常遇到的三种"缺口"形态。理解这些变体对于准确识别市场结构和制定交易策略至关重要。',
            setup: '三种缺口形态详解：\n' +
                '• 图一：标准FVG (Standard Bullish FVG) - 价格暴力拉升留下的空白区域\n' +
                '• 图二：反转FVG (Inversion FVG) - 支撑被砸穿后变阻力的经典形态\n' +
                '• 图三：成交量失衡 (Volume Imbalance - VI) - 实体间空隙的磁铁效应\n' +
                '• 核心差异：每种形态都有独特的形成机制和操作策略\n' +
                '• 实战意义：精准识别这些形态可以显著提高交易成功率',
            entry: '实战操作策略：\n' +
                '图一：标准FVG操作\n' +
                '• 看点：价格暴力拉升，中间留了一个空档\n' +
                '• 操作：价格回落到蓝色区域时，做多。这是最基础的支撑\n' +
                '• 原理：市场自动修复失衡，FVG成为价格回调的支撑位\n\n' +
                '图二：反转FVG操作\n' +
                '• 看点：原本的蓝色支撑被巨大红柱子暴力砸穿\n' +
                '• 变化：这个区域瞬间变色（变成红色）\n' +
                '• 操作：当价格试图反弹，从下往上顶到这个区域时，做空\n' +
                '• 原理：支撑变阻力的教科书形态，机构在阻力位大举出货\n\n' +
                '图三：成交量失衡操作\n' +
                '• 看点：两根K线的实体没有碰头，中间有空隙；但影线重叠\n' +
                '• 操作：这通常是一个吸引价格的磁铁，价格容易被吸过去填补\n' +
                '• 原理：成交量不平衡形成的真空区具有强烈的价格吸引效应',
            exit: '出场条件：\n' +
                '标准FVG：价格突破FVG区域上沿或达到目标阻力位时减仓\n' +
                '反转FVG：价格有效突破反转区域或跌破新的支撑位时调整策略\n' +
                '成交量失衡：价格填补完失衡区域或遇到下一个结构位时获利了结\n' +
                '分批操作：在关键阻力支撑位逐步减仓，保留核心仓位',
            psychology: '心理要点：\n' +
                '• 结构认知：理解不同缺口形态背后的市场微观结构\n' +
                '• 灵活应用：根据价格行为和形态特征选择合适的操作策略\n' +
                '• 支撑阻力转换：掌握反转FVG的支撑变阻力逻辑\n' +
                '• 磁铁效应：理解成交量失衡的价格吸引原理\n' +
                '• 实战练习：在图表上画出这些缺口并延长到未来观察价格反应\n' +
                '• 精准执行：像弹球一样精准的价格反弹需要严格的入场条件',
            examples: '实战应用案例：\n' +
                '案例一：标准FVG的完整应用\n' +
                '• 市场环境：价格经历横盘整理后突然暴力拉升\n' +
                '• 形态识别：中间留下明显的蓝色空白区域\n' +
                '• 机构行为：快速拉升形成真空区，为后续回调提供支撑\n' +
                '• 操作流程：\n' +
                '  - 等待价格回落到蓝色FVG区域\n' +
                '  - 观察是否在FVG内获得有效支撑\n' +
                '  - 配合成交量和收盘价确认后做多\n' +
                '  - 目标位设定在前期高点或下一个阻力\n\n' +
                '案例二：反转FVG的支撑变阻力\n' +
                '• 市场环境：价格在FVG支撑区域获得支撑后开始反弹\n' +
                '• 形态识别：巨大红柱子暴力砸穿蓝色支撑\n' +
                '• 机构行为：故意突破支撑清洗多单，重新控制市场节奏\n' +
                '• 操作流程：\n' +
                '  - 观察支撑被有效跌破\n' +
                '  - 等待价格反弹到原支撑区域\n' +
                '  - 在阻力位附近建立空头仓位\n' +
                '  - 设定止损在反转区域上方\n\n' +
                '案例三：成交量失衡的磁铁效应\n' +
                '• 市场环境：快速波动中形成的不规则K线组合\n' +
                '• 形态识别：实体间存在空隙，但影线重叠\n' +
                '• 机构行为：快速交易导致的成交量不连续\n' +
                '• 操作流程：\n' +
                '  - 识别实体间的空隙区域\n' +
                '  - 观察价格是否被吸引到该区域\n' +
                '  - 配合其他技术指标确认信号\n' +
                '  - 在空隙被填补时获利了结\n\n' +
                '给您的建议：下次在Hyperliquid图表上看到这些缺口时，试着用矩形工具把它们画出来并延长到未来。您会惊讶地发现，价格在这些格子里就像弹球一样精准反弹！'
        }
    },
    {
        id: 'ict-bias',
        title: 'ICT Bias (方向偏见)',
        filename: 'ICT_BIAS.png',
        description: 'ICT核心方向判断体系与三步分析法',
        category: 'neutral',
        keywords: ['ICT Bias', '方向偏见', '三步法', '主力意图'],
        explanation: {
            overview: 'ICT Bias是确认主力意图的核心方法，不是预测未来，而是分析当下。掌握了这个方法，你就能理解市场的真实方向和主力的操作计划。',
            setup: '核心定义和口诀：\n' +
                '• 定义：Bias不是预测未来，而是确认主力的意图\n' +
                '• 口诀："扫了什么？坏了什么？要去哪里？"\n' +
                '• 核心思维：从价格行为中读懂主力的操作逻辑\n' +
                '• Holy Trinity：三步法构成完整的Bias判断体系\n' +
                '• 实战意义：一旦Bias确立，交易市场就变得有方向感',
            entry: '判断Bias的三步法 (The Holy Trinity)：\n' +
                '第一步：扫了什么？(Liquidity Sweep / Raid)\n' +
                '• 看左边：价格是不是刚刚跌破了一个大周期的旧低点(SSL)？或者涨破了旧高点(BSL)？\n' +
                '• 关键：扫完后是否迅速反向？(SFP)\n' +
                '• 意义：油加满了，车准备开了\n\n' +
                '第二步：坏了什么？(MSS with Displacement)\n' +
                '• 看中间：反向运动时，是否有暴力的大K线砸穿了最近的一个拐点(Swing Point)？\n' +
                '• 关键：必须带FVG(缺口)。如果是磨磨唧唧的突破，不算MSS\n' +
                '• 意义：方向盘打转了，趋势变了\n\n' +
                '第三步：要去哪里？(DOL - Draw on Liquidity)\n' +
                '• 看右边：既然反转了，那下一个磁铁在哪里？\n' +
                '• 找目标：对面的未测试的FVG或明显的等高点/等低点\n' +
                '• 意义：这是你的终点站。在到达这里之前，Bias只有一个方向',
            exit: '操作铁律：\n' +
                '• Bias确立后：只做顺势单\n' +
                '• PA的作用：在Bias的方向上，利用PA形态（吞没/刺破）作为入场扳机\n' +
                '• 逆势PA：\n' +
                '  - 如果Bias看涨，出现了看跌吞没 → 无视它\n' +
                '  - 或者把它当作加仓机会（回踩支撑）\n' +
                '• 核心原则：始终与主力意图保持一致，不要被短期的噪音干扰\n' +
                '• 目标达成：当价格到达预设的流动性目标时，考虑获利了结',
            psychology: '心理要点：\n' +
                '• 方向感建立：从混乱的市场中找到明确的方向指引\n' +
                '• 主力思维：学会像主力一样思考，理解机构的操作逻辑\n' +
                '• 耐心等待：只有在完整的Bias信号出现后才开始操作\n' +
                '• 顺势而为：一旦方向确定，就要坚定地跟随趋势\n' +
                '• 过滤噪音：短期的价格波动不能改变确立的Bias方向\n' +
                '• 纪律执行：严格按照三步法确认Bias，不凭感觉操作\n' +
                '• 大周期视角：不要被小周期的波动迷惑，要看大趋势\n' +
                '• Top-Down思维：从大到小逐级分析，确保方向一致性',
            examples: 'ICT Bias终极图解实战案例：\n' +
                '看涨Bias的完整形成过程：\n' +
                'Step 1 (左): 跌破旧低点 (SSL)\n' +
                '• 价格跌破大周期的旧低点，获得流动性\n' +
                '• 散户认为趋势破坏，纷纷止损离场\n' +
                '• 主力在此位置开始收集廉价筹码\n' +
                '• 形成SFP，价格迅速收回\n\n' +
                'Step 2 (中): 暴力拉升 (Displacement)\n' +
                '• 出现巨大的绿色K线，暴力突破最近的拐点\n' +
                '• 突破伴随FVG缺口，证明强势\n' +
                '• 结构破坏(MSS)完成，确立看涨Bias\n' +
                '• 主力开始控制市场节奏\n\n' +
                'Step 3 (右): 回调到折扣区\n' +
                '• 价格回调到FVG区域，获得支撑\n' +
                '• 在Discount区域形成最佳入场机会\n' +
                '• 配合看涨PA形态确认入场时机\n' +
                '• 目标直指上方的流动性(BSL)\n\n' +
                '核心逻辑深度解析：FVG只是"坑"，Bias才是"车"\n' +
                '比喻理解：\n' +
                '• FVG (缺口) 就像路上的一个坑\n' +
                '• Bias (趋势) 就像一辆正在高速行驶的卡车\n' +
                '• 关键问题："我怎么知道这个坑能把车弹起来，还是车会直接压垮这个坑？"\n' +
                '• 错误做法：盯着小周期的坑看，看不出来\n' +
                '• 正确做法：看大周期开过来的是什么车\n' +
                '• 重型卡车(大周期看涨) + 回调FVG = FVG成立，在CE入场\n' +
                '• 向下推土机(大周期看跌) + FVG = FVG失效，变成Inversion\n' +
                '• 结论：FVG本身没有方向，是大周期的Bias赋予了"支撑"或"阻力"属性\n\n' +
                '实战流程：如何用"上帝视角"预判FVG？\n' +
                '标准流程（Top-Down Analysis）：\n' +
                '第一步：在大周期定Bias (H1 / H4)\n' +
                '• 看图：1小时图刚刚扫了前低，并且收出了大阳线（MSS）\n' +
                '• 上帝指令："现在的Bias是看涨。目标是上方的88,000"\n' +
                '• 潜台词："因为大腿要向上，所以接下来路上的所有看涨FVG应该都会撑住；所有看跌FVG应该都会被突破"\n' +
                '第二步：在小周期找FVG (M5 / M15)\n' +
                '• 看图：切换到5分钟图。价格开始回调下跌\n' +
                '• 发现猎物：下方出现了一个5分钟级别的看涨FVG\n' +
                '• 预判：不需要等K线确认。因为H1是看涨的，所以我敢直接在这个M5 FVG的50% (CE) 挂多单\n' +
                '第三步：验证与结果\n' +
                '• 情况A：价格打到CE，瞬间反弹 → 恭喜，你利用Bias预判成功\n' +
                '• 情况B：价格直接砸穿了FVG → 止损。这说明H1 Bias判断错了，或者大周期趋势变了\n' +
                '记住：主力已经告诉我们要去哪里了！'
        }
    },
    {
        id: 'turtle-soup',
        title: '海龟汤 (Turtle Soup)',
        filename: 'ICT_TURTLE_SOUP.png',
        description: '假突破陷阱的经典形态与主力反向操作策略',
        category: 'neutral',
        keywords: ['海龟汤', '假突破', '陷阱', 'SFP', '扫损'],
        explanation: {
            overview: '海龟汤在不同交易学派中的多重身份：\n' +
                '• 威科夫叫它：Spring (弹簧) / Upthrust (上冲回落)\n' +
                '• 价格行为 (PA) 叫它：Failed Breakout (失败突破) / Trap (陷阱)\n' +
                '• ICT 叫它：Turtle Soup (海龟汤) / Stop Run (扫损)\n' +
                '• 普通散户叫它："狗庄骗炮"\n\n' +
                '这个名字虽然听起来像是一道菜，甚至有点滑稽，但在华尔街的交易历史中，它是琳达·拉施克 (Linda Raschke) 在《华尔街操盘高手》一书中提出的顶级策略，专门用来讽刺和猎杀著名的"海龟交易法则"。海龟法则信条："突破新高买入，跌破新低卖出。"海龟汤信条："我们要把那些跌破新低就止损/追空的人，煮成汤喝掉。"\n\n' +
                '视角的升级：从"支撑位"到"流动性"\n' +
                '• 普通视角（看支撑）：你看到价格跌破了区间下沿，你会想："哎呀，支撑破了，我要止损"或者"我要等它收回来再看"。心态是防御性的。\n' +
                '• ICT 视角（看流动性）：你看到价格跌破了区间下沿，你会想："那下面全是钱！主力下去是为了加油。只要油加满了（扫损完成），车立刻就要开。"心态是进攻性的。\n' +
                '• 区别：你不再是被动等待确认，而是主动寻找那些积累了大量止损单的区间边缘。止损单越密集（比如三重底），海龟汤越好喝。',
            setup: '海龟汤完整结构分析：\n' +
                '• 海龟法则信徒：那些严格执行"跌破新低卖出，突破新高买入"的交易者\n' +
                '• 关键位置：水平支撑阻力位或趋势线位置\n' +
                '• 海龟行为：机械执行海龟法则，在关键位置大量止损/追单\n' +
                '• 主力策略：故意突破关键位置，触发海龟交易者的止损/追单\n' +
                '• SFP信号：刺破式突破后迅速收回，形成完美的假突破\n' +
                '• 反向操作：价格收回后开始真正的趋势方向运动\n' +
                '• 流动性获取：主力在此过程中获得了海龟交易者的流动性',
            entry: '猎杀海龟的识别与操作：\n' +
                '第一步：识别海龟聚集地\n' +
                '• 观察水平支撑阻力位、趋势线、斐波那契回撤位\n' +
                '• 寻找海龟交易者最可能聚集的关键位置\n' +
                '• 注意这些位置附近的海龟法则执行者挂单\n\n' +
                '第二步：等待海龟触发\n' +
                '• 价格突破关键位置，触发海龟交易者的止损/追单\n' +
                '• K线形态往往是影线很长，实体很小的刺破\n' +
                '• 成交量异常放大，证明大量海龟被触发\n' +
                '• 突破后立即出现反向K线，收回突破位置\n\n' +
                '第三步：确认SFP信号\n' +
                '• SFP = Stop Flow Pivot，价格停止流动的转折点\n' +
                '• 关键：收盘价必须收回关键位置上方/下方\n' +
                '• 影线可以很长，但实体必须收回，这是关键细节\n\n' +
                '海龟汤的两个判断标准：\n' +
                '看"跑多远" (The Extent)：\n' +
                '• 海龟汤(假突破)：通常只刺破前低10-30点(对于BTC可能是100-300刀)。就像手指试一下水温。\n' +
                '• 真突破：一根大阴线实体直接扎下去，离前低很远。那就别喝汤了，那是瀑布。\n\n' +
                '看"回来多快" (The Reaction)：\n' +
                '• 海龟汤：触碰止损区的瞬间，像是触电一样，马上收出长下影线。\n' +
                '• 真突破：跌破后，在下面磨磨唧唧不肯上来，甚至在下面横盘。这就危险了。',
            exit: '出场条件与风险控制：\n' +
                '止损设置：\n' +
                '• 止损放在突破位置的另一侧\n' +
                '• 如果是向上突破陷阱，止损放在突破位置下方\n' +
                '• 如果是向下突破陷阱，止损放在突破位置上方\n\n' +
                '止盈目标：\n' +
                '• 前期重要支撑阻力位\n' +
                '• 对称的流动性目标\n' +
                '• 2:1或3:1的风险回报比\n\n' +
                '减仓策略：\n' +
                '• 到达第一个目标位减仓50%\n' +
                '• 剩余仓位追踪止损或持有到最终目标',
            psychology: '海龟汤的心理博弈：\n' +
                '• 海龟心态：机械执行"突破新高买入，跌破新低卖出"的教条\n' +
                '• 主力策略：故意制造突破假象，专门猎杀海龟法则执行者\n' +
                '• 认知差异：海龟看表面突破，主力看本质流动性\n' +
                '• 耐心等待：真正的机会需要等待海龟大量聚集后收网\n' +
                '• 逆向思维：在海龟认为趋势确立时，恰恰是陷阱开启时\n' +
                '• 流动性思维：理解海龟止损/追单背后的流动性需求\n' +
                '• 机构视角：学会像主力一样，在海龟最活跃时进行反向操作\n' +
                '• 海龟法则反思：机械化策略必然被机构利用和猎杀\n' +
                '• 市场结构：观察更大周期下真实的市场结构和主力意图\n' +
                '• 目标明确：专门猎杀机械执行海龟法则的交易者\n' +
                '• 突破假象：制造突破假象吸引海龟进场\n' +
                '• SFP确认：刺破收回是猎杀完成的确认信号\n' +
                '• 机械化反思：过分依赖单一策略必然被机构利用\n' +
                '• 下次看到"突破"时，问自己：这是真的突破，还是海龟汤？',
            examples: '海龟汤猎杀实战案例分析：\n' +
                '案例一：猎杀突破新高的海龟\n' +
                '• 市场环境：价格在重要阻力位附近整理\n' +
                '• 海龟行为：机械执行"突破新高买入"法则，纷纷挂多单\n' +
                '• 主力猎杀：\n' +
                '  - 故意向上突破阻力位，触发海龟买入\n' +
                '  - 海龟大量进场，价格短暂创新高\n' +
                '  - 迅速回落，收回突破位置\n' +
                '  - 海龟被套，价格开始真正下跌\n' +
                '• 结果：海龟被"煮汤"，主力获得廉价筹码\n\n' +
                '案例二：猎杀跌破新低的海龟\n' +
                '• 市场环境：价格在重要支撑位附近反复测试\n' +
                '• 海龟行为：机械执行"跌破新低卖出"法则，恐慌止损\n' +
                '• 主力猎杀：\n' +
                '  - 故意向下突破支撑位，触发海龟止损\n' +
                '  - 海龟大量止损离场，成交量放大\n' +
                '  - 迅速回升，收回支撑位置\n' +
                '  - 海龟被清洗，价格开始真正上涨\n' +
                '• 结果：海龟被"煮汤"，主力获得低成本筹码'
        }
    },
    {
        id: 'hardness-ranking',
        title: 'ICT 机构视角的"硬度排行榜"',
        filename: 'ICT_HARDNESS.png',
        description: '从机构视角分析不同ICT概念的支撑强度排名',
        category: 'neutral',
        keywords: ['硬度排行榜', '机构视角', '支撑强度', '实战排序'],
        explanation: {
            overview: 'ICT机构视角的"硬度排行榜"揭示了不同技术形态在实战中的支撑强度。从王者级的Unicorn到殿军级的FVG，这个排名基于机构在实战中的真实表现。',
            setup: '硬度排行榜详解：\n' +
                '👑 王者级：Unicorn (独角兽)\n' +
                '• 构成：Breaker (蹦床) + FVG (空气) 重叠\n' +
                '• 硬度：⭐⭐⭐⭐⭐\n' +
                '• 理由：既有实体的支撑，又有算法的填充。这是最稳的，几乎像钢板一样\n' +
                '• 实战表现：机构最信任的入场位，极少被突破\n\n' +
                '🥈 亚军：Breaker Block (破坏块) —— "带刺的蹦床"\n' +
                '• 硬度：⭐⭐⭐⭐\n' +
                '• 常见误区：认为OB比Breaker更稳。但在反转行情中，Breaker往往更安全\n' +
                '• 核心优势：因为已经扫过损了(Liquidity Sweep)，主力没有理由再砸下去\n' +
                '• 与OB对比：OB可能下方还悬着一堆止损没扫，价格可能会刺穿OB去扫损\n' +
                '• 实战表现：反转行情中的最佳入场位\n\n' +
                '🥉 季军：Order Block (OB) —— "最后的墙"\n' +
                '• 硬度：⭐⭐⭐\n' +
                '• 属性：它是防守位，而不是最好的进攻位\n' +
                '• 风险点：经常被当作"诱饵"，价格会假装在OB停一下，然后突然扎穿它\n' +
                '• 实战用法：最好用来放止损，而不是挂单接飞刀\n' +
                '• 特殊情况：顺大趋势的OB可以作为入场位\n\n' +
                '殿军：FVG (缺口) —— "迷雾/空气"\n' +
                '• 硬度：⭐⭐\n' +
                '• 属性：它是路径，不是终点\n' +
                '• 特点：价格穿过FVG就像穿过云层一样容易\n' +
                '• 风险控制：止损必须放在OB下面，放在FVG下面必死无疑',
            entry: '建筑学实战应用：\n' +
                '为了方便记忆，我们这样修正比喻：\n' +
                '• FVG (空气/云层)：价格很容易穿过去，但也容易被吸过去。适合做减仓/止盈目标\n' +
                '• OB (地板/墙)：坚硬，但如果楼下还有钱，主力会毫不犹豫地砸穿地板去拿钱。适合做止损防守位\n' +
                '• Breaker (蹦床)：因为已经去楼下拿过钱了，现在价格回到这里，就是为了弹射起飞。适合做入场位\n\n' +
                '最想做的单：\n' +
                '• 在Breaker上挂单：最安全的入场位置\n' +
                '• 最佳选择：Unicorn区域（Breaker+FVG重叠）\n\n' +
                '最放心的止损：\n' +
                '• 放在OB后面：最强防守位\n' +
                '• 设置在OB的Mean Threshold附近\n\n' +
                '最贪婪的加仓：\n' +
                '• 在FVG里顺势加仓：利用价格吸引效应\n' +
                '• 适合做滚动加仓策略',
            exit: '实战操作建议：\n' +
                '入场优先级：\n' +
                '1. Unicorn (Breaker + FVG重叠)：⭐⭐⭐⭐⭐\n' +
                '2. Breaker Block：⭐⭐⭐⭐\n' +
                '3. Order Block：⭐⭐⭐\n' +
                '4. FVG：⭐⭐\n\n' +
                '出场策略：\n' +
                '• 目标位：通常设为下一个FVG区域\n' +
                '• 分批获利：在每个关键阻力位逐步减仓\n' +
                '• 止损位置：根据入场位确定，最安全的止损是放在强势OB后面\n\n' +
                '风险控制：\n' +
                '• 单一FVG挂单：高风险，需要宽止损\n' +
                '• OB与Breaker结合：中低风险，平衡性较好\n' +
                '• Unicorn区域：最佳风险回报比',
            psychology: '机构视角的思维转换：\n' +
                '• 硬度思维：从"看起来坚强"到"真实支撑强度"的认知转变\n' +
                '• 流动性驱动：理解硬度背后的流动性获取机制\n' +
                '• 机构逻辑：学会像主力一样思考支撑位的真实性\n' +
                '• 实战经验：排名基于机构在真实市场的操作表现\n' +
                '• 反思误区：打破"看起来坚强就一定安全"的思维定式\n' +
                '• 动态调整：根据市场环境调整对不同硬度的信任度\n' +
                '• 风险意识：高硬度不等于零风险，仍需合理风控\n' +
                '• 组合应用：单一形态vs组合形态的风险差异',
            examples: '硬度排行榜实战案例：\n' +
                '案例一：Unicorn的王者表现\n' +
                '• 市场环境：价格在大周期下跌后开始反弹\n' +
                '• 形态识别：FVG区域下方正好有Breaker支撑\n' +
                '• 机构行为：在Unicorn区域大量挂单，形成强力支撑\n' +
                '• 结果：即使面临重大利好，价格也只在该区域短暂停留后继续上涨\n' +
                '• 硬度验证：几乎没有机构会在此位置主动砸盘\n\n' +
                '案例二：Breaker vs OB反转对比\n' +
                '• 市场环境：下跌趋势中的反弹阶段\n' +
                '• 形态A：新形成的Breaker，硬度⭐⭐⭐⭐\n' +
                '• 形态B：之前的Order Block，硬度⭐⭐⭐\n' +
                '• 结果对比：\n' +
                '  - Breaker：价格接触后立即反弹，支撑极强\n' +
                '  - OB：价格假突破后继续下跌，下方还有未扫的流动性\n' +
                '• 启示：已扫损的位置比未扫损的位置更安全\n\n' +
                '案例三：FVG的"空气"特性\n' +
                '• 市场环境：快速上涨后的回调\n' +
                '• FVG区域：之前上涨留下的缺口\n' +
                '• 现象：价格轻松穿过FVG，几乎没有阻力\n' +
                '• 正确用法：将FVG作为加仓位置，而不是主要支撑位\n' +
                '• 教训：如果将止损放在FVG下方，死亡率极高\n\n' +
                '硬度排行核心要点：\n' +
                '• 实战验证：排名基于机构真实操作表现，不是理论推测\n' +
                '• 动态变化：市场环境变化可能影响硬度的相对排名\n' +
                '• 组合优势：单一形态vs组合形态的支撑强度差异巨大\n' +
                '• 风险认知：高硬度也需要合理风控，没有100%的安全位置'
        }
    },
    {
        id: 'mmxm',
        title: 'MMXM 做市商模型',
        filename: 'ICT_MMXM.png',
        description: '做市商操控价格的核心框架：揭示机构如何通过流动性循环系统性操控市场',
        category: 'neutral',
        keywords: ['做市商', 'MMXM', 'MMBM', 'MMSM', '流动性循环', '机构交易'],
        explanation: {
            overview: 'MMXM（Market Maker Exchange Model）做市商模型是ICT交易体系中的核心框架，揭示了机构如何在市场中系统性地操控价格。\n' +
                '\n' +
                '核心本质：\n' +
                '• MMXM本质上是流动性循环的体现\n' +
                '• 做市商在某一价格区间横盘后，将价格推向另一个极端以寻求对手方\n' +
                '• 完成交易后，再将价格带回最初的平衡区\n' +
                '• 理解这个循环，就能预判市场的下一步动向\n' +
                '\n' +
                '核心结构 - 抛物线/山峰形态：\n' +
                '无论是买入模型还是卖出模型，MMXM都遵循一个"抛物线"或"山峰/山谷"状的结构，分为两个阶段：\n' +
                '\n' +
                '• 左侧 (Smart Money Accumulation/Distribution)：\n' +
                '  - 价格离开初始盘整区\n' +
                '  - 通过不断的阶梯（重新累积或重新派发）向目标迈进\n' +
                '  - 这是聪明钱建仓/出货的阶段\n' +
                '\n' +
                '• 右侧 (The Reversal & Run to Liquidity)：\n' +
                '  - 在高阶框架 (HTF) 的关键点位反转后\n' +
                '  - 价格会"镜像"左侧的走势\n' +
                '  - 迅速回到初始盘整区寻找流动性',
            setup: 'MMXM的五个关键阶段（以MMBM买入模型为例）：\n' +
                '\n' +
                '第一阶段：Original Consolidation (初始盘整区)\n' +
                '• 这是模型的起点，也是最终的目标位\n' +
                '• 特征：波动率低，价格在区间内震荡\n' +
                '• 关键：这里堆积了大量的流动性（止损单和挂单）\n' +
                '• 主力行为：悄悄建仓或出货\n' +
                '\n' +
                '第二阶段：Expansion & Re-accumulation (扩张与重新累积)\n' +
                '• 价格向下离开盘整区\n' +
                '• 在下跌过程中，会形成几个小的盘整平台\n' +
                '• 这些平台即："卖方曲线 (Sell-side Curve)"\n' +
                '• 每个平台都是机构重新累积筹码的机会\n' +
                '\n' +
                '第三阶段：Smart Money Reversal (SMR - 聪明钱反转)\n' +
                '• 价格触及高阶框架 (HTF) 的支撑位\n' +
                '• 位置：周线/日线级别的需求区，或流动性扫荡点\n' +
                '• 信号：经典的 MSS (Market Structure Shift) 出现\n' +
                '• 确认：大级别K线吞没，趋势正式反转\n' +
                '\n' +
                '第四阶段：Silver Bullet / Re-accumulation (再累积阶段)\n' +
                '• 价格反转后向上突破\n' +
                '• 关键现象：左侧下跌时的"阻力位"在右侧变成"支撑位"\n' +
                '• 入场机会：这些位置形成绝佳的买入点\n' +
                '• FVG回测：之前的缺口区域成为入场参考\n' +
                '\n' +
                '第五阶段：Target (回归初始盘整)\n' +
                '• 价格最终会拉回到第一阶段的初始盘整区\n' +
                '• 目的：收割那里的流动性\n' +
                '• 完成循环：价格从起点下跌，在底部反转，最后回到起点\n' +
                '\n' +
                'MMBM与MMSM对比：\n' +
                '• MMBM (Market Maker Buy Model)：\n' +
                '  - 整体趋势：先跌后涨（呈"V"或"U"型）\n' +
                '  - 反转位置：HTF支撑位/折价区 (Discount)\n' +
                '  - 左侧曲线：卖方曲线 (Sell-side Curve)\n' +
                '  - 最终目标：初始盘整区的上方买方流动性 (BSL)\n' +
                '\n' +
                '• MMSM (Market Maker Sell Model)：\n' +
                '  - 整体趋势：先涨后跌（呈倒"V"或"n"型）\n' +
                '  - 反转位置：HTF阻力位/溢价区 (Premium)\n' +
                '  - 左侧曲线：买方曲线 (Buy-side Curve)\n' +
                '  - 最终目标：初始盘整区的下方卖方流动性 (SSL)',
            entry: '交易MMXM的核心逻辑：\n' +
                '\n' +
                '第一步：寻找HTF背景\n' +
                '• 不要只看小周期！\n' +
                '• 必须知道价格在更高周期（如4H或Daily）触碰了什么PD Array\n' +
                '• 判断当前处于溢价区(Premium)还是折价区(Discount)\n' +
                '• HTF方向决定了小周期的操作方向\n' +
                '\n' +
                '第二步：寻找对称性\n' +
                '• 观察左侧曲线的结构\n' +
                '• 识别左侧的FVG (公允价值缺口) 和盘整平台\n' +
                '• 价格在右侧反转后，往往会回到这些位置进行回测\n' +
                '• 这些回测点就是最佳入场机会\n' +
                '\n' +
                '第三步：确认反转\n' +
                '• 只有当价格触及HTF关键位并出现MSS后，MMXM模式才算正式确立\n' +
                '• MSS必须带有Displacement（暴力位移）\n' +
                '• 没有MSS确认，不要轻易入场\n' +
                '\n' +
                '第四步：低风险切入\n' +
                '• 最安全的入场点不是在最底部的反转点\n' +
                '• 而是在反转后的第一个回测点\n' +
                '• 通常是High Probability SMT或FVG重合处\n' +
                '• 此时风险最低，确定性最高\n' +
                '\n' +
                '入场策略：\n' +
                '• 策略一 - 反转入场：HTF关键位+MSS确认后入场\n' +
                '• 策略二 - 回测入场：等待右侧回测左侧阻力变支撑位\n' +
                '• 策略三 - FVG入场：在反转后的FVG缺口中挂单',
            exit: '出场策略与风险管理：\n' +
                '\n' +
                '目标设定：\n' +
                '• 第一目标：反转后的第一个盘整平台\n' +
                '• 第二目标：左侧曲线的中间盘整区\n' +
                '• 最终目标：初始盘整区的流动性池子\n' +
                '\n' +
                '分批出场：\n' +
                '• 第一目标位减仓30-50%\n' +
                '• 移动止损到保本位\n' +
                '• 剩余仓位追踪到最终目标\n' +
                '\n' +
                '风控要点：\n' +
                '• 止损设在HTF反转点之外\n' +
                '• 如果MSS被破坏，立即止损\n' +
                '• 盈亏比至少保持2:1以上\n' +
                '• 永远不要在趋势中间抄底/抄顶\n' +
                '\n' +
                '无效化条件：\n' +
                '• 价格跌破反转低点（做多时）\n' +
                '• 价格涨破反转高点（做空时）\n' +
                '• HTF结构被破坏\n' +
                '• 多次测试同一位置不突破\n' +
                '\n' +
                '图表关键价位解读：\n' +
                '• 90,298.64（红色线）：流动性猎杀高点，空头入场参考\n' +
                '• 88,124.28（蓝色EMA20）：中期支撑/阻力，趋势判断参考\n' +
                '• 87,736.96（当前价格区域）：交易博弈区\n' +
                '• 87,510.67（青色线）：关键流动性支撑，潜在反转区',
            psychology: 'MMXM模型的心理博弈：\n' +
                '\n' +
                '散户心理陷阱：\n' +
                '• 左侧下跌时：认为趋势确立，追空或恐慌割肉\n' +
                '• 底部反转时：不敢相信反转，错过最佳入场\n' +
                '• 右侧上涨时：追涨进场，结果被回测洗出\n' +
                '• 到达目标时：FOMO追高，被做市商派发\n' +
                '\n' +
                '正确的心理建设：\n' +
                '• 看大局：始终站在HTF的角度看问题\n' +
                '• 等信号：只在MSS确认后才行动\n' +
                '• 找对称：利用左侧结构预判右侧走势\n' +
                '• 控风险：宁可错过，不可做错\n' +
                '\n' +
                '做市商视角切换：\n' +
                '• 不要问"价格会涨还是跌"\n' +
                '• 要问"做市商需要获取哪里的流动性"\n' +
                '• 不要问"这里会不会反转"\n' +
                '• 要问"HTF的PD Array是否已经触及"\n' +
                '\n' +
                '情绪管理：\n' +
                '• 左侧下跌时：保持冷静，这是做市商在累积\n' +
                '• 反转确认后：果断入场，不要犹豫\n' +
                '• 右侧回测时：这是加仓机会，不是恐惧时刻\n' +
                '• 到达目标后：获利了结，不要贪婪',
            examples: 'MMXM模型实战案例（基于图表分析）：\n' +
                '\n' +
                '案例：BTC 15分钟图 做市商操控剧本\n' +
                '交易对：BTC/USD（Coinbase）\n' +
                '时间周期：15分钟\n' +
                '当前价格：约87,736.96\n' +
                '\n' +
                '五阶段完整分析：\n' +
                '\n' +
                '第一阶段：初始盘整 (Original Consolidation)\n' +
                '• 图表左侧的横盘区域\n' +
                '• 这里堆积了大量散户止损\n' +
                '• 同时也是最终的流动性目标\n' +
                '\n' +
                '第二阶段：扩张与重累积\n' +
                '• 价格突然暴力拉升\n' +
                '• 冲击90,298.64附近的高点（红色水平线）\n' +
                '• 途中的盘整平台形成"买方曲线"\n' +
                '• 散户FOMO追多，空头止损被扫\n' +
                '\n' +
                '第三阶段：聪明钱反转 (SMR)\n' +
                '• 在90,298.64高点形成SFP\n' +
                '• 触及HTF阻力/溢价区\n' +
                '• MSS信号出现：暴力红K吞没之前涨幅\n' +
                '• 确认这是MMSM（做市商卖出模型）\n' +
                '\n' +
                '第四阶段：再派发阶段\n' +
                '• 价格开始下跌\n' +
                '• 左侧上涨时的"支撑位"现在变成"阻力位"\n' +
                '• EMA20（蓝线88,124）成为空头入场参考\n' +
                '• 反弹到这些位置就是做空机会\n' +
                '\n' +
                '第五阶段：回归目标\n' +
                '• 价格已跌至87,736附近\n' +
                '• 下方87,510（青色线）是关键支撑\n' +
                '• 这里是初始盘整区的下方流动性\n' +
                '• 做市商的终极目标：收割这里的止损\n' +
                '\n' +
                '交易机会识别：\n' +
                '• 当前做空：在EMA20附近反弹时做空，目标87,510\n' +
                '• 潜在做多：观察87,510是否形成MMBM反转\n' +
                '\n' +
                'MMXM核心总结：\n' +
                '• 初始盘整 = 流动性制造与最终目标\n' +
                '• 左侧曲线 = 聪明钱累积/派发阶段\n' +
                '• HTF反转 = MSS确认，趋势正式改变\n' +
                '• 右侧曲线 = 镜像左侧，阻力变支撑（或反之）\n' +
                '• 回归目标 = 收割初始盘整区流动性\n' +
                '• 记住：做市商的目标是在横盘后将价格推向极端，然后带回起点收割流动性'
        }
    },
    {
        id: 'bsl-ssl',
        title: '买卖方流动性 (BSL/SSL)',
        filename: 'ICT_PLACEHOLDER.png',
        description: 'ICT核心概念：理解市场流动性的本质与主力的流动性目标',
        category: 'neutral',
        keywords: ['BSL', 'SSL', '流动性', 'Buy Side Liquidity', 'Sell Side Liquidity', 'Liquidity Pool'],
        explanation: {
            overview: 'BSL/SSL（Buy Side Liquidity / Sell Side Liquidity）是ICT交易体系中最核心的概念之一。理解流动性就是理解市场运动的根本原因。\n' +
                '\n' +
                'BSL（买方流动性）定义：\n' +
                '• 位置：前高点、等高点(EQH)、阻力位上方\n' +
                '• 内容：空头的止损单 + 突破买单\n' +
                '• 主力视角：这是"油箱"，价格上涨需要的燃料\n' +
                '• 散户视角：认为是"阻力位"\n' +
                '\n' +
                'SSL（卖方流动性）定义：\n' +
                '• 位置：前低点、等低点(EQL)、支撑位下方\n' +
                '• 内容：多头的止损单 + 突破卖单\n' +
                '• 主力视角：这是"油箱"，价格下跌需要的燃料\n' +
                '• 散户视角：认为是"支撑位"\n' +
                '\n' +
                '流动性的核心逻辑：\n' +
                '• 市场运动需要流动性作为燃料\n' +
                '• 主力在流动性池子"加油"后才能推动价格\n' +
                '• 没有流动性，价格无法持续运动\n' +
                '• 散户的止损就是主力的入场',
            setup: '流动性识别方法：\n' +
                '\n' +
                'BSL（买方流动性）识别：\n' +
                '• 明显的前高点（Swing High）\n' +
                '• 等高点区域（Equal Highs）\n' +
                '• 反复测试但未突破的阻力\n' +
                '• 趋势线上沿\n' +
                '• 关键心理价位上方（如整数关口）\n' +
                '\n' +
                'SSL（卖方流动性）识别：\n' +
                '• 明显的前低点（Swing Low）\n' +
                '• 等低点区域（Equal Lows）\n' +
                '• 反复测试但未跌破的支撑\n' +
                '• 趋势线下沿\n' +
                '• 关键心理价位下方\n' +
                '\n' +
                '流动性强度判断：\n' +
                '• 测试次数越多 = 流动性越密集\n' +
                '• 时间框架越大 = 流动性越厚实\n' +
                '• 位置越明显 = 吸引的订单越多\n' +
                '• 日线级别流动性 > 4H级别 > 1H级别',
            entry: '基于流动性的交易策略：\n' +
                '\n' +
                '策略一：流动性扫荡后入场（Liquidity Sweep）\n' +
                '• 等待价格突破流动性池子\n' +
                '• 观察是否形成SFP（假突破）\n' +
                '• 价格收回后反向入场\n' +
                '• 止损设在扫荡最远点\n' +
                '\n' +
                '策略二：流动性目标设定\n' +
                '• 确定当前趋势方向\n' +
                '• 找到趋势方向上的流动性池子\n' +
                '• 这就是价格的目标\n' +
                '• 持仓直到流动性被扫荡\n' +
                '\n' +
                '策略三：流动性汇合入场\n' +
                '• 寻找PD Array + 流动性扫荡的汇合\n' +
                '• 例如：扫完SSL后回测到FVG入场\n' +
                '• 目标指向BSL（对面流动性）\n' +
                '\n' +
                '入场checklist：\n' +
                '• ✅ 识别到明确的流动性池子\n' +
                '• ✅ 流动性被扫荡（突破后收回）\n' +
                '• ✅ 符合HTF Bias方向\n' +
                '• ✅ 有PD Array作为入场点\n' +
                '• ✅ 目标是对面的流动性',
            exit: '出场与风险管理：\n' +
                '\n' +
                '止盈目标：\n' +
                '• 主要目标：对面的流动性池子\n' +
                '• 做多目标：上方BSL（买方流动性）\n' +
                '• 做空目标：下方SSL（卖方流动性）\n' +
                '• 中间目标：途中的FVG或OB\n' +
                '\n' +
                '止损设置：\n' +
                '• 入场后止损：扫荡最远点之外\n' +
                '• 逻辑：如果再次突破，说明不是假扫荡\n' +
                '\n' +
                '分批出场：\n' +
                '• 第一目标（LTF流动性）减仓50%\n' +
                '• 移动止损到入场价\n' +
                '• 最终目标（HTF流动性）出清剩余',
            psychology: '流动性思维建设：\n' +
                '\n' +
                '认知升级：\n' +
                '• 散户思维：这是"支撑/阻力"\n' +
                '• ICT思维：这是"流动性池子"\n' +
                '• 散户行为：在支撑买入，在阻力卖出\n' +
                '• 主力行为：扫掉支撑的止损，再拉升\n' +
                '\n' +
                '核心心理转变：\n' +
                '• "突破支撑"不是卖出信号，而是可能的买入机会\n' +
                '• "突破阻力"不是买入信号，而是可能的卖出机会\n' +
                '• 主力需要流动性才能入场，你的止损就是他的入场\n' +
                '\n' +
                '实战心态：\n' +
                '• 不要把止损放在明显的支撑下方\n' +
                '• 那里是主力最喜欢扫的地方\n' +
                '• 学会等待扫荡完成后入场',
            examples: 'BSL/SSL实战案例：\n' +
                '\n' +
                '案例一：SSL扫荡后做多\n' +
                '• 背景：日线看涨Bias\n' +
                '• 观察：4H图有明显的双底（等低点EQL）\n' +
                '• 识别：EQL下方有大量SSL（多头止损）\n' +
                '• 动作：价格跌破EQL，触发止损\n' +
                '• 信号：迅速收回形成SFP\n' +
                '• 入场：在FVG或OB入场做多\n' +
                '• 目标：上方BSL\n' +
                '• 结果：价格上涨突破前高\n' +
                '\n' +
                '案例二：BSL扫荡后做空\n' +
                '• 背景：日线看跌Bias\n' +
                '• 观察：4H图有明显的双顶（等高点EQH）\n' +
                '• 识别：EQH上方有大量BSL（空头止损）\n' +
                '• 动作：价格涨破EQH，触发止损\n' +
                '• 信号：迅速回落形成SFP\n' +
                '• 入场：在Bearish OB入场做空\n' +
                '• 目标：下方SSL\n' +
                '• 结果：价格下跌突破前低\n' +
                '\n' +
                'BSL/SSL核心要点：\n' +
                '• 流动性是市场运动的燃料\n' +
                '• BSL在前高上方，SSL在前低下方\n' +
                '• 主力扫完流动性后才会真正推动价格\n' +
                '• 学会识别流动性池子，等待扫荡后入场'
        }
    },
    {
        id: 'eqh-eql',
        title: '等高点/等低点 (EQH/EQL)',
        filename: 'ICT_PLACEHOLDER.png',
        description: 'ICT流动性目标：主力最喜欢猎杀的流动性密集区域',
        category: 'neutral',
        keywords: ['EQH', 'EQL', 'Equal Highs', 'Equal Lows', '等高点', '等低点', '流动性目标'],
        explanation: {
            overview: 'EQH/EQL（Equal Highs / Equal Lows）是ICT体系中最重要的流动性目标。当价格在同一位置多次停止时，就形成了流动性密集区。\n' +
                '\n' +
                'EQH（等高点）定义：\n' +
                '• 两次或多次高点几乎在同一价位\n' +
                '• 形成视觉上的"双顶"或"三顶"\n' +
                '• 散户视角：强阻力位，适合做空\n' +
                '• ICT视角：流动性密集区，主力的目标\n' +
                '\n' +
                'EQL（等低点）定义：\n' +
                '• 两次或多次低点几乎在同一价位\n' +
                '• 形成视觉上的"双底"或"三底"\n' +
                '• 散户视角：强支撑位，适合做多\n' +
                '• ICT视角：流动性密集区，主力的目标\n' +
                '\n' +
                '为什么EQH/EQL是流动性磁铁：\n' +
                '• 位置明显，所有人都能看到\n' +
                '• 散户在此处大量挂止损单\n' +
                '• 测试次数越多，止损越密集\n' +
                '• 主力必须来"收割"这些流动性',
            setup: 'EQH/EQL识别标准：\n' +
                '\n' +
                '有效EQH识别：\n' +
                '• 两个或以上高点价差在0.1%以内\n' +
                '• 间隔时间越长，流动性越密集\n' +
                '• 时间框架越大，重要性越高\n' +
                '• 形成过程中价格未能突破\n' +
                '\n' +
                '有效EQL识别：\n' +
                '• 两个或以上低点价差在0.1%以内\n' +
                '• 间隔时间越长，流动性越密集\n' +
                '• 时间框架越大，重要性越高\n' +
                '• 形成过程中价格未能跌破\n' +
                '\n' +
                'EQH/EQL强度等级：\n' +
                '• ⭐ 双顶/双底：基础流动性\n' +
                '• ⭐⭐ 三顶/三底：中等流动性\n' +
                '• ⭐⭐⭐ 多次测试：极高流动性\n' +
                '• 越明显的形态越容易被猎杀\n' +
                '\n' +
                'EQH/EQL时间框架优先级：\n' +
                '• 日线EQH/EQL > 4H > 1H > 15M\n' +
                '• 大周期的EQH/EQL是主要目标\n' +
                '• 小周期的EQH/EQL是入场信号',
            entry: 'EQH/EQL交易策略：\n' +
                '\n' +
                '策略一：EQH/EQL作为流动性目标\n' +
                '• 确定趋势方向\n' +
                '• 找到对应方向的EQH/EQL\n' +
                '• 这就是最终目标\n' +
                '• 持仓直到价格触及\n' +
                '\n' +
                '策略二：EQH/EQL扫荡后反转\n' +
                '• 等待价格突破EQH/EQL\n' +
                '• 观察是否形成假突破\n' +
                '• 收回后寻找反向入场\n' +
                '• 止损设在突破最远点\n' +
                '\n' +
                '策略三：避开EQH/EQL陷阱\n' +
                '• 不要在EQH做空\n' +
                '• 不要在EQL做多\n' +
                '• 因为主力可能先扫一波再反转\n' +
                '• 等待扫荡完成后跟进\n' +
                '\n' +
                '看涨时的操作：\n' +
                '• 目标：上方EQH\n' +
                '• 入场：在SSL扫荡后买入\n' +
                '• 持仓：直到EQH被突破\n' +
                '\n' +
                '看跌时的操作：\n' +
                '• 目标：下方EQL\n' +
                '• 入场：在BSL扫荡后卖出\n' +
                '• 持仓：直到EQL被跌破',
            exit: '出场策略：\n' +
                '\n' +
                '基于EQH/EQL的止盈：\n' +
                '• 当做多时：目标设在EQH\n' +
                '• 当做空时：目标设在EQL\n' +
                '• 价格触及EQH/EQL时减仓\n' +
                '• 观察是否形成反转信号\n' +
                '\n' +
                '突破后的操作：\n' +
                '• 如果EQH/EQL被有效突破（收盘）\n' +
                '• 可能进入趋势延续阶段\n' +
                '• 寻找下一个EQH/EQL作为目标\n' +
                '\n' +
                '风险管理：\n' +
                '• 不要把止损放在EQH/EQL附近\n' +
                '• 那里是主力最喜欢扫的位置\n' +
                '• 止损应该放在更远的技术位置',
            psychology: 'EQH/EQL心理建设：\n' +
                '\n' +
                '常见散户错误：\n' +
                '• 看到双底就做多\n' +
                '• 看到双顶就做空\n' +
                '• 止损放在EQH/EQL附近\n' +
                '• 结果：被扫损后价格反转\n' +
                '\n' +
                'ICT思维方式：\n' +
                '• 双底 = 流动性密集区，可能被扫\n' +
                '• 双顶 = 流动性密集区，可能被扫\n' +
                '• 等待扫荡完成再入场\n' +
                '• 或者把EQH/EQL作为目标\n' +
                '\n' +
                '记住：\n' +
                '• 越明显的形态越容易被利用\n' +
                '• 所有人都看到的东西必须被猎杀\n' +
                '• 先扫后走是主力的标准操作',
            examples: 'EQH/EQL实战案例：\n' +
                '\n' +
                '案例一：EQL扫荡后上涨\n' +
                '• 形态：4H图形成明显双底\n' +
                '• 散户行为：在双底做多，止损放下方\n' +
                '• 主力动作：跌破双底，触发止损\n' +
                '• SFP形成：价格迅速收回双底上方\n' +
                '• 入场机会：在收回后的FVG做多\n' +
                '• 目标：上方EQH\n' +
                '• 结果：价格上涨至EQH并突破\n' +
                '\n' +
                '案例二：EQH作为做多目标\n' +
                '• 背景：日线看涨Bias\n' +
                '• 观察：上方有明显的4H EQH\n' +
                '• 策略：在SSL扫荡后入场做多\n' +
                '• 目标设定：EQH位置\n' +
                '• 持仓：保持多头直到触及EQH\n' +
                '• 到达EQH后：分批减仓\n' +
                '\n' +
                '案例三：EQL陷阱学习案例\n' +
                '• 错误：看到三重底立即做多\n' +
                '• 止损：放在三重底下方\n' +
                '• 结果：被扫损后价格强势上涨\n' +
                '• 教训：等待扫损完成后再入场\n' +
                '\n' +
                'EQH/EQL核心要点：\n' +
                '• EQH/EQL是流动性密集区\n' +
                '• 不要在EQH做空，不要在EQL做多\n' +
                '• 把EQH/EQL作为目标或等待扫荡\n' +
                '• 越明显的形态越容易被猎杀'
        }
    },
    {
        id: 'smt-divergence',
        title: '聪明钱分歧 (SMT Divergence)',
        filename: 'ICT_PLACEHOLDER.png',
        description: 'ICT高级分析：通过相关资产对比判断主力真实意图',
        category: 'neutral',
        keywords: ['SMT', 'Smart Money Technique', '聪明钱分歧', 'Divergence', '相关性分析'],
        explanation: {
            overview: 'SMT Divergence（Smart Money Technique Divergence）是ICT体系中用于判断主力真实意图的高级技术。通过观察相关资产之间的分歧，可以提前发现市场反转。\n' +
                '\n' +
                'SMT的核心原理：\n' +
                '• 相关资产通常同步运动\n' +
                '• 当出现不同步时，说明有"猫腻"\n' +
                '• 这种分歧暴露了主力的真实意图\n' +
                '• 分歧往往预示着反转即将发生\n' +
                '\n' +
                '常用的相关资产对：\n' +
                '• 外汇：EUR/USD vs GBP/USD\n' +
                '• 外汇：USD/JPY vs USD/CHF（反向）\n' +
                '• 指数：ES (S&P) vs NQ (Nasdaq)\n' +
                '• 指数：DJI vs SPX\n' +
                '• 加密：BTC vs ETH\n' +
                '\n' +
                'SMT分歧的类型：\n' +
                '• 看涨SMT：A创新低，B未创新低 → 看涨\n' +
                '• 看跌SMT：A创新高，B未创新高 → 看跌',
            setup: 'SMT分歧识别方法：\n' +
                '\n' +
                '看涨SMT分歧识别：\n' +
                '• 资产A：创出更低的低点（Lower Low）\n' +
                '• 资产B：未能创出新低（Higher Low）\n' +
                '• 解读：主力在A上扫损，但B已经开始积累\n' +
                '• 信号：看涨反转即将发生\n' +
                '\n' +
                '看跌SMT分歧识别：\n' +
                '• 资产A：创出更高的高点（Higher High）\n' +
                '• 资产B：未能创出新高（Lower High）\n' +
                '• 解读：主力在A上诱多，但B已经开始派发\n' +
                '• 信号：看跌反转即将发生\n' +
                '\n' +
                'SMT有效性判断：\n' +
                '• 两个资产必须高度相关\n' +
                '• 分歧必须清晰可见\n' +
                '• 最好配合其他ICT确认信号\n' +
                '• 更高时间框架的SMT更可靠\n' +
                '\n' +
                'SMT + 其他信号汇合：\n' +
                '• SMT + 流动性扫荡 = 极高概率信号\n' +
                '• SMT + OB回测 = 顶级入场机会\n' +
                '• SMT + MSS = 趋势反转确认',
            entry: 'SMT交易策略：\n' +
                '\n' +
                '看涨SMT入场策略：\n' +
                '• 观察：A创新低，B未创新低\n' +
                '• 等待：A在新低形成SFP\n' +
                '• 确认：出现MSS或看涨OB\n' +
                '• 入场：在PD Array（FVG/OB）入场\n' +
                '• 止损：SFP最低点下方\n' +
                '\n' +
                '看跌SMT入场策略：\n' +
                '• 观察：A创新高，B未创新高\n' +
                '• 等待：A在新高形成SFP\n' +
                '• 确认：出现MSS或看跌OB\n' +
                '• 入场：在PD Array入场做空\n' +
                '• 止损：SFP最高点上方\n' +
                '\n' +
                'SMT入场checklist：\n' +
                '• ✅ 识别到清晰的SMT分歧\n' +
                '• ✅ 分歧发生在流动性位置\n' +
                '• ✅ 有SFP或MSS确认\n' +
                '• ✅ 存在PD Array入场点\n' +
                '• ✅ 符合更高时间框架Bias',
            exit: '出场策略：\n' +
                '\n' +
                '止盈目标：\n' +
                '• 第一目标：对面的流动性\n' +
                '• 第二目标：更高时间框架关键位\n' +
                '• 分批减仓：确保锁定利润\n' +
                '\n' +
                '止损管理：\n' +
                '• 初始止损：分歧极值点外\n' +
                '• 移动止损：价格突破后跟踪\n' +
                '\n' +
                'SMT失效判断：\n' +
                '• 两个资产重新同步\n' +
                '• 分歧消失，价格继续原趋势\n' +
                '• 此时应立即止损',
            psychology: 'SMT心理建设：\n' +
                '\n' +
                'SMT的深层含义：\n' +
                '• 主力无法同时操纵所有相关资产\n' +
                '• 分歧暴露了他们的真实意图\n' +
                '• 这是散户可以利用的信息不对称\n' +
                '\n' +
                '正确使用SMT的心态：\n' +
                '• SMT是确认工具，不是独立信号\n' +
                '• 必须配合其他ICT概念使用\n' +
                '• 不是每次分歧都会立即反转\n' +
                '• 耐心等待完整的确认信号\n' +
                '\n' +
                '记住：\n' +
                '• SMT让你看到主力看不见的漏洞\n' +
                '• 这是高级交易者的秘密武器\n' +
                '• 需要持续观察和练习才能熟练',
            examples: 'SMT实战案例：\n' +
                '\n' +
                '案例一：看涨SMT（BTC vs ETH）\n' +
                '• 观察：BTC跌破前低创新低\n' +
                '• 对比：ETH未能创新低（Higher Low）\n' +
                '• SMT形成：看涨分歧\n' +
                '• 等待：BTC在新低形成SFP\n' +
                '• 入场：BTC在FVG入场做多\n' +
                '• 结果：价格反转上涨\n' +
                '\n' +
                '案例二：看跌SMT（ES vs NQ）\n' +
                '• 观察：ES创出新高\n' +
                '• 对比：NQ未能创新高（Lower High）\n' +
                '• SMT形成：看跌分歧\n' +
                '• 等待：ES形成SFP后回落\n' +
                '• 入场：在Bearish OB做空\n' +
                '• 结果：指数开始下跌\n' +
                '\n' +
                'SMT核心要点：\n' +
                '• 相关资产分歧暴露主力意图\n' +
                '• A创新高/低、B未跟随 = 反转信号\n' +
                '• 必须配合SFP、MSS、OB确认\n' +
                '• SMT是高级确认工具'
        }
    },
    {
        id: 'kill-zones',
        title: '杀戮时段 (Kill Zones)',
        filename: 'ICT_PLACEHOLDER.png',
        description: 'ICT时间分析：全球市场最活跃的交易时段与最佳入场时机',
        category: 'neutral',
        keywords: ['Kill Zones', '杀戮时段', 'London Open', 'New York Open', 'Asian Range'],
        explanation: {
            overview: 'Kill Zones（杀戮时段）是ICT体系中的时间框架分析核心。主力在特定时段最活跃，理解这些时段能大幅提升交易效率。\n' +
                '\n' +
                '四大杀戮时段（UTC时间）：\n' +
                '• Asian Kill Zone: 00:00 - 04:00 UTC\n' +
                '• London Open Kill Zone: 07:00 - 10:00 UTC\n' +
                '• New York Open Kill Zone: 12:00 - 15:00 UTC\n' +
                '• London Close Kill Zone: 15:00 - 17:00 UTC\n' +
                '\n' +
                '新西兰时间转换：\n' +
                '• 亚洲时段: 13:00 - 17:00 NZDT\n' +
                '• 伦敦开盘: 20:00 - 23:00 NZDT ⭐（黄金时段）\n' +
                '• 纽约开盘: 01:00 - 04:00 NZDT\n' +
                '• 伦敦收盘: 04:00 - 06:00 NZDT\n' +
                '\n' +
                'Kill Zone的重要性：\n' +
                '• 主力在这些时段最活跃\n' +
                '• 流动性最充足，波动性最大\n' +
                '• 最佳的入场和猎杀机会\n' +
                '• 在KZ外交易通常效率低下',
            setup: '各Kill Zone详解：\n' +
                '\n' +
                'Asian Kill Zone（亚洲时段）：\n' +
                '• 特征：低波动性，区间震荡\n' +
                '• 作用：制造流动性（EQH/EQL）\n' +
                '• 策略：画出Asian Range高低点\n' +
                '• 目的：为后续时段提供猎杀目标\n' +
                '• 操作：一般不交易，只观察\n' +
                '\n' +
                'London Open Kill Zone（伦敦开盘）⭐：\n' +
                '• 特征：高波动性，趋势启动\n' +
                '• 作用：猎杀Asian Range流动性\n' +
                '• 策略：等待突破Asian高/低后SFP\n' +
                '• 典型剧本：Judas Swing（犹大摆动）\n' +
                '• 操作：最佳交易时段\n' +
                '\n' +
                'New York Open Kill Zone（纽约开盘）：\n' +
                '• 特征：波动性激增，趋势延续或反转\n' +
                '• 作用：延续或反转伦敦趋势\n' +
                '• 策略：跟随伦敦Bias或寻找反转\n' +
                '• 典型剧本：Second chance entry\n' +
                '• 操作：伦敦时段的第二次机会\n' +
                '\n' +
                'London Close Kill Zone（伦敦收盘）：\n' +
                '• 特征：波动性下降，利润了结\n' +
                '• 作用：反转日内趋势的机会\n' +
                '• 策略：寻找日内极值反转\n' +
                '• 操作：适合逆势交易者',
            entry: 'Kill Zone交易策略：\n' +
                '\n' +
                '伦敦开盘策略（最推荐）：\n' +
                '• 20:00 NZDT 开始观察\n' +
                '• 等待价格突破Asian Range\n' +
                '• 观察是否形成SFP\n' +
                '• SFP确认后反向入场\n' +
                '• 在FVG或OB精确入场\n' +
                '\n' +
                '纽约开盘策略：\n' +
                '• 伦敦已确立趋势时：回调入场\n' +
                '• 伦敦趋势不清时：等待新的信号\n' +
                '• 在OTE区域寻找入场机会\n' +
                '\n' +
                'Kill Zone入场规则：\n' +
                '• ✅ 必须在Kill Zone时段内入场\n' +
                '• ✅ 配合当日Bias方向\n' +
                '• ✅ 有明确的流动性扫荡\n' +
                '• ✅ 存在PD Array入场点\n' +
                '• ❌ Kill Zone外一般不入场\n' +
                '• ❌ 不要在亚洲时段交易',
            exit: '出场与时间管理：\n' +
                '\n' +
                '基于时间的出场：\n' +
                '• 伦敦入场 → 纽约前减仓\n' +
                '• 纽约入场 → 伦敦收盘前减仓\n' +
                '• 避免隔夜持仓风险\n' +
                '\n' +
                '目标设定：\n' +
                '• 最小目标：Asian Range对面\n' +
                '• 理想目标：更高时间框架流动性\n' +
                '• 分批减仓锁定利润\n' +
                '\n' +
                '风险控制：\n' +
                '• Kill Zone结束前评估仓位\n' +
                '• 不要让盈利变亏损\n' +
                '• 时间止损：KZ结束未达目标考虑出场',
            psychology: 'Kill Zone心理建设：\n' +
                '\n' +
                '时间纪律：\n' +
                '• 只在Kill Zone交易\n' +
                '• 其他时间保持观望\n' +
                '• 不要因无聊而交易\n' +
                '\n' +
                '新西兰交易者优势：\n' +
                '• 伦敦开盘 = 晚上20:00-23:00\n' +
                '• 正好是晚饭后的黄金时间\n' +
                '• 无需熬夜即可交易最佳时段\n' +
                '• 亚洲时段下午画线观察\n' +
                '\n' +
                '记住：\n' +
                '• Kill Zone是质量时间，不是数量\n' +
                '• 3小时高质量分析 > 12小时盯盘\n' +
                '• 主力按时间表行动，你也应该',
            examples: 'Kill Zone实战案例：\n' +
                '\n' +
                '案例一：伦敦开盘Judas Swing\n' +
                '• 亚洲时段：价格在100-110区间震荡\n' +
                '• 伦敦开盘（20:00 NZDT）：\n' +
                '  - 价格突然跌破Asian Low (100)\n' +
                '  - 触发多头止损\n' +
                '  - 迅速收回形成SFP\n' +
                '• 入场：在FVG做多\n' +
                '• 目标：Asian High (110) 以上\n' +
                '• 结果：价格在纽约前达到目标\n' +
                '\n' +
                '案例二：纽约开盘延续\n' +
                '• 伦敦时段：确立看涨趋势\n' +
                '• 纽约开盘前：价格回调\n' +
                '• 纽约开盘（01:00 NZDT）：\n' +
                '  - 价格回调到OTE区域\n' +
                '  - 在Bullish OB获得支撑\n' +
                '• 入场：OB位置加仓\n' +
                '• 结果：趋势延续至更高目标\n' +
                '\n' +
                'Kill Zone核心要点：\n' +
                '• 伦敦开盘是最佳交易时段\n' +
                '• 亚洲时段用于画线观察\n' +
                '• 在KZ外保持纪律不交易\n' +
                '• 新西兰时区完美匹配主要KZ'
        }
    },
    {
        id: 'power-of-3',
        title: '三力量法则 (Power of 3)',
        filename: 'ICT_PLACEHOLDER.png',
        description: 'ICT核心框架：累积-操纵-派发的日内完整交易周期',
        category: 'neutral',
        keywords: ['Power of 3', 'PO3', 'Accumulation', 'Manipulation', 'Distribution', 'AMD'],
        explanation: {
            overview: 'Power of 3（PO3 / 三力量法则）是ICT对日内价格行为的核心解释框架。它描述了主力如何在一天内完成完整的操作周期。\n' +
                '\n' +
                'PO3的三个阶段：\n' +
                '• Accumulation（累积）：建仓阶段\n' +
                '• Manipulation（操纵）：扫损阶段\n' +
                '• Distribution（派发）：趋势阶段\n' +
                '\n' +
                'PO3与AMD的关系：\n' +
                '• AMD是时间框架（亚洲-伦敦-纽约）\n' +
                '• PO3是价格行为（累积-操纵-派发）\n' +
                '• 两者通常同步发生\n' +
                '• 亚洲盘=累积，伦敦盘=操纵，纽约盘=派发\n' +
                '\n' +
                '为什么PO3有效：\n' +
                '• 主力需要时间建仓（累积）\n' +
                '• 需要流动性入场（操纵）\n' +
                '• 需要趋势获利（派发）\n' +
                '• 这是机构交易的自然节奏',
            setup: 'PO3三阶段详解：\n' +
                '\n' +
                '第一阶段：Accumulation（累积）\n' +
                '• 时间：通常在亚洲时段\n' +
                '• 特征：低波动性，区间震荡\n' +
                '• K线：小实体，来回波动\n' +
                '• 主力行为：悄悄建仓\n' +
                '• 散户视角：无聊的盘整\n' +
                '• 流动性：在上下方制造EQH/EQL\n' +
                '\n' +
                '第二阶段：Manipulation（操纵）\n' +
                '• 时间：通常在伦敦开盘\n' +
                '• 特征：假突破，流动性扫荡\n' +
                '• K线：长影线，刺破后收回\n' +
                '• 主力行为：扫掉止损，获取流动性\n' +
                '• 散户视角：突破了！追！\n' +
                '• 实质：这是陷阱，不是真突破\n' +
                '\n' +
                '第三阶段：Distribution（派发）\n' +
                '• 时间：伦敦-纽约时段\n' +
                '• 特征：明确趋势，持续运动\n' +
                '• K线：大实体，方向明确\n' +
                '• 主力行为：推动价格，获取利润\n' +
                '• 散户视角：终于明白被骗了\n' +
                '• 目标：对面的流动性池子',
            entry: 'PO3交易策略：\n' +
                '\n' +
                '策略一：累积阶段画线观察\n' +
                '• 不交易，只观察\n' +
                '• 画出区间高低点\n' +
                '• 标记EQH/EQL位置\n' +
                '• 准备等待扫损信号\n' +
                '\n' +
                '策略二：操纵阶段入场\n' +
                '• 等待价格突破累积区间\n' +
                '• 观察是否形成SFP（假突破）\n' +
                '• 价格收回后寻找入场点\n' +
                '• 在FVG或OB精确入场\n' +
                '• 这是最佳入场时机\n' +
                '\n' +
                '策略三：派发阶段跟随\n' +
                '• 如果错过了操纵阶段入场\n' +
                '• 等待回调到PD Array\n' +
                '• 在OTE区域寻找入场\n' +
                '• 跟随已确立的趋势\n' +
                '\n' +
                'PO3入场checklist：\n' +
                '• ✅ 识别到完整的累积阶段\n' +
                '• ✅ 操纵阶段已扫荡流动性\n' +
                '• ✅ 出现SFP或MSS确认\n' +
                '• ✅ 有明确的派发方向\n' +
                '• ✅ 存在PD Array入场点',
            exit: 'PO3出场策略：\n' +
                '\n' +
                '目标设定：\n' +
                '• 最小目标：累积区间的对面\n' +
                '• 理想目标：对面的流动性（BSL/SSL）\n' +
                '• 最大目标：更高时间框架流动性\n' +
                '\n' +
                '时间因素：\n' +
                '• 派发阶段通常持续到纽约收盘\n' +
                '• 接近收盘时考虑减仓\n' +
                '• 避免隔夜持仓风险\n' +
                '\n' +
                '分批出场：\n' +
                '• 第一目标：减仓50%\n' +
                '• 移动止损到入场价\n' +
                '• 最终目标：出清剩余\n' +
                '\n' +
                '风险管理：\n' +
                '• 止损在操纵阶段极值点外\n' +
                '• 如果派发失败，果断止损',
            psychology: 'PO3心理建设：\n' +
                '\n' +
                '理解PO3的价值：\n' +
                '• 它揭示了市场的真实节奏\n' +
                '• 让你在正确的时间做正确的事\n' +
                '• 累积=观察，操纵=入场，派发=持仓\n' +
                '\n' +
                '常见错误避免：\n' +
                '• 累积阶段就入场 → 被洗出去\n' +
                '• 操纵阶段追突破 → 被套住\n' +
                '• 派发阶段才入场 → 追高杀低\n' +
                '\n' +
                '正确心态：\n' +
                '• 耐心等待三阶段完整展开\n' +
                '• 在操纵阶段完成后入场\n' +
                '• 跟随派发阶段的趋势\n' +
                '\n' +
                '记住：\n' +
                '• 每天都是一个完整的剧本\n' +
                '• 主力按PO3节奏操作\n' +
                '• 理解节奏就能预判剧情',
            examples: 'PO3实战案例：\n' +
                '\n' +
                '案例一：完整PO3做多剧本\n' +
                '• Accumulation（亚洲时段）：\n' +
                '  - 价格在1000-1020区间震荡\n' +
                '  - 形成EQL在1000附近\n' +
                '  - 主力悄悄建立多头仓位\n' +
                '• Manipulation（伦敦开盘）：\n' +
                '  - 价格突然跌破1000（扫SSL）\n' +
                '  - 触发多头止损\n' +
                '  - 迅速收回形成SFP\n' +
                '• Distribution（伦敦-纽约）：\n' +
                '  - 价格开始持续上涨\n' +
                '  - 突破1020，目标更高\n' +
                '  - 派发阶段获得利润\n' +
                '\n' +
                '案例二：PO3入场时机选择\n' +
                '• 理想入场：操纵阶段SFP后\n' +
                '• 位置：FVG或OB\n' +
                '• 止损：操纵阶段最低点下方\n' +
                '• 目标：累积区间上方（BSL）\n' +
                '• RR：通常达到1:3或更高\n' +
                '\n' +
                'PO3核心要点：\n' +
                '• 累积=观察画线\n' +
                '• 操纵=入场时机\n' +
                '• 派发=持仓获利\n' +
                '• PO3是日内交易的完整剧本'
        }
    },
    {
        id: 'silver-bullet',
        title: '银弹策略 (Silver Bullet)',
        filename: 'ICT_PLACEHOLDER.png',
        description: 'ICT精准入场：特定时段内的高胜率FVG入场策略',
        category: 'neutral',
        keywords: ['Silver Bullet', '银弹', 'FVG', 'Kill Zone', '精准入场'],
        explanation: {
            overview: 'Silver Bullet（银弹策略）是ICT体系中的精准入场策略。它专注于在特定时间窗口内寻找FVG入场机会，被认为是ICT最高效的日内策略之一。\n' +
                '\n' +
                'Silver Bullet的定义：\n' +
                '• 在特定的1小时时间窗口内\n' +
                '• 寻找10-15分钟级别的FVG\n' +
                '• 配合当日Bias方向入场\n' +
                '• 高胜率、高效率的入场方法\n' +
                '\n' +
                'Silver Bullet时间窗口（UTC）：\n' +
                '• AM Silver Bullet: 10:00 - 11:00 UTC\n' +
                '• PM Silver Bullet: 14:00 - 15:00 UTC\n' +
                '\n' +
                '新西兰时间转换（NZDT）：\n' +
                '• AM Silver Bullet: 23:00 - 00:00\n' +
                '• PM Silver Bullet: 03:00 - 04:00\n' +
                '\n' +
                '为什么Silver Bullet有效：\n' +
                '• 这些时间点是主力最活跃的时刻\n' +
                '• Kill Zone内的关键转折窗口\n' +
                '• FVG在此时形成概率极高',
            setup: 'Silver Bullet执行条件：\n' +
                '\n' +
                '前提条件：\n' +
                '• 必须有明确的当日Bias\n' +
                '• 必须在指定时间窗口内\n' +
                '• 必须有清晰的流动性扫荡\n' +
                '• 必须形成15M级别FVG\n' +
                '\n' +
                'AM Silver Bullet设置：\n' +
                '• 时间：伦敦开盘后2-3小时\n' +
                '• 窗口：23:00 - 00:00 NZDT\n' +
                '• 条件：伦敦盘已扫荡亚洲流动性\n' +
                '• 入场：在新形成的FVG入场\n' +
                '\n' +
                'PM Silver Bullet设置：\n' +
                '• 时间：纽约开盘后1-2小时\n' +
                '• 窗口：03:00 - 04:00 NZDT\n' +
                '• 条件：纽约盘延续或反转伦敦趋势\n' +
                '• 入场：在新形成的FVG入场\n' +
                '\n' +
                'FVG要求：\n' +
                '• 必须是10-15分钟级别\n' +
                '• 必须在时间窗口内形成\n' +
                '• 必须符合当日Bias方向',
            entry: 'Silver Bullet入场流程：\n' +
                '\n' +
                '第一步：确认当日Bias\n' +
                '• 使用ICT Bias三步法\n' +
                '• 扫了什么？坏了什么？要去哪里？\n' +
                '• 确定做多还是做空\n' +
                '\n' +
                '第二步：等待时间窗口\n' +
                '• AM: 23:00 - 00:00 NZDT\n' +
                '• PM: 03:00 - 04:00 NZDT\n' +
                '• 在窗口外不入场\n' +
                '\n' +
                '第三步：寻找FVG形成\n' +
                '• 观察15M图\n' +
                '• 等待Displacement形成FVG\n' +
                '• FVG方向必须符合Bias\n' +
                '\n' +
                '第四步：CE入场\n' +
                '• 在FVG的CE（50%位置）挂单\n' +
                '• 止损设在FVG边缘外\n' +
                '• 目标是对面的流动性\n' +
                '\n' +
                'Silver Bullet入场checklist：\n' +
                '• ✅ 确认当日Bias\n' +
                '• ✅ 在时间窗口内\n' +
                '• ✅ 有Displacement\n' +
                '• ✅ 形成符合方向的FVG\n' +
                '• ✅ 在CE位置入场',
            exit: '出场策略：\n' +
                '\n' +
                '止盈目标：\n' +
                '• 第一目标：最近的流动性\n' +
                '• 第二目标：当日DOL（Draw on Liquidity）\n' +
                '• 最终目标：HTF流动性目标\n' +
                '\n' +
                '止损设置：\n' +
                '• 标准止损：FVG边缘外几个点\n' +
                '• 逻辑：如果FVG失效，策略失效\n' +
                '\n' +
                '时间管理：\n' +
                '• Silver Bullet入场后通常快速运动\n' +
                '• 如果30分钟内无进展，考虑出场\n' +
                '• 不要过度持仓',
            psychology: 'Silver Bullet心理建设：\n' +
                '\n' +
                'Silver Bullet的优势：\n' +
                '• 时间明确：1小时窗口，效率极高\n' +
                '• 规则清晰：FVG + Bias，简单易执行\n' +
                '• 胜率较高：在正确时间点入场\n' +
                '\n' +
                '执行纪律：\n' +
                '• 窗口外坚决不交易\n' +
                '• 没有FVG坚决不入场\n' +
                '• Bias不清坚决不操作\n' +
                '\n' +
                '记住：\n' +
                '• Silver Bullet是精准策略，不是频繁策略\n' +
                '• 一天最多2次机会\n' +
                '• 质量 > 数量',
            examples: 'Silver Bullet实战案例：\n' +
                '\n' +
                '案例一：AM Silver Bullet做多\n' +
                '• Bias确认：日线看涨，伦敦扫完SSL\n' +
                '• 时间：23:15 NZDT（窗口内）\n' +
                '• 15M图：出现暴力上涨K线\n' +
                '• FVG形成：看涨FVG在1000-1010\n' +
                '• 入场：CE位置1005挂单\n' +
                '• 止损：999（FVG下方）\n' +
                '• 目标：上方BSL 1050\n' +
                '• 结果：价格触及CE后上涨至目标\n' +
                '\n' +
                '案例二：PM Silver Bullet做空\n' +
                '• Bias确认：日线看跌，纽约扫完BSL\n' +
                '• 时间：03:30 NZDT（窗口内）\n' +
                '• 15M图：出现暴力下跌K线\n' +
                '• FVG形成：看跌SIBI\n' +
                '• 入场：CE位置做空\n' +
                '• 结果：价格反弹到CE后下跌\n' +
                '\n' +
                'Silver Bullet核心要点：\n' +
                '• 特定时间窗口 + FVG入场\n' +
                '• 必须配合当日Bias\n' +
                '• AM和PM各最多1次机会\n' +
                '• 高效、精准、高胜率'
        }
    },
    {
        id: 'judas-swing',
        title: '犹大摆动 (Judas Swing)',
        filename: 'ICT_PLACEHOLDER.png',
        description: 'ICT经典陷阱：伦敦开盘时的假突破与流动性猎杀',
        category: 'neutral',
        keywords: ['Judas Swing', '犹大摆动', '假突破', 'London Open', '流动性猎杀'],
        explanation: {
            overview: 'Judas Swing（犹大摆动）是ICT体系中描述伦敦开盘时假突破行为的经典概念。就像《圣经》中的犹大背叛一样，这是市场对散户的"背叛"。\n' +
                '\n' +
                'Judas Swing的定义：\n' +
                '• 发生在伦敦开盘时段\n' +
                '• 价格向一个方向剧烈突破\n' +
                '• 然后迅速反转向相反方向\n' +
                '• 这是主力猎杀流动性的经典操作\n' +
                '\n' +
                '为什么叫"犹大"：\n' +
                '• 犹大用亲吻出卖了耶稣\n' +
                '• 市场用"突破"出卖了散户\n' +
                '• 看起来是机会，实际是陷阱\n' +
                '• 最甜蜜的信号往往最危险\n' +
                '\n' +
                'Judas Swing的目的：\n' +
                '• 扫掉亚洲时段积累的止损单\n' +
                '• 获取流动性为真实趋势提供燃料\n' +
                '• 让追突破的散户深陷泥潭',
            setup: 'Judas Swing完整结构：\n' +
                '\n' +
                '第一阶段：亚洲盘积累\n' +
                '• 价格在区间内震荡\n' +
                '• 形成Asian High和Asian Low\n' +
                '• 散户在区间边缘挂止损\n' +
                '• 流动性在两侧积累\n' +
                '\n' +
                '第二阶段：犹大之吻\n' +
                '• 伦敦开盘（20:00 NZDT）\n' +
                '• 价格突然向一侧突破\n' +
                '• 突破Asian High或Asian Low\n' +
                '• 触发大量止损/追单\n' +
                '• 这就是"背叛"的时刻\n' +
                '\n' +
                '第三阶段：真相大白\n' +
                '• 价格迅速反转\n' +
                '• 形成SFP（假突破确认）\n' +
                '• 开始向相反方向运动\n' +
                '• 真正的趋势开始\n' +
                '\n' +
                'Judas Swing识别要点：\n' +
                '• 必须在伦敦开盘时段\n' +
                '• 必须有明显的亚洲区间\n' +
                '• 突破后必须迅速收回\n' +
                '• 形成清晰的SFP',
            entry: 'Judas Swing交易策略：\n' +
                '\n' +
                '策略一：等待犹大完成后入场\n' +
                '• 绝对不追突破\n' +
                '• 等待价格收回区间内\n' +
                '• 在SFP确认后入场\n' +
                '• 在FVG或OB精确入场\n' +
                '\n' +
                '策略二：看涨Judas Swing做多\n' +
                '• 亚洲盘：画出区间高低点\n' +
                '• 伦敦开盘：价格跌破Asian Low\n' +
                '• 等待：价格收回形成SFP\n' +
                '• 入场：在FVG做多\n' +
                '• 目标：Asian High以上\n' +
                '\n' +
                '策略三：看跌Judas Swing做空\n' +
                '• 亚洲盘：画出区间高低点\n' +
                '• 伦敦开盘：价格涨破Asian High\n' +
                '• 等待：价格收回形成SFP\n' +
                '• 入场：在Bearish OB做空\n' +
                '• 目标：Asian Low以下\n' +
                '\n' +
                '入场checklist：\n' +
                '• ✅ 确认亚洲区间形成\n' +
                '• ✅ 伦敦开盘时段\n' +
                '• ✅ 出现突破（犹大之吻）\n' +
                '• ✅ 突破后迅速收回（SFP）\n' +
                '• ✅ 有PD Array入场点',
            exit: '出场策略：\n' +
                '\n' +
                '止盈目标：\n' +
                '• 第一目标：亚洲区间的对面\n' +
                '• 第二目标：对面的流动性（BSL/SSL）\n' +
                '• 最终目标：更高时间框架流动性\n' +
                '\n' +
                '止损设置：\n' +
                '• 标准止损：Judas Swing极值点外\n' +
                '• 逻辑：如果再次突破，说明不是假突破\n' +
                '\n' +
                '典型目标：\n' +
                '• 做多：Asian High → 上方BSL\n' +
                '• 做空：Asian Low → 下方SSL',
            psychology: 'Judas Swing心理建设：\n' +
                '\n' +
                '认知升级：\n' +
                '• 伦敦开盘的第一波突破通常是陷阱\n' +
                '• 不要追突破，等待反转\n' +
                '• "背叛"完成后才是真正的机会\n' +
                '\n' +
                '心理陷阱识别：\n' +
                '• 看到突破不要兴奋\n' +
                '• 看到暴跌不要恐慌\n' +
                '• 耐心等待犹大完成他的"表演"\n' +
                '\n' +
                '正确心态：\n' +
                '• 伦敦开盘是猎杀时刻\n' +
                '• 第一波不是我的，第二波才是\n' +
                '• 主力的陷阱就是我的入场信号\n' +
                '\n' +
                '记住：\n' +
                '• 犹大会背叛散户\n' +
                '• 但我们可以利用这个背叛\n' +
                '• 等待背叛完成后跟随主力',
            examples: 'Judas Swing实战案例：\n' +
                '\n' +
                '案例一：看涨Judas Swing\n' +
                '• 亚洲时段：价格在100-110区间震荡\n' +
                '• 流动性分布：SSL在100下方，BSL在110上方\n' +
                '• 伦敦开盘（20:00 NZDT）：\n' +
                '  - 价格突然跌破100（犹大之吻）\n' +
                '  - 最低触及97\n' +
                '  - 迅速收回100上方（SFP形成）\n' +
                '• 入场：在FVG做多\n' +
                '• 目标：110（Asian High）→ 115（BSL）\n' +
                '• 结果：价格完美反转上涨\n' +
                '\n' +
                '案例二：看跌Judas Swing\n' +
                '• 亚洲时段：形成区间\n' +
                '• 伦敦开盘：向上突破（犹大之吻）\n' +
                '• SFP形成：收回区间内\n' +
                '• 入场：在Bearish OB做空\n' +
                '• 结果：价格反转下跌\n' +
                '\n' +
                'Judas Swing核心要点：\n' +
                '• 伦敦开盘第一波通常是陷阱\n' +
                '• 等待突破后的SFP确认\n' +
                '• 在PD Array精确入场\n' +
                '• 目标是亚洲区间的对面'
        }
    },
    {
        id: 'mitigation-block',
        title: '缓解区块 (Mitigation Block)',
        filename: 'ICT_PLACEHOLDER.png',
        description: 'ICT进阶概念：机构回补仓位的特殊价格区域',
        category: 'neutral',
        keywords: ['Mitigation Block', '缓解区块', 'MB', 'Position Repair', '仓位回补'],
        explanation: {
            overview: 'Mitigation Block（缓解区块/MB）是ICT体系中的进阶PD Array概念。它描述了机构回来"缓解"或"修复"之前仓位的价格区域。\n' +
                '\n' +
                'Mitigation Block的定义：\n' +
                '• 与Order Block类似但有关键区别\n' +
                '• OB是机构第一次建仓的位置\n' +
                '• MB是机构回来修补仓位的位置\n' +
                '• 发生在价格首次远离OB又返回时\n' +
                '\n' +
                'MB与OB的区别：\n' +
                '• OB：首次建仓，从未被测试\n' +
                '• MB：之前的高/低点被扫荡后的回测区域\n' +
                '• OB更强，MB次之\n' +
                '• 但MB也是有效的入场区域\n' +
                '\n' +
                '为什么MB有效：\n' +
                '• 机构在此区域有未完成的仓位\n' +
                '• 他们需要回来"缓解"这些仓位\n' +
                '• 要么止损，要么加仓\n' +
                '• 这创造了可预测的价格行为',
            setup: 'Mitigation Block识别方法：\n' +
                '\n' +
                '看涨MB识别：\n' +
                '• 价格从某个低点反弹上涨\n' +
                '• 然后回调但未能创新低\n' +
                '• 那个未能被重新测试的反弹起点\n' +
                '• 就是Bullish Mitigation Block\n' +
                '\n' +
                '看跌MB识别：\n' +
                '• 价格从某个高点下跌\n' +
                '• 然后反弹但未能创新高\n' +
                '• 那个未能被重新测试的下跌起点\n' +
                '• 就是Bearish Mitigation Block\n' +
                '\n' +
                'MB有效性判断：\n' +
                '• 必须有明显的Displacement离开\n' +
                '• 离开时必须创造FVG\n' +
                '• 第一次回测效果最好\n' +
                '• 符合HTF Bias更可靠\n' +
                '\n' +
                'MB强度层级：\n' +
                '• Unicorn > Breaker > OB > MB > FVG\n' +
                '• MB不如OB强，但仍可交易',
            entry: 'Mitigation Block交易策略：\n' +
                '\n' +
                '策略一：MB作为第二次入场机会\n' +
                '• 如果错过了OB入场\n' +
                '• 可以在MB回测时入场\n' +
                '• 风险回报比稍逊于OB\n' +
                '\n' +
                '策略二：MB + FVG汇合\n' +
                '• 寻找MB区域内的FVG\n' +
                '• 在FVG的CE位置入场\n' +
                '• 双重确认提高胜率\n' +
                '\n' +
                '看涨MB入场：\n' +
                '• 确认HTF看涨Bias\n' +
                '• 识别Bullish MB区域\n' +
                '• 等待价格回测到MB\n' +
                '• 在MB区域入场做多\n' +
                '• 止损设在MB下方\n' +
                '\n' +
                '看跌MB入场：\n' +
                '• 确认HTF看跌Bias\n' +
                '• 识别Bearish MB区域\n' +
                '• 等待价格反弹到MB\n' +
                '• 在MB区域入场做空\n' +
                '• 止损设在MB上方',
            exit: '出场策略：\n' +
                '\n' +
                '止盈目标：\n' +
                '• 与OB类似\n' +
                '• 第一目标：对面流动性\n' +
                '• 第二目标：HTF关键位\n' +
                '\n' +
                '止损设置：\n' +
                '• 标准止损：MB区域外\n' +
                '• 比OB的止损稍宽一些\n' +
                '\n' +
                'MB失效条件：\n' +
                '• 价格穿透MB并收盘\n' +
                '• 多次回测后效力减弱',
            psychology: 'Mitigation Block心理建设：\n' +
                '\n' +
                '理解MB的价值：\n' +
                '• 不是每次都能在最佳OB入场\n' +
                '• MB提供了第二次机会\n' +
                '• 虽然不如OB，但仍有交易价值\n' +
                '\n' +
                '正确使用MB：\n' +
                '• 优先寻找OB入场\n' +
                '• 错过OB时考虑MB\n' +
                '• MB配合其他信号更佳\n' +
                '\n' +
                '记住：\n' +
                '• MB是机构的"后悔位"\n' +
                '• 他们回来是为了修补仓位\n' +
                '• 我们可以利用这个行为',
            examples: 'Mitigation Block实战案例：\n' +
                '\n' +
                '案例一：Bullish MB入场\n' +
                '• 背景：价格从100上涨到120\n' +
                '• 回调：价格回落到105（未创新低）\n' +
                '• MB识别：100附近是Bullish MB\n' +
                '• 再次回调：价格回到102\n' +
                '• 入场：在MB区域做多\n' +
                '• 目标：120以上\n' +
                '• 结果：价格在MB获得支撑后上涨\n' +
                '\n' +
                '案例二：MB vs OB对比\n' +
                '• OB：机构首次建仓的K线\n' +
                '• MB：OB被扫荡后，新的Swing形成的区域\n' +
                '• 强度：OB > MB\n' +
                '• 用法：OB优先，MB作为备选\n' +
                '\n' +
                'MB核心要点：\n' +
                '• MB是机构回补仓位的区域\n' +
                '• 强度弱于OB但仍可交易\n' +
                '• 适合作为第二次入场机会\n' +
                '• 配合FVG汇合效果更佳'
        }
    },
    {
        id: 'rejection-block',
        title: '拒绝区块 (Rejection Block)',
        filename: 'ICT_PLACEHOLDER.png',
        description: 'ICT进阶概念：强烈拒绝的价格区域与反转信号',
        category: 'neutral',
        keywords: ['Rejection Block', '拒绝区块', 'RB', '反转信号', 'Wick'],
        explanation: {
            overview: 'Rejection Block（拒绝区块/RB）是ICT体系中描述价格被强烈拒绝的区域。它通常表现为长影线（Wick），代表市场对某个价格水平的强烈排斥。\n' +
                '\n' +
                'Rejection Block的定义：\n' +
                '• 价格快速触及某个区域后被弹回\n' +
                '• 形成长影线（长上影或长下影）\n' +
                '• 影线代表"拒绝"该价格水平\n' +
                '• 实体收回表明该区域有强大力量\n' +
                '\n' +
                'RB与OB的区别：\n' +
                '• OB关注的是K线的实体\n' +
                '• RB关注的是K线的影线\n' +
                '• OB是建仓区域\n' +
                '• RB是被拒绝的区域\n' +
                '\n' +
                '两种Rejection Block：\n' +
                '• 看涨RB：长下影线，下方价格被拒绝\n' +
                '• 看跌RB：长上影线，上方价格被拒绝',
            setup: 'Rejection Block识别方法：\n' +
                '\n' +
                '看涨RB识别：\n' +
                '• 一根K线有明显的长下影线\n' +
                '• 影线长度至少是实体的2倍\n' +
                '• 下影线区域就是Bullish RB\n' +
                '• 价格再次回到这个区域可能获得支撑\n' +
                '\n' +
                '看跌RB识别：\n' +
                '• 一根K线有明显的长上影线\n' +
                '• 影线长度至少是实体的2倍\n' +
                '• 上影线区域就是Bearish RB\n' +
                '• 价格再次回到这个区域可能遇阻\n' +
                '\n' +
                'RB有效性判断：\n' +
                '• 影线越长，拒绝越强烈\n' +
                '• 发生在关键位置更有效\n' +
                '• 配合流动性扫荡更可靠\n' +
                '• 符合HTF Bias时效果最佳\n' +
                '\n' +
                'RB强度参考：\n' +
                '• Unicorn > Breaker > OB > MB > RB > FVG\n' +
                '• RB弱于OB但可作为辅助确认',
            entry: 'Rejection Block交易策略：\n' +
                '\n' +
                '策略一：RB作为辅助确认\n' +
                '• 识别OB或Breaker区域\n' +
                '• 如果同时有RB确认\n' +
                '• 入场信心大增\n' +
                '\n' +
                '策略二：RB区域入场\n' +
                '• 看涨时：在下影线区域入场做多\n' +
                '• 看跌时：在上影线区域入场做空\n' +
                '• 配合其他PD Array效果更佳\n' +
                '\n' +
                '看涨RB入场：\n' +
                '• 确认HTF看涨Bias\n' +
                '• 识别带有长下影的K线\n' +
                '• 等待价格回测到下影线区域\n' +
                '• 在RB区域入场做多\n' +
                '\n' +
                '看跌RB入场：\n' +
                '• 确认HTF看跌Bias\n' +
                '• 识别带有长上影的K线\n' +
                '• 等待价格反弹到上影线区域\n' +
                '• 在RB区域入场做空',
            exit: '出场策略：\n' +
                '\n' +
                '止盈目标：\n' +
                '• 与OB类似\n' +
                '• 第一目标：对面流动性\n' +
                '• 第二目标：HTF关键位\n' +
                '\n' +
                '止损设置：\n' +
                '• 标准止损：影线极值点外\n' +
                '• 如果价格突破影线最远点，RB失效',
            psychology: 'Rejection Block心理建设：\n' +
                '\n' +
                '理解RB的含义：\n' +
                '• 长影线 = 市场对该价格的强烈拒绝\n' +
                '• 有人在该位置大量入场导致价格弹回\n' +
                '• 这些人会保护他们的仓位\n' +
                '\n' +
                '正确使用RB：\n' +
                '• RB最好作为辅助确认\n' +
                '• 配合OB、Breaker使用更佳\n' +
                '• 不要仅凭RB独立入场\n' +
                '\n' +
                '记住：\n' +
                '• 影线告诉了你"那里有人"\n' +
                '• 利用这个信息辅助决策',
            examples: 'Rejection Block实战案例：\n' +
                '\n' +
                '案例一：看涨RB确认入场\n' +
                '• 背景：价格回调到OB区域\n' +
                '• 确认：在OB区域收出长下影线K线\n' +
                '• 意义：RB确认OB有效\n' +
                '• 入场：在下影线区域入场做多\n' +
                '• 结果：双重确认后价格上涨\n' +
                '\n' +
                '案例二：RB与流动性扫荡\n' +
                '• 背景：价格扫荡SSL\n' +
                '• 现象：形成长下影线\n' +
                '• 解读：扫损完成，RB形成\n' +
                '• 入场：在RB区域做多\n' +
                '\n' +
                'RB核心要点：\n' +
                '• RB是影线代表的拒绝区域\n' +
                '• 作为辅助确认效果最佳\n' +
                '• 配合OB/Breaker使用\n' +
                '• 影线越长拒绝越强烈'
        }
    },
    {
        id: 'quarterly-shifts',
        title: '季度转换 (Quarterly Shifts)',
        filename: 'ICT_PLACEHOLDER.png',
        description: 'ICT长期时间框架：季度周期中的关键转折与趋势变化',
        category: 'neutral',
        keywords: ['Quarterly Shifts', '季度转换', 'Q1', 'Q2', 'Q3', 'Q4', '季节性'],
        explanation: {
            overview: 'Quarterly Shifts（季度转换）是ICT体系中的长期时间框架分析。它描述了金融市场在一年四个季度中的周期性行为模式。\n' +
                '\n' +
                '四个季度划分：\n' +
                '• Q1（第一季度）：1月 - 3月\n' +
                '• Q2（第二季度）：4月 - 6月\n' +
                '• Q3（第三季度）：7月 - 9月\n' +
                '• Q4（第四季度）：10月 - 12月\n' +
                '\n' +
                '季度转换的核心理念：\n' +
                '• 机构按季度进行业绩考核\n' +
                '• 季度初是建仓期\n' +
                '• 季度中是趋势发展期\n' +
                '• 季度末是了结期\n' +
                '\n' +
                '为什么季度转换重要：\n' +
                '• 机构资金流动遵循季度节奏\n' +
                '• 季度开始常有方向性变化\n' +
                '• 了解这个规律可以把握大趋势',
            setup: '各季度典型特征：\n' +
                '\n' +
                'Q1（1-3月）：\n' +
                '• 通常延续Q4的趋势或反转\n' +
                '• 1月效应：市场重新定价\n' +
                '• 机构开始新一年的布局\n' +
                '• 波动性可能较大\n' +
                '\n' +
                'Q2（4-6月）：\n' +
                '• "Sell in May" 现象\n' +
                '• 股市可能出现高点\n' +
                '• 夏季前的获利了结\n' +
                '• 趋势可能减弱\n' +
                '\n' +
                'Q3（7-9月）：\n' +
                '• 夏季交易量较低\n' +
                '• 波动性可能下降\n' +
                '• 9月常有反转\n' +
                '• "September Effect"\n' +
                '\n' +
                'Q4（10-12月）：\n' +
                '• 年末效应\n' +
                '• 机构调整仓位\n' +
                '• 圣诞行情（Santa Rally）\n' +
                '• 常有上涨趋势\n' +
                '\n' +
                '季度转换时间点：\n' +
                '• 3月底/4月初：Q1→Q2\n' +
                '• 6月底/7月初：Q2→Q3\n' +
                '• 9月底/10月初：Q3→Q4 ⭐（常有大反转）\n' +
                '• 12月底/1月初：Q4→Q1',
            entry: 'Quarterly Shifts交易策略：\n' +
                '\n' +
                '策略一：季度开始观察\n' +
                '• 每个季度第一周观察走势\n' +
                '• 寻找新趋势的建立信号\n' +
                '• 如果有MSS，可能是季度趋势\n' +
                '\n' +
                '策略二：季度中趋势跟随\n' +
                '• 确认季度趋势后\n' +
                '• 在回调时入场\n' +
                '• 利用PD Array精确入场\n' +
                '\n' +
                '策略三：季度末谨慎\n' +
                '• 季度末减少新仓位\n' +
                '• 等待新季度信号\n' +
                '• 可能有趋势反转\n' +
                '\n' +
                '关键时间节点：\n' +
                '• 10月初：年度最重要的转折点\n' +
                '• 1月初：年度趋势建立期\n' +
                '• 注意这些时间的价格行为',
            exit: '基于季度的出场策略：\n' +
                '\n' +
                '时间因素：\n' +
                '• 季度开始入场 → 季度中持仓\n' +
                '• 季度末考虑减仓\n' +
                '• 不要跨季度重仓持仓\n' +
                '\n' +
                '季度趋势改变信号：\n' +
                '• 新季度出现MSS\n' +
                '• 季度开局方向与预期相反\n' +
                '• 及时止损转向',
            psychology: 'Quarterly Shifts心理建设：\n' +
                '\n' +
                '宏观视角：\n' +
                '• 日内交易要有季度背景\n' +
                '• 顺季度趋势交易成功率更高\n' +
                '• 逆季度趋势要特别谨慎\n' +
                '\n' +
                '耐心与纪律：\n' +
                '• 季度趋势不会立即显现\n' +
                '• 需要等待确认信号\n' +
                '• 不要过早判断季度方向\n' +
                '\n' +
                '记住：\n' +
                '• 机构按季度行动\n' +
                '• 了解他们的节奏就能跟随他们\n' +
                '• 10月和1月是最重要的观察期',
            examples: 'Quarterly Shifts实战案例：\n' +
                '\n' +
                '案例一：Q4 Santa Rally\n' +
                '• 时间：10月初\n' +
                '• 观察：价格在Q3末端完成SSL扫荡\n' +
                '• MSS形成：看涨结构转换\n' +
                '• 策略：在OTE区域做多\n' +
                '• 持仓：整个Q4\n' +
                '• 结果：年末行情带来丰厚收益\n' +
                '\n' +
                '案例二：Q2 "Sell in May"\n' +
                '• 时间：5月初\n' +
                '• 观察：Q1涨幅已充分\n' +
                '• 信号：开始出现看跌MSS\n' +
                '• 策略：减少多头仓位，寻找做空机会\n' +
                '• 结果：避开了夏季调整\n' +
                '\n' +
                'Quarterly Shifts核心要点：\n' +
                '• 机构按季度考核和调仓\n' +
                '• 季度转换是重要观察期\n' +
                '• 顺季度趋势交易\n' +
                '• 10月和1月最关键'
        }
    },
    {
        id: 'ict-2022-model',
        title: 'ICT 2022 交易模型',
        filename: 'ICT_PLACEHOLDER.png',
        description: 'ICT最新交易框架：整合流动性、时间与PD Array的完整系统',
        category: 'neutral',
        keywords: ['ICT 2022', '交易模型', 'Mentorship', '整合框架', '系统化交易'],
        explanation: {
            overview: 'ICT 2022 Model是ICT在2022年Mentorship中教授的最新交易框架。它整合了之前所有概念，形成了一个完整的交易系统。\n' +
                '\n' +
                '2022模型的核心框架：\n' +
                '• Time（时间）：在正确的时间交易\n' +
                '• Liquidity（流动性）：理解流动性目标\n' +
                '• PD Array（价格交付阵列）：精确入场\n' +
                '• Premium & Discount（溢折价）：方向判断\n' +
                '\n' +
                '2022模型的流程：\n' +
                '• 第一步：确定HTF Bias\n' +
                '• 第二步：等待Kill Zone\n' +
                '• 第三步：寻找流动性扫荡\n' +
                '• 第四步：在PD Array入场\n' +
                '• 第五步：目标对面流动性\n' +
                '\n' +
                '2022模型的核心理念：\n' +
                '• "Time is more important than price"\n' +
                '• "Liquidity is the key"\n' +
                '• "PD Arrays are the algorithm\'s signature"',
            setup: '2022模型完整设置流程：\n' +
                '\n' +
                '第一步：HTF分析（Daily/Weekly）\n' +
                '• 确定大趋势方向\n' +
                '• 识别HTF流动性目标（BSL/SSL）\n' +
                '• 找到HTF的PD Array\n' +
                '\n' +
                '第二步：LTF确认（4H/1H）\n' +
                '• 确认与HTF方向一致\n' +
                '• 识别LTF流动性\n' +
                '• 找到LTF的PD Array\n' +
                '\n' +
                '第三步：时间筛选\n' +
                '• 只在Kill Zone交易\n' +
                '• 伦敦开盘优先\n' +
                '• Silver Bullet时间窗口\n' +
                '\n' +
                '第四步：入场触发（15M/5M）\n' +
                '• 等待流动性扫荡\n' +
                '• 确认MSS/SFP\n' +
                '• 在PD Array入场\n' +
                '\n' +
                '第五步：风险管理\n' +
                '• 止损在PD Array外\n' +
                '• 目标是对面流动性\n' +
                '• 分批出场锁利',
            entry: 'ICT 2022入场模型：\n' +
                '\n' +
                '完整入场checklist：\n' +
                '• ✅ HTF Bias确认（Daily看涨/看跌）\n' +
                '• ✅ 当前在Kill Zone时段\n' +
                '• ✅ 已识别流动性目标\n' +
                '• ✅ 出现流动性扫荡（SSL/BSL被扫）\n' +
                '• ✅ 形成MSS或SFP确认\n' +
                '• ✅ 存在有效PD Array（OB/FVG/Breaker）\n' +
                '• ✅ 入场位置在Discount（做多）或Premium（做空）\n' +
                '\n' +
                '2022模型入场示例（做多）：\n' +
                '• HTF：Daily看涨Bias\n' +
                '• 时间：伦敦开盘Kill Zone\n' +
                '• 扫荡：价格跌破Asian Low（扫SSL）\n' +
                '• 确认：形成SFP/MSS\n' +
                '• 入场：在15M FVG的CE入场\n' +
                '• 止损：FVG下方\n' +
                '• 目标：Asian High → HTF BSL',
            exit: '2022模型出场策略：\n' +
                '\n' +
                '目标层级：\n' +
                '• LTF目标：最近的流动性\n' +
                '• HTF目标：更远的流动性\n' +
                '• Ultimate目标：HTF的BSL/SSL\n' +
                '\n' +
                '分批出场：\n' +
                '• LTF目标：减仓50%\n' +
                '• 移动止损到入场价\n' +
                '• HTF目标：出清剩余\n' +
                '\n' +
                '时间止损：\n' +
                '• Kill Zone结束前评估\n' +
                '• 如果未达目标考虑减仓\n' +
                '• 不要隔夜过度持仓',
            psychology: 'ICT 2022模型心理建设：\n' +
                '\n' +
                '系统化思维：\n' +
                '• 2022模型是完整系统，不是零散技巧\n' +
                '• 每个步骤都有明确的逻辑\n' +
                '• 按步骤执行，减少情绪干扰\n' +
                '\n' +
                '核心心态：\n' +
                '• 时间纪律：只在正确时间交易\n' +
                '• 流动性思维：跟随主力的目标\n' +
                '• PD Array执行：精确入场点\n' +
                '\n' +
                '记住：\n' +
                '• "Less is more" - 少即是多\n' +
                '• 不是每天都有机会\n' +
                '• 等待完美设置比频繁交易更重要\n' +
                '• 2022模型是ICT的精华总结',
            examples: 'ICT 2022模型实战案例：\n' +
                '\n' +
                '案例：完整2022模型做多\n' +
                '• 第一步（HTF分析）：\n' +
                '  - Daily图：价格在Discount区域\n' +
                '  - 前几天扫了Daily SSL\n' +
                '  - HTF Bias确认看涨\n' +
                '  - 目标：上方的Daily BSL\n' +
                '\n' +
                '• 第二步（LTF确认）：\n' +
                '  - 4H图：形成MSS确认\n' +
                '  - 识别4H OB作为入场区\n' +
                '\n' +
                '• 第三步（时间筛选）：\n' +
                '  - 等待伦敦开盘（20:00 NZDT）\n' +
                '  - 在Kill Zone内寻找机会\n' +
                '\n' +
                '• 第四步（入场触发）：\n' +
                '  - 伦敦开盘跌破Asian Low（Judas Swing）\n' +
                '  - 在15M FVG形成\n' +
                '  - FVG恰好在4H OB内\n' +
                '  - CEY位置入场做多\n' +
                '\n' +
                '• 第五步（风险管理）：\n' +
                '  - 止损：FVG下方\n' +
                '  - 目标1：Asian High（减仓50%）\n' +
                '  - 目标2：4H BSL（出清）\n' +
                '  - 最终：Daily BSL\n' +
                '\n' +
                'ICT 2022模型核心要点：\n' +
                '• HTF Bias + Kill Zone + 流动性扫荡 + PD Array\n' +
                '• 这是ICT交易的完整框架\n' +
                '• 每个步骤缺一不可\n' +
                '• 系统化执行，减少情绪干扰'
        }
    },
    {
        id: 'ifvg',
        title: '反转FVG (Inversion FVG / IFVG)',
        filename: 'ICT_PLACEHOLDER.png',
        description: 'ICT高级概念：失效FVG转化为反向支撑阻力的角色转换',
        category: 'neutral',
        keywords: ['IFVG', 'Inversion FVG', '反转FVG', 'Role Reversal', 'FVG失效'],
        explanation: {
            overview: 'Inversion FVG（反转FVG / IFVG）是ICT体系中描述FVG失效后角色转换的高级概念。当价格穿透FVG后，原来的支撑变成阻力（或反之）。\n' +
                '\n' +
                'IFVG的定义：\n' +
                '• 原本的FVG被价格完全穿透并收盘\n' +
                '• FVG从此"失效"，但并非无用\n' +
                '• 发生角色转换（Role Reversal）\n' +
                '• 看涨FVG变成看跌阻力区\n' +
                '• 看跌FVG变成看涨支撑区\n' +
                '\n' +
                'IFVG的本质：\n' +
                '• 与Breaker概念类似\n' +
                '• 代表市场力量的转变\n' +
                '• 原来在此入场的人现在被套\n' +
                '• 他们的止损变成了反向入场的机会\n' +
                '\n' +
                '两种IFVG类型：\n' +
                '• Bullish → Bearish IFVG：看涨FVG被跌破，变成阻力\n' +
                '• Bearish → Bullish IFVG：看跌FVG被涨破，变成支撑',
            setup: 'IFVG识别方法：\n' +
                '\n' +
                '看跌IFVG形成（原看涨FVG失效）：\n' +
                '• 存在一个看涨FVG\n' +
                '• 价格向下穿透并收盘在FVG下方\n' +
                '• 该FVG现在变成Bearish IFVG\n' +
                '• 价格反弹时会在此遇阻\n' +
                '\n' +
                '看涨IFVG形成（原看跌FVG失效）：\n' +
                '• 存在一个看跌FVG（SIBI）\n' +
                '• 价格向上穿透并收盘在FVG上方\n' +
                '• 该FVG现在变成Bullish IFVG\n' +
                '• 价格回调时会在此获得支撑\n' +
                '\n' +
                'IFVG有效性判断：\n' +
                '• 必须有明确的穿透和收盘\n' +
                '• 穿透后最好有Displacement\n' +
                '• 符合新的HTF Bias更可靠\n' +
                '• 第一次回测效果最好',
            entry: 'IFVG交易策略：\n' +
                '\n' +
                '策略一：IFVG反向入场\n' +
                '• 识别FVG被穿透\n' +
                '• 等待价格回测到原FVG区域\n' +
                '• 在IFVG反向入场\n' +
                '• 止损设在穿透后的极值点\n' +
                '\n' +
                '看跌IFVG入场（做空）：\n' +
                '• 确认HTF看跌Bias\n' +
                '• 看涨FVG被跌破\n' +
                '• 等待价格反弹到原FVG区域\n' +
                '• 在IFVG位置入场做空\n' +
                '\n' +
                '看涨IFVG入场（做多）：\n' +
                '• 确认HTF看涨Bias\n' +
                '• 看跌FVG被涨破\n' +
                '• 等待价格回调到原FVG区域\n' +
                '• 在IFVG位置入场做多\n' +
                '\n' +
                'IFVG入场checklist：\n' +
                '• ✅ FVG已被明确穿透\n' +
                '• ✅ 符合新的HTF Bias方向\n' +
                '• ✅ 价格首次回测原FVG区域\n' +
                '• ✅ 有入场确认信号（K线形态）',
            exit: '出场策略：\n' +
                '\n' +
                '止盈目标：\n' +
                '• 对面的流动性\n' +
                '• 新趋势方向的关键位\n' +
                '\n' +
                '止损设置：\n' +
                '• 标准止损：穿透后极值点外\n' +
                '• 如果再次被穿透，IFVG失效\n' +
                '\n' +
                'IFVG失效条件：\n' +
                '• 价格再次穿透IFVG\n' +
                '• HTF Bias再次反转',
            psychology: 'IFVG心理建设：\n' +
                '\n' +
                '理解角色转换：\n' +
                '• 支撑变阻力是市场永恒的规律\n' +
                '• IFVG是这个规律的具体表现\n' +
                '• 原来的多头现在是卖盘来源\n' +
                '\n' +
                '正确使用IFVG：\n' +
                '• IFVG必须配合新的Bias使用\n' +
                '• 不要在Bias不清时使用IFVG\n' +
                '• IFVG效力弱于新形成的FVG\n' +
                '\n' +
                '记住：\n' +
                '• 失效不等于无用\n' +
                '• 角色转换是交易的本质\n' +
                '• IFVG是第二次机会',
            examples: 'IFVG实战案例：\n' +
                '\n' +
                '案例一：看涨FVG变看跌IFVG\n' +
                '• 背景：存在一个4H看涨FVG\n' +
                '• 发生：价格暴力跌破该FVG并收盘\n' +
                '• IFVG形成：原FVG现在是阻力\n' +
                '• 操作：价格反弹到原FVG区域\n' +
                '• 入场：在IFVG做空\n' +
                '• 结果：价格遇阻后继续下跌\n' +
                '\n' +
                '案例二：IFVG + MSS汇合\n' +
                '• 背景：价格跌破FVG同时形成MSS\n' +
                '• 双重确认：MSS确认趋势转变\n' +
                '• IFVG提供精确入场点\n' +
                '• 结果：高胜率反向入场\n' +
                '\n' +
                'IFVG核心要点：\n' +
                '• IFVG是失效FVG的角色转换\n' +
                '• 支撑变阻力，阻力变支撑\n' +
                '• 配合新Bias使用\n' +
                '• 第一次回测效果最佳'
        }
    },
    {
        id: 'cisd',
        title: '结构变化确认 (CISD)',
        filename: 'ICT_PLACEHOLDER.png',
        description: 'ICT核心确认：Change in State of Delivery，价格交付状态的转变',
        category: 'neutral',
        keywords: ['CISD', 'Change in State of Delivery', '结构变化', '状态转换', 'Confirmation'],
        explanation: {
            overview: 'CISD（Change in State of Delivery）是ICT体系中描述价格交付状态从一种转变为另一种的确认信号。\n' +
                '\n' +
                'CISD的定义：\n' +
                '• 价格从"交付"状态转变的确认\n' +
                '• 通常表现为K线收盘位置的重要变化\n' +
                '• 确认趋势或结构发生根本性转变\n' +
                '• 比单纯的突破更有确认意义\n' +
                '\n' +
                'CISD与MSS的关系：\n' +
                '• MSS是市场结构的转换\n' +
                '• CISD是交付状态的转换\n' +
                '• 两者经常同时发生\n' +
                '• CISD更强调收盘价的确认\n' +
                '\n' +
                'CISD的核心意义：\n' +
                '• 收盘价确认 > 影线刺穿\n' +
                '• CISD是真实的结构变化\n' +
                '• 假突破不会形成CISD',
            setup: 'CISD识别方法：\n' +
                '\n' +
                '看涨CISD识别：\n' +
                '• 价格突破关键高点\n' +
                '• K线收盘价在高点上方\n' +
                '• 不是影线刺穿后收回\n' +
                '• 确认看涨结构转变\n' +
                '\n' +
                '看跌CISD识别：\n' +
                '• 价格跌破关键低点\n' +
                '• K线收盘价在低点下方\n' +
                '• 不是影线刺穿后收回\n' +
                '• 确认看跌结构转变\n' +
                '\n' +
                'CISD有效性判断：\n' +
                '• 收盘价是关键，不是影线\n' +
                '• 突破后收盘确认 = CISD\n' +
                '• 突破后收回 = SFP（非CISD）\n' +
                '• 更高时间框架的CISD更可靠\n' +
                '\n' +
                'CISD vs SFP对比：\n' +
                '• CISD：收盘在突破方向 → 趋势改变\n' +
                '• SFP：收盘回到原区域 → 假突破',
            entry: 'CISD交易策略：\n' +
                '\n' +
                '策略一：CISD确认后趋势跟随\n' +
                '• 等待CISD形成（收盘确认）\n' +
                '• 等待回调到PD Array\n' +
                '• 在OB或FVG入场\n' +
                '• 跟随新趋势方向\n' +
                '\n' +
                '策略二：CISD作为Bias确认\n' +
                '• 用HTF的CISD确认Bias\n' +
                '• 在LTF寻找入场机会\n' +
                '• 只做符合CISD方向的交易\n' +
                '\n' +
                '看涨CISD后做多：\n' +
                '• 确认CISD形成（收盘破高）\n' +
                '• 等待价格回调\n' +
                '• 在Bullish PD Array入场\n' +
                '\n' +
                '看跌CISD后做空：\n' +
                '• 确认CISD形成（收盘破低）\n' +
                '• 等待价格反弹\n' +
                '• 在Bearish PD Array入场',
            exit: '出场策略：\n' +
                '\n' +
                '止盈目标：\n' +
                '• 新趋势方向的流动性\n' +
                '• HTF关键支撑阻力位\n' +
                '\n' +
                '止损设置：\n' +
                '• 在CISD形成的PD Array外\n' +
                '• 如果出现反向CISD，止损出场\n' +
                '\n' +
                'CISD失效条件：\n' +
                '• 出现反向CISD\n' +
                '• 价格收盘回到原区域',
            psychology: 'CISD心理建设：\n' +
                '\n' +
                '收盘价的重要性：\n' +
                '• "Where candle closes matters"\n' +
                '• 收盘价是确认，影线是噪音\n' +
                '• CISD让你区分真假突破\n' +
                '\n' +
                '正确使用CISD：\n' +
                '• 等待收盘确认再做决定\n' +
                '• 不要被影线刺穿吓到\n' +
                '• 收盘是真相，影线是诱惑\n' +
                '\n' +
                '记住：\n' +
                '• 耐心等待收盘\n' +
                '• CISD是真实的结构变化\n' +
                '• 没有CISD就没有确认',
            examples: 'CISD实战案例：\n' +
                '\n' +
                '案例一：CISD确认看涨转变\n' +
                '• 背景：价格在下跌趋势中\n' +
                '• 观察：一根K线突破前高\n' +
                '• 关键：收盘价在前高上方\n' +
                '• CISD确认：看涨结构确立\n' +
                '• 操作：等待回调后做多\n' +
                '\n' +
                '案例二：CISD vs SFP对比\n' +
                '• 场景A（CISD）：收盘在突破方向\n' +
                '  - 结论：趋势改变，跟随新方向\n' +
                '• 场景B（SFP）：收盘回到原区域\n' +
                '  - 结论：假突破，反向入场\n' +
                '\n' +
                'CISD核心要点：\n' +
                '• 收盘价确认是关键\n' +
                '• CISD确认趋势真的改变了\n' +
                '• 区分CISD和SFP是交易核心\n' +
                '• 等待收盘，不要提前判断'
        }
    },
    {
        id: 'mss',
        title: '市场结构转换 (MSS)',
        filename: 'ICT_PLACEHOLDER.png',
        description: 'ICT核心概念：Market Structure Shift，趋势反转的关键确认信号',
        category: 'neutral',
        keywords: ['MSS', 'Market Structure Shift', '市场结构转换', '趋势反转', 'BOS'],
        explanation: {
            overview: 'MSS（Market Structure Shift）是ICT体系中最核心的趋势反转确认信号。它标志着市场从一个趋势状态转变为另一个。\n' +
                '\n' +
                'MSS的定义：\n' +
                '• 市场结构的根本性转变\n' +
                '• 打破了之前的高点/低点序列\n' +
                '• 伴随Displacement（暴力运动）\n' +
                '• 确认趋势方向改变\n' +
                '\n' +
                'MSS vs BOS（Break of Structure）：\n' +
                '• BOS：任何结构突破\n' +
                '• MSS：伴随Displacement的结构突破\n' +
                '• MSS更可靠，因为有暴力确认\n' +
                '• 没有Displacement的BOS可能是假突破\n' +
                '\n' +
                'MSS的核心要素：\n' +
                '• 结构突破：打破前高/前低\n' +
                '• Displacement：暴力K线\n' +
                '• FVG形成：突破时留下缺口\n' +
                '• 三者结合才是完美MSS',
            setup: 'MSS识别方法：\n' +
                '\n' +
                '看涨MSS识别：\n' +
                '• 之前是下跌趋势（Lower Lows）\n' +
                '• 出现暴力上涨K线\n' +
                '• 突破最近的摆动高点\n' +
                '• 收盘在高点上方\n' +
                '• 留下看涨FVG\n' +
                '• 确认看涨MSS形成\n' +
                '\n' +
                '看跌MSS识别：\n' +
                '• 之前是上涨趋势（Higher Highs）\n' +
                '• 出现暴力下跌K线\n' +
                '• 跌破最近的摆动低点\n' +
                '• 收盘在低点下方\n' +
                '• 留下看跌FVG（SIBI）\n' +
                '• 确认看跌MSS形成\n' +
                '\n' +
                'MSS有效性三要素：\n' +
                '• ✅ 结构突破（打破前高/低）\n' +
                '• ✅ Displacement（暴力K线）\n' +
                '• ✅ FVG形成（缺口）\n' +
                '缺一不可！',
            entry: 'MSS交易策略：\n' +
                '\n' +
                '策略一：MSS后回调入场\n' +
                '• 确认MSS形成\n' +
                '• 等待价格回调\n' +
                '• 在MSS形成时留下的FVG入场\n' +
                '• 或在MSS前的最后OB入场\n' +
                '\n' +
                '看涨MSS入场流程：\n' +
                '• 确认看涨MSS（突破前高+Displacement+FVG）\n' +
                '• 等待价格回调\n' +
                '• 在FVG或新形成的Breaker入场\n' +
                '• 止损设在MSS形成点下方\n' +
                '• 目标是上方流动性（BSL）\n' +
                '\n' +
                '看跌MSS入场流程：\n' +
                '• 确认看跌MSS（跌破前低+Displacement+SIBI）\n' +
                '• 等待价格反弹\n' +
                '• 在SIBI或新形成的Breaker入场\n' +
                '• 止损设在MSS形成点上方\n' +
                '• 目标是下方流动性（SSL）\n' +
                '\n' +
                'MSS入场checklist：\n' +
                '• ✅ MSS三要素完整\n' +
                '• ✅ 符合HTF Bias\n' +
                '• ✅ 等待回调入场\n' +
                '• ✅ 有明确的PD Array\n' +
                '• ✅ 目标是对面流动性',
            exit: '出场策略：\n' +
                '\n' +
                '止盈目标：\n' +
                '• 第一目标：MSS形成时的极值点\n' +
                '• 第二目标：对面的流动性（BSL/SSL）\n' +
                '• 最终目标：HTF流动性目标\n' +
                '\n' +
                '止损设置：\n' +
                '• 标准止损：MSS形成前的极值点外\n' +
                '• 做多止损：MSS前的Swing Low下方\n' +
                '• 做空止损：MSS前的Swing High上方\n' +
                '\n' +
                'MSS失效条件：\n' +
                '• 出现反向MSS\n' +
                '• 价格返回突破前结构\n' +
                '• 此时应止损并重新评估',
            psychology: 'MSS心理建设：\n' +
                '\n' +
                'MSS是趋势反转的"盖章"：\n' +
                '• MSS是主力宣告趋势改变\n' +
                '• 没有MSS就没有确认\n' +
                '• MSS后再入场，不要提前猜\n' +
                '\n' +
                '常见错误避免：\n' +
                '• 不要在MSS前抄底摸顶\n' +
                '• 不要把普通BOS当MSS\n' +
                '• 没有Displacement不是MSS\n' +
                '\n' +
                '正确心态：\n' +
                '• 耐心等待MSS确认\n' +
                '• MSS后等待回调入场\n' +
                '• 跟随MSS的方向交易\n' +
                '\n' +
                '记住：\n' +
                '• MSS是趋势反转的证据\n' +
                '• Displacement是关键\n' +
                '• 没有暴力，就没有确认',
            examples: 'MSS实战案例：\n' +
                '\n' +
                '案例一：完整看涨MSS流程\n' +
                '• 背景：4H下跌趋势\n' +
                '• 扫荡：价格扫了SSL（做空陷阱）\n' +
                '• MSS形成：\n' +
                '  - 巨大绿色K线出现\n' +
                '  - 突破最近的Swing High\n' +
                '  - 收盘在高点上方\n' +
                '  - 留下看涨FVG\n' +
                '• 入场：价格回调到FVG\n' +
                '• 止损：MSS前的低点下方\n' +
                '• 目标：上方BSL\n' +
                '• 结果：趋势反转，价格上涨\n' +
                '\n' +
                '案例二：MSS vs 普通BOS对比\n' +
                '• 普通BOS：磨磨唧唧突破，无FVG\n' +
                '  - 可能是假突破\n' +
                '  - 不足以确认趋势改变\n' +
                '• 真正MSS：暴力突破 + FVG\n' +
                '  - 确认趋势改变\n' +
                '  - 提供可靠入场机会\n' +
                '\n' +
                'MSS核心要点：\n' +
                '• MSS = 结构突破 + Displacement + FVG\n' +
                '• 没有Displacement不是真MSS\n' +
                '• MSS后等待回调再入场\n' +
                '• MSS是趋势反转的官方确认'
        }
    },
    {
        id: 'iofed',
        title: '机构订单流入场 (IOFED)',
        filename: 'ICT_PLACEHOLDER.png',
        description: 'ICT进阶策略：Institutional Order Flow Entry Drill，机构级别的精准入场方法',
        category: 'neutral',
        keywords: ['IOFED', 'Institutional Order Flow', '机构订单流', 'Entry Drill', '精准入场'],
        explanation: {
            overview: 'IOFED（Institutional Order Flow Entry Drill）是ICT体系中的高级入场方法。它模拟机构交易员的入场思维流程，确保每一步都符合机构订单流。\n' +
                '\n' +
                'IOFED的核心理念：\n' +
                '• 机构交易不是随机的\n' +
                '• 他们遵循严格的订单流程\n' +
                '• 理解这个流程就能跟随他们\n' +
                '• IOFED是这个流程的系统化表达\n' +
                '\n' +
                'IOFED的目的：\n' +
                '• 确保入场符合机构逻辑\n' +
                '• 减少情绪化交易\n' +
                '• 提高入场精确度\n' +
                '• 系统化检查每个入场条件\n' +
                '\n' +
                'IOFED与其他概念的关系：\n' +
                '• IOFED整合了所有ICT概念\n' +
                '• 它是一个入场前的检查清单\n' +
                '• 确保流动性、时间、PD Array都对齐',
            setup: 'IOFED完整流程：\n' +
                '\n' +
                '第一步：HTF Bias确认\n' +
                '• 确定Daily/Weekly方向\n' +
                '• 识别HTF流动性目标\n' +
                '• 明确是看涨还是看跌Bias\n' +
                '\n' +
                '第二步：时间验证\n' +
                '• 当前是否在Kill Zone内？\n' +
                '• 是否接近Silver Bullet窗口？\n' +
                '• 时间条件必须满足\n' +
                '\n' +
                '第三步：流动性事件\n' +
                '• 是否已扫荡流动性（BSL/SSL）？\n' +
                '• 或正在接近流动性池子？\n' +
                '• 流动性是入场的前提\n' +
                '\n' +
                '第四步：结构确认\n' +
                '• 是否有MSS/CISD确认？\n' +
                '• 结构是否支持入场方向？\n' +
                '\n' +
                '第五步：PD Array定位\n' +
                '• 识别入场的PD Array\n' +
                '• OB、FVG、Breaker等\n' +
                '• 确定精确入场点\n' +
                '\n' +
                '第六步：风险评估\n' +
                '• 止损位置在哪？\n' +
                '• 风险回报比是否合理？\n' +
                '• 仓位大小是否适当？',
            entry: 'IOFED入场检查清单：\n' +
                '\n' +
                '必须全部满足才能入场：\n' +
                '• ✅ HTF Bias明确（Daily方向）\n' +
                '• ✅ 当前在Kill Zone时段\n' +
                '• ✅ 流动性已被扫荡或即将扫荡\n' +
                '• ✅ 有MSS或CISD结构确认\n' +
                '• ✅ 存在有效PD Array（OB/FVG/Breaker）\n' +
                '• ✅ 入场位置在正确区域（Premium/Discount）\n' +
                '• ✅ 风险回报比≥1:2\n' +
                '• ✅ 止损位置明确\n' +
                '• ✅ 目标是对面流动性\n' +
                '\n' +
                '任何一项不满足 = 不入场\n' +
                '\n' +
                'IOFED入场示例：\n' +
                '• HTF：Daily看涨 ✅\n' +
                '• 时间：伦敦Kill Zone ✅\n' +
                '• 流动性：刚扫完SSL ✅\n' +
                '• 结构：4H MSS形成 ✅\n' +
                '• PD Array：15M FVG存在 ✅\n' +
                '• 位置：Discount区域 ✅\n' +
                '• RR：1:3 ✅\n' +
                '• 结论：所有条件满足，执行入场',
            exit: 'IOFED出场策略：\n' +
                '\n' +
                '止盈目标层级：\n' +
                '• 目标1：LTF流动性（减仓50%）\n' +
                '• 目标2：HTF流动性（出清）\n' +
                '\n' +
                '止损管理：\n' +
                '• 初始止损：PD Array外\n' +
                '• 移动止损：达到目标1后移到入场价\n' +
                '\n' +
                '时间止损：\n' +
                '• Kill Zone结束前评估\n' +
                '• 如果价格未动，考虑提前出场',
            psychology: 'IOFED心理建设：\n' +
                '\n' +
                'IOFED的价值：\n' +
                '• 消除"我觉得"式的交易\n' +
                '• 每次入场都有明确依据\n' +
                '• 减少FOMO和冲动入场\n' +
                '\n' +
                '执行纪律：\n' +
                '• 严格执行检查清单\n' +
                '• 任何一项不满足就不入场\n' +
                '• 宁可错过也不瞎做\n' +
                '\n' +
                '记住：\n' +
                '• IOFED是机构的入场纪律\n' +
                '• 遵循纪律就是跟随机构\n' +
                '• 系统化交易战胜情绪化交易',
            examples: 'IOFED实战案例：\n' +
                '\n' +
                '案例一：完整IOFED流程\n' +
                '• 第一步：Daily看涨Bias确认 ✅\n' +
                '• 第二步：当前是伦敦Kill Zone ✅\n' +
                '• 第三步：价格扫了4H SSL ✅\n' +
                '• 第四步：1H MSS形成 ✅\n' +
                '• 第五步：15M FVG作为入场点 ✅\n' +
                '• 第六步：RR 1:3，风险2% ✅\n' +
                '• 结果：执行入场，达到目标\n' +
                '\n' +
                '案例二：IOFED拒绝入场\n' +
                '• HTF Bias：看涨 ✅\n' +
                '• 时间：Asian Session ❌\n' +
                '• 结论：时间不满足，不入场\n' +
                '• 等待：伦敦Kill Zone再评估\n' +
                '\n' +
                'IOFED核心要点：\n' +
                '• IOFED是系统化入场检查\n' +
                '• 所有条件必须全部满足\n' +
                '• 任一不满足就不入场\n' +
                '• 纪律是盈利的基础'
        }
    },
    {
        id: 'breakaway-gap',
        title: '逃逸缺口 (Breakaway Gap / BPR)',
        filename: 'ICT_PLACEHOLDER.png',
        description: 'ICT高级概念：Balanced Price Range，价格平衡区间与逃逸缺口的交易应用',
        category: 'neutral',
        keywords: ['Breakaway Gap', 'BPR', 'Balanced Price Range', '逃逸缺口', '价格平衡'],
        explanation: {
            overview: 'Breakaway Gap / BPR（Balanced Price Range）是ICT体系中描述价格平衡区间的高级概念。它代表了两个相反方向FVG重叠形成的特殊区域。\n' +
                '\n' +
                'BPR的定义：\n' +
                '• Balanced Price Range = 平衡价格区间\n' +
                '• 由两个相反方向的FVG重叠形成\n' +
                '• 看涨FVG + 看跌FVG = BPR\n' +
                '• 代表多空双方激烈博弈的区域\n' +
                '\n' +
                'BPR的形成条件：\n' +
                '• 首先形成一个方向的FVG\n' +
                '• 随后形成反方向的FVG\n' +
                '• 两个FVG有重叠部分\n' +
                '• 重叠区域就是BPR\n' +
                '\n' +
                'BPR的意义：\n' +
                '• 代表价格已经"平衡"的区域\n' +
                '• 多空双方都已在此交易过\n' +
                '• 通常不会再次回到这个区域\n' +
                '• 可以用于确认趋势强度',
            setup: 'BPR识别方法：\n' +
                '\n' +
                'BPR形成步骤：\n' +
                '• 第一步：识别第一个FVG（如看涨FVG）\n' +
                '• 第二步：价格穿透该FVG\n' +
                '• 第三步：形成反向FVG（看跌FVG）\n' +
                '• 第四步：两个FVG重叠部分 = BPR\n' +
                '\n' +
                'BPR有效性判断：\n' +
                '• 两个FVG必须有明显重叠\n' +
                '• 重叠区域越大，BPR越强\n' +
                '• BPR形成后价格通常不再回测\n' +
                '• 如果回测到BPR，可能是假突破\n' +
                '\n' +
                'BPR vs 单个FVG：\n' +
                '• 单个FVG：价格可能回测填补\n' +
                '• BPR：价格通常不会回测\n' +
                '• BPR代表该区域已"结算完毕"\n' +
                '\n' +
                'Breakaway Gap特点：\n' +
                '• 是BPR形成后留下的"逃逸"信号\n' +
                '• 表示价格将持续向一个方向运动\n' +
                '• 趋势强度确认',
            entry: 'BPR交易策略：\n' +
                '\n' +
                '策略一：BPR确认趋势强度\n' +
                '• BPR形成 = 趋势强劲\n' +
                '• 可以更有信心持仓\n' +
                '• 不要期待价格回测BPR\n' +
                '\n' +
                '策略二：BPR作为止损参考\n' +
                '• 如果价格回到BPR内\n' +
                '• 说明趋势可能失效\n' +
                '• 考虑止损出场\n' +
                '\n' +
                '策略三：BPR外的FVG入场\n' +
                '• 在BPR形成后\n' +
                '• 寻找BPR外的新FVG\n' +
                '• 在新FVG入场跟随趋势\n' +
                '\n' +
                '看涨BPR入场：\n' +
                '• BPR形成后确认看涨\n' +
                '• 在BPR上方的Bullish FVG入场\n' +
                '• 止损在BPR下方\n' +
                '\n' +
                '看跌BPR入场：\n' +
                '• BPR形成后确认看跌\n' +
                '• 在BPR下方的Bearish SIBI入场\n' +
                '• 止损在BPR上方',
            exit: '出场策略：\n' +
                '\n' +
                '止盈目标：\n' +
                '• 趋势方向的流动性目标\n' +
                '• BPR确认趋势后，目标可以更远\n' +
                '\n' +
                '止损设置：\n' +
                '• 严格止损：BPR区域外\n' +
                '• 如果价格收盘回到BPR内，止损\n' +
                '\n' +
                'BPR失效信号：\n' +
                '• 价格完全回到BPR内并收盘\n' +
                '• 说明"平衡"被打破\n' +
                '• 趋势可能反转',
            psychology: 'BPR心理建设：\n' +
                '\n' +
                '理解BPR的价值：\n' +
                '• BPR告诉你趋势有多强\n' +
                '• 当BPR形成，趋势更可靠\n' +
                '• 它是趋势强度的"温度计"\n' +
                '\n' +
                '正确使用BPR：\n' +
                '• 不要等BPR回测再入场\n' +
                '• BPR通常不会被回测\n' +
                '• 在BPR外寻找入场机会\n' +
                '\n' +
                '记住：\n' +
                '• BPR = 多空双方已交战完毕\n' +
                '• 价格将继续向一方运动\n' +
                '• BPR是趋势延续的确认',
            examples: 'BPR实战案例：\n' +
                '\n' +
                '案例一：看涨BPR形成\n' +
                '• 背景：价格下跌留下看跌SIBI\n' +
                '• 反转：价格暴力上涨，穿透SIBI\n' +
                '• 形成：上涨过程留下看涨FVG\n' +
                '• BPR：SIBI与FVG重叠区域\n' +
                '• 意义：看涨趋势确认\n' +
                '• 操作：在BPR上方FVG入场做多\n' +
                '• 止损：BPR下方\n' +
                '• 结果：趋势延续，不回测BPR\n' +
                '\n' +
                '案例二：BPR失效案例\n' +
                '• 背景：BPR形成后价格继续上涨\n' +
                '• 转折：价格突然暴跌\n' +
                '• 信号：价格收盘回到BPR内\n' +
                '• 结论：BPR失效，趋势可能反转\n' +
                '• 操作：止损出场，重新评估\n' +
                '\n' +
                'BPR核心要点：\n' +
                '• BPR是两个反向FVG的重叠\n' +
                '• BPR代表价格已平衡\n' +
                '• 形成后通常不会回测\n' +
                '• 用于确认趋势强度'
        }
    },
    {
        id: 'fvg-fill-comparison',
        title: 'FVG填补成功vs失败对比',
        filename: 'ICT_FVG_FILL_SUCCESS.png',
        description: 'ICT关键分析：FVG填补后的两种结果 - 成功反弹 vs 失败穿透',
        category: 'neutral',
        keywords: ['FVG', 'FVG Fill', 'FVG填补', '成功', '失败', 'HTF Expansion', '扩张形态'],
        explanation: {
            overview: 'FVG填补后的行为是ICT交易中最关键的判断之一。同样是价格回到FVG区域，有时会成功反弹，有时会直接穿透失败。理解这两种情况的区别至关重要。\n' +
                '\n' +
                'FVG填补的两种结果：\n' +
                '• 成功填补：价格回测FVG后获得支撑/阻力，继续原趋势\n' +
                '• 失败填补：价格穿透FVG，FVG失效，趋势反转\n' +
                '\n' +
                '为什么会有不同结果：\n' +
                '• 成功：FVG符合HTF趋势，有机构在保护\n' +
                '• 失败：FVG逆HTF趋势，或HTF正在扩张反向运动\n' +
                '\n' +
                '核心区别：\n' +
                '• 关键在于HTF（更高时间框架）的状态\n' +
                '• HTF趋势顺向 = FVG更可能成功\n' +
                '• HTF正在扩张反向 = FVG可能失败',
            setup: 'FVG填补成功的特征：\n' +
                '\n' +
                '成功案例分析（参考右侧图表）：\n' +
                '• HTF趋势：与LTF FVG方向一致\n' +
                '• 价格行为：回测FVG后形成反转K线\n' +
                '• 确认信号：在FVG区域形成看涨/看跌确认\n' +
                '• 后续走势：继续原趋势方向运动\n' +
                '\n' +
                '成功的关键条件：\n' +
                '• ✅ HTF Bias与FVG方向一致\n' +
                '• ✅ HTF没有形成反向扩张\n' +
                '• ✅ 价格在FVG边缘获得明确反应\n' +
                '• ✅ 触及FVG后形成SFP或反转K线\n' +
                '• ✅ 时间在Kill Zone内\n' +
                '\n' +
                '---\n' +
                '\n' +
                'FVG填补失败的特征：\n' +
                '\n' +
                '失败案例分析（参考左侧图表橙色框）：\n' +
                '• HTF趋势：与LTF FVG方向相反\n' +
                '• 关键特征：HTF正在形成扩张形态（Expansion）\n' +
                '• 价格行为：直接穿透FVG并收盘\n' +
                '• 后续走势：FVG失效，价格继续反向运动\n' +
                '\n' +
                '失败的关键原因：\n' +
                '• ❌ HTF正在进行反向扩张（Expansion）\n' +
                '• ❌ HTF Bias与LTF FVG方向矛盾\n' +
                '• ❌ 价格穿透FVG后无反应，直接收盘\n' +
                '• ❌ 没有形成SFP，而是形成CISD（结构变化确认）',
            entry: 'FVG填补交易策略：\n' +
                '\n' +
                '入场前必须检查：\n' +
                '• 第一步：确认HTF Bias方向\n' +
                '• 第二步：检查HTF是否在扩张/收缩\n' +
                '• 第三步：判断LTF FVG是否与HTF一致\n' +
                '\n' +
                '当HTF支持时（做FVG填补交易）：\n' +
                '• HTF趋势 = LTF FVG方向\n' +
                '• HTF没有形成反向扩张\n' +
                '• 在FVG回测时寻找入场\n' +
                '• 在CE或FVG边缘入场\n' +
                '• 止损设在FVG外\n' +
                '\n' +
                '当HTF不支持时（避免交易）：\n' +
                '• HTF正在反向扩张（Expansion）\n' +
                '• LTF FVG方向与HTF矛盾\n' +
                '• 此时应该等待FVG失效\n' +
                '• 然后寻找IFVG反向入场机会\n' +
                '\n' +
                'HTF扩张形态识别：\n' +
                '• HTF出现巨大实体K线\n' +
                '• HTF形成自己的FVG\n' +
                '• HTF正在突破关键结构\n' +
                '• 这种情况下LTF的逆向FVG很容易失效',
            exit: '出场策略：\n' +
                '\n' +
                '成功填补后的出场：\n' +
                '• 目标：趋势方向的流动性\n' +
                '• 分批减仓锁定利润\n' +
                '\n' +
                '识别失败的止损信号：\n' +
                '• 价格穿透FVG并在外侧收盘\n' +
                '• 形成CISD（反向结构确认）\n' +
                '• 此时应立即止损\n' +
                '\n' +
                '止损位置：\n' +
                '• 做多时：FVG下方\n' +
                '• 做空时：FVG上方\n' +
                '• 如果价格收盘穿透，认输出场',
            psychology: 'FVG填补心理建设：\n' +
                '\n' +
                '核心认知：\n' +
                '• 不是所有FVG都会被尊重\n' +
                '• HTF决定LTF的FVG是否有效\n' +
                '• 逆HTF的FVG容易失败\n' +
                '\n' +
                '常见错误：\n' +
                '• 只看LTF的FVG，忽略HTF\n' +
                '• 在HTF扩张时逆势入场\n' +
                '• FVG被穿透后不止损\n' +
                '\n' +
                '正确心态：\n' +
                '• 先看HTF，再看LTF\n' +
                '• HTF在扩张时要格外小心\n' +
                '• FVG失效是正常的，及时止损\n' +
                '\n' +
                '记住：\n' +
                '• HTF是老板，LTF是员工\n' +
                '• 员工不能违背老板的意志\n' +
                '• 当HTF在扩张时，LTF的逆向FVG必死无疑',
            examples: 'FVG填补成功vs失败案例：\n' +
                '\n' +
                '【成功案例图】\n' +
                '[IMG:ICT_FVG_FILL_SUCCESS.png]\n' +
                '\n' +
                '案例一：成功填补（上图）\n' +
                '• 背景：上涨趋势中形成看涨FVG\n' +
                '• HTF状态：HTF同样看涨，未扩张反向\n' +
                '• 回测：价格回调至FVG区域（橙色框）\n' +
                '• 反应：在FVG获得支撑，形成看涨K线\n' +
                '• 结果：继续上涨，FVG填补成功\n' +
                '• 交易：在FVG入场做多，目标上方流动性\n' +
                '\n' +
                '---\n' +
                '\n' +
                '【失败案例图】\n' +
                '[IMG:ICT_FVG_FILL_FAIL.png]\n' +
                '\n' +
                '案例二：失败填补（上图橙色框）\n' +
                '• 背景：存在一个LTF的看涨FVG\n' +
                '• HTF状态：HTF正在进行看跌扩张（关键！）\n' +
                '• 回测：价格来到FVG区域\n' +
                '• 反应：价格直接穿透FVG\n' +
                '• 形成：在FVG下方形成Expansion K线\n' +
                '• 结果：FVG失效，价格继续下跌\n' +
                '• 教训：HTF扩张反向时不要做LTF的逆向FVG\n' +
                '\n' +
                '关键对比总结：\n' +
                '• 成功：HTF支持 + 价格在FVG反应\n' +
                '• 失败：HTF反向扩张 + 价格穿透FVG\n' +
                '• 判断核心：检查HTF是否在扩张\n' +
                '• 当HTF在扩张时，LTF的逆向FVG是陷阱'
        }
    }
];

