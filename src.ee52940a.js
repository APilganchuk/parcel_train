parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/demo.jpg":[["demo.090c7c6d.jpg","nKR3"],"nKR3"]}],"Yi5Y":[function(require,module,exports) {
const t="http://localhost:3000";async function n(n){const o=await fetch(`${t}/books/${n}`);return await o.json()}async function o(){const n=await fetch(`${t}/books/`);return await n.json}
},{}],"gRsx":[function(require,module,exports) {
const t="http://localhost:3000";function o(o){return fetch(`${t}/books/${o}`,{method:"DELETE"}).then(t=>t.json())}
},{}],"XQGA":[function(require,module,exports) {
const t="http://localhost:3000";function o(o,n){const e={method:"PATCH",headers:{"Content-type":"application/json"},body:JSON.stringify(o)};return fetch(`${t}/books/${n}`,e).then(t=>t.json())}
},{}],"YRWX":[function(require,module,exports) {
const o="http://localhost:3000",t={title:"Test Book",author:"I",genres:["js"],raiting:10};function n(t){const n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};return fetch(`${o}/books`,n).then(o=>o.json()).then()}function e(o){console.log("render book"),console.log(o)}
},{}],"eOwE":[function(require,module,exports) {

},{}],"CfaU":[function(require,module,exports) {
const e={controls:document.querySelector("#tabs-1 [data-controls]"),panes:document.querySelector("[data-panes]")};function t(e){return e.getAttribute("href").slice(1)}function c(t){return e.panes.querySelector(`#${t}`)}e.controls.addEventListener("click",r=>{if(r.preventDefault(),"A"!==r.target.nodeName)return;const s=e.controls.querySelector(".controls__item--active");if(s){s.classList.remove("controls__item--active"),c(t(s)).classList.remove("pane--active")}const n=r.target;n.classList.add("controls__item--active"),c(n.getAttribute("href").slice(1)).classList.add("pane--active")});
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js_CRUD/get_read"),require("./js_CRUD/delete_delete"),require("./js_CRUD/patch_update"),require("./js_CRUD/post_create"),require("./new_training/main"),require("./tabs/tabs");
},{"./sass/main.scss":"clu1","./js_CRUD/get_read":"Yi5Y","./js_CRUD/delete_delete":"gRsx","./js_CRUD/patch_update":"XQGA","./js_CRUD/post_create":"YRWX","./new_training/main":"eOwE","./tabs/tabs":"CfaU"}]},{},["Focm"], null)
//# sourceMappingURL=/parcel_train/src.ee52940a.js.map