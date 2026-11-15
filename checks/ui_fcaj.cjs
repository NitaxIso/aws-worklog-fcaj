const assert=require('node:assert/strict'),fs=require('node:fs');
const html=fs.readFileSync('index.html','utf8'),css=fs.readFileSync('static/css/fcaj-port.css','utf8');
assert(html.includes('static/report-runtime.js')&&html.includes('static/fcaj-port.js'));
assert(!html.includes('view-')&&!html.includes('app.js')&&!html.includes('styles.css'));
assert(css.includes(':focus-visible')&&css.includes('@media'));
for(const old of ['app.js','styles.css','static/css/ui-fcaj.css'])assert(!fs.existsSync(old));
assert(!html.includes('/src/main.tsx'));
console.log('PASS: minimal native shell, accessible responsive CSS, legacy DOM/scripts/styles removed');
