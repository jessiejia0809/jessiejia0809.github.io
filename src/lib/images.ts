import type { ImageMetadata } from 'astro';
const images=import.meta.glob<{default:ImageMetadata}>('../assets/images/**/*.{png,jpg,jpeg,webp,avif}',{eager:true});
export function resolveImage(name:string):ImageMetadata {
 const image=images[`../assets/images/${name}`];
 if(!image)throw Error(`Missing image "${name}". Add it to src/assets/images or correct the content file.`);
 return image.default;
}
