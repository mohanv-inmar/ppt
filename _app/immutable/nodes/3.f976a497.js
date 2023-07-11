import{s as de,c as Rn,u as Tn,g as Ln,d as Cn,n as Mt,o as Mn}from"../chunks/scheduler.e108d1fd.js";import{S as ue,i as he,g as J,h as Z,j as Ee,f as T,k as I,a as M,d as St,t as Et,r as Rt,s as tt,u as Tt,c as et,v as Lt,w as Ct,z as G,x as Pn,y as Nn}from"../chunks/index.7e6a41e6.js";const In=!1,Ti=Object.freeze(Object.defineProperty({__proto__:null,ssr:In},Symbol.toStringTag,{value:"Module"}));/*!
* reveal.js 4.5.0
* https://revealjs.com
* MIT licensed
*
* Copyright (C) 2011-2023 Hakim El Hattab, https://hakim.se
*/const Jt=(g,t)=>{for(let e in t)g[e]=t[e];return g},K=(g,t)=>Array.from(g.querySelectorAll(t)),we=(g,t,e)=>{e?g.classList.add(t):g.classList.remove(t)},Yt=g=>{if(typeof g=="string"){if(g==="null")return null;if(g==="true")return!0;if(g==="false")return!1;if(g.match(/^-?[\d\.]+$/))return parseFloat(g)}return g},jt=(g,t)=>{g.style.transform=t},ce=(g,t)=>{let e=g.matches||g.matchesSelector||g.msMatchesSelector;return!(!e||!e.call(g,t))},gt=(g,t)=>{if(typeof g.closest=="function")return g.closest(t);for(;g;){if(ce(g,t))return g;g=g.parentNode}return null},_n=(g,t,e,n="")=>{let i=g.querySelectorAll("."+e);for(let o=0;o<i.length;o++){let c=i[o];if(c.parentNode===g)return c}let u=document.createElement(t);return u.className=e,u.innerHTML=n,g.appendChild(u),u},Ae=g=>{let t=document.createElement("style");return t.type="text/css",g&&g.length>0&&(t.styleSheet?t.styleSheet.cssText=g:t.appendChild(document.createTextNode(g))),document.head.appendChild(t),t},Qe=()=>{let g={};location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi,t=>{g[t.split("=").shift()]=t.split("=").pop()});for(let t in g){let e=g[t];g[t]=Yt(unescape(e))}return g.dependencies!==void 0&&delete g.dependencies,g},$n=(g,t=0)=>{if(g){let e,n=g.style.height;return g.style.height="0px",g.parentNode.style.height="auto",e=t-g.parentNode.offsetHeight,g.style.height=n+"px",g.parentNode.style.removeProperty("height"),e}return t},zn={mp4:"video/mp4",m4a:"video/mp4",ogv:"video/ogg",mpeg:"video/mpeg",webm:"video/webm"},on=navigator.userAgent,Zt=/(iphone|ipod|ipad|android)/gi.test(on)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,ln=/android/gi.test(on);var cn={};Object.defineProperty(cn,"__esModule",{value:!0});var Ge=Object.assign||function(g){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(g[n]=e[n])}return g},Hn=cn.default=function(g){if(g){var t=function(k){return[].slice.call(k)},e=0,n=1,i=2,u=3,o=[],c=null,d="requestAnimationFrame"in g?function(){g.cancelAnimationFrame(c),c=g.requestAnimationFrame(function(){return y(o.filter(function(k){return k.dirty&&k.active}))})}:function(){},w=function(k){return function(){o.forEach(function(b){return b.dirty=k}),d()}},y=function(k){k.filter(function(E){return!E.styleComputed}).forEach(function(E){E.styleComputed=p(E)}),k.filter(j).forEach(B);var b=k.filter(S);b.forEach(R),b.forEach(function(E){B(E),A(E)}),b.forEach(at)},A=function(k){return k.dirty=e},R=function(k){k.availableWidth=k.element.parentNode.clientWidth,k.currentWidth=k.element.scrollWidth,k.previousFontSize=k.currentFontSize,k.currentFontSize=Math.min(Math.max(k.minSize,k.availableWidth/k.currentWidth*k.previousFontSize),k.maxSize),k.whiteSpace=k.multiLine&&k.currentFontSize===k.minSize?"normal":"nowrap"},S=function(k){return k.dirty!==i||k.dirty===i&&k.element.parentNode.clientWidth!==k.availableWidth},p=function(k){var b=g.getComputedStyle(k.element,null);k.currentFontSize=parseFloat(b.getPropertyValue("font-size")),k.display=b.getPropertyValue("display"),k.whiteSpace=b.getPropertyValue("white-space")},j=function(k){var b=!1;return!k.preStyleTestCompleted&&(/inline-/.test(k.display)||(b=!0,k.display="inline-block"),k.whiteSpace!=="nowrap"&&(b=!0,k.whiteSpace="nowrap"),k.preStyleTestCompleted=!0,b)},B=function(k){k.element.style.whiteSpace=k.whiteSpace,k.element.style.display=k.display,k.element.style.fontSize=k.currentFontSize+"px"},at=function(k){k.element.dispatchEvent(new CustomEvent("fit",{detail:{oldValue:k.previousFontSize,newValue:k.currentFontSize,scaleFactor:k.currentFontSize/k.previousFontSize}}))},W=function(k,b){return function(){k.dirty=b,k.active&&d()}},f=function(k){return function(){o=o.filter(function(b){return b.element!==k.element}),k.observeMutations&&k.observer.disconnect(),k.element.style.whiteSpace=k.originalStyle.whiteSpace,k.element.style.display=k.originalStyle.display,k.element.style.fontSize=k.originalStyle.fontSize}},H=function(k){return function(){k.active||(k.active=!0,d())}},q=function(k){return function(){return k.active=!1}},F=function(k){k.observeMutations&&(k.observer=new MutationObserver(W(k,n)),k.observer.observe(k.element,k.observeMutations))},ot={minSize:16,maxSize:512,multiLine:!0,observeMutations:"MutationObserver"in g&&{subtree:!0,childList:!0,characterData:!0}},it=null,D=function(){g.clearTimeout(it),it=g.setTimeout(w(i),X.observeWindowDelay)},nt=["resize","orientationchange"];return Object.defineProperty(X,"observeWindow",{set:function(k){var b=(k?"add":"remove")+"EventListener";nt.forEach(function(E){g[b](E,D)})}}),X.observeWindow=!0,X.observeWindowDelay=100,X.fitAll=w(u),X}function $(k,b){var E=Ge({},ot,b),vt=k.map(function(mt){var dt=Ge({},E,{element:mt,active:!0});return function(ft){ft.originalStyle={whiteSpace:ft.element.style.whiteSpace,display:ft.element.style.display,fontSize:ft.element.style.fontSize},F(ft),ft.newbie=!0,ft.dirty=!0,o.push(ft)}(dt),{element:mt,fit:W(dt,u),unfreeze:H(dt),freeze:q(dt),unsubscribe:f(dt)}});return d(),vt}function X(k){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return typeof k=="string"?$(t(document.querySelectorAll(k)),b):$([k],b)[0]}}(typeof window>"u"?null:window);class Dn{constructor(t){this.Reveal=t,this.startEmbeddedIframe=this.startEmbeddedIframe.bind(this)}shouldPreload(t){let e=this.Reveal.getConfig().preloadIframes;return typeof e!="boolean"&&(e=t.hasAttribute("data-preload")),e}load(t,e={}){t.style.display=this.Reveal.getConfig().display,K(t,"img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach(i=>{(i.tagName!=="IFRAME"||this.shouldPreload(i))&&(i.setAttribute("src",i.getAttribute("data-src")),i.setAttribute("data-lazy-loaded",""),i.removeAttribute("data-src"))}),K(t,"video, audio").forEach(i=>{let u=0;K(i,"source[data-src]").forEach(o=>{o.setAttribute("src",o.getAttribute("data-src")),o.removeAttribute("data-src"),o.setAttribute("data-lazy-loaded",""),u+=1}),Zt&&i.tagName==="VIDEO"&&i.setAttribute("playsinline",""),u>0&&i.load()});let n=t.slideBackgroundElement;if(n){n.style.display="block";let i=t.slideBackgroundContentElement,u=t.getAttribute("data-background-iframe");if(n.hasAttribute("data-loaded")===!1){n.setAttribute("data-loaded","true");let c=t.getAttribute("data-background-image"),d=t.getAttribute("data-background-video"),w=t.hasAttribute("data-background-video-loop"),y=t.hasAttribute("data-background-video-muted");if(c)/^data:/.test(c.trim())?i.style.backgroundImage=`url(${c.trim()})`:i.style.backgroundImage=c.split(",").map(A=>`url(${((R="")=>encodeURI(R).replace(/%5B/g,"[").replace(/%5D/g,"]").replace(/[!'()*]/g,S=>`%${S.charCodeAt(0).toString(16).toUpperCase()}`))(decodeURI(A.trim()))})`).join(",");else if(d&&!this.Reveal.isSpeakerNotes()){let A=document.createElement("video");w&&A.setAttribute("loop",""),y&&(A.muted=!0),Zt&&(A.muted=!0,A.setAttribute("playsinline","")),d.split(",").forEach(R=>{let S=((p="")=>zn[p.split(".").pop()])(R);A.innerHTML+=S?`<source src="${R}" type="${S}">`:`<source src="${R}">`}),i.appendChild(A)}else if(u&&e.excludeIframes!==!0){let A=document.createElement("iframe");A.setAttribute("allowfullscreen",""),A.setAttribute("mozallowfullscreen",""),A.setAttribute("webkitallowfullscreen",""),A.setAttribute("allow","autoplay"),A.setAttribute("data-src",u),A.style.width="100%",A.style.height="100%",A.style.maxHeight="100%",A.style.maxWidth="100%",i.appendChild(A)}}let o=i.querySelector("iframe[data-src]");o&&this.shouldPreload(n)&&!/autoplay=(1|true|yes)/gi.test(u)&&o.getAttribute("src")!==u&&o.setAttribute("src",u)}this.layout(t)}layout(t){Array.from(t.querySelectorAll(".r-fit-text")).forEach(e=>{Hn(e,{minSize:24,maxSize:.8*this.Reveal.getConfig().height,observeMutations:!1,observeWindow:!1})})}unload(t){t.style.display="none";let e=this.Reveal.getSlideBackground(t);e&&(e.style.display="none",K(e,"iframe[src]").forEach(n=>{n.removeAttribute("src")})),K(t,"video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]").forEach(n=>{n.setAttribute("data-src",n.getAttribute("src")),n.removeAttribute("src")}),K(t,"video[data-lazy-loaded] source[src], audio source[src]").forEach(n=>{n.setAttribute("data-src",n.getAttribute("src")),n.removeAttribute("src")})}formatEmbeddedContent(){let t=(e,n,i)=>{K(this.Reveal.getSlidesElement(),"iframe["+e+'*="'+n+'"]').forEach(u=>{let o=u.getAttribute(e);o&&o.indexOf(i)===-1&&u.setAttribute(e,o+(/\?/.test(o)?"&":"?")+i)})};t("src","youtube.com/embed/","enablejsapi=1"),t("data-src","youtube.com/embed/","enablejsapi=1"),t("src","player.vimeo.com/","api=1"),t("data-src","player.vimeo.com/","api=1")}startEmbeddedContent(t){t&&!this.Reveal.isSpeakerNotes()&&(K(t,'img[src$=".gif"]').forEach(e=>{e.setAttribute("src",e.getAttribute("src"))}),K(t,"video, audio").forEach(e=>{if(gt(e,".fragment")&&!gt(e,".fragment.visible"))return;let n=this.Reveal.getConfig().autoPlayMedia;if(typeof n!="boolean"&&(n=e.hasAttribute("data-autoplay")||!!gt(e,".slide-background")),n&&typeof e.play=="function")if(e.readyState>1)this.startEmbeddedMedia({target:e});else if(Zt){let i=e.play();i&&typeof i.catch=="function"&&e.controls===!1&&i.catch(()=>{e.controls=!0,e.addEventListener("play",()=>{e.controls=!1})})}else e.removeEventListener("loadeddata",this.startEmbeddedMedia),e.addEventListener("loadeddata",this.startEmbeddedMedia)}),K(t,"iframe[src]").forEach(e=>{gt(e,".fragment")&&!gt(e,".fragment.visible")||this.startEmbeddedIframe({target:e})}),K(t,"iframe[data-src]").forEach(e=>{gt(e,".fragment")&&!gt(e,".fragment.visible")||e.getAttribute("src")!==e.getAttribute("data-src")&&(e.removeEventListener("load",this.startEmbeddedIframe),e.addEventListener("load",this.startEmbeddedIframe),e.setAttribute("src",e.getAttribute("data-src")))}))}startEmbeddedMedia(t){let e=!!gt(t.target,"html"),n=!!gt(t.target,".present");e&&n&&(t.target.currentTime=0,t.target.play()),t.target.removeEventListener("loadeddata",this.startEmbeddedMedia)}startEmbeddedIframe(t){let e=t.target;if(e&&e.contentWindow){let n=!!gt(t.target,"html"),i=!!gt(t.target,".present");if(n&&i){let u=this.Reveal.getConfig().autoPlayMedia;typeof u!="boolean"&&(u=e.hasAttribute("data-autoplay")||!!gt(e,".slide-background")),/youtube\.com\/embed\//.test(e.getAttribute("src"))&&u?e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"):/player\.vimeo\.com\//.test(e.getAttribute("src"))&&u?e.contentWindow.postMessage('{"method":"play"}',"*"):e.contentWindow.postMessage("slide:start","*")}}}stopEmbeddedContent(t,e={}){e=Jt({unloadIframes:!0},e),t&&t.parentNode&&(K(t,"video, audio").forEach(n=>{n.hasAttribute("data-ignore")||typeof n.pause!="function"||(n.setAttribute("data-paused-by-reveal",""),n.pause())}),K(t,"iframe").forEach(n=>{n.contentWindow&&n.contentWindow.postMessage("slide:stop","*"),n.removeEventListener("load",this.startEmbeddedIframe)}),K(t,'iframe[src*="youtube.com/embed/"]').forEach(n=>{!n.hasAttribute("data-ignore")&&n.contentWindow&&typeof n.contentWindow.postMessage=="function"&&n.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}),K(t,'iframe[src*="player.vimeo.com/"]').forEach(n=>{!n.hasAttribute("data-ignore")&&n.contentWindow&&typeof n.contentWindow.postMessage=="function"&&n.contentWindow.postMessage('{"method":"pause"}',"*")}),e.unloadIframes===!0&&K(t,"iframe[data-src]").forEach(n=>{n.setAttribute("src","about:blank"),n.removeAttribute("src")}))}}class On{constructor(t){this.Reveal=t}render(){this.element=document.createElement("div"),this.element.className="slide-number",this.Reveal.getRevealElement().appendChild(this.element)}configure(t,e){let n="none";t.slideNumber&&!this.Reveal.isPrintingPDF()&&(t.showSlideNumber==="all"||t.showSlideNumber==="speaker"&&this.Reveal.isSpeakerNotes())&&(n="block"),this.element.style.display=n}update(){this.Reveal.getConfig().slideNumber&&this.element&&(this.element.innerHTML=this.getSlideNumber())}getSlideNumber(t=this.Reveal.getCurrentSlide()){let e,n=this.Reveal.getConfig(),i="h.v";if(typeof n.slideNumber=="function")e=n.slideNumber(t);else{typeof n.slideNumber=="string"&&(i=n.slideNumber),/c/.test(i)||this.Reveal.getHorizontalSlides().length!==1||(i="c");let o=t&&t.dataset.visibility==="uncounted"?0:1;switch(e=[],i){case"c":e.push(this.Reveal.getSlidePastCount(t)+o);break;case"c/t":e.push(this.Reveal.getSlidePastCount(t)+o,"/",this.Reveal.getTotalSlides());break;default:let c=this.Reveal.getIndices(t);e.push(c.h+o);let d=i==="h/v"?"/":".";this.Reveal.isVerticalSlide(t)&&e.push(d,c.v+1)}}let u="#"+this.Reveal.location.getHash(t);return this.formatNumber(e[0],e[1],e[2],u)}formatNumber(t,e,n,i="#"+this.Reveal.location.getHash()){return typeof n!="number"||isNaN(n)?`<a href="${i}">
					<span class="slide-number-a">${t}</span>
					</a>`:`<a href="${i}">
					<span class="slide-number-a">${t}</span>
					<span class="slide-number-delimiter">${e}</span>
					<span class="slide-number-b">${n}</span>
					</a>`}destroy(){this.element.remove()}}class Bn{constructor(t){this.Reveal=t,this.onInput=this.onInput.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this)}render(){this.element=document.createElement("div"),this.element.className="jump-to-slide",this.jumpInput=document.createElement("input"),this.jumpInput.type="text",this.jumpInput.className="jump-to-slide-input",this.jumpInput.placeholder="Jump to slide",this.jumpInput.addEventListener("input",this.onInput),this.jumpInput.addEventListener("keydown",this.onKeyDown),this.jumpInput.addEventListener("blur",this.onBlur),this.element.appendChild(this.jumpInput)}show(){this.indicesOnShow=this.Reveal.getIndices(),this.Reveal.getRevealElement().appendChild(this.element),this.jumpInput.focus()}hide(){this.isVisible()&&(this.element.remove(),this.jumpInput.value="",clearTimeout(this.jumpTimeout),delete this.jumpTimeout)}isVisible(){return!!this.element.parentNode}jump(){clearTimeout(this.jumpTimeout),delete this.jumpTimeout;const t=this.jumpInput.value.trim("");let e=this.Reveal.location.getIndicesFromHash(t,{oneBasedIndex:!0});return!e&&/\S+/i.test(t)&&t.length>1&&(e=this.search(t)),e&&t!==""?(this.Reveal.slide(e.h,e.v,e.f),!0):(this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),!1)}jumpAfter(t){clearTimeout(this.jumpTimeout),this.jumpTimeout=setTimeout(()=>this.jump(),t)}search(t){const e=new RegExp("\\b"+t.trim()+"\\b","i"),n=this.Reveal.getSlides().find(i=>e.test(i.innerText));return n?this.Reveal.getIndices(n):null}cancel(){this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),this.hide()}confirm(){this.jump(),this.hide()}destroy(){this.jumpInput.removeEventListener("input",this.onInput),this.jumpInput.removeEventListener("keydown",this.onKeyDown),this.jumpInput.removeEventListener("blur",this.onBlur),this.element.remove()}onKeyDown(t){t.keyCode===13?this.confirm():t.keyCode===27&&(this.cancel(),t.stopImmediatePropagation())}onInput(t){this.jumpAfter(200)}onBlur(){setTimeout(()=>this.hide(),1)}}const xe=g=>{let t=g.match(/^#([0-9a-f]{3})$/i);if(t&&t[1])return t=t[1],{r:17*parseInt(t.charAt(0),16),g:17*parseInt(t.charAt(1),16),b:17*parseInt(t.charAt(2),16)};let e=g.match(/^#([0-9a-f]{6})$/i);if(e&&e[1])return e=e[1],{r:parseInt(e.slice(0,2),16),g:parseInt(e.slice(2,4),16),b:parseInt(e.slice(4,6),16)};let n=g.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);if(n)return{r:parseInt(n[1],10),g:parseInt(n[2],10),b:parseInt(n[3],10)};let i=g.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);return i?{r:parseInt(i[1],10),g:parseInt(i[2],10),b:parseInt(i[3],10),a:parseFloat(i[4])}:null};class qn{constructor(t){this.Reveal=t}render(){this.element=document.createElement("div"),this.element.className="backgrounds",this.Reveal.getRevealElement().appendChild(this.element)}create(){this.element.innerHTML="",this.element.classList.add("no-transition"),this.Reveal.getHorizontalSlides().forEach(t=>{let e=this.createBackground(t,this.element);K(t,"section").forEach(n=>{this.createBackground(n,e),e.classList.add("stack")})}),this.Reveal.getConfig().parallaxBackgroundImage?(this.element.style.backgroundImage='url("'+this.Reveal.getConfig().parallaxBackgroundImage+'")',this.element.style.backgroundSize=this.Reveal.getConfig().parallaxBackgroundSize,this.element.style.backgroundRepeat=this.Reveal.getConfig().parallaxBackgroundRepeat,this.element.style.backgroundPosition=this.Reveal.getConfig().parallaxBackgroundPosition,setTimeout(()=>{this.Reveal.getRevealElement().classList.add("has-parallax-background")},1)):(this.element.style.backgroundImage="",this.Reveal.getRevealElement().classList.remove("has-parallax-background"))}createBackground(t,e){let n=document.createElement("div");n.className="slide-background "+t.className.replace(/present|past|future/,"");let i=document.createElement("div");return i.className="slide-background-content",n.appendChild(i),e.appendChild(n),t.slideBackgroundElement=n,t.slideBackgroundContentElement=i,this.sync(t),n}sync(t){const e=t.slideBackgroundElement,n=t.slideBackgroundContentElement,i={background:t.getAttribute("data-background"),backgroundSize:t.getAttribute("data-background-size"),backgroundImage:t.getAttribute("data-background-image"),backgroundVideo:t.getAttribute("data-background-video"),backgroundIframe:t.getAttribute("data-background-iframe"),backgroundColor:t.getAttribute("data-background-color"),backgroundGradient:t.getAttribute("data-background-gradient"),backgroundRepeat:t.getAttribute("data-background-repeat"),backgroundPosition:t.getAttribute("data-background-position"),backgroundTransition:t.getAttribute("data-background-transition"),backgroundOpacity:t.getAttribute("data-background-opacity")},u=t.hasAttribute("data-preload");t.classList.remove("has-dark-background"),t.classList.remove("has-light-background"),e.removeAttribute("data-loaded"),e.removeAttribute("data-background-hash"),e.removeAttribute("data-background-size"),e.removeAttribute("data-background-transition"),e.style.backgroundColor="",n.style.backgroundSize="",n.style.backgroundRepeat="",n.style.backgroundPosition="",n.style.backgroundImage="",n.style.opacity="",n.innerHTML="",i.background&&(/^(http|file|\/\/)/gi.test(i.background)||/\.(svg|png|jpg|jpeg|gif|bmp|webp)([?#\s]|$)/gi.test(i.background)?t.setAttribute("data-background-image",i.background):e.style.background=i.background),(i.background||i.backgroundColor||i.backgroundGradient||i.backgroundImage||i.backgroundVideo||i.backgroundIframe)&&e.setAttribute("data-background-hash",i.background+i.backgroundSize+i.backgroundImage+i.backgroundVideo+i.backgroundIframe+i.backgroundColor+i.backgroundGradient+i.backgroundRepeat+i.backgroundPosition+i.backgroundTransition+i.backgroundOpacity),i.backgroundSize&&e.setAttribute("data-background-size",i.backgroundSize),i.backgroundColor&&(e.style.backgroundColor=i.backgroundColor),i.backgroundGradient&&(e.style.backgroundImage=i.backgroundGradient),i.backgroundTransition&&e.setAttribute("data-background-transition",i.backgroundTransition),u&&e.setAttribute("data-preload",""),i.backgroundSize&&(n.style.backgroundSize=i.backgroundSize),i.backgroundRepeat&&(n.style.backgroundRepeat=i.backgroundRepeat),i.backgroundPosition&&(n.style.backgroundPosition=i.backgroundPosition),i.backgroundOpacity&&(n.style.opacity=i.backgroundOpacity);let o=i.backgroundColor;if(!o||!xe(o)){let d=window.getComputedStyle(e);d&&d.backgroundColor&&(o=d.backgroundColor)}if(o){const d=xe(o);d&&d.a!==0&&(typeof(c=o)=="string"&&(c=xe(c)),(c?(299*c.r+587*c.g+114*c.b)/1e3:null)<128?t.classList.add("has-dark-background"):t.classList.add("has-light-background"))}var c}update(t=!1){let e=this.Reveal.getCurrentSlide(),n=this.Reveal.getIndices(),i=null,u=this.Reveal.getConfig().rtl?"future":"past",o=this.Reveal.getConfig().rtl?"past":"future";if(Array.from(this.element.childNodes).forEach((c,d)=>{c.classList.remove("past","present","future"),d<n.h?c.classList.add(u):d>n.h?c.classList.add(o):(c.classList.add("present"),i=c),(t||d===n.h)&&K(c,".slide-background").forEach((w,y)=>{w.classList.remove("past","present","future"),y<n.v?w.classList.add("past"):y>n.v?w.classList.add("future"):(w.classList.add("present"),d===n.h&&(i=w))})}),this.previousBackground&&this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground,{unloadIframes:!this.Reveal.slideContent.shouldPreload(this.previousBackground)}),i){this.Reveal.slideContent.startEmbeddedContent(i);let c=i.querySelector(".slide-background-content");if(c){let y=c.style.backgroundImage||"";/\.gif/i.test(y)&&(c.style.backgroundImage="",window.getComputedStyle(c).opacity,c.style.backgroundImage=y)}let d=this.previousBackground?this.previousBackground.getAttribute("data-background-hash"):null,w=i.getAttribute("data-background-hash");w&&w===d&&i!==this.previousBackground&&this.element.classList.add("no-transition"),this.previousBackground=i}e&&["has-light-background","has-dark-background"].forEach(c=>{e.classList.contains(c)?this.Reveal.getRevealElement().classList.add(c):this.Reveal.getRevealElement().classList.remove(c)},this),setTimeout(()=>{this.element.classList.remove("no-transition")},1)}updateParallax(){let t=this.Reveal.getIndices();if(this.Reveal.getConfig().parallaxBackgroundImage){let e,n,i=this.Reveal.getHorizontalSlides(),u=this.Reveal.getVerticalSlides(),o=this.element.style.backgroundSize.split(" ");o.length===1?e=n=parseInt(o[0],10):(e=parseInt(o[0],10),n=parseInt(o[1],10));let c,d,w=this.element.offsetWidth,y=i.length;c=typeof this.Reveal.getConfig().parallaxBackgroundHorizontal=="number"?this.Reveal.getConfig().parallaxBackgroundHorizontal:y>1?(e-w)/(y-1):0,d=c*t.h*-1;let A,R,S=this.element.offsetHeight,p=u.length;A=typeof this.Reveal.getConfig().parallaxBackgroundVertical=="number"?this.Reveal.getConfig().parallaxBackgroundVertical:(n-S)/(p-1),R=p>0?A*t.v:0,this.element.style.backgroundPosition=d+"px "+-R+"px"}}destroy(){this.element.remove()}}const Kt=".slides section",Vt=".slides>section",tn=".slides>section.present>section",Fn=/registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener|showPreview/,en=/fade-(down|up|right|left|out|in-then-out|in-then-semi-out)|semi-fade-out|current-visible|shrink|grow/;let nn=0;class jn{constructor(t){this.Reveal=t}run(t,e){this.reset();let n=this.Reveal.getSlides(),i=n.indexOf(e),u=n.indexOf(t);if(t.hasAttribute("data-auto-animate")&&e.hasAttribute("data-auto-animate")&&t.getAttribute("data-auto-animate-id")===e.getAttribute("data-auto-animate-id")&&!(i>u?e:t).hasAttribute("data-auto-animate-restart")){this.autoAnimateStyleSheet=this.autoAnimateStyleSheet||Ae();let o=this.getAutoAnimateOptions(e);t.dataset.autoAnimate="pending",e.dataset.autoAnimate="pending",o.slideDirection=i>u?"forward":"backward";let c=t.style.display==="none";c&&(t.style.display=this.Reveal.getConfig().display);let d=this.getAutoAnimatableElements(t,e).map(w=>this.autoAnimateElements(w.from,w.to,w.options||{},o,nn++));if(c&&(t.style.display="none"),e.dataset.autoAnimateUnmatched!=="false"&&this.Reveal.getConfig().autoAnimateUnmatched===!0){let w=.8*o.duration,y=.2*o.duration;this.getUnmatchedAutoAnimateElements(e).forEach(A=>{let R=this.getAutoAnimateOptions(A,o),S="unmatched";R.duration===o.duration&&R.delay===o.delay||(S="unmatched-"+nn++,d.push(`[data-auto-animate="running"] [data-auto-animate-target="${S}"] { transition: opacity ${R.duration}s ease ${R.delay}s; }`)),A.dataset.autoAnimateTarget=S},this),d.push(`[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity ${w}s ease ${y}s; }`)}this.autoAnimateStyleSheet.innerHTML=d.join(""),requestAnimationFrame(()=>{this.autoAnimateStyleSheet&&(getComputedStyle(this.autoAnimateStyleSheet).fontWeight,e.dataset.autoAnimate="running")}),this.Reveal.dispatchEvent({type:"autoanimate",data:{fromSlide:t,toSlide:e,sheet:this.autoAnimateStyleSheet}})}}reset(){K(this.Reveal.getRevealElement(),'[data-auto-animate]:not([data-auto-animate=""])').forEach(t=>{t.dataset.autoAnimate=""}),K(this.Reveal.getRevealElement(),"[data-auto-animate-target]").forEach(t=>{delete t.dataset.autoAnimateTarget}),this.autoAnimateStyleSheet&&this.autoAnimateStyleSheet.parentNode&&(this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet),this.autoAnimateStyleSheet=null)}autoAnimateElements(t,e,n,i,u){t.dataset.autoAnimateTarget="",e.dataset.autoAnimateTarget=u;let o=this.getAutoAnimateOptions(e,i);n.delay!==void 0&&(o.delay=n.delay),n.duration!==void 0&&(o.duration=n.duration),n.easing!==void 0&&(o.easing=n.easing);let c=this.getAutoAnimatableProperties("from",t,n),d=this.getAutoAnimatableProperties("to",e,n);if(e.classList.contains("fragment")&&(delete d.styles.opacity,t.classList.contains("fragment"))&&(t.className.match(en)||[""])[0]===(e.className.match(en)||[""])[0]&&i.slideDirection==="forward"&&e.classList.add("visible","disabled"),n.translate!==!1||n.scale!==!1){let A=this.Reveal.getScale(),R={x:(c.x-d.x)/A,y:(c.y-d.y)/A,scaleX:c.width/d.width,scaleY:c.height/d.height};R.x=Math.round(1e3*R.x)/1e3,R.y=Math.round(1e3*R.y)/1e3,R.scaleX=Math.round(1e3*R.scaleX)/1e3,R.scaleX=Math.round(1e3*R.scaleX)/1e3;let S=n.translate!==!1&&(R.x!==0||R.y!==0),p=n.scale!==!1&&(R.scaleX!==0||R.scaleY!==0);if(S||p){let j=[];S&&j.push(`translate(${R.x}px, ${R.y}px)`),p&&j.push(`scale(${R.scaleX}, ${R.scaleY})`),c.styles.transform=j.join(" "),c.styles["transform-origin"]="top left",d.styles.transform="none"}}for(let A in d.styles){const R=d.styles[A],S=c.styles[A];R===S?delete d.styles[A]:(R.explicitValue===!0&&(d.styles[A]=R.value),S.explicitValue===!0&&(c.styles[A]=S.value))}let w="",y=Object.keys(d.styles);return y.length>0&&(c.styles.transition="none",d.styles.transition=`all ${o.duration}s ${o.easing} ${o.delay}s`,d.styles["transition-property"]=y.join(", "),d.styles["will-change"]=y.join(", "),w='[data-auto-animate-target="'+u+'"] {'+Object.keys(c.styles).map(A=>A+": "+c.styles[A]+" !important;").join("")+'}[data-auto-animate="running"] [data-auto-animate-target="'+u+'"] {'+Object.keys(d.styles).map(A=>A+": "+d.styles[A]+" !important;").join("")+"}"),w}getAutoAnimateOptions(t,e){let n={easing:this.Reveal.getConfig().autoAnimateEasing,duration:this.Reveal.getConfig().autoAnimateDuration,delay:0};if(n=Jt(n,e),t.parentNode){let i=gt(t.parentNode,"[data-auto-animate-target]");i&&(n=this.getAutoAnimateOptions(i,n))}return t.dataset.autoAnimateEasing&&(n.easing=t.dataset.autoAnimateEasing),t.dataset.autoAnimateDuration&&(n.duration=parseFloat(t.dataset.autoAnimateDuration)),t.dataset.autoAnimateDelay&&(n.delay=parseFloat(t.dataset.autoAnimateDelay)),n}getAutoAnimatableProperties(t,e,n){let i=this.Reveal.getConfig(),u={styles:[]};if(n.translate!==!1||n.scale!==!1){let c;if(typeof n.measure=="function")c=n.measure(e);else if(i.center)c=e.getBoundingClientRect();else{let d=this.Reveal.getScale();c={x:e.offsetLeft*d,y:e.offsetTop*d,width:e.offsetWidth*d,height:e.offsetHeight*d}}u.x=c.x,u.y=c.y,u.width=c.width,u.height=c.height}const o=getComputedStyle(e);return(n.styles||i.autoAnimateStyles).forEach(c=>{let d;typeof c=="string"&&(c={property:c}),c.from!==void 0&&t==="from"?d={value:c.from,explicitValue:!0}:c.to!==void 0&&t==="to"?d={value:c.to,explicitValue:!0}:(c.property==="line-height"&&(d=parseFloat(o["line-height"])/parseFloat(o["font-size"])),isNaN(d)&&(d=o[c.property])),d!==""&&(u.styles[c.property]=d)}),u}getAutoAnimatableElements(t,e){let n=(typeof this.Reveal.getConfig().autoAnimateMatcher=="function"?this.Reveal.getConfig().autoAnimateMatcher:this.getAutoAnimatePairs).call(this,t,e),i=[];return n.filter((u,o)=>{if(i.indexOf(u.to)===-1)return i.push(u.to),!0})}getAutoAnimatePairs(t,e){let n=[];const i="h1, h2, h3, h4, h5, h6, p, li";return this.findAutoAnimateMatches(n,t,e,"[data-id]",u=>u.nodeName+":::"+u.getAttribute("data-id")),this.findAutoAnimateMatches(n,t,e,i,u=>u.nodeName+":::"+u.innerText),this.findAutoAnimateMatches(n,t,e,"img, video, iframe",u=>u.nodeName+":::"+(u.getAttribute("src")||u.getAttribute("data-src"))),this.findAutoAnimateMatches(n,t,e,"pre",u=>u.nodeName+":::"+u.innerText),n.forEach(u=>{ce(u.from,i)?u.options={scale:!1}:ce(u.from,"pre")&&(u.options={scale:!1,styles:["width","height"]},this.findAutoAnimateMatches(n,u.from,u.to,".hljs .hljs-ln-code",o=>o.textContent,{scale:!1,styles:[],measure:this.getLocalBoundingBox.bind(this)}),this.findAutoAnimateMatches(n,u.from,u.to,".hljs .hljs-ln-line[data-line-number]",o=>o.getAttribute("data-line-number"),{scale:!1,styles:["width"],measure:this.getLocalBoundingBox.bind(this)}))},this),n}getLocalBoundingBox(t){const e=this.Reveal.getScale();return{x:Math.round(t.offsetLeft*e*100)/100,y:Math.round(t.offsetTop*e*100)/100,width:Math.round(t.offsetWidth*e*100)/100,height:Math.round(t.offsetHeight*e*100)/100}}findAutoAnimateMatches(t,e,n,i,u,o){let c={},d={};[].slice.call(e.querySelectorAll(i)).forEach((w,y)=>{const A=u(w);typeof A=="string"&&A.length&&(c[A]=c[A]||[],c[A].push(w))}),[].slice.call(n.querySelectorAll(i)).forEach((w,y)=>{const A=u(w);let R;if(d[A]=d[A]||[],d[A].push(w),c[A]){const S=d[A].length-1,p=c[A].length-1;c[A][S]?(R=c[A][S],c[A][S]=null):c[A][p]&&(R=c[A][p],c[A][p]=null)}R&&t.push({from:R,to:w,options:o})})}getUnmatchedAutoAnimateElements(t){return[].slice.call(t.children).reduce((e,n)=>{const i=n.querySelector("[data-auto-animate-target]");return n.hasAttribute("data-auto-animate-target")||i||e.push(n),n.querySelector("[data-auto-animate-target]")&&(e=e.concat(this.getUnmatchedAutoAnimateElements(n))),e},[])}}class Un{constructor(t){this.Reveal=t}configure(t,e){t.fragments===!1?this.disable():e.fragments===!1&&this.enable()}disable(){K(this.Reveal.getSlidesElement(),".fragment").forEach(t=>{t.classList.add("visible"),t.classList.remove("current-fragment")})}enable(){K(this.Reveal.getSlidesElement(),".fragment").forEach(t=>{t.classList.remove("visible"),t.classList.remove("current-fragment")})}availableRoutes(){let t=this.Reveal.getCurrentSlide();if(t&&this.Reveal.getConfig().fragments){let e=t.querySelectorAll(".fragment:not(.disabled)"),n=t.querySelectorAll(".fragment:not(.disabled):not(.visible)");return{prev:e.length-n.length>0,next:!!n.length}}return{prev:!1,next:!1}}sort(t,e=!1){t=Array.from(t);let n=[],i=[],u=[];t.forEach(c=>{if(c.hasAttribute("data-fragment-index")){let d=parseInt(c.getAttribute("data-fragment-index"),10);n[d]||(n[d]=[]),n[d].push(c)}else i.push([c])}),n=n.concat(i);let o=0;return n.forEach(c=>{c.forEach(d=>{u.push(d),d.setAttribute("data-fragment-index",o)}),o++}),e===!0?n:u}sortAll(){this.Reveal.getHorizontalSlides().forEach(t=>{let e=K(t,"section");e.forEach((n,i)=>{this.sort(n.querySelectorAll(".fragment"))},this),e.length===0&&this.sort(t.querySelectorAll(".fragment"))})}update(t,e){let n={shown:[],hidden:[]},i=this.Reveal.getCurrentSlide();if(i&&this.Reveal.getConfig().fragments&&(e=e||this.sort(i.querySelectorAll(".fragment"))).length){let u=0;if(typeof t!="number"){let o=this.sort(i.querySelectorAll(".fragment.visible")).pop();o&&(t=parseInt(o.getAttribute("data-fragment-index")||0,10))}Array.from(e).forEach((o,c)=>{if(o.hasAttribute("data-fragment-index")&&(c=parseInt(o.getAttribute("data-fragment-index"),10)),u=Math.max(u,c),c<=t){let d=o.classList.contains("visible");o.classList.add("visible"),o.classList.remove("current-fragment"),c===t&&(this.Reveal.announceStatus(this.Reveal.getStatusText(o)),o.classList.add("current-fragment"),this.Reveal.slideContent.startEmbeddedContent(o)),d||(n.shown.push(o),this.Reveal.dispatchEvent({target:o,type:"visible",bubbles:!1}))}else{let d=o.classList.contains("visible");o.classList.remove("visible"),o.classList.remove("current-fragment"),d&&(this.Reveal.slideContent.stopEmbeddedContent(o),n.hidden.push(o),this.Reveal.dispatchEvent({target:o,type:"hidden",bubbles:!1}))}}),t=typeof t=="number"?t:-1,t=Math.max(Math.min(t,u),-1),i.setAttribute("data-fragment",t)}return n}sync(t=this.Reveal.getCurrentSlide()){return this.sort(t.querySelectorAll(".fragment"))}goto(t,e=0){let n=this.Reveal.getCurrentSlide();if(n&&this.Reveal.getConfig().fragments){let i=this.sort(n.querySelectorAll(".fragment:not(.disabled)"));if(i.length){if(typeof t!="number"){let o=this.sort(n.querySelectorAll(".fragment:not(.disabled).visible")).pop();t=o?parseInt(o.getAttribute("data-fragment-index")||0,10):-1}t+=e;let u=this.update(t,i);return u.hidden.length&&this.Reveal.dispatchEvent({type:"fragmenthidden",data:{fragment:u.hidden[0],fragments:u.hidden}}),u.shown.length&&this.Reveal.dispatchEvent({type:"fragmentshown",data:{fragment:u.shown[0],fragments:u.shown}}),this.Reveal.controls.update(),this.Reveal.progress.update(),this.Reveal.getConfig().fragmentInURL&&this.Reveal.location.writeURL(),!(!u.shown.length&&!u.hidden.length)}}return!1}next(){return this.goto(null,1)}prev(){return this.goto(null,-1)}}class Wn{constructor(t){this.Reveal=t,this.active=!1,this.onSlideClicked=this.onSlideClicked.bind(this)}activate(){if(this.Reveal.getConfig().overview&&!this.isActive()){this.active=!0,this.Reveal.getRevealElement().classList.add("overview"),this.Reveal.cancelAutoSlide(),this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()),K(this.Reveal.getRevealElement(),Kt).forEach(i=>{i.classList.contains("stack")||i.addEventListener("click",this.onSlideClicked,!0)});const t=70,e=this.Reveal.getComputedSlideSize();this.overviewSlideWidth=e.width+t,this.overviewSlideHeight=e.height+t,this.Reveal.getConfig().rtl&&(this.overviewSlideWidth=-this.overviewSlideWidth),this.Reveal.updateSlidesVisibility(),this.layout(),this.update(),this.Reveal.layout();const n=this.Reveal.getIndices();this.Reveal.dispatchEvent({type:"overviewshown",data:{indexh:n.h,indexv:n.v,currentSlide:this.Reveal.getCurrentSlide()}})}}layout(){this.Reveal.getHorizontalSlides().forEach((t,e)=>{t.setAttribute("data-index-h",e),jt(t,"translate3d("+e*this.overviewSlideWidth+"px, 0, 0)"),t.classList.contains("stack")&&K(t,"section").forEach((n,i)=>{n.setAttribute("data-index-h",e),n.setAttribute("data-index-v",i),jt(n,"translate3d(0, "+i*this.overviewSlideHeight+"px, 0)")})}),Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach((t,e)=>{jt(t,"translate3d("+e*this.overviewSlideWidth+"px, 0, 0)"),K(t,".slide-background").forEach((n,i)=>{jt(n,"translate3d(0, "+i*this.overviewSlideHeight+"px, 0)")})})}update(){const t=Math.min(window.innerWidth,window.innerHeight),e=Math.max(t/5,150)/t,n=this.Reveal.getIndices();this.Reveal.transformSlides({overview:["scale("+e+")","translateX("+-n.h*this.overviewSlideWidth+"px)","translateY("+-n.v*this.overviewSlideHeight+"px)"].join(" ")})}deactivate(){if(this.Reveal.getConfig().overview){this.active=!1,this.Reveal.getRevealElement().classList.remove("overview"),this.Reveal.getRevealElement().classList.add("overview-deactivating"),setTimeout(()=>{this.Reveal.getRevealElement().classList.remove("overview-deactivating")},1),this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()),K(this.Reveal.getRevealElement(),Kt).forEach(e=>{jt(e,""),e.removeEventListener("click",this.onSlideClicked,!0)}),K(this.Reveal.getBackgroundsElement(),".slide-background").forEach(e=>{jt(e,"")}),this.Reveal.transformSlides({overview:""});const t=this.Reveal.getIndices();this.Reveal.slide(t.h,t.v),this.Reveal.layout(),this.Reveal.cueAutoSlide(),this.Reveal.dispatchEvent({type:"overviewhidden",data:{indexh:t.h,indexv:t.v,currentSlide:this.Reveal.getCurrentSlide()}})}}toggle(t){typeof t=="boolean"?t?this.activate():this.deactivate():this.isActive()?this.deactivate():this.activate()}isActive(){return this.active}onSlideClicked(t){if(this.isActive()){t.preventDefault();let e=t.target;for(;e&&!e.nodeName.match(/section/gi);)e=e.parentNode;if(e&&!e.classList.contains("disabled")&&(this.deactivate(),e.nodeName.match(/section/gi))){let n=parseInt(e.getAttribute("data-index-h"),10),i=parseInt(e.getAttribute("data-index-v"),10);this.Reveal.slide(n,i)}}}}class Vn{constructor(t){this.Reveal=t,this.shortcuts={},this.bindings={},this.onDocumentKeyDown=this.onDocumentKeyDown.bind(this),this.onDocumentKeyPress=this.onDocumentKeyPress.bind(this)}configure(t,e){t.navigationMode==="linear"?(this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"]="Next slide",this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"]="Previous slide"):(this.shortcuts["N  ,  SPACE"]="Next slide",this.shortcuts["P  ,  Shift SPACE"]="Previous slide",this.shortcuts["&#8592;  ,  H"]="Navigate left",this.shortcuts["&#8594;  ,  L"]="Navigate right",this.shortcuts["&#8593;  ,  K"]="Navigate up",this.shortcuts["&#8595;  ,  J"]="Navigate down"),this.shortcuts["Alt + &#8592;/&#8593/&#8594;/&#8595;"]="Navigate without fragments",this.shortcuts["Shift + &#8592;/&#8593/&#8594;/&#8595;"]="Jump to first/last slide",this.shortcuts["B  ,  ."]="Pause",this.shortcuts.F="Fullscreen",this.shortcuts.G="Jump to slide",this.shortcuts["ESC, O"]="Slide overview"}bind(){document.addEventListener("keydown",this.onDocumentKeyDown,!1),document.addEventListener("keypress",this.onDocumentKeyPress,!1)}unbind(){document.removeEventListener("keydown",this.onDocumentKeyDown,!1),document.removeEventListener("keypress",this.onDocumentKeyPress,!1)}addKeyBinding(t,e){typeof t=="object"&&t.keyCode?this.bindings[t.keyCode]={callback:e,key:t.key,description:t.description}:this.bindings[t]={callback:e,key:null,description:null}}removeKeyBinding(t){delete this.bindings[t]}triggerKey(t){this.onDocumentKeyDown({keyCode:t})}registerKeyboardShortcut(t,e){this.shortcuts[t]=e}getShortcuts(){return this.shortcuts}getBindings(){return this.bindings}onDocumentKeyPress(t){t.shiftKey&&t.charCode===63&&this.Reveal.toggleHelp()}onDocumentKeyDown(t){let e=this.Reveal.getConfig();if(typeof e.keyboardCondition=="function"&&e.keyboardCondition(t)===!1||e.keyboardCondition==="focused"&&!this.Reveal.isFocused())return!0;let n=t.keyCode,i=!this.Reveal.isAutoSliding();this.Reveal.onUserInput(t);let u=document.activeElement&&document.activeElement.isContentEditable===!0,o=document.activeElement&&document.activeElement.tagName&&/input|textarea/i.test(document.activeElement.tagName),c=document.activeElement&&document.activeElement.className&&/speaker-notes/i.test(document.activeElement.className),d=!([32,37,38,39,40,78,80].indexOf(t.keyCode)!==-1&&t.shiftKey||t.altKey)&&(t.shiftKey||t.altKey||t.ctrlKey||t.metaKey);if(u||o||c||d)return;let w,y=[66,86,190,191];if(typeof e.keyboard=="object")for(w in e.keyboard)e.keyboard[w]==="togglePause"&&y.push(parseInt(w,10));if(this.Reveal.isPaused()&&y.indexOf(n)===-1)return!1;let A=e.navigationMode==="linear"||!this.Reveal.hasHorizontalSlides()||!this.Reveal.hasVerticalSlides(),R=!1;if(typeof e.keyboard=="object"){for(w in e.keyboard)if(parseInt(w,10)===n){let S=e.keyboard[w];typeof S=="function"?S.apply(null,[t]):typeof S=="string"&&typeof this.Reveal[S]=="function"&&this.Reveal[S].call(),R=!0}}if(R===!1){for(w in this.bindings)if(parseInt(w,10)===n){let S=this.bindings[w].callback;typeof S=="function"?S.apply(null,[t]):typeof S=="string"&&typeof this.Reveal[S]=="function"&&this.Reveal[S].call(),R=!0}}R===!1&&(R=!0,n===80||n===33?this.Reveal.prev({skipFragments:t.altKey}):n===78||n===34?this.Reveal.next({skipFragments:t.altKey}):n===72||n===37?t.shiftKey?this.Reveal.slide(0):!this.Reveal.overview.isActive()&&A?this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.left({skipFragments:t.altKey}):n===76||n===39?t.shiftKey?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):!this.Reveal.overview.isActive()&&A?this.Reveal.next({skipFragments:t.altKey}):this.Reveal.right({skipFragments:t.altKey}):n===75||n===38?t.shiftKey?this.Reveal.slide(void 0,0):!this.Reveal.overview.isActive()&&A?this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.up({skipFragments:t.altKey}):n===74||n===40?t.shiftKey?this.Reveal.slide(void 0,Number.MAX_VALUE):!this.Reveal.overview.isActive()&&A?this.Reveal.next({skipFragments:t.altKey}):this.Reveal.down({skipFragments:t.altKey}):n===36?this.Reveal.slide(0):n===35?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):n===32?(this.Reveal.overview.isActive()&&this.Reveal.overview.deactivate(),t.shiftKey?this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.next({skipFragments:t.altKey})):n===58||n===59||n===66||n===86||n===190||n===191?this.Reveal.togglePause():n===70?(S=>{let p=(S=S||document.documentElement).requestFullscreen||S.webkitRequestFullscreen||S.webkitRequestFullScreen||S.mozRequestFullScreen||S.msRequestFullscreen;p&&p.apply(S)})(e.embedded?this.Reveal.getViewportElement():document.documentElement):n===65?e.autoSlideStoppable&&this.Reveal.toggleAutoSlide(i):n===71?e.jumpToSlide&&this.Reveal.toggleJumpToSlide():R=!1),R?t.preventDefault&&t.preventDefault():n!==27&&n!==79||(this.Reveal.closeOverlay()===!1&&this.Reveal.overview.toggle(),t.preventDefault&&t.preventDefault()),this.Reveal.cueAutoSlide()}}class Kn{constructor(t){var e,n,i;i=1e3,(n="MAX_REPLACE_STATE_FREQUENCY")in(e=this)?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,this.Reveal=t,this.writeURLTimeout=0,this.replaceStateTimestamp=0,this.onWindowHashChange=this.onWindowHashChange.bind(this)}bind(){window.addEventListener("hashchange",this.onWindowHashChange,!1)}unbind(){window.removeEventListener("hashchange",this.onWindowHashChange,!1)}getIndicesFromHash(t=window.location.hash,e={}){let n=t.replace(/^#\/?/,""),i=n.split("/");if(/^[0-9]*$/.test(i[0])||!n.length){const u=this.Reveal.getConfig();let o,c=u.hashOneBasedIndex||e.oneBasedIndex?1:0,d=parseInt(i[0],10)-c||0,w=parseInt(i[1],10)-c||0;return u.fragmentInURL&&(o=parseInt(i[2],10),isNaN(o)&&(o=void 0)),{h:d,v:w,f:o}}{let u,o;/\/[-\d]+$/g.test(n)&&(o=parseInt(n.split("/").pop(),10),o=isNaN(o)?void 0:o,n=n.split("/").shift());try{u=document.getElementById(decodeURIComponent(n))}catch{}if(u)return{...this.Reveal.getIndices(u),f:o}}return null}readURL(){const t=this.Reveal.getIndices(),e=this.getIndicesFromHash();e?e.h===t.h&&e.v===t.v&&e.f===void 0||this.Reveal.slide(e.h,e.v,e.f):this.Reveal.slide(t.h||0,t.v||0)}writeURL(t){let e=this.Reveal.getConfig(),n=this.Reveal.getCurrentSlide();if(clearTimeout(this.writeURLTimeout),typeof t=="number")this.writeURLTimeout=setTimeout(this.writeURL,t);else if(n){let i=this.getHash();e.history?window.location.hash=i:e.hash&&(i==="/"?this.debouncedReplaceState(window.location.pathname+window.location.search):this.debouncedReplaceState("#"+i))}}replaceState(t){window.history.replaceState(null,null,t),this.replaceStateTimestamp=Date.now()}debouncedReplaceState(t){clearTimeout(this.replaceStateTimeout),Date.now()-this.replaceStateTimestamp>this.MAX_REPLACE_STATE_FREQUENCY?this.replaceState(t):this.replaceStateTimeout=setTimeout(()=>this.replaceState(t),this.MAX_REPLACE_STATE_FREQUENCY)}getHash(t){let e="/",n=t||this.Reveal.getCurrentSlide(),i=n?n.getAttribute("id"):null;i&&(i=encodeURIComponent(i));let u=this.Reveal.getIndices(t);if(this.Reveal.getConfig().fragmentInURL||(u.f=void 0),typeof i=="string"&&i.length)e="/"+i,u.f>=0&&(e+="/"+u.f);else{let o=this.Reveal.getConfig().hashOneBasedIndex?1:0;(u.h>0||u.v>0||u.f>=0)&&(e+=u.h+o),(u.v>0||u.f>=0)&&(e+="/"+(u.v+o)),u.f>=0&&(e+="/"+u.f)}return e}onWindowHashChange(t){this.readURL()}}class Xn{constructor(t){this.Reveal=t,this.onNavigateLeftClicked=this.onNavigateLeftClicked.bind(this),this.onNavigateRightClicked=this.onNavigateRightClicked.bind(this),this.onNavigateUpClicked=this.onNavigateUpClicked.bind(this),this.onNavigateDownClicked=this.onNavigateDownClicked.bind(this),this.onNavigatePrevClicked=this.onNavigatePrevClicked.bind(this),this.onNavigateNextClicked=this.onNavigateNextClicked.bind(this)}render(){const t=this.Reveal.getConfig().rtl,e=this.Reveal.getRevealElement();this.element=document.createElement("aside"),this.element.className="controls",this.element.innerHTML=`<button class="navigate-left" aria-label="${t?"next slide":"previous slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-right" aria-label="${t?"previous slide":"next slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>
			<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>`,this.Reveal.getRevealElement().appendChild(this.element),this.controlsLeft=K(e,".navigate-left"),this.controlsRight=K(e,".navigate-right"),this.controlsUp=K(e,".navigate-up"),this.controlsDown=K(e,".navigate-down"),this.controlsPrev=K(e,".navigate-prev"),this.controlsNext=K(e,".navigate-next"),this.controlsRightArrow=this.element.querySelector(".navigate-right"),this.controlsLeftArrow=this.element.querySelector(".navigate-left"),this.controlsDownArrow=this.element.querySelector(".navigate-down")}configure(t,e){this.element.style.display=t.controls?"block":"none",this.element.setAttribute("data-controls-layout",t.controlsLayout),this.element.setAttribute("data-controls-back-arrows",t.controlsBackArrows)}bind(){let t=["touchstart","click"];ln&&(t=["touchstart"]),t.forEach(e=>{this.controlsLeft.forEach(n=>n.addEventListener(e,this.onNavigateLeftClicked,!1)),this.controlsRight.forEach(n=>n.addEventListener(e,this.onNavigateRightClicked,!1)),this.controlsUp.forEach(n=>n.addEventListener(e,this.onNavigateUpClicked,!1)),this.controlsDown.forEach(n=>n.addEventListener(e,this.onNavigateDownClicked,!1)),this.controlsPrev.forEach(n=>n.addEventListener(e,this.onNavigatePrevClicked,!1)),this.controlsNext.forEach(n=>n.addEventListener(e,this.onNavigateNextClicked,!1))})}unbind(){["touchstart","click"].forEach(t=>{this.controlsLeft.forEach(e=>e.removeEventListener(t,this.onNavigateLeftClicked,!1)),this.controlsRight.forEach(e=>e.removeEventListener(t,this.onNavigateRightClicked,!1)),this.controlsUp.forEach(e=>e.removeEventListener(t,this.onNavigateUpClicked,!1)),this.controlsDown.forEach(e=>e.removeEventListener(t,this.onNavigateDownClicked,!1)),this.controlsPrev.forEach(e=>e.removeEventListener(t,this.onNavigatePrevClicked,!1)),this.controlsNext.forEach(e=>e.removeEventListener(t,this.onNavigateNextClicked,!1))})}update(){let t=this.Reveal.availableRoutes();[...this.controlsLeft,...this.controlsRight,...this.controlsUp,...this.controlsDown,...this.controlsPrev,...this.controlsNext].forEach(n=>{n.classList.remove("enabled","fragmented"),n.setAttribute("disabled","disabled")}),t.left&&this.controlsLeft.forEach(n=>{n.classList.add("enabled"),n.removeAttribute("disabled")}),t.right&&this.controlsRight.forEach(n=>{n.classList.add("enabled"),n.removeAttribute("disabled")}),t.up&&this.controlsUp.forEach(n=>{n.classList.add("enabled"),n.removeAttribute("disabled")}),t.down&&this.controlsDown.forEach(n=>{n.classList.add("enabled"),n.removeAttribute("disabled")}),(t.left||t.up)&&this.controlsPrev.forEach(n=>{n.classList.add("enabled"),n.removeAttribute("disabled")}),(t.right||t.down)&&this.controlsNext.forEach(n=>{n.classList.add("enabled"),n.removeAttribute("disabled")});let e=this.Reveal.getCurrentSlide();if(e){let n=this.Reveal.fragments.availableRoutes();n.prev&&this.controlsPrev.forEach(i=>{i.classList.add("fragmented","enabled"),i.removeAttribute("disabled")}),n.next&&this.controlsNext.forEach(i=>{i.classList.add("fragmented","enabled"),i.removeAttribute("disabled")}),this.Reveal.isVerticalSlide(e)?(n.prev&&this.controlsUp.forEach(i=>{i.classList.add("fragmented","enabled"),i.removeAttribute("disabled")}),n.next&&this.controlsDown.forEach(i=>{i.classList.add("fragmented","enabled"),i.removeAttribute("disabled")})):(n.prev&&this.controlsLeft.forEach(i=>{i.classList.add("fragmented","enabled"),i.removeAttribute("disabled")}),n.next&&this.controlsRight.forEach(i=>{i.classList.add("fragmented","enabled"),i.removeAttribute("disabled")}))}if(this.Reveal.getConfig().controlsTutorial){let n=this.Reveal.getIndices();!this.Reveal.hasNavigatedVertically()&&t.down?this.controlsDownArrow.classList.add("highlight"):(this.controlsDownArrow.classList.remove("highlight"),this.Reveal.getConfig().rtl?!this.Reveal.hasNavigatedHorizontally()&&t.left&&n.v===0?this.controlsLeftArrow.classList.add("highlight"):this.controlsLeftArrow.classList.remove("highlight"):!this.Reveal.hasNavigatedHorizontally()&&t.right&&n.v===0?this.controlsRightArrow.classList.add("highlight"):this.controlsRightArrow.classList.remove("highlight"))}}destroy(){this.unbind(),this.element.remove()}onNavigateLeftClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.prev():this.Reveal.left()}onNavigateRightClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.next():this.Reveal.right()}onNavigateUpClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.up()}onNavigateDownClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.down()}onNavigatePrevClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.prev()}onNavigateNextClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.next()}}class Yn{constructor(t){this.Reveal=t,this.onProgressClicked=this.onProgressClicked.bind(this)}render(){this.element=document.createElement("div"),this.element.className="progress",this.Reveal.getRevealElement().appendChild(this.element),this.bar=document.createElement("span"),this.element.appendChild(this.bar)}configure(t,e){this.element.style.display=t.progress?"block":"none"}bind(){this.Reveal.getConfig().progress&&this.element&&this.element.addEventListener("click",this.onProgressClicked,!1)}unbind(){this.Reveal.getConfig().progress&&this.element&&this.element.removeEventListener("click",this.onProgressClicked,!1)}update(){if(this.Reveal.getConfig().progress&&this.bar){let t=this.Reveal.getProgress();this.Reveal.getTotalSlides()<2&&(t=0),this.bar.style.transform="scaleX("+t+")"}}getMaxWidth(){return this.Reveal.getRevealElement().offsetWidth}onProgressClicked(t){this.Reveal.onUserInput(t),t.preventDefault();let e=this.Reveal.getSlides(),n=e.length,i=Math.floor(t.clientX/this.getMaxWidth()*n);this.Reveal.getConfig().rtl&&(i=n-i);let u=this.Reveal.getIndices(e[i]);this.Reveal.slide(u.h,u.v)}destroy(){this.element.remove()}}class Jn{constructor(t){this.Reveal=t,this.lastMouseWheelStep=0,this.cursorHidden=!1,this.cursorInactiveTimeout=0,this.onDocumentCursorActive=this.onDocumentCursorActive.bind(this),this.onDocumentMouseScroll=this.onDocumentMouseScroll.bind(this)}configure(t,e){t.mouseWheel?(document.addEventListener("DOMMouseScroll",this.onDocumentMouseScroll,!1),document.addEventListener("mousewheel",this.onDocumentMouseScroll,!1)):(document.removeEventListener("DOMMouseScroll",this.onDocumentMouseScroll,!1),document.removeEventListener("mousewheel",this.onDocumentMouseScroll,!1)),t.hideInactiveCursor?(document.addEventListener("mousemove",this.onDocumentCursorActive,!1),document.addEventListener("mousedown",this.onDocumentCursorActive,!1)):(this.showCursor(),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1))}showCursor(){this.cursorHidden&&(this.cursorHidden=!1,this.Reveal.getRevealElement().style.cursor="")}hideCursor(){this.cursorHidden===!1&&(this.cursorHidden=!0,this.Reveal.getRevealElement().style.cursor="none")}destroy(){this.showCursor(),document.removeEventListener("DOMMouseScroll",this.onDocumentMouseScroll,!1),document.removeEventListener("mousewheel",this.onDocumentMouseScroll,!1),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1)}onDocumentCursorActive(t){this.showCursor(),clearTimeout(this.cursorInactiveTimeout),this.cursorInactiveTimeout=setTimeout(this.hideCursor.bind(this),this.Reveal.getConfig().hideCursorTime)}onDocumentMouseScroll(t){if(Date.now()-this.lastMouseWheelStep>1e3){this.lastMouseWheelStep=Date.now();let e=t.detail||-t.wheelDelta;e>0?this.Reveal.next():e<0&&this.Reveal.prev()}}}const sn=(g,t)=>{const e=document.createElement("script");e.type="text/javascript",e.async=!1,e.defer=!1,e.src=g,typeof t=="function"&&(e.onload=e.onreadystatechange=i=>{(i.type==="load"||/loaded|complete/.test(e.readyState))&&(e.onload=e.onreadystatechange=e.onerror=null,t())},e.onerror=i=>{e.onload=e.onreadystatechange=e.onerror=null,t(new Error("Failed loading script: "+e.src+`
`+i))});const n=document.querySelector("head");n.insertBefore(e,n.lastChild)};class Zn{constructor(t){this.Reveal=t,this.state="idle",this.registeredPlugins={},this.asyncDependencies=[]}load(t,e){return this.state="loading",t.forEach(this.registerPlugin.bind(this)),new Promise(n=>{let i=[],u=0;if(e.forEach(o=>{o.condition&&!o.condition()||(o.async?this.asyncDependencies.push(o):i.push(o))}),i.length){u=i.length;const o=c=>{c&&typeof c.callback=="function"&&c.callback(),--u==0&&this.initPlugins().then(n)};i.forEach(c=>{typeof c.id=="string"?(this.registerPlugin(c),o(c)):typeof c.src=="string"?sn(c.src,()=>o(c)):(console.warn("Unrecognized plugin format",c),o())})}else this.initPlugins().then(n)})}initPlugins(){return new Promise(t=>{let e=Object.values(this.registeredPlugins),n=e.length;if(n===0)this.loadAsync().then(t);else{let i,u=()=>{--n==0?this.loadAsync().then(t):i()},o=0;i=()=>{let c=e[o++];if(typeof c.init=="function"){let d=c.init(this.Reveal);d&&typeof d.then=="function"?d.then(u):u()}else u()},i()}})}loadAsync(){return this.state="loaded",this.asyncDependencies.length&&this.asyncDependencies.forEach(t=>{sn(t.src,t.callback)}),Promise.resolve()}registerPlugin(t){arguments.length===2&&typeof arguments[0]=="string"?(t=arguments[1]).id=arguments[0]:typeof t=="function"&&(t=t());let e=t.id;typeof e!="string"?console.warn("Unrecognized plugin format; can't find plugin.id",t):this.registeredPlugins[e]===void 0?(this.registeredPlugins[e]=t,this.state==="loaded"&&typeof t.init=="function"&&t.init(this.Reveal)):console.warn('reveal.js: "'+e+'" plugin has already been registered')}hasPlugin(t){return!!this.registeredPlugins[t]}getPlugin(t){return this.registeredPlugins[t]}getRegisteredPlugins(){return this.registeredPlugins}destroy(){Object.values(this.registeredPlugins).forEach(t=>{typeof t.destroy=="function"&&t.destroy()}),this.registeredPlugins={},this.asyncDependencies=[]}}class Qn{constructor(t){this.Reveal=t}async setupPDF(){const t=this.Reveal.getConfig(),e=K(this.Reveal.getRevealElement(),Kt),n=t.slideNumber&&/all|print/i.test(t.showSlideNumber),i=this.Reveal.getComputedSlideSize(window.innerWidth,window.innerHeight),u=Math.floor(i.width*(1+t.margin)),o=Math.floor(i.height*(1+t.margin)),c=i.width,d=i.height;await new Promise(requestAnimationFrame),Ae("@page{size:"+u+"px "+o+"px; margin: 0px;}"),Ae(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: "+c+"px; max-height:"+d+"px}"),document.documentElement.classList.add("print-pdf"),document.body.style.width=u+"px",document.body.style.height=o+"px";const w=document.querySelector(".reveal-viewport");let y;if(w){const j=window.getComputedStyle(w);j&&j.background&&(y=j.background)}await new Promise(requestAnimationFrame),this.Reveal.layoutSlideContents(c,d),await new Promise(requestAnimationFrame);const A=e.map(j=>j.scrollHeight),R=[],S=e[0].parentNode;let p=1;e.forEach(function(j,B){if(j.classList.contains("stack")===!1){let at=(u-c)/2,W=(o-d)/2;const f=A[B];let H=Math.max(Math.ceil(f/o),1);H=Math.min(H,t.pdfMaxPagesPerSlide),(H===1&&t.center||j.classList.contains("center"))&&(W=Math.max((o-f)/2,0));const q=document.createElement("div");if(R.push(q),q.className="pdf-page",q.style.height=(o+t.pdfPageHeightOffset)*H+"px",y&&(q.style.background=y),q.appendChild(j),j.style.left=at+"px",j.style.top=W+"px",j.style.width=c+"px",this.Reveal.slideContent.layout(j),j.slideBackgroundElement&&q.insertBefore(j.slideBackgroundElement,j),t.showNotes){const F=this.Reveal.getSlideNotes(j);if(F){const it=typeof t.showNotes=="string"?t.showNotes:"inline",D=document.createElement("div");D.classList.add("speaker-notes"),D.classList.add("speaker-notes-pdf"),D.setAttribute("data-layout",it),D.innerHTML=F,it==="separate-page"?R.push(D):(D.style.left="8px",D.style.bottom="8px",D.style.width=u-2*8+"px",q.appendChild(D))}}if(n){const F=document.createElement("div");F.classList.add("slide-number"),F.classList.add("slide-number-pdf"),F.innerHTML=p++,q.appendChild(F)}if(t.pdfSeparateFragments){const F=this.Reveal.fragments.sort(q.querySelectorAll(".fragment"),!0);let ot;F.forEach(function(it,D){ot&&ot.forEach(function($){$.classList.remove("current-fragment")}),it.forEach(function($){$.classList.add("visible","current-fragment")},this);const nt=q.cloneNode(!0);if(n){const $=D+1;nt.querySelector(".slide-number-pdf").innerHTML+="."+$}R.push(nt),ot=it},this),F.forEach(function(it){it.forEach(function(D){D.classList.remove("visible","current-fragment")})})}else K(q,".fragment:not(.fade-out)").forEach(function(F){F.classList.add("visible")})}},this),await new Promise(requestAnimationFrame),R.forEach(j=>S.appendChild(j)),this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()),this.Reveal.dispatchEvent({type:"pdf-ready"})}isPrintingPDF(){return/print-pdf/gi.test(window.location.search)}}class Gn{constructor(t){this.Reveal=t,this.touchStartX=0,this.touchStartY=0,this.touchStartCount=0,this.touchCaptured=!1,this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this)}bind(){let t=this.Reveal.getRevealElement();"onpointerdown"in window?(t.addEventListener("pointerdown",this.onPointerDown,!1),t.addEventListener("pointermove",this.onPointerMove,!1),t.addEventListener("pointerup",this.onPointerUp,!1)):window.navigator.msPointerEnabled?(t.addEventListener("MSPointerDown",this.onPointerDown,!1),t.addEventListener("MSPointerMove",this.onPointerMove,!1),t.addEventListener("MSPointerUp",this.onPointerUp,!1)):(t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1))}unbind(){let t=this.Reveal.getRevealElement();t.removeEventListener("pointerdown",this.onPointerDown,!1),t.removeEventListener("pointermove",this.onPointerMove,!1),t.removeEventListener("pointerup",this.onPointerUp,!1),t.removeEventListener("MSPointerDown",this.onPointerDown,!1),t.removeEventListener("MSPointerMove",this.onPointerMove,!1),t.removeEventListener("MSPointerUp",this.onPointerUp,!1),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1)}isSwipePrevented(t){if(ce(t,"video, audio"))return!0;for(;t&&typeof t.hasAttribute=="function";){if(t.hasAttribute("data-prevent-swipe"))return!0;t=t.parentNode}return!1}onTouchStart(t){if(this.isSwipePrevented(t.target))return!0;this.touchStartX=t.touches[0].clientX,this.touchStartY=t.touches[0].clientY,this.touchStartCount=t.touches.length}onTouchMove(t){if(this.isSwipePrevented(t.target))return!0;let e=this.Reveal.getConfig();if(this.touchCaptured)ln&&t.preventDefault();else{this.Reveal.onUserInput(t);let n=t.touches[0].clientX,i=t.touches[0].clientY;if(t.touches.length===1&&this.touchStartCount!==2){let u=this.Reveal.availableRoutes({includeFragments:!0}),o=n-this.touchStartX,c=i-this.touchStartY;o>40&&Math.abs(o)>Math.abs(c)?(this.touchCaptured=!0,e.navigationMode==="linear"?e.rtl?this.Reveal.next():this.Reveal.prev():this.Reveal.left()):o<-40&&Math.abs(o)>Math.abs(c)?(this.touchCaptured=!0,e.navigationMode==="linear"?e.rtl?this.Reveal.prev():this.Reveal.next():this.Reveal.right()):c>40&&u.up?(this.touchCaptured=!0,e.navigationMode==="linear"?this.Reveal.prev():this.Reveal.up()):c<-40&&u.down&&(this.touchCaptured=!0,e.navigationMode==="linear"?this.Reveal.next():this.Reveal.down()),e.embedded?(this.touchCaptured||this.Reveal.isVerticalSlide())&&t.preventDefault():t.preventDefault()}}}onTouchEnd(t){this.touchCaptured=!1}onPointerDown(t){t.pointerType!==t.MSPOINTER_TYPE_TOUCH&&t.pointerType!=="touch"||(t.touches=[{clientX:t.clientX,clientY:t.clientY}],this.onTouchStart(t))}onPointerMove(t){t.pointerType!==t.MSPOINTER_TYPE_TOUCH&&t.pointerType!=="touch"||(t.touches=[{clientX:t.clientX,clientY:t.clientY}],this.onTouchMove(t))}onPointerUp(t){t.pointerType!==t.MSPOINTER_TYPE_TOUCH&&t.pointerType!=="touch"||(t.touches=[{clientX:t.clientX,clientY:t.clientY}],this.onTouchEnd(t))}}const Se="focus",an="blur";class ti{constructor(t){this.Reveal=t,this.onRevealPointerDown=this.onRevealPointerDown.bind(this),this.onDocumentPointerDown=this.onDocumentPointerDown.bind(this)}configure(t,e){t.embedded?this.blur():(this.focus(),this.unbind())}bind(){this.Reveal.getConfig().embedded&&this.Reveal.getRevealElement().addEventListener("pointerdown",this.onRevealPointerDown,!1)}unbind(){this.Reveal.getRevealElement().removeEventListener("pointerdown",this.onRevealPointerDown,!1),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)}focus(){this.state!==Se&&(this.Reveal.getRevealElement().classList.add("focused"),document.addEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state=Se}blur(){this.state!==an&&(this.Reveal.getRevealElement().classList.remove("focused"),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state=an}isFocused(){return this.state===Se}destroy(){this.Reveal.getRevealElement().classList.remove("focused")}onRevealPointerDown(t){this.focus()}onDocumentPointerDown(t){let e=gt(t.target,".reveal");e&&e===this.Reveal.getRevealElement()||this.blur()}}class ei{constructor(t){this.Reveal=t}render(){this.element=document.createElement("div"),this.element.className="speaker-notes",this.element.setAttribute("data-prevent-swipe",""),this.element.setAttribute("tabindex","0"),this.Reveal.getRevealElement().appendChild(this.element)}configure(t,e){t.showNotes&&this.element.setAttribute("data-layout",typeof t.showNotes=="string"?t.showNotes:"inline")}update(){this.Reveal.getConfig().showNotes&&this.element&&this.Reveal.getCurrentSlide()&&!this.Reveal.print.isPrintingPDF()&&(this.element.innerHTML=this.getSlideNotes()||'<span class="notes-placeholder">No notes on this slide.</span>')}updateVisibility(){this.Reveal.getConfig().showNotes&&this.hasNotes()&&!this.Reveal.print.isPrintingPDF()?this.Reveal.getRevealElement().classList.add("show-notes"):this.Reveal.getRevealElement().classList.remove("show-notes")}hasNotes(){return this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length>0}isSpeakerNotesWindow(){return!!window.location.search.match(/receiver/gi)}getSlideNotes(t=this.Reveal.getCurrentSlide()){if(t.hasAttribute("data-notes"))return t.getAttribute("data-notes");let e=t.querySelectorAll("aside.notes");return e?Array.from(e).map(n=>n.innerHTML).join(`
`):null}destroy(){this.element.remove()}}class ni{constructor(t,e){this.diameter=100,this.diameter2=this.diameter/2,this.thickness=6,this.playing=!1,this.progress=0,this.progressOffset=1,this.container=t,this.progressCheck=e,this.canvas=document.createElement("canvas"),this.canvas.className="playback",this.canvas.width=this.diameter,this.canvas.height=this.diameter,this.canvas.style.width=this.diameter2+"px",this.canvas.style.height=this.diameter2+"px",this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas),this.render()}setPlaying(t){const e=this.playing;this.playing=t,!e&&this.playing?this.animate():this.render()}animate(){const t=this.progress;this.progress=this.progressCheck(),t>.8&&this.progress<.2&&(this.progressOffset=this.progress),this.render(),this.playing&&requestAnimationFrame(this.animate.bind(this))}render(){let t=this.playing?this.progress:0,e=this.diameter2-this.thickness,n=this.diameter2,i=this.diameter2,u=28;this.progressOffset+=.1*(1-this.progressOffset);const o=-Math.PI/2+t*(2*Math.PI),c=-Math.PI/2+this.progressOffset*(2*Math.PI);this.context.save(),this.context.clearRect(0,0,this.diameter,this.diameter),this.context.beginPath(),this.context.arc(n,i,e+4,0,2*Math.PI,!1),this.context.fillStyle="rgba( 0, 0, 0, 0.4 )",this.context.fill(),this.context.beginPath(),this.context.arc(n,i,e,0,2*Math.PI,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="rgba( 255, 255, 255, 0.2 )",this.context.stroke(),this.playing&&(this.context.beginPath(),this.context.arc(n,i,e,c,o,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="#fff",this.context.stroke()),this.context.translate(n-14,i-14),this.playing?(this.context.fillStyle="#fff",this.context.fillRect(0,0,10,u),this.context.fillRect(18,0,10,u)):(this.context.beginPath(),this.context.translate(4,0),this.context.moveTo(0,0),this.context.lineTo(24,14),this.context.lineTo(0,u),this.context.fillStyle="#fff",this.context.fill()),this.context.restore()}on(t,e){this.canvas.addEventListener(t,e,!1)}off(t,e){this.canvas.removeEventListener(t,e,!1)}destroy(){this.playing=!1,this.canvas.parentNode&&this.container.removeChild(this.canvas)}}var ii={width:960,height:700,margin:.04,minScale:.2,maxScale:2,controls:!0,controlsTutorial:!0,controlsLayout:"bottom-right",controlsBackArrows:"faded",progress:!0,slideNumber:!1,showSlideNumber:"all",hashOneBasedIndex:!1,hash:!1,respondToHashChanges:!0,jumpToSlide:!0,history:!1,keyboard:!0,keyboardCondition:null,disableLayout:!1,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,navigationMode:"default",shuffle:!1,fragments:!0,fragmentInURL:!0,embedded:!1,help:!0,pause:!0,showNotes:!1,showHiddenSlides:!1,autoPlayMedia:null,preloadIframes:null,autoAnimate:!0,autoAnimateMatcher:null,autoAnimateEasing:"ease",autoAnimateDuration:1,autoAnimateUnmatched:!0,autoAnimateStyles:["opacity","color","background-color","padding","font-size","line-height","letter-spacing","border-width","border-color","border-radius","outline","outline-offset"],autoSlide:0,autoSlideStoppable:!0,autoSlideMethod:null,defaultTiming:null,mouseWheel:!1,previewLinks:!1,postMessage:!0,postMessageEvents:!1,focusBodyOnPageVisibilityChange:!0,transition:"slide",transitionSpeed:"default",backgroundTransition:"fade",parallaxBackgroundImage:"",parallaxBackgroundSize:"",parallaxBackgroundRepeat:"",parallaxBackgroundPosition:"",parallaxBackgroundHorizontal:null,parallaxBackgroundVertical:null,pdfMaxPagesPerSlide:Number.POSITIVE_INFINITY,pdfSeparateFragments:!0,pdfPageHeightOffset:-1,viewDistance:3,mobileViewDistance:2,display:"block",hideInactiveCursor:!0,hideCursorTime:5e3,sortFragmentsOnSync:!0,dependencies:[],plugins:[]};const dn="4.5.0";function un(g,t){arguments.length<2&&(t=arguments[0],g=document.querySelector(".reveal"));const e={};let n,i,u,o,c,d={},w=!1,y={hasNavigatedHorizontally:!1,hasNavigatedVertically:!1},A=[],R=1,S={layout:"",overview:""},p={},j="idle",B=0,at=0,W=-1,f=!1,H=new Dn(e),q=new On(e),F=new Bn(e),ot=new jn(e),it=new qn(e),D=new Un(e),nt=new Wn(e),$=new Vn(e),X=new Kn(e),k=new Xn(e),b=new Yn(e),E=new Jn(e),vt=new Zn(e),mt=new Qn(e),dt=new ti(e),ft=new Gn(e),bt=new ei(e);function ee(h){if(!g)throw'Unable to find presentation root (<div class="reveal">).';if(p.wrapper=g,p.slides=g.querySelector(".slides"),!p.slides)throw'Unable to find slides container (<div class="slides">).';return d={...ii,...d,...t,...h,...Qe()},Pt(),window.addEventListener("load",At,!1),vt.load(d.plugins,d.dependencies).then(Q),new Promise(m=>e.on("ready",m))}function Pt(){d.embedded===!0?p.viewport=gt(g,".reveal-viewport")||g:(p.viewport=document.body,document.documentElement.classList.add("reveal-full-page")),p.viewport.classList.add("reveal-viewport")}function Q(){w=!0,z(),a(),P(),v(),x(),vn(),L(),X.readURL(),it.update(!0),setTimeout(()=>{p.slides.classList.remove("no-transition"),p.wrapper.classList.add("ready"),lt({type:"ready",data:{indexh:n,indexv:i,currentSlide:o}})},1),mt.isPrintingPDF()&&(U(),document.readyState==="complete"?mt.setupPDF():window.addEventListener("load",()=>{mt.setupPDF()}))}function z(){d.showHiddenSlides||K(p.wrapper,'section[data-visibility="hidden"]').forEach(h=>{h.parentNode.removeChild(h)})}function a(){p.slides.classList.add("no-transition"),Zt?p.wrapper.classList.add("no-hover"):p.wrapper.classList.remove("no-hover"),it.render(),q.render(),F.render(),k.render(),b.render(),bt.render(),p.pauseOverlay=_n(p.wrapper,"div","pause-overlay",d.controls?'<button class="resume-button">Resume presentation</button>':null),p.statusElement=s(),p.wrapper.setAttribute("role","application")}function s(){let h=p.wrapper.querySelector(".aria-status");return h||(h=document.createElement("div"),h.style.position="absolute",h.style.height="1px",h.style.width="1px",h.style.overflow="hidden",h.style.clip="rect( 1px, 1px, 1px, 1px )",h.classList.add("aria-status"),h.setAttribute("aria-live","polite"),h.setAttribute("aria-atomic","true"),p.wrapper.appendChild(h)),h}function r(h){p.statusElement.textContent=h}function l(h){let m="";if(h.nodeType===3)m+=h.textContent;else if(h.nodeType===1){let N=h.getAttribute("aria-hidden"),C=window.getComputedStyle(h).display==="none";N==="true"||C||Array.from(h.childNodes).forEach(O=>{m+=l(O)})}return m=m.trim(),m===""?"":m+" "}function v(){setInterval(()=>{p.wrapper.scrollTop===0&&p.wrapper.scrollLeft===0||(p.wrapper.scrollTop=0,p.wrapper.scrollLeft=0)},1e3)}function x(){document.addEventListener("fullscreenchange",oe),document.addEventListener("webkitfullscreenchange",oe)}function P(){d.postMessage&&window.addEventListener("message",We,!1)}function L(h){const m={...d};if(typeof h=="object"&&Jt(d,h),e.isReady()===!1)return;const N=p.wrapper.querySelectorAll(Kt).length;p.wrapper.classList.remove(m.transition),p.wrapper.classList.add(d.transition),p.wrapper.setAttribute("data-transition-speed",d.transitionSpeed),p.wrapper.setAttribute("data-background-transition",d.backgroundTransition),p.viewport.style.setProperty("--slide-width",d.width+"px"),p.viewport.style.setProperty("--slide-height",d.height+"px"),d.shuffle&&ge(),we(p.wrapper,"embedded",d.embedded),we(p.wrapper,"rtl",d.rtl),we(p.wrapper,"center",d.center),d.pause===!1&&Gt(),d.previewLinks?(st(),$t("[data-preview-link=false]")):($t(),st("[data-preview-link]:not([data-preview-link=false])")),ot.reset(),c&&(c.destroy(),c=null),N>1&&d.autoSlide&&d.autoSlideStoppable&&(c=new ni(p.wrapper,()=>Math.min(Math.max((Date.now()-W)/B,0),1)),c.on("click",En),f=!1),d.navigationMode!=="default"?p.wrapper.setAttribute("data-navigation-mode",d.navigationMode):p.wrapper.removeAttribute("data-navigation-mode"),bt.configure(d,m),dt.configure(d,m),E.configure(d,m),k.configure(d,m),b.configure(d,m),$.configure(d,m),D.configure(d,m),q.configure(d,m),Ne()}function _(){window.addEventListener("resize",Xe,!1),d.touch&&ft.bind(),d.keyboard&&$.bind(),d.progress&&b.bind(),d.respondToHashChanges&&X.bind(),k.bind(),dt.bind(),p.slides.addEventListener("click",Ke,!1),p.slides.addEventListener("transitionend",Ve,!1),p.pauseOverlay.addEventListener("click",Gt,!1),d.focusBodyOnPageVisibilityChange&&document.addEventListener("visibilitychange",Ye,!1)}function U(){ft.unbind(),dt.unbind(),$.unbind(),k.unbind(),b.unbind(),X.unbind(),window.removeEventListener("resize",Xe,!1),p.slides.removeEventListener("click",Ke,!1),p.slides.removeEventListener("transitionend",Ve,!1),p.pauseOverlay.removeEventListener("click",Gt,!1)}function Y(){U(),ie(),$t(),bt.destroy(),dt.destroy(),vt.destroy(),E.destroy(),k.destroy(),b.destroy(),it.destroy(),q.destroy(),F.destroy(),document.removeEventListener("fullscreenchange",oe),document.removeEventListener("webkitfullscreenchange",oe),document.removeEventListener("visibilitychange",Ye,!1),window.removeEventListener("message",We,!1),window.removeEventListener("load",At,!1),p.pauseOverlay&&p.pauseOverlay.remove(),p.statusElement&&p.statusElement.remove(),document.documentElement.classList.remove("reveal-full-page"),p.wrapper.classList.remove("ready","center","has-horizontal-slides","has-vertical-slides"),p.wrapper.removeAttribute("data-transition-speed"),p.wrapper.removeAttribute("data-background-transition"),p.viewport.classList.remove("reveal-viewport"),p.viewport.style.removeProperty("--slide-width"),p.viewport.style.removeProperty("--slide-height"),p.slides.style.removeProperty("width"),p.slides.style.removeProperty("height"),p.slides.style.removeProperty("zoom"),p.slides.style.removeProperty("left"),p.slides.style.removeProperty("top"),p.slides.style.removeProperty("bottom"),p.slides.style.removeProperty("right"),p.slides.style.removeProperty("transform"),Array.from(p.wrapper.querySelectorAll(Kt)).forEach(h=>{h.style.removeProperty("display"),h.style.removeProperty("top"),h.removeAttribute("hidden"),h.removeAttribute("aria-hidden")})}function V(h,m,N){g.addEventListener(h,m,N)}function ht(h,m,N){g.removeEventListener(h,m,N)}function Nt(h){typeof h.layout=="string"&&(S.layout=h.layout),typeof h.overview=="string"&&(S.overview=h.overview),S.layout?jt(p.slides,S.layout+" "+S.overview):jt(p.slides,S.overview)}function lt({target:h=p.wrapper,type:m,data:N,bubbles:C=!0}){let O=document.createEvent("HTMLEvents",1,2);return O.initEvent(m,C,!0),Jt(O,N),h.dispatchEvent(O),h===p.wrapper&&kt(m),O}function kt(h,m){if(d.postMessageEvents&&window.parent!==window.self){let N={namespace:"reveal",eventName:h,state:je()};Jt(N,m),window.parent.postMessage(JSON.stringify(N),"*")}}function st(h="a"){Array.from(p.wrapper.querySelectorAll(h)).forEach(m=>{/^(http|www)/gi.test(m.getAttribute("href"))&&m.addEventListener("click",Je,!1)})}function $t(h="a"){Array.from(p.wrapper.querySelectorAll(h)).forEach(m=>{/^(http|www)/gi.test(m.getAttribute("href"))&&m.removeEventListener("click",Je,!1)})}function Ut(h){ct(),p.overlay=document.createElement("div"),p.overlay.classList.add("overlay"),p.overlay.classList.add("overlay-preview"),p.wrapper.appendChild(p.overlay),p.overlay.innerHTML=`<header>
				<a class="close" href="#"><span class="icon"></span></a>
				<a class="external" href="${h}" target="_blank"><span class="icon"></span></a>
			</header>
			<div class="spinner"></div>
			<div class="viewport">
				<iframe src="${h}"></iframe>
				<small class="viewport-inner">
					<span class="x-frame-error">Unable to load iframe. This is likely due to the site's policy (x-frame-options).</span>
				</small>
			</div>`,p.overlay.querySelector("iframe").addEventListener("load",m=>{p.overlay.classList.add("loaded")},!1),p.overlay.querySelector(".close").addEventListener("click",m=>{ct(),m.preventDefault()},!1),p.overlay.querySelector(".external").addEventListener("click",m=>{ct()},!1)}function wt(h){typeof h=="boolean"?h?Ot():ct():p.overlay?ct():Ot()}function Ot(){if(d.help){ct(),p.overlay=document.createElement("div"),p.overlay.classList.add("overlay"),p.overlay.classList.add("overlay-help"),p.wrapper.appendChild(p.overlay);let h='<p class="title">Keyboard Shortcuts</p><br/>',m=$.getShortcuts(),N=$.getBindings();h+="<table><th>KEY</th><th>ACTION</th>";for(let C in m)h+=`<tr><td>${C}</td><td>${m[C]}</td></tr>`;for(let C in N)N[C].key&&N[C].description&&(h+=`<tr><td>${N[C].key}</td><td>${N[C].description}</td></tr>`);h+="</table>",p.overlay.innerHTML=`
				<header>
					<a class="close" href="#"><span class="icon"></span></a>
				</header>
				<div class="viewport">
					<div class="viewport-inner">${h}</div>
				</div>
			`,p.overlay.querySelector(".close").addEventListener("click",C=>{ct(),C.preventDefault()},!1)}}function ct(){return!!p.overlay&&(p.overlay.parentNode.removeChild(p.overlay),p.overlay=null,!0)}function At(){if(p.wrapper&&!mt.isPrintingPDF()){if(!d.disableLayout){Zt&&!d.embedded&&document.documentElement.style.setProperty("--vh",.01*window.innerHeight+"px");const h=ne(),m=R;Bt(d.width,d.height),p.slides.style.width=h.width+"px",p.slides.style.height=h.height+"px",R=Math.min(h.presentationWidth/h.width,h.presentationHeight/h.height),R=Math.max(R,d.minScale),R=Math.min(R,d.maxScale),R===1?(p.slides.style.zoom="",p.slides.style.left="",p.slides.style.top="",p.slides.style.bottom="",p.slides.style.right="",Nt({layout:""})):(p.slides.style.zoom="",p.slides.style.left="50%",p.slides.style.top="50%",p.slides.style.bottom="auto",p.slides.style.right="auto",Nt({layout:"translate(-50%, -50%) scale("+R+")"}));const N=Array.from(p.wrapper.querySelectorAll(Kt));for(let C=0,O=N.length;C<O;C++){const rt=N[C];rt.style.display!=="none"&&(d.center||rt.classList.contains("center")?rt.classList.contains("stack")?rt.style.top=0:rt.style.top=Math.max((h.height-rt.scrollHeight)/2,0)+"px":rt.style.top="")}m!==R&&lt({type:"resize",data:{oldScale:m,scale:R,size:h}})}p.viewport.style.setProperty("--slide-scale",R),b.update(),it.updateParallax(),nt.isActive()&&nt.update()}}function Bt(h,m){K(p.slides,"section > .stretch, section > .r-stretch").forEach(N=>{let C=$n(N,m);if(/(img|video)/gi.test(N.nodeName)){const O=N.naturalWidth||N.videoWidth,rt=N.naturalHeight||N.videoHeight,pt=Math.min(h/O,C/rt);N.style.width=O*pt+"px",N.style.height=rt*pt+"px"}else N.style.width=h+"px",N.style.height=C+"px"})}function ne(h,m){let N=d.width,C=d.height;d.disableLayout&&(N=p.slides.offsetWidth,C=p.slides.offsetHeight);const O={width:N,height:C,presentationWidth:h||p.wrapper.offsetWidth,presentationHeight:m||p.wrapper.offsetHeight};return O.presentationWidth-=O.presentationWidth*d.margin,O.presentationHeight-=O.presentationHeight*d.margin,typeof O.width=="string"&&/%$/.test(O.width)&&(O.width=parseInt(O.width,10)/100*O.presentationWidth),typeof O.height=="string"&&/%$/.test(O.height)&&(O.height=parseInt(O.height,10)/100*O.presentationHeight),O}function Re(h,m){typeof h=="object"&&typeof h.setAttribute=="function"&&h.setAttribute("data-previous-indexv",m||0)}function Te(h){if(typeof h=="object"&&typeof h.setAttribute=="function"&&h.classList.contains("stack")){const m=h.hasAttribute("data-start-indexv")?"data-start-indexv":"data-previous-indexv";return parseInt(h.getAttribute(m)||0,10)}return 0}function Qt(h=o){return h&&h.parentNode&&!!h.parentNode.nodeName.match(/section/i)}function Le(){return!(!o||!Qt(o))&&!o.nextElementSibling}function Ce(){return n===0&&i===0}function pe(){return!!o&&!o.nextElementSibling&&(!Qt(o)||!o.parentNode.nextElementSibling)}function Me(){if(d.pause){const h=p.wrapper.classList.contains("paused");ie(),p.wrapper.classList.add("paused"),h===!1&&lt({type:"paused"})}}function Gt(){const h=p.wrapper.classList.contains("paused");p.wrapper.classList.remove("paused"),Xt(),h&&lt({type:"resumed"})}function Pe(h){typeof h=="boolean"?h?Me():Gt():te()?Gt():Me()}function te(){return p.wrapper.classList.contains("paused")}function pn(h){typeof h=="boolean"?h?F.show():F.hide():F.isVisible()?F.hide():F.show()}function gn(h){typeof h=="boolean"?h?ae():se():f?ae():se()}function mn(){return!(!B||f)}function It(h,m,N,C){if(lt({type:"beforeslidechange",data:{indexh:h===void 0?n:h,indexv:m===void 0?i:m,origin:C}}).defaultPrevented)return;u=o;const O=p.wrapper.querySelectorAll(Vt);if(O.length===0)return;m!==void 0||nt.isActive()||(m=Te(O[h])),u&&u.parentNode&&u.parentNode.classList.contains("stack")&&Re(u.parentNode,i);const rt=A.concat();A.length=0;let pt=n||0,xt=i||0;n=Ie(Vt,h===void 0?n:h),i=Ie(tn,m===void 0?i:m);let Ht=n!==pt||i!==xt;Ht||(u=null);let Wt=O[n];o=Wt.querySelectorAll("section")[i]||Wt;let ut=!1;Ht&&u&&o&&!nt.isActive()&&(u.hasAttribute("data-auto-animate")&&o.hasAttribute("data-auto-animate")&&u.getAttribute("data-auto-animate-id")===o.getAttribute("data-auto-animate-id")&&!(n>pt||i>xt?o:u).hasAttribute("data-auto-animate-restart")&&(ut=!0,p.slides.classList.add("disable-slide-transitions")),j="running"),me(),At(),nt.isActive()&&nt.update(),N!==void 0&&D.goto(N),u&&u!==o&&(u.classList.remove("present"),u.setAttribute("aria-hidden","true"),Ce()&&setTimeout(()=>{yn().forEach(_t=>{Re(_t,0)})},0));t:for(let _t=0,An=A.length;_t<An;_t++){for(let le=0;le<rt.length;le++)if(rt[le]===A[_t]){rt.splice(le,1);continue t}p.viewport.classList.add(A[_t]),lt({type:A[_t]})}for(;rt.length;)p.viewport.classList.remove(rt.pop());Ht&&lt({type:"slidechanged",data:{indexh:n,indexv:i,previousSlide:u,currentSlide:o,origin:C}}),!Ht&&u||(H.stopEmbeddedContent(u),H.startEmbeddedContent(o)),requestAnimationFrame(()=>{r(l(o))}),b.update(),k.update(),bt.update(),it.update(),it.updateParallax(),q.update(),D.update(),X.writeURL(),Xt(),ut&&(setTimeout(()=>{p.slides.classList.remove("disable-slide-transitions")},0),d.autoAnimate&&ot.run(u,o))}function Ne(){U(),_(),At(),B=d.autoSlide,Xt(),it.create(),X.writeURL(),d.sortFragmentsOnSync===!0&&D.sortAll(),k.update(),b.update(),me(),bt.update(),bt.updateVisibility(),it.update(!0),q.update(),H.formatEmbeddedContent(),d.autoPlayMedia===!1?H.stopEmbeddedContent(o,{unloadIframes:!1}):H.startEmbeddedContent(o),nt.isActive()&&nt.layout()}function fn(h=o){it.sync(h),D.sync(h),H.load(h),it.update(),bt.update()}function vn(){qt().forEach(h=>{K(h,"section").forEach((m,N)=>{N>0&&(m.classList.remove("present"),m.classList.remove("past"),m.classList.add("future"),m.setAttribute("aria-hidden","true"))})})}function ge(h=qt()){h.forEach((m,N)=>{let C=h[Math.floor(Math.random()*h.length)];C.parentNode===m.parentNode&&m.parentNode.insertBefore(m,C);let O=m.querySelectorAll("section");O.length&&ge(O)})}function Ie(h,m){let N=K(p.wrapper,h),C=N.length,O=mt.isPrintingPDF(),rt=!1,pt=!1;if(C){d.loop&&(m>=C&&(rt=!0),(m%=C)<0&&(m=C+m,pt=!0)),m=Math.max(Math.min(m,C-1),0);for(let yt=0;yt<C;yt++){let ut=N[yt],_t=d.rtl&&!Qt(ut);ut.classList.remove("past"),ut.classList.remove("present"),ut.classList.remove("future"),ut.setAttribute("hidden",""),ut.setAttribute("aria-hidden","true"),ut.querySelector("section")&&ut.classList.add("stack"),O?ut.classList.add("present"):yt<m?(ut.classList.add(_t?"future":"past"),d.fragments&&_e(ut)):yt>m?(ut.classList.add(_t?"past":"future"),d.fragments&&$e(ut)):yt===m&&d.fragments&&(rt?$e(ut):pt&&_e(ut))}let xt=N[m],Ht=xt.classList.contains("present");xt.classList.add("present"),xt.removeAttribute("hidden"),xt.removeAttribute("aria-hidden"),Ht||lt({target:xt,type:"visible",bubbles:!1});let Wt=xt.getAttribute("data-state");Wt&&(A=A.concat(Wt.split(" ")))}else m=0;return m}function _e(h){K(h,".fragment").forEach(m=>{m.classList.add("visible"),m.classList.remove("current-fragment")})}function $e(h){K(h,".fragment.visible").forEach(m=>{m.classList.remove("visible","current-fragment")})}function me(){let h,m,N=qt(),C=N.length;if(C&&n!==void 0){let O=nt.isActive()?10:d.viewDistance;Zt&&(O=nt.isActive()?6:d.mobileViewDistance),mt.isPrintingPDF()&&(O=Number.MAX_VALUE);for(let rt=0;rt<C;rt++){let pt=N[rt],xt=K(pt,"section"),Ht=xt.length;if(h=Math.abs((n||0)-rt)||0,d.loop&&(h=Math.abs(((n||0)-rt)%(C-O))||0),h<O?H.load(pt):H.unload(pt),Ht){let Wt=Te(pt);for(let yt=0;yt<Ht;yt++){let ut=xt[yt];m=Math.abs(rt===(n||0)?(i||0)-yt:yt-Wt),h+m<O?H.load(ut):H.unload(ut)}}}Be()?p.wrapper.classList.add("has-vertical-slides"):p.wrapper.classList.remove("has-vertical-slides"),Oe()?p.wrapper.classList.add("has-horizontal-slides"):p.wrapper.classList.remove("has-horizontal-slides")}}function zt({includeFragments:h=!1}={}){let m=p.wrapper.querySelectorAll(Vt),N=p.wrapper.querySelectorAll(tn),C={left:n>0,right:n<m.length-1,up:i>0,down:i<N.length-1};if(d.loop&&(m.length>1&&(C.left=!0,C.right=!0),N.length>1&&(C.up=!0,C.down=!0)),m.length>1&&d.navigationMode==="linear"&&(C.right=C.right||C.down,C.left=C.left||C.up),h===!0){let O=D.availableRoutes();C.left=C.left||O.prev,C.up=C.up||O.prev,C.down=C.down||O.next,C.right=C.right||O.next}if(d.rtl){let O=C.left;C.left=C.right,C.right=O}return C}function ze(h=o){let m=qt(),N=0;t:for(let C=0;C<m.length;C++){let O=m[C],rt=O.querySelectorAll("section");for(let pt=0;pt<rt.length;pt++){if(rt[pt]===h)break t;rt[pt].dataset.visibility!=="uncounted"&&N++}if(O===h)break;O.classList.contains("stack")===!1&&O.dataset.visibility!=="uncounted"&&N++}return N}function bn(){let h=qe(),m=ze();if(o){let N=o.querySelectorAll(".fragment");if(N.length>0){let C=.9;m+=o.querySelectorAll(".fragment.visible").length/N.length*C}}return Math.min(m/(h-1),1)}function He(h){let m,N=n,C=i;if(h){let O=Qt(h),rt=O?h.parentNode:h,pt=qt();N=Math.max(pt.indexOf(rt),0),C=void 0,O&&(C=Math.max(K(h.parentNode,"section").indexOf(h),0))}if(!h&&o&&o.querySelectorAll(".fragment").length>0){let O=o.querySelector(".current-fragment");m=O&&O.hasAttribute("data-fragment-index")?parseInt(O.getAttribute("data-fragment-index"),10):o.querySelectorAll(".fragment.visible").length-1}return{h:N,v:C,f:m}}function fe(){return K(p.wrapper,Kt+':not(.stack):not([data-visibility="uncounted"])')}function qt(){return K(p.wrapper,Vt)}function De(){return K(p.wrapper,".slides>section>section")}function yn(){return K(p.wrapper,Vt+".stack")}function Oe(){return qt().length>1}function Be(){return De().length>1}function kn(){return fe().map(h=>{let m={};for(let N=0;N<h.attributes.length;N++){let C=h.attributes[N];m[C.name]=C.value}return m})}function qe(){return fe().length}function Fe(h,m){let N=qt()[h],C=N&&N.querySelectorAll("section");return C&&C.length&&typeof m=="number"?C?C[m]:void 0:N}function wn(h,m){let N=typeof h=="number"?Fe(h,m):h;if(N)return N.slideBackgroundElement}function je(){let h=He();return{indexh:h.h,indexv:h.v,indexf:h.f,paused:te(),overview:nt.isActive()}}function xn(h){if(typeof h=="object"){It(Yt(h.indexh),Yt(h.indexv),Yt(h.indexf));let m=Yt(h.paused),N=Yt(h.overview);typeof m=="boolean"&&m!==te()&&Pe(m),typeof N=="boolean"&&N!==nt.isActive()&&nt.toggle(N)}}function Xt(){if(ie(),o&&d.autoSlide!==!1){let h=o.querySelector(".current-fragment");h||(h=o.querySelector(".fragment"));let m=h?h.getAttribute("data-autoslide"):null,N=o.parentNode?o.parentNode.getAttribute("data-autoslide"):null,C=o.getAttribute("data-autoslide");m?B=parseInt(m,10):C?B=parseInt(C,10):N?B=parseInt(N,10):(B=d.autoSlide,o.querySelectorAll(".fragment").length===0&&K(o,"video, audio").forEach(O=>{O.hasAttribute("data-autoplay")&&B&&1e3*O.duration/O.playbackRate>B&&(B=1e3*O.duration/O.playbackRate+1e3)})),!B||f||te()||nt.isActive()||pe()&&!D.availableRoutes().next&&d.loop!==!0||(at=setTimeout(()=>{typeof d.autoSlideMethod=="function"?d.autoSlideMethod():ke(),Xt()},B),W=Date.now()),c&&c.setPlaying(at!==-1)}}function ie(){clearTimeout(at),at=-1}function se(){B&&!f&&(f=!0,lt({type:"autoslidepaused"}),clearTimeout(at),c&&c.setPlaying(!1))}function ae(){B&&f&&(f=!1,lt({type:"autoslideresumed"}),Xt())}function re({skipFragments:h=!1}={}){y.hasNavigatedHorizontally=!0,d.rtl?(nt.isActive()||h||D.next()===!1)&&zt().left&&It(n+1,d.navigationMode==="grid"?i:void 0):(nt.isActive()||h||D.prev()===!1)&&zt().left&&It(n-1,d.navigationMode==="grid"?i:void 0)}function ve({skipFragments:h=!1}={}){y.hasNavigatedHorizontally=!0,d.rtl?(nt.isActive()||h||D.prev()===!1)&&zt().right&&It(n-1,d.navigationMode==="grid"?i:void 0):(nt.isActive()||h||D.next()===!1)&&zt().right&&It(n+1,d.navigationMode==="grid"?i:void 0)}function be({skipFragments:h=!1}={}){(nt.isActive()||h||D.prev()===!1)&&zt().up&&It(n,i-1)}function ye({skipFragments:h=!1}={}){y.hasNavigatedVertically=!0,(nt.isActive()||h||D.next()===!1)&&zt().down&&It(n,i+1)}function Ue({skipFragments:h=!1}={}){if(h||D.prev()===!1)if(zt().up)be({skipFragments:h});else{let m;if(m=d.rtl?K(p.wrapper,Vt+".future").pop():K(p.wrapper,Vt+".past").pop(),m&&m.classList.contains("stack")){let N=m.querySelectorAll("section").length-1||void 0;It(n-1,N)}else re({skipFragments:h})}}function ke({skipFragments:h=!1}={}){if(y.hasNavigatedHorizontally=!0,y.hasNavigatedVertically=!0,h||D.next()===!1){let m=zt();m.down&&m.right&&d.loop&&Le()&&(m.down=!1),m.down?ye({skipFragments:h}):d.rtl?re({skipFragments:h}):ve({skipFragments:h})}}function Sn(h){d.autoSlideStoppable&&se()}function We(h){let m=h.data;if(typeof m=="string"&&m.charAt(0)==="{"&&m.charAt(m.length-1)==="}"&&(m=JSON.parse(m),m.method&&typeof e[m.method]=="function"))if(Fn.test(m.method)===!1){const N=e[m.method].apply(e,m.args);kt("callback",{method:m.method,result:N})}else console.warn('reveal.js: "'+m.method+'" is is blacklisted from the postMessage API')}function Ve(h){j==="running"&&/section/gi.test(h.target.nodeName)&&(j="idle",lt({type:"slidetransitionend",data:{indexh:n,indexv:i,previousSlide:u,currentSlide:o}}))}function Ke(h){const m=gt(h.target,'a[href^="#"]');if(m){const N=m.getAttribute("href"),C=X.getIndicesFromHash(N);C&&(e.slide(C.h,C.v,C.f),h.preventDefault())}}function Xe(h){At()}function Ye(h){document.hidden===!1&&document.activeElement!==document.body&&(typeof document.activeElement.blur=="function"&&document.activeElement.blur(),document.body.focus())}function oe(h){(document.fullscreenElement||document.webkitFullscreenElement)===p.wrapper&&(h.stopImmediatePropagation(),setTimeout(()=>{e.layout(),e.focus.focus()},1))}function Je(h){if(h.currentTarget&&h.currentTarget.hasAttribute("href")){let m=h.currentTarget.getAttribute("href");m&&(Ut(m),h.preventDefault())}}function En(h){pe()&&d.loop===!1?(It(0,0),ae()):f?ae():se()}const Ze={VERSION:dn,initialize:ee,configure:L,destroy:Y,sync:Ne,syncSlide:fn,syncFragments:D.sync.bind(D),slide:It,left:re,right:ve,up:be,down:ye,prev:Ue,next:ke,navigateLeft:re,navigateRight:ve,navigateUp:be,navigateDown:ye,navigatePrev:Ue,navigateNext:ke,navigateFragment:D.goto.bind(D),prevFragment:D.prev.bind(D),nextFragment:D.next.bind(D),on:V,off:ht,addEventListener:V,removeEventListener:ht,layout:At,shuffle:ge,availableRoutes:zt,availableFragments:D.availableRoutes.bind(D),toggleHelp:wt,toggleOverview:nt.toggle.bind(nt),togglePause:Pe,toggleAutoSlide:gn,toggleJumpToSlide:pn,isFirstSlide:Ce,isLastSlide:pe,isLastVerticalSlide:Le,isVerticalSlide:Qt,isPaused:te,isAutoSliding:mn,isSpeakerNotes:bt.isSpeakerNotesWindow.bind(bt),isOverview:nt.isActive.bind(nt),isFocused:dt.isFocused.bind(dt),isPrintingPDF:mt.isPrintingPDF.bind(mt),isReady:()=>w,loadSlide:H.load.bind(H),unloadSlide:H.unload.bind(H),showPreview:Ut,hidePreview:ct,addEventListeners:_,removeEventListeners:U,dispatchEvent:lt,getState:je,setState:xn,getProgress:bn,getIndices:He,getSlidesAttributes:kn,getSlidePastCount:ze,getTotalSlides:qe,getSlide:Fe,getPreviousSlide:()=>u,getCurrentSlide:()=>o,getSlideBackground:wn,getSlideNotes:bt.getSlideNotes.bind(bt),getSlides:fe,getHorizontalSlides:qt,getVerticalSlides:De,hasHorizontalSlides:Oe,hasVerticalSlides:Be,hasNavigatedHorizontally:()=>y.hasNavigatedHorizontally,hasNavigatedVertically:()=>y.hasNavigatedVertically,addKeyBinding:$.addKeyBinding.bind($),removeKeyBinding:$.removeKeyBinding.bind($),triggerKey:$.triggerKey.bind($),registerKeyboardShortcut:$.registerKeyboardShortcut.bind($),getComputedSlideSize:ne,getScale:()=>R,getConfig:()=>d,getQueryHash:Qe,getSlidePath:X.getHash.bind(X),getRevealElement:()=>g,getSlidesElement:()=>p.slides,getViewportElement:()=>p.viewport,getBackgroundsElement:()=>it.element,registerPlugin:vt.registerPlugin.bind(vt),hasPlugin:vt.hasPlugin.bind(vt),getPlugin:vt.getPlugin.bind(vt),getPlugins:vt.getRegisteredPlugins.bind(vt)};return Jt(e,{...Ze,announceStatus:r,getStatusText:l,print:mt,focus:dt,progress:b,controls:k,location:X,overview:nt,fragments:D,slideContent:H,slideNumber:q,onUserInput:Sn,closeOverlay:ct,updateSlidesVisibility:me,layoutSlideContents:Bt,transformSlides:Nt,cueAutoSlide:Xt,cancelAutoSlide:ie}),Ze}let Ft=un,rn=[];Ft.initialize=g=>(Object.assign(Ft,new un(document.querySelector(".reveal"),g)),rn.map(t=>t(Ft)),Ft.initialize()),["configure","on","off","addEventListener","removeEventListener","registerPlugin"].forEach(g=>{Ft[g]=(...t)=>{rn.push(e=>e[g].call(null,...t))}}),Ft.isReady=()=>!1,Ft.VERSION=dn;var si=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ai(g){return g&&g.__esModule&&Object.prototype.hasOwnProperty.call(g,"default")?g.default:g}var hn={exports:{}};(function(g,t){(function(e,n){g.exports=n()})(si,function(){function e(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let n={baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const i=/[&<>"']/,u=/[&<>"']/g,o=/[<>"']|&(?!#?\w+;)/,c=/[<>"']|&(?!#?\w+;)/g,d={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},w=z=>d[z];function y(z,a){if(a){if(i.test(z))return z.replace(u,w)}else if(o.test(z))return z.replace(c,w);return z}const A=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function R(z){return z.replace(A,(a,s)=>(s=s.toLowerCase())==="colon"?":":s.charAt(0)==="#"?s.charAt(1)==="x"?String.fromCharCode(parseInt(s.substring(2),16)):String.fromCharCode(+s.substring(1)):"")}const S=/(^|[^\[])\^/g;function p(z,a){z=z.source||z,a=a||"";const s={replace:(r,l)=>(l=(l=l.source||l).replace(S,"$1"),z=z.replace(r,l),s),getRegex:()=>new RegExp(z,a)};return s}const j=/[^\w:]/g,B=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function at(z,a,s){if(z){let r;try{r=decodeURIComponent(R(s)).replace(j,"").toLowerCase()}catch{return null}if(r.indexOf("javascript:")===0||r.indexOf("vbscript:")===0||r.indexOf("data:")===0)return null}a&&!B.test(s)&&(s=function(r,l){W[" "+r]||(f.test(r)?W[" "+r]=r+"/":W[" "+r]=D(r,"/",!0)),r=W[" "+r];const v=r.indexOf(":")===-1;return l.substring(0,2)==="//"?v?l:r.replace(H,"$1")+l:l.charAt(0)==="/"?v?l:r.replace(q,"$1")+l:r+l}(a,s));try{s=encodeURI(s).replace(/%25/g,"%")}catch{return null}return s}const W={},f=/^[^:]+:\/*[^/]*$/,H=/^([^:]+:)[\s\S]*$/,q=/^([^:]+:\/*[^/]*)[\s\S]*$/,F={exec:function(){}};function ot(z){let a,s,r=1;for(;r<arguments.length;r++)for(s in a=arguments[r],a)Object.prototype.hasOwnProperty.call(a,s)&&(z[s]=a[s]);return z}function it(z,a){const s=z.replace(/\|/g,(l,v,x)=>{let P=!1,L=v;for(;--L>=0&&x[L]==="\\";)P=!P;return P?"|":" |"}).split(/ \|/);let r=0;if(s[0].trim()||s.shift(),s.length>0&&!s[s.length-1].trim()&&s.pop(),s.length>a)s.splice(a);else for(;s.length<a;)s.push("");for(;r<s.length;r++)s[r]=s[r].trim().replace(/\\\|/g,"|");return s}function D(z,a,s){const r=z.length;if(r===0)return"";let l=0;for(;l<r;){const v=z.charAt(r-l-1);if(v!==a||s){if(v===a||!s)break;l++}else l++}return z.substr(0,r-l)}function nt(z){z&&z.sanitize&&!z.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function $(z,a){if(a<1)return"";let s="";for(;a>1;)1&a&&(s+=z),a>>=1,z+=z;return s+z}function X(z,a,s,r){const l=a.href,v=a.title?y(a.title):null,x=z[1].replace(/\\([\[\]])/g,"$1");if(z[0].charAt(0)!=="!"){r.state.inLink=!0;const P={type:"link",raw:s,href:l,title:v,text:x,tokens:r.inlineTokens(x,[])};return r.state.inLink=!1,P}return{type:"image",raw:s,href:l,title:v,text:y(x)}}class k{constructor(a){this.options=a||n}space(a){const s=this.rules.block.newline.exec(a);if(s&&s[0].length>0)return{type:"space",raw:s[0]}}code(a){const s=this.rules.block.code.exec(a);if(s){const r=s[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:s[0],codeBlockStyle:"indented",text:this.options.pedantic?r:D(r,`
`)}}}fences(a){const s=this.rules.block.fences.exec(a);if(s){const r=s[0],l=function(v,x){const P=v.match(/^(\s+)(?:```)/);if(P===null)return x;const L=P[1];return x.split(`
`).map(_=>{const U=_.match(/^\s+/);if(U===null)return _;const[Y]=U;return Y.length>=L.length?_.slice(L.length):_}).join(`
`)}(r,s[3]||"");return{type:"code",raw:r,lang:s[2]?s[2].trim():s[2],text:l}}}heading(a){const s=this.rules.block.heading.exec(a);if(s){let r=s[2].trim();if(/#$/.test(r)){const v=D(r,"#");this.options.pedantic?r=v.trim():v&&!/ $/.test(v)||(r=v.trim())}const l={type:"heading",raw:s[0],depth:s[1].length,text:r,tokens:[]};return this.lexer.inline(l.text,l.tokens),l}}hr(a){const s=this.rules.block.hr.exec(a);if(s)return{type:"hr",raw:s[0]}}blockquote(a){const s=this.rules.block.blockquote.exec(a);if(s){const r=s[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:s[0],tokens:this.lexer.blockTokens(r,[]),text:r}}}list(a){let s=this.rules.block.list.exec(a);if(s){let r,l,v,x,P,L,_,U,Y,V,ht,Nt,lt=s[1].trim();const kt=lt.length>1,st={type:"list",raw:"",ordered:kt,start:kt?+lt.slice(0,-1):"",loose:!1,items:[]};lt=kt?`\\d{1,9}\\${lt.slice(-1)}`:`\\${lt}`,this.options.pedantic&&(lt=kt?lt:"[*+-]");const $t=new RegExp(`^( {0,3}${lt})((?: [^\\n]*)?(?:\\n|$))`);for(;a&&(Nt=!1,s=$t.exec(a))&&!this.rules.block.hr.test(a);){if(r=s[0],a=a.substring(r.length),U=s[2].split(`
`,1)[0],Y=a.split(`
`,1)[0],this.options.pedantic?(x=2,ht=U.trimLeft()):(x=s[2].search(/[^ ]/),x=x>4?1:x,ht=U.slice(x),x+=s[1].length),L=!1,!U&&/^ *$/.test(Y)&&(r+=Y+`
`,a=a.substring(Y.length+1),Nt=!0),!Nt){const wt=new RegExp(`^ {0,${Math.min(3,x-1)}}(?:[*+-]|\\d{1,9}[.)])`);for(;a&&(V=a.split(`
`,1)[0],U=V,this.options.pedantic&&(U=U.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!wt.test(U));){if(U.search(/[^ ]/)>=x||!U.trim())ht+=`
`+U.slice(x);else{if(L)break;ht+=`
`+U}L||U.trim()||(L=!0),r+=V+`
`,a=a.substring(V.length+1)}}st.loose||(_?st.loose=!0:/\n *\n *$/.test(r)&&(_=!0)),this.options.gfm&&(l=/^\[[ xX]\] /.exec(ht),l&&(v=l[0]!=="[ ] ",ht=ht.replace(/^\[[ xX]\] +/,""))),st.items.push({type:"list_item",raw:r,task:!!l,checked:v,loose:!1,text:ht}),st.raw+=r}st.items[st.items.length-1].raw=r.trimRight(),st.items[st.items.length-1].text=ht.trimRight(),st.raw=st.raw.trimRight();const Ut=st.items.length;for(P=0;P<Ut;P++){this.lexer.state.top=!1,st.items[P].tokens=this.lexer.blockTokens(st.items[P].text,[]);const wt=st.items[P].tokens.filter(ct=>ct.type==="space"),Ot=wt.every(ct=>{const At=ct.raw.split("");let Bt=0;for(const ne of At)if(ne===`
`&&(Bt+=1),Bt>1)return!0;return!1});!st.loose&&wt.length&&Ot&&(st.loose=!0,st.items[P].loose=!0)}return st}}html(a){const s=this.rules.block.html.exec(a);if(s){const r={type:"html",raw:s[0],pre:!this.options.sanitizer&&(s[1]==="pre"||s[1]==="script"||s[1]==="style"),text:s[0]};return this.options.sanitize&&(r.type="paragraph",r.text=this.options.sanitizer?this.options.sanitizer(s[0]):y(s[0]),r.tokens=[],this.lexer.inline(r.text,r.tokens)),r}}def(a){const s=this.rules.block.def.exec(a);if(s)return s[3]&&(s[3]=s[3].substring(1,s[3].length-1)),{type:"def",tag:s[1].toLowerCase().replace(/\s+/g," "),raw:s[0],href:s[2],title:s[3]}}table(a){const s=this.rules.block.table.exec(a);if(s){const r={type:"table",header:it(s[1]).map(l=>({text:l})),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:s[3]&&s[3].trim()?s[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(r.header.length===r.align.length){r.raw=s[0];let l,v,x,P,L=r.align.length;for(l=0;l<L;l++)/^ *-+: *$/.test(r.align[l])?r.align[l]="right":/^ *:-+: *$/.test(r.align[l])?r.align[l]="center":/^ *:-+ *$/.test(r.align[l])?r.align[l]="left":r.align[l]=null;for(L=r.rows.length,l=0;l<L;l++)r.rows[l]=it(r.rows[l],r.header.length).map(_=>({text:_}));for(L=r.header.length,v=0;v<L;v++)r.header[v].tokens=[],this.lexer.inlineTokens(r.header[v].text,r.header[v].tokens);for(L=r.rows.length,v=0;v<L;v++)for(P=r.rows[v],x=0;x<P.length;x++)P[x].tokens=[],this.lexer.inlineTokens(P[x].text,P[x].tokens);return r}}}lheading(a){const s=this.rules.block.lheading.exec(a);if(s){const r={type:"heading",raw:s[0],depth:s[2].charAt(0)==="="?1:2,text:s[1],tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}paragraph(a){const s=this.rules.block.paragraph.exec(a);if(s){const r={type:"paragraph",raw:s[0],text:s[1].charAt(s[1].length-1)===`
`?s[1].slice(0,-1):s[1],tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}text(a){const s=this.rules.block.text.exec(a);if(s){const r={type:"text",raw:s[0],text:s[0],tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}escape(a){const s=this.rules.inline.escape.exec(a);if(s)return{type:"escape",raw:s[0],text:y(s[1])}}tag(a){const s=this.rules.inline.tag.exec(a);if(s)return!this.lexer.state.inLink&&/^<a /i.test(s[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(s[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(s[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(s[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:s[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):y(s[0]):s[0]}}link(a){const s=this.rules.inline.link.exec(a);if(s){const r=s[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const x=D(r.slice(0,-1),"\\");if((r.length-x.length)%2==0)return}else{const x=function(P,L){if(P.indexOf(L[1])===-1)return-1;const _=P.length;let U=0,Y=0;for(;Y<_;Y++)if(P[Y]==="\\")Y++;else if(P[Y]===L[0])U++;else if(P[Y]===L[1]&&(U--,U<0))return Y;return-1}(s[2],"()");if(x>-1){const P=(s[0].indexOf("!")===0?5:4)+s[1].length+x;s[2]=s[2].substring(0,x),s[0]=s[0].substring(0,P).trim(),s[3]=""}}let l=s[2],v="";if(this.options.pedantic){const x=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(l);x&&(l=x[1],v=x[3])}else v=s[3]?s[3].slice(1,-1):"";return l=l.trim(),/^</.test(l)&&(l=this.options.pedantic&&!/>$/.test(r)?l.slice(1):l.slice(1,-1)),X(s,{href:l&&l.replace(this.rules.inline._escapes,"$1"),title:v&&v.replace(this.rules.inline._escapes,"$1")},s[0],this.lexer)}}reflink(a,s){let r;if((r=this.rules.inline.reflink.exec(a))||(r=this.rules.inline.nolink.exec(a))){let l=(r[2]||r[1]).replace(/\s+/g," ");if(l=s[l.toLowerCase()],!l||!l.href){const v=r[0].charAt(0);return{type:"text",raw:v,text:v}}return X(r,l,r[0],this.lexer)}}emStrong(a,s,r=""){let l=this.rules.inline.emStrong.lDelim.exec(a);if(!l||l[3]&&r.match(/[\p{L}\p{N}]/u))return;const v=l[1]||l[2]||"";if(!v||v&&(r===""||this.rules.inline.punctuation.exec(r))){const x=l[0].length-1;let P,L,_=x,U=0;const Y=l[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(Y.lastIndex=0,s=s.slice(-1*a.length+x);(l=Y.exec(s))!=null;){if(P=l[1]||l[2]||l[3]||l[4]||l[5]||l[6],!P)continue;if(L=P.length,l[3]||l[4]){_+=L;continue}if((l[5]||l[6])&&x%3&&!((x+L)%3)){U+=L;continue}if(_-=L,_>0)continue;if(L=Math.min(L,L+_+U),Math.min(x,L)%2){const ht=a.slice(1,x+l.index+L);return{type:"em",raw:a.slice(0,x+l.index+L+1),text:ht,tokens:this.lexer.inlineTokens(ht,[])}}const V=a.slice(2,x+l.index+L-1);return{type:"strong",raw:a.slice(0,x+l.index+L+1),text:V,tokens:this.lexer.inlineTokens(V,[])}}}}codespan(a){const s=this.rules.inline.code.exec(a);if(s){let r=s[2].replace(/\n/g," ");const l=/[^ ]/.test(r),v=/^ /.test(r)&&/ $/.test(r);return l&&v&&(r=r.substring(1,r.length-1)),r=y(r,!0),{type:"codespan",raw:s[0],text:r}}}br(a){const s=this.rules.inline.br.exec(a);if(s)return{type:"br",raw:s[0]}}del(a){const s=this.rules.inline.del.exec(a);if(s)return{type:"del",raw:s[0],text:s[2],tokens:this.lexer.inlineTokens(s[2],[])}}autolink(a,s){const r=this.rules.inline.autolink.exec(a);if(r){let l,v;return r[2]==="@"?(l=y(this.options.mangle?s(r[1]):r[1]),v="mailto:"+l):(l=y(r[1]),v=l),{type:"link",raw:r[0],text:l,href:v,tokens:[{type:"text",raw:l,text:l}]}}}url(a,s){let r;if(r=this.rules.inline.url.exec(a)){let l,v;if(r[2]==="@")l=y(this.options.mangle?s(r[0]):r[0]),v="mailto:"+l;else{let x;do x=r[0],r[0]=this.rules.inline._backpedal.exec(r[0])[0];while(x!==r[0]);l=y(r[0]),v=r[1]==="www."?"http://"+l:l}return{type:"link",raw:r[0],text:l,href:v,tokens:[{type:"text",raw:l,text:l}]}}}inlineText(a,s){const r=this.rules.inline.text.exec(a);if(r){let l;return l=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):y(r[0]):r[0]:y(this.options.smartypants?s(r[0]):r[0]),{type:"text",raw:r[0],text:l}}}}const b={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:F,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};b.def=p(b.def).replace("label",b._label).replace("title",b._title).getRegex(),b.bullet=/(?:[*+-]|\d{1,9}[.)])/,b.listItemStart=p(/^( *)(bull) */).replace("bull",b.bullet).getRegex(),b.list=p(b.list).replace(/bull/g,b.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+b.def.source+")").getRegex(),b._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",b._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,b.html=p(b.html,"i").replace("comment",b._comment).replace("tag",b._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),b.paragraph=p(b._paragraph).replace("hr",b.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",b._tag).getRegex(),b.blockquote=p(b.blockquote).replace("paragraph",b.paragraph).getRegex(),b.normal=ot({},b),b.gfm=ot({},b.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),b.gfm.table=p(b.gfm.table).replace("hr",b.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",b._tag).getRegex(),b.gfm.paragraph=p(b._paragraph).replace("hr",b.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",b.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",b._tag).getRegex(),b.pedantic=ot({},b.normal,{html:p(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",b._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:F,paragraph:p(b.normal._paragraph).replace("hr",b.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",b.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const E={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:F,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:F,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function vt(z){return z.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function mt(z){let a,s,r="";const l=z.length;for(a=0;a<l;a++)s=z.charCodeAt(a),Math.random()>.5&&(s="x"+s.toString(16)),r+="&#"+s+";";return r}E._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",E.punctuation=p(E.punctuation).replace(/punctuation/g,E._punctuation).getRegex(),E.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,E.escapedEmSt=/\\\*|\\_/g,E._comment=p(b._comment).replace("(?:-->|$)","-->").getRegex(),E.emStrong.lDelim=p(E.emStrong.lDelim).replace(/punct/g,E._punctuation).getRegex(),E.emStrong.rDelimAst=p(E.emStrong.rDelimAst,"g").replace(/punct/g,E._punctuation).getRegex(),E.emStrong.rDelimUnd=p(E.emStrong.rDelimUnd,"g").replace(/punct/g,E._punctuation).getRegex(),E._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,E._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,E._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,E.autolink=p(E.autolink).replace("scheme",E._scheme).replace("email",E._email).getRegex(),E._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,E.tag=p(E.tag).replace("comment",E._comment).replace("attribute",E._attribute).getRegex(),E._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,E._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,E._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,E.link=p(E.link).replace("label",E._label).replace("href",E._href).replace("title",E._title).getRegex(),E.reflink=p(E.reflink).replace("label",E._label).replace("ref",b._label).getRegex(),E.nolink=p(E.nolink).replace("ref",b._label).getRegex(),E.reflinkSearch=p(E.reflinkSearch,"g").replace("reflink",E.reflink).replace("nolink",E.nolink).getRegex(),E.normal=ot({},E),E.pedantic=ot({},E.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:p(/^!?\[(label)\]\((.*?)\)/).replace("label",E._label).getRegex(),reflink:p(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",E._label).getRegex()}),E.gfm=ot({},E.normal,{escape:p(E.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),E.gfm.url=p(E.gfm.url,"i").replace("email",E.gfm._extended_email).getRegex(),E.breaks=ot({},E.gfm,{br:p(E.br).replace("{2,}","*").getRegex(),text:p(E.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});class dt{constructor(a){this.tokens=[],this.tokens.links=Object.create(null),this.options=a||n,this.options.tokenizer=this.options.tokenizer||new k,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const s={block:b.normal,inline:E.normal};this.options.pedantic?(s.block=b.pedantic,s.inline=E.pedantic):this.options.gfm&&(s.block=b.gfm,this.options.breaks?s.inline=E.breaks:s.inline=E.gfm),this.tokenizer.rules=s}static get rules(){return{block:b,inline:E}}static lex(a,s){return new dt(s).lex(a)}static lexInline(a,s){return new dt(s).inlineTokens(a)}lex(a){let s;for(a=a.replace(/\r\n|\r/g,`
`).replace(/\t/g,"    "),this.blockTokens(a,this.tokens);s=this.inlineQueue.shift();)this.inlineTokens(s.src,s.tokens);return this.tokens}blockTokens(a,s=[]){let r,l,v,x;for(this.options.pedantic&&(a=a.replace(/^ +$/gm,""));a;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(P=>!!(r=P.call({lexer:this},a,s))&&(a=a.substring(r.raw.length),s.push(r),!0))))if(r=this.tokenizer.space(a))a=a.substring(r.raw.length),r.raw.length===1&&s.length>0?s[s.length-1].raw+=`
`:s.push(r);else if(r=this.tokenizer.code(a))a=a.substring(r.raw.length),l=s[s.length-1],!l||l.type!=="paragraph"&&l.type!=="text"?s.push(r):(l.raw+=`
`+r.raw,l.text+=`
`+r.text,this.inlineQueue[this.inlineQueue.length-1].src=l.text);else if(r=this.tokenizer.fences(a))a=a.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.heading(a))a=a.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.hr(a))a=a.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.blockquote(a))a=a.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.list(a))a=a.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.html(a))a=a.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.def(a))a=a.substring(r.raw.length),l=s[s.length-1],!l||l.type!=="paragraph"&&l.type!=="text"?this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title}):(l.raw+=`
`+r.raw,l.text+=`
`+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=l.text);else if(r=this.tokenizer.table(a))a=a.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.lheading(a))a=a.substring(r.raw.length),s.push(r);else{if(v=a,this.options.extensions&&this.options.extensions.startBlock){let P=1/0;const L=a.slice(1);let _;this.options.extensions.startBlock.forEach(function(U){_=U.call({lexer:this},L),typeof _=="number"&&_>=0&&(P=Math.min(P,_))}),P<1/0&&P>=0&&(v=a.substring(0,P+1))}if(this.state.top&&(r=this.tokenizer.paragraph(v)))l=s[s.length-1],x&&l.type==="paragraph"?(l.raw+=`
`+r.raw,l.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=l.text):s.push(r),x=v.length!==a.length,a=a.substring(r.raw.length);else if(r=this.tokenizer.text(a))a=a.substring(r.raw.length),l=s[s.length-1],l&&l.type==="text"?(l.raw+=`
`+r.raw,l.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=l.text):s.push(r);else if(a){const P="Infinite loop on byte: "+a.charCodeAt(0);if(this.options.silent){console.error(P);break}throw new Error(P)}}return this.state.top=!0,s}inline(a,s){this.inlineQueue.push({src:a,tokens:s})}inlineTokens(a,s=[]){let r,l,v,x,P,L,_=a;if(this.tokens.links){const U=Object.keys(this.tokens.links);if(U.length>0)for(;(x=this.tokenizer.rules.inline.reflinkSearch.exec(_))!=null;)U.includes(x[0].slice(x[0].lastIndexOf("[")+1,-1))&&(_=_.slice(0,x.index)+"["+$("a",x[0].length-2)+"]"+_.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(x=this.tokenizer.rules.inline.blockSkip.exec(_))!=null;)_=_.slice(0,x.index)+"["+$("a",x[0].length-2)+"]"+_.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(x=this.tokenizer.rules.inline.escapedEmSt.exec(_))!=null;)_=_.slice(0,x.index)+"++"+_.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;a;)if(P||(L=""),P=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(U=>!!(r=U.call({lexer:this},a,s))&&(a=a.substring(r.raw.length),s.push(r),!0))))if(r=this.tokenizer.escape(a))a=a.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.tag(a))a=a.substring(r.raw.length),l=s[s.length-1],l&&r.type==="text"&&l.type==="text"?(l.raw+=r.raw,l.text+=r.text):s.push(r);else if(r=this.tokenizer.link(a))a=a.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.reflink(a,this.tokens.links))a=a.substring(r.raw.length),l=s[s.length-1],l&&r.type==="text"&&l.type==="text"?(l.raw+=r.raw,l.text+=r.text):s.push(r);else if(r=this.tokenizer.emStrong(a,_,L))a=a.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.codespan(a))a=a.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.br(a))a=a.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.del(a))a=a.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.autolink(a,mt))a=a.substring(r.raw.length),s.push(r);else if(this.state.inLink||!(r=this.tokenizer.url(a,mt))){if(v=a,this.options.extensions&&this.options.extensions.startInline){let U=1/0;const Y=a.slice(1);let V;this.options.extensions.startInline.forEach(function(ht){V=ht.call({lexer:this},Y),typeof V=="number"&&V>=0&&(U=Math.min(U,V))}),U<1/0&&U>=0&&(v=a.substring(0,U+1))}if(r=this.tokenizer.inlineText(v,vt))a=a.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(L=r.raw.slice(-1)),P=!0,l=s[s.length-1],l&&l.type==="text"?(l.raw+=r.raw,l.text+=r.text):s.push(r);else if(a){const U="Infinite loop on byte: "+a.charCodeAt(0);if(this.options.silent){console.error(U);break}throw new Error(U)}}else a=a.substring(r.raw.length),s.push(r);return s}}class ft{constructor(a){this.options=a||n}code(a,s,r){const l=(s||"").match(/\S*/)[0];if(this.options.highlight){const v=this.options.highlight(a,l);v!=null&&v!==a&&(r=!0,a=v)}return a=a.replace(/\n$/,"")+`
`,l?'<pre><code class="'+this.options.langPrefix+y(l,!0)+'">'+(r?a:y(a,!0))+`</code></pre>
`:"<pre><code>"+(r?a:y(a,!0))+`</code></pre>
`}blockquote(a){return`<blockquote>
`+a+`</blockquote>
`}html(a){return a}heading(a,s,r,l){return this.options.headerIds?"<h"+s+' id="'+this.options.headerPrefix+l.slug(r)+'">'+a+"</h"+s+`>
`:"<h"+s+">"+a+"</h"+s+`>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(a,s,r){const l=s?"ol":"ul";return"<"+l+(s&&r!==1?' start="'+r+'"':"")+`>
`+a+"</"+l+`>
`}listitem(a){return"<li>"+a+`</li>
`}checkbox(a){return"<input "+(a?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(a){return"<p>"+a+`</p>
`}table(a,s){return s&&(s="<tbody>"+s+"</tbody>"),`<table>
<thead>
`+a+`</thead>
`+s+`</table>
`}tablerow(a){return`<tr>
`+a+`</tr>
`}tablecell(a,s){const r=s.header?"th":"td";return(s.align?"<"+r+' align="'+s.align+'">':"<"+r+">")+a+"</"+r+`>
`}strong(a){return"<strong>"+a+"</strong>"}em(a){return"<em>"+a+"</em>"}codespan(a){return"<code>"+a+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(a){return"<del>"+a+"</del>"}link(a,s,r){if((a=at(this.options.sanitize,this.options.baseUrl,a))===null)return r;let l='<a href="'+y(a)+'"';return s&&(l+=' title="'+s+'"'),l+=">"+r+"</a>",l}image(a,s,r){if((a=at(this.options.sanitize,this.options.baseUrl,a))===null)return r;let l='<img src="'+a+'" alt="'+r+'"';return s&&(l+=' title="'+s+'"'),l+=this.options.xhtml?"/>":">",l}text(a){return a}}class bt{strong(a){return a}em(a){return a}codespan(a){return a}del(a){return a}html(a){return a}text(a){return a}link(a,s,r){return""+r}image(a,s,r){return""+r}br(){return""}}class ee{constructor(){this.seen={}}serialize(a){return a.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(a,s){let r=a,l=0;if(this.seen.hasOwnProperty(r)){l=this.seen[a];do l++,r=a+"-"+l;while(this.seen.hasOwnProperty(r))}return s||(this.seen[a]=l,this.seen[r]=0),r}slug(a,s={}){const r=this.serialize(a);return this.getNextSafeSlug(r,s.dryrun)}}class Pt{constructor(a){this.options=a||n,this.options.renderer=this.options.renderer||new ft,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new bt,this.slugger=new ee}static parse(a,s){return new Pt(s).parse(a)}static parseInline(a,s){return new Pt(s).parseInline(a)}parse(a,s=!0){let r,l,v,x,P,L,_,U,Y,V,ht,Nt,lt,kt,st,$t,Ut,wt,Ot,ct="";const At=a.length;for(r=0;r<At;r++)if(V=a[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[V.type]&&(Ot=this.options.extensions.renderers[V.type].call({parser:this},V),Ot!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(V.type)))ct+=Ot||"";else switch(V.type){case"space":continue;case"hr":ct+=this.renderer.hr();continue;case"heading":ct+=this.renderer.heading(this.parseInline(V.tokens),V.depth,R(this.parseInline(V.tokens,this.textRenderer)),this.slugger);continue;case"code":ct+=this.renderer.code(V.text,V.lang,V.escaped);continue;case"table":for(U="",_="",x=V.header.length,l=0;l<x;l++)_+=this.renderer.tablecell(this.parseInline(V.header[l].tokens),{header:!0,align:V.align[l]});for(U+=this.renderer.tablerow(_),Y="",x=V.rows.length,l=0;l<x;l++){for(L=V.rows[l],_="",P=L.length,v=0;v<P;v++)_+=this.renderer.tablecell(this.parseInline(L[v].tokens),{header:!1,align:V.align[v]});Y+=this.renderer.tablerow(_)}ct+=this.renderer.table(U,Y);continue;case"blockquote":Y=this.parse(V.tokens),ct+=this.renderer.blockquote(Y);continue;case"list":for(ht=V.ordered,Nt=V.start,lt=V.loose,x=V.items.length,Y="",l=0;l<x;l++)st=V.items[l],$t=st.checked,Ut=st.task,kt="",st.task&&(wt=this.renderer.checkbox($t),lt?st.tokens.length>0&&st.tokens[0].type==="paragraph"?(st.tokens[0].text=wt+" "+st.tokens[0].text,st.tokens[0].tokens&&st.tokens[0].tokens.length>0&&st.tokens[0].tokens[0].type==="text"&&(st.tokens[0].tokens[0].text=wt+" "+st.tokens[0].tokens[0].text)):st.tokens.unshift({type:"text",text:wt}):kt+=wt),kt+=this.parse(st.tokens,lt),Y+=this.renderer.listitem(kt,Ut,$t);ct+=this.renderer.list(Y,ht,Nt);continue;case"html":ct+=this.renderer.html(V.text);continue;case"paragraph":ct+=this.renderer.paragraph(this.parseInline(V.tokens));continue;case"text":for(Y=V.tokens?this.parseInline(V.tokens):V.text;r+1<At&&a[r+1].type==="text";)V=a[++r],Y+=`
`+(V.tokens?this.parseInline(V.tokens):V.text);ct+=s?this.renderer.paragraph(Y):Y;continue;default:{const Bt='Token with "'+V.type+'" type was not found.';if(this.options.silent)return void console.error(Bt);throw new Error(Bt)}}return ct}parseInline(a,s){s=s||this.renderer;let r,l,v,x="";const P=a.length;for(r=0;r<P;r++)if(l=a[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[l.type]&&(v=this.options.extensions.renderers[l.type].call({parser:this},l),v!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(l.type)))x+=v||"";else switch(l.type){case"escape":case"text":x+=s.text(l.text);break;case"html":x+=s.html(l.text);break;case"link":x+=s.link(l.href,l.title,this.parseInline(l.tokens,s));break;case"image":x+=s.image(l.href,l.title,l.text);break;case"strong":x+=s.strong(this.parseInline(l.tokens,s));break;case"em":x+=s.em(this.parseInline(l.tokens,s));break;case"codespan":x+=s.codespan(l.text);break;case"br":x+=s.br();break;case"del":x+=s.del(this.parseInline(l.tokens,s));break;default:{const L='Token with "'+l.type+'" type was not found.';if(this.options.silent)return void console.error(L);throw new Error(L)}}return x}}function Q(z,a,s){if(z==null)throw new Error("marked(): input parameter is undefined or null");if(typeof z!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(z)+", string expected");if(typeof a=="function"&&(s=a,a=null),nt(a=ot({},Q.defaults,a||{})),s){const r=a.highlight;let l;try{l=dt.lex(z,a)}catch(P){return s(P)}const v=function(P){let L;if(!P)try{a.walkTokens&&Q.walkTokens(l,a.walkTokens),L=Pt.parse(l,a)}catch(_){P=_}return a.highlight=r,P?s(P):s(null,L)};if(!r||r.length<3||(delete a.highlight,!l.length))return v();let x=0;return Q.walkTokens(l,function(P){P.type==="code"&&(x++,setTimeout(()=>{r(P.text,P.lang,function(L,_){if(L)return v(L);_!=null&&_!==P.text&&(P.text=_,P.escaped=!0),x--,x===0&&v()})},0))}),void(x===0&&v())}try{const r=dt.lex(z,a);return a.walkTokens&&Q.walkTokens(r,a.walkTokens),Pt.parse(r,a)}catch(r){if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,a.silent)return"<p>An error occurred:</p><pre>"+y(r.message+"",!0)+"</pre>";throw r}}return Q.options=Q.setOptions=function(z){var a;return ot(Q.defaults,z),a=Q.defaults,n=a,Q},Q.getDefaults=e,Q.defaults=n,Q.use=function(...z){const a=ot({},...z),s=Q.defaults.extensions||{renderers:{},childTokens:{}};let r;z.forEach(l=>{if(l.extensions&&(r=!0,l.extensions.forEach(v=>{if(!v.name)throw new Error("extension name required");if(v.renderer){const x=s.renderers?s.renderers[v.name]:null;s.renderers[v.name]=x?function(...P){let L=v.renderer.apply(this,P);return L===!1&&(L=x.apply(this,P)),L}:v.renderer}if(v.tokenizer){if(!v.level||v.level!=="block"&&v.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");s[v.level]?s[v.level].unshift(v.tokenizer):s[v.level]=[v.tokenizer],v.start&&(v.level==="block"?s.startBlock?s.startBlock.push(v.start):s.startBlock=[v.start]:v.level==="inline"&&(s.startInline?s.startInline.push(v.start):s.startInline=[v.start]))}v.childTokens&&(s.childTokens[v.name]=v.childTokens)})),l.renderer){const v=Q.defaults.renderer||new ft;for(const x in l.renderer){const P=v[x];v[x]=(...L)=>{let _=l.renderer[x].apply(v,L);return _===!1&&(_=P.apply(v,L)),_}}a.renderer=v}if(l.tokenizer){const v=Q.defaults.tokenizer||new k;for(const x in l.tokenizer){const P=v[x];v[x]=(...L)=>{let _=l.tokenizer[x].apply(v,L);return _===!1&&(_=P.apply(v,L)),_}}a.tokenizer=v}if(l.walkTokens){const v=Q.defaults.walkTokens;a.walkTokens=function(x){l.walkTokens.call(this,x),v&&v.call(this,x)}}r&&(a.extensions=s),Q.setOptions(a)})},Q.walkTokens=function(z,a){for(const s of z)switch(a.call(Q,s),s.type){case"table":for(const r of s.header)Q.walkTokens(r.tokens,a);for(const r of s.rows)for(const l of r)Q.walkTokens(l.tokens,a);break;case"list":Q.walkTokens(s.items,a);break;default:Q.defaults.extensions&&Q.defaults.extensions.childTokens&&Q.defaults.extensions.childTokens[s.type]?Q.defaults.extensions.childTokens[s.type].forEach(function(r){Q.walkTokens(s[r],a)}):s.tokens&&Q.walkTokens(s.tokens,a)}},Q.parseInline=function(z,a){if(z==null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof z!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(z)+", string expected");nt(a=ot({},Q.defaults,a||{}));try{const s=dt.lexInline(z,a);return a.walkTokens&&Q.walkTokens(s,a.walkTokens),Pt.parseInline(s,a)}catch(s){if(s.message+=`
Please report this to https://github.com/markedjs/marked.`,a.silent)return"<p>An error occurred:</p><pre>"+y(s.message+"",!0)+"</pre>";throw s}},Q.Parser=Pt,Q.parser=Pt.parse,Q.Renderer=ft,Q.TextRenderer=bt,Q.Lexer=dt,Q.lexer=dt.lex,Q.Tokenizer=k,Q.Slugger=ee,Q.parse=Q,()=>{let z,a,s=null;function r(){if(s&&!s.closed)s.focus();else{if(s=window.open("about:blank","reveal.js - Notes","width=1100,height=700"),s.marked=Q,s.document.write(`<!--
	NOTE: You need to build the notes plugin after making changes to this file.
-->
<html lang="en">
	<head>
		<meta charset="utf-8">

		<title>reveal.js - Speaker View</title>

		<style>
			body {
				font-family: Helvetica;
				font-size: 18px;
			}

			#current-slide,
			#upcoming-slide,
			#speaker-controls {
				padding: 6px;
				box-sizing: border-box;
				-moz-box-sizing: border-box;
			}

			#current-slide iframe,
			#upcoming-slide iframe {
				width: 100%;
				height: 100%;
				border: 1px solid #ddd;
			}

			#current-slide .label,
			#upcoming-slide .label {
				position: absolute;
				top: 10px;
				left: 10px;
				z-index: 2;
			}

			#connection-status {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 20;
				padding: 30% 20% 20% 20%;
				font-size: 18px;
				color: #222;
				background: #fff;
				text-align: center;
				box-sizing: border-box;
				line-height: 1.4;
			}

			.overlay-element {
				height: 34px;
				line-height: 34px;
				padding: 0 10px;
				text-shadow: none;
				background: rgba( 220, 220, 220, 0.8 );
				color: #222;
				font-size: 14px;
			}

			.overlay-element.interactive:hover {
				background: rgba( 220, 220, 220, 1 );
			}

			#current-slide {
				position: absolute;
				width: 60%;
				height: 100%;
				top: 0;
				left: 0;
				padding-right: 0;
			}

			#upcoming-slide {
				position: absolute;
				width: 40%;
				height: 40%;
				right: 0;
				top: 0;
			}

			/* Speaker controls */
			#speaker-controls {
				position: absolute;
				top: 40%;
				right: 0;
				width: 40%;
				height: 60%;
				overflow: auto;
				font-size: 18px;
			}

				.speaker-controls-time.hidden,
				.speaker-controls-notes.hidden {
					display: none;
				}

				.speaker-controls-time .label,
				.speaker-controls-pace .label,
				.speaker-controls-notes .label {
					text-transform: uppercase;
					font-weight: normal;
					font-size: 0.66em;
					color: #666;
					margin: 0;
				}

				.speaker-controls-time, .speaker-controls-pace {
					border-bottom: 1px solid rgba( 200, 200, 200, 0.5 );
					margin-bottom: 10px;
					padding: 10px 16px;
					padding-bottom: 20px;
					cursor: pointer;
				}

				.speaker-controls-time .reset-button {
					opacity: 0;
					float: right;
					color: #666;
					text-decoration: none;
				}
				.speaker-controls-time:hover .reset-button {
					opacity: 1;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock {
					width: 50%;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock,
				.speaker-controls-time .pacing .hours-value,
				.speaker-controls-time .pacing .minutes-value,
				.speaker-controls-time .pacing .seconds-value {
					font-size: 1.9em;
				}

				.speaker-controls-time .timer {
					float: left;
				}

				.speaker-controls-time .clock {
					float: right;
					text-align: right;
				}

				.speaker-controls-time span.mute {
					opacity: 0.3;
				}

				.speaker-controls-time .pacing-title {
					margin-top: 5px;
				}

				.speaker-controls-time .pacing.ahead {
					color: blue;
				}

				.speaker-controls-time .pacing.on-track {
					color: green;
				}

				.speaker-controls-time .pacing.behind {
					color: red;
				}

				.speaker-controls-notes {
					padding: 10px 16px;
				}

				.speaker-controls-notes .value {
					margin-top: 5px;
					line-height: 1.4;
					font-size: 1.2em;
				}

			/* Layout selector */
			#speaker-layout {
				position: absolute;
				top: 10px;
				right: 10px;
				color: #222;
				z-index: 10;
			}
				#speaker-layout select {
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					border: 0;
					box-shadow: 0;
					cursor: pointer;
					opacity: 0;

					font-size: 1em;
					background-color: transparent;

					-moz-appearance: none;
					-webkit-appearance: none;
					-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
				}

				#speaker-layout select:focus {
					outline: none;
					box-shadow: none;
				}

			.clear {
				clear: both;
			}

			/* Speaker layout: Wide */
			body[data-speaker-layout="wide"] #current-slide,
			body[data-speaker-layout="wide"] #upcoming-slide {
				width: 50%;
				height: 45%;
				padding: 6px;
			}

			body[data-speaker-layout="wide"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="wide"] #upcoming-slide {
				top: 0;
				left: 50%;
			}

			body[data-speaker-layout="wide"] #speaker-controls {
				top: 45%;
				left: 0;
				width: 100%;
				height: 50%;
				font-size: 1.25em;
			}

			/* Speaker layout: Tall */
			body[data-speaker-layout="tall"] #current-slide,
			body[data-speaker-layout="tall"] #upcoming-slide {
				width: 45%;
				height: 50%;
				padding: 6px;
			}

			body[data-speaker-layout="tall"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="tall"] #upcoming-slide {
				top: 50%;
				left: 0;
			}

			body[data-speaker-layout="tall"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 45%;
				width: 55%;
				height: 100%;
				font-size: 1.25em;
			}

			/* Speaker layout: Notes only */
			body[data-speaker-layout="notes-only"] #current-slide,
			body[data-speaker-layout="notes-only"] #upcoming-slide {
				display: none;
			}

			body[data-speaker-layout="notes-only"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				font-size: 1.25em;
			}

			@media screen and (max-width: 1080px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 16px;
				}
			}

			@media screen and (max-width: 900px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 14px;
				}
			}

			@media screen and (max-width: 800px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 12px;
				}
			}

		</style>
	</head>

	<body>

		<div id="connection-status">Loading speaker view...</div>

		<div id="current-slide"></div>
		<div id="upcoming-slide"><span class="overlay-element label">Upcoming</span></div>
		<div id="speaker-controls">
			<div class="speaker-controls-time">
				<h4 class="label">Time <span class="reset-button">Click to Reset</span></h4>
				<div class="clock">
					<span class="clock-value">0:00 AM</span>
				</div>
				<div class="timer">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
				<div class="clear"></div>

				<h4 class="label pacing-title" style="display: none">Pacing – Time to finish current slide</h4>
				<div class="pacing" style="display: none">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
			</div>

			<div class="speaker-controls-notes hidden">
				<h4 class="label">Notes</h4>
				<div class="value"></div>
			</div>
		</div>
		<div id="speaker-layout" class="overlay-element interactive">
			<span class="speaker-layout-label"></span>
			<select class="speaker-layout-dropdown"></select>
		</div>

		<script>

			(function() {

				var notes,
					notesValue,
					currentState,
					currentSlide,
					upcomingSlide,
					layoutLabel,
					layoutDropdown,
					pendingCalls = {},
					lastRevealApiCallId = 0,
					connected = false

				var connectionStatus = document.querySelector( '#connection-status' );

				var SPEAKER_LAYOUTS = {
					'default': 'Default',
					'wide': 'Wide',
					'tall': 'Tall',
					'notes-only': 'Notes only'
				};

				setupLayout();

				let openerOrigin;

				try {
					openerOrigin = window.opener.location.origin;
				}
				catch ( error ) { console.warn( error ) }

				// In order to prevent XSS, the speaker view will only run if its
				// opener has the same origin as itself
				if( window.location.origin !== openerOrigin ) {
					connectionStatus.innerHTML = 'Cross origin error.<br>The speaker window can only be opened from the same origin.';
					return;
				}

				var connectionTimeout = setTimeout( function() {
					connectionStatus.innerHTML = 'Error connecting to main window.<br>Please try closing and reopening the speaker view.';
				}, 5000 );

				window.addEventListener( 'message', function( event ) {

					clearTimeout( connectionTimeout );
					connectionStatus.style.display = 'none';

					var data = JSON.parse( event.data );

					// The overview mode is only useful to the reveal.js instance
					// where navigation occurs so we don't sync it
					if( data.state ) delete data.state.overview;

					// Messages sent by the notes plugin inside of the main window
					if( data && data.namespace === 'reveal-notes' ) {
						if( data.type === 'connect' ) {
							handleConnectMessage( data );
						}
						else if( data.type === 'state' ) {
							handleStateMessage( data );
						}
						else if( data.type === 'return' ) {
							pendingCalls[data.callId](data.result);
							delete pendingCalls[data.callId];
						}
					}
					// Messages sent by the reveal.js inside of the current slide preview
					else if( data && data.namespace === 'reveal' ) {
						if( /ready/.test( data.eventName ) ) {
							// Send a message back to notify that the handshake is complete
							window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'connected'} ), '*' );
						}
						else if( /slidechanged|fragmentshown|fragmenthidden|paused|resumed/.test( data.eventName ) && currentState !== JSON.stringify( data.state ) ) {

							dispatchStateToMainWindow( data.state );

						}
					}

				} );

				/**
				 * Updates the presentation in the main window to match the state
				 * of the presentation in the notes window.
				 */
				const dispatchStateToMainWindow = debounce(( state ) => {
					window.opener.postMessage( JSON.stringify({ method: 'setState', args: [ state ]} ), '*' );
				}, 500);

				/**
				 * Asynchronously calls the Reveal.js API of the main frame.
				 */
				function callRevealApi( methodName, methodArguments, callback ) {

					var callId = ++lastRevealApiCallId;
					pendingCalls[callId] = callback;
					window.opener.postMessage( JSON.stringify( {
						namespace: 'reveal-notes',
						type: 'call',
						callId: callId,
						methodName: methodName,
						arguments: methodArguments
					} ), '*' );

				}

				/**
				 * Called when the main window is trying to establish a
				 * connection.
				 */
				function handleConnectMessage( data ) {

					if( connected === false ) {
						connected = true;

						setupIframes( data );
						setupKeyboard();
						setupNotes();
						setupTimer();
						setupHeartbeat();
					}

				}

				/**
				 * Called when the main window sends an updated state.
				 */
				function handleStateMessage( data ) {

					// Store the most recently set state to avoid circular loops
					// applying the same state
					currentState = JSON.stringify( data.state );

					// No need for updating the notes in case of fragment changes
					if ( data.notes ) {
						notes.classList.remove( 'hidden' );
						notesValue.style.whiteSpace = data.whitespace;
						if( data.markdown ) {
							notesValue.innerHTML = marked( data.notes );
						}
						else {
							notesValue.innerHTML = data.notes;
						}
					}
					else {
						notes.classList.add( 'hidden' );
					}

					// Update the note slides
					currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'next' }), '*' );

				}

				// Limit to max one state update per X ms
				handleStateMessage = debounce( handleStateMessage, 200 );

				/**
				 * Forward keyboard events to the current slide window.
				 * This enables keyboard events to work even if focus
				 * isn't set on the current slide iframe.
				 *
				 * Block F5 default handling, it reloads and disconnects
				 * the speaker notes window.
				 */
				function setupKeyboard() {

					document.addEventListener( 'keydown', function( event ) {
						if( event.keyCode === 116 || ( event.metaKey && event.keyCode === 82 ) ) {
							event.preventDefault();
							return false;
						}
						currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'triggerKey', args: [ event.keyCode ] }), '*' );
					} );

				}

				/**
				 * Creates the preview iframes.
				 */
				function setupIframes( data ) {

					var params = [
						'receiver',
						'progress=false',
						'history=false',
						'transition=none',
						'autoSlide=0',
						'backgroundTransition=none'
					].join( '&' );

					var urlSeparator = /\\?/.test(data.url) ? '&' : '?';
					var hash = '#/' + data.state.indexh + '/' + data.state.indexv;
					var currentURL = data.url + urlSeparator + params + '&postMessageEvents=true' + hash;
					var upcomingURL = data.url + urlSeparator + params + '&controls=false' + hash;

					currentSlide = document.createElement( 'iframe' );
					currentSlide.setAttribute( 'width', 1280 );
					currentSlide.setAttribute( 'height', 1024 );
					currentSlide.setAttribute( 'src', currentURL );
					document.querySelector( '#current-slide' ).appendChild( currentSlide );

					upcomingSlide = document.createElement( 'iframe' );
					upcomingSlide.setAttribute( 'width', 640 );
					upcomingSlide.setAttribute( 'height', 512 );
					upcomingSlide.setAttribute( 'src', upcomingURL );
					document.querySelector( '#upcoming-slide' ).appendChild( upcomingSlide );

				}

				/**
				 * Setup the notes UI.
				 */
				function setupNotes() {

					notes = document.querySelector( '.speaker-controls-notes' );
					notesValue = document.querySelector( '.speaker-controls-notes .value' );

				}

				/**
				 * We send out a heartbeat at all times to ensure we can
				 * reconnect with the main presentation window after reloads.
				 */
				function setupHeartbeat() {

					setInterval( () => {
						window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'heartbeat'} ), '*' );
					}, 1000 );

				}

				function getTimings( callback ) {

					callRevealApi( 'getSlidesAttributes', [], function ( slideAttributes ) {
						callRevealApi( 'getConfig', [], function ( config ) {
							var totalTime = config.totalTime;
							var minTimePerSlide = config.minimumTimePerSlide || 0;
							var defaultTiming = config.defaultTiming;
							if ((defaultTiming == null) && (totalTime == null)) {
								callback(null);
								return;
							}
							// Setting totalTime overrides defaultTiming
							if (totalTime) {
								defaultTiming = 0;
							}
							var timings = [];
							for ( var i in slideAttributes ) {
								var slide = slideAttributes[ i ];
								var timing = defaultTiming;
								if( slide.hasOwnProperty( 'data-timing' )) {
									var t = slide[ 'data-timing' ];
									timing = parseInt(t);
									if( isNaN(timing) ) {
										console.warn("Could not parse timing '" + t + "' of slide " + i + "; using default of " + defaultTiming);
										timing = defaultTiming;
									}
								}
								timings.push(timing);
							}
							if ( totalTime ) {
								// After we've allocated time to individual slides, we summarize it and
								// subtract it from the total time
								var remainingTime = totalTime - timings.reduce( function(a, b) { return a + b; }, 0 );
								// The remaining time is divided by the number of slides that have 0 seconds
								// allocated at the moment, giving the average time-per-slide on the remaining slides
								var remainingSlides = (timings.filter( function(x) { return x == 0 }) ).length
								var timePerSlide = Math.round( remainingTime / remainingSlides, 0 )
								// And now we replace every zero-value timing with that average
								timings = timings.map( function(x) { return (x==0 ? timePerSlide : x) } );
							}
							var slidesUnderMinimum = timings.filter( function(x) { return (x < minTimePerSlide) } ).length
							if ( slidesUnderMinimum ) {
								message = "The pacing time for " + slidesUnderMinimum + " slide(s) is under the configured minimum of " + minTimePerSlide + " seconds. Check the data-timing attribute on individual slides, or consider increasing the totalTime or minimumTimePerSlide configuration options (or removing some slides).";
								alert(message);
							}
							callback( timings );
						} );
					} );

				}

				/**
				 * Return the number of seconds allocated for presenting
				 * all slides up to and including this one.
				 */
				function getTimeAllocated( timings, callback ) {

					callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
						var allocated = 0;
						for (var i in timings.slice(0, currentSlide + 1)) {
							allocated += timings[i];
						}
						callback( allocated );
					} );

				}

				/**
				 * Create the timer and clock and start updating them
				 * at an interval.
				 */
				function setupTimer() {

					var start = new Date(),
					timeEl = document.querySelector( '.speaker-controls-time' ),
					clockEl = timeEl.querySelector( '.clock-value' ),
					hoursEl = timeEl.querySelector( '.hours-value' ),
					minutesEl = timeEl.querySelector( '.minutes-value' ),
					secondsEl = timeEl.querySelector( '.seconds-value' ),
					pacingTitleEl = timeEl.querySelector( '.pacing-title' ),
					pacingEl = timeEl.querySelector( '.pacing' ),
					pacingHoursEl = pacingEl.querySelector( '.hours-value' ),
					pacingMinutesEl = pacingEl.querySelector( '.minutes-value' ),
					pacingSecondsEl = pacingEl.querySelector( '.seconds-value' );

					var timings = null;
					getTimings( function ( _timings ) {

						timings = _timings;
						if (_timings !== null) {
							pacingTitleEl.style.removeProperty('display');
							pacingEl.style.removeProperty('display');
						}

						// Update once directly
						_updateTimer();

						// Then update every second
						setInterval( _updateTimer, 1000 );

					} );


					function _resetTimer() {

						if (timings == null) {
							start = new Date();
							_updateTimer();
						}
						else {
							// Reset timer to beginning of current slide
							getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
								var slideEndTiming = slideEndTimingSeconds * 1000;
								callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
									var currentSlideTiming = timings[currentSlide] * 1000;
									var previousSlidesTiming = slideEndTiming - currentSlideTiming;
									var now = new Date();
									start = new Date(now.getTime() - previousSlidesTiming);
									_updateTimer();
								} );
							} );
						}

					}

					timeEl.addEventListener( 'click', function() {
						_resetTimer();
						return false;
					} );

					function _displayTime( hrEl, minEl, secEl, time) {

						var sign = Math.sign(time) == -1 ? "-" : "";
						time = Math.abs(Math.round(time / 1000));
						var seconds = time % 60;
						var minutes = Math.floor( time / 60 ) % 60 ;
						var hours = Math.floor( time / ( 60 * 60 )) ;
						hrEl.innerHTML = sign + zeroPadInteger( hours );
						if (hours == 0) {
							hrEl.classList.add( 'mute' );
						}
						else {
							hrEl.classList.remove( 'mute' );
						}
						minEl.innerHTML = ':' + zeroPadInteger( minutes );
						if (hours == 0 && minutes == 0) {
							minEl.classList.add( 'mute' );
						}
						else {
							minEl.classList.remove( 'mute' );
						}
						secEl.innerHTML = ':' + zeroPadInteger( seconds );
					}

					function _updateTimer() {

						var diff, hours, minutes, seconds,
						now = new Date();

						diff = now.getTime() - start.getTime();

						clockEl.innerHTML = now.toLocaleTimeString( 'en-US', { hour12: true, hour: '2-digit', minute:'2-digit' } );
						_displayTime( hoursEl, minutesEl, secondsEl, diff );
						if (timings !== null) {
							_updatePacing(diff);
						}

					}

					function _updatePacing(diff) {

						getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
							var slideEndTiming = slideEndTimingSeconds * 1000;

							callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
								var currentSlideTiming = timings[currentSlide] * 1000;
								var timeLeftCurrentSlide = slideEndTiming - diff;
								if (timeLeftCurrentSlide < 0) {
									pacingEl.className = 'pacing behind';
								}
								else if (timeLeftCurrentSlide < currentSlideTiming) {
									pacingEl.className = 'pacing on-track';
								}
								else {
									pacingEl.className = 'pacing ahead';
								}
								_displayTime( pacingHoursEl, pacingMinutesEl, pacingSecondsEl, timeLeftCurrentSlide );
							} );
						} );
					}

				}

				/**
				 * Sets up the speaker view layout and layout selector.
				 */
				function setupLayout() {

					layoutDropdown = document.querySelector( '.speaker-layout-dropdown' );
					layoutLabel = document.querySelector( '.speaker-layout-label' );

					// Render the list of available layouts
					for( var id in SPEAKER_LAYOUTS ) {
						var option = document.createElement( 'option' );
						option.setAttribute( 'value', id );
						option.textContent = SPEAKER_LAYOUTS[ id ];
						layoutDropdown.appendChild( option );
					}

					// Monitor the dropdown for changes
					layoutDropdown.addEventListener( 'change', function( event ) {

						setLayout( layoutDropdown.value );

					}, false );

					// Restore any currently persisted layout
					setLayout( getLayout() );

				}

				/**
				 * Sets a new speaker view layout. The layout is persisted
				 * in local storage.
				 */
				function setLayout( value ) {

					var title = SPEAKER_LAYOUTS[ value ];

					layoutLabel.innerHTML = 'Layout' + ( title ? ( ': ' + title ) : '' );
					layoutDropdown.value = value;

					document.body.setAttribute( 'data-speaker-layout', value );

					// Persist locally
					if( supportsLocalStorage() ) {
						window.localStorage.setItem( 'reveal-speaker-layout', value );
					}

				}

				/**
				 * Returns the ID of the most recently set speaker layout
				 * or our default layout if none has been set.
				 */
				function getLayout() {

					if( supportsLocalStorage() ) {
						var layout = window.localStorage.getItem( 'reveal-speaker-layout' );
						if( layout ) {
							return layout;
						}
					}

					// Default to the first record in the layouts hash
					for( var id in SPEAKER_LAYOUTS ) {
						return id;
					}

				}

				function supportsLocalStorage() {

					try {
						localStorage.setItem('test', 'test');
						localStorage.removeItem('test');
						return true;
					}
					catch( e ) {
						return false;
					}

				}

				function zeroPadInteger( num ) {

					var str = '00' + parseInt( num );
					return str.substring( str.length - 2 );

				}

				/**
				 * Limits the frequency at which a function can be called.
				 */
				function debounce( fn, ms ) {

					var lastTime = 0,
						timeout;

					return function() {

						var args = arguments;
						var context = this;

						clearTimeout( timeout );

						var timeSinceLastCall = Date.now() - lastTime;
						if( timeSinceLastCall > ms ) {
							fn.apply( context, args );
							lastTime = Date.now();
						}
						else {
							timeout = setTimeout( function() {
								fn.apply( context, args );
								lastTime = Date.now();
							}, ms - timeSinceLastCall );
						}

					}

				}

			})();

		<\/script>
	</body>
</html>`),!s)return void alert("Speaker view popup failed to open. Please make sure popups are allowed and reopen the speaker view.");(function(){const P=a.getConfig().url,L=typeof P=="string"?P:window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search;z=setInterval(function(){s.postMessage(JSON.stringify({namespace:"reveal-notes",type:"connect",state:a.getState(),url:L}),"*")},500),window.addEventListener("message",v)})()}}function l(P){let L=a.getCurrentSlide(),_=L.querySelectorAll("aside.notes"),U=L.querySelector(".current-fragment"),Y={namespace:"reveal-notes",type:"state",notes:"",markdown:!1,whitespace:"normal",state:a.getState()};if(L.hasAttribute("data-notes")&&(Y.notes=L.getAttribute("data-notes"),Y.whitespace="pre-wrap"),U){let V=U.querySelector("aside.notes");V?(Y.notes=V.innerHTML,Y.markdown=typeof V.getAttribute("data-markdown")=="string",_=null):U.hasAttribute("data-notes")&&(Y.notes=U.getAttribute("data-notes"),Y.whitespace="pre-wrap",_=null)}_&&(Y.notes=Array.from(_).map(V=>V.innerHTML).join(`
`),Y.markdown=_[0]&&typeof _[0].getAttribute("data-markdown")=="string"),s.postMessage(JSON.stringify(Y),"*")}function v(P){if(function(L){try{return window.location.origin===L.source.location.origin}catch{return!1}}(P)){let L=JSON.parse(P.data);L&&L.namespace==="reveal-notes"&&L.type==="connected"?(clearInterval(z),x()):L&&L.namespace==="reveal-notes"&&L.type==="call"&&function(_,U,Y){let V=a[_].apply(a,U);s.postMessage(JSON.stringify({namespace:"reveal-notes",type:"return",result:V,callId:Y}),"*")}(L.methodName,L.arguments,L.callId)}}function x(){a.on("slidechanged",l),a.on("fragmentshown",l),a.on("fragmenthidden",l),a.on("overviewhidden",l),a.on("overviewshown",l),a.on("paused",l),a.on("resumed",l),l()}return{id:"notes",init:function(P){a=P,/receiver/i.test(window.location.search)||(window.location.search.match(/(\?|\&)notes/gi)!==null?r():window.addEventListener("message",L=>{if(!s&&typeof L.data=="string"){let U;try{U=JSON.parse(L.data)}catch{}U&&U.namespace==="reveal-notes"&&U.type==="heartbeat"&&(_=L.source,s&&!s.closed?s.focus():(s=_,window.addEventListener("message",v),x()))}var _}),a.addKeyBinding({keyCode:83,key:"S",description:"Speaker notes view"},function(){r()}))},open:r}}})})(hn);var ri=hn.exports;const oi=ai(ri);function li(g){let t,e,n,i;const u=g[4].default,o=Rn(u,g,g[3],null);return{c(){t=J("section"),o&&o.c(),this.h()},l(c){t=Z(c,"SECTION",{"data-auto-animate-id":!0,"data-auto-animate":!0,"data-auto-animate-restart":!0});var d=Ee(t);o&&o.l(d),d.forEach(T),this.h()},h(){I(t,"data-auto-animate-id",g[0]),I(t,"data-auto-animate",e=g[1]||null),I(t,"data-auto-animate-restart",n=g[2]||null)},m(c,d){M(c,t,d),o&&o.m(t,null),i=!0},p(c,[d]){o&&o.p&&(!i||d&8)&&Tn(o,u,c,c[3],i?Cn(u,c[3],d,null):Ln(c[3]),null),(!i||d&1)&&I(t,"data-auto-animate-id",c[0]),(!i||d&2&&e!==(e=c[1]||null))&&I(t,"data-auto-animate",e),(!i||d&4&&n!==(n=c[2]||null))&&I(t,"data-auto-animate-restart",n)},i(c){i||(St(o,c),i=!0)},o(c){Et(o,c),i=!1},d(c){c&&T(t),o&&o.d(c)}}}function ci(g,t,e){let{$$slots:n={},$$scope:i}=t,{id:u=null}=t,{animate:o=!1}=t,{restart:c=!1}=t;return g.$$set=d=>{"id"in d&&e(0,u=d.id),"animate"in d&&e(1,o=d.animate),"restart"in d&&e(2,c=d.restart),"$$scope"in d&&e(3,i=d.$$scope)},[u,o,c,i,n]}class Dt extends ue{constructor(t){super(),he(this,t,ci,li,de,{id:0,animate:1,restart:2})}}function di(g){let t,e='<p data-id="bd" class="r-fit-text text-green-500 text-md font-bold font-montserrat uppercase">BlockChain</p>',n,i,u='<ul class="text-md"><li>What is Blockchain ?</li> <li>Different types of Blockchain</li> <li>Elements of Blockchain</li> <li>Genesis Block</li> <li>Blockchain Architecture</li> <ul class="text-4xl py-2"><li>What&#39;s inside a block</li></ul> <li>Consensus</li> <ul class="text-4xl py-2"><li>Different consensus algorithms</li></ul> <li>Bitcoin - (Based on Peer-to-peer paper)</li> <li>Ethereum</li></ul>';return{c(){t=J("section"),t.innerHTML=e,n=tt(),i=J("section"),i.innerHTML=u,this.h()},l(o){t=Z(o,"SECTION",{"data-auto-animate":!0,"data-svelte-h":!0}),G(t)!=="svelte-1rj9bs1"&&(t.innerHTML=e),n=et(o),i=Z(o,"SECTION",{"data-auto-animate":!0,"data-svelte-h":!0}),G(i)!=="svelte-12yd71t"&&(i.innerHTML=u),this.h()},h(){I(t,"data-auto-animate",""),I(i,"data-auto-animate","")},m(o,c){M(o,t,c),M(o,n,c),M(o,i,c)},p:Mt,d(o){o&&(T(t),T(n),T(i))}}}function ui(g){let t,e='<p class="r-fit-text text-green-500 font-bold font-montserrat uppercase">What is Blockchain ?</p>',n,i,u=`<p class="text-md font-inter">Blockchain is a <span class="text-green-500">shared, immutable distributed ledger</span> that facilitates
			the process of recording transactions and tracking tangible or intangible assets in a business
			network.</p> <aside class="notes">Virtually anything of value can be tracked and traded on a blockchain network, reducing risk
			and cutting costs for all involved.</aside>`,o,c,d=`<p>Types of Blockchain:</p> <ul><li>Public Blockchain <span class="fragment text-green-500 text-3xl">- Anyone can join and participate. these are decentralized and permissionless. these
					blockchains have scalability issues.</span></li> <li>Private Blockchain <span class="fragment text-green-500 text-3xl">- restricted to limited group of participants. typically used inside an organization where
					the participant agrees to follow set of rules and conditions. have higher privacy and
					scalability.</span></li> <li>Consortium Blockchain <span class="fragment text-green-500 text-3xl">- has elements of both public and private blockchains, usually controlled by a group of
					organizations. and consensus is managed by pre-selected nodes.</span></li></ul>`;return{c(){t=J("section"),t.innerHTML=e,n=tt(),i=J("section"),i.innerHTML=u,o=tt(),c=J("section"),c.innerHTML=d,this.h()},l(w){t=Z(w,"SECTION",{"data-auto-animate":!0,"data-svelte-h":!0}),G(t)!=="svelte-7w2yzu"&&(t.innerHTML=e),n=et(w),i=Z(w,"SECTION",{"data-auto-animate":!0,class:!0,"data-svelte-h":!0}),G(i)!=="svelte-8riur7"&&(i.innerHTML=u),o=et(w),c=Z(w,"SECTION",{class:!0,"data-auto-animate":!0,"data-svelte-h":!0}),G(c)!=="svelte-du3fcn"&&(c.innerHTML=d),this.h()},h(){I(t,"data-auto-animate",""),I(i,"data-auto-animate",""),I(i,"class","text-left"),I(c,"class","text-left"),I(c,"data-auto-animate","")},m(w,y){M(w,t,y),M(w,n,y),M(w,i,y),M(w,o,y),M(w,c,y)},p:Mt,d(w){w&&(T(t),T(n),T(i),T(o),T(c))}}}function hi(g){let t,e='<p data-id="bd" class="r-fit-text text-green-500 font-bold font-montserrat uppercase">Elements of Blockchain</p>',n,i,u=`<ul><li>Nodes <span class="fragment text-green-500 text-2xl align-middle">- Individual computers, servers on the network</span></li> <li>Blocks <span class="fragment text-green-500 text-2xl align-middle">- Blocks hold a set of transactions</span></li> <li>Transactions <span class="fragment text-green-500 text-2xl align-middle">- actions or data exchanges recorded</span></li> <li>Blockchain ledger <span class="fragment text-green-500 text-2xl align-middle">- immutable decentralized database</span></li> <li>Cryptographic Hashing <span class="fragment text-green-500 text-2xl align-middle">- to ensure data integrity and security</span></li> <li>Consensus <span class="fragment text-green-500 text-2xl align-middle">- protocols that enable nodes to agree on the state</span></li> <li>Smart Contracts <span class="fragment text-green-500 text-2xl align-middle">- self executing contracts with predefined rules</span></li></ul> <aside class="notes">Blockchain uses cryptographic hash functions to ensure data integrity and security. Hash
			functions generate a unique fixed-size string (hash) from any input data, making it
			practically impossible to reverse-engineer the original data from the hash. Hashes are used to
			verify the integrity of blocks, transactions, and other data within the blockchain.

			<br/>
			Consensus mechanisms are protocols or algorithms that enable nodes in the blockchain network to
			agree on the state of the blockchain. They determine how new blocks are added, how conflicts are
			resolved, and how consensus is reached among the network participants.</aside>`;return{c(){t=J("section"),t.innerHTML=e,n=tt(),i=J("section"),i.innerHTML=u,this.h()},l(o){t=Z(o,"SECTION",{class:!0,"data-auto-animate":!0,"data-svelte-h":!0}),G(t)!=="svelte-ss99y8"&&(t.innerHTML=e),n=et(o),i=Z(o,"SECTION",{"data-auto-animate":!0,class:!0,"data-svelte-h":!0}),G(i)!=="svelte-xxf0lu"&&(i.innerHTML=u),this.h()},h(){I(t,"class","text-left"),I(t,"data-auto-animate",""),I(i,"data-auto-animate",""),I(i,"class","text-left")},m(o,c){M(o,t,c),M(o,n,c),M(o,i,c)},p:Mt,d(o){o&&(T(t),T(n),T(i))}}}function pi(g){let t,e='<p class="r-fit-text text-green-500 font-bold font-montserrat uppercase">Genesis Block</p>',n,i,u=`<p>The genesis block is the <span class="text-green-500">very first block created in a blockchain</span>
			network. It serves as the foundation or starting point of the blockchain&#39;s entire history. The
			genesis block has a unique position in the blockchain, as
			<span class="text-green-500">it doesn&#39;t reference a previous block since there is none before it.</span></p> <p class="fragment">The genesis block has a specific identification, typically a predefined hash value or a unique
			set of data that distinguishes it from other blocks in the blockchain.</p>`,o,c,d=`<p>Used for:</p> <ul><li>Concensus Initialization <span class="fragment text-green-500">- establishes the initial parameters and configuration of the blockchain.</span></li> <li>Network Bootstrapping <span class="fragment text-green-500">- it acts as a starting point for new nodes that are joining the blockchainit acts as a
					starting point for new nodes that are joining the blockchain.</span></li></ul> <aside class="notes">Every subsequent block references the previous block&#39;s hash, forming a chain of blocks that
			can be traced back to the genesis block.
			<br/>
			consensus Initialization: including the consensus algorithm, network rules, and other essential
			settings.
			<br/>
			network bootstrapping: it retrieves the genesis block to synchronize its ledger and begin participating
			in the consensus process.</aside>`;return{c(){t=J("section"),t.innerHTML=e,n=tt(),i=J("section"),i.innerHTML=u,o=tt(),c=J("section"),c.innerHTML=d,this.h()},l(w){t=Z(w,"SECTION",{class:!0,"data-auto-animate":!0,"data-svelte-h":!0}),G(t)!=="svelte-1r4ay6n"&&(t.innerHTML=e),n=et(w),i=Z(w,"SECTION",{class:!0,"data-auto-animate":!0,"data-svelte-h":!0}),G(i)!=="svelte-1qjlt7q"&&(i.innerHTML=u),o=et(w),c=Z(w,"SECTION",{class:!0,"data-auto-animate":!0,"data-svelte-h":!0}),G(c)!=="svelte-ajyx32"&&(c.innerHTML=d),this.h()},h(){I(t,"class","text-left"),I(t,"data-auto-animate",""),I(i,"class","text-left"),I(i,"data-auto-animate",""),I(c,"class","text-left"),I(c,"data-auto-animate","")},m(w,y){M(w,t,y),M(w,n,y),M(w,i,y),M(w,o,y),M(w,c,y)},p:Mt,d(w){w&&(T(t),T(n),T(i),T(o),T(c))}}}function gi(g){let t,e='<p class="r-fit-text text-green-500 text-md font-bold font-montserrat uppercase">Blockchain Architecture</p>',n,i,u=`<p>Blockchain contains blocks, and each block contain information.</p> <p class="fragment">This information is needed to ensure integrity, security, and chronological order of the
			transactions recorded on the blockchain.</p> <aside class="notes">The block structure enables the formation of an immutable and tamper-proof chain of blocks,
			creating a transparent and trustless system.</aside>`,o,c,d='<p class="text-green-500">What&#39;s inside a block ?</p> <p>Each block holds:</p> <ul><li class="fragment">Block Header</li> <li class="fragment">Transactions</li> <li class="fragment">Block Hash</li> <li class="fragment">Proof Of Work</li></ul> <aside class="notes">- In blockchains using POW consensus, the block also holds the POW value</aside>',w,y,A=`<p class="">Block Header</p> <p class="">This is the metadata section that provides important information about the block</p> <p class="fragment">It usually Includes:</p> <ul><li class="fragment pb-2">Version</li> <li class="fragment pb-2">Timestamp</li> <li class="fragment pb-2">Previous Block Hash</li> <li class="fragment pb-2">Nonce</li> <li class="fragment pb-2">Merkle Root</li></ul> <aside class="notes">- The version number of the blockchain protocol being used - Block creation timestamp - The
			hash value of the previous block in the blockchain, which creates the link between blocks. -
			This value is used in the mining process to find a valid hash - A hash of all the transactions
			in the block, ensuring the integrity of the transactions.</aside>`,R,S,p=`<p>Transactions</p> <p>Every block contains a <span class="text-green-500">set of transactions</span>. Transactions
			represent <span class="text-green-500">various actions</span>, such as transferring digital
			assets or executing smart contracts.</p> <aside class="notes">Each transaction includes information about the sender, recipient, amount, and any additional
			data required for the transaction.</aside>`,j,B,at=`<p>Block Hash</p> <p>The block hash is a unique identifier that represents the entire content of the block. It is
			generated by <span class="text-green-500">applying a cryptographic hash function to the block header and transactions</span>.</p> <aside class="notes">The block hash ensures the integrity and security of the block, as any modification to the
			block would result in a completely different hash value.</aside>`,W,f,H=`<p>Proof Of Work (POW)</p> <p>In blockchains that use PoW consensus, a block includes a proof of work value. This value is a
			<span class="text-green-500">solution to a complex mathematical puzzle that miners must solve</span> to add the block to the blockchain.</p> <aside class="notes">The proof of work demonstrates that a certain amount of computational work has been done to
			validate the block.</aside>`;return{c(){t=J("section"),t.innerHTML=e,n=tt(),i=J("section"),i.innerHTML=u,o=tt(),c=J("section"),c.innerHTML=d,w=tt(),y=J("section"),y.innerHTML=A,R=tt(),S=J("section"),S.innerHTML=p,j=tt(),B=J("section"),B.innerHTML=at,W=tt(),f=J("section"),f.innerHTML=H,this.h()},l(q){t=Z(q,"SECTION",{"data-auto-animate":!0,"data-svelte-h":!0}),G(t)!=="svelte-ydbudb"&&(t.innerHTML=e),n=et(q),i=Z(q,"SECTION",{"data-auto-animate":!0,class:!0,"data-svelte-h":!0}),G(i)!=="svelte-1hvl8xx"&&(i.innerHTML=u),o=et(q),c=Z(q,"SECTION",{"data-auto-animate":!0,class:!0,"data-svelte-h":!0}),G(c)!=="svelte-q0ux0"&&(c.innerHTML=d),w=et(q),y=Z(q,"SECTION",{"data-auto-animate":!0,class:!0,"data-svelte-h":!0}),G(y)!=="svelte-1077m5j"&&(y.innerHTML=A),R=et(q),S=Z(q,"SECTION",{"data-auto-animate":!0,class:!0,"data-svelte-h":!0}),G(S)!=="svelte-1asbxaa"&&(S.innerHTML=p),j=et(q),B=Z(q,"SECTION",{"data-auto-animate":!0,class:!0,"data-svelte-h":!0}),G(B)!=="svelte-1ao9731"&&(B.innerHTML=at),W=et(q),f=Z(q,"SECTION",{"data-auto-animate":!0,class:!0,"data-svelte-h":!0}),G(f)!=="svelte-eg21k4"&&(f.innerHTML=H),this.h()},h(){I(t,"data-auto-animate",""),I(i,"data-auto-animate",""),I(i,"class","text-left"),I(c,"data-auto-animate",""),I(c,"class","text-left"),I(y,"data-auto-animate",""),I(y,"class","text-left text-[1.8rem]"),I(S,"data-auto-animate",""),I(S,"class","text-left"),I(B,"data-auto-animate",""),I(B,"class","text-left"),I(f,"data-auto-animate",""),I(f,"class","text-left")},m(q,F){M(q,t,F),M(q,n,F),M(q,i,F),M(q,o,F),M(q,c,F),M(q,w,F),M(q,y,F),M(q,R,F),M(q,S,F),M(q,j,F),M(q,B,F),M(q,W,F),M(q,f,F)},p:Mt,d(q){q&&(T(t),T(n),T(i),T(o),T(c),T(w),T(y),T(R),T(S),T(j),T(B),T(W),T(f))}}}function mi(g){let t,e='<p data-id="bd" class="r-fit-text text-green-500 text-md font-bold font-montserrat uppercase">Consensus</p>',n,i,u=`<p><span class="text-green-500">Consensus</span> is a protocol by which the peers in a blockchain
			network reach a common agreement about the present state of the distributed ledger.</p> <p class="fragment"><span class="text-green-500">Consensus algorithms</span> define the rules by which nodes in a blockchain
			network agree on the state of the blockchain.</p> <aside class="notes">consensus algorithms achieve reliability in the Blockchain network and establish trust between
			unknown peers in a distributed computing environment. Essentially, the consensus protocol
			makes sure that every new block that is added to the Blockchain is the one and only version of
			the truth that is agreed upon by all the nodes in the Blockchain. The Blockchain consensus
			protocol consists of some specific objectives such as coming to an agreement, collaboration,
			cooperation, equal rights to every node, and mandatory participation of each node in the
			consensus process. Thus, a consensus algorithm aims at finding a common agreement that is a
			win for the entire network. Now, we will discuss various consensus algorithms and how they
			work.</aside>`,o,c,d='<p class="text-green-500">Consensus algorithms :</p> <ul><li>Proof of work (PoW)</li> <li>Proof of stake (PoS)</li> <li>Delegated Proof of stake (DPoS)</li> <li>Proof of Burn (PoB)</li> <li>Proof of Elapsed Time (PoET)</li></ul> <p>...and many more</p>',w,y,A=`<p class="text-green-500">Proof of Work :</p> <p>Proof-of-work is a consensus algorithm in which the transactions are validated by Miners.
			Miners try to solve a mathematical problem to validate the transactions, and once a set of
			transactions are validated, then a block is added to the blockchain network.</p>`,R,S,p=`<ul><li><span class="text-green-500">Bitcoin uses Pow.</span> <ul class="text-3xl"><li class="pb-2">The incentive for mining transactions lies in economic payoffs, where competing miners
						are rewarded with 6.25 bitcoins and a small transaction fee.</li> <li class="pb-2">This reward will get reduced by half its current value for every 4 years.</li></ul></li> <li class="fragment"><span class="text-green-500">Ethereum transitioned to PoS from PoW in Eth2.0</span></li></ul>`,j,B,at=`<p class="text-green-500">Proof of Stake :</p> <ul><li>Validators invests in coins of the system by locking up some of the coins as stakes.</li> <li class="fragment">Validators will validate blocks by placing a bet on them if they discover a block that they
				think can be added to the chain.</li> <li class="fragment">Based on the actual blocks added in the Blockchain, all the validators get a reward
				proportionate to their bets, and their stake increase accordingly.</li></ul>`,W,f,H=`<p class="text-green-500">Delegated Proof of Stake :</p> <ul><li>Nodes delegate votes to other nodes.</li> <li class="fragment">then, whichever node then mines the block will distribute the reward to the nodes who
				delegated votes.</li></ul>`,q,F,ot='<p class="text-green-500">Proof of Burn :</p> <ul><li>Nodes burn their coins (<span class="text-green-500 italic">coins sent to an address from where they are irretrievable</span>), and validators are chosen in random and then they earn right to mine.</li> <li class="fragment">The more coins they burn, the better their chances of being selected to mine the next block.</li></ul>',it,D,nt=`<p class="text-green-500">Proof of Elapsed Time :</p> <ul><li>Every validator on the network gets a fair chance to create their block. these nodes have to
				keep waiting for their turn, adding proof of their wait in the block.</li> <li class="fragment">This algorithm is said to be fair. It is widely used in permissioned blockchains.</li></ul>`;return{c(){t=J("section"),t.innerHTML=e,n=tt(),i=J("section"),i.innerHTML=u,o=tt(),c=J("section"),c.innerHTML=d,w=tt(),y=J("section"),y.innerHTML=A,R=tt(),S=J("section"),S.innerHTML=p,j=tt(),B=J("section"),B.innerHTML=at,W=tt(),f=J("section"),f.innerHTML=H,q=tt(),F=J("section"),F.innerHTML=ot,it=tt(),D=J("section"),D.innerHTML=nt,this.h()},l($){t=Z($,"SECTION",{"data-auto-animate":!0,"data-svelte-h":!0}),G(t)!=="svelte-eflec8"&&(t.innerHTML=e),n=et($),i=Z($,"SECTION",{"data-auto-animate":!0,class:!0,"data-svelte-h":!0}),G(i)!=="svelte-zg7c46"&&(i.innerHTML=u),o=et($),c=Z($,"SECTION",{class:!0,"data-auto-animate":!0,"data-svelte-h":!0}),G(c)!=="svelte-cgomhv"&&(c.innerHTML=d),w=et($),y=Z($,"SECTION",{class:!0,"data-auto-animate":!0,"data-svelte-h":!0}),G(y)!=="svelte-12d10jk"&&(y.innerHTML=A),R=et($),S=Z($,"SECTION",{"data-auto-animate":!0,"data-svelte-h":!0}),G(S)!=="svelte-tt54lw"&&(S.innerHTML=p),j=et($),B=Z($,"SECTION",{class:!0,"data-auto-animate":!0,"data-svelte-h":!0}),G(B)!=="svelte-hul80s"&&(B.innerHTML=at),W=et($),f=Z($,"SECTION",{class:!0,"data-auto-animate":!0,"data-svelte-h":!0}),G(f)!=="svelte-bhjoqb"&&(f.innerHTML=H),q=et($),F=Z($,"SECTION",{class:!0,"data-auto-animate":!0,"data-svelte-h":!0}),G(F)!=="svelte-6ptn3d"&&(F.innerHTML=ot),it=et($),D=Z($,"SECTION",{class:!0,"data-auto-animate":!0,"data-svelte-h":!0}),G(D)!=="svelte-1oqmwys"&&(D.innerHTML=nt),this.h()},h(){I(t,"data-auto-animate",""),I(i,"data-auto-animate",""),I(i,"class","text-left"),I(c,"class","text-left"),I(c,"data-auto-animate",""),I(y,"class","text-left"),I(y,"data-auto-animate",""),I(S,"data-auto-animate",""),I(B,"class","text-left"),I(B,"data-auto-animate",""),I(f,"class","text-left"),I(f,"data-auto-animate",""),I(F,"class","text-left"),I(F,"data-auto-animate",""),I(D,"class","text-left"),I(D,"data-auto-animate","")},m($,X){M($,t,X),M($,n,X),M($,i,X),M($,o,X),M($,c,X),M($,w,X),M($,y,X),M($,R,X),M($,S,X),M($,j,X),M($,B,X),M($,W,X),M($,f,X),M($,q,X),M($,F,X),M($,it,X),M($,D,X)},p:Mt,d($){$&&(T(t),T(n),T(i),T(o),T(c),T(w),T(y),T(R),T(S),T(j),T(B),T(W),T(f),T(q),T(F),T(it),T(D))}}}function fi(g){let t,e='<p class="r-fit-text text-green-500 text-md font-bold font-montserrat uppercase">Bitcoin Peer-to-peer Paper</p>',n,i,u=`<p class="">Nakamoto said that the bitcoin enables online payments to be sent directly from one party to
			another without intermediaries.
			<br/> <span class="fragment">he also discussed some concepts related to bitcoin:</span></p> <ul class="text-green-300"><li class="fragment">Transaction Structure</li> <li class="fragment">Timestamp server and proof-of-work</li> <li class="fragment">Privacy considerations</li> <li class="fragment">Simplified payment verification (SPV)</li></ul>`,o,c,d=`<p class="text-green-500">Transaction Structure</p> <ul><li>Bitcoin transactions consist of inputs and outputs.</li> <li class="fragment"><span class="text-green-500">Inputs</span> refer to unspent transaction outputs (UTXOs) from
				previous transactions that are being spent.</li> <li class="fragment"><span class="text-green-500">Outputs</span> represent the destination addresses where the bitcoins
				are being sent.</li></ul>`,w,y,A=`<p class="text-green-500">Timestamp Server and Proof-of-Work</p> <ul><li>Transactions are timestamped using a timestamp server, which organizes them into a chain of
				blocks.</li> <li class="fragment">The chain is created using a proof-of-work mechanism.</li> <li class="fragment">Proof-of-work helps prevent double-spending and establishes the order of transactions.</li> <li class="fragment">Participants in the network are incentivized to follow this chain to maintain the security
				and integrity of the system.</li></ul>`,R,S,p=`<p class="text-green-500">Privacy Considerations</p> <ul><li>Bitcoin addresses are pseudonymous, meaning they are not directly linked to individuals&#39;
				identities.</li> <li class="fragment">However, the transaction graph can potentially reveal some information about users. Nakamoto
				suggests using new addresses for each transaction to enhance privacy.</li></ul>`,j,B,at=`<p class="text-green-500">Simplified Payment Verification (SPV)</p> <ul><li>Nakamoto introduces the concept of SPV, allowing lightweight clients to verify transactions
				without storing the entire blockchain.</li> <li class="fragment">SPV clients only need to maintain block headers, reducing resource requirements.</li> <li class="fragment">Block header → Bloom filters → Merkle Proof → verification with merkle root</li></ul> <aside class="notes">the svp clients contains block headers of all nodes, they use bloom filters to check whether
			the transaction of their interest is present or not. the svp client will make request to the
			network asking for the merkle proof of the transaction based on transaction details and bloom
			filter. svp client then apply necessary hashes to merkle proof and checks if it matching with
			the merkle root or not.</aside>`;return{c(){t=J("section"),t.innerHTML=e,n=tt(),i=J("section"),i.innerHTML=u,o=tt(),c=J("section"),c.innerHTML=d,w=tt(),y=J("section"),y.innerHTML=A,R=tt(),S=J("section"),S.innerHTML=p,j=tt(),B=J("section"),B.innerHTML=at,this.h()},l(W){t=Z(W,"SECTION",{"data-auto-animate":!0,"data-svelte-h":!0}),G(t)!=="svelte-1r37lb3"&&(t.innerHTML=e),n=et(W),i=Z(W,"SECTION",{"data-auto-animate":!0,class:!0,"data-svelte-h":!0}),G(i)!=="svelte-1c7nrjg"&&(i.innerHTML=u),o=et(W),c=Z(W,"SECTION",{"data-auto-animate":!0,class:!0,"data-svelte-h":!0}),G(c)!=="svelte-19ii4gv"&&(c.innerHTML=d),w=et(W),y=Z(W,"SECTION",{"data-auto-animate":!0,class:!0,"data-svelte-h":!0}),G(y)!=="svelte-3ddjp7"&&(y.innerHTML=A),R=et(W),S=Z(W,"SECTION",{"data-auto-animate":!0,class:!0,"data-svelte-h":!0}),G(S)!=="svelte-195zm1z"&&(S.innerHTML=p),j=et(W),B=Z(W,"SECTION",{"data-auto-animate":!0,class:!0,"data-svelte-h":!0}),G(B)!=="svelte-1vsebff"&&(B.innerHTML=at),this.h()},h(){I(t,"data-auto-animate",""),I(i,"data-auto-animate",""),I(i,"class","text-left"),I(c,"data-auto-animate",""),I(c,"class","text-left"),I(y,"data-auto-animate",""),I(y,"class","text-left"),I(S,"data-auto-animate",""),I(S,"class","text-left"),I(B,"data-auto-animate",""),I(B,"class","text-left")},m(W,f){M(W,t,f),M(W,n,f),M(W,i,f),M(W,o,f),M(W,c,f),M(W,w,f),M(W,y,f),M(W,R,f),M(W,S,f),M(W,j,f),M(W,B,f)},p:Mt,d(W){W&&(T(t),T(n),T(i),T(o),T(c),T(w),T(y),T(R),T(S),T(j),T(B))}}}function vi(g){let t,e='<p class="r-fit-text text-green-500 text-md font-bold font-montserrat uppercase">Ethereum</p>',n,i,u=`<p>Ethereum is an open-source blockchain platform that enables developers to build decentralized
			applications (dApps) and execute smart contracts.</p> <div class="fragment"><p>Features that set Ethereum apart from Others:</p> <ul><li>Smart Contracts</li> <li>dApps</li> <li>Turing-Completeness</li> <li>Programmability</li></ul></div>`,o,c,d=`<p class="text-green-500">Smart Contracts</p> <p>Smart Contracts are self-executing agreements written in code. they define the rules and
			conditions for an agreement, and once deployed on the Ethereum blockchain, <span class="text-green-500">they automatically execute actions when the specified conditions are met.</span></p> <p class="fragment">This feature <span class="text-green-500">enables transparent interactions</span> between parties,
			removing the need for intermediaries in various applications.</p>`,w,y,A=`<p class="text-green-500">Decentralized Applications</p> <p>Ethereum allows developers to build decentralized applications, or dApps, on its blockchain.
			These applications <span class="text-green-500">leverage smart contracts to handle the back-end logic</span> and interact with the Ethereum network.</p>`,R,S,p=`<p class="text-green-500">Turing Completeness</p> <p>The Ethereum Virtual Machine (EVM), which executes smart contracts, is Turing-complete. This
			means that <span class="text-green-500">any computation</span> that can be performed algorithmically
			can be executed on the Ethereum blockchain.</p> <aside class="notes">turing complete means that any computation can be performed.</aside>`,j,B,at=`<p class="text-green-500">Programmability</p> <p>Ethereum allows devs to write custom code and logic within smart contracts. Developers can
			create custom tokens, establish rules for financial transactions, automate processes, and much
			more, all within the Ethereum ecosystem.</p>`,W,f,H=`<p class="text-green-500">Tokens</p> <p>Tokens are digital assets that are created and managed on the Ethereum blockchain. They can
			represent various types of assets, such as cryptocurrencies, utility tokens, or even ownership
			of physical assets.</p> <p class="fragment"><span class="text-green-500">Tokens are built using smart contracts and adhere to specific token standards</span>, which are predefined sets of rules and functionalities.</p>`,q,F,ot=`<p class="text-green-500">Token Standards</p> <p class=""><span class="text-green-500">ERC-20</span>
			represents fungible tokens, fungible tokens are interchangable and has the same value, used for
			various purposes, including digital currencies, utility tokens, and representing shares in decentralized
			organizations. They have a common set of functions, such as transferring tokens, getting token
			balances, and approving token allowances.</p>`,it,D,nt=`<p class="text-green-500">Token Standards</p> <p class=""><span class="text-green-500">ERC-721</span>
			represents NFTs (Non-Fungible tokens), each ERC-721 token is unique and can have distinct properties
			and attributes.</p> <p>NFTs are typically used to represent ownership of unique digital or physical assets, such as
			artwork, collectibles, virtual real estate, or in-game items</p>`,$,X,k=`<p class="text-green-500">Token Standards</p> <p class="">Other Standards in Ethereum that offer different functionalities and features. Some notable
			examples include <span class="text-green-500">ERC-1155</span>, which combines fungible and
			non-fungible token capabilities in a single contract, and
			<span class="text-green-500">ERC-777</span>, which introduces additional features for enhanced
			token transfers and interactions.</p>`;return{c(){t=J("section"),t.innerHTML=e,n=tt(),i=J("section"),i.innerHTML=u,o=tt(),c=J("section"),c.innerHTML=d,w=tt(),y=J("section"),y.innerHTML=A,R=tt(),S=J("section"),S.innerHTML=p,j=tt(),B=J("section"),B.innerHTML=at,W=tt(),f=J("section"),f.innerHTML=H,q=tt(),F=J("section"),F.innerHTML=ot,it=tt(),D=J("section"),D.innerHTML=nt,$=tt(),X=J("section"),X.innerHTML=k,this.h()},l(b){t=Z(b,"SECTION",{"data-auto-animate":!0,"data-svelte-h":!0}),G(t)!=="svelte-1robs8o"&&(t.innerHTML=e),n=et(b),i=Z(b,"SECTION",{"data-auto-animate":!0,class:!0,"data-svelte-h":!0}),G(i)!=="svelte-1o8lax8"&&(i.innerHTML=u),o=et(b),c=Z(b,"SECTION",{class:!0,"data-auto-animate":!0,"data-svelte-h":!0}),G(c)!=="svelte-sm7wck"&&(c.innerHTML=d),w=et(b),y=Z(b,"SECTION",{class:!0,"data-auto-animate":!0,"data-svelte-h":!0}),G(y)!=="svelte-nzx00f"&&(y.innerHTML=A),R=et(b),S=Z(b,"SECTION",{class:!0,"data-auto-animate":!0,"data-svelte-h":!0}),G(S)!=="svelte-3fibdv"&&(S.innerHTML=p),j=et(b),B=Z(b,"SECTION",{class:!0,"data-auto-animate":!0,"data-svelte-h":!0}),G(B)!=="svelte-1jj1l9d"&&(B.innerHTML=at),W=et(b),f=Z(b,"SECTION",{class:!0,"data-auto-animate":!0,"data-svelte-h":!0}),G(f)!=="svelte-10xa3my"&&(f.innerHTML=H),q=et(b),F=Z(b,"SECTION",{class:!0,"data-auto-animate":!0,"data-svelte-h":!0}),G(F)!=="svelte-2tvji8"&&(F.innerHTML=ot),it=et(b),D=Z(b,"SECTION",{class:!0,"data-auto-animate":!0,"data-svelte-h":!0}),G(D)!=="svelte-1tm48mw"&&(D.innerHTML=nt),$=et(b),X=Z(b,"SECTION",{class:!0,"data-auto-animate":!0,"data-svelte-h":!0}),G(X)!=="svelte-15cphvf"&&(X.innerHTML=k),this.h()},h(){I(t,"data-auto-animate",""),I(i,"data-auto-animate",""),I(i,"class","text-left"),I(c,"class","text-left"),I(c,"data-auto-animate",""),I(y,"class","text-left"),I(y,"data-auto-animate",""),I(S,"class","text-left"),I(S,"data-auto-animate",""),I(B,"class","text-left"),I(B,"data-auto-animate",""),I(f,"class","text-left"),I(f,"data-auto-animate",""),I(F,"class","text-left"),I(F,"data-auto-animate",""),I(D,"class","text-left"),I(D,"data-auto-animate",""),I(X,"class","text-left"),I(X,"data-auto-animate","")},m(b,E){M(b,t,E),M(b,n,E),M(b,i,E),M(b,o,E),M(b,c,E),M(b,w,E),M(b,y,E),M(b,R,E),M(b,S,E),M(b,j,E),M(b,B,E),M(b,W,E),M(b,f,E),M(b,q,E),M(b,F,E),M(b,it,E),M(b,D,E),M(b,$,E),M(b,X,E)},p:Mt,d(b){b&&(T(t),T(n),T(i),T(o),T(c),T(w),T(y),T(R),T(S),T(j),T(B),T(W),T(f),T(q),T(F),T(it),T(D),T($),T(X))}}}function bi(g){let t,e='<p class="r-fit-text text-green-500 font-extrabold uppercase">The End</p>';return{c(){t=J("section"),t.innerHTML=e},l(n){t=Z(n,"SECTION",{"data-svelte-h":!0}),G(t)!=="svelte-spqwnv"&&(t.innerHTML=e)},m(n,i){M(n,t,i)},p:Mt,d(n){n&&T(t)}}}function yi(g){let t,e,n,i,u,o,c,d,w,y,A,R,S,p,j,B,at,W;return t=new Dt({props:{id:"intro",animate:!0,$$slots:{default:[di]},$$scope:{ctx:g}}}),n=new Dt({props:{id:"blockchain",animate:!0,$$slots:{default:[ui]},$$scope:{ctx:g}}}),u=new Dt({props:{id:"elements",animate:!0,$$slots:{default:[hi]},$$scope:{ctx:g}}}),c=new Dt({props:{id:"genesis-block",animate:!0,$$slots:{default:[pi]},$$scope:{ctx:g}}}),w=new Dt({props:{id:"blockchain-architecture",animate:!0,$$slots:{default:[gi]},$$scope:{ctx:g}}}),A=new Dt({props:{id:"consensus",animate:!0,$$slots:{default:[mi]},$$scope:{ctx:g}}}),S=new Dt({props:{id:"peer-paper-bitcoin",animate:!0,$$slots:{default:[fi]},$$scope:{ctx:g}}}),j=new Dt({props:{id:"intro",animate:!0,$$slots:{default:[vi]},$$scope:{ctx:g}}}),at=new Dt({props:{id:"end-card",animate:!0,$$slots:{default:[bi]},$$scope:{ctx:g}}}),{c(){Rt(t.$$.fragment),e=tt(),Rt(n.$$.fragment),i=tt(),Rt(u.$$.fragment),o=tt(),Rt(c.$$.fragment),d=tt(),Rt(w.$$.fragment),y=tt(),Rt(A.$$.fragment),R=tt(),Rt(S.$$.fragment),p=tt(),Rt(j.$$.fragment),B=tt(),Rt(at.$$.fragment)},l(f){Tt(t.$$.fragment,f),e=et(f),Tt(n.$$.fragment,f),i=et(f),Tt(u.$$.fragment,f),o=et(f),Tt(c.$$.fragment,f),d=et(f),Tt(w.$$.fragment,f),y=et(f),Tt(A.$$.fragment,f),R=et(f),Tt(S.$$.fragment,f),p=et(f),Tt(j.$$.fragment,f),B=et(f),Tt(at.$$.fragment,f)},m(f,H){Lt(t,f,H),M(f,e,H),Lt(n,f,H),M(f,i,H),Lt(u,f,H),M(f,o,H),Lt(c,f,H),M(f,d,H),Lt(w,f,H),M(f,y,H),Lt(A,f,H),M(f,R,H),Lt(S,f,H),M(f,p,H),Lt(j,f,H),M(f,B,H),Lt(at,f,H),W=!0},p(f,[H]){const q={};H&1&&(q.$$scope={dirty:H,ctx:f}),t.$set(q);const F={};H&1&&(F.$$scope={dirty:H,ctx:f}),n.$set(F);const ot={};H&1&&(ot.$$scope={dirty:H,ctx:f}),u.$set(ot);const it={};H&1&&(it.$$scope={dirty:H,ctx:f}),c.$set(it);const D={};H&1&&(D.$$scope={dirty:H,ctx:f}),w.$set(D);const nt={};H&1&&(nt.$$scope={dirty:H,ctx:f}),A.$set(nt);const $={};H&1&&($.$$scope={dirty:H,ctx:f}),S.$set($);const X={};H&1&&(X.$$scope={dirty:H,ctx:f}),j.$set(X);const k={};H&1&&(k.$$scope={dirty:H,ctx:f}),at.$set(k)},i(f){W||(St(t.$$.fragment,f),St(n.$$.fragment,f),St(u.$$.fragment,f),St(c.$$.fragment,f),St(w.$$.fragment,f),St(A.$$.fragment,f),St(S.$$.fragment,f),St(j.$$.fragment,f),St(at.$$.fragment,f),W=!0)},o(f){Et(t.$$.fragment,f),Et(n.$$.fragment,f),Et(u.$$.fragment,f),Et(c.$$.fragment,f),Et(w.$$.fragment,f),Et(A.$$.fragment,f),Et(S.$$.fragment,f),Et(j.$$.fragment,f),Et(at.$$.fragment,f),W=!1},d(f){f&&(T(e),T(i),T(o),T(d),T(y),T(R),T(p),T(B)),Ct(t,f),Ct(n,f),Ct(u,f),Ct(c,f),Ct(w,f),Ct(A,f),Ct(S,f),Ct(j,f),Ct(at,f)}}}class ki extends ue{constructor(t){super(),he(this,t,null,yi,de,{})}}function wi(g){let t,e,n,i;return n=new ki({}),{c(){t=J("div"),e=J("div"),Rt(n.$$.fragment),this.h()},l(u){t=Z(u,"DIV",{class:!0});var o=Ee(t);e=Z(o,"DIV",{class:!0});var c=Ee(e);Tt(n.$$.fragment,c),c.forEach(T),o.forEach(T),this.h()},h(){I(e,"class","slides"),I(t,"class","reveal")},m(u,o){M(u,t,o),Pn(t,e),Lt(n,e,null),i=!0},p:Mt,i(u){i||(St(n.$$.fragment,u),i=!0)},o(u){Et(n.$$.fragment,u),i=!1},d(u){u&&T(t),Ct(n)}}}function xi(g){return Mn(()=>{new Ft({plugins:[oi],autoAnimateEasing:"ease",autoAnimateDuration:1,hash:!0,slideNumber:!0}).initialize()}),[]}class Si extends ue{constructor(t){super(),he(this,t,xi,wi,de,{})}}function Ei(g){let t,e,n;return e=new Si({}),{c(){t=tt(),Rt(e.$$.fragment),this.h()},l(i){Nn("svelte-1n58o9y",document.head).forEach(T),t=et(i),Tt(e.$$.fragment,i),this.h()},h(){document.title="Blockchain"},m(i,u){M(i,t,u),Lt(e,i,u),n=!0},p:Mt,i(i){n||(St(e.$$.fragment,i),n=!0)},o(i){Et(e.$$.fragment,i),n=!1},d(i){i&&T(t),Ct(e,i)}}}class Li extends ue{constructor(t){super(),he(this,t,null,Ei,de,{})}}export{Li as component,Ti as universal};
