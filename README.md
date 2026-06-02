# Antigravity 持续汉化插件 / Antigravity Persistent Localization Patch

[English version below](#english-version)

## 📖 项目简介
本项目是专为 **Antigravity** 提供的一个无感、持续更新的中文汉化插件。
由于官方应用在升级时会直接覆盖底层包（`app.asar`），常规汉化极易失效。本插件通过 macOS 原生的 `LaunchAgent` 守护进程，实现了**全自动化**的文件监控和修补。无论官方何时升级，插件都能在后台数秒内为你重新注入中文环境并重启应用，真正做到“一次安装，终生有效”。

## 🚀 安装与使用指南

### 1. 安装 (Installation)
在终端中进入本项目目录，执行安装脚本：
```bash
cd "/path/to/antigravity 汉化插件"
./install.sh
```
执行完毕后，守护进程将自动驻留在后台。

### 2. 使用说明 (Usage)
完全**无需人工干预**！
你可以像往常一样在 Antigravity 内点击升级，当系统检测到新版本安装完成后，后台守护进程会迅速接管，为你重新配置中文界面。

### 3. 卸载 (Uninstallation)
如果你想恢复为官方纯英文状态，只需执行卸载脚本：
```bash
cd "/path/to/antigravity 汉化插件"
./uninstall.sh
```

## 📸 效果截图 (Screenshots)
<img width="2018" height="1338" alt="image" src="https://github.com/user-attachments/assets/e3adce73-a8cd-40e4-bcd2-3f654acbcb52" />
<img width="1316" height="526" alt="image" src="https://github.com/user-attachments/assets/4e611486-acab-47d6-89ad-3ec0f8c75e31" />


---

<h2 id="english-version">🇬🇧 English Version</h2>

## 📖 Introduction
This project provides a persistent Chinese localization patch for **Antigravity**.
Because official updates overwrite the core `app.asar` file, conventional patches are easily lost. This plugin utilizes a native macOS `LaunchAgent` daemon to monitor the app's directory. Whenever an update occurs, the daemon automatically unpacks, injects the translation patch, and restarts the application within seconds, providing a truly "install once, run forever" experience.

## 🚀 Installation & Usage

### 1. Installation
Navigate to this project directory in your terminal and run the install script:
```bash
cd "/path/to/antigravity-zh-cn"
./install.sh
```
The daemon will be loaded and run silently in the background.

### 2. Usage
**Zero manual intervention required!**
Update Antigravity normally. The background daemon will detect the new version and automatically re-apply the localization patch.

### 3. Uninstallation
To restore the app to its original English state, simply run:
```bash
cd "/path/to/antigravity-zh-cn"
./uninstall.sh
```

## 📸 Screenshots
<img width="2018" height="1338" alt="image" src="https://github.com/user-attachments/assets/e3adce73-a8cd-40e4-bcd2-3f654acbcb52" />
<img width="1316" height="526" alt="image" src="https://github.com/user-attachments/assets/4e611486-acab-47d6-89ad-3ec0f8c75e31" />

---

## 📄 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
