webpackJsonp([14],{1346:function(t,r,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(r,"__esModule",{value:!0});var o=e(186),i=n(o),u=e(183),f=n(u);e(184);var a=e(182),s=e(2090),h=e(2091);r.default={namespace:"login",state:{},effects:{login:i.default.mark(function t(r,e){var n,o,u,c,l,p,g=r.payload,y=e.put,d=e.call,w=e.select;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n={username:g.username,password:h.Base64.encode(g.password)},t.next=3,d(s.login,n);case 3:return o=t.sent,u=h.Base64.encode(g.password),console.log("base64 data",u),t.next=8,w(function(t){return t.app});case 8:if(c=t.sent,l=c.locationQuery,!o.success){t.next=24;break}return sessionStorage.setItem("CONSOLE_USER_KEY",o.CONSOLE_USER_KEY),p=l.from,t.next=15,y({type:"app/query"});case 15:if(!p||"/login"===p){t.next=20;break}return t.next=18,y(a.routerRedux.push(p));case 18:t.next=22;break;case 20:return t.next=22,y(a.routerRedux.push("/dashboard"));case 22:t.next=25;break;case 24:f.default.error(o.errorMsg);case 25:case"end":return t.stop()}},t,this)})}},t.exports=r.default},2090:function(t,r,e){"use strict";function n(t){return(0,o.request)({url:u,method:"post",data:t})}Object.defineProperty(r,"__esModule",{value:!0}),r.login=n;var o=e(68),i=o.config.api,u=i.userLogin},2091:function(t,r,e){(function(n){var o,i;!function(r,e){t.exports=e(r)}("undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n?n:this,function(n){"use strict";var u,f=n.Base64;if(void 0!==t&&t.exports)try{u=e(2092).Buffer}catch(t){}var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=function(t){for(var r={},e=0,n=t.length;e<n;e++)r[t.charAt(e)]=e;return r}(a),h=String.fromCharCode,c=function(t){if(t.length<2){var r=t.charCodeAt(0);return r<128?t:r<2048?h(192|r>>>6)+h(128|63&r):h(224|r>>>12&15)+h(128|r>>>6&63)+h(128|63&r)}var r=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return h(240|r>>>18&7)+h(128|r>>>12&63)+h(128|r>>>6&63)+h(128|63&r)},l=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,p=function(t){return t.replace(l,c)},g=function(t){var r=[0,2,1][t.length%3],e=t.charCodeAt(0)<<16|(t.length>1?t.charCodeAt(1):0)<<8|(t.length>2?t.charCodeAt(2):0);return[a.charAt(e>>>18),a.charAt(e>>>12&63),r>=2?"=":a.charAt(e>>>6&63),r>=1?"=":a.charAt(63&e)].join("")},y=n.btoa?function(t){return n.btoa(t)}:function(t){return t.replace(/[\s\S]{1,3}/g,g)},d=u?u.from&&Uint8Array&&u.from!==Uint8Array.from?function(t){return(t.constructor===u.constructor?t:u.from(t)).toString("base64")}:function(t){return(t.constructor===u.constructor?t:new u(t)).toString("base64")}:function(t){return y(p(t))},w=function(t,r){return r?d(String(t)).replace(/[+\/]/g,function(t){return"+"==t?"-":"_"}).replace(/=/g,""):d(String(t))},v=function(t){return w(t,!0)},A=new RegExp(["[\xc0-\xdf][\x80-\xbf]","[\xe0-\xef][\x80-\xbf]{2}","[\xf0-\xf7][\x80-\xbf]{3}"].join("|"),"g"),b=function(t){switch(t.length){case 4:var r=(7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3),e=r-65536;return h(55296+(e>>>10))+h(56320+(1023&e));case 3:return h((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return h((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},E=function(t){return t.replace(A,b)},m=function(t){var r=t.length,e=r%4,n=(r>0?s[t.charAt(0)]<<18:0)|(r>1?s[t.charAt(1)]<<12:0)|(r>2?s[t.charAt(2)]<<6:0)|(r>3?s[t.charAt(3)]:0),o=[h(n>>>16),h(n>>>8&255),h(255&n)];return o.length-=[0,0,2,1][e],o.join("")},_=n.atob?function(t){return n.atob(t)}:function(t){return t.replace(/[\s\S]{1,4}/g,m)},R=u?u.from&&Uint8Array&&u.from!==Uint8Array.from?function(t){return(t.constructor===u.constructor?t:u.from(t,"base64")).toString()}:function(t){return(t.constructor===u.constructor?t:new u(t,"base64")).toString()}:function(t){return E(_(t))},B=function(t){return R(String(t).replace(/[-_]/g,function(t){return"-"==t?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,""))},P=function(){var t=n.Base64;return n.Base64=f,t};if(n.Base64={VERSION:"2.4.5",atob:_,btoa:y,fromBase64:B,toBase64:w,utob:p,encode:w,encodeURI:v,btou:E,decode:B,noConflict:P},"function"==typeof Object.defineProperty){var S=function(t){return{value:t,enumerable:!1,writable:!0,configurable:!0}};n.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",S(function(){return B(this)})),Object.defineProperty(String.prototype,"toBase64",S(function(t){return w(this,t)})),Object.defineProperty(String.prototype,"toBase64URI",S(function(){return w(this,!0)}))}}return n.Meteor&&(Base64=n.Base64),void 0!==t&&t.exports?t.exports.Base64=n.Base64:(o=[],void 0!==(i=function(){return n.Base64}.apply(r,o))&&(t.exports=i)),{Base64:n.Base64}})}).call(r,e(29))},2092:function(t,r,e){"use strict";(function(t){function n(){return i.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function o(t,r){if(n()<r)throw new RangeError("Invalid typed array length");return i.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(r),t.__proto__=i.prototype):(null===t&&(t=new i(r)),t.length=r),t}function i(t,r,e){if(!(i.TYPED_ARRAY_SUPPORT||this instanceof i))return new i(t,r,e);if("number"==typeof t){if("string"==typeof r)throw new Error("If encoding is specified then the first argument must be a string");return s(this,t)}return u(this,t,r,e)}function u(t,r,e,n){if("number"==typeof r)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer?l(t,r,e,n):"string"==typeof r?h(t,r,e):p(t,r)}function f(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function a(t,r,e,n){return f(r),r<=0?o(t,r):void 0!==e?"string"==typeof n?o(t,r).fill(e,n):o(t,r).fill(e):o(t,r)}function s(t,r){if(f(r),t=o(t,r<0?0:0|g(r)),!i.TYPED_ARRAY_SUPPORT)for(var e=0;e<r;++e)t[e]=0;return t}function h(t,r,e){if("string"==typeof e&&""!==e||(e="utf8"),!i.isEncoding(e))throw new TypeError('"encoding" must be a valid string encoding');var n=0|d(r,e);t=o(t,n);var u=t.write(r,e);return u!==n&&(t=t.slice(0,u)),t}function c(t,r){var e=r.length<0?0:0|g(r.length);t=o(t,e);for(var n=0;n<e;n+=1)t[n]=255&r[n];return t}function l(t,r,e,n){if(r.byteLength,e<0||r.byteLength<e)throw new RangeError("'offset' is out of bounds");if(r.byteLength<e+(n||0))throw new RangeError("'length' is out of bounds");return r=void 0===e&&void 0===n?new Uint8Array(r):void 0===n?new Uint8Array(r,e):new Uint8Array(r,e,n),i.TYPED_ARRAY_SUPPORT?(t=r,t.__proto__=i.prototype):t=c(t,r),t}function p(t,r){if(i.isBuffer(r)){var e=0|g(r.length);return t=o(t,e),0===t.length?t:(r.copy(t,0,0,e),t)}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||Q(r.length)?o(t,0):c(t,r);if("Buffer"===r.type&&W(r.data))return c(t,r.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function g(t){if(t>=n())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+n().toString(16)+" bytes");return 0|t}function y(t){return+t!=t&&(t=0),i.alloc(+t)}function d(t,r){if(i.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var e=t.length;if(0===e)return 0;for(var n=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return V(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return X(t).length;default:if(n)return V(t).length;r=(""+r).toLowerCase(),n=!0}}function w(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if(e>>>=0,r>>>=0,e<=r)return"";for(t||(t="utf8");;)switch(t){case"hex":return I(this,r,e);case"utf8":case"utf-8":return T(this,r,e);case"ascii":return C(this,r,e);case"latin1":case"binary":return Y(this,r,e);case"base64":return S(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return x(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function v(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function A(t,r,e,n,o){if(0===t.length)return-1;if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=o?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(o)return-1;e=t.length-1}else if(e<0){if(!o)return-1;e=0}if("string"==typeof r&&(r=i.from(r,n)),i.isBuffer(r))return 0===r.length?-1:b(t,r,e,n,o);if("number"==typeof r)return r&=255,i.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):b(t,[r],e,n,o);throw new TypeError("val must be string, number or Buffer")}function b(t,r,e,n,o){function i(t,r){return 1===u?t[r]:t.readUInt16BE(r*u)}var u=1,f=t.length,a=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;u=2,f/=2,a/=2,e/=2}var s;if(o){var h=-1;for(s=e;s<f;s++)if(i(t,s)===i(r,-1===h?0:s-h)){if(-1===h&&(h=s),s-h+1===a)return h*u}else-1!==h&&(s-=s-h),h=-1}else for(e+a>f&&(e=f-a),s=e;s>=0;s--){for(var c=!0,l=0;l<a;l++)if(i(t,s+l)!==i(r,l)){c=!1;break}if(c)return s}return-1}function E(t,r,e,n){e=Number(e)||0;var o=t.length-e;n?(n=Number(n))>o&&(n=o):n=o;var i=r.length;if(i%2!=0)throw new TypeError("Invalid hex string");n>i/2&&(n=i/2);for(var u=0;u<n;++u){var f=parseInt(r.substr(2*u,2),16);if(isNaN(f))return u;t[e+u]=f}return u}function m(t,r,e,n){return Z(V(r,t.length-e),t,e,n)}function _(t,r,e,n){return Z(J(r),t,e,n)}function R(t,r,e,n){return _(t,r,e,n)}function B(t,r,e,n){return Z(X(r),t,e,n)}function P(t,r,e,n){return Z(K(r,t.length-e),t,e,n)}function S(t,r,e){return 0===r&&e===t.length?G.fromByteArray(t):G.fromByteArray(t.slice(r,e))}function T(t,r,e){e=Math.min(t.length,e);for(var n=[],o=r;o<e;){var i=t[o],u=null,f=i>239?4:i>223?3:i>191?2:1;if(o+f<=e){var a,s,h,c;switch(f){case 1:i<128&&(u=i);break;case 2:a=t[o+1],128==(192&a)&&(c=(31&i)<<6|63&a)>127&&(u=c);break;case 3:a=t[o+1],s=t[o+2],128==(192&a)&&128==(192&s)&&(c=(15&i)<<12|(63&a)<<6|63&s)>2047&&(c<55296||c>57343)&&(u=c);break;case 4:a=t[o+1],s=t[o+2],h=t[o+3],128==(192&a)&&128==(192&s)&&128==(192&h)&&(c=(15&i)<<18|(63&a)<<12|(63&s)<<6|63&h)>65535&&c<1114112&&(u=c)}}null===u?(u=65533,f=1):u>65535&&(u-=65536,n.push(u>>>10&1023|55296),u=56320|1023&u),n.push(u),o+=f}return U(n)}function U(t){var r=t.length;if(r<=$)return String.fromCharCode.apply(String,t);for(var e="",n=0;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=$));return e}function C(t,r,e){var n="";e=Math.min(t.length,e);for(var o=r;o<e;++o)n+=String.fromCharCode(127&t[o]);return n}function Y(t,r,e){var n="";e=Math.min(t.length,e);for(var o=r;o<e;++o)n+=String.fromCharCode(t[o]);return n}function I(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var o="",i=r;i<e;++i)o+=q(t[i]);return o}function x(t,r,e){for(var n=t.slice(r,e),o="",i=0;i<n.length;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}function O(t,r,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function M(t,r,e,n,o,u){if(!i.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>o||r<u)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}function L(t,r,e,n){r<0&&(r=65535+r+1);for(var o=0,i=Math.min(t.length-e,2);o<i;++o)t[e+o]=(r&255<<8*(n?o:1-o))>>>8*(n?o:1-o)}function D(t,r,e,n){r<0&&(r=4294967295+r+1);for(var o=0,i=Math.min(t.length-e,4);o<i;++o)t[e+o]=r>>>8*(n?o:3-o)&255}function k(t,r,e,n,o,i){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function N(t,r,e,n,o){return o||k(t,r,e,4,3.4028234663852886e38,-3.4028234663852886e38),H.write(t,r,e,n,23,4),e+4}function j(t,r,e,n,o){return o||k(t,r,e,8,1.7976931348623157e308,-1.7976931348623157e308),H.write(t,r,e,n,52,8),e+8}function F(t){if(t=z(t).replace(tt,""),t.length<2)return"";for(;t.length%4!=0;)t+="=";return t}function z(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function q(t){return t<16?"0"+t.toString(16):t.toString(16)}function V(t,r){r=r||1/0;for(var e,n=t.length,o=null,i=[],u=0;u<n;++u){if((e=t.charCodeAt(u))>55295&&e<57344){if(!o){if(e>56319){(r-=3)>-1&&i.push(239,191,189);continue}if(u+1===n){(r-=3)>-1&&i.push(239,191,189);continue}o=e;continue}if(e<56320){(r-=3)>-1&&i.push(239,191,189),o=e;continue}e=65536+(o-55296<<10|e-56320)}else o&&(r-=3)>-1&&i.push(239,191,189);if(o=null,e<128){if((r-=1)<0)break;i.push(e)}else if(e<2048){if((r-=2)<0)break;i.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;i.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;i.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return i}function J(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}function K(t,r){for(var e,n,o,i=[],u=0;u<t.length&&!((r-=2)<0);++u)e=t.charCodeAt(u),n=e>>8,o=e%256,i.push(o),i.push(n);return i}function X(t){return G.toByteArray(F(t))}function Z(t,r,e,n){for(var o=0;o<n&&!(o+e>=r.length||o>=t.length);++o)r[o+e]=t[o];return o}function Q(t){return t!==t}var G=e(2093),H=e(2094),W=e(2095);r.Buffer=i,r.SlowBuffer=y,r.INSPECT_MAX_BYTES=50,i.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),r.kMaxLength=n(),i.poolSize=8192,i._augment=function(t){return t.__proto__=i.prototype,t},i.from=function(t,r,e){return u(null,t,r,e)},i.TYPED_ARRAY_SUPPORT&&(i.prototype.__proto__=Uint8Array.prototype,i.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&i[Symbol.species]===i&&Object.defineProperty(i,Symbol.species,{value:null,configurable:!0})),i.alloc=function(t,r,e){return a(null,t,r,e)},i.allocUnsafe=function(t){return s(null,t)},i.allocUnsafeSlow=function(t){return s(null,t)},i.isBuffer=function(t){return!(null==t||!t._isBuffer)},i.compare=function(t,r){if(!i.isBuffer(t)||!i.isBuffer(r))throw new TypeError("Arguments must be Buffers");if(t===r)return 0;for(var e=t.length,n=r.length,o=0,u=Math.min(e,n);o<u;++o)if(t[o]!==r[o]){e=t[o],n=r[o];break}return e<n?-1:n<e?1:0},i.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},i.concat=function(t,r){if(!W(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return i.alloc(0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var n=i.allocUnsafe(r),o=0;for(e=0;e<t.length;++e){var u=t[e];if(!i.isBuffer(u))throw new TypeError('"list" argument must be an Array of Buffers');u.copy(n,o),o+=u.length}return n},i.byteLength=d,i.prototype._isBuffer=!0,i.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)v(this,r,r+1);return this},i.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)v(this,r,r+3),v(this,r+1,r+2);return this},i.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)v(this,r,r+7),v(this,r+1,r+6),v(this,r+2,r+5),v(this,r+3,r+4);return this},i.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?T(this,0,t):w.apply(this,arguments)},i.prototype.equals=function(t){if(!i.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===i.compare(this,t)},i.prototype.inspect=function(){var t="",e=r.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,e).match(/.{2}/g).join(" "),this.length>e&&(t+=" ... ")),"<Buffer "+t+">"},i.prototype.compare=function(t,r,e,n,o){if(!i.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),r<0||e>t.length||n<0||o>this.length)throw new RangeError("out of range index");if(n>=o&&r>=e)return 0;if(n>=o)return-1;if(r>=e)return 1;if(r>>>=0,e>>>=0,n>>>=0,o>>>=0,this===t)return 0;for(var u=o-n,f=e-r,a=Math.min(u,f),s=this.slice(n,o),h=t.slice(r,e),c=0;c<a;++c)if(s[c]!==h[c]){u=s[c],f=h[c];break}return u<f?-1:f<u?1:0},i.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},i.prototype.indexOf=function(t,r,e){return A(this,t,r,e,!0)},i.prototype.lastIndexOf=function(t,r,e){return A(this,t,r,e,!1)},i.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r|=0,isFinite(e)?(e|=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var o=this.length-r;if((void 0===e||e>o)&&(e=o),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var i=!1;;)switch(n){case"hex":return E(this,t,r,e);case"utf8":case"utf-8":return m(this,t,r,e);case"ascii":return _(this,t,r,e);case"latin1":case"binary":return R(this,t,r,e);case"base64":return B(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return P(this,t,r,e);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),i=!0}},i.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var $=4096;i.prototype.slice=function(t,r){var e=this.length;t=~~t,r=void 0===r?e:~~r,t<0?(t+=e)<0&&(t=0):t>e&&(t=e),r<0?(r+=e)<0&&(r=0):r>e&&(r=e),r<t&&(r=t);var n;if(i.TYPED_ARRAY_SUPPORT)n=this.subarray(t,r),n.__proto__=i.prototype;else{var o=r-t;n=new i(o,void 0);for(var u=0;u<o;++u)n[u]=this[u+t]}return n},i.prototype.readUIntLE=function(t,r,e){t|=0,r|=0,e||O(t,r,this.length);for(var n=this[t],o=1,i=0;++i<r&&(o*=256);)n+=this[t+i]*o;return n},i.prototype.readUIntBE=function(t,r,e){t|=0,r|=0,e||O(t,r,this.length);for(var n=this[t+--r],o=1;r>0&&(o*=256);)n+=this[t+--r]*o;return n},i.prototype.readUInt8=function(t,r){return r||O(t,1,this.length),this[t]},i.prototype.readUInt16LE=function(t,r){return r||O(t,2,this.length),this[t]|this[t+1]<<8},i.prototype.readUInt16BE=function(t,r){return r||O(t,2,this.length),this[t]<<8|this[t+1]},i.prototype.readUInt32LE=function(t,r){return r||O(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},i.prototype.readUInt32BE=function(t,r){return r||O(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},i.prototype.readIntLE=function(t,r,e){t|=0,r|=0,e||O(t,r,this.length);for(var n=this[t],o=1,i=0;++i<r&&(o*=256);)n+=this[t+i]*o;return o*=128,n>=o&&(n-=Math.pow(2,8*r)),n},i.prototype.readIntBE=function(t,r,e){t|=0,r|=0,e||O(t,r,this.length);for(var n=r,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*r)),i},i.prototype.readInt8=function(t,r){return r||O(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},i.prototype.readInt16LE=function(t,r){r||O(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},i.prototype.readInt16BE=function(t,r){r||O(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},i.prototype.readInt32LE=function(t,r){return r||O(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},i.prototype.readInt32BE=function(t,r){return r||O(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},i.prototype.readFloatLE=function(t,r){return r||O(t,4,this.length),H.read(this,t,!0,23,4)},i.prototype.readFloatBE=function(t,r){return r||O(t,4,this.length),H.read(this,t,!1,23,4)},i.prototype.readDoubleLE=function(t,r){return r||O(t,8,this.length),H.read(this,t,!0,52,8)},i.prototype.readDoubleBE=function(t,r){return r||O(t,8,this.length),H.read(this,t,!1,52,8)},i.prototype.writeUIntLE=function(t,r,e,n){if(t=+t,r|=0,e|=0,!n){M(this,t,r,e,Math.pow(2,8*e)-1,0)}var o=1,i=0;for(this[r]=255&t;++i<e&&(o*=256);)this[r+i]=t/o&255;return r+e},i.prototype.writeUIntBE=function(t,r,e,n){if(t=+t,r|=0,e|=0,!n){M(this,t,r,e,Math.pow(2,8*e)-1,0)}var o=e-1,i=1;for(this[r+o]=255&t;--o>=0&&(i*=256);)this[r+o]=t/i&255;return r+e},i.prototype.writeUInt8=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,1,255,0),i.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[r]=255&t,r+1},i.prototype.writeUInt16LE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,2,65535,0),i.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):L(this,t,r,!0),r+2},i.prototype.writeUInt16BE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,2,65535,0),i.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):L(this,t,r,!1),r+2},i.prototype.writeUInt32LE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,4,4294967295,0),i.TYPED_ARRAY_SUPPORT?(this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t):D(this,t,r,!0),r+4},i.prototype.writeUInt32BE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,4,4294967295,0),i.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):D(this,t,r,!1),r+4},i.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r|=0,!n){var o=Math.pow(2,8*e-1);M(this,t,r,e,o-1,-o)}var i=0,u=1,f=0;for(this[r]=255&t;++i<e&&(u*=256);)t<0&&0===f&&0!==this[r+i-1]&&(f=1),this[r+i]=(t/u>>0)-f&255;return r+e},i.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r|=0,!n){var o=Math.pow(2,8*e-1);M(this,t,r,e,o-1,-o)}var i=e-1,u=1,f=0;for(this[r+i]=255&t;--i>=0&&(u*=256);)t<0&&0===f&&0!==this[r+i+1]&&(f=1),this[r+i]=(t/u>>0)-f&255;return r+e},i.prototype.writeInt8=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,1,127,-128),i.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[r]=255&t,r+1},i.prototype.writeInt16LE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,2,32767,-32768),i.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):L(this,t,r,!0),r+2},i.prototype.writeInt16BE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,2,32767,-32768),i.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):L(this,t,r,!1),r+2},i.prototype.writeInt32LE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,4,2147483647,-2147483648),i.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24):D(this,t,r,!0),r+4},i.prototype.writeInt32BE=function(t,r,e){return t=+t,r|=0,e||M(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),i.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):D(this,t,r,!1),r+4},i.prototype.writeFloatLE=function(t,r,e){return N(this,t,r,!0,e)},i.prototype.writeFloatBE=function(t,r,e){return N(this,t,r,!1,e)},i.prototype.writeDoubleLE=function(t,r,e){return j(this,t,r,!0,e)},i.prototype.writeDoubleBE=function(t,r,e){return j(this,t,r,!1,e)},i.prototype.copy=function(t,r,e,n){if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var o,u=n-e;if(this===t&&e<r&&r<n)for(o=u-1;o>=0;--o)t[o+r]=this[o+e];else if(u<1e3||!i.TYPED_ARRAY_SUPPORT)for(o=0;o<u;++o)t[o+r]=this[o+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+u),r);return u},i.prototype.fill=function(t,r,e,n){if("string"==typeof t){if("string"==typeof r?(n=r,r=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),1===t.length){var o=t.charCodeAt(0);o<256&&(t=o)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!i.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0);var u;if("number"==typeof t)for(u=r;u<e;++u)this[u]=t;else{var f=i.isBuffer(t)?t:V(new i(t,n).toString()),a=f.length;for(u=0;u<e-r;++u)this[u+r]=f[u%a]}return this};var tt=/[^+\/0-9A-Za-z-_]/g}).call(r,e(29))},2093:function(t,r,e){"use strict";function n(t){var r=t.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=t.indexOf("=");return-1===e&&(e=r),[e,e===r?0:4-e%4]}function o(t){var r=n(t),e=r[0],o=r[1];return 3*(e+o)/4-o}function i(t,r,e){return 3*(r+e)/4-e}function u(t){for(var r,e=n(t),o=e[0],u=e[1],f=new l(i(t,o,u)),a=0,s=u>0?o-4:o,h=0;h<s;h+=4)r=c[t.charCodeAt(h)]<<18|c[t.charCodeAt(h+1)]<<12|c[t.charCodeAt(h+2)]<<6|c[t.charCodeAt(h+3)],f[a++]=r>>16&255,f[a++]=r>>8&255,f[a++]=255&r;return 2===u&&(r=c[t.charCodeAt(h)]<<2|c[t.charCodeAt(h+1)]>>4,f[a++]=255&r),1===u&&(r=c[t.charCodeAt(h)]<<10|c[t.charCodeAt(h+1)]<<4|c[t.charCodeAt(h+2)]>>2,f[a++]=r>>8&255,f[a++]=255&r),f}function f(t){return h[t>>18&63]+h[t>>12&63]+h[t>>6&63]+h[63&t]}function a(t,r,e){for(var n,o=[],i=r;i<e;i+=3)n=(t[i]<<16&16711680)+(t[i+1]<<8&65280)+(255&t[i+2]),o.push(f(n));return o.join("")}function s(t){for(var r,e=t.length,n=e%3,o=[],i=0,u=e-n;i<u;i+=16383)o.push(a(t,i,i+16383>u?u:i+16383));return 1===n?(r=t[e-1],o.push(h[r>>2]+h[r<<4&63]+"==")):2===n&&(r=(t[e-2]<<8)+t[e-1],o.push(h[r>>10]+h[r>>4&63]+h[r<<2&63]+"=")),o.join("")}r.byteLength=o,r.toByteArray=u,r.fromByteArray=s;for(var h=[],c=[],l="undefined"!=typeof Uint8Array?Uint8Array:Array,p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",g=0,y=p.length;g<y;++g)h[g]=p[g],c[p.charCodeAt(g)]=g;c["-".charCodeAt(0)]=62,c["_".charCodeAt(0)]=63},2094:function(t,r){r.read=function(t,r,e,n,o){var i,u,f=8*o-n-1,a=(1<<f)-1,s=a>>1,h=-7,c=e?o-1:0,l=e?-1:1,p=t[r+c];for(c+=l,i=p&(1<<-h)-1,p>>=-h,h+=f;h>0;i=256*i+t[r+c],c+=l,h-=8);for(u=i&(1<<-h)-1,i>>=-h,h+=n;h>0;u=256*u+t[r+c],c+=l,h-=8);if(0===i)i=1-s;else{if(i===a)return u?NaN:1/0*(p?-1:1);u+=Math.pow(2,n),i-=s}return(p?-1:1)*u*Math.pow(2,i-n)},r.write=function(t,r,e,n,o,i){var u,f,a,s=8*i-o-1,h=(1<<s)-1,c=h>>1,l=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:i-1,g=n?1:-1,y=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(f=isNaN(r)?1:0,u=h):(u=Math.floor(Math.log(r)/Math.LN2),r*(a=Math.pow(2,-u))<1&&(u--,a*=2),r+=u+c>=1?l/a:l*Math.pow(2,1-c),r*a>=2&&(u++,a/=2),u+c>=h?(f=0,u=h):u+c>=1?(f=(r*a-1)*Math.pow(2,o),u+=c):(f=r*Math.pow(2,c-1)*Math.pow(2,o),u=0));o>=8;t[e+p]=255&f,p+=g,f/=256,o-=8);for(u=u<<o|f,s+=o;s>0;t[e+p]=255&u,p+=g,u/=256,s-=8);t[e+p-g]|=128*y}},2095:function(t,r){t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}}});