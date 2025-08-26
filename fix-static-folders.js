// fix-static-folders.js
import fs from 'fs';
import path from 'path';

const buildDir = './build';
const files = fs.readdirSync(buildDir);

// Trova tutti i file .html nella root della build
files.forEach(file => {
    if (file.endsWith('.html') && file !== 'index.html') {
        const base = file.replace('.html', '');
        const fromPath = path.join(buildDir, file);
        const targetDir = path.join(buildDir, base);
        const toPath = path.join(targetDir, 'index.html');

        // Crea la directory se non esiste
        if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir);
        }

        // Sposta il file
        fs.renameSync(fromPath, toPath);
        console.log(`✅ Moved ${file} → ${base}/index.html`);
    }
});
