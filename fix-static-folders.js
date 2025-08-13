// fix-static-folders.js
import fs from 'fs';
import path from 'path';

const langs = ['en', 'it']; // lingue che vuoi trasformare in cartelle

langs.forEach(lang => {
    const htmlFile = path.join('build', `${lang}.html`);
    const dir = path.join('build', lang);

    if (fs.existsSync(htmlFile)) {
        fs.mkdirSync(dir, { recursive: true });
        fs.renameSync(htmlFile, path.join(dir, 'index.html'));
        console.log(`✔ Spostato ${lang}.html in ${lang}/index.html`);
    } else {
        console.warn(`⚠ File ${lang}.html non trovato`);
    }
});
