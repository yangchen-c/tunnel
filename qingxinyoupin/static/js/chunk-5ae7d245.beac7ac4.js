(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ae7d245"],{4557:function(t,e,n){},"4ec3":function(t,e,n){"use strict";n.d(e,"N",(function(){return o})),n.d(e,"e",(function(){return a})),n.d(e,"t",(function(){return i})),n.d(e,"r",(function(){return u})),n.d(e,"u",(function(){return c})),n.d(e,"s",(function(){return l})),n.d(e,"H",(function(){return s})),n.d(e,"F",(function(){return d})),n.d(e,"I",(function(){return f})),n.d(e,"G",(function(){return m})),n.d(e,"m",(function(){return b})),n.d(e,"k",(function(){return h})),n.d(e,"n",(function(){return p})),n.d(e,"l",(function(){return g})),n.d(e,"p",(function(){return j})),n.d(e,"j",(function(){return O})),n.d(e,"q",(function(){return v})),n.d(e,"o",(function(){return y})),n.d(e,"h",(function(){return _})),n.d(e,"f",(function(){return w})),n.d(e,"i",(function(){return k})),n.d(e,"g",(function(){return L})),n.d(e,"z",(function(){return x})),n.d(e,"x",(function(){return S})),n.d(e,"A",(function(){return $})),n.d(e,"y",(function(){return D})),n.d(e,"O",(function(){return F})),n.d(e,"D",(function(){return C})),n.d(e,"B",(function(){return V})),n.d(e,"E",(function(){return z})),n.d(e,"C",(function(){return W})),n.d(e,"L",(function(){return E})),n.d(e,"J",(function(){return J})),n.d(e,"M",(function(){return B})),n.d(e,"K",(function(){return P})),n.d(e,"c",(function(){return q})),n.d(e,"a",(function(){return H})),n.d(e,"d",(function(){return K})),n.d(e,"b",(function(){return M})),n.d(e,"w",(function(){return T})),n.d(e,"v",(function(){return A}));var r=n("b775"),o="http://api.qingxinyoupin.com/upload";function a(t){return Object(r["a"])({url:"customer/a",method:"get",params:t})}function i(t,e){return Object(r["a"])({url:"customer/getPaging/".concat(t.page,"/").concat(t.size),method:"get",params:e})}function u(t){return Object(r["a"])({url:"customer",method:"post",data:t})}function c(t){return Object(r["a"])({url:"customer",method:"put",data:t})}function l(t){return Object(r["a"])({url:"customer",method:"delete",params:t})}function s(t){return Object(r["a"])({url:"store",method:"get",params:t})}function d(t){return Object(r["a"])({url:"store",method:"post",data:t})}function f(t){return Object(r["a"])({url:"store",method:"put",data:t})}function m(t){return Object(r["a"])({url:"store",method:"delete",params:t})}function b(t){return Object(r["a"])({url:"comboClassify",method:"get",params:t})}function h(t){return Object(r["a"])({url:"comboClassify",method:"post",data:t})}function p(t){return Object(r["a"])({url:"comboClassify",method:"put",data:t})}function g(t){return Object(r["a"])({url:"comboClassify",method:"delete",params:t})}function j(t){return Object(r["a"])({url:"combo",method:"get",params:t})}function O(t){return Object(r["a"])({url:"combo",method:"post",data:t})}function v(t){return Object(r["a"])({url:"combo",method:"put",data:t})}function y(t){return Object(r["a"])({url:"combo",method:"delete",params:t})}function _(t){return Object(r["a"])({url:"case",method:"get",params:t})}function w(t){return Object(r["a"])({url:"case",method:"post",data:t})}function k(t){return Object(r["a"])({url:"case",method:"put",data:t})}function L(t){return Object(r["a"])({url:"case",method:"delete",params:t})}function x(t){return Object(r["a"])({url:"position",method:"get",params:t})}function S(t){return Object(r["a"])({url:"position",method:"post",data:t})}function $(t){return Object(r["a"])({url:"position",method:"put",data:t})}function D(t){return Object(r["a"])({url:"position",method:"delete",params:t})}function F(t){return Object(r["a"])({url:"attendance",method:"get",params:t})}function C(t){return Object(r["a"])({url:"salary",method:"get",params:t})}function V(t){return Object(r["a"])({url:"salary",method:"post",data:t})}function z(t){return Object(r["a"])({url:"salary",method:"put",data:t})}function W(t){return Object(r["a"])({url:"salary",method:"delete",params:t})}function E(t){return Object(r["a"])({url:"staff",method:"get",params:t})}function J(t){return Object(r["a"])({url:"staff",method:"post",data:t})}function B(t){return Object(r["a"])({url:"staff",method:"put",data:t})}function P(t){return Object(r["a"])({url:"staff",method:"delete",params:t})}function q(t){return Object(r["a"])({url:"balance",method:"get",params:t})}function H(t){return Object(r["a"])({url:"balance",method:"post",data:t})}function K(t){return Object(r["a"])({url:"balance",method:"put",data:t})}function M(t){return Object(r["a"])({url:"balance",method:"delete",params:t})}function T(t){return Object(r["a"])({url:"order",method:"get",params:t})}function A(t){return Object(r["a"])({url:"log",method:"get",params:t})}},ac63:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"btn"},[n("el-button",{attrs:{type:"primary"},on:{click:t.addShop}},[t._v("新建")]),t._v(" "),n("el-input",{staticStyle:{width:"180px","margin-left":"200px"},attrs:{placeholder:"请输入员工名称",clearable:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.getList()}}},[t._v("搜索")])],1),t._v(" "),n("div",{staticClass:"tablee"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[n("el-table-column",{attrs:{align:"center",label:"序号",width:"50",type:"index"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",prop:"name",label:"员工名称"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",prop:"phone",label:"联系方式"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",prop:"position.name",label:"职位"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini",icon:"el-icon-document-copy",type:"primary"},on:{click:function(n){return t.getEditData(e.row)}}},[t._v("编辑")]),t._v(" "),n("el-button",{attrs:{size:"mini",icon:"el-icon-delete",type:"danger"},on:{click:function(n){return t.delData(e.row)}}},[t._v("删除")]),t._v(" "),n("el-button",{attrs:{size:"mini",icon:"el-icon-user",type:"success"},on:{click:function(n){return t.jump(e.row.id)}}},[t._v("工资")])]}}])})],1)],1),t._v(" "),n("el-dialog",{attrs:{title:t.title1,visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[n("el-form",{attrs:{model:t.form}},[n("el-form-item",{attrs:{label:"员工名称","label-width":t.formLabelWidth}},[n("el-input",{staticStyle:{width:"400px"},attrs:{placeholder:"请输入职位名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"联系方式","label-width":t.formLabelWidth}},[n("el-input",{staticStyle:{width:"400px"},attrs:{placeholder:"请输入联系方式"},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"员工职位","label-width":t.formLabelWidth}},[n("el-select",{attrs:{clearable:"",placeholder:"请选择"},on:{change:function(e){return t.changeOrder(e)}},model:{value:t.form.position.id,callback:function(e){t.$set(t.form.position,"id",e)},expression:"form.position.id"}},t._l(t.tableData1,(function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),t._v(" "),n("el-form-item",{attrs:{label:"所属门店","label-width":t.formLabelWidth}},[n("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:t.form.store.id,callback:function(e){t.$set(t.form.store,"id",e)},expression:"form.store.id"}},t._l(t.optionsShop,(function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),t._v(" "),n("el-form-item",{attrs:{label:"底薪","label-width":t.formLabelWidth}},[n("el-input",{staticStyle:{width:"400px"},attrs:{placeholder:"请输入底薪"},model:{value:t.form.salary,callback:function(e){t.$set(t.form,"salary",e)},expression:"form.salary"}})],1)],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{type:"primary",loading:t.btnLoading},on:{click:t.addSubmit}},[t._v("确 定")])],1)],1)],1)},o=[],a=(n("7f7f"),n("4ec3")),i={name:"Stafff",data:function(){return{btnLoading:!1,name:"",title1:"",tableData:[],tableData1:[],optionsShop:[],dialogFormVisible:!1,form:{name:"",id:"",phone:"",salary:"",position:{id:""},store:{id:"",name:""}},formLabelWidth:"100px"}},created:function(){this.getList(),this.getPositionList(),this.getShopList()},methods:{changeOrder:function(t){},getPositionList:function(){var t=this;Object(a["z"])().then((function(e){t.tableData1=e.data.data})).catch((function(){t.tableData1=[]}))},getShopList:function(){var t=this;Object(a["H"])().then((function(e){t.optionsShop=e.data.data})).catch((function(){t.optionsShop=[]}))},getList:function(){var t=this;Object(a["L"])({name:this.name}).then((function(e){t.tableData=e.data.data})).catch((function(){t.tableData=[]}))},addShop:function(){this.dialogFormVisible=!0,this.form.name="",this.title1="新增职位",this.form.id="",this.form.phone="",this.form.salary="",this.form.position.id="",this.form.store.id="",this.form.store.name=""},getEditData:function(t){this.dialogFormVisible=!0,this.form.name=t.name,this.title1="编辑职位",this.form.id=t.id,this.form.phone=t.phone,this.form.salary=t.salary,this.form.position.id=t.position.id,this.form.store.id=t.store.id,this.form.store.name=t.store.name},addSubmit:function(){var t=this;this.form.id?Object(a["M"])(this.form).then((function(){t.$notify.success({title:"成功",message:"店铺修改成功"}),t.dialogFormVisible=!1,t.getList()})).catch((function(e){t.$notify.error({title:"失败",message:e.data.message})})):Object(a["J"])(this.form).then((function(){t.$notify.success({title:"成功",message:"店铺添加成功"}),t.dialogFormVisible=!1,t.getList()})).catch((function(e){t.$notify.error({title:"失败",message:e.data.message})}))},jump:function(t){console.log(t),this.$router.push({name:"wages",params:{id:t}})},delData:function(t){var e=this;this.$confirm("此操作将永久删除该店铺, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var n={id:t.id};Object(a["K"])(n).then((function(t){e.$notify.success({title:"成功",message:"店铺删除成功"}),e.getList()})).catch((function(t){e.$notify.error({title:"失败",message:t.data.message})}))})).catch((function(){e.$notify.error({title:"取消",message:"已取消删除"})}))}}},u=i,c=(n("ebb7"),n("2877")),l=Object(c["a"])(u,r,o,!1,null,"b3b86860",null);e["default"]=l.exports},ebb7:function(t,e,n){"use strict";var r=n("4557"),o=n.n(r);o.a}}]);