(()=>{"use strict";var e={497:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  height: 100vh;\n  font-family: sans-serif;\n}\nheader {\n  height: 80px;\n  font-size: 18px;\n  background-color: white;\n  display: flex;\n  align-items: center;\n  padding: 12px 52px;\n  justify-content: space-between;\n}\n.logo {\n  height: 60px;\n}\nul {\n  display: flex;\n  gap: 82px;\n}\n.headerLinks {\n  text-decoration: none;\n  color: black;\n  cursor: pointer;\n}\n",""]);const c=i},309:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(81),o=n.n(r),a=n(645),i=n.n(a),c=n(667),s=n.n(c),d=new URL(n(620),n.b),l=i()(o()),p=s()(d);l.push([e.id,"main {\n  background-image: url("+p+");\n  height: 91.6vh;\n  background-position: center;\n  background-size: cover;\n  background-attachment: fixed;\n}\n.home-wrapper {\n  border: 2px solid yellow;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 32px;\n}\nh1 {\n  font-size: 102px;\n  color: white;\n  text-align: center;\n}\nh4 {\n  font-size: 32px;\n  color: white;\n}\n.home-button {\n  text-decoration: none;\n  color: white;\n  border: 2px solid white;\n  padding: 8px 32px;\n  border-radius: 20px;\n  position: relative;\n  transition: all 0.3s;\n}\n.home-button:hover {\n  border-block-color: rgb(223, 3, 3);\n}\n",""]);const u=l},195:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"h2 {\n  text-align: center;\n  padding: 72px 0 42px 0;\n  font-size: 62px;\n  color: white;\n}\n.menu-second-title {\n  text-align: center;\n  color: white;\n  font-size: 24px;\n}\n.wrapper-title {\n  text-align: center;\n  font-size: 32px;\n  color: white;\n}\n.menu-wrapper {\n  margin: 12px 0;\n  padding: 42px 56px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 400px));\n  place-content: center;\n  gap: 42px;\n}\n.menu-items {\n  height: 400px;\n  width: 400px;\n  background-color: rgb(150, 226, 226);\n  border-radius: 4px;\n  padding: 12px;\n}\n.item-title {\n  text-align: center;\n  font-size: 24px;\n  color: white;\n  margin: 6px 0;\n}\n.item-image {\n  height: 50%;\n}\n",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=n(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=o(m,r);r.byIndex=c,t.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},620:(e,t,n)=>{e.exports=n.p+"b7db9c4f2098e9d1e71c.png"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="",n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),c=n(565),s=n.n(c),d=n(216),l=n.n(d),p=n(589),u=n.n(p),m=n(497),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=n.p+"4dfce33cbc7165a0a057.png";var b=n(309),g={};function x(){const e=document.createElement("main");e.style.height="91.8vh",document.body.appendChild(e);const t=document.createElement("div");t.setAttribute("class","home-wrapper"),e.appendChild(t);const n=document.createElement("h1");n.textContent="The Real Dealon Asian Food",t.appendChild(n);const r=document.createElement("h4");r.textContent="The noodle way serves authentic asian food",t.appendChild(r);const o=document.createElement("a");o.textContent="Menu",o.setAttribute("class","home-button"),o.href="https://google.com",t.appendChild(o)}g.styleTagTransform=u(),g.setAttributes=s(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=l(),t()(b.Z,g),b.Z&&b.Z.locals&&b.Z.locals;var v=n(195),y={};y.styleTagTransform=u(),y.setAttributes=s(),y.insert=i().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=l(),t()(v.Z,y),v.Z&&v.Z.locals&&v.Z.locals;const C=n.p+"0bdb2268eb853f73f770.jpg";!function(){const e=document.createElement("header");document.body.appendChild(e);const t=new Image;t.src=f,t.setAttribute("class","logo"),e.appendChild(t);const n=document.createElement("div");n.setAttribute("class","wrapper"),e.appendChild(n);const r=document.createElement("ul");n.appendChild(r);const o=document.createElement("a");o.setAttribute("class","headerLinks"),o.setAttribute("id","home-link"),r.appendChild(o),o.innerText="Home";const a=document.createElement("a");a.setAttribute("class","headerLinks"),a.setAttribute("id","menu-link"),r.appendChild(a),a.innerText="Menu";const i=document.createElement("a");i.setAttribute("class","headerLinks"),i.setAttribute("id","about-link"),r.appendChild(i),i.innerText="About";const c=document.createElement("a");c.setAttribute("class","headerLinks"),c.setAttribute("id","contact-link"),r.appendChild(c),c.innerText="Contact"}(),x(),document.getElementById("home-link").addEventListener("click",(()=>{x()})),document.getElementById("menu-link").addEventListener("click",(()=>{!function(){const e=document.querySelector("main");e.innerHTML="";const t=document.createElement("h2");t.textContent="Our Way, Our Menu",e.appendChild(t);const n=document.createElement("p");n.setAttribute("class","menu-second-title"),n.textContent="Small menu, endless flavours",e.appendChild(n);const r=document.createElement("h3");r.setAttribute("class","wrapper-title"),r.textContent="Øur Menu",e.appendChild(r);const o=document.createElement("div");function a(e,t,n){const r=document.createElement("div");r.setAttribute("class","menu-items"),r.setAttribute("id",`item-${e}`),o.appendChild(r);const a=document.createElement("h5");a.setAttribute("class","item-title"),a.textContent=t,r.appendChild(a);const i=new Image;i.src=n,i.setAttribute("class","item-image"),r.appendChild(i)}o.setAttribute("class","menu-wrapper"),e.appendChild(o),a(1,"Pizza",C),a(2,"Burger"),a(3,"Nudle"),a(4,"Döner")}()})),document.getElementById("about-link").addEventListener("click",(()=>{})),document.getElementById("contact-link").addEventListener("click",(()=>{}))})()})();