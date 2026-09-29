import fs from 'node:fs';import path from 'node:path';
const root=path.resolve('dist');let checked=0;
function walk(dir){for(const file of fs.readdirSync(dir)){const p=path.join(dir,file);if(fs.statSync(p).isDirectory())walk(p);else if(file.endsWith('.html')){const html=fs.readFileSync(p,'utf8');for(const m of html.matchAll(/(?:src|href)="([^"#]+)"/g)){let u=m[1].split('#')[0].split('?')[0];if(/^(https?:|mailto:|data:|tel:)/.test(u))continue;let dest=u.startsWith('/')?path.join(root,u):path.resolve(path.dirname(p),u);if(!fs.existsSync(dest))throw Error(`Broken local link in ${p}: ${u}`);}checked++;}}}
walk(root);for(const route of ['index.html','about/index.html','research/index.html','film/index.html','404.html','sitemap.xml'])if(!fs.existsSync(path.join(root,route)))throw Error(`Missing route: ${route}`);
console.log(`Verified ${checked} HTML files and all local source/href references.`);
