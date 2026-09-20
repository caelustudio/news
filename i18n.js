/* Caelus Studio 新闻中心 多语言切换：简体中文 / 繁體中文 / English */
(function () {
  var DICT = {
    '2026 年 9 月 13 日': ['2026 年 9 月 13 日', '2026 年 9 月 13 日', 'Sep 13, 2026'],
    '2026 年 9 月 13 日 · 中国': ['2026 年 9 月 13 日 · 中国', '2026 年 9 月 13 日 · 中國', 'Sep 13, 2026 · China'],
    '2026 年 9 月 20 日': ['2026 年 9 月 20 日', '2026 年 9 月 20 日', 'Sep 20, 2026'],
    '2026 年 9 月 20 日 · 中国': ['2026 年 9 月 20 日 · 中国', '2026 年 9 月 20 日 · 中國', 'Sep 20, 2026 · China'],
    '2026 年 9 月': ['2026 年 9 月', '2026 年 9 月', 'September 2026'],
    'Caelus Studio 第二款周边「吧唧」正式官宣 - Caelus Studio 新闻中心': ['Caelus Studio 第二款周边「吧唧」正式官宣 - Caelus Studio 新闻中心', 'Caelus Studio 第二款官方周邊「吧唧」正式官宣 - Caelus Studio 新聞中心', 'Caelus Studio Announces Its Second Official Merch: The Badge - Caelus Studio News'],
    'Caelus Studio 第二款周边「吧唧」正式官宣': ['Caelus Studio 第二款周边「吧唧」正式官宣', 'Caelus Studio 第二款官方周邊「吧唧」正式官宣', 'Caelus Studio Announces Its Second Official Merch: The Badge'],
    '继首款周边「钥匙扣」之后，Caelus Studio 第二款官方周边——吧唧（徽章），预计 2026 年 12 月 30 日左右正式推出。': ['继首款周边「钥匙扣」之后，Caelus Studio 第二款官方周边——吧唧（徽章），预计 2026 年 12 月 30 日左右正式推出。', '繼首款周邊「鑰匙扣」之後，Caelus Studio 第二款官方周邊——吧唧（徽章），預計 2026 年 12 月 30 日左右正式推出。', 'Following our first merch, the keychain, Caelus Studio’s second official merch — the badge (can badge) — is set to launch around December 30, 2026.'],
    '各位关注 Caelus Studio 的朋友：自本工作室推出首款周边产品——钥匙扣以来，我们收到了大量来自各方的热情反馈。许多朋友通过留言、私信表达了对产品的喜爱，也提出了对更多周边品类的期待。这些声音我们都认真倾听，并一直记在心里。': ['各位关注 Caelus Studio 的朋友：自本工作室推出首款周边产品——钥匙扣以来，我们收到了大量来自各方的热情反馈。许多朋友通过留言、私信表达了对产品的喜爱，也提出了对更多周边品类的期待。这些声音我们都认真倾听，并一直记在心里。', '各位關注 Caelus Studio 的朋友：自本工作室推出首款周邊產品——鑰匙扣以來，我們收到了大量來自各方的熱情反饋。許多朋友透過留言、私訊表達了對產品的喜愛，也提出了對更多周邊品類的期待。這些聲音我們都認真傾聽，並一直記在心裡。', 'Dear friends of Caelus Studio: since we released our first merch, the keychain, we have received a tremendous amount of warm feedback. Many of you told us how much you love the product through comments and private messages, and hoped for more merch categories. We have listened carefully and kept every word in mind.'],
    '新品官宣': ['新品官宣', '新品官宣', 'The Announcement'],
    '正是基于大家的支持与鼓励，我们决定在 2026 年 12 月 30 日左右正式推出 Caelus Studio 的第二款周边产品——吧唧（徽章）。': ['正是基于大家的支持与鼓励，我们决定在 2026 年 12 月 30 日左右正式推出 Caelus Studio 的第二款周边产品——吧唧（徽章）。', '正是基於大家的支持與鼓勵，我們決定在 2026 年 12 月 30 日左右正式推出 Caelus Studio 的第二款周邊產品——吧唧（徽章）。', 'With your support and encouragement, we have decided to officially launch our second merch — the badge (can badge) — around December 30, 2026.'],
    '本次新品从设计构思到工艺选型，团队投入了大量时间进行打磨，力求在延续钥匙扣既有品质感的同时，在视觉呈现与佩戴体验上带来新的突破。': ['本次新品从设计构思到工艺选型，团队投入了大量时间进行打磨，力求在延续钥匙扣既有品质感的同时，在视觉呈现与佩戴体验上带来新的突破。', '本次新品從設計構思到工藝選型，團隊投入了大量時間進行打磨，力求在延續鑰匙扣既有質感的同時，在視覺呈現與佩戴體驗上帶來新的突破。', 'From concept to craftsmanship, the team has spent a great deal of time polishing this product, aiming to carry on the quality of the keychain while breaking new ground in visuals and wearing experience.'],
    '关于吧唧': ['关于吧唧', '關於吧唧', 'About the Badge'],
    '推出时间：2026 年 12 月 30 日左右': ['推出时间：2026 年 12 月 30 日左右', '推出時間：2026 年 12 月 30 日左右', 'Launch: around December 30, 2026'],
    '具体款式、尺寸规格、材质工艺、定价及购买方式等详细信息，我们将在后续逐步揭晓，请持续关注我们的官方动态。': ['具体款式、尺寸规格、材质工艺、定价及购买方式等详细信息，我们将在后续逐步揭晓，请持续关注我们的官方动态。', '具體款式、尺寸規格、材質工藝、定價及購買方式等詳細資訊，我們將在後續逐步揭曉，請持續關注我們的官方動態。', 'Designs, sizes, materials, pricing and how to buy — we will reveal the details step by step. Stay tuned to our official channels.'],
    '写在最后': ['写在最后', '寫在最後', 'Final Words'],
    'Caelus Studio 始终相信，好的周边产品不只是简单的衍生品，更是与每一位支持者之间情感的载体。吧唧的推出是我们回应大家期待的新一步，未来我们也将继续探索更多周边品类，努力带来更丰富的选择。': ['Caelus Studio 始终相信，好的周边产品不只是简单的衍生品，更是与每一位支持者之间情感的载体。吧唧的推出是我们回应大家期待的新一步，未来我们也将继续探索更多周边品类，努力带来更丰富的选择。', 'Caelus Studio 始終相信，好的周邊產品不只是簡單的衍生品，更是與每一位支持者之間情感的載體。吧唧的推出是我們回應大家期待的新一步，未來我們也將繼續探索更多周邊品類，努力帶來更豐富的選擇。', 'Caelus Studio has always believed that good merch is more than a derivative product — it carries the bond between us and every supporter. The badge is our next step in answering your expectations, and we will keep exploring more categories to bring you richer choices.'],
    '敬请期待 12 月 30 日。感谢每一位朋友的支持。': ['敬请期待 12 月 30 日。感谢每一位朋友的支持。', '敬請期待 12 月 30 日。感謝每一位朋友的支持。', 'See you on December 30. Thank you for all your support.'],
    '— Caelus Studio': ['— Caelus Studio', '— Caelus Studio', '— Caelus Studio'],
    '首款钥匙扣广受好评之后，第二款周边「吧唧（徽章）」官宣：预计 2026 年 12 月 30 日左右推出，详情后续揭晓。': ['首款钥匙扣广受好评之后，第二款周边「吧唧（徽章）」官宣：预计 2026 年 12 月 30 日左右推出，详情后续揭晓。', '首款鑰匙扣廣受好評之後，第二款周邊「吧唧（徽章）」官宣：預計 2026 年 12 月 30 日左右推出，詳情後續揭曉。', 'After the well-received keychain, our second merch — the badge — is officially announced: launching around December 30, 2026, with details to follow.'],
    '搜索新闻、更新日志…': ['搜索新闻、更新日志…', '搜尋新聞、更新日誌…', 'Search news, changelogs…'],
    'Caelus Studio 发布 DeepSeek 代码生成器 - Caelus Studio 新闻中心': ['Caelus Studio 发布 DeepSeek 代码生成器 - Caelus Studio 新闻中心', 'Caelus Studio 發布 DeepSeek 程式碼產生器 - Caelus Studio 新聞中心', 'Caelus Studio Releases DeepSeek Code Generator - Caelus Studio News'],
    'Caelus Studio 合作伙伴计划正式启动 - Caelus Studio 新闻中心': ['Caelus Studio 合作伙伴计划正式启动 - Caelus Studio 新闻中心', 'Caelus Studio 合作夥伴計劃正式啟動 - Caelus Studio 新聞中心', 'Caelus Studio Partner Program Officially Launches - Caelus Studio News'],
    'Caelus Studio 首款官方周边「钥匙扣」开启免费领取 - Caelus Studio 新闻中心': ['Caelus Studio 首款官方周边「钥匙扣」开启免费领取 - Caelus Studio 新闻中心', 'Caelus Studio 首款官方周邊「鑰匙扣」開啟免費領取 - Caelus Studio 新聞中心', 'Caelus Studio Launches Its First Official Merch: Free Keychain Giveaway - Caelus Studio News'],
    '关于 CaelusOS 下载平台更换的通知 - Caelus Studio 新闻中心': ['关于 CaelusOS 下载平台更换的通知 - Caelus Studio 新闻中心', '關於 CaelusOS 下載平台更換的通知 - Caelus Studio 新聞中心', 'Notice on the CaelusOS Download Platform Migration - Caelus Studio News'],
    '新闻中心 - Caelus Studio': ['新闻中心 - Caelus Studio', '新聞中心 - Caelus Studio', 'News - Caelus Studio'],
    'API Key 控件名': ['API Key 控件名', 'API Key 控制項名稱', 'API key box name'],
    'Caelus Studio 今天发布首款官方周边——': ['Caelus Studio 今天发布首款官方周边——', 'Caelus Studio 今天發布首款官方周邊——', 'Caelus Studio today launched its first official merch — '],
    'Caelus Studio 今日宣布，面向 PowerPoint OS / PPTOS 创作者发布在线工具': ['Caelus Studio 今日宣布，面向 PowerPoint OS / PPTOS 创作者发布在线工具', 'Caelus Studio 今日宣布，面向 PowerPoint OS / PPTOS 創作者發布線上工具', 'Caelus Studio today announced an online tool for PowerPoint OS / PPTOS creators, '],
    'Caelus Studio 发布 DeepSeek 代码生成器': ['Caelus Studio 发布 DeepSeek 代码生成器', 'Caelus Studio 發布 DeepSeek 程式碼產生器', 'Caelus Studio Releases DeepSeek Code Generator'],
    'Caelus Studio 合作伙伴计划正式启动': ['Caelus Studio 合作伙伴计划正式启动', 'Caelus Studio 合作夥伴計劃正式啟動', 'Caelus Studio Partner Program Officially Launches'],
    'Caelus Studio 合作计划正式启动，诚邀各大工作室携手合作。': ['Caelus Studio 合作计划正式启动，诚邀各大工作室携手合作。', 'Caelus Studio 合作計劃正式啟動，誠邀各大工作室攜手合作。', 'The Caelus Studio partner program has officially launched — we invite studios to work with us.'],
    'Caelus Studio 在公告中明确该工具的边界：': ['Caelus Studio 在公告中明确该工具的边界：', 'Caelus Studio 在公告中明確該工具的邊界：', 'In the announcement, Caelus Studio drew clear boundaries for the tool:'],
    'Caelus Studio 表示，后续将根据反馈补充模型切换、流式输出开关、回答写入新文本框、错误写回状态控件等选项，但不会改变核心原则——': ['Caelus Studio 表示，后续将根据反馈补充模型切换、流式输出开关、回答写入新文本框、错误写回状态控件等选项，但不会改变核心原则——', 'Caelus Studio 表示，後續將根據回饋補充模型切換、串流輸出開關、回答寫入新文字方塊、錯誤寫回狀態控制項等選項，但不會改變核心原則——', 'Caelus Studio says it will add options such as model switching, streaming output toggles, writing answers to new text boxes and error write-back controls based on feedback — without changing the core principles: '],
    'Caelus Studio 长期在“以演示文稿形式表现的可交互概念系统设计”这一品类中推进产品：CaelusOS 是原 Caelus Desktop 的延续，TreeOS 为独立分支，StarOS 已完成概念验证并归档。此类作品并不必然要求 VBA，纯超链接跳转亦可构成可交互系统；但当产品需要本机调用大模型、动态改写控件文本、做对话式幻灯片时，VBA 仍是 PowerPoint 环境下最轻量的原生方案。': ['Caelus Studio 长期在“以演示文稿形式表现的可交互概念系统设计”这一品类中推进产品：CaelusOS 是原 Caelus Desktop 的延续，TreeOS 为独立分支，StarOS 已完成概念验证并归档。此类作品并不必然要求 VBA，纯超链接跳转亦可构成可交互系统；但当产品需要本机调用大模型、动态改写控件文本、做对话式幻灯片时，VBA 仍是 PowerPoint 环境下最轻量的原生方案。', 'Caelus Studio 長期在「以簡報形式呈現的可互動概念系統設計」這一品類中推進產品：CaelusOS 是原 Caelus Desktop 的延續，TreeOS 為獨立分支，StarOS 已完成概念驗證並歸檔。此類作品並不必然要求 VBA，純超連結跳轉亦可構成可互動系統；但當產品需要本機呼叫大模型、動態改寫控制項文字、做對話式投影片時，VBA 仍是 PowerPoint 環境下最輕量的原生方案。', 'Caelus Studio has long been building products in the category of interactive concept systems presented as slide decks: CaelusOS continues the original Caelus Desktop, TreeOS is an independent branch, and StarOS completed its proof of concept and has been archived. Such works do not necessarily require VBA — hyperlink-only navigation can also form an interactive system. But when a product needs to call a local LLM, rewrite control text dynamically or run conversational slides, VBA remains the lightest native option in PowerPoint.'],
    'Caelus Studio 首款官方周边「钥匙扣」开启免费领取': ['Caelus Studio 首款官方周边「钥匙扣」开启免费领取', 'Caelus Studio 首款官方周邊「鑰匙扣」開啟免費領取', 'Caelus Studio Launches Its First Official Merch: Free Keychain Giveaway'],
    'CaelusOS、TreeOS 均属于 PowerPoint OS / PPTOS 品类。该品类以 Microsoft PowerPoint 为宿主，以超链接、VBA、ActiveX 等能力组合出“看起来像系统、用起来可交互”的演示工程。VBA · DeepSeek 代码生成器本身不是操作系统项目，而是服务于该品类的周边工具：降低“让幻灯片本机对话 AI”的入门成本。': ['CaelusOS、TreeOS 均属于 PowerPoint OS / PPTOS 品类。该品类以 Microsoft PowerPoint 为宿主，以超链接、VBA、ActiveX 等能力组合出“看起来像系统、用起来可交互”的演示工程。VBA · DeepSeek 代码生成器本身不是操作系统项目，而是服务于该品类的周边工具：降低“让幻灯片本机对话 AI”的入门成本。', 'CaelusOS、TreeOS 均屬於 PowerPoint OS / PPTOS 品類。該品類以 Microsoft PowerPoint 為宿主，以超連結、VBA、ActiveX 等能力組合出「看起來像系統、用起來可互動」的簡報工程。VBA · DeepSeek 程式碼產生器本身不是作業系統專案，而是服務於該品類的周邊工具：降低「讓投影片本機對話 AI」的入門成本。', 'CaelusOS and TreeOS both belong to the PowerPoint OS / PPTOS category: presentation projects hosted in Microsoft PowerPoint that combine hyperlinks, VBA and ActiveX to look and behave like an operating system. The VBA · DeepSeek Code Generator is not an OS project itself, but a companion tool for this category — lowering the barrier to letting slides talk to AI locally.'],
    'GitSource · 即溯': ['GitSource · 即溯', 'GitSource · 即溯', 'GitSource · Jisu'],
    'PPT 是宿主，VBA 是胶水，DeepSeek 是大脑，密钥必须留在用户自己手里。': ['PPT 是宿主，VBA 是胶水，DeepSeek 是大脑，密钥必须留在用户自己手里。', 'PPT 是宿主，VBA 是膠水，DeepSeek 是大腦，金鑰必須留在使用者自己手裡。', 'PPT is the host, VBA the glue, DeepSeek the brain — and the API key always stays in the hands of the user.'],
    'StarOS 已归档，不参与本次工具维护；TreeOS 由另一负责人维护，授权与衍生规则沿用原有体系；CaelusOS 作为主力产品线，将在后续版本中探索把生成器输出作为“对话组件”接入桌面演示系统的可能性。': ['StarOS 已归档，不参与本次工具维护；TreeOS 由另一负责人维护，授权与衍生规则沿用原有体系；CaelusOS 作为主力产品线，将在后续版本中探索把生成器输出作为“对话组件”接入桌面演示系统的可能性。', 'StarOS 已歸檔，不參與本次工具維護；TreeOS 由另一負責人維護，授權與衍生規則沿用原有體系；CaelusOS 作為主力產品線，將在後續版本中探索把產生器輸出作為「對話元件」接入桌面簡報系統的可能性。', 'StarOS is archived and not part of this tool’s maintenance; TreeOS is maintained by another lead, with licensing and derivative rules unchanged; CaelusOS, as the flagship line, will explore integrating the generator’s output as a “conversation component” into the desktop presentation system in future versions.'],
    'VBA · DeepSeek 代码生成器': ['VBA · DeepSeek 代码生成器', 'VBA · DeepSeek 程式碼產生器', 'VBA · DeepSeek Code Generator'],
    'VBA · DeepSeek 代码生成器不是大模型客户端，也不是 PowerPoint 插件，而是一款“生成 VBA 代码的轻量配置器”。用户填写四项内容：': ['VBA · DeepSeek 代码生成器不是大模型客户端，也不是 PowerPoint 插件，而是一款“生成 VBA 代码的轻量配置器”。用户填写四项内容：', 'VBA · DeepSeek 程式碼產生器不是大模型用戶端，也不是 PowerPoint 外掛，而是一款「產生 VBA 程式碼的輕量配置器」。使用者填寫四項內容：', 'The VBA · DeepSeek Code Generator is not an LLM client or a PowerPoint plugin, but a lightweight configurator that generates VBA code. Users fill in four items:'],
    'macOS 版 PowerPoint 不支持 VBA，相关代码无法在 macOS 上运行；': ['macOS 版 PowerPoint 不支持 VBA，相关代码无法在 macOS 上运行；', 'macOS 版 PowerPoint 不支援 VBA，相關程式碼無法在 macOS 上執行；', 'PowerPoint for macOS does not support VBA — the generated code cannot run on macOS;'],
    '← 返回新闻中心': ['← 返回新闻中心', '← 返回新聞中心', '← Back to news'],
    '① 加入 Caelus Studio QQ 群': ['① 加入 Caelus Studio QQ 群', '① 加入 Caelus Studio QQ 群', '1. Join the Caelus Studio QQ group'],
    '② 打开': ['② 打开', '② 打開', '2. Open '],
    '③ 我们将在 15 个工作日内联系你并发货': ['③ 我们将在 15 个工作日内联系你并发货', '③ 我們將在 15 個工作天內聯絡你並發貨', '3. We will contact you and ship within 15 business days'],
    '。该工具用于解决 PowerPoint VBA 接入 DeepSeek 时最常见的重复劳动问题：控件名对不上、API Key 被写死进源码、JSON 转义出错、ActiveX 文本框读写路径拼错。': ['。该工具用于解决 PowerPoint VBA 接入 DeepSeek 时最常见的重复劳动问题：控件名对不上、API Key 被写死进源码、JSON 转义出错、ActiveX 文本框读写路径拼错。', '。該工具用於解決 PowerPoint VBA 接入 DeepSeek 時最常見的重複勞動問題：控制項名稱對不上、API Key 被寫死進原始碼、JSON 轉義出錯、ActiveX 文字方塊讀寫路徑拼錯。', '. The tool solves the most common repetitive chores of wiring DeepSeek into PowerPoint VBA: mismatched control names, API keys hard-coded into source files, JSON escaping errors and mistyped ActiveX read/write paths.'],
    '。钥匙扣采用高透亚克力材质，Caelus Studio Logo 以黑色细切割线勾勒，浅蓝渐变衬底，适合挂在钥匙串、书包或工作包上。': ['。钥匙扣采用高透亚克力材质，Caelus Studio Logo 以黑色细切割线勾勒，浅蓝渐变衬底，适合挂在钥匙串、书包或工作包上。', '。鑰匙扣採用高透壓克力材質，Caelus Studio Logo 以黑色細切割線勾勒，淺藍漸層襯底，適合掛在鑰匙圈、書包或工作包上。', '. The keychain is made of highly transparent acrylic, with the Caelus Studio logo traced in fine black cut lines over a light-blue gradient — perfect for your keyring, backpack or work bag.'],
    '一、授权服务商': ['一、授权服务商', '一、授權服務商', '1. Authorized Service Providers'],
    '一、问题背景': ['一、问题背景', '一、問題背景', '1. Background'],
    '三、与 Caelus Studio 产品体系的关系': ['三、与 Caelus Studio 产品体系的关系', '三、與 Caelus Studio 產品體系的關係', '3. Relation to the Caelus Studio Product Family'],
    '三、其他合作方向': ['三、其他合作方向', '三、其他合作方向', '3. Other Directions'],
    '专业、透明、共赢。': ['专业、透明、共赢。', '專業、透明、共贏。', 'Professional, transparent, win-win.'],
    '为什么是 GitHub 与 GitSource': ['为什么是 GitHub 与 GitSource', '為什麼是 GitHub 與 GitSource', 'Why GitHub and GitSource'],
    '为彻底解决下载限速、收费与链接失效等问题，CaelusOS 资源分发即日起全面迁移至 GitHub 与 GitSource · 即溯。': ['为彻底解决下载限速、收费与链接失效等问题，CaelusOS 资源分发即日起全面迁移至 GitHub 与 GitSource · 即溯。', '為徹底解決下載限速、收費與連結失效等問題，CaelusOS 資源分發即日起全面遷移至 GitHub 與 GitSource · 即溯。', 'To completely solve throttled downloads, paywalls and dead links, CaelusOS distribution is moving entirely to GitHub and GitSource · Jisu, effective immediately.'],
    '主站首页': ['主站首页', '主站首頁', 'Main Site'],
    '二、合作制作项目': ['二、合作制作项目', '二、合作製作專案', '2. Co-produced Projects'],
    '二、工具定位': ['二、工具定位', '二、工具定位', '2. What the Tool Is'],
    '五、获取与反馈': ['五、获取与反馈', '五、取得與回饋', '5. Get It & Feedback'],
    '产品发布': ['产品发布', '產品發布', 'Product Launch'],
    '产品发布、活动信息与工作室的每一步，都在这里。': ['产品发布、活动信息与工作室的每一步，都在这里。', '產品發布、活動資訊與工作室的每一步，都在這裡。', 'Product launches, events and every step of the studio — all here.'],
    '产品矩阵：CaelusOS / TreeOS / StarOS（归档）': ['产品矩阵：CaelusOS / TreeOS / StarOS（归档）', '產品矩陣：CaelusOS / TreeOS / StarOS（歸檔）', 'Product family: CaelusOS / TreeOS / StarOS (archived)'],
    '仅生成 VBA 代码，不托管用户 API Key，不代理 DeepSeek 请求；': ['仅生成 VBA 代码，不托管用户 API Key，不代理 DeepSeek 请求；', '僅產生 VBA 程式碼，不託管使用者 API Key，不代理 DeepSeek 請求；', 'It only generates VBA code — it never hosts your API key or proxies DeepSeek requests;'],
    '仅面向 ActiveX 控件场景；纯超链接 PPTOS 项目如无需本机大模型调用，可不使用该工具；': ['仅面向 ActiveX 控件场景；纯超链接 PPTOS 项目如无需本机大模型调用，可不使用该工具；', '僅面向 ActiveX 控制項場景；純超連結 PPTOS 專案如無需本機大模型呼叫，可不使用該工具；', 'It targets ActiveX scenarios only; hyperlink-only PPTOS projects that do not call a local LLM need not use it;'],
    '以清晰的流程为基础，以及时的沟通为保障，以合理的分配机制让每一方投入都获得应有回报。': ['以清晰的流程为基础，以及时的沟通为保障，以合理的分配机制让每一方投入都获得应有回报。', '以清晰的流程為基礎，以及時的溝通為保障，以合理的分配機制讓每一方投入都獲得應有回報。', 'Clear processes as the foundation, timely communication as the safeguard, and fair revenue sharing so that every party’s investment pays off.'],
    '作为工作室的第一款周边，我们希望以最直接的方式把它送到大家手里：': ['作为工作室的第一款周边，我们希望以最直接的方式把它送到大家手里：', '作為工作室的第一款周邊，我們希望以最直接的方式把它送到大家手裡：', 'As our first piece of merch, we want to put it in your hands in the most direct way:'],
    '免费期截止 2026 年 9 月 13 日 18:00': ['免费期截止 2026 年 9 月 13 日 18:00', '免費期截止 2026 年 9 月 13 日 18:00', 'Free period ends Sep 13, 2026 at 6:00 PM'],
    '全新下载地址': ['全新下载地址', '全新下載地址', 'New download locations'],
    '关于 CaelusOS 下载平台更换的通知': ['关于 CaelusOS 下载平台更换的通知', '關於 CaelusOS 下載平台更換的通知', 'Notice on the CaelusOS Download Platform Migration'],
    '发布当日起为 QQ 成员免费期': ['发布当日起为 QQ 成员免费期', '發布當日起為 QQ 成員免費期', 'Free for QQ group members starting launch day'],
    '合作方向': ['合作方向', '合作方向', 'Directions'],
    '合作理念': ['合作理念', '合作理念', 'Philosophy'],
    '告别网盘限速与收费：CaelusOS 资源分发全面迁移至 GitHub 与 GitSource · 即溯，免费、无广告、不限速。': ['告别网盘限速与收费：CaelusOS 资源分发全面迁移至 GitHub 与 GitSource · 即溯，免费、无广告、不限速。', '告別網盤限速與收費：CaelusOS 資源分發全面遷移至 GitHub 與 GitSource · 即溯，免費、無廣告、不限速。', 'Goodbye to throttled, paywalled cloud drives: CaelusOS distribution has fully moved to GitHub and GitSource · Jisu — free, ad-free, unthrottled.'],
    '四、能力边界': ['四、能力边界', '四、能力邊界', '4. Limits'],
    '回答控件名': ['回答控件名', '回答控制項名稱', 'Answer box name'],
    '在社区已有实践中，将 DeepSeek 接入 PowerPoint 通常依赖一段手写 VBA：通过 MSXML2.XMLHTTP 向 DeepSeek Chat Completions 接口发起请求，再从形状或文本框中读取输入、将回答写回界面。 该路径技术可行，但存在三类高频问题：': ['在社区已有实践中，将 DeepSeek 接入 PowerPoint 通常依赖一段手写 VBA：通过 MSXML2.XMLHTTP 向 DeepSeek Chat Completions 接口发起请求，再从形状或文本框中读取输入、将回答写回界面。 该路径技术可行，但存在三类高频问题：', '在社區已有實踐中，將 DeepSeek 接入 PowerPoint 通常依賴一段手寫 VBA：透過 MSXML2.XMLHTTP 向 DeepSeek Chat Completions 介面發起請求，再從形狀或文字方塊中讀取輸入、將回答寫回介面。 該路徑技術可行，但存在三類高頻問題：', 'In existing community practice, wiring DeepSeek into PowerPoint usually relies on hand-written VBA: sending requests to the DeepSeek Chat Completions API via MSXML2.XMLHTTP, reading input from shapes or text boxes and writing the answer back to the UI. The approach works, but three problems come up again and again:'],
    '在线工具 VBA · DeepSeek 代码生成器上线：密钥不进源码，控件名与页码由配置决定，一键生成可导入 VBE 的模块代码。': ['在线工具 VBA · DeepSeek 代码生成器上线：密钥不进源码，控件名与页码由配置决定，一键生成可导入 VBE 的模块代码。', '線上工具 VBA · DeepSeek 程式碼產生器上線：金鑰不進原始碼，控制項名稱與頁碼由配置決定，一鍵產生可匯入 VBE 的模組程式碼。', 'The online VBA · DeepSeek Code Generator is live: keys never enter source code, control names and slide numbers are configuration-driven, and it generates module code you can import into the VBE in one click.'],
    '在这以后，用户可以前往以下链接下载：': ['在这以后，用户可以前往以下链接下载：', '在這以後，使用者可以前往以下連結下載：', 'From now on, downloads are available at the following links:'],
    '如何开启合作': ['如何开启合作', '如何開啟合作', 'How to Start'],
    '如何领取': ['如何领取', '如何領取', 'How to get one'],
    '完全免费、无广告且不限速': ['完全免费、无广告且不限速', '完全免費、無廣告且不限速', 'completely free, ad-free and unthrottled '],
    '导航': ['导航', '導覽', 'Nav'],
    '工作室公告': ['工作室公告', '工作室公告', 'Studio Notice'],
    '幻灯片页码': ['幻灯片页码', '投影片頁碼', 'Slide number'],
    '开放联合开发、分包协作、资源置换、委托制作等多种合作模式，覆盖从前期概念到最终交付的全流程或阶段性协作。无论是大型长线项目还是专项任务，我们都将以专业的项目管理流程确保品质与效率。': ['开放联合开发、分包协作、资源置换、委托制作等多种合作模式，覆盖从前期概念到最终交付的全流程或阶段性协作。无论是大型长线项目还是专项任务，我们都将以专业的项目管理流程确保品质与效率。', '開放聯合開發、分包協作、資源置換、委託製作等多種合作模式，覆蓋從前期概念到最終交付的全流程或階段性協作。無論是大型長線專案還是專項任務，我們都將以專業的專案管理流程確保品質與效率。', 'We are open to joint development, subcontracting, resource exchange and commissioned production — covering full-cycle or phase-based collaboration from concept to delivery. For large long-term projects or single tasks alike, professional project management ensures quality and efficiency.'],
    '我们也对技术管线共建、人才交流、联合参展、发行渠道共享等方向保持开放。如有独特的合作构想，欢迎随时与我们探讨——好的合作往往始于一次不设限的对话。': ['我们也对技术管线共建、人才交流、联合参展、发行渠道共享等方向保持开放。如有独特的合作构想，欢迎随时与我们探讨——好的合作往往始于一次不设限的对话。', '我們也對技術管線共建、人才交流、聯合參展、發行渠道共享等方向保持開放。如有獨特的合作構想，歡迎隨時與我們探討——好的合作往往始於一次不設限的對話。', 'We are also open to shared tech pipelines, talent exchange, joint exhibitions and distribution partnerships. If you have a unique collaboration idea, talk to us anytime — great partnerships often begin with an open-ended conversation.'],
    '我们始终相信，优秀的作品源于志同道合者的共同打磨。现面向行业开放合作通道，期待与具备专业能力与创作热情的团队建立长期、稳定的合作关系。': ['我们始终相信，优秀的作品源于志同道合者的共同打磨。现面向行业开放合作通道，期待与具备专业能力与创作热情的团队建立长期、稳定的合作关系。', '我們始終相信，優秀的作品源於志同道合者的共同打磨。現面向行業開放合作通道，期待與具備專業能力與創作熱情的團隊建立長期、穩定的合作關係。', 'We believe great work comes from like-minded people refining it together. Our collaboration channel is now open to the industry — we look forward to long-term, stable partnerships with teams that bring professional skill and creative passion.'],
    '我们的决定': ['我们的决定', '我們的決定', 'Our decision'],
    '把 Caelus Studio 挂在钥匙串上，随时带走。工作室的第一枚周边，从今天起向 QQ 群成员免费开放领取。': ['把 Caelus Studio 挂在钥匙串上，随时带走。工作室的第一枚周边，从今天起向 QQ 群成员免费开放领取。', '把 Caelus Studio 掛在鑰匙圈上，隨時帶走。工作室的第一枚周邊，從今天起向 QQ 群成員免費開放領取。', 'Carry Caelus Studio on your keyring, wherever you go. Our first piece of merch is free for QQ group members starting today.'],
    '提交后，站点输出一段结构完整的 VBA 标准模块代码，可直接导入 VBE 使用。其设计原则是：密钥不进源码、控件名由用户声明、页码由配置决定、ActiveX 与 VBA 的边界写清楚。': ['提交后，站点输出一段结构完整的 VBA 标准模块代码，可直接导入 VBE 使用。其设计原则是：密钥不进源码、控件名由用户声明、页码由配置决定、ActiveX 与 VBA 的边界写清楚。', '提交後，站點輸出一段結構完整的 VBA 標準模組程式碼，可直接匯入 VBE 使用。其設計原則是：金鑰不進原始碼、控制項名稱由使用者聲明、頁碼由配置決定、ActiveX 與 VBA 的邊界寫清楚。', 'On submit, the site outputs a complete, well-structured VBA standard module ready to import into the VBE. Design principles: keys never in source code, control names declared by the user, slide numbers from configuration, and a clear boundary between ActiveX and VBA.'],
    '提问控件名': ['提问控件名', '提問控制項名稱', 'Question box name'],
    '新闻中心': ['新闻中心', '新聞中心', 'News'],
    '更新日志': ['更新日志', '更新日誌', 'Changelog'],
    '来自 Caelus Studio 的最新动态。': ['来自 Caelus Studio 的最新动态。', '來自 Caelus Studio 的最新動態。', 'The latest from Caelus Studio.'],
    '没有找到相关内容。': ['没有找到相关内容。', '沒有找到相關內容。', 'No matching content.'],
    '用户须自行在 PowerPoint 信任中心启用宏，并对自己的 API Key、调用费用与输出内容负责。': ['用户须自行在 PowerPoint 信任中心启用宏，并对自己的 API Key、调用费用与输出内容负责。', '使用者須自行在 PowerPoint 信任中心啟用巨集，並對自己的 API Key、呼叫費用與輸出內容負責。', 'Users must enable macros in the PowerPoint Trust Center themselves, and are responsible for their own API key, usage costs and output content.'],
    '的下载环境。我们希望通过这次平台的升级与转变，能够为大家带来更加顺畅、便捷的资源获取体验，同时也感谢大家一直以来对我们工作的理解与支持。': ['的下载环境。我们希望通过这次平台的升级与转变，能够为大家带来更加顺畅、便捷的资源获取体验，同时也感谢大家一直以来对我们工作的理解与支持。', '的下載環境。我們希望透過這次平台的升級與轉變，能夠為大家帶來更加順暢、便捷的資源獲取體驗，同時也感謝大家一直以來對我們工作的理解與支援。', 'download experience. We hope this upgrade brings everyone a smoother, easier way to get resources — and thank you for your understanding and support all along.'],
    '站点：': ['站点：', '站點：', 'Site: '],
    '符合条件的团队可申请成为 Caelus Studio 官方授权服务商，获得品牌授权使用、技术资源支持、商务优先推荐及联合宣发等权益。我们期待合作方具备扎实的专业基础与良好的交付记录，具体授权标准与权益细则将在初步沟通后提供。': ['符合条件的团队可申请成为 Caelus Studio 官方授权服务商，获得品牌授权使用、技术资源支持、商务优先推荐及联合宣发等权益。我们期待合作方具备扎实的专业基础与良好的交付记录，具体授权标准与权益细则将在初步沟通后提供。', '符合條件的團隊可申請成為 Caelus Studio 官方授權服務商，獲得品牌授權使用、技術資源支援、商務優先推薦及聯合宣發等權益。我們期待合作方具備紮實的專業基礎與良好的交付記錄，具體授權標準與權益細則將在初步溝通後提供。', 'Qualified teams may apply to become an officially authorized Caelus Studio service provider, gaining brand licensing, technical resources, priority business referrals and joint promotion. We expect partners with solid expertise and a good delivery record; detailed criteria and benefits will be provided after an initial conversation.'],
    '第一，API Key 常出现在 .bas 文件里，一旦仓库公开或文件转发，密钥即泄露。': ['第一，API Key 常出现在 .bas 文件里，一旦仓库公开或文件转发，密钥即泄露。', '第一，API Key 常出現在 .bas 檔案裡，一旦倉庫公開或檔案轉發，金鑰即洩露。', 'First, API keys often end up in .bas files — the moment a repo goes public or the file is forwarded, the key leaks.'],
    '第三，提问内容、回答位置、控件所在幻灯片页码三者没有结构化配置，代码与具体幻灯片强耦合，复用成本很高。': ['第三，提问内容、回答位置、控件所在幻灯片页码三者没有结构化配置，代码与具体幻灯片强耦合，复用成本很高。', '第三，提問內容、回答位置、控制項所在投影片頁碼三者沒有結構化配置，程式碼與具體投影片強耦合，複用成本很高。', 'Third, the question content, answer location and slide numbers have no structured configuration — the code is tightly coupled to specific slides and costly to reuse.'],
    '第二，ActiveX 文本框、标签、按钮的 OLEFormat.Object.Text 访问方式未被显式声明，生成环境换一台机器就容易报“对象不支持该属性或方法”。': ['第二，ActiveX 文本框、标签、按钮的 OLEFormat.Object.Text 访问方式未被显式声明，生成环境换一台机器就容易报“对象不支持该属性或方法”。', '第二，ActiveX 文字方塊、標籤、按鈕的 OLEFormat.Object.Text 存取方式未被顯式聲明，產生環境換一台機器就容易報「物件不支援該屬性或方法」。', 'Second, the OLEFormat.Object.Text access pattern for ActiveX text boxes, labels and buttons is rarely declared explicitly, so switching machines often triggers “object doesn’t support this property or method”.'],
    '精致透明亚克力材质，Caelus Studio Logo 精细切割。发布当日 QQ 群成员限时 0 元领取，之后恢复 ¥9.9/个。': ['精致透明亚克力材质，Caelus Studio Logo 精细切割。发布当日 QQ 群成员限时 0 元领取，之后恢复 ¥9.9/个。', '精緻透明壓克力材質，Caelus Studio Logo 精細切割。發布當日 QQ 群成員限時 0 元領取，之後恢復 ¥9.9/個。', 'Fine transparent acrylic with a precision-cut Caelus Studio logo. Free for QQ group members on launch day; ¥9.9 each afterwards.'],
    '网页由人工智能辅助生成': ['网页由人工智能辅助生成', '網頁由人工智慧輔助生成', 'This website was created with AI assistance'],
    '联系渠道：以 Caelus Studio 官方邮件与项目主页公示为准': ['联系渠道：以 Caelus Studio 官方邮件与项目主页公示为准', '聯絡渠道：以 Caelus Studio 官方郵件與專案主頁公示為準', 'Contact: see the official Caelus Studio email and project homepage'],
    '诚邀各大工作室携手合作：授权服务商、合作制作项目与更多开放方向。': ['诚邀各大工作室携手合作：授权服务商、合作制作项目与更多开放方向。', '誠邀各大工作室攜手合作：授權服務商、合作製作專案與更多開放方向。', 'Studios invited to collaborate: authorized service providers, co-produced projects and more.'],
    '请发送你的想法给我们的 QQ，或发送至电子邮箱': ['请发送你的想法给我们的 QQ，或发送至电子邮箱', '請發送你的想法給我們的 QQ，或發送至電子郵箱', 'Send your ideas to our QQ, or email us at '],
    '这枚小小的挂件，是我们做工作室以来最开心的一件「作品」。感谢每一位支持 Caelus Studio 的朋友——希望它每天陪着你出门，也把工作室挂在离你更近的地方。': ['这枚小小的挂件，是我们做工作室以来最开心的一件「作品」。感谢每一位支持 Caelus Studio 的朋友——希望它每天陪着你出门，也把工作室挂在离你更近的地方。', '這枚小小的掛件，是我們做工作室以來最開心的一件「作品」。感謝每一位支持 Caelus Studio 的朋友——希望它每天陪著你出門，也把工作室掛在離你更近的地方。', 'This little charm is the “work” that has made us happiest since founding the studio. Thank you to everyone who supports Caelus Studio — we hope it goes out with you every day and keeps the studio a little closer.'],
    '选择这两个平台，不仅是因为它们拥有极高的全球访问稳定性和安全性，更重要的是，它们能够为大家提供一个': ['选择这两个平台，不仅是因为它们拥有极高的全球访问稳定性和安全性，更重要的是，它们能够为大家提供一个', '選擇這兩個平台，不僅是因為它們擁有極高的全球存取穩定性和安全性，更重要的是，它們能夠為大家提供一個', 'We chose these two platforms not only for their outstanding global availability and security, but because they offer everyone '],
    '透明亚克力钥匙扣': ['透明亚克力钥匙扣', '透明壓克力鑰匙扣', 'Transparent Acrylic Keychain'],
    '鉴于这一现状，为了彻底解决大家在下载过程中遇到的限速、收费以及链接失效等问题，我们团队经过深思熟虑和多方测试，决定正式将原有的下载链接平台进行战略迁移。从现在起，我们将全面启用 GitHub 以及 GitSource · 即溯作为全新的资源分发渠道。': ['鉴于这一现状，为了彻底解决大家在下载过程中遇到的限速、收费以及链接失效等问题，我们团队经过深思熟虑和多方测试，决定正式将原有的下载链接平台进行战略迁移。从现在起，我们将全面启用 GitHub 以及 GitSource · 即溯作为全新的资源分发渠道。', '鑒於這一現狀，為了徹底解決大家在下載過程中遇到的限速、收費以及連結失效等問題，我們團隊經過深思熟慮和多方測試，決定正式將原有的下載連結平台進行戰略遷移。從現在起，我們將全面啟用 GitHub 以及 GitSource · 即溯作為全新的資源分發渠道。', 'Given this situation, and to completely solve the throttling, fees and dead links you have encountered when downloading, our team — after careful thought and extensive testing — has decided to formally migrate our download platform. From now on, GitHub and GitSource · Jisu become our new distribution channels.'],
    '阅读全文 →': ['阅读全文 →', '閱讀全文 →', 'Read more →'],
    '随着互联网服务的不断演变，我们观察到目前市面上绝大多数主流云存储平台（例如123云盘、百度网盘等）为了维持高昂的服务器运营成本，纷纷开始实行严格的收费策略或限制下载速度。这种趋势直接导致了用户获取资源的门槛和成本显著增加，不仅违背了互联网资源自由共享的初衷，也给广大用户带来了诸多不便。': ['随着互联网服务的不断演变，我们观察到目前市面上绝大多数主流云存储平台（例如123云盘、百度网盘等）为了维持高昂的服务器运营成本，纷纷开始实行严格的收费策略或限制下载速度。这种趋势直接导致了用户获取资源的门槛和成本显著增加，不仅违背了互联网资源自由共享的初衷，也给广大用户带来了诸多不便。', '隨著網際網路服務的不斷演變，我們觀察到目前市面上絕大多數主流雲端儲存平台（例如123雲端硬碟、百度網盤等）為了維持高昂的伺服器營運成本，紛紛開始實行嚴格的收費策略或限制下載速度。這種趨勢直接導致了使用者獲取資源的門檻和成本顯著增加，不僅違背了網際網路資源自由共享的初衷，也給廣大使用者帶來了諸多不便。', 'As internet services evolve, we have watched most mainstream cloud storage platforms (123pan, Baidu Netdisk and the like) introduce strict paywalls or speed limits to cover heavy server costs. This has sharply raised the barrier and cost of obtaining resources — betraying the original spirit of free sharing on the internet and causing real inconvenience.'],
    '面向 PowerPoint OS / PPTOS 创作者的在线工具「VBA · DeepSeek 代码生成器」上线：填四个配置项，直接生成可导入 VBE 的完整 VBA 模块代码。': ['面向 PowerPoint OS / PPTOS 创作者的在线工具「VBA · DeepSeek 代码生成器」上线：填四个配置项，直接生成可导入 VBE 的完整 VBA 模块代码。', '面向 PowerPoint OS / PPTOS 創作者的線上工具「VBA · DeepSeek 程式碼產生器」上線：填四個配置項，直接產生可匯入 VBE 的完整 VBA 模組程式碼。', 'The online tool “VBA · DeepSeek Code Generator” for PowerPoint OS / PPTOS creators is live: fill in four settings and it generates a complete VBA module ready to import into the VBE.'],
    '，之后恢复 ¥9.9/个。数量有限，先到先得。': ['，之后恢复 ¥9.9/个。数量有限，先到先得。', '，之後恢復 ¥9.9/個。數量有限，先到先得。', '; ¥9.9 each afterwards. Limited stock, first come first served.'],
    '，加入 Caelus Studio QQ 群的成员即可 0 元领取。': ['，加入 Caelus Studio QQ 群的成员即可 0 元领取。', '，加入 Caelus Studio QQ 群的成員即可 0 元領取。', ' — QQ group members can claim one for free.'],
    '，填写收件人、联系方式与收货地址': ['，填写收件人、联系方式与收货地址', '，填寫收件人、聯絡方式與收貨地址', ', fill in the recipient, contact info and delivery address'],
    '，我们将视情况安排进一步沟通。': ['，我们将视情况安排进一步沟通。', '，我們將視情況安排進一步溝通。', ' and we will arrange a follow-up conversation as appropriate.'],
    '，站点地址为': ['，站点地址为', '，站點地址為', '. The site is at '],
    '：DeepSeek 回复写回的 ActiveX 文本框；': ['：DeepSeek 回复写回的 ActiveX 文本框；', '：DeepSeek 回覆寫回的 ActiveX 文字方塊；', ': the ActiveX text box where DeepSeek’s reply is written back;'],
    '：控件所属幻灯片，用于生成正确的幻灯片与形状访问路径。': ['：控件所属幻灯片，用于生成正确的幻灯片与形状访问路径。', '：控制項所屬投影片，用於產生正確的投影片與形狀存取路徑。', ': the slide the controls live on, used to generate the correct slide/shape access paths.'],
    '：用户要发送给 DeepSeek 的 ActiveX 文本框；': ['：用户要发送给 DeepSeek 的 ActiveX 文本框；', '：使用者要傳送給 DeepSeek 的 ActiveX 文字方塊；', ': the ActiveX text box the user sends to DeepSeek;'],
    '：运行时从幻灯片上的控件读取密钥，而非写死进代码；': ['：运行时从幻灯片上的控件读取密钥，而非写死进代码；', '：執行時從投影片上的控制項讀取金鑰，而非寫死進程式碼；', ': read the key from a control on the slide at runtime, instead of hard-coding it;'],
  };

  var LABEL = { 'zh-CN': '简', 'zh-TW': '繁', 'en': 'EN' };
  var HTMLLANG = { 'zh-CN': 'zh-CN', 'zh-TW': 'zh-Hant', 'en': 'en' };

  function cur() { try { return localStorage.getItem('caelus_lang') || 'zh-CN'; } catch (e) { return 'zh-CN'; } }
  function norm(s) { return String(s).replace(/\s+/g, ' ').trim(); }
  var IDX = { 'zh-CN': 0, 'zh-TW': 1, 'en': 2 };
  function tr(s) { var e = DICT[norm(s)]; if (!e) return null; var v = e[IDX[cur()]]; return v === undefined ? null : v; }

  var obs = null;
  var ORIG_N = new WeakMap(), ORIG_P = new WeakMap(), ORIG_T = null;
  function apply() {
    if (obs) obs.disconnect();
    try {
      if (!document.body) return;
      var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, { acceptNode: function (node) { var p = node.parentNode; return (p && (p.nodeName === 'SCRIPT' || p.nodeName === 'STYLE')) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT; } }), n, nodes = [];
      while ((n = w.nextNode())) nodes.push(n);
      for (var i = 0; i < nodes.length; i++) {
        if (!ORIG_N.has(nodes[i])) ORIG_N.set(nodes[i], norm(nodes[i].nodeValue));
        var key = ORIG_N.get(nodes[i]);
        if (!key) continue;
        var t = tr(key);
        if (t !== null && t !== nodes[i].nodeValue) nodes[i].nodeValue = t;
      }
      var els = document.querySelectorAll('input[placeholder], textarea[placeholder]');
      for (var j = 0; j < els.length; j++) {
        if (!ORIG_P.has(els[j])) ORIG_P.set(els[j], norm(els[j].getAttribute('placeholder')));
        var tp = tr(ORIG_P.get(els[j]));
        if (tp !== null) els[j].setAttribute('placeholder', tp);
      }
      if (ORIG_T === null) ORIG_T = document.title;
      var tt = tr(ORIG_T);
      if (tt !== null) document.title = tt;
      document.documentElement.setAttribute('lang', HTMLLANG[cur()]);
      var btn = document.getElementById('langToggle');
      if (btn) btn.textContent = LABEL[cur()];
    } finally {
      if (obs) obs.observe(document.body, { childList: true, subtree: true, characterData: true });
    }
  }

  function inject() {
    if (document.getElementById('langToggle')) return;
    var mount = document.querySelector('.nav-right') || document.querySelector('.site-nav') || document.body;
    var btn = document.createElement('button');
    btn.id = 'langToggle';
    btn.className = 'theme-toggle lang-toggle';
    btn.type = 'button';
    btn.title = '简 / 繁 / EN';
    btn.textContent = LABEL[cur()];
    var tt = document.getElementById('themeToggle');
    if (tt && tt.parentNode === mount) mount.insertBefore(btn, tt); else mount.appendChild(btn);
    btn.addEventListener('click', function () {
      var order = ['zh-CN', 'zh-TW', 'en'];
      setLang(order[(order.indexOf(cur()) + 1) % 3]);
      apply();
    });
  }

  function setLang(l) { try { localStorage.setItem('caelus_lang', l); } catch (e) {} }

  var style = document.createElement('style');
  style.textContent = '.lang-toggle{font-size:12px;font-weight:600;line-height:1;display:flex;align-items:center;justify-content:center;letter-spacing:.02em;}';
  document.head.appendChild(style);

  inject();
  apply();
  obs = new MutationObserver(function () { clearTimeout(apply._t); apply._t = setTimeout(apply, 120); });
  obs.observe(document.body, { childList: true, subtree: true, characterData: true });
})();
