require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var a=e[n]=new t.Module;r[n][0].call(a.exports,i,a,a.exports)}return e[n].exports}function o(){this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({8:[function(require,module,exports) {
!function(){"use strict";var t=["html","json","jsonp","script"],e=["connect","delete","get","head","options","patch","post","put","trace"],n=function t(){var e={},n={},i={url:function(t){return a.call(this,"url",t,r.string)},sync:function(t){return a.call(this,"sync",t,r.bool)},cache:function(t){return a.call(this,"cache",t,r.bool)},type:function(t){return a.call(this,"type",t,r.type)},header:function(t,n){return e.headers=e.headers||{},r.string(t),void 0!==n?(r.string(n),e.headers[t]=n,this):e.headers[t]},auth:function(t,n){return r.string(t),r.string(n),e.auth={user:t,passwd:n},this},timeout:function(t){return a.call(this,"timeout",t,r.positiveInteger)},method:function(t){return a.call(this,"method",t,r.method)},queryString:function(t){return a.call(this,"queryString",t,r.queryString)},data:function(t){return a.call(this,"data",t,r.plainObject)},body:function(t){return a.call(this,"body",t,null,function(t){if("object"==typeof t){if(!(t instanceof FormData)){try{t=JSON.stringify(t)}catch(t){throw new TypeError("Unable to stringify body's content : "+t.name)}this.header("Content-Type","application/json")}}else t+="";return t})},into:function(t){return a.call(this,"into",t,r.selector,function(t){return"string"==typeof t?document.querySelectorAll(t):t instanceof HTMLElement?[t]:void 0})},jsonPaddingName:function(t){return a.call(this,"jsonPaddingName",t,r.string)},jsonPadding:function(t){return a.call(this,"jsonPadding",t,r.func)},on:function(t,e){return"function"==typeof e&&(n[t]=n[t]||[],n[t].push(e)),this},off:function(t){return n[t]=[],this},trigger:function(t,e){var r=this,o=function(t,e){n[t]instanceof Array&&n[t].forEach(function(t){t.call(r,e)})};if(void 0!==t){var i=/^([0-9])([0-9x])([0-9x])$/i,c=(t+="").match(i);c&&c.length>3?Object.keys(n).forEach(function(t){var n=t.match(i);!(n&&n.length>3&&c[1]===n[1])||"x"!==n[2]&&c[2]!==n[2]||"x"!==n[3]&&c[3]!==n[3]||o(t,e)}):n[t]&&o(t,e)}return this},go:function(){var t=e.type||(e.into?"html":"json"),n=u();return"function"==typeof c[t]?c[t].call(this,n):void 0}},c={json:function(t){var e=this;c._xhr.call(this,t,function(t){if(t)try{t=JSON.parse(t)}catch(t){return e.trigger("error",t),null}return t})},html:function(t){c._xhr.call(this,t,function(t){return e.into&&e.into.length&&[].forEach.call(e.into,function(e){e.innerHTML=t}),t})},_xhr:function(t,n){var r,o,i,c,a,u=this,f=e.method||"get",d=!0!==e.sync,h=new XMLHttpRequest,l=e.data,p=e.body,g=(e.headers,this.header("Content-Type")),y=e.timeout;if(!g&&l&&s()&&(this.header("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),g=this.header("Content-Type")),l&&s())if("string"!=typeof p&&(p=""),g.indexOf("json")>-1)try{p=JSON.stringify(l)}catch(t){throw new TypeError("Unable to stringify body's content : "+t.name)}else for(r in c=g&&g.indexOf("x-www-form-urlencoded")>1,l)p+=c?encodeURIComponent(r)+"="+encodeURIComponent(l[r])+"&":r+"="+l[r]+"\n\r";for(o in a=[f,t,d],e.auth&&(a.push(e.auth.user),a.push(e.auth.passwd)),h.open.apply(h,a),e.headers)h.setRequestHeader(o,e.headers[o]);h.onprogress=function(t){t.lengthComputable&&u.trigger("progress",t.loaded/t.total)},h.onload=function(){var t=h.responseText;i&&clearTimeout(i),this.status>=200&&this.status<300&&("function"==typeof n&&(t=n(t)),u.trigger("success",t)),u.trigger(this.status,t),u.trigger("end",t)},h.onerror=function(t){i&&clearTimeout(i),u.trigger("error",t,arguments)},y&&(i=setTimeout(function(){u.trigger("timeout",{type:"timeout",expiredAfter:y},h,arguments),h.abort()},y)),h.send(p)},jsonp:function(n){var r,i=this,c=document.querySelector("head"),a=!0!==e.sync,s=e.jsonPaddingName||"callback",u=e.jsonPadding||"_padd"+(new Date).getTime()+Math.floor(1e4*Math.random()),f={};if(t[u])throw new Error("Padding "+u+"  already exists. It must be unique.");/^ajajsonp_/.test(u)||(u="ajajsonp_"+u),window[u]=function(t){i.trigger("success",t),c.removeChild(r),window[u]=void 0},f[s]=u,n=o(n,f),(r=document.createElement("script")).async=a,r.src=n,r.onerror=function(){i.trigger("error",arguments),c.removeChild(r),window[u]=void 0},c.appendChild(r)},script:function(t){var n,r=this,o=document.querySelector("head")||document.querySelector("body"),i=!0!==e.sync;if(!o)throw new Error("Ok, wait a second, you want to load a script, but you don't have at least a head or body tag...");(n=document.createElement("script")).async=i,n.src=t,n.onerror=function(){r.trigger("error",arguments),o.removeChild(n)},n.onload=function(){r.trigger("success",arguments)},o.appendChild(n)}},a=function(t,n,o,i){if(void 0!==n){if("function"==typeof o)try{n=o.call(r,n)}catch(e){throw new TypeError("Failed to set "+t+" : "+e.message)}return e[t]="function"==typeof i?i.call(this,n):n,this}return"undefined"===e[t]?null:e[t]},s=function(){return["delete","patch","post","put"].indexOf(e.method)>-1},u=function(){var t=e.url,n=void 0===e.cache||!!e.cache,r=e.queryString||"",i=e.data;return!1===n&&(r+="&ajabuster="+(new Date).getTime()),t=o(t,r),i&&!s()&&(t=o(t,i)),t};return i},r={bool:function(t){return!!t},string:function(t){if("string"!=typeof t)throw new TypeError("a string is expected, but "+t+" ["+typeof t+"] given");return t},positiveInteger:function(t){if(parseInt(t)!==t||0>=t)throw new TypeError("an integer is expected, but "+t+" ["+typeof t+"] given");return t},plainObject:function(t){if("object"!=typeof t||t.constructor!==Object)throw new TypeError("an object is expected, but "+t+"  ["+typeof t+"] given");return t},type:function(e){if(e=this.string(e),t.indexOf(e.toLowerCase())<0)throw new TypeError("a type in ["+t.join(", ")+"] is expected, but "+e+" given");return e.toLowerCase()},method:function(t){if(t=this.string(t),e.indexOf(t.toLowerCase())<0)throw new TypeError("a method in ["+e.join(", ")+"] is expected, but "+t+" given");return t.toLowerCase()},queryString:function(t){var e={};return"string"==typeof t?t.replace("?","").split("&").forEach(function(t){var n=t.split("=");2===n.length&&(e[decodeURIComponent(n[0])]=decodeURIComponent(n[1]))}):e=t,this.plainObject(e)},selector:function(t){if("string"!=typeof t&&!(t instanceof HTMLElement))throw new TypeError("a selector or an HTMLElement is expected, "+t+" ["+typeof t+"] given");return t},func:function(t){if(t=this.string(t),!/^([a-zA-Z_])([a-zA-Z0-9_\-])+$/.test(t))throw new TypeError("a valid function name is expected, "+t+" ["+typeof t+"] given");return t}},o=function(t,e){var n;if(t=t||"",e)if(-1===t.indexOf("?")&&(t+="?"),"string"==typeof e)t+=e;else if("object"==typeof e)for(n in e)t+="&"+encodeURIComponent(n)+"="+encodeURIComponent(e[n]);return t};"function"==typeof define&&define.amd?define([],function(){return n}):"object"==typeof exports?module.exports=n:window.aja=window.aja||n}();
},{}]},{},[8])