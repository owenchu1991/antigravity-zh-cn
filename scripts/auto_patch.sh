#!/bin/bash
export PATH=/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH

ASAR_FILE="/Applications/Antigravity.app/Contents/Resources/app.asar"
TEMP_DIR="/tmp/antigravity_chinese_patch_tmp"
PAYLOAD_FILE="$HOME/.antigravity_chinese_patch/patch_payload.js"

# Check if the app is already patched
if grep -a -q "injectReactHook" "$ASAR_FILE"; then
    echo "$(date): Antigravity is already patched. Exiting."
    exit 0
fi

echo "$(date): Detected unpatched Antigravity. Applying Chinese localization patch..."

# Wait a moment to ensure any ongoing updates/writes to app.asar are fully completed by the updater
sleep 3

# Extract asar
rm -rf "$TEMP_DIR"
npx asar extract "$ASAR_FILE" "$TEMP_DIR"

if [ ! -f "$TEMP_DIR/dist/preload.js" ]; then
    echo "$(date): Error: preload.js not found in extracted asar."
    exit 1
fi

# Apply the patch payload
cat "$PAYLOAD_FILE" >> "$TEMP_DIR/dist/preload.js"

# Repack the asar file into /tmp to avoid any write locks in /Applications during packaging
rm -f "/tmp/app.asar"
npx asar pack "$TEMP_DIR" "/tmp/app.asar"

# Clean up extraction dir
rm -rf "$TEMP_DIR"

# Check if Antigravity is running and kill it BEFORE replacing the file
APP_WAS_RUNNING=0
if pgrep -x "Antigravity" > /dev/null; then
    echo "$(date): Antigravity is running. Killing it to release file locks..."
    APP_WAS_RUNNING=1
    pkill -9 -x "Antigravity"
    # Wait for the process to fully exit
    sleep 2
fi

# Now move the patched file into place.
# Use Finder via AppleScript to safely replace the file, bypassing macOS App Management restrictions for background processes
osascript -e 'tell application "Finder" to duplicate POSIX file "/tmp/app.asar" to POSIX file "/Applications/Antigravity.app/Contents/Resources/" with replacing'

if [ $? -ne 0 ]; then
    echo "$(date): Failed to replace $ASAR_FILE. Permission issue?"
    exit 1
fi

echo "$(date): Patch applied successfully."

# Restart Antigravity if it was running
if [ $APP_WAS_RUNNING -eq 1 ]; then
    echo "$(date): Restarting Antigravity..."
    open -a /Applications/Antigravity.app
fi
