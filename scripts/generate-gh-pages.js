import fs from 'node:fs';
import path from 'node:path';

const publicDir = path.resolve('.output/public');
const assetsDir = path.join(publicDir, 'assets');

if (!fs.existsSync(assetsDir)) {
  console.error('Assets directory not found at', assetsDir);
  process.exit(1);
}

const files = fs.readdirSync(assetsDir);
const cssFile = files.find(f => f.startsWith('styles-') && f.endsWith('.css'));

// Select the main index entry file (the largest index-*.js bundle)
const jsFiles = files.filter(f => f.startsWith('index-') && f.endsWith('.js'));
let jsFile = jsFiles[0];
if (jsFiles.length > 1) {
  jsFile = jsFiles.reduce((prev, curr) => {
    const prevSize = fs.statSync(path.join(assetsDir, prev)).size;
    const currSize = fs.statSync(path.join(assetsDir, curr)).size;
    return currSize > prevSize ? curr : prev;
  });
}

console.log(`Found CSS: ${cssFile}`);
console.log(`Found JS Entry: ${jsFile}`);

const base = '/heartfelt-companion/';

const htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Horizon Bound — Curated Travel Experiences</title>
    <meta name="description" content="Horizon Bound crafts unforgettable group, domestic and international trips with handpicked itineraries." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
    ${cssFile ? `<link rel="stylesheet" href="${base}assets/${cssFile}" />` : ''}
    ${jsFile ? `<script type="module" src="${base}assets/${jsFile}"></script>` : ''}
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`;

fs.writeFileSync(path.join(publicDir, 'index.html'), htmlContent);
fs.writeFileSync(path.join(publicDir, '404.html'), htmlContent);

console.log('Successfully generated index.html and 404.html in .output/public for GitHub Pages static hosting.');
