/*! For license information please see currency-radio-button.js.LICENSE.txt */
!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/shared","@deriv/translations","react"],r):"object"==typeof exports?exports["@deriv/account"]=r(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):e["@deriv/account"]=r(e["@deriv/components"],e["@deriv/shared"],e["@deriv/translations"],e.react)}(self,(function(e,r,t,n){return(()=>{var a={"./Components/currency-selector/radio-button.jsx":(e,r,t)=>{"use strict";t.d(r,{default:()=>p});var n=t("react"),a=t.n(n),o=t("../../../node_modules/classnames/index.js"),i=t.n(o),s=t("@deriv/translations"),c=t("@deriv/components"),l=t("@deriv/shared");function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var d=function(e){var r,t=e.id;return r=/^UST$/i.test(t)?a().createElement(s.Localize,{i18n_default_text:"Tether on Omnilayer (USDT) is a version of Tether, a digital token issued on blockchains and holds a value pegged to 1 USD at all times.<0 /><0 />USDT is built on the bitcoin blockchain via Omni Layer, a platform for digital assets and currencies that run in the bitcoin network.",components:[a().createElement("br",{key:0})]}):a().createElement(s.Localize,{i18n_default_text:"Tether as an ERC20 token (eUSDT) is a version of Tether that is hosted on Ethereum, an open software platform where anyone can build and deploy decentralised applications."}),a().createElement(c.Popover,{alignment:"top",className:"currency-list__popover",disable_message_icon:!0,icon:"info",is_bubble_hover_enabled:!0,message:r,zIndex:9999})};const p=function(e){var r=e.field,t=r.name,n=r.value,o=r.onChange,s=r.onBlur,p=e.id,m=e.label,f=(e.className,function(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(e,["field","id","label","className"]));return a().createElement(a().Fragment,null,a().createElement("input",u({name:t,id:p,type:"radio",value:p,checked:p===n,onChange:o,onBlur:s,disabled:f.selected,className:i()("currency-list__radio-button")},f)),a().createElement("label",{htmlFor:p,className:i()("currency-list__item",{"currency-list__item--selected":p===n,"currency-list__item--current":f.selected})},a().createElement(c.Icon,{className:"currency-list__icon",icon:"IcCurrency-".concat(p.toLowerCase())}),/^(UST|eUSDT)$/i.test(p)&&a().createElement(d,{id:p}),a().createElement("div",{className:"label currency-list__item-text"},a().createElement("div",{className:"currency-list__item-label"},m),a().createElement("div",{className:"currency-list__item-code"},"(",(0,l.getCurrencyDisplayCode)(p),")"))))}},"../../../node_modules/classnames/index.js":(e,r)=>{var t;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var o=typeof t;if("string"===o||"number"===o)e.push(t);else if(Array.isArray(t)&&t.length){var i=a.apply(null,t);i&&e.push(i)}else if("object"===o)for(var s in t)n.call(t,s)&&t[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(t=function(){return a}.apply(r,[]))||(e.exports=t)}()},"@deriv/components":r=>{"use strict";r.exports=e},"@deriv/shared":e=>{"use strict";e.exports=r},"@deriv/translations":e=>{"use strict";e.exports=t},react:e=>{"use strict";e.exports=n}},o={};function i(e){if(o[e])return o[e].exports;var r=o[e]={exports:{}};return a[e](r,r.exports,i),r.exports}return i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),i("./Components/currency-selector/radio-button.jsx")})().default}));