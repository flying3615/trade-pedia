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
    }
];
