(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6cf6147f"],{"12d7":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("clusterbar",{attrs:{titleName:e.titleName,nameFunc:e.nameSearch,createFunc:e.openImportAppDialog,createDisplay:"导入应用"}}),a("div",{staticClass:"dashboard-container",style:{"max-height":e.maxHeight+"px"},attrs:{"max-height":e.maxHeight}},e._l(e.appRow,(function(t){return a("el-row",{key:t,staticStyle:{"margin-top":"15px"},attrs:{gutter:28}},e._l(t==e.appRow?e.appCol:3,(function(i){return a("el-col",{key:3*t+i,attrs:{span:8}},[a("a",{on:{click:function(a){e.versionClick(e.apps[e.index(t,i)])}}},[a("el-card",{staticStyle:{height:"160px"},attrs:{shadow:""}},[a("el-row",[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"img-wrapper"},[a("el-image",{attrs:{src:"data:image/png;base64,"+e.apps[e.index(t,i)].icon,fit:"contain"}},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("span",{staticStyle:{"font-size":"45px"}},[a("i",{staticClass:"el-icon-s-grid"})])])])],1)]),a("el-col",{attrs:{span:16}},[a("div",{staticStyle:{"font-size":"20px"}},[e._v(" "+e._s(e.apps[e.index(t,i)].name)+" ")]),a("div",{staticStyle:{"margin-top":"7px"}},[a("span",{staticStyle:{"font-size":"13px",color:"#636a6e!important"}},[e._v("应用类型: ")]),a("span",{staticStyle:{"font-size":"14px"}},[e._v(e._s(e.typeMap[e.apps[e.index(t,i)].type]))])]),a("div",{staticStyle:{"margin-top":"3px"}},[a("span",{staticStyle:{"font-size":"13px",color:"#636a6e!important"}},[e._v("最新版本: ")]),a("span",{staticStyle:{"font-size":"14px"}},[e._v(e._s(e.apps[e.index(t,i)].latest_package_version)+" / "+e._s(e.apps[e.index(t,i)].latest_app_version))])])])],1),a("el-row",{staticStyle:{"margin-top":"8px"}},[a("el-col",{attrs:{span:24}},[a("el-tooltip",{staticClass:"item",attrs:{effect:"light",placement:"top-start"}},[a("div",{staticStyle:{width:"300px"},attrs:{slot:"content"},slot:"content"},[e._v(" "+e._s(e.apps[e.index(t,i)].description)+" ")]),a("span",{staticClass:"description-line"},[e._v(" "+e._s(e.apps[e.index(t,i)].description)+" ")])])],1)],1)],1)],1)])})),1)})),1),a("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.dialogLoading,expression:"dialogLoading"}],attrs:{title:"导入应用",visible:e.createFormVisible,top:"5vh",width:"70%","destroy-on-close":!0,"close-on-click-modal":!1},on:{"update:visible":function(t){e.createFormVisible=t},close:e.closeImportAppDialog}},[a("div",{staticClass:"dialogContent"},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-position":"left","label-width":"105px"}},[a("el-form-item",{attrs:{label:"charts包",prop:"",required:""}},[a("el-upload",{ref:"appUpload",staticClass:"appStoreUpload",attrs:{drag:"",limit:1,data:e.form,"on-success":e.fileResolve,"on-remove":e.fileRemove,action:"/api/v1/appstore/resolve"}},[a("i",{staticClass:"el-icon-upload"}),a("div",{staticClass:"el-upload__text"},[e._v("将charts包文件拖到此处，或"),a("em",[e._v("点击上传")])])]),e.resolveErrMsg?a("span",{staticStyle:{"line-height":"20px"}},[e._v(e._s(e.resolveErrMsg))]):e._e()],1),e.form.name?a("el-form-item",{staticStyle:{"margin-top":"-10px"},attrs:{label:"应用名称",prop:""}},[a("div",{attrs:{slot:"label"},slot:"label"},[a("div",{staticClass:"app-version-img-wrapper",staticStyle:{"margin-left":"10px"}},[a("el-image",{attrs:{src:e.form.icon,fit:"contain"}},[a("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[a("span",{staticStyle:{"font-size":"32px"}},[a("i",{staticClass:"el-icon-s-grid"})])])])],1)]),a("el-upload",{ref:"iconUpload",staticClass:"upload-demo",staticStyle:{"margin-top":"5px"},attrs:{action:"/api/v1/appstore/resolve","on-change":e.handlePictureCardPreview,"auto-upload":!1,"show-file-list":!1}},[a("el-button",{staticStyle:{"border-radius":"0px"},attrs:{size:"small",type:"primary"}},[e._v("上传应用图标")])],1)],1):e._e(),e.form.name?a("el-form-item",{staticStyle:{"margin-top":"0px"},attrs:{label:"应用名称",prop:"",required:""}},[a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入应用名称",size:"small"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1):e._e(),e.form.name?a("el-form-item",{staticStyle:{"margin-top":"0px"},attrs:{label:"chart版本",prop:"",required:""}},[e._v(" "+e._s(e.form.package_version)+" ")]):e._e(),e.form.name?a("el-form-item",{staticStyle:{"margin-top":"0px"},attrs:{label:"app版本",prop:"",required:""}},[e._v(" "+e._s(e.form.app_version)+" ")]):e._e(),e.form.name?a("el-form-item",{staticStyle:{"margin-top":"0px"},attrs:{label:"应用类型",prop:"secret_type",required:""}},[a("el-radio-group",{attrs:{name:"middleware",size:"small"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[a("el-radio-button",{attrs:{label:"middleware"}},[e._v("中间件")]),a("el-radio-button",{attrs:{label:"component"}},[e._v("集群组件")]),a("el-radio-button",{attrs:{label:"ordinary_app"}},[e._v("普通应用")])],1)],1):e._e(),e.form.name?a("el-form-item",{staticStyle:{"margin-top":"0px"},attrs:{label:"应用描述",prop:"",required:""}},[a("el-input",{attrs:{type:"textarea",autocomplete:"off",placeholder:"请输入应用描述",size:"small"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1):e._e(),e.form.name?a("el-form-item",{staticStyle:{"margin-top":"0px"},attrs:{label:"版本说明",prop:"",required:""}},[a("el-input",{attrs:{type:"textarea",autocomplete:"off",placeholder:"请输入应用版本说明",size:"small"},model:{value:e.form.version_description,callback:function(t){e.$set(e.form,"version_description",t)},expression:"form.version_description"}})],1):e._e()],1)],1),a("div",{staticClass:"dialogFooter",staticStyle:{"margin-top":"0px"},attrs:{slot:"footer"},slot:"footer"},[a("el-button",{staticStyle:{"margin-right":"20px"},on:{click:function(t){e.createFormVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.handleImportApp}},[e._v("导 入")])],1)])],1)},r=[],o=(a("a4d3"),a("e01a"),a("caad"),a("c975"),a("b0c0"),a("2532"),a("b85c")),s=a("61b2"),n=a("4bff"),l=a("5c96"),p={name:"AppStore",components:{Clusterbar:s["a"]},data:function(){return{cellStyle:{border:0},titleName:["应用商店"],maxHeight:window.innerHeight-135,loading:!0,search_name:"",originApps:[],dialogLoading:!1,typeMap:{middleware:"中间件",component:"集群组件",ordinary_app:"普通应用"},createFormVisible:!1,resolveErrMsg:"",form:{icon:""},rules:{}}},created:function(){this.fetchData()},mounted:function(){var e=this;window.onresize=function(){return function(){var t=window.innerHeight-135;e.maxHeight=t}()}},watch:{},computed:{apps:function(){var e,t=[],a=Object(o["a"])(this.originApps);try{for(a.s();!(e=a.n()).done;){var i=e.value;this.search_name&&!i.name.includes(this.search_name)||t.push(i)}}catch(r){a.e(r)}finally{a.f()}return t},appRow:function(){return this.apps?this.apps.length%3>0?parseInt(this.apps.length/3)+1:parseInt(this.apps.length/3):0},appCol:function(){return this.apps?this.apps.length%3>0?this.apps.length%3:3:0}},methods:{index:function(e,t){return 3*(e-1)+t-1},fetchData:function(){var e=this;this.loading=!0,this.originApps=[],Object(n["d"])().then((function(t){e.loading=!1;var a=t.data||[];a.sort((function(e,t){return e.name>t.name?1:-1})),e.$set(e,"originApps",a)})).catch((function(){e.loading=!1}))},nameSearch:function(e){this.search_name=e},versionClick:function(e){this.$router.push({name:"appstoreVersions",params:{appId:e.id}})},openImportAppDialog:function(){this.form={icon:""},this.createFormVisible=!0},closeImportAppDialog:function(){this.resolveErrMsg=""},handleImportApp:function(){var e=this,t=this.$refs.appUpload;if(0!=t.uploadFiles.length)if(this.form.name)if(this.form.description)if(this.form.version_description)if(this.form.type){var a=new FormData;a.append("file",t.uploadFiles[0].raw),a.append("name",this.form.name),a.append("package_version",this.form.package_version),a.append("app_version",this.form.app_version),a.append("description",this.form.description),a.append("version_description",this.form.version_description),a.append("type",this.form.type),this.form.iconFile&&a.append("icon",this.form.iconFile),this.dialogLoading=!0,Object(n["a"])(a).then((function(t){e.dialogLoading=!1,l["Message"].success("导入应用成功"),e.createFormVisible=!1,e.fetchData()})).catch((function(){e.dialogLoading=!1}))}else l["Message"].error("请选择应用类型");else l["Message"].error("请输入应用版本说明");else l["Message"].error("请输入应用描述");else l["Message"].error("请输入应用名称");else l["Message"].error("请上传charts包")},fileResolve:function(e,t,a){if(this.resolveErrMsg="","Success"!=e.code)t.status="error",this.resolveErrMsg=e.msg,l["Message"].error(e.msg),this.$refs.appUpload.clearFiles();else{var i=e.data;this.form={icon:this.form.icon,name:i.package_name,package_version:i.package_version,app_version:i.app_version,description:i.description,version_description:"",type:"middleware"}}},fileRemove:function(e){this.form={icon:""}},handlePictureCardPreview:function(e){if(this.$refs.iconUpload.clearFiles(),!e.raw.type||e.raw.type.indexOf("image")<0)l["Message"].error("请选择图片类型文件");else{var t=this,a=new FileReader;a.readAsDataURL(e.raw),a.onload=function(a){t.$set(t.form,"icon",this.result),t.form.iconFile=e.raw}}}}},c=p,m=(a("54d1"),a("b24c"),a("2877")),d=Object(m["a"])(c,i,r,!1,null,"66fc2442",null);t["default"]=d.exports},"4bff":function(e,t,a){"use strict";a.d(t,"d",(function(){return r})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return n}));a("99af");var i=a("b775");function r(e){return Object(i["a"])({url:"appstore",method:"get",params:e})}function o(e,t){return Object(i["a"])({url:"appstore/".concat(e),method:"get",params:t})}function s(e){return Object(i["a"])({url:"appstore/create",method:"post",data:e})}function n(e,t){return Object(i["a"])({url:"appstore/".concat(e,"/").concat(t),method:"delete"})}},"54d1":function(e,t,a){"use strict";var i=a("74f3"),r=a.n(i);r.a},"74f3":function(e,t,a){},b24c:function(e,t,a){"use strict";var i=a("ff3f"),r=a.n(i);r.a},ff3f:function(e,t,a){}}]);