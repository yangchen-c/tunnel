(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-580aeb79"],{"0cab":function(t,e,n){},"4ec3":function(t,e,n){"use strict";n.d(e,"N",(function(){return r})),n.d(e,"e",(function(){return o})),n.d(e,"t",(function(){return u})),n.d(e,"r",(function(){return i})),n.d(e,"u",(function(){return c})),n.d(e,"s",(function(){return l})),n.d(e,"H",(function(){return s})),n.d(e,"F",(function(){return f})),n.d(e,"I",(function(){return d})),n.d(e,"G",(function(){return m})),n.d(e,"m",(function(){return b})),n.d(e,"k",(function(){return p})),n.d(e,"n",(function(){return h})),n.d(e,"l",(function(){return g})),n.d(e,"p",(function(){return v})),n.d(e,"j",(function(){return j})),n.d(e,"q",(function(){return O})),n.d(e,"o",(function(){return y})),n.d(e,"h",(function(){return _})),n.d(e,"f",(function(){return w})),n.d(e,"i",(function(){return k})),n.d(e,"g",(function(){return D})),n.d(e,"z",(function(){return L})),n.d(e,"x",(function(){return $})),n.d(e,"A",(function(){return x})),n.d(e,"y",(function(){return C})),n.d(e,"O",(function(){return F})),n.d(e,"D",(function(){return S})),n.d(e,"B",(function(){return V})),n.d(e,"E",(function(){return E})),n.d(e,"C",(function(){return z})),n.d(e,"L",(function(){return B})),n.d(e,"J",(function(){return W})),n.d(e,"M",(function(){return J})),n.d(e,"K",(function(){return T})),n.d(e,"c",(function(){return q})),n.d(e,"a",(function(){return I})),n.d(e,"d",(function(){return A})),n.d(e,"b",(function(){return G})),n.d(e,"w",(function(){return H})),n.d(e,"v",(function(){return K}));var a=n("b775"),r="http://api.qingxinyoupin.com/upload";function o(t){return Object(a["a"])({url:"customer/a",method:"get",params:t})}function u(t,e){return Object(a["a"])({url:"customer/getPaging/".concat(t.page,"/").concat(t.size),method:"get",params:e})}function i(t){return Object(a["a"])({url:"customer",method:"post",data:t})}function c(t){return Object(a["a"])({url:"customer",method:"put",data:t})}function l(t){return Object(a["a"])({url:"customer",method:"delete",params:t})}function s(t){return Object(a["a"])({url:"store",method:"get",params:t})}function f(t){return Object(a["a"])({url:"store",method:"post",data:t})}function d(t){return Object(a["a"])({url:"store",method:"put",data:t})}function m(t){return Object(a["a"])({url:"store",method:"delete",params:t})}function b(t){return Object(a["a"])({url:"comboClassify",method:"get",params:t})}function p(t){return Object(a["a"])({url:"comboClassify",method:"post",data:t})}function h(t){return Object(a["a"])({url:"comboClassify",method:"put",data:t})}function g(t){return Object(a["a"])({url:"comboClassify",method:"delete",params:t})}function v(t){return Object(a["a"])({url:"combo",method:"get",params:t})}function j(t){return Object(a["a"])({url:"combo",method:"post",data:t})}function O(t){return Object(a["a"])({url:"combo",method:"put",data:t})}function y(t){return Object(a["a"])({url:"combo",method:"delete",params:t})}function _(t){return Object(a["a"])({url:"case",method:"get",params:t})}function w(t){return Object(a["a"])({url:"case",method:"post",data:t})}function k(t){return Object(a["a"])({url:"case",method:"put",data:t})}function D(t){return Object(a["a"])({url:"case",method:"delete",params:t})}function L(t){return Object(a["a"])({url:"position",method:"get",params:t})}function $(t){return Object(a["a"])({url:"position",method:"post",data:t})}function x(t){return Object(a["a"])({url:"position",method:"put",data:t})}function C(t){return Object(a["a"])({url:"position",method:"delete",params:t})}function F(t){return Object(a["a"])({url:"attendance",method:"get",params:t})}function S(t){return Object(a["a"])({url:"salary",method:"get",params:t})}function V(t){return Object(a["a"])({url:"salary",method:"post",data:t})}function E(t){return Object(a["a"])({url:"salary",method:"put",data:t})}function z(t){return Object(a["a"])({url:"salary",method:"delete",params:t})}function B(t){return Object(a["a"])({url:"staff",method:"get",params:t})}function W(t){return Object(a["a"])({url:"staff",method:"post",data:t})}function J(t){return Object(a["a"])({url:"staff",method:"put",data:t})}function T(t){return Object(a["a"])({url:"staff",method:"delete",params:t})}function q(t){return Object(a["a"])({url:"balance",method:"get",params:t})}function I(t){return Object(a["a"])({url:"balance",method:"post",data:t})}function A(t){return Object(a["a"])({url:"balance",method:"put",data:t})}function G(t){return Object(a["a"])({url:"balance",method:"delete",params:t})}function H(t){return Object(a["a"])({url:"order",method:"get",params:t})}function K(t){return Object(a["a"])({url:"log",method:"get",params:t})}},6476:function(t,e,n){"use strict";var a=n("0cab"),r=n.n(a);r.a},aa5b:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"btn"},[n("el-select",{attrs:{clearable:"",placeholder:"请选择员工"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.getList()}}},[t._v("查询")])],1),t._v(" "),n("div",{staticClass:"tablee"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[n("el-table-column",{attrs:{align:"center",prop:"id",label:"ID",width:"50"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",prop:"staff.name",label:"员工名称"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",prop:"staff.salary",label:"底薪"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",prop:"commission",label:"提成"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",prop:"createTime",label:"结算时间"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini",icon:"el-icon-document-copy",type:"primary"},on:{click:function(n){return t.getEditData(e.row)}}},[t._v("编辑")]),t._v(" "),n("el-button",{attrs:{size:"mini",icon:"el-icon-user",type:"danger"},on:{click:function(n){return t.delData(e.row)}}},[t._v("删除")])]}}])})],1)],1),t._v(" "),n("el-dialog",{attrs:{title:"编辑工资",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[n("el-form",{attrs:{model:t.form}},[n("el-form-item",{attrs:{label:"工资调整","label-width":t.formLabelWidth}},[n("el-input",{staticStyle:{width:"400px"},attrs:{placeholder:"请输入工资"},model:{value:t.form.staff.salary,callback:function(e){t.$set(t.form.staff,"salary",e)},expression:"form.staff.salary"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"提成调整","label-width":t.formLabelWidth}},[n("el-input",{staticStyle:{width:"400px"},attrs:{placeholder:"请输入工资"},model:{value:t.form.commission,callback:function(e){t.$set(t.form,"commission",e)},expression:"form.commission"}})],1)],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{type:"primary",loading:t.btnLoading},on:{click:t.addSubmit}},[t._v("确 定")])],1)],1)],1)},r=[],o=(n("7f7f"),n("4ec3")),u={name:"Wages",data:function(){return{options:[{value:"选项1",label:"员工1"},{value:"选项2",label:"员工2"}],optionsState:[{value:"选项1",label:"状态1"},{value:"选项2",label:"状态2"}],value:"",valueState:"",value1:"",value2:new Date,btnLoading:!1,name:"",tableData:[],dialogFormVisible:!1,form:{staff:{id:"",salary:""},commission:""},formLabelWidth:"100px"}},created:function(){this.getList()},methods:{getList:function(){var t=this;Object(o["D"])({id:this.$route.params.id}).then((function(e){t.tableData=e.data.data})).catch((function(){t.tableData=[]}))},getEditData:function(t){this.dialogFormVisible=!0,this.form.name=t.name,this.form.id=t.id,this.form.staff.id=t.staff.id,this.form.commission=t.commission,this.form.staff.salary=t.staff.salary},addSubmit:function(){var t=this;this.form.id?Object(o["E"])(this.form).then((function(){t.$notify.success({title:"成功",message:"员工修改成功"}),t.dialogFormVisible=!1,t.getList()})).catch((function(e){t.$notify.error({title:"失败",message:e.data.message})})):Object(o["B"])(this.form).then((function(){t.$notify.success({title:"成功",message:"员工添加成功"}),t.dialogFormVisible=!1,t.getList()})).catch((function(e){t.$notify.error({title:"失败",message:e.data.message})}))},delData:function(t){var e=this;this.$confirm("此操作将永久删除该店铺, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var n={id:t.id};Object(o["C"])(n).then((function(t){e.$notify.success({title:"成功",message:"店铺删除成功"}),e.getList()})).catch((function(t){e.$notify.error({title:"失败",message:t.data.message})}))})).catch((function(){e.$notify.error({title:"取消",message:"已取消删除"})}))}}},i=u,c=(n("6476"),n("2877")),l=Object(c["a"])(i,a,r,!1,null,"80b55fda",null);e["default"]=l.exports}}]);