#!/bin/bash
set -e

echo "开始安装 Antigravity 持续汉化插件..."

# 确保目标目录存在
PATCH_DIR="$HOME/.antigravity_chinese_patch"
mkdir -p "$PATCH_DIR"

# 复制核心文件
cp "src/patch_payload.js" "$PATCH_DIR/"
cp "scripts/auto_patch.sh" "$PATCH_DIR/"
chmod +x "$PATCH_DIR/auto_patch.sh"

# 生成 LaunchAgent plist (使用绝对路径)
PLIST_PATH="$HOME/Library/LaunchAgents/com.antigravity.autopatch.plist"

cat > "$PLIST_PATH" <<EOF
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.antigravity.autopatch</string>
    <key>ProgramArguments</key>
    <array>
        <string>/bin/bash</string>
        <string>$PATCH_DIR/auto_patch.sh</string>
    </array>
    <key>WatchPaths</key>
    <array>
        <string>/Applications/Antigravity.app/Contents/Resources</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
    <key>StandardOutPath</key>
    <string>$PATCH_DIR/autopatch.log</string>
    <key>StandardErrorPath</key>
    <string>$PATCH_DIR/autopatch.error.log</string>
</dict>
</plist>
EOF

# 加载守护进程
launchctl unload "$PLIST_PATH" 2>/dev/null || true
launchctl load -w "$PLIST_PATH"

echo "✅ 安装成功！"
echo "守护进程已启动，正在后台自动监控。无论应用何时更新，汉化均会自动保持。"
