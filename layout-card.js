function t(t,e,i,o){var s,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(s=t[r])&&(a=(n<3?s(a):n>3?s(e,i,a):s(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a}const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new Map;class s{constructor(t,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=o.get(this.cssText);return e&&void 0===t&&(o.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const n=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new s(o,i)},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",i))(e)})(t):t;var r;const l=window.trustedTypes,d=l?l.emptyScript:"",c=window.reactiveElementPolyfillSupport,h={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},u=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:u};class v extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const o=this._$Eh(i,e);void 0!==o&&(this._$Eu.set(o,i),t.push(o))})),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const s=this[t];this[e]=o,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{e?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((e=>{const i=document.createElement("style"),o=window.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=e.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=p){var o,s;const n=this.constructor._$Eh(t,i);if(void 0!==n&&!0===i.reflect){const a=(null!==(s=null===(o=i.converter)||void 0===o?void 0:o.toAttribute)&&void 0!==s?s:h.toAttribute)(e,i.type);this._$Ei=t,null==a?this.removeAttribute(n):this.setAttribute(n,a),this._$Ei=null}}_$AK(t,e){var i,o,s;const n=this.constructor,a=n._$Eu.get(t);if(void 0!==a&&this._$Ei!==a){const t=n.getPropertyOptions(a),r=t.converter,l=null!==(s=null!==(o=null===(i=r)||void 0===i?void 0:i.fromAttribute)&&void 0!==o?o:"function"==typeof r?r:null)&&void 0!==s?s:h.fromAttribute;this._$Ei=a,this[a]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var g;v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:v}),(null!==(r=globalThis.reactiveElementVersions)&&void 0!==r?r:globalThis.reactiveElementVersions=[]).push("1.3.0");const f=globalThis.trustedTypes,_=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,m=`lit$${(Math.random()+"").slice(9)}$`,y="?"+m,$=`<${y}>`,b=document,w=(t="")=>b.createComment(t),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,E=Array.isArray,A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,x=/-->/g,S=/>/g,M=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,T=/'/g,O=/"/g,k=/^(?:script|style|textarea|title)$/i,P=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),U=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),R=new WeakMap,z=b.createTreeWalker(b,129,null,!1),H=(t,e)=>{const i=t.length-1,o=[];let s,n=2===e?"<svg>":"",a=A;for(let e=0;e<i;e++){const i=t[e];let r,l,d=-1,c=0;for(;c<i.length&&(a.lastIndex=c,l=a.exec(i),null!==l);)c=a.lastIndex,a===A?"!--"===l[1]?a=x:void 0!==l[1]?a=S:void 0!==l[2]?(k.test(l[2])&&(s=RegExp("</"+l[2],"g")),a=M):void 0!==l[3]&&(a=M):a===M?">"===l[0]?(a=null!=s?s:A,d=-1):void 0===l[1]?d=-2:(d=a.lastIndex-l[2].length,r=l[1],a=void 0===l[3]?M:'"'===l[3]?O:T):a===O||a===T?a=M:a===x||a===S?a=A:(a=M,s=void 0);const h=a===M&&t[e+1].startsWith("/>")?" ":"";n+=a===A?i+$:d>=0?(o.push(r),i.slice(0,d)+"$lit$"+i.slice(d)+m+h):i+m+(-2===d?(o.push(void 0),e):h)}const r=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==_?_.createHTML(r):r,o]};class N{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let s=0,n=0;const a=t.length-1,r=this.parts,[l,d]=H(t,e);if(this.el=N.createElement(l,i),z.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=z.nextNode())&&r.length<a;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(m)){const i=d[n++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+"$lit$").split(m),e=/([.?@])?(.*)/.exec(i);r.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?q:"?"===e[1]?W:"@"===e[1]?F:D})}else r.push({type:6,index:s})}for(const e of t)o.removeAttribute(e)}if(k.test(o.tagName)){const t=o.textContent.split(m),e=t.length-1;if(e>0){o.textContent=f?f.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],w()),z.nextNode(),r.push({type:2,index:++s});o.append(t[e],w())}}}else if(8===o.nodeType)if(o.data===y)r.push({type:2,index:s});else{let t=-1;for(;-1!==(t=o.data.indexOf(m,t+1));)r.push({type:7,index:s}),t+=m.length-1}s++}}static createElement(t,e){const i=b.createElement("template");return i.innerHTML=t,i}}function j(t,e,i=t,o){var s,n,a,r;if(e===U)return e;let l=void 0!==o?null===(s=i._$Cl)||void 0===s?void 0:s[o]:i._$Cu;const d=C(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===d?l=void 0:(l=new d(t),l._$AT(t,i,o)),void 0!==o?(null!==(a=(r=i)._$Cl)&&void 0!==a?a:r._$Cl=[])[o]=l:i._$Cu=l),void 0!==l&&(e=j(t,l._$AS(t,e.values),l,o)),e}class I{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:o}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:b).importNode(i,!0);z.currentNode=s;let n=z.nextNode(),a=0,r=0,l=o[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new B(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new Q(n,this,t)),this.v.push(e),l=o[++r]}a!==(null==l?void 0:l.index)&&(n=z.nextNode(),a++)}return s}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class B{constructor(t,e,i,o){var s;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cg=null===(s=null==o?void 0:o.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=j(this,t,e),C(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==U&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return E(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==L&&C(this._$AH)?this._$AA.nextSibling.data=t:this.k(b.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:o}=t,s="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=N.createElement(o.h,this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.m(i);else{const t=new I(s,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=R.get(t.strings);return void 0===e&&R.set(t.strings,e=new N(t)),e}S(t){E(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const s of t)o===e.length?e.push(i=new B(this.A(w()),this.A(w()),this,this.options)):i=e[o],i._$AI(s),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class D{constructor(t,e,i,o,s){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const s=this.strings;let n=!1;if(void 0===s)t=j(this,t,e,0),n=!C(t)||t!==this._$AH&&t!==U,n&&(this._$AH=t);else{const o=t;let a,r;for(t=s[0],a=0;a<s.length-1;a++)r=j(this,o[i+a],e,a),r===U&&(r=this._$AH[a]),n||(n=!C(r)||r!==this._$AH[a]),r===L?t=L:t!==L&&(t+=(null!=r?r:"")+s[a+1]),this._$AH[a]=r}n&&!o&&this.C(t)}C(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class q extends D{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===L?void 0:t}}const G=f?f.emptyScript:"";class W extends D{constructor(){super(...arguments),this.type=4}C(t){t&&t!==L?this.element.setAttribute(this.name,G):this.element.removeAttribute(this.name)}}class F extends D{constructor(t,e,i,o,s){super(t,e,i,o,s),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=j(this,t,e,0))&&void 0!==i?i:L)===U)return;const o=this._$AH,s=t===L&&o!==L||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==L&&(o===L||s);s&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Q{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){j(this,t)}}const V=window.litHtmlPolyfillSupport;var K,J;null==V||V(N,B),(null!==(g=globalThis.litHtmlVersions)&&void 0!==g?g:globalThis.litHtmlVersions=[]).push("2.2.0");class Y extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var o,s;const n=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e;let a=n._$litPart$;if(void 0===a){const t=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;n._$litPart$=a=new B(e.insertBefore(w(),t),t,void 0,null!=i?i:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return U}}Y.finalized=!0,Y._$litElement$=!0,null===(K=globalThis.litElementHydrateSupport)||void 0===K||K.call(globalThis,{LitElement:Y});const Z=globalThis.litElementPolyfillSupport;null==Z||Z({LitElement:Y}),(null!==(J=globalThis.litElementVersions)&&void 0!==J?J:globalThis.litElementVersions=[]).push("3.2.0");const X=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function tt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):X(t,e)}function et(t){return tt({...t,state:!0})}var it;null===(it=window.HTMLSlotElement)||void 0===it||it.prototype.assignedElements;var ot={},st={},nt={};Object.defineProperty(nt,"__esModule",{value:!0});nt.ContentRect=function(t){if("getBBox"in t){var e=t.getBBox();return Object.freeze({height:e.height,left:0,top:0,width:e.width})}var i=window.getComputedStyle(t);return Object.freeze({height:parseFloat(i.height||"0"),left:parseFloat(i.paddingLeft||"0"),top:parseFloat(i.paddingTop||"0"),width:parseFloat(i.width||"0")})},Object.defineProperty(st,"__esModule",{value:!0});var at=nt,rt=function(){function t(t){this.target=t,this.$$broadcastWidth=this.$$broadcastHeight=0}return Object.defineProperty(t.prototype,"broadcastWidth",{get:function(){return this.$$broadcastWidth},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"broadcastHeight",{get:function(){return this.$$broadcastHeight},enumerable:!0,configurable:!0}),t.prototype.isActive=function(){var t=at.ContentRect(this.target);return!!t&&(t.width!==this.broadcastWidth||t.height!==this.broadcastHeight)},t}();st.ResizeObservation=rt;var lt={};Object.defineProperty(lt,"__esModule",{value:!0});var dt=nt,ct=function(t){this.target=t,this.contentRect=dt.ContentRect(t)};lt.ResizeObserverEntry=ct,Object.defineProperty(ot,"__esModule",{value:!0});var ht=st,ut=lt,pt=[],vt=function(){function t(t){this.$$observationTargets=[],this.$$activeTargets=[],this.$$skippedTargets=[];var e=function(t){if(void 0===t)return"Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.";if("function"!=typeof t)return"Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."}(t);if(e)throw TypeError(e);this.$$callback=t}return t.prototype.observe=function(t){var e,i=_t("observe",t);if(i)throw TypeError(i);mt(this.$$observationTargets,t)>=0||(this.$$observationTargets.push(new ht.ResizeObservation(t)),e=this,pt.indexOf(e)<0&&(pt.push(e),Et()))},t.prototype.unobserve=function(t){var e=_t("unobserve",t);if(e)throw TypeError(e);var i=mt(this.$$observationTargets,t);i<0||(this.$$observationTargets.splice(i,1),0===this.$$observationTargets.length&&ft(this))},t.prototype.disconnect=function(){this.$$observationTargets=[],this.$$activeTargets=[],ft(this)},t}(),gt=ot.ResizeObserver=vt;function ft(t){var e=pt.indexOf(t);e>=0&&(pt.splice(e,1),xt())}function _t(t,e){return void 0===e?"Failed to execute '"+t+"' on 'ResizeObserver': 1 argument required, but only 0 present.":e&&e.nodeType===window.Node.ELEMENT_NODE?void 0:"Failed to execute '"+t+"' on 'ResizeObserver': parameter 1 is not of type 'Element'."}function mt(t,e){for(var i=0;i<t.length;i+=1)if(t[i].target===e)return i;return-1}var yt,$t=function(t){pt.forEach((function(e){e.$$activeTargets=[],e.$$skippedTargets=[],e.$$observationTargets.forEach((function(i){i.isActive()&&(wt(i.target)>t?e.$$activeTargets.push(i):e.$$skippedTargets.push(i))}))}))},bt=function(){var t=1/0;return pt.forEach((function(e){if(e.$$activeTargets.length){var i=[];e.$$activeTargets.forEach((function(e){var o=new ut.ResizeObserverEntry(e.target);i.push(o),e.$$broadcastWidth=o.contentRect.width,e.$$broadcastHeight=o.contentRect.height;var s=wt(e.target);s<t&&(t=s)})),e.$$callback(i,e),e.$$activeTargets=[]}})),t},wt=function(t){for(var e=0;t.parentNode;)t=t.parentNode,e+=1;return e},Ct=function(){var t,e=0;for($t(e);pt.some((function(t){return!!t.$$activeTargets.length}));)e=bt(),$t(e);pt.some((function(t){return!!t.$$skippedTargets.length}))&&(t=new window.ErrorEvent("ResizeLoopError",{message:"ResizeObserver loop completed with undelivered notifications."}),window.dispatchEvent(t))},Et=function(){yt||At()},At=function(){yt=window.requestAnimationFrame((function(){Ct(),At()}))},xt=function(){yt&&!pt.some((function(t){return!!t.$$observationTargets.length}))&&(window.cancelAnimationFrame(yt),yt=void 0)};ot.install=function(){return window.ResizeObserver=vt};class St extends Y{constructor(){super(...arguments),this.cards=[],this._editMode=!1,this._editorLoaded=!1}async setConfig(t){this._config=Object.assign({},t),this._config.view_layout&&void 0===this._config.layout&&(this._config.layout=this._config.view_layout)}async updated(t){var e,i,o,s,n;if(t.has("lovelace")&&(null===(e=this.lovelace)||void 0===e?void 0:e.editMode)!=(null===(i=t.get("lovelace"))||void 0===i?void 0:i.editMode)){if((null===(o=this.lovelace)||void 0===o?void 0:o.editMode)&&!this._editorLoaded){this._editorLoaded=!0;{const t=document.createElement("hui-masonry-view");t.lovelace={editMode:!0},t.willUpdate(new Map)}}this.cards.forEach((t=>{var e;return t.editMode=null===(e=this.lovelace)||void 0===e?void 0:e.editMode})),this._editMode=null!==(n=null===(s=this.lovelace)||void 0===s?void 0:s.editMode)&&void 0!==n&&n}}_shouldShow(t,e,i){var o,s,n,a,r,l,d,c;return"always"===(null===(o=e.view_layout)||void 0===o?void 0:o.show)||"never"!==(null===(s=e.view_layout)||void 0===s?void 0:s.show)&&(("shown"!==(null===(a=null===(n=e.view_layout)||void 0===n?void 0:n.show)||void 0===a?void 0:a.sidebar)||"auto"!==(null===(r=this.hass)||void 0===r?void 0:r.dockedSidebar)&&!this.narrow)&&!("hidden"===(null===(d=null===(l=e.view_layout)||void 0===l?void 0:l.show)||void 0===d?void 0:d.sidebar)&&"docked"===(null===(c=this.hass)||void 0===c?void 0:c.dockedSidebar)&&!this.narrow))}getCardElement(t){var e;if(!(null===(e=this.lovelace)||void 0===e?void 0:e.editMode))return t.card;const i=document.createElement("hui-card-options");return i.hass=this.hass,i.lovelace=this.lovelace,i.path=[this.index,t.index],t.card.editMode=!0,i.appendChild(t.card),!1===t.show&&(i.style.border="1px solid red"),i}_addCard(){this.dispatchEvent(new CustomEvent("ll-create-card"))}_render_fab(){var t;return!0==!(null===(t=this.lovelace)||void 0===t?void 0:t.editMode)?P``:P`
      <ha-fab .label=${"Add card"} extended @click=${this._addCard}>
        <ha-icon slot="icon" .icon=${"mdi:plus"}></ha-icon>
      </ha-fab>
    `}static get _fab_styles(){return n`
      ha-fab {
        position: sticky;
        float: right;
        right: calc(16px + env(safe-area-inset-right));
        bottom: calc(16px + env(safe-area-inset-bottom));
        z-index: 1;
      }
    `}}t([tt()],St.prototype,"cards",void 0),t([tt()],St.prototype,"index",void 0),t([tt()],St.prototype,"narrow",void 0),t([tt()],St.prototype,"hass",void 0),t([tt()],St.prototype,"lovelace",void 0),t([tt()],St.prototype,"_editMode",void 0),t([tt()],St.prototype,"_config",void 0);class Mt extends St{constructor(){super(...arguments),this._mediaQueries=[]}async setConfig(t){var e,i,o,s;await super.setConfig(t);for(const t of this._config.cards)if("string"!=typeof(null===(e=t.view_layout)||void 0===e?void 0:e.show)&&(null===(o=null===(i=t.view_layout)||void 0===i?void 0:i.show)||void 0===o?void 0:o.mediaquery)){const e=window.matchMedia(`${t.view_layout.show.mediaquery}`);this._mediaQueries.push(e),e.addEventListener("change",(()=>this._makeLayout()))}else this._mediaQueries.push(null);this._observer&&this._observer.disconnect(),this._observer=new gt((()=>{this._updateSize()})),this._cardObserver&&this._cardObserver.disconnect(),(null===(s=t.layout)||void 0===s?void 0:s.reflow)&&(this._cardObserver=new MutationObserver((t=>{for(const e of t)"attributes"!==e.type||"style"!==e.attributeName&&"hidden"!==e.attributeName||this._makeLayout()})))}async updated(t){var e;await super.updated(t),(t.has("_columns")||t.has("cards"))&&this._makeLayout(),t.has("_editMode")&&this._makeLayout(),(t.has("narrow")||t.has("hass")&&(null===(e=t.get("hass"))||void 0===e?void 0:e.dockedSidebar)!=this.hass.dockedSidebar)&&(this._updateSize(),this._makeLayout())}async firstUpdated(){var t,e,i,o,s,n,a,r,l,d,c,h,u,p,v,g;this._updateSize();const f=(null===(t=this._config.layout)||void 0===t?void 0:t.width)||300,_=(null===(e=this._config.layout)||void 0===e?void 0:e.max_width)||((null===(i=this._config.layout)||void 0===i?void 0:i.width)?Math.ceil(1.5*(null===(o=this._config.layout)||void 0===o?void 0:o.width)):500),m=(null===(s=this._config.layout)||void 0===s?void 0:s.width)?2*this._config.layout.width:600,y=document.createElement("style");y.innerHTML=`\n      :host {\n        --column-max-width: ${_}px;\n        --column-width: ${f}px;\n        --column-widths: ${null!==(a=null===(n=this._config.layout)||void 0===n?void 0:n.column_widths)&&void 0!==a?a:"none"};\n        --layout-margin: ${null!==(l=null===(r=this._config.layout)||void 0===r?void 0:r.margin)&&void 0!==l?l:"4px 4px 0px 4px"};\n        --layout-padding: ${null!==(c=null===(d=this._config.layout)||void 0===d?void 0:d.padding)&&void 0!==c?c:"0px"};\n        --card-margin: ${null!==(u=null===(h=this._config.layout)||void 0===h?void 0:h.card_margin)&&void 0!==u?u:"var(--masonry-view-card-margin, 4px 4px 8px)"};\n        --layout-height: ${null!==(v=null===(p=this._config.layout)||void 0===p?void 0:p.height)&&void 0!==v?v:"auto"};\n        --layout-overflow: ${void 0!==(null===(g=this._config.layout)||void 0===g?void 0:g.height)?"auto":"visible"};\n      }\n      @media (max-width: ${_}px) {\n        .column:first-child > * {\n          margin-left: 0;\n        }\n        .column:last-child > * {\n          margin-right: 0;\n        }\n      }\n      @media (max-width: ${m-1}px) {\n        .column {\n          --column-max-width: ${m}px;\n        }\n      }\n    `,this.shadowRoot.appendChild(y)}connectedCallback(){super.connectedCallback(),this._updateSize()}disconnectedCallback(){super.disconnectedCallback(),this._observer.disconnect()}async _updateSize(){var t,e,i;let o=this.getBoundingClientRect().width,s=0;s=Math.floor(o/((null===(t=this._config.layout)||void 0===t?void 0:t.width)||300)),s=Math.min(s,(null===(e=this._config.layout)||void 0===e?void 0:e.max_cols)||("docked"===(null===(i=this.hass)||void 0===i?void 0:i.dockedSidebar)?3:4)),s=Math.max(s,1),s!==this._columns&&(this._columns=s)}_shouldShow(t,e,i){var o;if(!super._shouldShow(t,e,i))return!1;if(null===(o=this._config.layout)||void 0===o?void 0:o.reflow){if("none"===getComputedStyle(t).display)return!1;if(!0===t.hidden)return!1}const s=this._mediaQueries[i];return!s||!!s.matches}isBreak(t){return"layout-break"===t.localName}async _makeLayout(){this._makeColumnLayout()}async _makeColumnLayout(){var t,e,i;if(this._observer.disconnect(),this._cardObserver&&this._cardObserver.disconnect(),!this._columns)return;let o=[],s=this.cards.map(((t,e)=>{const i=this._config.cards[e];return{card:t,config:i,index:e,show:this._shouldShow(t,i,e)}})),n=null!==(e=null===(t=this._config.layout)||void 0===t?void 0:t.first_card_span)&&void 0!==e?e:1;n>this._columns&&(n=this._columns),n<0&&(n=Math.max(this._columns+n,1));let a,r=0;if(1!=n){a=document.createElement("div"),a.classList.add("column","firstCard"),a.style.gridColumn="1 / span "+n;const t=s.shift();a.appendChild(this.getCardElement(t)),r=t.card.getCardSize?await Promise.race([t.card.getCardSize(),new Promise((t=>setTimeout((()=>t(1)),500)))]):1,a.length=r}for(let t=0;t<this._columns;t++){const e=document.createElement("div");e.classList.add("column"),e.length=0,n>t&&n>1&&(e.classList.add("offset"),e.length=r),o.push(e)}await this._placeColumnCards(o,s.filter((t=>{var e;return(null===(e=this.lovelace)||void 0===e?void 0:e.editMode)||t.show}))),a&&o.unshift(a),o=o.filter((t=>t.childElementCount>0)),(null===(i=this._config.layout)||void 0===i?void 0:i.rtl)&&o.reverse();const l=this.shadowRoot.querySelector("#columns");for(;l.firstChild;)l.removeChild(l.firstChild);if(this._cardObserver)for(const t of this.cards)this._cardObserver.observe(t,{attributes:!0});for(const t of o)l.appendChild(t);this.requestUpdate(),await this.updateComplete,this._observer.observe(this)}async _placeColumnCards(t,e){}render(){return P`
      <div id="columns"></div>
      ${this._render_fab()}
    `}static get styles(){return[this._fab_styles,n`
        :host {
          display: block;
          height: 100%;
          box-sizing: border-box;
          overflow-y: var(--layout-overflow);
        }

        #columns {
          display: grid;
          grid-auto-columns: minmax(
            var(--column-width),
            var(--column-max-width)
          );
          grid-template-columns: var(--column-widths);
          grid-template-rows: auto 1fr;
          justify-content: center;
          justify-items: center;
          margin: var(--layout-margin);
          padding: var(--layout-padding);
          height: var(--layout-height);
          overflow-y: var(--layout-overflow);
        }
        .column {
          grid-row: 1/3;
          max-width: var(--column-max-width);
          width: 100%;
        }

        .column.offset {
          grid-row: 2/3;
        }

        .column.offset > *:first-child {
          margin-top: 0px;
        }

        .column.firstCard {
          grid-row: 1/2;
          max-width: unset;
          width: 100%;
        }

        .column.firstCard > * {
          height: calc(100% - var(--card-margin) * 2);
          margin: var(--card-margin);
        }
        @media (max-width: 500px) {
          .column.firstCard > * {
            margin-right: 0;
          }
        }

        .column > * {
          display: block;
          margin: var(--card-margin);
        }
      `]}}t([tt()],Mt.prototype,"_columns",void 0),t([tt()],Mt.prototype,"_config",void 0);customElements.define("masonry-layout",class extends Mt{async _placeColumnCards(t,e){var i;const o=(null===(i=this._config.layout)||void 0===i?void 0:i.min_height)||5;function s(){let e=0;for(let i=0;i<t.length;i++){if(t[i].length&&t[i].length<o)return t[i];t[i].length<t[e].length&&(e=i)}return t[e]}for(const t of e){const e=s();e.appendChild(this.getCardElement(t)),e.length+=t.card.getCardSize?await Promise.race([t.card.getCardSize(),new Promise((t=>setTimeout((()=>t(1)),500)))]):1}}});customElements.define("horizontal-layout",class extends Mt{async _placeColumnCards(t,e){var i,o;let s=0;for(const n of e){s+=1,(null===(i=n.config.view_layout)||void 0===i?void 0:i.column)&&(s=n.config.view_layout.column);const e=t[(s-1)%t.length];e.appendChild(this.getCardElement(n)),this.isBreak(n.card)&&(s=0,(null===(o=this.lovelace)||void 0===o?void 0:o.editMode)||e.removeChild(n.card))}}});customElements.define("vertical-layout",class extends Mt{async _placeColumnCards(t,e){var i;let o=1;for(const s of e){(null===(i=s.config.view_layout)||void 0===i?void 0:i.column)&&(o=s.config.view_layout.column);t[(o-1)%t.length].appendChild(this.getCardElement(s)),this.isBreak(s.card)&&(o+=1)}}});class Tt extends HTMLElement{setConfig(){this.style.display="none";const t=document.createElement("ha-card");t.innerHTML="BREAK",t.style.cssText="\n      background: red;\n      text-align: center;\n      font-size: large;\n      color: white;\n      padding: 16px;\n      ",this.appendChild(t)}getCardSize(){return 0}set editMode(t){this.style.display=t?"block":"none"}static getConfigElement(){return document.createElement("layout-break-editor")}static getStubConfig(){return{}}}customElements.define("layout-break",Tt),window.customCards=window.customCards||[],window.customCards.push({type:"layout-break",name:"Layout Break",preview:!1,description:"Forces a break in the layout flow. For use with layout-card or special layouts."});class Ot extends HTMLElement{setConfig(t){const e=document.createElement("div");e.innerHTML="BREAK",this.appendChild(e)}}customElements.define("layout-break-editor",Ot);customElements.define("grid-layout",class extends St{constructor(){super(...arguments),this._mediaQueries=[],this._layoutMQs=[]}async setConfig(t){var e,i,o,s,n;await super.setConfig(t);for(const t of this._config.cards)if("string"!=typeof(null===(e=t.view_layout)||void 0===e?void 0:e.show)&&(null===(o=null===(i=t.view_layout)||void 0===i?void 0:i.show)||void 0===o?void 0:o.mediaquery)){const e=window.matchMedia(`${t.view_layout.show.mediaquery}`);this._mediaQueries.push(e),e.addEventListener("change",(()=>this._placeCards()))}else this._mediaQueries.push(null);if(null===(s=this._config.layout)||void 0===s?void 0:s.mediaquery)for(const[t,e]of Object.entries(null===(n=this._config.layout)||void 0===n?void 0:n.mediaquery)){const e=window.matchMedia(t);this._layoutMQs.push(e),e.addEventListener("change",(()=>this._setGridStyles()))}this._setGridStyles()}async updated(t){await super.updated(t),(t.has("cards")||t.has("_editMode"))&&this._placeCards()}async firstUpdated(){var t,e,i,o,s,n,a;this._setGridStyles();const r=document.createElement("style");r.innerHTML=`\n      :host {\n        --layout-margin: ${null!==(e=null===(t=this._config.layout)||void 0===t?void 0:t.margin)&&void 0!==e?e:"4px 4px 0px 4px"};\n        --layout-padding: ${null!==(o=null===(i=this._config.layout)||void 0===i?void 0:i.padding)&&void 0!==o?o:"0px"};\n        --layout-height: ${null!==(n=null===(s=this._config.layout)||void 0===s?void 0:s.height)&&void 0!==n?n:"auto"};\n        --layout-overflow: ${void 0!==(null===(a=this._config.layout)||void 0===a?void 0:a.height)?"auto":"visible"};\n      }`,this.shadowRoot.appendChild(r)}_setGridStyles(){const t=this.shadowRoot.querySelector("#root");if(!t)return;const e=e=>{for(const[i,o]of Object.entries(e))(i.startsWith("grid")||"grid"===i||"place-items"===i||"place-content"===i)&&t.style.setProperty(i,o)};t.style.cssText="",this._config.layout&&e(this._config.layout);for(const t of this._layoutMQs)if(t.matches){e(this._config.layout.mediaquery[t.media]);break}}_shouldShow(t,e,i){if(!super._shouldShow(t,e,i))return!1;const o=this._mediaQueries[i];return!o||!!o.matches}_placeCards(){var t,e;const i=this.shadowRoot.querySelector("#root");for(;i.firstChild;)i.removeChild(i.firstChild);let o=this.cards.map(((t,e)=>{const i=this._config.cards[e];return{card:t,config:i,index:e,show:this._shouldShow(t,i,e)}}));for(const s of o.filter((t=>{var e;return(null===(e=this.lovelace)||void 0===e?void 0:e.editMode)||t.show}))){const o=this.getCardElement(s);for(const[i,n]of Object.entries(null!==(e=null===(t=s.config)||void 0===t?void 0:t.view_layout)&&void 0!==e?e:{}))(i.startsWith("grid")||"place-self"===i)&&o.style.setProperty(i,n);i.appendChild(o)}}render(){return P` <div id="root"></div>
      ${this._render_fab()}`}static get styles(){return[this._fab_styles,n`
        :host {
          height: 100%;
          box-sizing: border-box;
        }
        #root {
          display: grid;
          justify-content: stretch;
          margin: var(--layout-margin);
          padding: var(--layout-padding);
          height: var(--layout-height);
          overflow-y: var(--layout-overflow);
        }
        #root > * {
          margin: var(--masonry-view-card-margin, 4px 4px 8px);
        }
      `]}});class kt extends Y{constructor(){super(...arguments),this.editMode=!1,this.isPanel=!1,this._cards=[]}setConfig(t){this._config=Object.assign({},t),this._config.entities&&(this._config.cards=this._config.entities.map((t=>t.type?t:Object.assign(Object.assign({},t),{type:"entity"}))));let e=t.layout_type;e?((null==e?void 0:e.endsWith("-layout"))||(e+="-layout"),e.startsWith("custom:")&&(e=e.substring("custom:".length))):e="hui-masonry-view",this._layoutType=e}async updated(t){var e;if(super.updated(t),t.has("_layoutType")||t.has("_config")){const t={type:this._layoutType,layout:this._config.layout||this._config.layout_options,cards:this._config.cards},i=document.createElement(this._layoutType);null===(e=i.setConfig)||void 0===e||e.call(i,t),this._layoutElement=i,await this._createCards(),this._layoutElement.hass=this.hass,this._layoutElement.narrow=!1,this._layoutElement.lovelace=Object.assign(Object.assign({},this._getLovelace()),{editMode:!1}),this._layoutElement.index=1}t.has("hass")&&(this._cards.forEach((t=>{t.hass=this.hass})),this._layoutElement&&(this._layoutElement.hass=this.hass)),t.has("_cards")&&this._layoutElement&&(this._layoutElement.cards=this._cards),t.has("editMode")&&this._layoutElement&&(this._layoutElement.lovelace=Object.assign(Object.assign({},this._getLovelace()),{editMode:!1}))}_getLovelace(t=this){return t.lovelace?t.lovelace:"home-assistant"!==t.localName?t.parentElement&&t.parentElement.host?this._getLovelace(t.parentElement.host):t.parentNode&&t.parentNode.host?this._getLovelace(t.parentNode.host):t.parentElement?this._getLovelace(t.parentElement):t.parentNode?this._getLovelace(t.parentNode):void 0:void 0}_createCard(t,e){const i=e.createCardElement(t);return i.addEventListener("ll-rebuild",(e=>{e.stopPropagation(),this._rebuildCard(i,t)})),i.hass=this.hass,i}async _createCards(){const t=await window.loadCardHelpers();this._cards=this._config.cards.map((e=>this._createCard(e,t)))}async _rebuildCard(t,e){const i=await window.loadCardHelpers(),o=this._createCard(e,i);t.parentElement&&t.parentElement.replaceChild(o,t),this._cards=this._cards.map((e=>e===t?o:e))}render(){return P`${this._layoutElement}`}static get styles(){return n`
      :host(:not(:first-child)) {
        margin-top: 0 !important;
      }
      :host(:not(:last-child)) {
        margin-bottom: 0 !important;
      }
    `}static getConfigElement(){return document.createElement("layout-card-editor")}static getStubConfig(){return{layout_type:"masonry",layout:{},cards:[]}}}t([tt()],kt.prototype,"hass",void 0),t([tt()],kt.prototype,"editMode",void 0),t([tt()],kt.prototype,"isPanel",void 0),t([tt()],kt.prototype,"_config",void 0),t([tt()],kt.prototype,"_cards",void 0),t([tt()],kt.prototype,"_layoutElement",void 0),t([tt()],kt.prototype,"_layoutType",void 0),customElements.define("layout-card",kt),window.customCards=window.customCards||[],window.customCards.push({type:"layout-card",name:"Layout Card",preview:!1,description:"Like a stack card, but with way more control."});const Pt=async()=>{var t,e,i,o,s,n,a,r;if(customElements.get("ha-yaml-editor"))return;const l=document.createElement("partial-panel-resolver").getRoutes([{component_name:"developer-tools",url_path:"a"}]);await(null===(i=null===(e=null===(t=null==l?void 0:l.routes)||void 0===t?void 0:t.a)||void 0===e?void 0:e.load)||void 0===i?void 0:i.call(e));const d=document.createElement("developer-tools-router");await(null===(r=null===(a=null===(n=null===(s=null===(o=d)||void 0===o?void 0:o.routerOptions)||void 0===s?void 0:s.routes)||void 0===n?void 0:n.service)||void 0===a?void 0:a.load)||void 0===r?void 0:r.call(a))},Ut=["masonry","horizontal","vertical","grid"];class Lt extends Y{constructor(){super(...arguments),this._selectedTab=0,this._selectedCard=0,this._cardGUIMode=!0,this._cardGUIModeAvailable=!0}setConfig(t){this._config=t}firstUpdated(){Pt()}_handleSwitchTab(t){this._selectedTab=parseInt(t.detail.index,10)}_layoutChanged(t){t.stopPropagation();const e=t.target;this._config=Object.assign({},this._config),"layout_type"===e.id&&("default"===e.value?delete this._config.layout_type:this._config.layout_type=e.value),"layout"===e.id&&(this._config.layout=e.value),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}}))}_editCard(t){t.stopPropagation(),"add-card"!==t.target.id?(this._cardGUIMode=!0,this._cardEditorEl&&(this._cardEditorEl.GUImode=!0),this._cardGUIModeAvailable=!0,this._selectedCard=parseInt(t.detail.selected,10)):this._selectedCard=this._config.cards.length}_addCard(t){t.stopPropagation();const e=[...this._config.cards];e.push(t.detail.config),this._config=Object.assign(Object.assign({},this._config),{cards:e}),this._selectedCard=this._config.cards.length-1,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}}))}_updateCard(t){t.stopPropagation();const e=[...this._config.cards];e[this._selectedCard]=t.detail.config,this._config=Object.assign(Object.assign({},this._config),{cards:e}),this._cardGUIModeAvailable=t.detail.guiModeAvailable,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}}))}_GUIModeChange(t){t.stopPropagation(),this._cardGUIMode=t.detail.guiMode,this._cardGUIModeAvailable=t.detail.guiModeAvailable}_toggleMode(t){this._cardEditorEl.toggleMode()}_moveCard(t){const e=this._selectedCard,i=e+t.currentTarget.move,o=[...this._config.cards],s=o.splice(e,1)[0];o.splice(i,0,s),this._config=Object.assign(Object.assign({},this._config),{cards:o}),this._selectedCard=i,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}}))}_deleteCard(){const t=[...this._config.cards];t.splice(this._selectedCard,1),this._config=Object.assign(Object.assign({},this._config),{cards:t}),this._selectedCard=Math.max(0,this._selectedCard-1),this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config}}))}render(){return this.hass&&this._config?P`
      <div class="card-config">
        <div class="toolbar">
          <mwc-tab-bar
            .activeIndex=${this._selectedTab}
            @MDCTabBar:activated=${this._handleSwitchTab}
          >
            <mwc-tab .label=${"Layout"}></mwc-tab>
            <mwc-tab .label=${"Cards"}></mwc-tab>
          </mwc-tab-bar>
        </div>
        <div id="editor">
          ${[this._renderLayoutEditor,this._renderCardsEditor][this._selectedTab].bind(this)()}
        </div>
      </div>
    `:P``}_renderLayoutEditor(){var t;return P`<div class="layout">
      <mwc-select
        .label=${this.hass.localize("ui.panel.lovelace.editor.edit_view.type")}
        .value=${this._config.layout_type||"default"}
        @selected=${this._layoutChanged}
        @closed=${t=>t.stopPropagation()}
        fixedMenuPosition
        naturalMenuWidth
        id="layout_type"
      >
        <mwc-list-item .value=${"default"}>
          ${this.hass.localize("ui.panel.lovelace.editor.edit_view.types.masonry")}
        </mwc-list-item>
        ${Ut.map((t=>P`<mwc-list-item .value=${`custom:${t}-layout`}>
            ${t} (layout-card)
          </mwc-list-item>`))}
      </mwc-select>
      <ha-yaml-editor
        id="layout"
        .label=${"Layout options"}
        .defaultValue=${null!==(t=this._config.layout)&&void 0!==t?t:""}
        @value-changed=${this._layoutChanged}
      >
      </ha-yaml-editor>
    </div>`}_renderCardsEditor(){const t=this._selectedCard,e=this._config.cards.length;return this._config.entities?P`
        This layout-card has the <code>entities</code> parameter set. You cannot
        manually select cards.
      `:P`
      <div class="cards">
        <div class="toolbar">
          <paper-tabs
            scrollable
            .selected=${t}
            @iron-activate=${this._editCard}
          >
            ${this._config.cards.map(((t,e)=>P` <paper-tab> ${e+1} </paper-tab> `))}
          </paper-tabs>
          <paper-tabs
            id="add-card"
            .selected=${t==e?"0":void 0}
            @iron-activate=${this._editCard}
          >
            <paper-tab>
              <ha-icon .icon=${"mdi:plus"}></ha-icon>
            </paper-tab>
          </paper-tabs>
        </div>
        <div id="editor">
          ${t<e?P`
                <div class="card-options">
                  <mwc-button
                    @click=${this._toggleMode}
                    .disabled=${!this._cardGUIModeAvailable}
                    class="gui-mode-button"
                  >
                    ${this.hass.localize(this._cardEditorEl||this._cardGUIMode?"ui.panel.lovelace.editor.edit_card.show_code_editor":"ui.panel.lovelace.editor.edit_card.show_visual_editor")}
                  </mwc-button>
                  <mwc-icon-button
                    .disabled=${0===t}
                    @click=${this._moveCard}
                    .move=${-1}
                  >
                    <ha-icon .icon=${"mdi:arrow-left"}></ha-icon>
                  </mwc-icon-button>
                  <mwc-icon-button
                    .disabled=${t===e-1}
                    @click=${this._moveCard}
                    .move=${1}
                  >
                    <ha-icon .icon=${"mdi:arrow-right"}></ha-icon>
                  </mwc-icon-button>
                  <mwc-icon-button @click=${this._deleteCard}>
                    <ha-icon .icon=${"mdi:delete"}></ha-icon>
                  </mwc-icon-button>
                </div>
                <hui-card-element-editor
                  .hass=${this.hass}
                  .value=${this._config.cards[t]}
                  .lovelace=${this.lovelace}
                  @config-changed=${this._updateCard}
                  @GUImode-changed=${this._GUIModeChange}
                ></hui-card-element-editor>
              `:P`
                <hui-card-picker
                  .hass=${this.hass}
                  .lovelace=${this.lovelace}
                  @config-changed=${this._addCard}
                ></hui-card-picker>
              `}
        </div>
      </div>
    `}static get styles(){return[n`
        mwc-tab-bar {
          border-bottom: 1px solid var(--divider-color);
        }

        .layout,
        .cards #editor {
          margin-top: 8px;
          border: 1px solid var(--divider-color);
          padding: 12px;
        }

        .cards .toolbar {
          display: flex;
          --paper-tabs-selection-bar-color: var(--primary-color);
          --paper-tab-ink: var(--primary-color);
        }
        paper-tabs {
          display: flex;
          font-size: 14px;
          flex-grow: 1;
        }
        #add-card {
          max-width: 32px;
          padding: 0;
        }

        .cards .card-options {
          display: flex;
          justify-content: flex-end;
          width: 100%;
        }
        #editor {
          border: 1px solid var(--divider-color);
          padding: 12px;
        }
        .gui-mode-button {
          margin-right: auto;
        }
      `]}}t([tt()],Lt.prototype,"_config",void 0),t([tt()],Lt.prototype,"lovelace",void 0),t([tt()],Lt.prototype,"hass",void 0),t([et()],Lt.prototype,"_selectedTab",void 0),t([et()],Lt.prototype,"_selectedCard",void 0),t([et()],Lt.prototype,"_cardGUIMode",void 0),t([et()],Lt.prototype,"_cardGUIModeAvailable",void 0),t([function(t,e){return(({finisher:t,descriptor:e})=>(i,o)=>{var s;if(void 0===o){const o=null!==(s=i.originalKey)&&void 0!==s?s:i.key,n=null!=e?{kind:"method",placement:"prototype",key:o,descriptor:e(i.key)}:{...i,key:o};return null!=t&&(n.finisher=function(e){t(e,o)}),n}{const s=i.constructor;void 0!==e&&Object.defineProperty(i,o,e(o)),null==t||t(s,o)}})({descriptor:i=>{const o={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;o.get=function(){var i,o;return void 0===this[e]&&(this[e]=null!==(o=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==o?o:null),this[e]}}return o}})}("hui-card-element-editor")],Lt.prototype,"_cardEditorEl",void 0),customElements.define("layout-card-editor",Lt),customElements.whenDefined("hui-card-element-editor").then((()=>{const t=customElements.get("hui-card-element-editor"),e=t.prototype.getConfigElement;t.prototype.getConfigElement=async function(){const t=await e.bind(this)();if(t){const e=t.setConfig;t.setConfig=function(t){let i=JSON.parse(JSON.stringify(t));this._layoutData=i.view_layout,delete i.view_layout,e.bind(this)(i)}}return t};const i=t.prototype._handleUIConfigChanged;t.prototype._handleUIConfigChanged=function(t){this._configElement&&this._configElement._layoutData&&(t.detail.config.view_layout=this._configElement._layoutData),i.bind(this)(t)}}));const Rt=["masonry","horizontal","vertical","grid"];customElements.whenDefined("hui-view-editor").then((()=>{const t=customElements.get("hui-view-editor");Pt();const e=t.prototype.firstUpdated;t.prototype.firstUpdated=function(){var t;null==e||e.bind(this)();const i=this.shadowRoot.querySelector("mwc-select");if(!i||i.layoutCardPatch)return;Rt.forEach((t=>{const e=document.createElement("mwc-list-item");e.value=`custom:${t}-layout`,e.innerHTML=`${t} (layout-card)`,i.appendChild(e)})),i.layoutCardPatched=!0;const o=document.createElement("ha-yaml-editor");o.label="Layout options",o.defaultValue=null!==(t=this._config.layout)&&void 0!==t?t:"",o.addEventListener("value-changed",(t=>{t.stopPropagation();const e=Object.assign({},this._config);e.layout=t.detail.value,this.dispatchEvent(new CustomEvent("view-config-changed",{detail:{config:e}}))})),this.shadowRoot.appendChild(o)};const i=t.prototype.updated;t.prototype.updated=function(t){if(null==i||i.bind(this)(t),t.has("_config")){const t=this.shadowRoot.querySelector("ha-yaml-editor");if(!t)return;t.defaultValue=this._config.layout}}}));class zt extends HTMLElement{setConfig(t){var e,i;this.height=null!==(e=t.height)&&void 0!==e?e:50,this.size=null!==(i=t.size)&&void 0!==i?i:Math.ceil(this.height/50),this.style.cssText=`\n      display: block;\n      height: ${this.height}px;\n    `}getCardSize(){return this.size}static getConfigElement(){return document.createElement("gap-card-editor")}static getStubConfig(){return{}}}customElements.define("gap-card",zt),window.customCards=window.customCards||[],window.customCards.push({type:"gap-card",name:"Gap Card",preview:!1,description:"Add a customizable gap in the layout."});class Ht extends Y{setConfig(t){this._config=t}heightChanged(t){const e=Object.assign({},this._config);delete e.height,t.detail.value&&(e.height=parseInt(t.detail.value)),this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e}}))}sizeChanged(t){const e=Object.assign({},this._config);delete e.size,t.detail.value&&(e.size=parseInt(t.detail.value)),this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e}}))}render(){return P`
      <paper-input
        .label=${"Height (px) (optional)"}
        type="number"
        .value=${this._config.height}
        @value-changed=${this.heightChanged}
      ></paper-input>
      <paper-input
        .label=${"Layout size (optional)"}
        type="number"
        .value=${this._config.size}
        @value-changed=${this.sizeChanged}
      ></paper-input>
    `}}t([tt()],Ht.prototype,"_config",void 0),customElements.define("gap-card-editor",Ht);var Nt="2.4.1";console.info(`%cLAYOUT-CARD ${Nt} IS INSTALLED`,"color: green; font-weight: bold","");
