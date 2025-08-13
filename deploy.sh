.&set -e

SERVER_HOST="162.55.42.110"
DEPLOY_USER="cfai"
SSH_PORT=2222
REMOTE_PATH="/var/www/cfai.io"
BUILD_DIR="./build"

echo "📦 Build..."
rm -rf .svelte-kit "$BUILD_DIR"
npm run build

echo "🧹 Pulizia remota (contenuto)..."
ssh -p "$SSH_PORT" "$DEPLOY_USER@$SERVER_HOST" "mkdir -p '$REMOTE_PATH' && rm -rf '$REMOTE_PATH'/*"

echo "⬆️ Upload con rsync..."
# Copia TUTTO il contenuto di build/ (file + cartelle)
rsync -avz --delete -e "ssh -p $SSH_PORT" "$BUILD_DIR/" "$DEPLOY_USER@$SERVER_HOST:$REMOTE_PATH/"

echo "✅ Done."
