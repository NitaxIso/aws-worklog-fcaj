const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const writes = [];
const preserved = new Map([['fcaj_report_bilingual_v25', 'preserve-me']]);
const context = vm.createContext({ console, URL, Map, localStorage: {getItem: k => preserved.get(k) || null, setItem: (k,v) => writes.push([k,v]), removeItem: k => {throw Error('Unexpected storage removal: '+k);}}, document: {addEventListener() {}, baseURI:'https://example.test/'}, location:{hash:''}, window: {addEventListener(){}}, fetch: async p => ({ok:true,text:async()=>fs.readFileSync(path.join(root,p),'utf8')}) });
vm.runInContext(fs.readFileSync(path.join(root,'static/report-runtime.js'),'utf8'),context);
(async()=>{await vm.runInContext('reportReady',context);
let port = fs.readFileSync(path.join(root,'static/fcaj-port.js'),'utf8');
port = port.replace(/\}\)\(\);\s*$/, 'globalThis.portCheck = {overview,worklog,proposal,events,evaluation};})();');
vm.runInContext(port,context);
for (const lang of ['vi','en']) {
 vm.runInContext(`app.currentLang='${lang}'`,context);
 assert.match(context.portCheck.overview(), /fc-dossier-grid/);
 assert.match(context.portCheck.proposal(), /fc-prop-risks/);
 for(let n=1;n<=12;n++) {
  vm.runInContext(`app.currentRoute='worklog/week-${n}'`,context);
  const html=context.portCheck.worklog();
  assert.match(html,/fc-week-detail/);
  assert.match(html,new RegExp('WEEK '+String(n).padStart(2,'0')));
 }
 for(const route of ['events','events/event-1','events/event-2','events/event-3','workshop','self-evaluation','feedback']) {
  vm.runInContext(`app.currentRoute='${route}'`,context);
  const html=route.startsWith('events')?context.portCheck.events():context.portCheck.evaluation();
  assert.ok(html.length>300,route);
  assert.ok(!html.includes('[object Object]'),route);
 }
}
assert.equal(preserved.get('fcaj_report_bilingual_v25'),'preserve-me');
assert.equal(writes.length,0,'read-only rendering must not write report state');
assert.ok(fs.readFileSync(path.join(root,'index.html'),'utf8').includes('static/fcaj-port.js'));
console.log('Native UI port: VI/EN overview, 12 weeks, proposal, event lists/details, workshop, assessment, feedback; storage preserved.');
const source = fs.readFileSync(path.join(root,'static/fcaj-port.js'),'utf8');
assert.match(source,/function settings\(/,'settings export view exists');
assert.match(source,/highlights:L\(/,'event labels translated');
assert.match(source,/data-export-backup/,'read-only backup available');
assert.match(source,/fc-progress-label.*textContent/,'breadcrumb localized on rerender');

assert.match(source,/querySelectorAll\('\.fc-article figure img'\)/,'blog image lightbox buttons wired');

})().catch(e=>{console.error(e);process.exitCode=1;});
