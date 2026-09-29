import fs from 'node:fs';import assert from 'node:assert/strict';import {spawnSync} from 'node:child_process';import YAML from 'yaml';
const paths=['content/home.yml','content/about.md','content/films/zebra.md','content/films/sugarfree.md','content/research/coil.md'];
const originals=new Map(paths.map(p=>[p,fs.readFileSync(p,'utf8')]));
const fixture='content/research/editing-test.md';assert(!fs.existsSync(fixture));
function write(p,s){fs.writeFileSync(p,s)}
function front(p,change){let source=fs.readFileSync(p,'utf8');let [,header,body]=source.split(/^---\s*$/m);let data=YAML.parse(header);change(data);write(p,`---\n${YAML.stringify(data)}---\n${body}`);}
function build(ok=true){const r=spawnSync('npm',['run','build'],{encoding:'utf8',maxBuffer:10e6});if((r.status===0)!==ok)throw Error(r.stdout+r.stderr);return r.stdout+r.stderr;}
try{
 const home=YAML.parse(originals.get(paths[0]));home.image='portrait.webp';home.alt='Editing workflow test';write(paths[0],YAML.stringify(home));
 write(paths[1],originals.get(paths[1])+'\nEditing workflow biography check.\n');
 front(paths[2],d=>{d.gallery[0].visible=false;d.gallery.reverse();});front(paths[3],d=>{d.order=0;});front(paths[4],d=>{d.draft=true;});
 write(fixture,'---\ntitle: PRIVATE DRAFT SENTINEL\ngroup: craft\norder: 99\ndraft: true\n---\nDraft body never published.\n');
 build();let film=fs.readFileSync('dist/film/index.html','utf8');let research=fs.readFileSync('dist/research/index.html','utf8');
 assert(fs.readFileSync('dist/index.html','utf8').includes('Editing workflow test'));
 assert(fs.readFileSync('dist/about/index.html','utf8').includes('Editing workflow biography check.'));
 assert(film.indexOf('id="sugarfree"')<film.indexOf('id="zebra"'));
 assert(!film.includes('A figure beside the lake at sunset.'));
 assert(film.indexOf('Zebra — A conversation at a party.')<film.indexOf('Zebra — An intimate moment'));
 assert(!research.includes('PRIVATE DRAFT SENTINEL'));assert(!research.includes('Correspondence-Oriented Imitation Learning'));
 console.log('PASS: text/image swaps, gallery visibility/order, film order and project drafts.');
 for(const [p,s] of originals)write(p,s);fs.unlinkSync(fixture);
 const missing=YAML.parse(originals.get(paths[0]));missing.image='missing-file.webp';write(paths[0],YAML.stringify(missing));assert(build(false).includes('Missing image'));write(paths[0],originals.get(paths[0]));
 front(paths[2],d=>{delete d.title;});assert(/title/.test(build(false)));write(paths[2],originals.get(paths[2]));
 console.log('PASS: missing assets and required metadata produce build failures.');
}finally{for(const [p,s] of originals)write(p,s);if(fs.existsSync(fixture))fs.unlinkSync(fixture);build();}
