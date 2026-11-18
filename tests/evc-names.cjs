const fs=require('fs'),assert=require('assert/strict');
const index=JSON.parse(fs.readFileSync('data/evc_index.json')).evcs;
const pages=JSON.parse(fs.readFileSync('data/evc_pages.json')).evcs;
for(const [code,name] of Object.entries({'132':'Plains Grassland','83':'Swampy Riparian Woodland','9':'Coastal Saltmarsh','73':'Rocky Outcrop Shrubland/Herbland Mosaic','103':'Riverine Chenopod Woodland','164':'Creekline Herb-rich Woodland'}))assert.equal(index.find(v=>v.code===code).name,name);
for(const p of pages){const i=index.find(v=>v.code===p.code);assert.equal(i.name,p.name);assert.equal(i.slug,p.slug);}
assert(!JSON.stringify(pages.find(v=>v.code==='132')).includes('Coastal Tussock'));
console.log('PASS benchmark names, index/page consistency and EVC 132 copy');

assert(pages.find(v=>v.code==='132').aliases.includes('132-coastal-tussock-grassland'));
