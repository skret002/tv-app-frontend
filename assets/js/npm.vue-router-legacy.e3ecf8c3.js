/*! For license information please see npm.vue-router-legacy.e3ecf8c3.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([["npm.vue-router"],{"8c4f":function(t,e,r){"use strict";function n(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function o(t,e){return n(t)&&t._isRouter&&(null==e||t.type===e)}function i(t,e){for(var r in e)t[r]=e[r];return t}var a={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var r=e.props,n=e.children,o=e.parent,a=e.data;a.routerView=!0;for(var s=o.$createElement,c=r.name,p=o.$route,f=o._routerViewCache||(o._routerViewCache={}),h=0,l=!1;o&&o._routerRoot!==o;){var d=o.$vnode?o.$vnode.data:{};d.routerView&&h++,d.keepAlive&&o._directInactive&&o._inactive&&(l=!0),o=o.$parent}if(a.routerViewDepth=h,l){var v=f[c],y=v&&v.component;return y?(v.configProps&&u(y,a,v.route,v.configProps),s(y,a,n)):s()}var m=p.matched[h],g=m&&m.components[c];if(!m||!g)return f[c]=null,s();f[c]={component:g},a.registerRouteInstance=function(t,e){var r=m.instances[c];(e&&r!==t||!e&&r===t)&&(m.instances[c]=e)},(a.hook||(a.hook={})).prepatch=function(t,e){m.instances[c]=e.componentInstance},a.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==m.instances[c]&&(m.instances[c]=t.componentInstance)};var w=m.props&&m.props[c];return w&&(i(f[c],{route:p,configProps:w}),u(g,a,p,w)),s(g,a,n)}};function u(t,e,r,n){var o=e.props=function(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0}}(r,n);if(o){o=e.props=i({},o);var a=e.attrs=e.attrs||{};for(var u in o)t.props&&u in t.props||(a[u]=o[u],delete o[u])}}var s=/[!'()*]/g,c=function(t){return"%"+t.charCodeAt(0).toString(16)},p=/%2C/g,f=function(t){return encodeURIComponent(t).replace(s,c).replace(p,",")},h=decodeURIComponent;function l(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach((function(t){var r=t.replace(/\+/g," ").split("="),n=h(r.shift()),o=r.length>0?h(r.join("=")):null;void 0===e[n]?e[n]=o:Array.isArray(e[n])?e[n].push(o):e[n]=[e[n],o]})),e):e}function d(t){var e=t?Object.keys(t).map((function(e){var r=t[e];if(void 0===r)return"";if(null===r)return f(e);if(Array.isArray(r)){var n=[];return r.forEach((function(t){void 0!==t&&(null===t?n.push(f(e)):n.push(f(e)+"="+f(t)))})),n.join("&")}return f(e)+"="+f(r)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var v=/\/?$/;function y(t,e,r,n){var o=n&&n.options.stringifyQuery,i=e.query||{};try{i=m(i)}catch(t){}var a={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:b(e,o),matched:t?w(t):[]};return r&&(a.redirectedFrom=b(r,o)),Object.freeze(a)}function m(t){if(Array.isArray(t))return t.map(m);if(t&&"object"==typeof t){var e={};for(var r in t)e[r]=m(t[r]);return e}return t}var g=y(null,{path:"/"});function w(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function b(t,e){var r=t.path,n=t.query;void 0===n&&(n={});var o=t.hash;return void 0===o&&(o=""),(r||"/")+(e||d)(n)+o}function x(t,e){return e===g?t===e:!!e&&(t.path&&e.path?t.path.replace(v,"")===e.path.replace(v,"")&&t.hash===e.hash&&R(t.query,e.query):!(!t.name||!e.name)&&t.name===e.name&&t.hash===e.hash&&R(t.query,e.query)&&R(t.params,e.params))}function R(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var r=Object.keys(t),n=Object.keys(e);return r.length===n.length&&r.every((function(r){var n=t[r],o=e[r];return"object"==typeof n&&"object"==typeof o?R(n,o):String(n)===String(o)}))}function k(t,e){return 0===t.path.replace(v,"/").indexOf(e.path.replace(v,"/"))&&(!e.hash||t.hash===e.hash)&&function(t,e){for(var r in e)if(!(r in t))return!1;return!0}(t.query,e.query)}function E(t,e,r){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var o=e.split("/");r&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var u=i[a];".."===u?o.pop():"."!==u&&o.push(u)}return""!==o[0]&&o.unshift(""),o.join("/")}function O(t){return t.replace(/\/\//g,"/")}var A=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},C=z,_=P,j=function(t,e){return U(P(t,e),e)},S=U,L=H,$=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function P(t,e){for(var r,n=[],o=0,i=0,a="",u=e&&e.delimiter||"/";null!=(r=$.exec(t));){var s=r[0],c=r[1],p=r.index;if(a+=t.slice(i,p),i=p+s.length,c)a+=c[1];else{var f=t[i],h=r[2],l=r[3],d=r[4],v=r[5],y=r[6],m=r[7];a&&(n.push(a),a="");var g=null!=h&&null!=f&&f!==h,w="+"===y||"*"===y,b="?"===y||"*"===y,x=r[2]||u,R=d||v;n.push({name:l||o++,prefix:h||"",delimiter:x,optional:b,repeat:w,partial:g,asterisk:!!m,pattern:R?M(R):m?".*":"[^"+I(x)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&n.push(a),n}function T(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function q(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function U(t,e){for(var r=new Array(t.length),n=0;n<t.length;n++)"object"==typeof t[n]&&(r[n]=new RegExp("^(?:"+t[n].pattern+")$",B(e)));return function(e,n){for(var o="",i=e||{},a=(n||{}).pretty?T:encodeURIComponent,u=0;u<t.length;u++){var s=t[u];if("string"!=typeof s){var c,p=i[s.name];if(null==p){if(s.optional){s.partial&&(o+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be defined')}if(A(p)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var f=0;f<p.length;f++){if(c=a(p[f]),!r[u].test(c))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received `'+JSON.stringify(c)+"`");o+=(0===f?s.prefix:s.delimiter)+c}}else{if(c=s.asterisk?q(p):a(p),!r[u].test(c))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+c+'"');o+=s.prefix+c}}else o+=s}return o}}function I(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function M(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function V(t,e){return t.keys=e,t}function B(t){return t&&t.sensitive?"":"i"}function H(t,e,r){A(e)||(r=e||r,e=[]);for(var n=(r=r||{}).strict,o=!1!==r.end,i="",a=0;a<t.length;a++){var u=t[a];if("string"==typeof u)i+=I(u);else{var s=I(u.prefix),c="(?:"+u.pattern+")";e.push(u),u.repeat&&(c+="(?:"+s+c+")*"),i+=c=u.optional?u.partial?s+"("+c+")?":"(?:"+s+"("+c+"))?":s+"("+c+")"}}var p=I(r.delimiter||"/"),f=i.slice(-p.length)===p;return n||(i=(f?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":n&&f?"":"(?="+p+"|$)",V(new RegExp("^"+i,B(r)),e)}function z(t,e,r){return A(e)||(r=e||r,e=[]),r=r||{},t instanceof RegExp?function(t,e){var r=t.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return V(t,e)}(t,e):A(t)?function(t,e,r){for(var n=[],o=0;o<t.length;o++)n.push(z(t[o],e,r).source);return V(new RegExp("(?:"+n.join("|")+")",B(r)),e)}(t,e,r):function(t,e,r){return H(P(t,r),e,r)}(t,e,r)}C.parse=_,C.compile=j,C.tokensToFunction=S,C.tokensToRegExp=L;var F=Object.create(null);function N(t,e,r){e=e||{};try{var n=F[t]||(F[t]=C.compile(t));return"string"==typeof e.pathMatch&&(e[0]=e.pathMatch),n(e,{pretty:!0})}catch(t){return""}finally{delete e[0]}}function D(t,e,r,n){var o="string"==typeof t?{path:t}:t;if(o._normalized)return o;if(o.name){var a=(o=i({},t)).params;return a&&"object"==typeof a&&(o.params=i({},a)),o}if(!o.path&&o.params&&e){(o=i({},o))._normalized=!0;var u=i(i({},e.params),o.params);if(e.name)o.name=e.name,o.params=u;else if(e.matched.length){var s=e.matched[e.matched.length-1].path;o.path=N(s,u,e.path)}return o}var c=function(t){var e="",r="",n=t.indexOf("#");n>=0&&(e=t.slice(n),t=t.slice(0,n));var o=t.indexOf("?");return o>=0&&(r=t.slice(o+1),t=t.slice(0,o)),{path:t,query:r,hash:e}}(o.path||""),p=e&&e.path||"/",f=c.path?E(c.path,p,r||o.append):p,h=function(t,e,r){void 0===e&&(e={});var n,o=r||l;try{n=o(t||"")}catch(t){n={}}for(var i in e)n[i]=e[i];return n}(c.query,o.query,n&&n.options.parseQuery),d=o.hash||c.hash;return d&&"#"!==d.charAt(0)&&(d="#"+d),{_normalized:!0,path:f,query:h,hash:d}}var J,K=function(){},Q={name:"RouterLink",props:{to:{type:[String,Object],required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:[String,Array],default:"click"}},render:function(t){var e=this,r=this.$router,n=this.$route,o=r.resolve(this.to,n,this.append),a=o.location,u=o.route,s=o.href,c={},p=r.options.linkActiveClass,f=r.options.linkExactActiveClass,h=null==p?"router-link-active":p,l=null==f?"router-link-exact-active":f,d=null==this.activeClass?h:this.activeClass,v=null==this.exactActiveClass?l:this.exactActiveClass,m=u.redirectedFrom?y(null,D(u.redirectedFrom),null,r):u;c[v]=x(n,m),c[d]=this.exact?c[v]:k(n,m);var g=c[v]?this.ariaCurrentValue:null,w=function(t){X(t)&&(e.replace?r.replace(a,K):r.push(a,K))},b={click:X};Array.isArray(this.event)?this.event.forEach((function(t){b[t]=w})):b[this.event]=w;var R={class:c},E=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:s,route:u,navigate:w,isActive:c[d],isExactActive:c[v]});if(E){if(1===E.length)return E[0];if(E.length>1||!E.length)return 0===E.length?t():t("span",{},E)}if("a"===this.tag)R.on=b,R.attrs={href:s,"aria-current":g};else{var O=Y(this.$slots.default);if(O){O.isStatic=!1;var A=O.data=i({},O.data);for(var C in A.on=A.on||{},A.on){var _=A.on[C];C in b&&(A.on[C]=Array.isArray(_)?_:[_])}for(var j in b)j in A.on?A.on[j].push(b[j]):A.on[j]=w;var S=O.data.attrs=i({},O.data.attrs);S.href=s,S["aria-current"]=g}else R.on=b}return t(this.tag,R,this.$slots.default)}};function X(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Y(t){if(t)for(var e,r=0;r<t.length;r++){if("a"===(e=t[r]).tag)return e;if(e.children&&(e=Y(e.children)))return e}}var W="undefined"!=typeof window;function G(t,e,r,n){var o=e||[],i=r||Object.create(null),a=n||Object.create(null);t.forEach((function(t){Z(o,i,a,t)}));for(var u=0,s=o.length;u<s;u++)"*"===o[u]&&(o.push(o.splice(u,1)[0]),s--,u--);return{pathList:o,pathMap:i,nameMap:a}}function Z(t,e,r,n,o,i){var a=n.path,u=n.name,s=n.pathToRegexpOptions||{},c=function(t,e,r){return r||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:O(e.path+"/"+t)}(a,o,s.strict);"boolean"==typeof n.caseSensitive&&(s.sensitive=n.caseSensitive);var p={path:c,regex:tt(c,s),components:n.components||{default:n.component},instances:{},name:u,parent:o,matchAs:i,redirect:n.redirect,beforeEnter:n.beforeEnter,meta:n.meta||{},props:null==n.props?{}:n.components?n.props:{default:n.props}};if(n.children&&n.children.forEach((function(n){var o=i?O(i+"/"+n.path):void 0;Z(t,e,r,n,p,o)})),e[p.path]||(t.push(p.path),e[p.path]=p),void 0!==n.alias)for(var f=Array.isArray(n.alias)?n.alias:[n.alias],h=0;h<f.length;++h){var l={path:f[h],children:n.children};Z(t,e,r,l,o,p.path||"/")}u&&(r[u]||(r[u]=p))}function tt(t,e){return C(t,[],e)}function et(t,e){var r=G(t),n=r.pathList,o=r.pathMap,i=r.nameMap;function a(t,r,a){var u=D(t,r,!1,e),c=u.name;if(c){var p=i[c];if(!p)return s(null,u);var f=p.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!=typeof u.params&&(u.params={}),r&&"object"==typeof r.params)for(var h in r.params)!(h in u.params)&&f.indexOf(h)>-1&&(u.params[h]=r.params[h]);return u.path=N(p.path,u.params),s(p,u,a)}if(u.path){u.params={};for(var l=0;l<n.length;l++){var d=n[l],v=o[d];if(rt(v.regex,u.path,u.params))return s(v,u,a)}}return s(null,u)}function u(t,r){var n=t.redirect,o="function"==typeof n?n(y(t,r,null,e)):n;if("string"==typeof o&&(o={path:o}),!o||"object"!=typeof o)return s(null,r);var u=o,c=u.name,p=u.path,f=r.query,h=r.hash,l=r.params;if(f=u.hasOwnProperty("query")?u.query:f,h=u.hasOwnProperty("hash")?u.hash:h,l=u.hasOwnProperty("params")?u.params:l,c)return i[c],a({_normalized:!0,name:c,query:f,hash:h,params:l},void 0,r);if(p){var d=function(t,e){return E(t,e.parent?e.parent.path:"/",!0)}(p,t);return a({_normalized:!0,path:N(d,l),query:f,hash:h},void 0,r)}return s(null,r)}function s(t,r,n){return t&&t.redirect?u(t,n||r):t&&t.matchAs?function(t,e,r){var n=a({_normalized:!0,path:N(r,e.params)});if(n){var o=n.matched,i=o[o.length-1];return e.params=n.params,s(i,e)}return s(null,e)}(0,r,t.matchAs):y(t,r,n,e)}return{match:a,addRoutes:function(t){G(t,n,o,i)}}}function rt(t,e,r){var n=e.match(t);if(!n)return!1;if(!r)return!0;for(var o=1,i=n.length;o<i;++o){var a=t.keys[o-1],u="string"==typeof n[o]?decodeURIComponent(n[o]):n[o];a&&(r[a.name||"pathMatch"]=u)}return!0}var nt=W&&window.performance&&window.performance.now?window.performance:Date;function ot(){return nt.now().toFixed(3)}var it=ot();function at(){return it}function ut(t){return it=t}var st=Object.create(null);function ct(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),r=i({},window.history.state);return r.key=at(),window.history.replaceState(r,"",e),window.addEventListener("popstate",ht),function(){window.removeEventListener("popstate",ht)}}function pt(t,e,r,n){if(t.app){var o=t.options.scrollBehavior;o&&t.app.$nextTick((function(){var i=function(){var t=at();if(t)return st[t]}(),a=o.call(t,e,r,n?i:null);a&&("function"==typeof a.then?a.then((function(t){mt(t,i)})).catch((function(t){})):mt(a,i))}))}}function ft(){var t=at();t&&(st[t]={x:window.pageXOffset,y:window.pageYOffset})}function ht(t){ft(),t.state&&t.state.key&&ut(t.state.key)}function lt(t){return vt(t.x)||vt(t.y)}function dt(t){return{x:vt(t.x)?t.x:window.pageXOffset,y:vt(t.y)?t.y:window.pageYOffset}}function vt(t){return"number"==typeof t}var yt=/^#\d/;function mt(t,e){var r="object"==typeof t;if(r&&"string"==typeof t.selector){var n=yt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(n){var o=t.offset&&"object"==typeof t.offset?t.offset:{};e=function(t,e){var r=document.documentElement.getBoundingClientRect(),n=t.getBoundingClientRect();return{x:n.left-r.left-e.x,y:n.top-r.top-e.y}}(n,o=function(t){return{x:vt(t.x)?t.x:0,y:vt(t.y)?t.y:0}}(o))}else lt(t)&&(e=dt(t))}else r&&lt(t)&&(e=dt(t));e&&window.scrollTo(e.x,e.y)}var gt=W&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"function"==typeof window.history.pushState}();function wt(t,e){ft();var r=window.history;try{if(e){var n=i({},r.state);n.key=at(),r.replaceState(n,"",t)}else r.pushState({key:ut(ot())},"",t)}catch(r){window.location[e?"replace":"assign"](t)}}function bt(t){wt(t,!0)}function xt(t,e,r){var n=function(o){o>=t.length?r():t[o]?e(t[o],(function(){n(o+1)})):n(o+1)};n(0)}function Rt(t){return function(e,r,o){var i=!1,a=0,u=null;kt(t,(function(t,e,r,s){if("function"==typeof t&&void 0===t.cid){i=!0,a++;var c,p=At((function(e){(function(t){return t.__esModule||Ot&&"Module"===t[Symbol.toStringTag]})(e)&&(e=e.default),t.resolved="function"==typeof e?e:J.extend(e),r.components[s]=e,--a<=0&&o()})),f=At((function(t){var e="Failed to resolve async component "+s+": "+t;u||(u=n(t)?t:new Error(e),o(u))}));try{c=t(p,f)}catch(t){f(t)}if(c)if("function"==typeof c.then)c.then(p,f);else{var h=c.component;h&&"function"==typeof h.then&&h.then(p,f)}}})),i||o()}}function kt(t,e){return Et(t.map((function(t){return Object.keys(t.components).map((function(r){return e(t.components[r],t.instances[r],t,r)}))})))}function Et(t){return Array.prototype.concat.apply([],t)}var Ot="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;function At(t){var e=!1;return function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];if(!e)return e=!0,t.apply(this,r)}}var Ct=1,_t=2,jt=3,St=4;function Lt(t,e){return Pt(t,e,Ct,'Redirected when going from "'+t.fullPath+'" to "'+function(t){if("string"==typeof t)return t;if("path"in t)return t.path;var e={};return Tt.forEach((function(r){r in t&&(e[r]=t[r])})),JSON.stringify(e,null,2)}(e)+'" via a navigation guard.')}function $t(t,e){return Pt(t,e,jt,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function Pt(t,e,r,n){var o=new Error(n);return o._isRouter=!0,o.from=t,o.to=e,o.type=r,o}var Tt=["params","query","hash"];var qt=function(t,e){this.router=t,this.base=function(t){if(!t)if(W){var e=document.querySelector("base");t=(t=e&&e.getAttribute("href")||"/").replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}(e),this.current=g,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function Ut(t,e,r,n){var o=kt(t,(function(t,n,o,i){var a=function(t,e){return"function"!=typeof t&&(t=J.extend(t)),t.options[e]}(t,e);if(a)return Array.isArray(a)?a.map((function(t){return r(t,n,o,i)})):r(a,n,o,i)}));return Et(n?o.reverse():o)}function It(t,e){if(e)return function(){return t.apply(e,arguments)}}function Mt(t,e,r){return Ut(t,"beforeRouteEnter",(function(t,n,o,i){return function(t,e,r,n,o){return function(i,a,u){return t(i,a,(function(t){"function"==typeof t&&n.push((function(){Vt(t,e.instances,r,o)})),u(t)}))}}(t,o,i,e,r)}))}function Vt(t,e,r,n){e[r]&&!e[r]._isBeingDestroyed?t(e[r]):n()&&setTimeout((function(){Vt(t,e,r,n)}),16)}qt.prototype.listen=function(t){this.cb=t},qt.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},qt.prototype.onError=function(t){this.errorCbs.push(t)},qt.prototype.transitionTo=function(t,e,r){var n=this,i=this.router.match(t,this.current);this.confirmTransition(i,(function(){var t=n.current;n.updateRoute(i),e&&e(i),n.ensureURL(),n.router.afterHooks.forEach((function(e){e&&e(i,t)})),n.ready||(n.ready=!0,n.readyCbs.forEach((function(t){t(i)})))}),(function(t){r&&r(t),t&&!n.ready&&(n.ready=!0,o(t,Ct)?n.readyCbs.forEach((function(t){t(i)})):n.readyErrorCbs.forEach((function(e){e(t)})))}))},qt.prototype.confirmTransition=function(t,e,r){var i=this,a=this.current,u=function(t){!o(t)&&n(t)&&(i.errorCbs.length&&i.errorCbs.forEach((function(e){e(t)}))),r&&r(t)},s=t.matched.length-1,c=a.matched.length-1;if(x(t,a)&&s===c&&t.matched[s]===a.matched[c])return this.ensureURL(),u(function(t,e){return Pt(t,e,St,'Avoided redundant navigation to current location: "'+t.fullPath+'".')}(a,t));var p=function(t,e){var r,n=Math.max(t.length,e.length);for(r=0;r<n&&t[r]===e[r];r++);return{updated:e.slice(0,r),activated:e.slice(r),deactivated:t.slice(r)}}(this.current.matched,t.matched),f=p.updated,h=p.deactivated,l=p.activated,d=[].concat(function(t){return Ut(t,"beforeRouteLeave",It,!0)}(h),this.router.beforeHooks,function(t){return Ut(t,"beforeRouteUpdate",It)}(f),l.map((function(t){return t.beforeEnter})),Rt(l));this.pending=t;var v=function(e,r){if(i.pending!==t)return u($t(a,t));try{e(t,a,(function(e){!1===e?(i.ensureURL(!0),u(function(t,e){return Pt(t,e,_t,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}(a,t))):n(e)?(i.ensureURL(!0),u(e)):"string"==typeof e||"object"==typeof e&&("string"==typeof e.path||"string"==typeof e.name)?(u(Lt(a,t)),"object"==typeof e&&e.replace?i.replace(e):i.push(e)):r(e)}))}catch(t){u(t)}};xt(d,v,(function(){var r=[];xt(Mt(l,r,(function(){return i.current===t})).concat(i.router.resolveHooks),v,(function(){if(i.pending!==t)return u($t(a,t));i.pending=null,e(t),i.router.app&&i.router.app.$nextTick((function(){r.forEach((function(t){t()}))}))}))}))},qt.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},qt.prototype.setupListeners=function(){},qt.prototype.teardownListeners=function(){this.listeners.forEach((function(t){t()})),this.listeners=[]};var Bt=function(t){function e(e,r){t.call(this,e,r),this._startLocation=Ht(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,r=e.options.scrollBehavior,n=gt&&r;n&&this.listeners.push(ct());var o=function(){var r=t.current,o=Ht(t.base);t.current===g&&o===t._startLocation||t.transitionTo(o,(function(t){n&&pt(e,t,r,!0)}))};window.addEventListener("popstate",o),this.listeners.push((function(){window.removeEventListener("popstate",o)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){wt(O(n.base+t.fullPath)),pt(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){bt(O(n.base+t.fullPath)),pt(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.ensureURL=function(t){if(Ht(this.base)!==this.current.fullPath){var e=O(this.base+this.current.fullPath);t?wt(e):bt(e)}},e.prototype.getCurrentLocation=function(){return Ht(this.base)},e}(qt);function Ht(t){var e=decodeURI(window.location.pathname);return t&&0===e.toLowerCase().indexOf(t.toLowerCase())&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var zt=function(t){function e(e,r,n){t.call(this,e,r),n&&function(t){var e=Ht(t);if(!/^\/#/.test(e))return window.location.replace(O(t+"/#"+e)),!0}(this.base)||Ft()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router.options.scrollBehavior,r=gt&&e;r&&this.listeners.push(ct());var n=function(){var e=t.current;Ft()&&t.transitionTo(Nt(),(function(n){r&&pt(t.router,n,e,!0),gt||Kt(n.fullPath)}))},o=gt?"popstate":"hashchange";window.addEventListener(o,n),this.listeners.push((function(){window.removeEventListener(o,n)}))}},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){Jt(t.fullPath),pt(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){Kt(t.fullPath),pt(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;Nt()!==e&&(t?Jt(e):Kt(e))},e.prototype.getCurrentLocation=function(){return Nt()},e}(qt);function Ft(){var t=Nt();return"/"===t.charAt(0)||(Kt("/"+t),!1)}function Nt(){var t=window.location.href,e=t.indexOf("#");if(e<0)return"";var r=(t=t.slice(e+1)).indexOf("?");if(r<0){var n=t.indexOf("#");t=n>-1?decodeURI(t.slice(0,n))+t.slice(n):decodeURI(t)}else t=decodeURI(t.slice(0,r))+t.slice(r);return t}function Dt(t){var e=window.location.href,r=e.indexOf("#");return(r>=0?e.slice(0,r):e)+"#"+t}function Jt(t){gt?wt(Dt(t)):window.location.hash=t}function Kt(t){gt?bt(Dt(t)):window.location.replace(Dt(t))}var Qt=function(t){function e(e,r){t.call(this,e,r),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,r){var n=this;this.transitionTo(t,(function(t){n.stack=n.stack.slice(0,n.index+1).concat(t),n.index++,e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this;this.transitionTo(t,(function(t){n.stack=n.stack.slice(0,n.index).concat(t),e&&e(t)}),r)},e.prototype.go=function(t){var e=this,r=this.index+t;if(!(r<0||r>=this.stack.length)){var n=this.stack[r];this.confirmTransition(n,(function(){e.index=r,e.updateRoute(n)}),(function(t){o(t,St)&&(e.index=r)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(qt),Xt=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=et(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!gt&&!1!==t.fallback,this.fallback&&(e="hash"),W||(e="abstract"),this.mode=e,e){case"history":this.history=new Bt(this,t.base);break;case"hash":this.history=new zt(this,t.base,this.fallback);break;case"abstract":this.history=new Qt(this,t.base)}},Yt={currentRoute:{configurable:!0}};function Wt(t,e){return t.push(e),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}Xt.prototype.match=function(t,e,r){return this.matcher.match(t,e,r)},Yt.currentRoute.get=function(){return this.history&&this.history.current},Xt.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var r=e.apps.indexOf(t);r>-1&&e.apps.splice(r,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardownListeners()})),!this.app){this.app=t;var r=this.history;if(r instanceof Bt||r instanceof zt){var n=function(){r.setupListeners()};r.transitionTo(r.getCurrentLocation(),n,n)}r.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},Xt.prototype.beforeEach=function(t){return Wt(this.beforeHooks,t)},Xt.prototype.beforeResolve=function(t){return Wt(this.resolveHooks,t)},Xt.prototype.afterEach=function(t){return Wt(this.afterHooks,t)},Xt.prototype.onReady=function(t,e){this.history.onReady(t,e)},Xt.prototype.onError=function(t){this.history.onError(t)},Xt.prototype.push=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!=typeof Promise)return new Promise((function(e,r){n.history.push(t,e,r)}));this.history.push(t,e,r)},Xt.prototype.replace=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!=typeof Promise)return new Promise((function(e,r){n.history.replace(t,e,r)}));this.history.replace(t,e,r)},Xt.prototype.go=function(t){this.history.go(t)},Xt.prototype.back=function(){this.go(-1)},Xt.prototype.forward=function(){this.go(1)},Xt.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},Xt.prototype.resolve=function(t,e,r){var n=D(t,e=e||this.history.current,r,this),o=this.match(n,e),i=o.redirectedFrom||o.fullPath;return{location:n,route:o,href:function(t,e,r){var n="hash"===r?"#"+e:e;return t?O(t+"/"+n):n}(this.history.base,i,this.mode),normalizedTo:n,resolved:o}},Xt.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==g&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(Xt.prototype,Yt),Xt.install=function t(e){if(!t.installed||J!==e){t.installed=!0,J=e;var r=function(t){return void 0!==t},n=function(t,e){var n=t.$options._parentVnode;r(n)&&r(n=n.data)&&r(n=n.registerRouteInstance)&&n(t,e)};e.mixin({beforeCreate:function(){r(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",a),e.component("RouterLink",Q);var o=e.config.optionMergeStrategies;o.beforeRouteEnter=o.beforeRouteLeave=o.beforeRouteUpdate=o.created}},Xt.version="3.3.4",W&&window.Vue&&window.Vue.use(Xt),e.a=Xt}}]);