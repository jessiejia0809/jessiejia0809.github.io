const $=id=>document.getElementById(id),canvas=document.querySelector('canvas'),gl=canvas.getContext('webgl',{antialias:true});
const mobile=matchMedia('(pointer:coarse)').matches||innerWidth<=700;
const mobileBatches=[];
const panel=document.querySelector('aside'),lines=[],dots=[],target=[0,2,0];
let loaded=false,count,program,drag,yaw=.48,pitch=.68,zoom=1,active=-1,pinned=false,mode='Blender',timer,frame;
function markConcept(i){Array.from($('concepts').children).forEach((b,j)=>b.setAttribute('aria-pressed',String(i===j)))}
function dismiss(){markConcept(-1);clearTimeout(timer);active=-1;pinned=false;panel.hidden=true;dots.forEach(b=>b.classList.remove('sel'))}
function delayedClose(){clearTimeout(timer);if(!pinned)timer=setTimeout(dismiss,280)}
function preview(i){markConcept(i);clearTimeout(timer);active=i;panel.hidden=false;$('name').textContent=shots[i].name;dots.forEach((b,j)=>b.classList.toggle('sel',i===j));
 const src=shots[i].images[mode];$('plate').hidden=!src;$('missing').hidden=!!src;if(src){$('plate').src=src;$('plate').alt=shots[i].name+' · '+mode}else $('missing').textContent='No matched concept yet';
 document.querySelectorAll('nav button').forEach(b=>b.classList.toggle('active',b.textContent===mode))}
for(const m of ['Concept','Blender','Atlas']){const b=document.createElement('button');b.textContent=m;b.onclick=()=>{mode=m;preview(active)};document.querySelector('nav').append(b)}
panel.onpointerenter=()=>clearTimeout(timer);panel.onpointerleave=delayedClose;$('close').onclick=dismiss;
function markers(){if(document.documentElement.classList.contains("card"))return;dots.length=lines.length=0;$('dots').replaceChildren();document.querySelector('svg').replaceChildren();shots.forEach((s,i)=>{const b=document.createElement('button');b.className='dot';b.setAttribute('aria-label','Compare '+s.name);b.onpointerenter=()=>{if(!pinned)preview(i)};b.onpointerleave=delayedClose;b.onfocus=()=>{if(!pinned)preview(i)};b.onclick=()=>{pinned=true;preview(i)};$('dots').append(b);dots.push(b);
 const line=document.createElementNS('http://www.w3.org/2000/svg','line');document.querySelector('svg').append(line);lines.push(line)});} markers();
const peek=$('peek'),railList=$('concepts');
function hidePeek(){peek.classList.remove('open')}
function showPeek(button){
 if(!button || !railList.contains(button))return hidePeek();
 const shot=shots[Number(button.dataset.index)];
 peek.querySelector('img').src=shot.thumbnail;
 peek.querySelector('figcaption').textContent=shot.name;
 const rail=$('overview').getBoundingClientRect();
 const top=button.getBoundingClientRect().top-rail.top;
 peek.style.top=Math.max(0,Math.min(top-35,rail.height-peek.offsetHeight))+'px';
 peek.classList.add('open');
}
let pointer=null;
railList.onpointermove=e=>{
 if(e.pointerType==='touch')return;
 pointer=[e.clientX,e.clientY];showPeek(e.target.closest('button'));
};
railList.onpointerleave=()=>{pointer=null;hidePeek()};
railList.onscroll=()=>{if(pointer)showPeek(document.elementFromPoint(...pointer)?.closest('button'))};
railList.onfocusin=e=>showPeek(e.target.closest('button'));
railList.onfocusout=hidePeek;
function overview(){
 hidePeek();
 const rail=$('overview');
 rail.hidden=document.documentElement.classList.contains('card');
 railList.replaceChildren();
 if(rail.hidden)return;
 shots.forEach((shot,i)=>{
  const button=document.createElement('button');
  button.dataset.index=i;
  button.setAttribute('aria-label',shot.name);
  button.setAttribute('aria-pressed','false');
  button.onclick=()=>{hidePeek();pinned=true;mode='Concept';preview(i)};
  railList.append(button);
 });
}
overview();
document.onkeydown=e=>{if(e.key==='Escape'){hidePeek();dismiss()}};
canvas.onpointerdown=e=>{dismiss();drag=[e.clientX,e.clientY];canvas.setPointerCapture(e.pointerId)};
canvas.onpointermove=e=>{if(!drag)return;yaw-=(e.clientX-drag[0])*.006;pitch=Math.max(.22,Math.min(1.35,pitch+(e.clientY-drag[1])*.005));drag=[e.clientX,e.clientY];schedule()};canvas.onpointerup=canvas.onpointercancel=()=>drag=null;
canvas.addEventListener('wheel',e=>{e.preventDefault();if(new URLSearchParams(location.search).has('portfolio')){parent.postMessage({type:'lou-preview-scroll',delta:e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?innerHeight:1)},location.origin);return;}zoom=Math.max(.7,Math.min(1.8,zoom*Math.exp(-Math.sign(e.deltaY)*.045)));schedule()},{passive:false});
function schedule(){if(frame)return;frame=requestAnimationFrame(()=>{frame=0;draw()})}
const dot=(a,b)=>a.reduce((v,x,i)=>v+x*b[i],0);
function draw(){const width=canvas.clientWidth,height=canvas.clientHeight,aspect=width/height,s=2.45,radius=282*Math.max(1,1.42/aspect)/zoom;
 const forward=[-Math.sin(yaw)*Math.cos(pitch),-Math.sin(pitch),-Math.cos(yaw)*Math.cos(pitch)],right=[Math.cos(yaw),0,-Math.sin(yaw)],up=[-Math.sin(yaw)*Math.sin(pitch),Math.cos(pitch),-Math.cos(yaw)*Math.sin(pitch)],eye=target.map((v,i)=>v-forward[i]*radius);
 const placed=[];if(dots.length)shots.forEach((shot,i)=>{const v=shot.camera.extrinsics.position.map((x,j)=>x-eye[j]),d=dot(v,forward),x=width/2+height/2*s*dot(v,right)/d,y=height/2-height/2*s*dot(v,up)/d;
 const edge=(n,size,pad)=>Math.max(pad,Math.min(size-pad,n));const ax=edge(x,width,22),ay=Math.max(76,Math.min(height-52,y));let sx=ax,sy=ay;for(let j=0;placed.some(([a,b])=>Math.hypot(a-sx,b-sy)<25)&&j<150;j++){const r=4*Math.sqrt(j+1);sx=edge(ax+r*Math.cos(j*2.4),width,18);sy=Math.max(68,Math.min(height-42,ay+r*Math.sin(j*2.4)))}placed.push([sx,sy]);dots[i].style.left=sx+'px';dots[i].style.top=sy+'px';for(const [k,t] of Object.entries({x1:ax,y1:ay,x2:sx,y2:sy}))lines[i].setAttribute(k,t)});
 if(!loaded)return;if(canvas.width!==width||canvas.height!==height){canvas.width=width;canvas.height=height}gl.viewport(0,0,width,height);
 for(const [name,v] of Object.entries({eye,right,up,forward}))gl.uniform3fv(gl.getUniformLocation(program,name),v);
 gl.uniform2f(gl.getUniformLocation(program,'scale'),s/aspect,s);gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);if(mobileBatches.length){
  for(const batch of mobileBatches){
   gl.bindBuffer(gl.ARRAY_BUFFER,batch.vertices);gl.vertexAttribPointer(0,3,gl.SHORT,false,10,0);gl.vertexAttribPointer(1,4,gl.UNSIGNED_BYTE,true,10,6);
   gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,batch.indices);gl.drawElements(gl.TRIANGLES,batch.count,gl.UNSIGNED_SHORT,0);
  }
 }else gl.drawArrays(gl.TRIANGLES,0,count)}
async function init(){if(!gl)throw Error('WebGL unavailable · use the image comparisons');
 function shader(type,src){const s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(s));return s}
 // Keep the entire orbit visible even when a narrow portrait viewport pushes the camera far back.
 const clipDepth='float clipDepth(float d){const float nearPlane=1.;const float farPlane=8192.;return ((farPlane+nearPlane)*d-2.*farPlane*nearPlane)/(farPlane-nearPlane);}';
 function link(vertex,fragment){const p=gl.createProgram();gl.attachShader(p,shader(gl.VERTEX_SHADER,vertex));gl.attachShader(p,shader(gl.FRAGMENT_SHADER,fragment));gl.bindAttribLocation(p,0,'p');gl.bindAttribLocation(p,1,'color');gl.linkProgram(p);if(!gl.getProgramParameter(p,gl.LINK_STATUS))throw Error(gl.getProgramInfoLog(p));return p}
 if(mobile){
  program=link(clipDepth+'attribute vec3 p;attribute vec4 color;uniform vec3 eye,right,up,forward;uniform vec2 scale;varying lowp vec4 c;varying mediump vec2 ground;void main(){vec3 v=p-eye;float d=dot(v,forward);gl_Position=vec4(dot(v,right)*scale.x,dot(v,up)*scale.y,clipDepth(d),d);c=color;ground=p.xz;}','precision mediump float;varying lowp vec4 c;varying mediump vec2 ground;void main(){if(length(ground/vec2(105.,98.))>1.)discard;gl_FragColor=vec4(c.rgb*vec3(1.12,1.08,1.02),1.);}');
  gl.useProgram(program);
  const response=await fetch('mobile.mesh');
  if(!response.ok)throw Error('Mobile model unavailable');
  const data=await response.arrayBuffer(),view=new DataView(data);
  function upload(target,offset,length){
   const buffer=gl.createBuffer();gl.bindBuffer(target,buffer);gl.bufferData(target,new Uint8Array(data,offset,length),gl.STATIC_DRAW);return buffer;
  }
  for(let offset=0;offset<data.byteLength;){
   const vertexCount=view.getUint32(offset,true),count=view.getUint32(offset+4,true);offset+=8;
   const vertices=upload(gl.ARRAY_BUFFER,offset,vertexCount*10);offset+=vertexCount*10;
   const indices=upload(gl.ELEMENT_ARRAY_BUFFER,offset,count*2);offset+=count*2;
   mobileBatches.push({vertices,indices,count});
  }
  gl.enableVertexAttribArray(0);gl.enableVertexAttribArray(1);gl.enable(gl.DEPTH_TEST);
  loaded=true;draw();$('status').textContent=dots.length?'Drag to rotate · Tap a shot to compare':'Drag to rotate';return;
 }
 const light='vec3 lightSpace(vec3 p){return vec3(dot(p,vec3(.819,0.,.574))/160.,dot(p,vec3(.394,.728,-.563))/160.,-dot(p,vec3(-.418,.686,.596))/220.);}';
 const shadow=link('attribute vec3 p;'+light+'void main(){gl_Position=vec4(lightSpace(p),1.);}', 'precision highp float;void main(){float z=gl_FragCoord.z;gl_FragColor=vec4(floor(z*255.)/255.,fract(z*255.),0.,1.);}');
 program=link(clipDepth+'attribute vec3 p;attribute vec4 color;varying lowp vec4 c;uniform vec3 eye,right,up,forward;uniform vec2 scale;varying highp vec3 world,lightUV;'+light+'void main(){world=p;lightUV=.5+.5*lightSpace(p);vec3 v=p-eye;float d=dot(v,forward);gl_Position=vec4(dot(v,right)*scale.x,dot(v,up)*scale.y,clipDepth(d),d);c=color;}',
 `precision highp float;varying lowp vec4 c;varying highp vec3 world,lightUV;uniform sampler2D depthMap;
 void main(){if(length(world.xz/vec2(105.,98.))>1.)discard;
 float lit=0.;for(int i=-1;i<=1;i++){for(int j=-1;j<=1;j++){vec2 rg=texture2D(depthMap,lightUV.xy+vec2(float(i),float(j))/2048.).rg;lit+=step(lightUV.z-.00065,rg.x+rg.y/255.)/9.;}}
 vec3 base=c.rgb;float grain=sin(world.x*4.3+world.z*2.8)*sin(world.z*3.1)*.012;
 vec3 daylight=mix(vec3(.69,.73,.78),vec3(1.17,1.11,1.02),lit);
 gl_FragColor=vec4((base+grain)*daylight+vec3(.034,.027,.021),1.);}`);gl.useProgram(program);
 const file=document.documentElement.classList.contains('card')?'compound-card.bin':'compound-web.bin';
 const response=await fetch(file);
 if(!response.ok)throw Error('Model download failed. Reload to try again.');
 const total=Number(response.headers.get('Content-Length'));
 let received=0;
 const progress=new TransformStream({transform(chunk,controller){
  received+=chunk.byteLength;
  $('status').textContent=total?'Loading model · '+Math.min(100,Math.round(100*received/total))+'%':'Loading model · '+(received/1e6).toFixed(1)+' MB';
  controller.enqueue(chunk);
 }});
 const stream=response.body.pipeThrough(progress).pipeThrough(new DecompressionStream('gzip'));const data=await new Response(stream).arrayBuffer();count=data.byteLength/16;gl.bindBuffer(gl.ARRAY_BUFFER,gl.createBuffer());gl.bufferData(gl.ARRAY_BUFFER,data,gl.STATIC_DRAW);
 for(const [name,n,type,normalized,start] of [['p',3,gl.FLOAT,false,0],['color',4,gl.UNSIGNED_BYTE,true,12]]){const loc=gl.getAttribLocation(program,name);gl.enableVertexAttribArray(loc);gl.vertexAttribPointer(loc,n,type,normalized,16,start)}
 gl.enable(gl.DEPTH_TEST);
 const tex=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,tex);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,2048,2048,0,gl.RGBA,gl.UNSIGNED_BYTE,null);
 for(const par of [gl.TEXTURE_MIN_FILTER,gl.TEXTURE_MAG_FILTER])gl.texParameteri(gl.TEXTURE_2D,par,gl.NEAREST);
 const fb=gl.createFramebuffer();gl.bindFramebuffer(gl.FRAMEBUFFER,fb);gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,tex,0);const rb=gl.createRenderbuffer();gl.bindRenderbuffer(gl.RENDERBUFFER,rb);gl.renderbufferStorage(gl.RENDERBUFFER,gl.DEPTH_COMPONENT16,2048,2048);gl.framebufferRenderbuffer(gl.FRAMEBUFFER,gl.DEPTH_ATTACHMENT,gl.RENDERBUFFER,rb);
 if(gl.checkFramebufferStatus(gl.FRAMEBUFFER)!==gl.FRAMEBUFFER_COMPLETE)throw Error('Shadow buffer unavailable');
 gl.useProgram(shadow);gl.viewport(0,0,2048,2048);gl.clearColor(1,1,1,1);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);gl.drawArrays(gl.TRIANGLES,0,count);gl.bindFramebuffer(gl.FRAMEBUFFER,null);gl.useProgram(program);loaded=true;draw();$('status').textContent=(dots.length?'Drag to rotate · Scroll to zoom · Explore the camera dots':'Drag to rotate · Scroll to zoom')}
function fallback(){
 loaded=false;document.documentElement.classList.add('fallback');$('poster').hidden=false;
 $('status').textContent=dots.length?'Concept view · Tap a line on the right to compare shots':'Concept view · Open study to compare shots';
}
canvas.addEventListener('webglcontextlost',fallback);
draw();init().catch(fallback);window.addEventListener('resize',schedule);
