webpackJsonp([15],{1356:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(4),n=a(u),s=r(183),o=a(s),i=r(186),c=a(i);r(184);var d=r(1382),f=a(d),l=r(592),p=(a(l),r(68)),v=(r(1489),r(1490)),y=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(v),h=r(1427),g=r(602);y.query,p.config.prefix;t.default=(0,f.default)(h.pageModel,{namespace:"version",state:{currentItem:{},iosVersion:"",androidVersion:"",versionDetail:{}},subscriptions:{setup:function(e){var t=e.dispatch;e.history.listen(function(e){"/version"===e.pathname&&t({type:"queryVersion",payload:{}})})}},effects:{queryVersion:c.default.mark(function e(t,r){var a,u,n=(t.payload,r.call),s=r.put;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={url:p.config.api.queryVersion,data:""},e.next=3,n(g.httpRequest,a);case 3:if(u=e.sent,!u.success){e.next=7;break}return e.next=7,s({type:"updateData",payload:{iosVersion:u.iosVersion,androidVersion:u.androidVersion}});case 7:case"end":return e.stop()}},e,this)}),updateVersion:c.default.mark(function e(t,r){var a,u,n=t.payload,s=void 0===n?{}:n,i=r.call;r.put,r.select;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return p.log.debug("delete payload",s),a={url:p.config.api.updateVersion,data:s},e.next=4,i(g.httpRequest,a);case 4:u=e.sent,u.success?o.default.success("\u4fdd\u5b58\u6210\u529f"):o.default.error(u.errorMsg);case 6:case"end":return e.stop()}},e,this)})},reducers:{updateData:function(e,t){var r=t.payload;return(0,n.default)({},e,r)}}}),e.exports=t.default},1382:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function u(){for(var e={state:{},subscriptions:{},effects:{},reducers:{}},t=[],r={},a=[],u={},n=[],o={},f=[],l={},p=arguments.length,v=Array(p),y=0;y<p;y++)v[y]=arguments[y];var h=v.reduce(function(e,d){return e.namespace=d.namespace,"object"!==(0,i.default)(d.state)||Array.isArray(d.state)?"state"in d&&(e.state=d.state):(c(d.state,t,r),(0,s.default)(e.state,d.state)),c(d.subscriptions,a,u),(0,s.default)(e.subscriptions,d.subscriptions),c(d.effects,n,o),(0,s.default)(e.effects,d.effects),c(d.reducers,f,l),(0,s.default)(e.reducers,d.reducers),e},e);return d(h,"state",r),d(h,"subscriptions",u),d(h,"effects",o),d(h,"reducers",l),h}Object.defineProperty(t,"__esModule",{value:!0});var n=r(285),s=a(n),o=r(95),i=a(o);t.default=u;var c=function(e,t,r){},d=function(e,t,r){}},1427:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var u=r(4),n=a(u),s=r(1382),o=a(s),i={reducers:{updateState:function(e,t){var r=t.payload;return(0,n.default)({},e,r)}}},c=(0,o.default)(i,{state:{list:[],pagination:{showSizeChanger:!0,showQuickJumper:!0,showTotal:function(e){return"Total "+e+" Items"},current:1,total:0,pageSize:10}},reducers:{querySuccess:function(e,t){var r=t.payload,a=r.list,u=r.pagination;return(0,n.default)({},e,{list:a,pagination:(0,n.default)({},e.pagination,u)})}}});e.exports={model:i,pageModel:c}},1489:function(e,t,r){"use strict";function a(e){return(0,o.request)({url:c,method:"post",data:e})}function u(e){return(0,o.request)({url:c.replace("/:id",""),method:"post",data:e})}function n(e){return(0,o.request)({url:c,method:"delete",data:e})}function s(e){return(0,o.request)({url:c,method:"patch",data:e})}Object.defineProperty(t,"__esModule",{value:!0}),t.query=a,t.create=u,t.remove=n,t.update=s;var o=r(68),i=o.config.api,c=i.user},1490:function(e,t,r){"use strict";function a(e){return(0,n.oldRequest)({url:o,method:"get",data:e})}function u(e){return(0,n.oldRequest)({url:o,method:"delete",data:e})}Object.defineProperty(t,"__esModule",{value:!0}),t.query=a,t.remove=u;var n=r(68),s=n.config.api,o=s.users}});