#!/bin/bash
set -e

echo "开始卸载 Antigravity 持续汉化插件..."

PLIST_PATH="$HOME/Library/LaunchAgents/com.antigravity.autopatch.plist"
PATCH_DIR="$HOME/.antigravity_chinese_patch"

# 卸载并删除守护进程
if [ -f "$PLIST_PATH" ]; then
    launchctl unload "$PLIST_PATH" 2>/dev/null || true
    rm -f "$PLIST_PATH"
fi

# 删除补丁目录
rm -rf "$PATCH_DIR"

echo "✅ 卸载成功！"
echo "守护进程及本地汉化文件已全部清除。Antigravity 将在下次更新时恢复官方英文版。"
