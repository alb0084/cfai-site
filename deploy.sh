#!/bin/bash
set -e  # Exit immediately if a command exits with a non-zero status

SERVER_HOST="162.55.42.110"
DEPLOY_USER="cfai"
SSH_PORT=2222
REMOTE_PATH="/var/www/cfai.io"
BUILD_DIR="./build"

echo "📦 Build..."
rm -rf .svelte-kit "$BUILD_DIR"
npm run build

echo "🧹 Cleaning remote directory (excluding /scripts)..."
ssh -p "$SSH_PORT" "$DEPLOY_USER@$SERVER_HOST" "
  find '$REMOTE_PATH' -mindepth 1 \
    -not -path '$REMOTE_PATH/scripts' \
    -not -path '$REMOTE_PATH/scripts/*' \
    -exec rm -rf {} +
"

echo "⬆️ Uploading with rsync (preserving counter.txt)..."
rsync -avz --delete \
  --exclude='scripts/counter.txt' \
  -e "ssh -p $SSH_PORT" \
  "$BUILD_DIR/" "$DEPLOY_USER@$SERVER_HOST:$REMOTE_PATH/"

echo "✅ Deployment completed successfully (counter preserved)"
