document.documentElement.classList.add('js');
const imageDialog=document.querySelector<HTMLDialogElement>('#image-dialog')!;
const filmDialog=document.querySelector<HTMLDialogElement>('#film-dialog')!;
let opener:HTMLElement|null=null;
function open(dialog:HTMLDialogElement,source:HTMLElement){opener=source;dialog.showModal();dialog.scrollTop=0;document.body.style.overflow='hidden';}
for(const link of document.querySelectorAll<HTMLAnchorElement>('[data-image]'))link.addEventListener('click',event=>{
 event.preventDefault();const image=document.querySelector<HTMLImageElement>('#large-image')!;
 image.src=link.href;image.alt=link.dataset.caption||'';document.querySelector('#image-caption')!.textContent=image.alt;open(imageDialog,link);
});
for(const button of document.querySelectorAll<HTMLButtonElement>('[data-film]'))button.addEventListener('click',()=>{
 const source=document.getElementById(`notes-${button.dataset.film}`)!;
 const content=document.querySelector('#film-detail')!;content.replaceChildren(...Array.from(source.children).filter(e=>e.tagName!=='SUMMARY').map(e=>e.cloneNode(true)));open(filmDialog,button);
});
for(const dialog of [imageDialog,filmDialog]){
 dialog.querySelector('button')!.addEventListener('click',()=>dialog.close());
 dialog.addEventListener('close',()=>{document.body.style.overflow='';opener?.focus();});
 dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
}
