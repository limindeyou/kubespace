(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1145001c"],{"0357":function(e,t,a){"use strict";var l=a("84dd"),o=a.n(l);o.a},"631b":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("clusterbar",{attrs:{titleName:e.titleName,nameFunc:e.nameSearch,createFunc:e.createUserDialog,createDisplay:"创建用户"}}),a("div",{ref:"tableCot",staticClass:"dashboard-container"},[a("el-table",{ref:"multipleTable",staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.userData,"cell-style":e.cellStyle,"default-sort":{prop:"name"},"tooltip-effect":"dark"}},[a("el-table-column",{attrs:{type:"selection",width:"45"}}),a("el-table-column",{attrs:{prop:"name",label:"用户名","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"email",label:"邮箱","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.email?t.row.email:"—")+" ")]}}])}),a("el-table-column",{attrs:{prop:"roles",label:"角色","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.roles,(function(t){return a("span",{key:t,staticClass:"back-class"},[e._v(" "+e._s(t)+" ")])}))}}])}),a("el-table-column",{attrs:{prop:"status",label:"状态","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("filterStatus")(t.row.status))+" ")]}}])}),a("el-table-column",{attrs:{prop:"last_login",label:"上次登录时间","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return["admin"!=t.row.name?a("el-dropdown",{attrs:{size:"medium"}},[a("el-link",{attrs:{underline:!1}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em"},attrs:{"icon-class":"operate"}})],1),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e.$updatePerm()?a("el-dropdown-item",{nativeOn:{click:function(a){a.preventDefault(),e.createUserFormVisible=!0,e.updateUserVisible=!0,e.form={name:t.row.name,password:"",email:t.row.email,roles:t.row.roles}}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"edit"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("修改")])],1):e._e(),e.$deletePerm()?a("el-dropdown-item",{nativeOn:{click:function(a){return a.preventDefault(),e.deleteUsers([{name:t.row.name}])}}},[a("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"delete"}}),a("span",{staticStyle:{"margin-left":"5px"}},[e._v("删除")])],1):e._e()],1)],1):e._e()]}}])})],1)],1),a("el-dialog",{attrs:{title:e.updateUserVisible?"用户修改":"创建用户",visible:e.createUserFormVisible},on:{"update:visible":function(t){e.createUserFormVisible=t},close:function(t){e.form={name:"",password:"",email:"",roles:[]},e.updateUserVisible=!1,e.createUserFormVisible=!1}}},[a("div",{staticStyle:{padding:"10px 20px"}},[a("el-form",{attrs:{model:e.form,"label-position":"left","label-width":"80px"}},[a("el-form-item",{attrs:{label:"用户名"}},[a("el-input",{attrs:{disabled:e.updateUserVisible,autocomplete:"off",placeholder:"请输入用户名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"密码"}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入密码","show-password":""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),a("el-form-item",{attrs:{label:"邮箱"}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入邮箱"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),a("el-form-item",{attrs:{label:"角色"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{multiple:""},model:{value:e.form.roles,callback:function(t){e.$set(e.form,"roles",t)},expression:"form.roles"}},e._l(e.roles,(function(e){return a("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})})),1)],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.createUserFormVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.updateUserVisible?e.handleUpdateUser():e.handleCreateUser()}}},[e._v("确 定")])],1)])],1)},o=[],s=(a("b0c0"),a("61b2")),r=a("c24f"),n=a("e287"),i=a("5c96"),c={name:"member",components:{Clusterbar:s["a"]},mounted:function(){var e=this;window.onresize=function(){return function(){var t=window.innerHeight-150;console.log(t),e.maxHeight=t}()},this.handleGetUser(),this.handleGetRoles()},data:function(){return{maxHeight:window.innerHeight-150,cellStyle:{border:0},titleName:["用户管理"],createUserFormVisible:!1,updateUserVisible:!1,form:{name:"",email:"",password:"",roles:[]},formLabelWidth:"120px",userData:[],search_name:"",roles:[]}},filters:{filterStatus:function(e){switch(e){case"normal":e="正常";break;case"disable":e="禁用";break}return e},filterEnable:function(e){switch(e){case"normal":e="禁用";break;case"disable":e="启用";break}return e}},methods:{handleEdit:function(e,t){console.log(e,t)},handleCreateUser:function(){var e=this;this.form.name?this.form.password?this.form.email?Object(r["b"])(this.form).then((function(){e.createUserFormVisible=!1,i["Message"].success("创建成功"),e.handleGetUser()})).catch((function(e){console.log(e)})):i["Message"].error("邮箱不能为空！"):i["Message"].error("密码不能为空！"):i["Message"].error("用户名称不能为空！")},handleUpdateUser:function(){var e=this;this.form.email?Object(r["i"])(this.form.name,this.form).then((function(){e.createUserFormVisible=!1,i["Message"].success("修改成功"),e.handleGetUser()})).catch((function(e){console.log(e)})):i["Message"].error("邮箱不能为空！")},handleGetUser:function(e){var t=this;Object(r["e"])(e).then((function(e){t.userData=e.data}))},handleGetRoles:function(){var e=this;Object(n["f"])().then((function(t){e.roles=t.data,e.roles.sort((function(e,t){return e.name>t.name?1:-1}))}))},handleEnableUser:function(e,t){var a=this;console.log(e,status),this.$confirm("此操作将禁用该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(r["i"])(e,{status:"normal"==t?"disable":"normal"}).then((function(e){console.log(e),a.$message({type:"success",message:"修改成功!"}),a.handleGetUser()}))}))},deleteUsers:function(e){var t=this;e.length<=0?i["Message"].error("请选择要删除的用户"):Object(r["c"])(e).then((function(){t.handleGetUser()})).catch((function(e){console.log(e)}))},nameSearch:function(e){this.search_name=e},createUserDialog:function(){this.createUserFormVisible=!0}}},m=c,u=(a("0357"),a("2877")),f=Object(u["a"])(m,l,o,!1,null,"48e7c556",null);t["default"]=f.exports},"84dd":function(e,t,a){}}]);