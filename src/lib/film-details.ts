import type {CollectionEntry} from 'astro:content';
export function hasFilmDetails(film: CollectionEntry<'films'>) {
 if(film.id==='cornell-hockey')return false;
 const d=film.data;
 return film.id==='zebra'||Boolean(d.localVideo)||d.gallery.filter(f=>f.visible).length>1||(d.festivals?.length??0)>2||d.process.some(p=>!/forthcoming/i.test(p.note))||Boolean(film.body&&film.body.trim().length>120&&!/forthcoming/i.test(film.body));
}
