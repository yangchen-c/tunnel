(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f1537ad8"],{"44de":function(t,e,a){},"4ec3":function(t,e,a){"use strict";a.d(e,"N",(function(){return r})),a.d(e,"e",(function(){return o})),a.d(e,"t",(function(){return i})),a.d(e,"r",(function(){return l})),a.d(e,"u",(function(){return c})),a.d(e,"s",(function(){return u})),a.d(e,"H",(function(){return s})),a.d(e,"F",(function(){return d})),a.d(e,"I",(function(){return f})),a.d(e,"G",(function(){return m})),a.d(e,"m",(function(){return p})),a.d(e,"k",(function(){return b})),a.d(e,"n",(function(){return h})),a.d(e,"l",(function(){return g})),a.d(e,"p",(function(){return v})),a.d(e,"j",(function(){return y})),a.d(e,"q",(function(){return j})),a.d(e,"o",(function(){return O})),a.d(e,"h",(function(){return _})),a.d(e,"f",(function(){return w})),a.d(e,"i",(function(){return k})),a.d(e,"g",(function(){return x})),a.d(e,"z",(function(){return S})),a.d(e,"x",(function(){return L})),a.d(e,"A",(function(){return C})),a.d(e,"y",(function(){return $})),a.d(e,"O",(function(){return D})),a.d(e,"D",(function(){return F})),a.d(e,"B",(function(){return V})),a.d(e,"E",(function(){return W})),a.d(e,"C",(function(){return z})),a.d(e,"L",(function(){return B})),a.d(e,"J",(function(){return U})),a.d(e,"M",(function(){return A})),a.d(e,"K",(function(){return E})),a.d(e,"c",(function(){return P})),a.d(e,"a",(function(){return q})),a.d(e,"d",(function(){return G})),a.d(e,"b",(function(){return I})),a.d(e,"w",(function(){return J})),a.d(e,"v",(function(){return K}));var n=a("b775"),r="http://api.qingxinyoupin.com/upload";function o(t){return Object(n["a"])({url:"customer/a",method:"get",params:t})}function i(t,e){return Object(n["a"])({url:"customer/getPaging/".concat(t.page,"/").concat(t.size),method:"get",params:e})}function l(t){return Object(n["a"])({url:"customer",method:"post",data:t})}function c(t){return Object(n["a"])({url:"customer",method:"put",data:t})}function u(t){return Object(n["a"])({url:"customer",method:"delete",params:t})}function s(t){return Object(n["a"])({url:"store",method:"get",params:t})}function d(t){return Object(n["a"])({url:"store",method:"post",data:t})}function f(t){return Object(n["a"])({url:"store",method:"put",data:t})}function m(t){return Object(n["a"])({url:"store",method:"delete",params:t})}function p(t){return Object(n["a"])({url:"comboClassify",method:"get",params:t})}function b(t){return Object(n["a"])({url:"comboClassify",method:"post",data:t})}function h(t){return Object(n["a"])({url:"comboClassify",method:"put",data:t})}function g(t){return Object(n["a"])({url:"comboClassify",method:"delete",params:t})}function v(t){return Object(n["a"])({url:"combo",method:"get",params:t})}function y(t){return Object(n["a"])({url:"combo",method:"post",data:t})}function j(t){return Object(n["a"])({url:"combo",method:"put",data:t})}function O(t){return Object(n["a"])({url:"combo",method:"delete",params:t})}function _(t){return Object(n["a"])({url:"case",method:"get",params:t})}function w(t){return Object(n["a"])({url:"case",method:"post",data:t})}function k(t){return Object(n["a"])({url:"case",method:"put",data:t})}function x(t){return Object(n["a"])({url:"case",method:"delete",params:t})}function S(t){return Object(n["a"])({url:"position",method:"get",params:t})}function L(t){return Object(n["a"])({url:"position",method:"post",data:t})}function C(t){return Object(n["a"])({url:"position",method:"put",data:t})}function $(t){return Object(n["a"])({url:"position",method:"delete",params:t})}function D(t){return Object(n["a"])({url:"attendance",method:"get",params:t})}function F(t){return Object(n["a"])({url:"salary",method:"get",params:t})}function V(t){return Object(n["a"])({url:"salary",method:"post",data:t})}function W(t){return Object(n["a"])({url:"salary",method:"put",data:t})}function z(t){return Object(n["a"])({url:"salary",method:"delete",params:t})}function B(t){return Object(n["a"])({url:"staff",method:"get",params:t})}function U(t){return Object(n["a"])({url:"staff",method:"post",data:t})}function A(t){return Object(n["a"])({url:"staff",method:"put",data:t})}function E(t){return Object(n["a"])({url:"staff",method:"delete",params:t})}function P(t){return Object(n["a"])({url:"balance",method:"get",params:t})}function q(t){return Object(n["a"])({url:"balance",method:"post",data:t})}function G(t){return Object(n["a"])({url:"balance",method:"put",data:t})}function I(t){return Object(n["a"])({url:"balance",method:"delete",params:t})}function J(t){return Object(n["a"])({url:"order",method:"get",params:t})}function K(t){return Object(n["a"])({url:"log",method:"get",params:t})}},"501b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"btn"},[a("el-button",{attrs:{type:"primary"},on:{click:t.addShop}},[t._v("新建")]),t._v(" "),a("el-select",{attrs:{clearable:"",placeholder:"所属门店"},on:{change:function(e){return t.changeOrder(e)}},model:{value:t.form.store.id,callback:function(e){t.$set(t.form.store,"id",e)},expression:"form.store.id"}},t._l(t.optionsShop,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1),t._v(" "),a("el-input",{staticStyle:{width:"180px","margin-left":"50px"},attrs:{placeholder:"请输入套餐名称",clearable:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.getList()}}},[t._v("搜索")])],1),t._v(" "),a("div",{staticClass:"tablee"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{align:"center",prop:"id",label:"ID",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"name",label:"套餐名称",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"price",label:"套餐价格",width:"70"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"classify.paper",label:"套餐小介绍"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"store.name",label:"所属门店"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"classify.name",label:"所属分类"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"cover",label:"封面图",width:"200"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{staticStyle:{width:"50px",height:"50px"},attrs:{src:t.row.cover,alt:""}})]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"banner",label:"套餐轮播图",width:"400"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.banner.split(","),(function(t){return a("img",{key:t.id,staticStyle:{width:"50px",height:"50px"},attrs:{src:t,alt:""}})}))}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",icon:"el-icon-document-copy",type:"primary"},on:{click:function(a){return t.getEditData(e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{size:"mini",icon:"el-icon-user",type:"danger"},on:{click:function(a){return t.delData(e.row)}}},[t._v("删除")])]}}])})],1)],1),t._v(" "),a("el-dialog",{attrs:{title:t.title1,visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{model:t.form}},[a("el-form-item",{attrs:{label:"套餐名称","label-width":t.formLabelWidth}},[a("el-input",{staticStyle:{width:"400px"},attrs:{placeholder:"请输入套餐名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"套餐价格","label-width":t.formLabelWidth}},[a("el-input",{staticStyle:{width:"400px"},attrs:{placeholder:"请输入套餐价格"},model:{value:t.form.price,callback:function(e){t.$set(t.form,"price",e)},expression:"form.price"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"套餐小介绍","label-width":t.formLabelWidth}},[a("el-input",{staticStyle:{width:"400px"},attrs:{placeholder:"请输入套餐小介绍"},model:{value:t.form.classify.paper,callback:function(e){t.$set(t.form.classify,"paper",e)},expression:"form.classify.paper"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"所属门店","label-width":t.formLabelWidth}},[a("el-select",{attrs:{clearable:"",placeholder:"选择门店"},model:{value:t.form.store.id,callback:function(e){t.$set(t.form.store,"id",e)},expression:"form.store.id"}},t._l(t.optionsShop,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"所属分类","label-width":t.formLabelWidth}},[a("el-select",{attrs:{clearable:"",placeholder:"选择分类"},model:{value:t.form.classify.id,callback:function(e){t.$set(t.form.classify,"id",e)},expression:"form.classify.id"}},t._l(t.optionsCombo,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"封面图片","label-width":t.formLabelWidth}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{headers:t.headers,action:t.uploadPath,"show-file-list":!1,"on-success":t.uploadUrl,"before-upload":t.checkFileSize,accept:".jpg, .jpeg, .png"}},[t.form.cover?a("img",{staticClass:"avatar",attrs:{src:t.form.cover}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"}),t._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件，且不超过1024kb")])])],1),t._v(" "),a("el-form-item",{attrs:{label:"轮播图片","label-width":t.formLabelWidth}},[a("el-upload",{attrs:{action:t.uploadPath,headers:t.headers,"on-exceed":t.uploadOverrun1,"on-success":t.handleGalleryUrl1,"on-remove":t.handleRemove1,multiple:"",accept:".jpg, .jpeg, .png, .gif","list-type":"picture-card","file-list":t.form.banner1}},[a("i",{staticClass:"el-icon-plus"})])],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.btnLoading},on:{click:t.addSubmit}},[t._v("确 定")])],1)],1)],1)},r=[],o=(a("7f7f"),a("4ec3")),i=a("5f87"),l={name:"Combo",data:function(){return{dialogImageUrl:"",dialogVisible:!1,disabled:!1,options:[{value:"选项1",label:"门店1"},{value:"选项2",label:"门店2"}],options2:[{value:"选项1",label:"状态1"},{value:"选项2",label:"状态2"}],options3:[{value:"选项1",label:"分类1"},{value:"选项2",label:"分类2"}],uploadPath:o["N"],value:"",value1:"",value2:"",value3:"",btnLoading:!1,name:"",tableData:[],optionsShop:[],optionsCombo:[],dialogFormVisible:!1,form:{classify:{id:"",name:"",paper:""},store:{id:"",name:""},price:"",cover:"",banner1:[],banner:"",name:""},formLabelWidth:"120px",title1:""}},computed:{headers:function(){return{token:Object(i["a"])()}}},created:function(){this.getList(),this.getShopList(),this.getComboList()},methods:{uploadOverrun1:function(){this.$message({type:"error",message:"上传文件个数超出限制!最多上传5张图片!"})},handleGalleryUrl1:function(t,e,a){0===t.code&&(this.form.banner1.push(t.data),this.form.banner=this.form.banner1.join(","))},handleRemove1:function(t,e){for(var a=0;a<this.form.banner.length;a++){var n;n=void 0===t.response?t.url:t.response.data.url,this.form.banner[a].url===n&&this.form.banner.splice(a,1)}},uploadUrl:function(t){console.log(t),this.form.cover=t.data},checkFileSize:function(t){return!(t.size>1048576)||(this.$message.error("".concat(t.name,"文件大于1024KB，请选择小于1024KB大小的图片")),!1)},changeOrder:function(t){console.log(t),""!==t?this.tableData=this.tableDataAll.filter((function(e){return e.store.id===t})):""===t&&(this.tableData=this.tableDataAll)},getShopList:function(){var t=this;Object(o["H"])().then((function(e){t.optionsShop=e.data.data})).catch((function(){t.optionsShop=[]}))},getComboList:function(){var t=this;Object(o["m"])().then((function(e){t.optionsCombo=e.data.data})).catch((function(){t.optionsCombo=[]}))},getList:function(){var t=this;Object(o["p"])({name:this.name}).then((function(e){t.tableData=e.data.data,t.tableDataAll=e.data.data})).catch((function(){t.tableData=[]}))},addShop:function(){this.dialogFormVisible=!0,this.title1="新建分类",this.form.name="",this.form.price="",this.form.classify.paper="",this.form.value="",this.form.value3="",this.form.cover="",this.form.classify.id="",this.form.store.id="",this.form.store.name="",this.form.banner=""},getEditData:function(t){this.dialogFormVisible=!0,this.title1="编辑分类",this.form.name=t.name,this.form.price=t.price,this.form.classify.paper=t.classify.paper,this.form.classify.id=t.classify.id,this.form.value=t.value,this.form.value3=t.value3,this.form.cover=t.cover,this.form.id=t.id,this.form.store.id=t.store.id,this.form.banner=t.banner,console.log(this.form.banner)},addSubmit:function(){var t=this;this.form.id?Object(o["q"])(this.form).then((function(){t.$notify.success({title:"成功",message:"套餐修改成功"}),t.dialogFormVisible=!1,t.getList()})).catch((function(e){t.$notify.error({title:"失败",message:e.data.message})})):Object(o["j"])(this.form).then((function(){t.$notify.success({title:"成功",message:"套餐添加成功"}),t.dialogFormVisible=!1,t.getList()})).catch((function(e){t.$notify.error({title:"失败",message:e.data.message})}))},delData:function(t){var e=this;this.$confirm("此操作将永久删除该套餐, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var a={id:t.id};Object(o["o"])(a).then((function(t){e.$notify.success({title:"成功",message:"套餐删除成功"}),e.getList()})).catch((function(t){e.$notify.error({title:"失败",message:t.data.message})}))})).catch((function(){e.$notify.error({title:"取消",message:"已取消删除"})}))}}},c=l,u=(a("6b13"),a("2877")),s=Object(u["a"])(c,n,r,!1,null,"2cf7b748",null);e["default"]=s.exports},"6b13":function(t,e,a){"use strict";var n=a("44de"),r=a.n(n);r.a}}]);