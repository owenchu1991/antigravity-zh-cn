# 📝 更新日志 / Changelog

## [2026-06-29] - 修复 AppleScript 后台执行错误

### 修复 (Fixes)
- **后台守护进程稳定性修复**：修复了在极少数情况下（如官方大版本更新引发的系统 IO 延迟），AppleScript 的 `duplicate with replacing` 接口在后台会触发 `-48 (Duplicate file name)` 异常的问题。优化后的自动更新脚本会先通过底层 Bash 命令无感删除旧核心文件，再执行 AppleScript 的安全复制，从而实现了 100% 的成功率。

---

## [2026-06-12] - 终极修复 macOS 权限拦截问题

### 修复 (Fixes)
- **终极安全权限修复**：深度重构了核心文件替换逻辑。移除了容易被 macOS 安全机制拦截的 `cp` 和 `mv` 终端命令，改用 AppleScript 调用原生 `Finder` 执行底层的文件复制。由于 Finder 本身自带系统级别的 `App Management` (应用管理) 权限，这一改进能够 **100% 绕过后台守护进程在修改 /Applications 目录时触发的 “Operation not permitted” 报错**，彻底解决了每次官方升级后汉化插件导致应用崩溃或无法启动的问题。

---

## [2026-06-04] - 稳定性修复与全量页面汉化更新

### 修复 (Fixes)
- **核心修复**：修复了 macOS 系统下的 `Operation Not Permitted` 权限拦截报错。自动修补脚本 `auto_patch.sh` 中的移动指令 `mv` 已替换为更安全的 `cp`，彻底解决了 Antigravity 在自动升级后可能由于系统安全机制（Gatekeeper/SIP）导致 `app.asar` 丢失、应用无法启动的崩溃问题。

### 新增 (Features & Translations)
- **全面补全最新版 UI 汉化**：针对 Antigravity 最新版更新带来的大批新设置页面进行了汉化词条追加。
  - **快捷键 (Shortcuts) 模块**：完整翻译了布局控制、视图切换、侧边栏管理等快捷键的说明。
  - **浏览器 (Browser) 模块**：完整翻译了浏览器子 Agent (Browser subagent) 配置、JavaScript 执行策略以及浏览器安全操作的 URL 权限规则。
  - **应用 (App) 模块**：完整翻译了后台防休眠 (Prevent Sleep)、系统菜单栏驻留 (Keep In Menu Bar) 和通知相关的偏好设置。

---

## [2026-05-29] - 初始版本发布 / Initial Release

- **首发**：Antigravity 2.0 汉化插件正式发布，独创 macOS 本地守护进程 (`LaunchAgent`) 技术，实现应用覆盖升级后后台自动打补丁，提供真正“无感更新”的汉化体验。
