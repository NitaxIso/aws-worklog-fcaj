const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync('static/report-runtime.js', 'utf8');
const renderer = source.slice(source.indexOf('function renderBlogMarkdown('), source.length);
const context = { URL, document: { baseURI: 'https://example.test/reports/' }, escapeHtml: value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;') };
vm.createContext(context);
vm.runInContext(renderer, context);
for (let num = 1; num <= 3; num++) {
  const path = `content/3-BlogsPosted/3.${num}-Blog${num}/_index.vi.md`;
  const text = fs.readFileSync(path, 'utf8');
  const body = text.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '').trim();
  const html = context.renderBlogMarkdown(body, path);
  assert(body.length > 4000);
  assert(html.includes('<h1>') && html.includes('<h2>') && html.includes('<strong>'));
  assert(html.includes('NGUỒN THAM KHẢO'));
  for (const image of text.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)) assert(fs.existsSync(require('node:path').join(require('node:path').dirname(path), image[1])));
  console.log(`Blog ${num}: ${body.length} characters; headings, references and diagram OK`);
}
const hostile = context.renderBlogMarkdown('<script>alert(1)</script>\n\n[x](javascript:alert)', 'content/article.md');
assert(!hostile.includes('<script>') && !hostile.includes('href="javascript:'));
console.log('Safe Markdown rendering OK');

// Exercise real loader selection and cache isolation, not just the renderer.
const requested=[];
const loaderContext=vm.createContext({console,URL,Map,localStorage:{getItem:()=>null},location:{hash:''},window:{addEventListener(){}},fetch:async path=>{requested.push(path);return {ok:true,text:async()=>fs.readFileSync(path,'utf8')};}});
vm.runInContext(source+';globalThis.ready=reportReady;globalThis.paths=reportPaths;',loaderContext);
(async()=>{
 await loaderContext.ready;
 for(const path of loaderContext.paths)assert(fs.existsSync(path),path);
 for(let num=1;num<=3;num++)for(const lang of ['vi','en']){
  const article=await loaderContext.loadRepositoryBlog(num,lang);
  assert.equal(article.path,`content/3-BlogsPosted/3.${num}-Blog${num}/${lang==='en'?'_index.md':'_index.vi.md'}`);
  const html=context.renderBlogMarkdown(article.body,article.path);
  assert(article.body.length>4000);
  assert(html.includes(lang==='en'?'REFERENCES':'NGUỒN THAM KHẢO'));
  assert(!html.includes('1drv.ms'),'Source document UI link stays hidden');
 }
 assert.equal(requested.filter(p=>p.includes('3-BlogsPosted/3.1-Blog1/')).length,4,'manifest and language-specific loader fetch both sources');
 assert(!source.includes('5.2-Prerequi'+'ste')&&!source.includes('create-interface-en'+'point'));
 console.log('Bilingual article loader, cache isolation, manifest paths and hidden provenance links OK');
})().catch(error=>{console.error(error);process.exitCode=1;});
