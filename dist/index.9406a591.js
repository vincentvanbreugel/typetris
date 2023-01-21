function e(e,t,i,s){Object.defineProperty(e,t,{get:i,set:s,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=s.parcelRequire477f;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){a[e]=t},s.parcelRequire477f=r),r.register("27Lyk",(function(t,i){var s,n;e(t.exports,"register",(()=>s),(e=>s=e)),e(t.exports,"resolve",(()=>n),(e=>n=e));var a={};s=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)a[t[i]]=e[t[i]]},n=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r.register("7pWKZ",(function(e,t){r("hPtJY");Object.defineProperty(e.exports,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(e.exports,{dim:()=>o,default:()=>l});const i=s(r("lrcwG"));function s(e){return e&&e.__esModule?e:{default:e}}let n=new Set;function a(e,t,i){i&&n.has(i)||(i&&n.add(i),console.warn(""),t.forEach((t=>console.warn(e,"-",t))))}function o(e){return i.default.dim(e)}const l={info(e,t){a(i.default.bold(i.default.cyan("info")),...Array.isArray(e)?[e]:[t,e])},warn(e,t){a(i.default.bold(i.default.yellow("warn")),...Array.isArray(e)?[e]:[t,e])},risk(e,t){a(i.default.bold(i.default.magenta("risk")),...Array.isArray(e)?[e]:[t,e])}}})),r.register("hPtJY",(function(e,t){var i,s,n=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(i===setTimeout)return setTimeout(e,0);if((i===a||!i)&&setTimeout)return i=setTimeout,setTimeout(e,0);try{return i(e,0)}catch(t){try{return i.call(null,e,0)}catch(t){return i.call(this,e,0)}}}!function(){try{i="function"==typeof setTimeout?setTimeout:a}catch(e){i=a}try{s="function"==typeof clearTimeout?clearTimeout:r}catch(e){s=r}}();var l,d=[],c=!1,h=-1;function u(){c&&l&&(c=!1,l.length?d=l.concat(d):h=-1,d.length&&p())}function p(){if(!c){var e=o(u);c=!0;for(var t=d.length;t;){for(l=d,d=[];++h<t;)l&&l[h].run();h=-1,t=d.length}l=null,c=!1,function(e){if(s===clearTimeout)return clearTimeout(e);if((s===r||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(e);try{s(e)}catch(t){try{return s.call(null,e)}catch(t){return s.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];d.push(new f(e,t)),1!==d.length||c||o(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=m,n.addListener=m,n.once=m,n.off=m,n.removeListener=m,n.removeAllListeners=m,n.emit=m,n.prependListener=m,n.prependOnceListener=m,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}})),r.register("lrcwG",(function(e,t){var i=String,s=function(){return{isColorSupported:!1,reset:i,bold:i,dim:i,italic:i,underline:i,inverse:i,hidden:i,strikethrough:i,black:i,red:i,green:i,yellow:i,blue:i,magenta:i,cyan:i,white:i,gray:i,bgBlack:i,bgRed:i,bgGreen:i,bgYellow:i,bgBlue:i,bgMagenta:i,bgCyan:i,bgWhite:i}};e.exports=s(),e.exports.createColors=s})),r("27Lyk").register(JSON.parse('{"aT88m":"index.9406a591.js","irUyb":"tetris-theme.b91d5294.mp3","eZkMa":"rotate.0803f9c1.mp3","fhciA":"move.00b850b5.mp3","hlDNR":"lock.00b850b5.mp3","dcee0":"hard-drop.00b850b5.mp3","eYHbW":"game-over.00b850b5.mp3","iKhnu":"line-clear.0803f9c1.mp3"}'));const o=window,l=o.trustedTypes,d=l?l.createPolicy("lit-html",{createHTML:e=>e}):void 0,c=`lit$${(Math.random()+"").slice(9)}$`,h="?"+c,u=`<${h}>`,p=document,f=(e="")=>p.createComment(e),m=e=>null===e||"object"!=typeof e&&"function"!=typeof e,v=Array.isArray,g=e=>v(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),b=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,y=/-->/g,x=/>/g,A=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),w=/'/g,$=/"/g,_=/^(?:script|style|textarea|title)$/i,P=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),L=P(1),S=(P(2),Symbol.for("lit-noChange")),T=Symbol.for("lit-nothing"),k=new WeakMap,O=p.createTreeWalker(p,129,null,!1),E=(e,t)=>{const i=e.length-1,s=[];let n,a=2===t?"<svg>":"",r=b;for(let t=0;t<i;t++){const i=e[t];let o,l,d=-1,h=0;for(;h<i.length&&(r.lastIndex=h,l=r.exec(i),null!==l);)h=r.lastIndex,r===b?"!--"===l[1]?r=y:void 0!==l[1]?r=x:void 0!==l[2]?(_.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=A):void 0!==l[3]&&(r=A):r===A?">"===l[0]?(r=null!=n?n:b,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,o=l[1],r=void 0===l[3]?A:'"'===l[3]?$:w):r===$||r===w?r=A:r===y||r===x?r=b:(r=A,n=void 0);const p=r===A&&e[t+1].startsWith("/>")?" ":"";a+=r===b?i+u:d>=0?(s.push(o),i.slice(0,d)+"$lit$"+i.slice(d)+c+p):i+c+(-2===d?(s.push(void 0),t):p)}const o=a+(e[i]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==d?d.createHTML(o):o,s]};class C{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,a=0;const r=e.length-1,o=this.parts,[d,u]=E(e,t);if(this.el=C.createElement(d,i),O.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(s=O.nextNode())&&o.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const e=[];for(const t of s.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(c)){const i=u[a++];if(e.push(t),void 0!==i){const e=s.getAttribute(i.toLowerCase()+"$lit$").split(c),t=/([.?@])?(.*)/.exec(i);o.push({type:1,index:n,name:t[2],strings:e,ctor:"."===t[1]?G:"?"===t[1]?B:"@"===t[1]?D:N})}else o.push({type:6,index:n})}for(const t of e)s.removeAttribute(t)}if(_.test(s.tagName)){const e=s.textContent.split(c),t=e.length-1;if(t>0){s.textContent=l?l.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],f()),O.nextNode(),o.push({type:2,index:++n});s.append(e[t],f())}}}else if(8===s.nodeType)if(s.data===h)o.push({type:2,index:n});else{let e=-1;for(;-1!==(e=s.data.indexOf(c,e+1));)o.push({type:7,index:n}),e+=c.length-1}n++}}static createElement(e,t){const i=p.createElement("template");return i.innerHTML=e,i}}function R(e,t,i=e,s){var n,a,r,o;if(t===S)return t;let l=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const d=m(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(a=null==l?void 0:l._$AO)||void 0===a||a.call(l,!1),void 0===d?l=void 0:(l=new d(e),l._$AT(e,i,s)),void 0!==s?(null!==(r=(o=i)._$Co)&&void 0!==r?r:o._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(t=R(e,l._$AS(e,t.values),l,s)),t}class I{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:i},parts:s}=this._$AD,n=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:p).importNode(i,!0);O.currentNode=n;let a=O.nextNode(),r=0,o=0,l=s[0];for(;void 0!==l;){if(r===l.index){let t;2===l.type?t=new H(a,a.nextSibling,this,e):1===l.type?t=new l.ctor(a,l.name,l.strings,this,e):6===l.type&&(t=new U(a,this,e)),this.u.push(t),l=s[++o]}r!==(null==l?void 0:l.index)&&(a=O.nextNode(),r++)}return n}p(e){let t=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class H{constructor(e,t,i,s){var n;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cm=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=R(this,e,t),m(e)?e===T||null==e||""===e?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==S&&this.g(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):g(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==T&&m(this._$AH)?this._$AA.nextSibling.data=e:this.T(p.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:s}=e,n="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=C.createElement(s.h,this.options)),s);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===n)this._$AH.p(i);else{const e=new I(n,this),t=e.v(this.options);e.p(i),this.T(t),this._$AH=e}}_$AC(e){let t=k.get(e.strings);return void 0===t&&k.set(e.strings,t=new C(e)),t}k(e){v(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new H(this.O(f()),this.O(f()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cm=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class N{constructor(e,t,i,s,n){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=T}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const n=this.strings;let a=!1;if(void 0===n)e=R(this,e,t,0),a=!m(e)||e!==this._$AH&&e!==S,a&&(this._$AH=e);else{const s=e;let r,o;for(e=n[0],r=0;r<n.length-1;r++)o=R(this,s[i+r],t,r),o===S&&(o=this._$AH[r]),a||(a=!m(o)||o!==this._$AH[r]),o===T?e=T:e!==T&&(e+=(null!=o?o:"")+n[r+1]),this._$AH[r]=o}a&&!s&&this.j(e)}j(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class G extends N{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===T?void 0:e}}const M=l?l.emptyScript:"";class B extends N{constructor(){super(...arguments),this.type=4}j(e){e&&e!==T?this.element.setAttribute(this.name,M):this.element.removeAttribute(this.name)}}class D extends N{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=R(this,e,t,0))&&void 0!==i?i:T)===S)return;const s=this._$AH,n=e===T&&s!==T||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,a=e!==T&&(s===T||n);n&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class U{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){R(this,e)}}const W=o.litHtmlPolyfillSupport;null==W||W(C,H),(null!==(i=o.litHtmlVersions)&&void 0!==i?i:o.litHtmlVersions=[]).push("2.5.0");const j=(e,t,i)=>{var s,n;const a=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:t;let r=a._$litPart$;if(void 0===r){const e=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;a._$litPart$=r=new H(t.insertBefore(f(),e),e,void 0,null!=i?i:{})}return r._$AI(e),r},F={x:4,y:0},q={NO_CHANGE:{y:0,x:0},LEFT:{y:0,x:-1},DOWN:{y:1,x:0},RIGHT:{y:0,x:1}},V={LEFT:"ArrowLeft",DOWN:"ArrowDown",RIGHT:"ArrowRight",ROTATE_CLOCKWISE:"d",ROTATE_COUNTER_CLOCKWISE:"s",HARD_DROP:"ArrowUp",PAUSE:"p"},K=[40,100,300,1200],J=e=>e/60*1e3,Y=[J(53),J(49),J(45),J(41),J(37),J(33),J(28),J(22),J(17),J(11),J(10),J(9),J(8),J(7),J(6),J(6),J(5),J(5),J(4),J(4),J(3)];var Z,z={};Object.defineProperty(z,"__esModule",{value:!0}),Object.defineProperty(z,"default",{enumerable:!0,get:()=>te});const Q=X(r("7pWKZ"));function X(e){return e&&e.__esModule?e:{default:e}}function ee({version:e,from:t,to:i}){Q.default.warn(`${t}-color-renamed`,[`As of Tailwind CSS ${e}, \`${t}\` has been renamed to \`${i}\`.`,"Update your configuration file to silence this warning."])}const te={inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000",white:"#fff",slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},orange:{50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},amber:{50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},yellow:{50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},lime:{50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},green:{50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},emerald:{50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},teal:{50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},cyan:{50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},sky:{50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},blue:{50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},indigo:{50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},violet:{50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},purple:{50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},fuchsia:{50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},pink:{50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},rose:{50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},get lightBlue(){return ee({version:"v2.2",from:"lightBlue",to:"sky"}),this.sky},get warmGray(){return ee({version:"v3.0",from:"warmGray",to:"stone"}),this.stone},get trueGray(){return ee({version:"v3.0",from:"trueGray",to:"neutral"}),this.neutral},get coolGray(){return ee({version:"v3.0",from:"coolGray",to:"gray"}),this.gray},get blueGray(){return ee({version:"v3.0",from:"blueGray",to:"slate"}),this.slate}},ie={gray:{lighter:t(Z=(z.__esModule?z:{default:z}).default).gray[100],light:t(Z).gray[400],neutral:t(Z).gray[500],dark:t(Z).gray[600],darker:t(Z).gray[900]},red:{lighter:t(Z).red[100],light:t(Z).red[400],neutral:t(Z).red[500],dark:t(Z).red[600],darker:t(Z).red[900]},orange:{lighter:t(Z).orange[100],light:t(Z).orange[400],neutral:t(Z).orange[500],dark:t(Z).orange[600],darker:t(Z).orange[900]},green:{lighter:t(Z).green[100],light:t(Z).green[400],neutral:t(Z).green[500],dark:t(Z).green[600],darker:t(Z).green[900]},purple:{lighter:t(Z).purple[100],light:t(Z).purple[400],neutral:t(Z).purple[500],dark:t(Z).purple[600],darker:t(Z).purple[900]},blue:{lighter:t(Z).blue[100],light:t(Z).blue[400],neutral:t(Z).blue[500],dark:t(Z).blue[600],darker:t(Z).blue[900]},cyan:{lighter:t(Z).cyan[100],light:t(Z).cyan[300],neutral:t(Z).cyan[400],dark:t(Z).cyan[500],darker:t(Z).cyan[900]},yellow:{lighter:t(Z).yellow[100],light:t(Z).yellow[300],neutral:t(Z).yellow[400],dark:t(Z).yellow[500],darker:t(Z).yellow[900]}},se=["red","orange","green","purple","blue","cyan","yellow"],ne=[{id:1,color:ie.yellow,shapes:[[[1,1],[1,1]],[[1,1],[1,1]],[[1,1],[1,1]],[[1,1],[1,1]]]},{id:2,color:ie.blue,shapes:[[[1,0,0],[1,1,1],[0,0,0]],[[0,1,1],[0,1,0],[0,1,0]],[[0,0,0],[1,1,1],[0,0,1]],[[0,1,0],[0,1,0],[1,1,0]]]},{id:3,color:ie.orange,shapes:[[[0,0,1],[1,1,1],[0,0,0]],[[0,1,0],[0,1,0],[0,1,1]],[[0,0,0],[1,1,1],[1,0,0]],[[1,1,0],[0,1,0],[0,1,0]]]},{id:4,color:ie.green,shapes:[[[0,1,1],[1,1,0],[0,0,0]],[[0,1,0],[0,1,1],[0,0,1]],[[0,0,0],[0,1,1],[1,1,0]],[[1,0,0],[1,1,0],[0,1,0]]]},{id:5,color:ie.red,shapes:[[[1,1,0],[0,1,1],[0,0,0]],[[0,0,1],[0,1,1],[0,1,0]],[[0,0,0],[1,1,0],[0,1,1]],[[0,1,0],[1,1,0],[1,0,0]]]},{id:6,color:ie.purple,shapes:[[[0,1,0],[1,1,1],[0,0,0]],[[0,1,0],[0,1,1],[0,1,0]],[[0,0,0],[1,1,1],[0,1,0]],[[0,1,0],[1,1,0],[0,1,0]]]},{id:7,color:ie.cyan,shapes:[[[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]],[[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0]],[[0,0,0,0],[0,0,0,0],[1,1,1,1],[0,0,0,0]],[[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]]]}];class ae{static sleep(e){return new Promise((t=>setTimeout(t,e)))}static drawMino(e,t,i,s){const n=2/33,a=2*n,r=2*n,o=2*r;i.fillStyle=s.dark,i.fillRect(e,t,1,1),i.fillStyle=s.light,i.fillRect(e+n,t+n,1-r,1-r),i.fillStyle=s.neutral,i.fillRect(e+a,t+a,1-o,1-o)}}class re{animatedLines=[];animationTimer={start:0,elapsed:0};constructor(e){this.canvas=document.getElementById(e),this.context=this.canvas.getContext("2d"),this.state=Array.from(Array(20),(()=>Array(10).fill(0))),this.create()}draw(){this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height),this.context.fillStyle=ie.gray.darker,this.context.fillRect(0,0,this.context.canvas.width,this.context.canvas.height);for(let e=0;e<this.state.length;e++)for(let t=0;t<this.state[0].length;t++){const i=ne.find((i=>i.id===this.state[e][t]));i&&ae.drawMino(t,e,this.context,i.color)}}async handleClearLines(e){this.animatedLines=e,this.animateClearedLines(),await ae.sleep(400),cancelAnimationFrame(this.lineClearAnimationId),this.animatedLines=[],this.clearLines(e)}async handleGameOver(){this.animateGameOver(),await ae.sleep(1200),cancelAnimationFrame(this.gameOverAnimationId)}getLinesCleared(){return this.state.reduce(((e,t,i)=>(t.every((e=>0!==e))&&e.push(i),e)),[])||[]}clearLines(e){e.forEach((e=>{const t=JSON.parse(JSON.stringify(this.state));this.state.forEach(((i,s)=>{if(0===s)for(let e=0;e<i.length;e++)i[e]=0;if(s>0&&s<=e)for(let e=0;e<i.length;e++)i[e]=t[s-1][e]}))}))}animateClearedLines(e=0){this.context.fillStyle=ie.gray.darker,this.animationTimer.elapsed=e-this.animationTimer.start,this.animationTimer.elapsed>=80&&(this.animationTimer.start=e,this.animatedLines.forEach((e=>{const t=this.state[e].indexOf(0),i=-1!==t?t-1:4,s=this.state[e].lastIndexOf(0),n=-1!==s?s+1:5;this.context.clearRect(i,e,1,1),this.context.clearRect(n,e,1,1),this.context.fillRect(i,e,1,1),this.context.fillRect(n,e,1,1),this.state[e][i]=0,this.state[e][n]=0}))),this.lineClearAnimationId=requestAnimationFrame(this.animateClearedLines.bind(this))}animateGameOver(e=0,t=0){if(this.state[t]){if(this.animationTimer.elapsed=e-this.animationTimer.start,this.animationTimer.elapsed>=40){this.animationTimer.start=e;for(let e=0;e<this.state[t].length;e++){const i=se[Math.floor(Math.random()*se.length)];ae.drawMino(e,t,this.context,ie[i])}t++}this.gameOverAnimationId=requestAnimationFrame((e=>{this.animateGameOver(e,t)}))}}create(){this.context.canvas.width=330,this.context.canvas.height=660,this.context.scale(33,33)}}class oe{isLocked=!1;constructor(e,t){this.id=e.id,this.anchorPoint=F,this.piecePosition=[],this.shapes=e.shapes,this.color=e.color,this.shapeIndex=0,this.board=t}move(e){this.clearPiecePosition(),this.updateBoardPosition({direction:e,value:this.id}),this.isLocked=this.isPieceLocked()}rotate(e){"clockwise"===e?this.incrementShapeIndex():this.decrementShapeIndex(),this.move(q.NO_CHANGE)}hardDrop(){let e=0;for(;this.isMoveValid({direction:q.DOWN});)this.move(q.DOWN),e++;return e}isPieceLocked(){const e={direction:q.DOWN,piecePosition:this.getCopyPiecePosition()};return!this.isAboveFloor(e)||!this.isAboveOtherPieces(e)}isMoveValid(e){const{direction:t,rotation:i}=e,s=[];let n=this.shapeIndex;i&&("clockwise"===i?3!==this.shapeIndex?n++:n=0:0!==this.shapeIndex?n--:n=3),this.shapes[n].forEach(((e,t)=>{e.forEach(((e,i)=>{1===e&&s.push({x:this.anchorPoint.x+i,y:this.anchorPoint.y+t})}))}));const a={...t&&{direction:t},piecePosition:s};return!(!this.isBetweenWalls(a)||!this.isBetweenOtherPieces(a))&&!(!this.isAboveFloor(a)||!this.isAboveOtherPieces(a))}updatePiecePosition(){this.piecePosition=[],this.shapes[this.shapeIndex].forEach(((e,t)=>{e.forEach(((e,i)=>{1===e&&this.piecePosition.push({x:this.anchorPoint.x+i,y:this.anchorPoint.y+t})}))}))}updateBoardPosition({direction:e=q.NO_CHANGE,value:t=0}){this.anchorPoint={x:this.anchorPoint.x+e.x,y:this.anchorPoint.y+e.y},this.updatePiecePosition(),this.piecePosition.forEach((e=>{this.board.state[e.y][e.x]=t}))}incrementShapeIndex(){3!==this.shapeIndex?this.shapeIndex++:this.shapeIndex=0}decrementShapeIndex(){0!==this.shapeIndex?this.shapeIndex--:this.shapeIndex=3}isBetweenOtherPieces(e){const{direction:t,piecePosition:i}=e;return i.every((e=>{const i=t?e.x+t.x:e.x;return 0===this.board.state[e.y][i]||this.piecePosition.find((t=>t.x===i&&t.y===e.y))}))}isBetweenWalls(e){const{direction:t,piecePosition:i}=e;return i.every((e=>{const i=t?e.x+t.x:e.x;return i>=0&&i<10}))}isAboveOtherPieces(e){const{direction:t,piecePosition:i}=e;return i.every((e=>{const i=t?e.y+t.y:e.y;return 0===this.board.state[i][e.x]||this.piecePosition.find((t=>t.x===e.x&&t.y===i))}))}isAboveFloor(e){const{direction:t,piecePosition:i}=e;return i.every((e=>(t?e.y+t.y:e.y)<20))}clearPiecePosition(){this.piecePosition.forEach((e=>{this.board.state[e.y][e.x]=0}))}getCopyPiecePosition(){return Object.assign([],this.piecePosition)}}var le;le=new URL(r("27Lyk").resolve("irUyb"),import.meta.url).toString();var de;de=new URL(r("27Lyk").resolve("eZkMa"),import.meta.url).toString();var ce;ce=new URL(r("27Lyk").resolve("fhciA"),import.meta.url).toString();var he;he=new URL(r("27Lyk").resolve("hlDNR"),import.meta.url).toString();var ue;ue=new URL(r("27Lyk").resolve("dcee0"),import.meta.url).toString();var pe;pe=new URL(r("27Lyk").resolve("eYHbW"),import.meta.url).toString();var fe;fe=new URL(r("27Lyk").resolve("iKhnu"),import.meta.url).toString();class me{sounds={};constructor(){this.sounds.music=this.loadSound(t(le),0,!0),this.sounds.rotate=this.loadSound(t(de),0),this.sounds.move=this.loadSound(t(ce),0),this.sounds.lock=this.loadSound(t(he),0),this.sounds.hardDrop=this.loadSound(t(ue),0),this.sounds.gameOver=this.loadSound(t(pe),0),this.sounds.lineClear=this.loadSound(t(fe),0)}loadSound(e,t,i=!1){const s=document.createElement("audio");return s.src=e,s.volume=t,s.loop=i,s.style.display="none",s.setAttribute("preload","auto"),s.setAttribute("type","audio/mp3"),document.body.appendChild(s),s}play(e){this.sounds[e].pause(),this.sounds[e].currentTime=0,this.sounds[e].play()}pause(e){this.sounds[e].pause()}resume(e){this.sounds[e].play()}stop(e){this.sounds[e].pause(),this.sounds[e].currentTime=0}setVolume(e,t){this.sounds[e].volume=t}}const ve=Array.from(Array(10).keys()),ge=e=>L`<div
        class="absolute top-1 right-1 bottom-1 left-1 bg-gray-900 items-center justify-center flex-col ${e.hide?"hidden":"flex"}"
    >
        <div class="mb-12 font-bold tracking-wide text-[44px] flex font-outline">
            <span class="text-blue-400 font-outline-blue">T</span>
            <span class="text-green-400 font-outline-green">Y</span>
            <span class="text-red-400 font-outline-red">P</span>
            <span class="text-orange-400 font-outline-orange">E</span>
            <span class="text-yellow-300 font-outline-yellow">T</span>
            <span class="text-green-400 font-outline-green">R</span>
            <span class="text-cyan-300 font-outline-cyan">I</span>
            <span class="text-purple-400 font-outline-purple">S</span>
        </div>

        <div class="uppercase font-bold tracking-wide mb-3">Speed Level</div>
        <div class="flex flex-wrap justify-center mx-6 border-l-2 border-t-2 border-slate-100 mb-8">
            ${ve.map((t=>L`<div
                    class="grow
                            border-r-2 
                            border-b-2
                            border-slate-100
                            text-slate-100
                            flex
                            text-xl
                            font-bold"
                >
                    <button
                        type="button"
                        data-level-btn
                        value="${t}"
                        @click=${e.selectLevel}
                        class="grow 
                        px-4 
                        py-2
                        
                        hover:opacity-100 
                        transition 
                        duration-150 
                        ease-in-out
                        ${0===t?"opacity-100 selected":"opacity-25"}"
                    >
                        ${t}
                    </button>
                </div>`))}
        </div>

        <div class="uppercase font-bold tracking-wide mb-3">Music</div>
        <div class="flex justify-center mx-6 border-l-2 border-t-2 border-slate-100 mb-16">
            <div
                class="grow
                        border-r-2 
                        border-b-2
                        border-slate-100
                        text-slate-100
                        flex
                        text-lg
                        font-bold"
            >
                <button
                    type="button"
                    data-music-btn
                    value="on"
                    @click=${e.selectMusic}
                    class="grow 
                            px-4 
                            py-2
                            w-20
                            hover:opacity-100 
                            transition 
                            duration-150 
                            ease-in-out
                            opacity-100 selected"
                >
                    On
                </button>
            </div>
            <div
                class="grow
                        border-r-2 
                        border-b-2
                        border-slate-100
                        text-slate-100
                        flex
                        text-lg
                        font-bold"
            >
                <button
                    type="button"
                    data-music-btn
                    value="off"
                    @click=${e.selectMusic}
                    class="grow 
                            px-4 
                            py-2 
                            w-20
                            hover:opacity-100 
                            transition 
                            duration-150 
                            ease-in-out
                            opacity-25"
                >
                    Off
                </button>
            </div>
        </div>

        ${ye({text:"Ready",action:e.startGame})}
    </div>`,be=()=>L`<div class="p-[2px] border-2 border-slate-100 rounded bg-gray-900">
        <div class="border-2 border-slate-100 rounded-sm">
            <div class="text-center uppercase font-bold tracking-wide pt-1">Controls</div>
            <div class="p-2">
                <div class="flex justify-between">
                    <span>&#8592; &#8594; &#8595;</span>
                    <span>Move</span>
                </div>
                <div class="flex justify-between">
                    <span>&#8593;</span>
                    <span class="flex">Hard<span class="w-1"></span>Drop</span>
                </div>
                <div class="flex justify-between">
                    <span class="flex">D<span class="w-2"></span>S</span>
                    <span>Rotate</span>
                </div>
                <div class="flex justify-between">
                    <span>P</span>
                    <span>Pause</span>
                </div>
            </div>
        </div>
    </div> `,ye=e=>L`<button
        type="button"
        @click=${e.action}
        class="w-full 
            uppercase 
            tracking-wider 
            py-3 
            px-6 
            bg-gradient-to-l 
            from-gray-600
            to-transparent
            hover:bg-gray-600 
            border-t-2 
            border-b-2 
            border-slate-100 
            text-slate-100 
            font-bold 
            transition 
            duration-200 
            ease-in-out"
    >
        ${e.text}
    </button>`,xe=e=>L`<div
        class="game-overlay absolute top-[4px] right-[4px] bottom-[4px] left-[4px] bg-gray-900 items-center justify-center flex-col ${e.hide?"hidden":"flex"}"
    >
        <div class="mb-12 font-bold tracking-wide text-[40px] flex font-outline">
            <span class="text-blue-400 font-outline-blue">G</span>
            <span class="text-green-400 font-outline-green">A</span>
            <span class="text-red-400 font-outline-red">M</span>
            <span class="text-orange-400 font-outline-orange">E</span>
            <span class="w-2"></span>
            <span class="text-yellow-300 font-outline-yellow">O</span>
            <span class="text-green-400 font-outline-green">V</span>
            <span class="text-cyan-300 font-outline-cyan">E</span>
            <span class="text-purple-400 font-outline-purple">R</span>
        </div>
        ${ye({text:"Start new game",action:e.action})}
    </div>`,Ae=e=>L`<div
        class="game-overlay absolute top-[4px] right-[4px] bottom-[4px] left-[4px] bg-gray-900 items-center justify-center flex-col ${e.hide?"hidden":"flex"}"
    >
        <div class="mb-12 font-bold tracking-wide text-[40px] flex font-outline">
            <span class="text-red-400 font-outline-red">P</span>
            <span class="text-orange-400 font-outline-orange">A</span>
            <span class="text-yellow-300 font-outline-yellow">U</span>
            <span class="text-green-400 font-outline-green">S</span>
            <span class="text-cyan-300 font-outline-cyan">E</span>
            <span class="text-purple-400 font-outline-purple">D</span>
        </div>
        <div class="mb-8 w-full">
            ${ye({text:"Resume",action:e.resumeAction})}
        </div>
        ${ye({text:"Start new game",action:e.newGameAction})}
    </div>`;class we{nextPieceElementId="nextPiece";canvasId="nextPieceBoard";constructor(){this.nextPieceElement=document.getElementById(this.nextPieceElementId),this.renderNextPieceTemplate(),this.canvas=document.getElementById(this.canvasId),this.context=this.canvas.getContext("2d")}renderNextPieceTemplate(){j(L`<div class="p-[2px] border-2 border-slate-100 rounded bg-gray-900 mb-3">
        <div class="border-2 border-slate-100 rounded-sm">
            <div class="text-center uppercase font-bold tracking-wide pt-1">Next</div>
            <div class="next-piece-container h-[140px] w-[140px] mx-auto mb-3 flex items-center justify-center">
                <canvas id="nextPieceBoard" class="next-piece-canvas"></canvas>
            </div>
        </div>
    </div>`,this.nextPieceElement)}draw(e){const t=e.shapes[0];this.setCanvasDimensions(t);for(let i=0;i<t.length;i++)for(let s=0;s<t[0].length;s++)0!==t[i][s]&&ae.drawMino(s,i,this.context,e.color)}clear(){this.context.clearRect(0,0,this.context.canvas.width,this.context.canvas.height)}setCanvasDimensions(e){const t=2===e.length?2:e.length-1;this.context.canvas.width=33*e.length,this.context.canvas.height=33*t,this.context.scale(33,33)}}class $e{score=0;level=0;isRunning=!1;isPaused=!1;isGameOver=!1;totalLinesCleared=0;dropScore=0;newLinesCleared=0;scoreElementId="gameScore";constructor(e){this.game=e,this.speed=Y[this.level],this.scoreElement=document.getElementById(this.scoreElementId),this.renderScoreTemplate()}renderScoreTemplate(){var e;j((e={score:this.score.toString().padStart(6,"0"),clearedLines:this.totalLinesCleared.toString().padStart(3,"0"),level:this.level.toString().padStart(2,"0")},L`<div class="p-[2px] border-2 border-slate-100 rounded bg-gray-900 mb-3">
            <div class="border-2 border-slate-100 rounded-sm text-center font-bold tracking-wide py-1">
                <div class="uppercase">Score</div>
                <div class="text-xl">${e.score}</div>
            </div>
        </div>
        <div class="p-[2px] border-2 border-slate-100 rounded bg-gray-900 mb-3">
            <div class="border-2 border-slate-100 rounded-sm text-center font-bold tracking-wide py-1">
                <div class="uppercase">Lines</div>
                <div class="text-xl">${e.clearedLines}</div>
            </div>
        </div>
        <div class="p-[2px] border-2 border-slate-100 rounded bg-gray-900 mb-3">
            <div class="border-2 border-slate-100 rounded-sm text-center font-bold tracking-wide py-1">
                <div class="uppercase">Speed LV</div>
                <div class="text-xl">${e.level}</div>
            </div>
        </div>`),this.scoreElement)}reset(){this.totalLinesCleared=0,this.dropScore=0,this.score=0,this.speed=Y[this.level],this.isPaused=!1,this.isGameOver=!1,this.updateScore()}incrementDropScore(e=1,t=!1){this.dropScore=t?this.dropScore+2*e:this.dropScore+1*e}updateScore(){this.newLinesCleared&&(this.score=this.score+K[this.newLinesCleared-1]*(this.level+1),this.totalLinesCleared=this.totalLinesCleared+this.newLinesCleared),this.dropScore&&(this.score=this.score+1*this.dropScore),this.newLinesCleared=0,this.dropScore=0,this.renderScoreTemplate()}setGameOptions(e){const{level:t}=e;this.setLevel(t)}setLevel(e){this.level=e,this.speed=Y[this.level],this.renderScoreTemplate()}checkLevelChange(){this.totalLinesCleared>10*(this.level+1)&&this.level<20&&this.setLevel(this.level+1)}togglePause(){this.isPaused=!this.isPaused}}new class{gameOptionsId="gameOptions";overlayId="gameOverlay";boardId="board";levelBtnAttr="[data-level-btn]";musicBtnAttr="[data-music-btn]";gameTimer={start:0,elapsed:0};lineClearActive=!1;constructor(e){this.renderGameLayoutTemplate(e),this.gameOptionsElement=document.getElementById(this.gameOptionsId),this.renderNewGameTemplate(),this.overlayElement=document.getElementById(this.overlayId),this.audioPlayer=new me,this.state=new $e(this),this.board=new re(this.boardId),this.nextPieceBoard=new we,this.piece=this.getRandomPiece(),this.nextPiece=this.getRandomPiece(),this.attachEventHandlers()}renderGameLayoutTemplate(e){const t=document.getElementById(e);j(L`<div class="game-layout text-slate-100 bg-gray-800 h-screen flex text-lg">
        <div class="flex gap-4 justify-around m-auto pb-12">
            <div class="p-[2px] border-2 border-slate-100 rounded bg-gray-900 relative ml-auto">
                <div class="h-[664px] w-[334px] border-2 border-slate-100 rounded-sm">
                    <canvas id="board" class="board"></canvas>
                    <div id="gameOptions"></div>
                    <div id="gameOverlay"></div>
                </div>
            </div>
            <div class="mr-auto w-[220px] flex flex-col">
                <div id="gameScore"></div>
                <div id="nextPiece"></div>
                <div class="mt-auto">${be()}</div>
            </div>
        </div>
    </div>`,t)}renderNewGameTemplate(e=!1){const t={hide:e,startGame:this.startGame.bind(this),selectLevel:this.selectLevel.bind(this),selectMusic:this.selectMusic.bind(this)};j(ge(t),this.gameOptionsElement)}renderGameOverTemplate(e=!1){const t={action:this.restartGame.bind(this),hide:e};j(xe(t),this.overlayElement)}renderPauseTemplate(e=!1){const t={resumeAction:this.handleClickPause.bind(this),newGameAction:this.restartGame.bind(this),hide:e};j(Ae(t),this.overlayElement)}attachEventHandlers(){document.addEventListener("keydown",(e=>{if(this.state.isRunning&&(e.key===V.PAUSE&&this.handleClickPause(),!this.lineClearActive&&!this.state.isPaused))switch(e.key){case V.HARD_DROP:this.hardDrop();break;case V.DOWN:this.movePiece({direction:q.DOWN,userInput:!0});break;case V.LEFT:this.movePiece({direction:q.LEFT,userInput:!0});break;case V.RIGHT:this.movePiece({direction:q.RIGHT,userInput:!0});break;case V.ROTATE_CLOCKWISE:this.rotatePiece("clockwise");break;case V.ROTATE_COUNTER_CLOCKWISE:this.rotatePiece("counterClockwise")}}))}startGame(){this.setGameOptions(),this.renderNewGameTemplate(!0),this.movePiece({direction:q.NO_CHANGE}),this.nextPieceBoard.draw(this.nextPiece),this.startGameLoop(),this.state.isRunning=!0,this.audioPlayer.play("music")}restartGame(){this.stopGameLoop(),this.audioPlayer.stop("music"),this.state.reset(),this.nextPieceBoard.clear(),this.board=new re(this.boardId),this.piece=this.getRandomPiece(),this.nextPiece=this.getRandomPiece(),this.renderPauseTemplate(!0),this.renderGameOverTemplate(!0),this.renderNewGameTemplate()}async startGameLoop(e=0){this.gameTimer.elapsed=e-this.gameTimer.start,this.lineClearActive||this.gameTimer.elapsed>this.state.speed&&(this.gameTimer.start=e,this.piece.isLocked?await this.handleLockedPiece():this.movePiece({direction:q.DOWN}),this.state.isGameOver)||(this.requestId=requestAnimationFrame(this.startGameLoop.bind(this)))}stopGameLoop(){cancelAnimationFrame(this.requestId)}movePiece(e){const{direction:t,initialDrop:i,userInput:s}=e;this.piece.isMoveValid({direction:t})?(s&&this.audioPlayer.play("move"),this.piece.move(t),s&&t===q.DOWN&&(this.state.incrementDropScore(),this.piece.isLocked&&this.handleLockedPiece()),this.board.draw()):i&&this.gameOver()}rotatePiece(e){this.piece.isMoveValid({rotation:e})&&(this.audioPlayer.play("rotate"),this.piece.rotate(e),this.board.draw())}hardDrop(){if(this.piece.isLocked)return;const e=this.piece.hardDrop();this.state.incrementDropScore(e,!0),this.audioPlayer.play("hardDrop"),this.board.draw(),this.piece.isLocked&&this.handleLockedPiece()}getRandomPiece(){let e=this.getRandomTetromino();return this.piece&&e.id===this.piece.id&&(e=this.getRandomTetromino()),new oe(e,this.board)}getRandomTetromino(){const e=Math.floor(Math.random()*ne.length);return JSON.parse(JSON.stringify(ne[e]))}async handleLockedPiece(){this.audioPlayer.play("lock"),this.lineClearActive=!0,this.stopGameLoop(),await this.checkLinesClear(),this.state.updateScore(),this.state.checkLevelChange(),this.piece=this.nextPiece,this.nextPiece=this.getRandomPiece(),this.nextPieceBoard.draw(this.nextPiece),this.movePiece({direction:q.NO_CHANGE,initialDrop:!0}),this.lineClearActive=!1,this.startGameLoop()}async checkLinesClear(){const e=this.board.getLinesCleared();e.length&&(this.audioPlayer.play("lineClear"),await this.board.handleClearLines(e),this.state.newLinesCleared=e.length)}selectLevel(e){document.querySelectorAll(this.levelBtnAttr).forEach((e=>{e.classList.remove("selected","opacity-100"),e.classList.add("opacity-25")}));const t=e.target;t&&(t.classList.add("selected","opacity-100"),t.classList.remove("opacity-25"))}selectMusic(e){document.querySelectorAll(this.musicBtnAttr).forEach((e=>{e.classList.remove("selected","opacity-100"),e.classList.add("opacity-25")}));const t=e.target;t&&(t.classList.add("selected","opacity-100"),t.classList.remove("opacity-25"))}setGameOptions(){const e=document.querySelector(`${this.musicBtnAttr}.selected`)?.value,t=document.querySelector(`${this.levelBtnAttr}.selected`)?.value;this.audioPlayer.setVolume("music","on"===e?1:0),this.state.setGameOptions({level:parseInt(t,10)})}handleClickPause(){this.state.togglePause(),this.state.isPaused?(this.stopGameLoop(),this.renderPauseTemplate(),this.audioPlayer.pause("music")):(this.startGameLoop(),this.renderPauseTemplate(!0),this.audioPlayer.resume("music"))}async gameOver(){this.state.isGameOver=!0,this.state.isRunning=!1,this.audioPlayer.stop("music"),this.audioPlayer.play("gameOver"),this.nextPieceBoard.clear(),await this.board.handleGameOver(),this.renderGameOverTemplate()}}("tetris");
//# sourceMappingURL=index.9406a591.js.map
