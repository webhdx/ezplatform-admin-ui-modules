!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types"),require("jquery")):"function"==typeof define&&define.amd?define(["react","prop-types","jquery"],t):"object"==typeof exports?exports.UDW=t(require("react"),require("prop-types"),require("jquery")):(e.eZ=e.eZ||{},e.eZ.modules=e.eZ.modules||{},e.eZ.modules.UDW=t(e.React,e.PropTypes,e.jQuery))}("undefined"!=typeof self?self:this,function(e,t,a){return function(e){var t={};function a(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,a),o.l=!0,o.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=67)}({0:function(t,a){t.exports=e},1:function(e,a){e.exports=t},10:function(e,t,a){"use strict";var n=a(0),o=a.n(n),s=a(11),r=a.n(s),i=a(1),l=a.n(i),c=a(2);function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){d(e,t,a[t])})}return e}function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const p="ezs-non-scrollable",m="modal-open",f={backdrop:"static",keyboard:!0},b={small:"modal-sm",medium:"",large:"modal-lg"};class h extends n.Component{constructor(e){super(e),this._refModal=null,this.setModalRef=this.setModalRef.bind(this),this.onKeyUp=this.onKeyUp.bind(this),this.state={isVisible:e.isVisible,isLoading:e.isLoading}}componentDidMount(){const{isVisible:e}=this.state;e&&(r()(this._refModal).modal(u({},f,{show:e,focus:this.props.hasFocus})),this.attachModalEventHandlers())}componentDidUpdate(){const{isVisible:e}=this.state;r()(this._refModal).modal(u({},f,{show:e,focus:this.props.hasFocus})),e&&this.attachModalEventHandlers()}componentWillUnmount(){r()(this._refModal).modal("hide"),document.body.classList.remove(m,p)}UNSAFE_componentWillReceiveProps({isVisible:e,onConfigIframeLoad:t,isLoading:a}){this.setState(n=>u({},n,{isVisible:e,onConfigIframeLoad:t,isLoading:a}))}attachModalEventHandlers(){const e=r()(this._refModal);e.on("keyup",this.onKeyUp),e.one("hidden.bs.modal",this.props.onClose)}onKeyUp(e){const{originalEvent:t}=e;t&&(27===t.which||27===t.keyCode)&&this.props.onClose()}setModalRef(e){this._refModal=e}renderHeader(){const e=Translator.trans("popup.close.label",{},"universal_discovery_widget");return o.a.createElement("div",{className:"modal-header c-popup__header"},this.renderHeadline(),o.a.createElement("button",{type:"button",className:"close c-popup__btn--close","data-dismiss":"modal","aria-label":e,onClick:this.props.onClose},o.a.createElement(c.a,{name:"discard",extraClasses:"ez-icon--medium"})))}renderHeadline(){const{title:e}=this.props;return e?o.a.createElement("h3",{className:"modal-title c-popup__headline",title:this.props.title},o.a.createElement("span",{className:"c-popup__title"},this.props.title),this.renderSubtitle()):null}renderSubtitle(){const{subtitle:e}=this.props;return e?o.a.createElement("span",{className:"c-popup__subtitle"},e):null}renderFooter(){const{footerChildren:e}=this.props;if(e)return o.a.createElement("div",{className:"modal-footer c-popup__footer"},e)}render(){const{isVisible:e}=this.state,{additionalClasses:t,size:a,noHeader:n}=this.props,s={className:"c-popup modal fade",ref:this.setModalRef,tabIndex:this.props.hasFocus?-1:void 0};return document.body.classList.toggle(m,e),document.body.classList.toggle(p,e),t&&(s.className="".concat(s.className," ").concat(t)),n&&(s.className="".concat(s.className," c-popup--no-header")),o.a.createElement("div",s,o.a.createElement("div",{className:"modal-dialog c-popup__dialog ".concat(b[a]),role:"dialog"},o.a.createElement("div",{className:"modal-content c-popup__content"},this.renderHeader(),o.a.createElement("div",{className:"modal-body c-popup__body"},this.props.children),this.renderFooter())))}}h.propTypes={isVisible:l.a.bool,isLoading:l.a.bool,onClose:l.a.func.isRequired,onConfigIframeLoad:l.a.func,children:l.a.element.isRequired,title:l.a.string,subtitle:l.a.string,hasFocus:l.a.bool,additionalClasses:l.a.string,footerChildren:l.a.element,size:l.a.string,noHeader:l.a.bool},h.defaultProps={isVisible:!1,isLoading:!0,hasFocus:!0,size:"large",noHeader:!1,onConfigIframeLoad:()=>{}},t.a=h},11:function(e,t){e.exports=a},2:function(e,t,a){"use strict";var n=a(0),o=a.n(n),s=a(1),r=a.n(s);const i=e=>{const t=e.customPath?e.customPath:"/bundles/ezplatformadminui/img/ez-icons.svg#".concat(e.name);let a="ez-icon";return e.extraClasses&&(a="".concat(a," ").concat(e.extraClasses)),o.a.createElement("svg",{className:a},o.a.createElement("use",{xlinkHref:t}))};i.propTypes={extraClasses:r.a.string.isRequired,name:r.a.string,customPath:r.a.string},i.defaultProps={customPath:null,name:null},t.a=i},67:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),o=a.n(n),s=a(1),r=a.n(s),i=a(68),l=a.n(i),c=a(10);function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const p=e=>{let{title:t,onClose:a,startingLocationId:s}=e,r=d(e,["title","onClose","startingLocationId"]);console.log("udw.module.js",{props:r});const[i,p]=Object(n.useState)(()=>{let e=null;if(r.tabs.length){const t=r.tabs.find(e=>e.active);e=t?t.id:r.tabs[0].id}return{activeTabId:e}}),m={isVisible:!0,title:t,onClose:a},f=({target:e})=>p({activeTabId:e.dataset.tabId}),b=e=>{const t={className:l()({"udw-popup__tab":!0,"udw-popup__tab--is-active":i.activeTabId===e.id}),type:"button",onClick:f,"data-tab-id":e.id,key:"".concat(e.id,"-").concat(i.activeTabId)};return o.a.createElement("button",t,e.title)},h=e=>{const t=e.panel;if(e.id!==i.activeTabId)return null;const a=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){u(e,t,a[t])})}return e}({key:e.id},e.attrs,{startingLocationId:s});return console.log("renderPanel",{attrs:a}),o.a.createElement(t,a)};return o.a.createElement(c.a,m,r.tabs.length?o.a.createElement(n.Fragment,null,o.a.createElement("div",{className:"udw-popup__tabs","data-testid":"udw-tabs"},r.tabs.map(b)),o.a.createElement("div",{className:"udw-popup__panels","data-testid":"udw-panels"},r.tabs.map(h))):o.a.createElement("div",{className:"udw-popup__message udw-popup__message--no-tabs"},"Nothing to display. There are no tabs defined."))};p.propTypes={title:r.a.string,multiple:r.a.bool,selectedItemsLimit:r.a.number,canSelectContent:r.a.func,tabs:r.a.arrayOf(r.a.shape({id:r.a.string.isRequired,title:r.a.string.isRequired,panel:r.a.func.isRequired,attrs:r.a.object,active:r.a.bool})),startingLocationId:r.a.number,maxHeight:r.a.number,languages:r.a.object,contentTypes:r.a.object,onClose:r.a.func},p.defaultProps={title:"Find content",multiple:!0,selectedItemsLimit:0,canSelectContent:(e,t)=>t(!0),tabs:window.eZ.adminUiConfig.universalDiscoveryWidget.extraTabs||[],startingLocationId:1,maxHeight:500,languages:window.eZ.adminUiConfig.languages,contentTypes:window.eZ.adminUiConfig.contentTypes,onClose:()=>{}},eZ.addConfig("modules.UDW",p),t.default=p},68:function(e,t,a){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)&&n.length){var r=o.apply(null,n);r&&e.push(r)}else if("object"===s)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}void 0!==e&&e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}}).default});
//# sourceMappingURL=UDW.module.js.map