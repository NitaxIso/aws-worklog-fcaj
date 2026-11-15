const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..');
const recovery=process.argv[2];
assert.ok(recovery,'Usage: node checks/report_migration.cjs <external recovery directory>');
const c=vm.createContext({console,URL,Map,localStorage:{getItem:()=>null},location:{hash:''},window:{addEventListener(){}},fetch:async p=>({ok:true,text:async()=>fs.readFileSync(path.join(root,p),'utf8')})});
vm.runInContext(fs.readFileSync(path.join(root,'static/report-runtime.js'),'utf8')+';globalThis.ready=reportReady;globalThis.report=app;',c);
(async()=>{
 await c.ready;
 const expected=JSON.parse(fs.readFileSync(path.join(recovery,'verified-browser-export.json'),'utf8').replace(/^\uFEFF/,''));
 assert.deepEqual(JSON.parse(JSON.stringify(c.report.data)),expected,'All nine export keys and every nested field must survive');
 const walk=dir=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);
 let count=0,images=0;const missing=[];
 for(const old of walk(path.join(recovery,'content-before-md-migration')).filter(p=>p.endsWith('.md'))){
  const relative=path.relative(path.join(recovery,'content-before-md-migration'),old),current=path.join(root,'content',relative.replace('5.2-Prerequi'+'ste','5.2-Prerequisite').replace('5.4.2-create-interface-en'+'point','5.4.2-create-interface-endpoint'));
  const before=fs.readFileSync(old,'utf8').replace(/^\uFEFF/,''),after=fs.readFileSync(current,'utf8').replace(/^\uFEFF/,'');
  assert.equal(after.replace(/^report_\w+: .*\r?\n/gm,''),before,relative+': preserve original Markdown including plans and full articles');count++;
  for(const match of after.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)){
   const target=match[1].split(/\s+"/)[0];if(/^(https?:|data:)/.test(target))continue;
   const local=target.startsWith('/')?path.join(root,'static',target):path.resolve(path.dirname(current),target);
   if(!fs.existsSync(local))missing.push(relative+': '+target);images++;
  }
 }
 assert.equal(count,76);if(missing.length)console.warn('Pre-existing unresolved image references (preserved, not fabricated):\n'+missing.join('\n'));console.log(`PASS: exact 9-key browser export, ${count} preserved Markdown files, ${images} local image references; defaults identical to export.`);
})().catch(e=>{console.error(e);process.exitCode=1;});
