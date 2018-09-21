webpackJsonp([0],{1382:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(){for(var e={state:{},subscriptions:{},effects:{},reducers:{}},t=[],a={},r=[],s={},n=[],c={},i=[],p={},f=arguments.length,y=Array(f),x=0;x<f;x++)y[x]=arguments[x];var h=y.reduce(function(e,d){return e.namespace=d.namespace,"object"!==(0,o.default)(d.state)||Array.isArray(d.state)?"state"in d&&(e.state=d.state):(l(d.state,t,a),(0,u.default)(e.state,d.state)),l(d.subscriptions,r,s),(0,u.default)(e.subscriptions,d.subscriptions),l(d.effects,n,c),(0,u.default)(e.effects,d.effects),l(d.reducers,i,p),(0,u.default)(e.reducers,d.reducers),e},e);return d(h,"state",a),d(h,"subscriptions",s),d(h,"effects",c),d(h,"reducers",p),h}Object.defineProperty(t,"__esModule",{value:!0});var n=a(285),u=r(n),c=a(95),o=r(c);t.default=s;var l=function(e,t,a){},d=function(e,t,a){}},1427:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var s=a(4),n=r(s),u=a(1382),c=r(u),o={reducers:{updateState:function(e,t){var a=t.payload;return(0,n.default)({},e,a)}}},l=(0,c.default)(o,{state:{list:[],pagination:{showSizeChanger:!0,showQuickJumper:!0,showTotal:function(e){return"Total "+e+" Items"},current:1,total:0,pageSize:10}},reducers:{querySuccess:function(e,t){var a=t.payload,r=a.list,s=a.pagination;return(0,n.default)({},e,{list:r,pagination:(0,n.default)({},e.pagination,s)})}}});e.exports={model:o,pageModel:l}},645:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(4),n=r(s),u=a(183),c=r(u),o=a(186),l=r(o);a(184);var d=a(1382),i=r(d),p=a(592),f=r(p),y=a(68),x=a(1427),h=a(602);t.default=(0,i.default)(x.pageModel,{namespace:"order",state:{currentItem:{},modalVisible:!1,modalType:"create",orderDetail:{},deleteAllUser:!1,deleteAllOrder:!1,fileName:"",user:"",order:""},subscriptions:{setup:function(e){var t=e.dispatch;e.history.listen(function(e){if("/order"===e.pathname){var a=f.default.parse(e.search)||{page:1,pageSize:10};t({type:"query",payload:a})}else"/order/import"===e.pathname&&t({type:"updateData",payload:{deleteAllUser:!1,deleteAllOrder:!1}})})}},effects:{query:l.default.mark(function e(t,a){var r,s,n=t.payload,u=void 0===n?{}:n,c=a.call,o=a.put;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return y.log.info("query","this is query"),r={url:y.config.api.queryOrderList,data:u},r.data.n_page=u.page?u.page-1:0,r.data.n_size=u.pageSize||10,e.next=6,c(h.httpRequest,r);case 6:if(!(s=e.sent)){e.next=10;break}return e.next=10,o({type:"querySuccess",payload:{list:s.order_list,pagination:{current:Number(u.page)||1,pageSize:Number(u.pageSize)||10,total:s.total}}});case 10:case"end":return e.stop()}},e,this)}),queryOrderDetail:l.default.mark(function e(t,a){var r,s,n=t.payload,u=void 0===n?{}:n,c=a.call,o=a.put;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={url:y.config.api.queryOrderDetail,data:u},e.next=3,c(h.httpRequest,r);case 3:if(!(s=e.sent)){e.next=7;break}return e.next=7,o({type:"showModal",payload:{currentItem:s.order,modalType:"update"}});case 7:case"end":return e.stop()}},e,this)}),delete:l.default.mark(function e(t,a){var r,s,n=t.payload,u=a.call,o=a.put;a.select;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return y.log.debug("delete payload",n),r={url:y.config.api.deleteOrder,data:n},e.next=4,u(h.httpRequest,r);case 4:if(s=e.sent,!s.success){e.next=11;break}return c.default.success("\u5220\u9664\u8ba2\u5355\u6210\u529f\uff01"),e.next=9,o({type:"query",payload:{}});case 9:e.next=12;break;case 11:c.default.error(s.errorMsg);case 12:case"end":return e.stop()}},e,this)}),multiDelete:l.default.mark(function e(t,a){var r,s=t.payload,n=a.call,u=a.put;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(usersService.remove,s);case 2:if(r=e.sent,!r.success){e.next=8;break}return e.next=6,u({type:"updateState",payload:{selectedRowKeys:[]}});case 6:e.next=9;break;case 8:throw r;case 9:case"end":return e.stop()}},e,this)}),create:l.default.mark(function e(t,a){var r,s,n=t.payload,u=a.call,o=a.put;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={url:y.config.api.createOrder,data:n},e.next=3,u(h.httpRequest,r);case 3:if(s=e.sent,!s.success){e.next=9;break}return e.next=7,o({type:"hideModal"});case 7:e.next=10;break;case 9:c.default.error(s.errorMsg);case 10:case"end":return e.stop()}},e,this)}),update:l.default.mark(function e(t,a){var r,s,n=t.payload,u=(a.select,a.call),o=a.put;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={url:y.config.api.updateOrder,data:n},e.next=3,u(h.httpRequest,r);case 3:if(s=e.sent,console.log("data",s),!s.success){e.next=10;break}return e.next=8,o({type:"hideModal"});case 8:e.next=11;break;case 10:c.default.error(s.errorMsg);case 11:case"end":return e.stop()}},e,this)}),updateOrderState:l.default.mark(function e(t,a){var r,s,n=t.payload,u=(a.select,a.call),o=a.put;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={url:y.config.api.updateOrderState,data:n},e.next=3,u(h.httpRequest,r);case 3:if(s=e.sent,console.log("data",s),!s.success){e.next=10;break}return e.next=8,o({type:"hideModal"});case 8:e.next=11;break;case 10:c.default.error(s.errorMsg);case 11:case"end":return e.stop()}},e,this)}),toOrderDetail:l.default.mark(function e(t,a){var r,s=t.payload,n=void 0===s?{}:s,u=(a.call,a.put);return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("payload",n),r={url:y.config.api.queryOrderList,data:n},e.next=4,u({type:"updateData",payload:{orderDetail:"sdfsf"}});case 4:case"end":return e.stop()}},e,this)}),deleteAllUser:l.default.mark(function e(t,a){var r,s,n=t.payload,u=void 0===n?{}:n,o=a.call,d=a.put;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={url:y.config.api.deleteAllUser,data:u},e.next=3,o(h.httpRequest,r);case 3:if(s=e.sent,!s.success){e.next=9;break}return e.next=7,d({type:"updateData",payload:{deleteAllUser:!0}});case 7:e.next=10;break;case 9:c.default.error(s.errorMsg);case 10:case"end":return e.stop()}},e,this)}),deleteAllOrder:l.default.mark(function e(t,a){var r,s,n=t.payload,u=void 0===n?{}:n,o=a.call,d=a.put;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={url:y.config.api.deleteAllOrder,data:u},e.next=3,o(h.httpRequest,r);case 3:if(s=e.sent,!s.success){e.next=9;break}return e.next=7,d({type:"updateData",payload:{deleteAllOrder:!0}});case 7:e.next=10;break;case 9:c.default.error(s.errorMsg);case 10:case"end":return e.stop()}},e,this)}),importUser:l.default.mark(function e(t,a){var r,s,n=t.payload,u=void 0===n?{}:n,o=a.call,d=a.put;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("importUser",u),r={url:y.config.api.importUser,data:u},e.next=4,o(h.httpRequest,r);case 4:if(s=e.sent,!s.success){e.next=11;break}return c.default.success("\u5bfc\u5165\u7528\u6237\u6210\u529f"),e.next=9,d({type:"updateData",payload:{user:s.user}});case 9:e.next=12;break;case 11:c.default.error(s.errorMsg);case 12:case"end":return e.stop()}},e,this)}),importOrder:l.default.mark(function e(t,a){var r,s,n=t.payload,u=void 0===n?{}:n,o=a.call,d=a.put;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("importUser",u),r={url:y.config.api.importOrder,data:u},e.next=4,o(h.httpRequest,r);case 4:if(s=e.sent,!s.success){e.next=11;break}return c.default.success("\u5bfc\u5165\u8ba2\u5355\u6210\u529f"),e.next=9,d({type:"updateData",payload:{order:s.order}});case 9:e.next=12;break;case 11:c.default.error(s.errorMsg);case 12:case"end":return e.stop()}},e,this)}),saveFileName:l.default.mark(function e(t,a){var r=t.payload,s=void 0===r?{}:r,n=(a.call,a.put);return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n({type:"updateData",payload:{fileName:s.fileName}});case 2:case"end":return e.stop()}},e,this)})},reducers:{showModal:function(e,t){var a=t.payload;return(0,n.default)({},e,a,{modalVisible:!0})},hideModal:function(e){return(0,n.default)({},e,{modalVisible:!1})},updateData:function(e,t){var a=t.payload;return(0,n.default)({},e,a)}}}),e.exports=t.default}});