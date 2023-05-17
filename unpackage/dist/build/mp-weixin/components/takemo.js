(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/takemo"],{"11e5":function(t,e,n){"use strict";(function(t){var o=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=o(n("e962")),u={data:function(){return{}},methods:{formSubmit:function(e){console.log("form发生了submit事件，携带数据为："+JSON.stringify(e.detail.value));var n=e.detail.value,o=c.default.check(n,[{name:"cap",checkType:"in",checkRule:"100,200,300,400,500",errorMsg:"容量"}]);o?t.showToast({title:"验证通过!",icon:"none"}):t.showToast({title:c.default.error,icon:"none"})},formReset:function(t){console.log("清空数据")}}};e.default=u}).call(this,n("543d")["default"])},"155a":function(t,e,n){"use strict";n.r(e);var o=n("11e5"),c=n.n(o);for(var u in o)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(u);e["default"]=c.a},"3c01":function(t,e,n){"use strict";var o=n("cb06"),c=n.n(o);c.a},"4e8b":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){}));var o=function(){var t=this.$createElement;this._self._c},c=[]},cb06:function(t,e,n){},d826:function(t,e,n){"use strict";n.r(e);var o=n("4e8b"),c=n("155a");for(var u in c)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return c[t]}))}(u);n("3c01");var a=n("f0c5"),i=Object(a["a"])(c["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);e["default"]=i.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/takemo-create-component',
    {
        'components/takemo-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("d826"))
        })
    },
    [['components/takemo-create-component']]
]);
