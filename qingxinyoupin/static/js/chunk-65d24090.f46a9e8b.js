(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65d24090"],{"2d13":function(t,e,o){"use strict";var i=o("cf7e"),r=o.n(i);r.a},"333d":function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[o("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},r=[];o("c5f6");Math.easeInOutQuad=function(t,e,o,i){return t/=i/2,t<1?o/2*t*t+e:(t--,-o/2*(t*(t-2)-1)+e)};var a=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function n(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function s(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(t,e,o){var i=s(),r=t-i,l=20,m=0;e="undefined"===typeof e?500:e;var c=function t(){m+=l;var s=Math.easeInOutQuad(m,i,r,e);n(s),m<e?a(t):o&&"function"===typeof o&&o()};c()}var m={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&l(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&l(0,800)}}},c=m,u=(o("2d13"),o("2877")),d=Object(u["a"])(c,i,r,!1,null,"2fc659d3",null);e["a"]=d.exports},"4ec3":function(t,e,o){"use strict";o.d(e,"N",(function(){return r})),o.d(e,"e",(function(){return a})),o.d(e,"t",(function(){return n})),o.d(e,"r",(function(){return s})),o.d(e,"u",(function(){return l})),o.d(e,"s",(function(){return m})),o.d(e,"H",(function(){return c})),o.d(e,"F",(function(){return u})),o.d(e,"I",(function(){return d})),o.d(e,"G",(function(){return f})),o.d(e,"m",(function(){return p})),o.d(e,"k",(function(){return h})),o.d(e,"n",(function(){return v})),o.d(e,"l",(function(){return g})),o.d(e,"p",(function(){return b})),o.d(e,"j",(function(){return _})),o.d(e,"q",(function(){return y})),o.d(e,"o",(function(){return C})),o.d(e,"h",(function(){return w})),o.d(e,"f",(function(){return k})),o.d(e,"i",(function(){return x})),o.d(e,"g",(function(){return T})),o.d(e,"z",(function(){return j})),o.d(e,"x",(function(){return S})),o.d(e,"A",(function(){return $})),o.d(e,"y",(function(){return A})),o.d(e,"O",(function(){return O})),o.d(e,"D",(function(){return D})),o.d(e,"B",(function(){return z})),o.d(e,"E",(function(){return P})),o.d(e,"C",(function(){return L})),o.d(e,"L",(function(){return N})),o.d(e,"J",(function(){return Q})),o.d(e,"M",(function(){return M})),o.d(e,"K",(function(){return F})),o.d(e,"c",(function(){return B})),o.d(e,"a",(function(){return E})),o.d(e,"d",(function(){return V})),o.d(e,"b",(function(){return q})),o.d(e,"w",(function(){return I})),o.d(e,"v",(function(){return J}));var i=o("b775"),r="http://api.qingxinyoupin.com/upload";function a(t){return Object(i["a"])({url:"customer/a",method:"get",params:t})}function n(t,e){return Object(i["a"])({url:"customer/getPaging/".concat(t.page,"/").concat(t.size),method:"get",params:e})}function s(t){return Object(i["a"])({url:"customer",method:"post",data:t})}function l(t){return Object(i["a"])({url:"customer",method:"put",data:t})}function m(t){return Object(i["a"])({url:"customer",method:"delete",params:t})}function c(t){return Object(i["a"])({url:"store",method:"get",params:t})}function u(t){return Object(i["a"])({url:"store",method:"post",data:t})}function d(t){return Object(i["a"])({url:"store",method:"put",data:t})}function f(t){return Object(i["a"])({url:"store",method:"delete",params:t})}function p(t){return Object(i["a"])({url:"comboClassify",method:"get",params:t})}function h(t){return Object(i["a"])({url:"comboClassify",method:"post",data:t})}function v(t){return Object(i["a"])({url:"comboClassify",method:"put",data:t})}function g(t){return Object(i["a"])({url:"comboClassify",method:"delete",params:t})}function b(t){return Object(i["a"])({url:"combo",method:"get",params:t})}function _(t){return Object(i["a"])({url:"combo",method:"post",data:t})}function y(t){return Object(i["a"])({url:"combo",method:"put",data:t})}function C(t){return Object(i["a"])({url:"combo",method:"delete",params:t})}function w(t){return Object(i["a"])({url:"case",method:"get",params:t})}function k(t){return Object(i["a"])({url:"case",method:"post",data:t})}function x(t){return Object(i["a"])({url:"case",method:"put",data:t})}function T(t){return Object(i["a"])({url:"case",method:"delete",params:t})}function j(t){return Object(i["a"])({url:"position",method:"get",params:t})}function S(t){return Object(i["a"])({url:"position",method:"post",data:t})}function $(t){return Object(i["a"])({url:"position",method:"put",data:t})}function A(t){return Object(i["a"])({url:"position",method:"delete",params:t})}function O(t){return Object(i["a"])({url:"attendance",method:"get",params:t})}function D(t){return Object(i["a"])({url:"salary",method:"get",params:t})}function z(t){return Object(i["a"])({url:"salary",method:"post",data:t})}function P(t){return Object(i["a"])({url:"salary",method:"put",data:t})}function L(t){return Object(i["a"])({url:"salary",method:"delete",params:t})}function N(t){return Object(i["a"])({url:"staff",method:"get",params:t})}function Q(t){return Object(i["a"])({url:"staff",method:"post",data:t})}function M(t){return Object(i["a"])({url:"staff",method:"put",data:t})}function F(t){return Object(i["a"])({url:"staff",method:"delete",params:t})}function B(t){return Object(i["a"])({url:"balance",method:"get",params:t})}function E(t){return Object(i["a"])({url:"balance",method:"post",data:t})}function V(t){return Object(i["a"])({url:"balance",method:"put",data:t})}function q(t){return Object(i["a"])({url:"balance",method:"delete",params:t})}function I(t){return Object(i["a"])({url:"order",method:"get",params:t})}function J(t){return Object(i["a"])({url:"log",method:"get",params:t})}},"73d5":function(t,e,o){"use strict";var i=o("a1e5"),r=o.n(i);r.a},a1e5:function(t,e,o){},aedf:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"btn"},[o("el-button",{attrs:{type:"primary"},on:{click:t.addShop}},[t._v("新建")]),t._v(" "),o("el-button",{attrs:{type:"info"},on:{click:t.handleDownload}},[t._v("导出表格")]),t._v(" "),o("el-select",{attrs:{clearable:"",placeholder:"选择门店"},on:{change:function(e){return t.changeShop(e)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,(function(t){return o("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1),t._v(" "),o("el-select",{attrs:{clearable:"",placeholder:"选择状态"},on:{change:function(e){return t.changeState(e)}},model:{value:t.valueState,callback:function(e){t.valueState=e},expression:"valueState"}},t._l(t.optionsState,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),t._v(" "),o("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"请选择拍摄日期"},on:{change:function(e){return t.changeData(e)}},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}}),t._v(" "),o("el-input",{staticStyle:{width:"180px","margin-left":"50px"},attrs:{placeholder:"请输入手机号",clearable:""},model:{value:t.listQuery.phone,callback:function(e){t.$set(t.listQuery,"phone",e)},expression:"listQuery.phone"}}),t._v(" "),o("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入客户名称",clearable:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getList(e)}},model:{value:t.listQuery.name,callback:function(e){t.$set(t.listQuery,"name",e)},expression:"listQuery.name"}}),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.getList()}}},[t._v("搜索")])],1),t._v(" "),o("div",{staticClass:"tablee"},[o("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[o("el-table-column",{attrs:{align:"center",type:"index",label:"序号",width:"50"}}),t._v(" "),o("el-table-column",{attrs:{align:"center",prop:"name",label:"名称",width:"80"}}),t._v(" "),o("el-table-column",{attrs:{align:"center",prop:"phone",label:"联系电话",width:"130"}}),t._v(" "),o("el-table-column",{attrs:{align:"center",prop:"address",label:"家庭住址",width:"200"}}),t._v(" "),o("el-table-column",{attrs:{align:"center",prop:"store.name",label:"门店"}}),t._v(" "),o("el-table-column",{attrs:{align:"center",prop:"payment",label:"订单金额"}}),t._v(" "),o("el-table-column",{attrs:{align:"center",prop:"state",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return["0"==e.row.state?o("span",{staticStyle:{color:"#67C23A"}},[t._v("待确定拍摄日期")]):t._e(),t._v(" "),"1"==e.row.state?o("span",{staticStyle:{color:"#4B0082"}},[t._v("待拍摄")]):t._e(),t._v(" "),"2"==e.row.state?o("span",{staticStyle:{color:"#f78989"}},[t._v("选片中")]):t._e(),t._v(" "),"3"==e.row.state?o("span",{staticStyle:{color:"#409EFF"}},[t._v("设计中")]):t._e(),t._v(" "),"4"==e.row.state?o("span",{staticStyle:{color:"#006400"}},[t._v("制作中")]):t._e()]}}])}),t._v(" "),o("el-table-column",{attrs:{align:"center",prop:"deliveryTime",label:"交付日期"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.deliveryTime?o("span",[t._v(t._s(e.row.deliveryTime))]):t._e(),t._v(" "),e.row.deliveryTime?t._e():o("span",[t._v("未定")])]}}])}),t._v(" "),o("el-table-column",{attrs:{align:"center",label:"操作",width:"350"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{size:"mini",icon:"el-icon-document-copy",type:"primary"},on:{click:function(o){return t.getEditData(e.row)}}},[t._v("编辑")]),t._v(" "),o("el-button",{attrs:{size:"mini",icon:"el-icon-delete",type:"danger"},on:{click:function(o){return t.delData(e.row)}}},[t._v("删除")]),t._v(" "),0==e.row.a?o("el-button",{attrs:{size:"mini",icon:"el-icon-user",type:"success"},on:{click:function(o){return t.btnShow(e.row)}}},[t._v("交 付")]):t._e(),t._v(" "),1==e.row.a?o("el-button",{attrs:{size:"mini",icon:"el-icon-user",type:"info",disabled:""},on:{click:function(o){return t.btnShow(e.row)}}},[t._v("已交付")]):t._e()]}}])})],1),t._v(" "),o("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.limit},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"limit",e)},pagination:t.getList}})],1),t._v(" "),o("el-dialog",{attrs:{title:t.title1,visible:t.dialogFormVisible,width:"65%"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[o("el-form",{attrs:{model:t.form,inline:!0}},[o("el-form-item",{attrs:{label:"姓名"}},[o("label",{attrs:{slot:"label"},slot:"label"},[t._v("姓  名")]),t._v(" "),o("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入姓名"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"预约日期"}},[o("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:t.form.subscribeTime,callback:function(e){t.$set(t.form,"subscribeTime",e)},expression:"form.subscribeTime"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"选择客户顾问"}},[o("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.form.customerConsultant.id,callback:function(e){t.$set(t.form.customerConsultant,"id",e)},expression:"form.customerConsultant.id"}},t._l(t.customerConsultant1,(function(t){return o("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),t._v(" "),o("el-form-item",{attrs:{label:"提成比例"}},[o("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入提成比例"},model:{value:t.form.customerConsultantCommission,callback:function(e){t.$set(t.form,"customerConsultantCommission",e)},expression:"form.customerConsultantCommission"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"电话"}},[o("label",{attrs:{slot:"label"},slot:"label"},[t._v("电  话")]),t._v(" "),o("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入电话"},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"拍摄日期"}},[o("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:t.form.shootTime,callback:function(e){t.$set(t.form,"shootTime",e)},expression:"form.shootTime"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"请选择摄影师"}},[o("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.form.photographer.id,callback:function(e){t.$set(t.form.photographer,"id",e)},expression:"form.photographer.id"}},t._l(t.photographer1,(function(t){return o("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),t._v(" "),o("el-form-item",{attrs:{label:"提成比例"}},[o("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入提成比例"},model:{value:t.form.photographerCommission,callback:function(e){t.$set(t.form,"photographerCommission",e)},expression:"form.photographerCommission"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"住址"}},[o("label",{attrs:{slot:"label"},slot:"label"},[t._v("住  址")]),t._v(" "),o("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入住址"},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"选片日期"}},[o("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:t.form.selectTime,callback:function(e){t.$set(t.form,"selectTime",e)},expression:"form.selectTime"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"请选择设计师"}},[o("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.form.designer.id,callback:function(e){t.$set(t.form.designer,"id",e)},expression:"form.designer.id"}},t._l(t.designer1,(function(t){return o("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),t._v(" "),o("el-form-item",{attrs:{label:"提成比例"}},[o("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入提成比例"},model:{value:t.form.designerCommission,callback:function(e){t.$set(t.form,"designerCommission",e)},expression:"form.designerCommission"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"网络通讯"}},[o("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入网络通讯"},model:{value:t.form.networkService,callback:function(e){t.$set(t.form,"networkService",e)},expression:"form.networkService"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"定稿日期"}},[o("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:t.form.finalizeTime,callback:function(e){t.$set(t.form,"finalizeTime",e)},expression:"form.finalizeTime"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"请选择化妆师"}},[o("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.form.dresser.id,callback:function(e){t.$set(t.form.dresser,"id",e)},expression:"form.dresser.id"}},t._l(t.dresser1,(function(t){return o("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),t._v(" "),o("el-form-item",{attrs:{label:"提成比例"}},[o("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入提成比例"},model:{value:t.form.dresserCommission,callback:function(e){t.$set(t.form,"dresserCommission",e)},expression:"form.dresserCommission"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"套系"}},[o("label",{attrs:{slot:"label"},slot:"label"},[t._v("套  系")]),t._v(" "),o("el-select",{attrs:{clearable:"",placeholder:"请选择"},on:{change:function(e){return t.changeOrder(e)}},model:{value:t.form.combo.id,callback:function(e){t.$set(t.form.combo,"id",e)},expression:"form.combo.id"}},t._l(t.optionsCombo,(function(t){return o("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),t._v(" "),o("el-form-item",{attrs:{label:"交付日期"}},[o("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:t.form.deliveryTime,callback:function(e){t.$set(t.form,"deliveryTime",e)},expression:"form.deliveryTime"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"请选择助理一"}},[o("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.form.firstAid.id,callback:function(e){t.$set(t.form.firstAid,"id",e)},expression:"form.firstAid.id"}},t._l(t.firstAid1,(function(t){return o("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),t._v(" "),o("el-form-item",{attrs:{label:"提成比例"}},[o("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入提成比例"},model:{value:t.form.firstAidCommission,callback:function(e){t.$set(t.form,"firstAidCommission",e)},expression:"form.firstAidCommission"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"金额"}},[o("label",{attrs:{slot:"label"},slot:"label"},[t._v("金  额")]),t._v(" "),o("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入金额"},model:{value:t.form.payment,callback:function(e){t.$set(t.form,"payment",e)},expression:"form.payment"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"婚期"}},[o("label",{attrs:{slot:"label"},slot:"label"},[t._v("婚  期")]),t._v(" "),o("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:t.form.weddingTime,callback:function(e){t.$set(t.form,"weddingTime",e)},expression:"form.weddingTime"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"请选择助理二"}},[o("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.form.secondAid.id,callback:function(e){t.$set(t.form.secondAid,"id",e)},expression:"form.secondAid.id"}},t._l(t.secondAid1,(function(t){return o("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),t._v(" "),o("el-form-item",{attrs:{label:"提成比例"}},[o("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入提成比例"},model:{value:t.form.secondAidCommission,callback:function(e){t.$set(t.form,"secondAidCommission",e)},expression:"form.secondAidCommission"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"所属门店"}},[o("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.form.store.id,callback:function(e){t.$set(t.form.store,"id",e)},expression:"form.store.id"}},t._l(t.options,(function(t){return o("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),t._v(" "),o("el-form-item",{attrs:{label:"制作说明"}},[o("el-input",{staticStyle:{width:"1095px"},attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1),t._v(" "),o("el-form-item")],1),t._v(" "),o("div",{staticClass:"card"},[o("el-row",[o("el-col",{staticClass:"give",attrs:{span:3}},[o("div",[t._v("赠送产品")])]),t._v(" "),o("el-col",{staticClass:"give1",attrs:{span:7}},[o("div",[t._v("相册(尺寸)")]),t._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.gift1[0],expression:"form.gift1[0]"}],attrs:{type:"text"},domProps:{value:t.form.gift1[0]},on:{input:function(e){e.target.composing||t.$set(t.form.gift1,0,e.target.value)}}})]),t._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.gift2[0],expression:"form.gift2[0]"}],attrs:{type:"text"},domProps:{value:t.form.gift2[0]},on:{input:function(e){e.target.composing||t.$set(t.form.gift2,0,e.target.value)}}})]),t._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.gift3[0],expression:"form.gift3[0]"}],attrs:{type:"text"},domProps:{value:t.form.gift3[0]},on:{input:function(e){e.target.composing||t.$set(t.form.gift3,0,e.target.value)}}})])]),t._v(" "),o("el-col",{staticClass:"give1",attrs:{span:7}},[o("div",[t._v("放大(尺寸)")]),t._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.gift1[1],expression:"form.gift1[1]"}],attrs:{type:"text"},domProps:{value:t.form.gift1[1]},on:{input:function(e){e.target.composing||t.$set(t.form.gift1,1,e.target.value)}}})]),t._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.gift2[1],expression:"form.gift2[1]"}],attrs:{type:"text"},domProps:{value:t.form.gift2[1]},on:{input:function(e){e.target.composing||t.$set(t.form.gift2,1,e.target.value)}}})]),t._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.gift3[1],expression:"form.gift3[1]"}],attrs:{type:"text"},domProps:{value:t.form.gift3[1]},on:{input:function(e){e.target.composing||t.$set(t.form.gift3,1,e.target.value)}}})])]),t._v(" "),o("el-col",{staticClass:"give2",attrs:{span:7}},[o("div",[t._v("其他产品(尺寸)")]),t._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.gift1[2],expression:"form.gift1[2]"}],attrs:{type:"text"},domProps:{value:t.form.gift1[2]},on:{input:function(e){e.target.composing||t.$set(t.form.gift1,2,e.target.value)}}})]),t._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.gift2[2],expression:"form.gift2[2]"}],attrs:{type:"text"},domProps:{value:t.form.gift2[2]},on:{input:function(e){e.target.composing||t.$set(t.form.gift2,2,e.target.value)}}})]),t._v(" "),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.gift3[2],expression:"form.gift3[2]"}],attrs:{type:"text"},domProps:{value:t.form.gift3[2]},on:{input:function(e){e.target.composing||t.$set(t.form.gift3,2,e.target.value)}}})])])],1),t._v(" "),o("el-row",[o("el-col",{staticClass:"content",attrs:{span:3}},[o("div",[t._v("拍摄内容")])]),t._v(" "),o("el-col",{staticClass:"content1",attrs:{span:21}},[o("div",[t._v("\n            拍摄景点：\n            "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.shootAddress,expression:"form.shootAddress"}],attrs:{type:"text"},domProps:{value:t.form.shootAddress},on:{input:function(e){e.target.composing||t.$set(t.form,"shootAddress",e.target.value)}}})]),t._v(" "),o("div",[t._v("\n            拍摄服装：\n            "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.shootClothing,expression:"form.shootClothing"}],attrs:{type:"text"},domProps:{value:t.form.shootClothing},on:{input:function(e){e.target.composing||t.$set(t.form,"shootClothing",e.target.value)}}})]),t._v(" "),o("div",[t._v("\n            我们提供：\n            "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.include,expression:"form.include"}],attrs:{type:"text"},domProps:{value:t.form.include},on:{input:function(e){e.target.composing||t.$set(t.form,"include",e.target.value)}}})])])],1),t._v(" "),o("el-row",[o("el-col",{staticClass:"like",attrs:{span:3}},[o("div",[t._v("喜欢风格")])]),t._v(" "),o("el-col",{staticClass:"like1",attrs:{span:21}},[o("div",[o("span",[t._v("\n              喜欢风格描述：\n              "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.style,expression:"form.style"}],attrs:{type:"text"},domProps:{value:t.form.style},on:{input:function(e){e.target.composing||t.$set(t.form,"style",e.target.value)}}})]),t._v(" "),o("span",[t._v("\n              对拍摄的特殊要求：\n              "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.special,expression:"form.special"}],attrs:{type:"text"},domProps:{value:t.form.special},on:{input:function(e){e.target.composing||t.$set(t.form,"special",e.target.value)}}})]),t._v(" "),o("span",[t._v("\n              有无照片参考：\n              "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.form.photo,expression:"form.photo"}],attrs:{type:"text"},domProps:{value:t.form.photo},on:{input:function(e){e.target.composing||t.$set(t.form,"photo",e.target.value)}}})])])])],1),t._v(" "),o("el-row",[o("el-col",{staticClass:"project",attrs:{span:3}},[o("div",[t._v("项目")]),t._v(" "),o("div",[t._v("预约定金")]),t._v(" "),o("div",[t._v("拍摄付款")]),t._v(" "),o("div",[t._v("其他付款")])]),t._v(" "),o("el-col",{staticClass:"project1",attrs:{span:5}},[o("div",[t._v("金额(元)")]),t._v(" "),o("div",[t._v("9988888888")]),t._v(" "),o("div",[t._v("8999999999")]),t._v(" "),o("div",[t._v("9888888888")])]),t._v(" "),o("el-col",{staticClass:"project1",attrs:{span:5}},[o("div",[t._v("经手人")]),t._v(" "),o("div",[t._v("王硕")]),t._v(" "),o("div",[t._v("2")]),t._v(" "),o("div",[t._v("3")])]),t._v(" "),o("el-col",{staticClass:"project1",attrs:{span:6}},[o("div",[t._v("日期")]),t._v(" "),o("div",[t._v("1")]),t._v(" "),o("div",[t._v("2")]),t._v(" "),o("div",[t._v("3")])]),t._v(" "),o("el-col",{staticClass:"project2",attrs:{span:5}},[o("div",[t._v("顾客签名")]),t._v(" "),o("div",[t._v("迪丽热巴")]),t._v(" "),o("div",[t._v("杨幂")]),t._v(" "),o("div",[t._v("刘玉宝")])])],1),t._v(" "),o("el-row",[o("el-col",{staticClass:"careful",attrs:{span:3}},[o("div",[t._v("拍摄前准备及注意事项")])]),t._v(" "),o("el-col",{staticClass:"careful1",attrs:{span:21}},[o("div",[o("span",[t._v("拍照前一周，可以开始适当的做一些面部、皮肤的保养，护发剪发烫发最好在拍摄前15天内完成，头发不要做拉直、烫卷，不要嫁接睫毛，颜色最好一致。")]),t._v(" "),o("span",[t._v("拍摄前一天，心情放松，提早休息，睡前少喝水，以免隔日眼睛浮肿，要有充足的睡眠，如此拍起来更为精神焕发，神采飞扬。新娘应自行修剪指甲，并将胶毛刮干净。")]),t._v(" "),o("span",[t._v("拍摄当天请勿自行上妆，只需简单润肤即可，不需要带首饰。")]),t._v(" "),o("span",[t._v("男士拍摄当天勿穿深色内裤，避免穿白色西裤透色，自带黑白袜子个一双，黑皮鞋一双，也可自带一套合身的西装。")]),t._v(" "),o("span",[t._v("男士如需带眼睛拍摄，应把镜片除去，只保留镜框，以防镜片出现反光现象。")]),t._v(" "),o("span",[t._v("拍摄当天与化妆师摄影师讲出您喜欢的拍摄效果和风格，并可以带些电子版的参考图片。")]),t._v(" "),o("span",[t._v("拍摄当天需要支付剩余拍摄费，您可通过微信、支付宝、刷卡等多种付款方式付款。")]),t._v(" "),o("span",{staticClass:"distance"},[t._v("如有疑问随时咨询服务人员，或者直接拨打负责人电话15802421896（大鹏）我们将一如既往的为您提供最优质的作品和服务，如您对我的服务与质量等任何环节存在不满请随时指出")]),t._v(" "),o("span",[t._v("我会非常感谢您帮助我们成长进步！")])])])],1)],1),t._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),o("el-button",{attrs:{type:"primary",loading:t.btnLoading},on:{click:t.addSubmit}},[t._v("确 定")])],1)],1)],1)},r=[],a=(o("28a5"),o("7f7f"),o("4ec3")),n=o("333d"),s={name:"Customer",components:{Pagination:n["a"]},data:function(){return{total:0,listQuery:{page:1,limit:20,name:"",phone:""},btnLoading:!1,dialogFormVisible:!1,title1:"",tel:"",value:"",valueState:"",a:"0",form:{state:"0",id:"",name:"",phone:"",address:"",networkService:"",payment:"",combo:{id:""},customerConsultant:{id:""},photographer:{id:""},designer:{id:""},dresser:{id:""},firstAid:{id:""},secondAid:{id:""},store:{id:""},remark:"",subscribeTime:"",shootTime:"",selectTime:"",finalizeTime:"",deliveryTime:"",weddingTime:"",customerConsultantCommission:"",photographerCommission:"",designerCommission:"",dresserCommission:"",firstAidCommission:"",secondAidCommission:"",shootAddress:"",shootClothing:"",include:"",style:"",special:"",photo:"",gift1:"",gift2:"",gift3:""},options:[],optionsState:[{value:"state1",label:"待确定拍摄日期"},{value:"state2",label:"待拍摄"},{value:"state3",label:"选片中"},{value:"state4",label:"设计中"},{value:"state5",label:"制作中"}],optionsCombo:[],value1:"",value2:"",value3:"",valueCombo:"",input:"",input1:"",tableData:[],staffData:[],customerConsultant1:[],photographer1:[],designer1:[],dresser1:[],firstAid1:[],secondAid1:[]}},created:function(){this.getList(),this.getComboList(),this.getShopList(),this.getStaffList()},methods:{changeOrder:function(t){},changeData:function(t){console.log(t),this.tableData=null!==t?this.tableDataAll.filter((function(e){return e.shootTime===t})):this.tableDataAll},changeState:function(t){"state1"===t?this.tableData=this.tableDataAll.filter((function(t){return 0===t.state})):"state2"===t?this.tableData=this.tableDataAll.filter((function(t){return 1===t.state})):"state3"===t?this.tableData=this.tableDataAll.filter((function(t){return 2===t.state})):"state4"===t?this.tableData=this.tableDataAll.filter((function(t){return 3===t.state})):"state5"===t?this.tableData=this.tableDataAll.filter((function(t){return 4===t.state})):""===t&&(this.tableData=this.tableDataAll)},changeShop:function(t){this.tableData=""===t?this.tableDataAll:this.tableDataAll.filter((function(e){return e.store.id===t}))},getStaffList:function(){var t=this,e={name:""!==this.name?this.name:void 0};Object(a["L"])(e).then((function(e){t.staffData=e.data.data,t.customerConsultant1=t.staffData.filter((function(t){return 2===t.position.id})),t.photographer1=t.staffData.filter((function(t){return 4===t.position.id})),t.designer1=t.staffData.filter((function(t){return 5===t.position.id})),t.dresser1=t.staffData.filter((function(t){return 6===t.position.id})),t.firstAid1=t.staffData.filter((function(t){return 7===t.position.id})),t.secondAid1=t.staffData.filter((function(t){return 7===t.position.id}))})).catch((function(){t.staffData=[]}))},getShopList:function(){var t=this;Object(a["H"])().then((function(e){t.options=e.data.data})).catch((function(){t.options=[]}))},getComboList:function(){var t=this;Object(a["p"])().then((function(e){t.optionsCombo=e.data.data})).catch((function(){t.optionsCombo=[]}))},getList:function(){var t=this,e={page:this.listQuery.page,size:this.listQuery.limit},o={name:""!==this.listQuery.name?this.listQuery.name:void 0,phone:""!==this.listQuery.phone?this.listQuery.phone:void 0};Object(a["t"])(e,o).then((function(e){t.tableData=e.data.data.currentList,t.tableDataAll=e.data.data.currentList,t.total=e.data.data.totalRecords})).catch((function(){t.tableData=[]}))},addShop:function(){this.dialogFormVisible=!0,this.form.state="0",this.form.id="",this.form.name="",this.form.phone="",this.form.address="",this.form.networkService="",this.form.payment="",this.form.combo.id="",this.form.customerConsultant.id="",this.form.photographer.id="",this.form.designer.id="",this.form.store.id="",this.form.dresser.id="",this.form.firstAid.id="",this.form.secondAid.id="",this.form.remark="",this.title1="新增收支",this.form.subscribeTime="",this.form.shootTime="",this.form.selectTime="",this.form.finalizeTime="",this.form.deliveryTime="",this.form.weddingTime="",this.form.customerConsultantCommission="",this.form.photographerCommission="",this.form.designerCommission="",this.form.dresserCommission="",this.form.firstAidCommission="",this.form.secondAidCommission="",this.form.shootAddress="",this.form.shootClothing="",this.form.include="",this.form.style="",this.form.special="",this.form.photo="",this.form.gift1="0&|&0&|&0".split("&|&"),this.form.gift2="0&|&0&|&0".split("&|&"),this.form.gift3="0&|&0&|&0".split("&|&")},getEditData:function(t){this.dialogFormVisible=!0,this.form.state=t.state,this.form.id=t.id,this.form.name=t.name,this.form.phone=t.phone,this.form.address=t.address,this.form.networkService=t.networkService,this.form.payment=t.payment,this.form.combo.id=t.combo.id,this.form.customerConsultant.id=t.customerConsultant.id,this.form.photographer.id=t.photographer.id,this.form.designer.id=t.designer.id,this.form.dresser.id=t.dresser.id,this.form.firstAid.id=t.firstAid.id,this.form.secondAid.id=t.secondAid.id,this.form.store.id=t.store.id,this.form.remark=t.remark,this.title1="编辑客户",this.form.subscribeTime=t.subscribeTime,this.form.shootTime=t.shootTime,this.form.selectTime=t.selectTime,this.form.finalizeTime=t.finalizeTime,this.form.deliveryTime=t.deliveryTime,this.form.weddingTime=t.weddingTime,this.form.customerConsultantCommission=t.customerConsultantCommission,this.form.photographerCommission=t.photographerCommission,this.form.designerCommission=t.designerCommission,this.form.dresserCommission=t.dresserCommission,this.form.firstAidCommission=t.firstAidCommission,this.form.secondAidCommission=t.secondAidCommission,this.form.shootAddress=t.shootAddress,this.form.shootClothing=t.shootClothing,this.form.include=t.include,this.form.style=t.style,this.form.special=t.special,this.form.photo=t.photo,this.form.gift1=t.gift1.split("&|&"),this.form.gift2=t.gift2.split("&|&"),this.form.gift3=t.gift3.split("&|&")},addSubmit:function(){var t=this;this.form.id?(this.form.gift1=this.form.gift1.join("&|&"),this.form.gift2=this.form.gift2.join("&|&"),this.form.gift3=this.form.gift3.join("&|&"),""===this.form.shootTime?this.form.state="0":""!==this.form.shootTime&&""===this.form.selectTime?this.form.state="1":""!==this.form.selectTime&&""===this.form.finalizeTime?this.form.state="2":""!==this.form.finalizeTime&&""===this.form.deliveryTime?this.form.state="3":""!==this.form.deliveryTime&&(this.form.state="4"),Object(a["u"])(this.form).then((function(){t.$notify.success({title:"成功",message:"记录修改成功"}),t.dialogFormVisible=!1,t.getList()})).catch((function(e){t.$notify.error({title:"失败",message:e.data.message})}))):(this.form.gift1=this.form.gift1.join("&|&"),this.form.gift2=this.form.gift2.join("&|&"),this.form.gift3=this.form.gift3.join("&|&"),""===this.form.shootTime?this.form.state="0":""!==this.form.shootTime&&""===this.form.selectTime?this.form.state="1":""!==this.form.selectTime&&""===this.form.finalizeTime?this.form.state="2":""!==this.form.finalizeTime&&""===this.form.deliveryTime?this.form.state="3":""!==this.form.deliveryTime&&(this.form.state="4"),Object(a["r"])(this.form).then((function(){t.$notify.success({title:"成功",message:"记录添加成功"}),t.dialogFormVisible=!1,t.getList()})).catch((function(e){t.$notify.error({title:"失败",message:e.data.message})})))},btnShow:function(t){var e=this;console.log(t.id),this.$confirm("此操作将提交交付, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(a["e"])({id:t.id}).then((function(t){e.$notify.success({title:"成功",message:"交付成功"}),e.getList()})).catch((function(t){e.$notify.error({title:"失败",message:t.data.message})}))})).catch((function(){e.$notify.error({title:"取消",message:"已取消交付"})}))},delData:function(t){var e=this;this.$confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var o={id:t.id};Object(a["s"])(o).then((function(t){e.$notify.success({title:"成功",message:"记录删除成功"}),e.getList()})).catch((function(t){e.$notify.error({title:"失败",message:t.data.message})}))})).catch((function(){e.$notify.error({title:"取消",message:"已取消删除"})}))},handleDownload:function(){var t=this;Promise.all([o.e("chunk-86a68bf8"),o.e("chunk-58293907")]).then(o.bind(null,"4bf8d")).then((function(e){var o=["ID","名称","联系电话","家庭住址","门店","订单类别","订单金额","交付日期"],i=["id","name","phone","address","store","address","payment","deliveryTime"];e.export_json_to_excel2(o,t.tableData,i,"客户管理"),t.downloadLoading=!1}))}}},l=s,m=(o("73d5"),o("2877")),c=Object(m["a"])(l,i,r,!1,null,"6d586bf8",null);e["default"]=c.exports},cf7e:function(t,e,o){}}]);