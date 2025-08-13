$SERVER_HOST = "162.55.42.110"
$DEPLOY_USER = "cfai"
$SSH_PORT    = 2222
$REMOTE_PATH = "/var/www/cfai.io"
$BUILD_DIR   = "./build"

Write-Host "Build..."
Remove-Item -Recurse -Force ".svelte-kit", $BUILD_DIR -ErrorAction SilentlyContinue
npm run build

Write-Host "Pulizia remota (contenuto)..."
ssh -p $SSH_PORT ("$DEPLOY_USER@$SERVER_HOST") "mkdir -p '$REMOTE_PATH' && rm -rf '$REMOTE_PATH'/*"

Write-Host "Upload con scp..."
# Copia TUTTO il contenuto di build/ (file + cartelle)
scp -P $SSH_PORT -C -r "$BUILD_DIR/*" ("$DEPLOY_USER@$SERVER_HOST" + ":" + $REMOTE_PATH + "/")

Write-Host "Done."
