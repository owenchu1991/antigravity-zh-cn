const TRANSLATIONS = {
  // Sidebar Tabs
  "Account": "账户",
  "Permissions": "权限",
  "Appearance": "外观",
  "Notifications": "通知",
  "Models": "模型",
  "Customizations": "自定义",
  "Browser": "浏览器",
  "App": "应用",
  "Tab": "标签页管理",
  "Editor": "编辑器集成",
  "Best of N": "最佳选择",
  "Shortcuts": "快捷键",
  "Provide Feedback": "提供反馈",
  "Conversations": "对话",
  "Settings": "设置",
  
  // Section Headers
  "General": "通用",
  "Workspaces": "工作区",
  "Projects": "项目",
  "Not in Project": "非项目",
  "Show all": "显示全部",
  "New Conversation": "新建对话",
  "Conversation History": "对话历史",
  "Scheduled Tasks": "计划任务",
  "No conversations yet": "暂无对话历史",
  
  // Account Page
  "Manage your plan, credentials, and general preferences.": "管理您的计划、凭证和通用首选项。",
  "Enable Telemetry": "启用使用情况统计",
  "When toggled on, Antigravity collects usage data to help Google enhance performance and features.": "启用后，Antigravity 将收集使用情况数据以帮助 Google 提升性能和功能。",
  "Marketing Emails": "营销电子邮件",
  "Receive product updates, tips, and promotions from Google Antigravity via email.": "通过电子邮件接收来自 Google Antigravity 的产品更新、提示和促销信息。",
  "Your Plan: Google AI Pro": "当前方案: Google AI Pro",
  "You can upgrade to a Google AI Ultra plan to receive the highest rate limits.": "您可以升级到 Google AI Ultra 计划以获得最高的速率限制。",
  "Upgrade": "升级方案",
  "Email": "电子邮件",
  "Sign Out": "退出登录",
  "Sign In": "登录",
  "Not Signed In": "未登录",
  "Sign in to use Antigravity!": "登录以使用 Antigravity！",
  "By using this app, you agree to its": "使用此应用即表示您同意其",
  "Terms of Service": "服务条款",
  
  // Remote Control
  "Remote Control": "远程控制",
  "Enable Remote Control": "启用远程控制",
  "If enabled, you can manage your conversations from the Antigravity website. Please reload the application to apply this setting.": "如果启用，您可以从 Antigravity 网站管理您的对话。请重新加载应用程序以应用此设置。",

  // Permissions Page
  "Configure the agent's visual theme and display preferences.": "配置 Agent 的视觉主题和显示偏好。",
  "Agent security mode": "智能 Agent 安全模式",
  "Select one of the three options. Agent settings and permissions can be further customized below.": "请选择以下三个选项之一。Agent 设置和权限可以在下方进一步自定义。",
  "Learn more": "了解更多",
  "Full access": "完全访问",
  "Agents have full access to your machine and external resources.": "Agent 对您的计算机和外部资源拥有完全访问权限。",
  "Sandboxed": "沙盒限制",
  "Agents run in a secure sandbox that restricts access to external resources outside of your trusted folders.": "Agent 将在安全沙盒中运行，从而限制访问您信任文件夹之外的外部资源。",
  "Strict": "严格审查",
  "Terminal commands always require review and the agent cannot access files outside of its given workspaces.": "终端命令始终需要您的审查，且 Agent 无法访问其给定工作区之外的文件。",
  "Terminal": "终端",
  "Terminal Command Auto Execution": "终端命令自动执行",
  "Controls whether terminal commands require your approval before running.": "控制终端命令在运行前是否需要您的批准。",
  "Agent will always ask to review in strict mode.": "在严格模式下，Agent 将始终请求您的审查。",
  "Sandbox Allow Network": "沙盒网络访问",
  "When enabled, sandboxed commands are allowed to make network requests.": "启用后，沙盒中的命令将被允许发起 network 请求。",
  "Enable Shell Integration": "启用终端 Shell 集成",
  "When enabled, Agent will use IDE's shell integration to detect and report terminal command execution.": "启用后，Agent 将使用 IDE 的 Shell 集成来检测并报告终端命令的执行情况。",
  "File Access": "文件访问",
  "Agent Non-Workspace File Access": "Agent 非工作区文件访问",
  "Allows the agent to access files outside of your current workspace.": "允许 Agent 访问当前工作区之外的文件。",
  "Agent cannot modify files outside of the workspace in strict mode.": "在严格模式下，Agent 无法修改工作区之外的文件。",
  "Auto-Open Edited Files": "自动打开已编辑文件",
  "Open files in the background if Agent creates or edits them": "如果 Agent 创建 or 编辑了文件，则在后台自动打开这些文件",
  "Automation": "自动化",
  "Agent Auto-Fix Lints": "Agent 自动修复 Lint 错误",
  "When enabled, Agent is given awareness of lint errors created by its edits and may fix them without explicit user prompting.": "启用后，Agent 将感知其编辑所产生的 Lint 错误，并在无需用户显式提示的情况下尝试自动修复。",
  "History": "历史记录",
  "Conversation History": "对话历史记录",
  "When enabled, the agent will be able to access past conversations to inform its responses.": "启用后，Agent 将能够访问过去的对话记录以生成更相关的回复。",
  "Knowledge": "知识库 (Knowledge)",
  "When enabled, the agent will be able to access its knowledge base to inform its responses and automatically generate knowledge items in the background.": "启用后，Agent 将能够访问其知识库，并在后台自动生成知识项以提供更准确的回复。",
  "Explain and Fix in Current Conversation": "在当前对话中解释并修复",
  "When enabled, 'Explain and Fix' actions will continue in the current conversation instead of starting a new one.": "启用后，“解释并修复”操作将在当前对话中继续，而不是启动一个新对话。",
  "Open Agent on Reload": "重新加载时打开 Agent",
  "Open Agent panel on window reload": "在窗口重新加载时自动打开 Agent 面板",
  "Enable Sounds for Agent": "启用 Agent 提示音",
  "When enabled, Antigravity will play a sound when Agent finishes generating a response.": "启用后，当 Agent 完成响应生成时，Antigravity 将播放提示音。",
  "Auto-Expand Changes Overview": "自动展开变更概览",
  "When enabled, the Changes Overview toolbar will automatically expand when Agent finishes generating a response.": "启用后，当 Agent 完成响应生成时，变更概览工具栏将自动展开。",
  "Advanced": "高级设置",
  "Advanced File Access": "高级文件访问控制",
  "Read Files": "读取文件路径",
  "Paths the agent can read.": "Agent 被允许读取的文件或目录路径。",
  "Write Files": "写入文件路径",
  "Paths the agent can modify.": "Agent 被允许创建或修改的文件或目录路径。",
  "Advanced Command Access": "高级终端命令控制",
  "Terminal Commands": "终端命令清单",
  "Terminal commands the agent can execute.": "Agent 被允许执行 of 终端命令清单。",
  "Commands Outside Sandbox": "沙盒外运行命令",
  "Commands the agent can run outside the sandbox.": "Agent 被允许在沙盒外运行的特定命令。",
  "MCP Tools": "MCP 工具/服务",
  "External tools the agent can call via Model Context Protocol.": "Agent 可以通过模型上下文协议 (Model Context Protocol) 调用的外部工具。",
  "Advanced Web Access": "高级网络访问控制",
  "Read URLs": "读取网页 URL",
  "URLs the agent can read or open in the browser.": "Agent 被允许读取或在浏览器中打开的网页 URL 模式。",
  "Execute URLs": "操作网页 URL",
  "URLs the agent can actuate on using the browser.": "Agent 被允许在浏览器中进行交互 and 操作的网页 URL 模式。",

  // Common UI Button & Placeholders
  "Type to search...": "输入以搜索...",
  "to navigate": "进行导航",
  "to select": "进行选择",
  "Search all convos...": "搜索所有对话...",
  "Search projects...": "搜索项目...",
  "Search workspaces...": "搜索工作区...",
  "Search files...": "搜索文件...",
  "Search for files in the project...": "在项目中搜索文件...",
  "Select Project...": "选择项目...",
  "Select Workspace...": "选择工作区...",
  "Add": "添加",
  "Delete": "删除",
  "Cancel": "取消",
  "Confirm": "确认",
  "Save": "保存",
  "Close": "关闭",
  "Add Folder": "添加文件夹",
  "Default": "默认",
  "Always Ask": "始终询问",
  "Open": "打开",
  "Delete Project": "删除项目",
  "Go to Projects": "返回项目列表",
  "Request Review": "请求审查",
  "Edit": "编辑",
  "Open System Preferences": "打开系统偏好设置",
  "Add MCP": "添加 MCP",
  "Refresh": "刷新",
  "Customize": "自定义",
  "Submit": "提交",
  "Attach a screenshot (optional)": "附上屏幕截图（可选）",

  // Appearance Page Extra
  "System": "系统默认",
  "Default Light": "默认浅色",
  "Default Dark": "默认深色",

  // Layout & Styling Labels
  "App Settings": "应用设置",
  "Recommended": "（推荐）",
  "Navigation": "导航",
  "Conversation": "对话",
  "Layout Controls": "布局控制",

  // Models Page Extra
  "Model Credits": "模型额度",
  "Enable AI Credit Overages": "启用 AI 超额额度",
  "Available AI Credits:": "可用 AI 额度：",
  "See Activity": "查看活动",
  "Get More AI Credits": "获取更多 AI 额度",
  "Model Quota": "模型配额",
  "For Antigravity Business consumption options, see": "有关 Antigravity 商业版消费选项，请参阅",
  "No models available": "无可用模型",
  "View your available model quota and AI credits. Model quota refreshes periodically based on your plan. Enable AI Credit Overages to continue using models when your quota is exhausted.": "查看您的可用模型配额和 AI 额度。模型配额将根据您的方案定期刷新。启用 AI 超额额度以在配额耗尽时继续使用模型。",
  "View your available model quota. Quota refreshes periodically based on your plan.": "查看您的可用模型配额。配额将根据您的方案定期刷新。",

  // Customizations Page Extra
  "Customize Global Skills": "自定义全局技能",
  "Custom Agents": "自定义 Agent",
  "MCP Servers": "MCP 服务器",
  "Installed MCP Servers": "已安装的 MCP 服务器",
  "No MCP Servers": "无 MCP 服务器",
  "You currently don't have any MCP Servers installed.": "您当前尚未安装任何 MCP 服务器。",
  "Add an MCP server above or add a custom one via the MCP Config.": "请在上方添加一个 MCP 服务器，或者通过 MCP 配置添加自定义服务器。",
  "Add an MCP server above": "请在上方添加一个 MCP 服务器",
  "Open MCP Config": "打开 MCP 配置",
  "Build With Google Plugins": "使用 Google 插件构建",
  "Refreshing...": "正在刷新...",
  "Default Customizations": "默认自定义",
  "Configure default behaviors, skills, and MCP servers.": "配置默认行为、智能技能和 MCP 服务器。",
  "The breakdown below shows token usage from customizations like skills, rules, and MCP. If the budget is exceeded, large customizations will be truncated automatically.": "下方明细显示了技能、规则 and MCP 等自定义配置 of Token 使用量。如果超出预算，大型自定义项将被自动截断。",
  "Customization token budget exceeded. Large customizations will be truncated.": "已超出自定义 Token 预算。大型自定义项将被自动截断。",
  "of the customization budget is available.": "的自定义预算可用。",
  "% of the customization budget is available.": "% 的自定义预算可用。",

  // Global Skill Descriptions
  "Uses Chrome DevTools MCP for accessibility (a11y) debugging and auditing based on web.dev guidelines. Use when testing semantic HTML, ARIA labels, focus states, keyboard navigation, tap targets, and color contrast.": "使用 Chrome DevTools MCP 进行基于 web.dev 指南的无障碍性 (a11y) 调试与审计。适用于测试语义化 HTML、ARIA 标签、焦点状态、键盘导航、点击目标和色彩对比度。",
  "Orchestrates Android development tasks including project creation, deployment, SDK management, and environment diagnostics using the `android` command-line tool.": "使用 `android` 命令行工具编排 Android 开发任务，包括项目创建、部署、SDK 管理和环境诊断。",
  "Uses Chrome DevTools via MCP for efficient debugging, troubleshooting and browser automation. Use when debugging web pages, automating browser interactions, analyzing performance, or inspecting network requests. This skill does not apply to `--slim` mode (MCP configuration).": "通过 MCP 使用 Chrome DevTools 进行高效调试、故障排除和浏览器自动化。适用于调试网页、自动进行浏览器交互、分析性能或检查网络请求。本技能不适用于 `--slim` 模式 (MCP 配置)。",
  "Build and publish Chrome Extensions using Manifest V3 best practices. Use this skill whenever the user asks to create, modify, debug, or understand Chrome browser extensions, add-ons, or anything involving the Chrome Extensions API. Trigger on mentions of: 'Chrome extension', 'browser extension', 'manifest.json', 'content script', 'service worker' (in browser context), 'popup' (in browser extension context), 'side panel', 'chrome.* API', 'declarativeNetRequest', 'omnibox', 'context menu' (in extension context), or any request to build functionality that integrates with the Chrome browser UI. Also trigger for publishing to the Chrome Web Store: 'publish extension', preparing an extension for publishing, responding to a review rejection, writing permission justifications, or drafting a privacy policy.": "使用 Manifest V3 最佳实践构建和发布 Chrome 扩展。当用户请求创建、修改、调试或理解 Chrome 浏览器扩展、附加组件或涉及 Chrome Extensions API 的任何内容时使用此技能。当提及以下内容时触发：“Chrome 扩展”、“浏览器扩展”、“manifest.json”、内容脚本、服务工作进程（在浏览器上下文中）、弹窗（在扩展上下文中）、侧边栏面板、chrome.* API、declarativeNetRequest、omnibox、右键上下文菜单（在扩展上下文中），或任何构建与 Chrome 浏览器界面集成的功能请求。还适用于在 Chrome 应用商店发布：“发布扩展”、准备发布扩展、回应审核拒绝、撰写权限合规声明或起草隐私政策。",
  "Guides debugging and optimizing Largest Contentful Paint (LCP) using Chrome DevTools MCP tools. Use this skill whenever the user asks about LCP performance, slow page loads, Core Web Vitals optimization, or wants to understand why their page's main content takes too long to appear. Also use when the user mentions \"largest contentful paint\", \"page load speed\", \"CWV\", or wants to improve how fast their hero image or main content renders.": "引导使用 Chrome DevTools MCP 工具调试与优化最大内容渲染时间 (LCP)。当用户询问 LCP 性能、页面加载缓慢、核心网页指标 (Core Web Vitals) 优化，或希望了解为什么页面的主要内容加载时间过长时，使用此技能。当用户提及“最大内容渲染时间”、“页面加载速度”、“CWV”，或希望提高英雄图或主要内容渲染速度时触发。",
  "Design, implement, and debug autonomous AI agents and multi-agent systems using the Google Antigravity (AGY) SDK. ACTIVATE this skill when the user wants to create, configure, or orchestrate Google Antigravity agents.": "使用 Google Antigravity (AGY) SDK 设计、实现和调试自主式 AI Agent 和多 Agent 系统。当用户想要创建、配置或编排 Google Antigravity Agent 时，请激活此技能。",
  "Diagnoses and resolves memory leaks in JavaScript/Node.js applications. Use when a user reports high memory usage, OOM errors, or wants to analyze heapsnapshots or run memory leak detection tools like memlab.": "诊断并解决 JavaScript/Node.js 应用程序中的内存泄漏。当用户报告内存占用过高、内存溢出 (OOM) 错误，或者想要分析堆快照或运行 memlab 等内存泄漏检测工具时使用。",
  "Search tool for modern web development best practices. MANDATORY: Execute FIRST for all HTML/CSS and clientside JS tasks. Do NOT skip — web APIs evolve rapidly and training weights contain obsolete patterns. Trigger immediately for: - UI/Layout: Modals, dialogs, popovers, Glassmorphism/backdrop-filters, anchor positioning, container queries, `:has()`, `:user-valid`. - Scroll/Motion: View Transitions, Scroll-driven animations, scroll parallax/reveals. - Performance: CWV (LCP, INP), content-visibility, Fetch Priority, image optimization. - System/APIs: Local filesystem access, WebUSB, WebSockets sync, WebAssembly widgets. - Frameworks: Adapting layout/styles in React, Vue, Angular. - General Frontend: Forms, autofill, advanced inputs, custom scrollbars, modern component states, etc. DO NOT trigger for: - Backend: Database SQL, ORMs, Express API routes. - Pipelines: CI/CD deployment, Docker, Actions. - Generic: Local scripts (Python/Go tools), ESLint, Git.": "现代 Web 开发最佳实践搜索工具。强制：对于所有 HTML/CSS 和客户端 JS 任务，请【首先执行】。不要跳过 —— Web API 演进迅速，训练权重中包含过时的模式。适用场景：- 界面布局：模态框、对话框、气泡卡片、玻璃拟态/背景滤镜、锚点定位、容器查询、`:has()`、`:user-valid` 等。- 滚动与动效：视图过渡、滚动驱动动画、滚动视差/显现。- 性能优化：核心网页指标 (LCP, INP)、content-visibility、Fetch Priority、图片优化。- 系统与 API：本地文件系统访问、WebUSB、WebSockets 同步、WebAssembly 小部件。- 框架适配：在 React、Vue、Angular 中调整布局和样式。- 通用前端：表单、自动填充、高级输入框、自定义滚动条、现代组件状态等。不适用场景：- 后端开发：数据库 SQL、ORM、Express API 路由。- 流水线部署：CI/CD 部署、Docker、Actions。- 通用脚本：本地脚本 (Python/Go 工具)、ESLint、Git。",
  "Uses Chrome DevTools MCP and documentation to troubleshoot connection and target issues. Trigger this skill when list_pages, new_page, or navigate_page fail, or when the server initialization fails.": "使用 Chrome DevTools MCP 和文档来排查连接和目标问题。当 list_pages、new_page 或 navigate_page 失败，或者服务器初始化失败时触发此技能。",

  // Browser Actuation Extra
  "Browser Actuation Permissions": "浏览器操作权限",
  "Allow/deny agent browser actuation access to specific URLs.": "允许/拒绝 Agent 对特定 URL 的浏览器操作访问。",
  "Browser Settings": "浏览器设置",
  "Actuation Permissions": "操作权限",
  "Browser Actuation Rules": "浏览器操作规则",
  "Configure allowed and denied URLs for browser actuation.": "配置允许和拒绝浏览器操作的 URL 模式。",
  "Browser Javascript Execution Policy": "浏览器 Javascript 执行策略",
  "Controls whether the agent can run custom JavaScript to automate complex browser actions.": "控制 Agent 是否可以运行自定义 JavaScript 来自动执行复杂的浏览器操作。",
  "Configure the browser subagent. It requires Google Chrome to be installed. The browser subagent can be invoked by typing /browser in the conversation input box.": "配置浏览器子 Agent。要求系统已安装 Google Chrome。你可以通过在对话输入框中键入 /browser 来调用浏览器子 Agent。",
  "Configure the browser subagent. It requires ": "配置浏览器子 Agent。要求系统已安装 ",
  " to be installed. The browser subagent can be invoked by typing /browser in the conversation input box.": "。你可以通过在对话输入框中键入 /browser 来调用浏览器子 Agent。",

  // Editor Page Extra
  "Editor Settings": "编辑器设置",
  "Configure editor-specific behaviors and shortcuts.": "配置编辑器特有的行为和快捷键。",
  "Marketplace": "应用市场",
  "Marketplace Item URL": "应用市场商品 URL",
  "Changes the base URL on each extension page. You must restart Antigravity to use the new marketplace after changing this value.": "更改每个插件页面的基准 URL。您必须重新启动 Antigravity 才能应用新的应用市场。",
  "Marketplace Gallery URL": "应用市场目录 URL",
  "Changes the base URL for marketplace search results. You must restart Antigravity to use the new marketplace after changing this value.": "更改应用市场搜索结果 of 基准 URL。您必须重新启动 Antigravity 才能应用新的应用市场。",
  "Selection Actions": "选择操作",
  "UI Actions": "界面操作",
  "To modify editor settings, open Settings within the editor window.": "若要修改编辑器设置，请在编辑器窗口中打开“设置”。",
  "Open Editor Settings": "打开编辑器设置",
  // Conversations Setting Tab & Scoped Project Permissions Page
  "Agent settings and permissions for conversations outside of projects.": "关于项目之外对话的 Agent 设置与权限。",
  "Agent Settings": "Agent 设置",
  "Agent Behavior": "Agent 行为",
  "Local Permissions": "本地权限",
  "File Access Rules": "文件访问规则",
  "Configure allowed and denied paths for file reads and writes.": "配置允许或拒绝的文件读取与写入路径。",
  "Network Access Rules": "网络访问规则",
  "Configure allowed and denied URLs for reading.": "配置允许或拒绝的网页读取 URL。",
  "Manage project folders, agent settings, and permissions.": "管理项目文件夹、Agent 设置和权限。",
  "Choose a predefined security preset for the agent. This controls terminal auto-execution policy, and file access policy.": "为 Agent 选择预定义的安全预设。这控制了终端自动执行策略 and 文件访问策略。",
  "Security Preset": "安全预设",
  "Default": "默认",
  "Full machine": "整机访问",
  "Full Machine": "整机访问",
  "Unrestricted": "无限制 (高风险)",
  "Custom": "自定义",
  "Manually customize individual settings.": "手动自定义各项设置。",
  "Requires manual review for all terminal commands and file accesses outside of the working folders.": "对工作区文件夹之外的所有终端命令和文件访问需要手动审查。",
  "All terminal commands require review. The agent can read or write to any file in the machine.": "所有终端命令都需要审查。Agent 可以读取或写入计算机上的任何文件。",
  "Disables all safety barriers for maximal iteration velocity.": "禁用所有安全屏障以获得最大迭代速度。",
  "Useful for typical development with an emphasis on security. It prioritizes safety over speed by requiring manual approval for all terminal commands and files outside the project directory.": "适用于侧重安全的典型开发。通过对项目目录外的所有终端命令 and 文件进行手动批准，将安全置于速度之上。",
  "Useful for tasks that require file access across your full machine. The agent has full read and write access to all local files, but all proposed terminal commands require manual review and approval before running.": "适用于需要访问整机文件的任务。Agent 拥有对所有本地文件的完整读写访问权限，但所有提议的终端命令在运行前都需要手动审查和批准。",
  "A high-risk mode that disables all safety barriers. The agent operates with full system access, auto-executes all terminal commands, and reads or writes to all local files without review prompts.": "禁用所有安全屏障的高风险模式。Agent 以完全系统访问权限运行，自动执行所有终端命令，并读写所有本地文件而无需审查提示。",
  
  "Outside of folders file access policy": "文件夹外文件访问策略",
  "Configures how the agent tries to access files outside of its working folders.": "配置 Agent 试图访问其工作文件夹之外文件时的策略。",
  "Enable Sandbox Mode (Preview)": "启用沙盒模式 (预览)",
  "Restricts agent tools to a secure, isolated local sandbox.": "将 Agent 工具限制在安全、隔离的本地沙盒中。",
  "Artifact Review Policy": "制品审查策略",
  "Specifies Agent's behavior when asking for review on artifacts, which are documents it creates to enable a richer conversation experience.": "指定 Agent 索取制品（即它为启用更丰富对话体验而创建的文件）审查时的行为。",
  
  "Allow": "允许",
  "Deny": "拒绝",
  "Always Ask": "始终询问",
  "Always Proceed": "始终执行",
  "Proceed in Sandbox": "在沙盒中运行",
  "Require Review": "需要审查",
  
  "Inherits from": "继承自",
  "global settings": "全局设置",
  ". Local permissions have higher priority.": "。本地权限具有更高的优先级。",
  "Local permissions have higher priority.": "本地权限具有更高的优先级。",
  
  "Project-Specific Settings": "项目特定设置",
  "Modify scoped permissions, folders, and agent settings like Sandbox and Terminal Command Execution.": "修改范围权限、文件夹以及沙盒和终端命令执行等 Agent 设置。",
  "Go to Projects": "转到项目",
  "Project File Access": "项目文件访问",
  "Project Command Access": "项目命令访问",
  "Project Web Access": "项目网络访问",
  "Workspace Settings": "工作区设置",
  "Configure workspace-specific permissions, resources, and customizations.": "配置工作区特定的权限、资源和自定义设置。",
  "Workspace File Access": "工作区文件访问",
  "Workspace Command Access": "工作区命令访问",
  "Workspace Web Access": "工作区网络访问",
  "Paths the agent can read inside this workspace.": "Agent 被允许在此工作区中读取的文件或目录路径。",
  "Paths the agent can modify inside this workspace.": "Agent 被允许在此工作区中创建或修改的文件或目录路径。",
  "Terminal commands the agent can execute in this workspace.": "Agent 被允许在此工作区中执行的终端命令。",
  "Commands the agent can run outside the sandbox in this workspace.": "Agent 被允许在此工作区中在沙盒外运行的特定命令。",
  "URLs the agent can read or open in this workspace.": "Agent 被允许在此工作区中读取或打开的网页 URL。",
  "URLs the agent can actuate on in this workspace.": "Agent 被允许在此工作区中在浏览器中交互和操作的网页 URL。",
  "Danger Zone": "危险区域",
  "Permanently delete this project and all of its conversations.": "永久删除此项目及其所有对话。",
  "No folders added yet.": "暂无已添加的文件夹。",
  
  "File Reads": "文件读取",
  "File Writes": "文件写入",
  "Allow/deny agent read access to specific files or directories.": "允许/拒绝 Agent 对特定文件或目录的读取访问。",
  "Allow/deny agent write access to specific files or directories.": "允许/拒绝 Agent 对特定文件或目录的写入访问。",
  "Allow/deny agent read access to specific URLs or domains.": "允许/拒绝 Agent 对特定 URL 或域的读取访问。",
  "Allow/deny specific terminal commands.": "允许/拒绝特定的终端命令。",
  "Allow/deny agent command execution outside the sandbox.": "允许/拒绝在沙盒外运行命令。",
  "Configure allowed terminal commands.": "配置允许的终端命令。",
  "Configure allowed commands outside the sandbox.": "配置允许在沙盒外运行的命令。",
  "Configure external tools via Model Context Protocol.": "通过模型上下文协议配置外部工具。",
  
  "Enter file or directory path...": "输入文件或目录路径...",
  "Enter command (e.g., git, blaze)...": "输入命令 (例如 git、blaze)...",
  "Enter tool name or server...": "输入工具名称或服务器...",
  "Enter URL pattern...": "输入 URL 模式...",
  "e.g., /path/to/file": "例如 /path/to/file",
  "e.g., curl": "例如 curl",
  "e.g., npm test": "例如 npm test",

  // Antigravity safety dialog prompts (Reflective Questioning)
  "Allow read access to this path?": "是否允许读取此路径？",
  "Allow write access to this path?": "是否允许写入修改此路径？",
  "Allow reading this URL?": "是否允许读取此 URL？",
  "Allow executing actions on this URL?": "是否允许在此 URL 上执行操作？",
  "Allow running this command?": "是否允许运行此命令？",
  "Allow running this command outside the sandbox?": "是否允许在沙盒外运行此命令？",
  "Allow using this MCP tool?": "是否允许使用此 MCP 工具？",
  "Allow access to this resource?": "是否允许访问此资源？",

  "Save rule to always allow read access to this path?": "是否保存规则以始终允许读取此路径？",
  "Save rule to always allow write access to this path?": "是否保存规则以始终允许写入修改此路径？",
  "Save rule to always allow reading this URL?": "是否保存规则以始终允许读取此 URL？",
  "Save rule to always allow executing actions on this URL?": "是否保存规则以始终允许在此 URL 上执行操作？",
  "Save rule to always allow running this command?": "是否保存规则以始终允许运行此命令？",
  "Save rule to always allow running this command outside the sandbox?": "是否保存规则以始终允许在沙盒外运行此命令？",
  "Save rule to always allow using this MCP tool?": "是否保存规则以始终允许使用此 MCP 工具？",
  "Save rule to always allow access to this resource?": "是否保存规则以始终允许访问此资源？",

  "Confirm the command is safe to run outside of the sandbox with full network and disk access.": "请确认该命令在沙盒外运行是安全的（拥有完全的网络 and 磁盘访问权限）。",

  // Prompt options
  "Yes, allow this time": "是的，仅允许这一次",
  "Yes, save rule when not in a project": "是的，当不在项目中时保存规则",
  "Yes, save rule in this project": "是的，在此项目中保存规则",
  "Yes, and always allow when not in a project": "是的，且当不在项目中时始终允许",
  "Yes, and always allow in this project": "是的，且在此项目中始终允许",
  "Yes, save rule in this workspace": "是的，在此工作区中保存规则",
  "Yes, and always allow in this workspace": "是的，且在此工作区中始终允许",
  "Yes, save rule globally": "是的，全局保存规则",
  "Yes, and always allow": "是的，且始终允许",

  "No": "拒绝",
  "(tell the agent what to do instead)": "（告诉 Agent 应该做什么代替）",
  "No (tell the agent what to do instead)": "拒绝（告诉 Agent 应该做什么代替）",
  "Skip": "跳过",
  "Skip All": "全部跳过",
  "Submit": "提交",
  "Continue": "继续",
  "Submit (Enter)": "提交 (Enter)",
  "Continue (Enter)": "继续 (Enter)",
  "Multi-select": "多选",
  "of": "/",
  "Edit permission target": "编辑权限目标",

  "Read": "读取",
  "Write": "写入",
  "Run": "运行",
  "Run (unsandboxed)": "在沙盒外运行",
  "Use": "使用",
  "Access": "访问",

  // Shortcuts Page
  "Keyboard shortcuts for quick navigation and control.": "用于快速导航和控制的键盘快捷键。",
  "Open Conversation Picker": "打开对话选择",
  "Open File Search": "打开文件搜索",
  "Focus Input": "聚焦输入框",
  "Go Back": "返回上一页",
  "Go Forward": "前进下一页",
  "File Picker": "文件选择",
  "Select Previous Conversation": "选择上一个对话",
  "Select Next Conversation": "选择下一个对话",
  "Toggle Model Selector": "切换模型选择器",
  "Toggle Voice Recording": "切换语音录制",
  "Find in Pane": "在面板中查找",
  "Toggle Sidebar": "切换侧边栏",
  "Toggle Auxiliary Pane": "切换辅助面板",
  "Zoom In": "放大",
  "Zoom Out": "缩小",
  "Reset Zoom": "重置缩放"
};

electron_1.contextBridge.exposeInMainWorld('__CHINESE_TRANSLATIONS__', TRANSLATIONS);

const injectReactHook = () => {
  const scriptContent = `
  (function() {
    const TRANSLATIONS = ${JSON.stringify(TRANSLATIONS)};
    
    const translate = (str) => {
      if (typeof str !== 'string') return str;
      const trimmed = str.trim();
      if (!trimmed) return str;
      
      // Dynamic Regex Translations for Prompt Options with Optional Quotes
      if (/^Yes, save rule for ['"]?(.*?)['"]? when not in a project$/i.test(trimmed)) {
        return trimmed.replace(/^Yes, save rule for ['"]?(.*?)['"]? when not in a project$/i, '是的，当不在项目中时保存对 “$1” 的规则');
      }
      if (/^Yes, save rule for ['"]?(.*?)['"]? in this project$/i.test(trimmed)) {
        return trimmed.replace(/^Yes, save rule for ['"]?(.*?)['"]? in this project$/i, '是的，在此项目中保存对 “$1” 的规则');
      }
      if (/^Yes, and always allow ['"]?(.*?)['"]? when not in a project$/i.test(trimmed)) {
        return trimmed.replace(/^Yes, and always allow ['"]?(.*?)['"]? when not in a project$/i, '是的，且当不在项目中时始终允许运行 “$1”');
      }
      if (/^Yes, and always allow ['"]?(.*?)['"]? in this project$/i.test(trimmed)) {
        return trimmed.replace(/^Yes, and always allow ['"]?(.*?)['"]? in this project$/i, '是的，且在此项目中始终允许运行 “$1”');
      }

      if (/^Yes, save rule for ['"]?(.*?)['"]? in this workspace$/i.test(trimmed)) {
        return trimmed.replace(/^Yes, save rule for ['"]?(.*?)['"]? in this workspace$/i, '是的，在此工作区中保存对 “$1” 的规则');
      }
      if (/^Yes, and always allow ['"]?(.*?)['"]? in this workspace$/i.test(trimmed)) {
        return trimmed.replace(/^Yes, and always allow ['"]?(.*?)['"]? in this workspace$/i, '是的，且在此工作区中始终允许运行 “$1”');
      }

      if (/^Yes, save rule for ['"]?(.*?)['"]? globally$/i.test(trimmed)) {
        return trimmed.replace(/^Yes, save rule for ['"]?(.*?)['"]? globally$/i, '是的，全局保存对 “$1” 的规则');
      }
      if (/^Yes, and always allow ['"]?(.*?)['"]?$/i.test(trimmed)) {
        return trimmed.replace(/^Yes, and always allow ['"]?(.*?)['"]?$/i, '是的，且始终允许运行 “$1”');
      }

      // Other Dynamic Regex Translations
      if (/^Show (\\d+) breakdowns$/i.test(trimmed)) {
        return trimmed.replace(/^Show (\\d+) breakdowns$/i, '显示 $1 项细分');
      }
      if (/^(\\d+) running agents$/i.test(trimmed)) {
        return trimmed.replace(/^(\\d+) running agents$/i, '$1 个正在运行的 Agent');
      }
      if (/^(\\d+(?:\\.\\d+)?)% of the customization budget is available\\.$/i.test(trimmed)) {
        return trimmed.replace(/^(\\d+(?:\\.\\d+)?)% of the customization budget is available\\.$/i, '自定义预算的 $1% 可用。');
      }
      if (/^Skip \\(esc\\), Skip All \\((.*)\\)$/i.test(trimmed)) {
        return trimmed.replace(/^Skip \\(esc\\), Skip All \\((.*)\\)$/i, '跳过 (esc)，全部跳过 ($1)');
      }
      
      const t = TRANSLATIONS[trimmed];
      if (t) {
        let res = t;
        if (str.startsWith(' ')) res = ' ' + res;
        if (str.endsWith(' ')) res = res + ' ';
        return res;
      }
      const clean = trimmed.replace(/^[:：\\s]+|[:：\\s]+$/g, '');
      const cleanT = TRANSLATIONS[clean];
      if (cleanT) {
        let res = cleanT;
        if (str.startsWith(' ')) res = ' ' + res;
        if (str.endsWith(' ')) res = res + ' ';
        if (str.endsWith(':')) res = res + ':';
        if (str.endsWith('：')) res = res + '：';
        return res;
      }
      return str;
    };

    let realReact = undefined;
    let patchedReact = undefined;
    
    Object.defineProperty(window, 'React', {
      get() {
        if (realReact && realReact.createElement && realReact !== patchedReact) {
          patchedReact = realReact;
          const originalCreateElement = realReact.createElement;
          
          console.log('[ReactHook] React intercepted in main world getter. Translation hook active.');
          
          realReact.createElement = function(type, props, ...children) {
            const translateChildren = (child) => {
              if (typeof child === 'string') return translate(child);
              if (Array.isArray(child)) return child.map(translateChildren);
              return child;
            };

            if (props) {
              if (typeof props.children === 'string') {
                props.children = translate(props.children);
              } else if (Array.isArray(props.children)) {
                props.children = props.children.map(translateChildren);
              }
              if (typeof props.title === 'string') props.title = translate(props.title);
              if (typeof props.label === 'string') props.label = translate(props.label);
              if (typeof props.placeholder === 'string') props.placeholder = translate(props.placeholder);
              if (typeof props.description === 'string') props.description = translate(props.description);
              if (typeof props.tooltip === 'string') props.tooltip = translate(props.tooltip);
              if (typeof props.text === 'string') props.text = translate(props.text);
              if (typeof props.message === 'string') props.message = translate(props.message);
              if (typeof props.detail === 'string') props.detail = translate(props.detail);
              if (typeof props.prompt === 'string') props.prompt = translate(props.prompt);
            }
            
            const translatedChildren = children.map(translateChildren);
            return originalCreateElement.call(this, type, props, ...translatedChildren);
          };
        }
        return realReact;
      },
      set(val) {
        realReact = val;
      },
      configurable: true,
      enumerable: true
    });

    // --- DOM Text Interception ---
    try {
      const origCreateTextNode = document.createTextNode;
      document.createTextNode = function(data) {
        const translated = translate(data);
        return origCreateTextNode.call(this, translated !== undefined ? translated : data);
      };
      
      const origTextContent = Object.getOwnPropertyDescriptor(Node.prototype, 'textContent');
      if (origTextContent) {
        Object.defineProperty(Node.prototype, 'textContent', {
          get: origTextContent.get,
          set: function(val) {
            const translated = translate(val);
            return origTextContent.set.call(this, translated !== undefined ? translated : val);
          },
          configurable: true,
          enumerable: true
        });
      }

      const origData = Object.getOwnPropertyDescriptor(CharacterData.prototype, 'data');
      if (origData) {
        Object.defineProperty(CharacterData.prototype, 'data', {
          get: origData.get,
          set: function(val) {
            const translated = translate(val);
            return origData.set.call(this, translated !== undefined ? translated : val);
          },
          configurable: true,
          enumerable: true
        });
      }
      
      const origNodeValue = Object.getOwnPropertyDescriptor(Node.prototype, 'nodeValue');
      if (origNodeValue) {
        Object.defineProperty(Node.prototype, 'nodeValue', {
          get: origNodeValue.get,
          set: function(val) {
            const translated = translate(val);
            return origNodeValue.set.call(this, translated !== undefined ? translated : val);
          },
          configurable: true,
          enumerable: true
        });
      }
      
      console.log('[ReactHook] DOM Text Interception active.');
    } catch(err) {
      console.error('[ReactHook] Failed to patch DOM text', err);
    }
    // -----------------------------
  })();
  `;

  const runInjection = () => {
    if (document.documentElement) {
      const script = document.createElement('script');
      script.textContent = scriptContent;
      document.documentElement.appendChild(script);
      script.remove();
      console.log('[Preload] React hook injected successfully via documentElement.');
    } else {
      const observer = new MutationObserver(() => {
        if (document.documentElement) {
          const script = document.createElement('script');
          script.textContent = scriptContent;
          document.documentElement.appendChild(script);
          script.remove();
          console.log('[Preload] React hook injected successfully via MutationObserver.');
          observer.disconnect();
        }
      });
      observer.observe(document, { childList: true, subtree: true });
    }
  };

  try {
    runInjection();
  } catch (err) {
    console.error('[Preload] Failed to inject React translation hook:', err);
  }
};


injectReactHook();
