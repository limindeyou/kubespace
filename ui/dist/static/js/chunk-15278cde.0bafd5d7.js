(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15278cde"],{"2cd6":function(a,t,e){"use strict";var n=e("6766"),s=e.n(n);s.a},4402:function(a,t,e){"use strict";var n=e("60a0"),s=e.n(n);s.a},"5cfd9":function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("clusterbar",{attrs:{titleName:a.titleName,nameFunc:a.nameSearch,delFunc:a.delFunc}}),e("div",{staticClass:"dashboard-container"},a._l(a.appRow,(function(t){return e("el-row",{key:t,staticStyle:{"margin-top":"15px"},attrs:{gutter:28}},a._l(t==a.appRow?a.appCol:3,(function(n){return e("el-col",{key:3*t+n,attrs:{span:8}},[e("a",{on:{click:function(e){a.installClick(a.apps[a.index(t,n)])}}},[e("el-card",{staticStyle:{height:"160px"},attrs:{shadow:"hover"}},[e("el-row",[e("el-col",{attrs:{span:8}},[e("div",{staticClass:"img-wrapper"},[e("el-image",{attrs:{src:a.apps[a.index(t,n)].icon}},[e("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[e("span",{staticStyle:{"font-size":"32px","padding-left":"15px"}},[a._v(a._s(a.apps[a.index(t,n)].name[0].toUpperCase()))])])])],1)]),e("el-col",{attrs:{span:16}},[e("div",{staticStyle:{"font-size":"20px"}},[a._v(" "+a._s(a.apps[a.index(t,n)].name)+" ")]),e("div",{staticStyle:{"margin-top":"10px"}},[e("span",{staticStyle:{"font-size":"13px",color:"#636a6e!important"}},[a._v("Chart版本: ")]),e("span",{staticStyle:{"font-size":"14px"}},[a._v(a._s(a.apps[a.index(t,n)].chart_version))])]),e("div",{staticStyle:{"margin-top":"3px"}},[e("span",{staticStyle:{"font-size":"13px",color:"#636a6e!important"}},[a._v("App版本: ")]),e("span",{staticStyle:{"font-size":"14px"}},[a._v(a._s(a.apps[a.index(t,n)].app_version))])])])],1),e("el-row",{staticStyle:{"margin-top":"14px"}},[e("el-col",{attrs:{span:24}},[e("span",{staticStyle:{"font-size":"14px",color:"#636a6e!important","margin-top":"5px"}},[a._v(" "+a._s(a.apps[a.index(t,n)].description)+" ")])])],1)],1)],1)])})),1)})),1),e("el-dialog",{attrs:{title:"安装"+a.installApp.name,visible:a.installDialog,"close-on-click-modal":!1,width:"60%",top:"45px"},on:{"update:visible":function(t){a.installDialog=t},close:function(t){a.installApp={},a.installDialog=!1,a.yamlValue=""}}},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:a.installLoading,expression:"installLoading"}]},[e("el-form",{ref:"form",attrs:{inline:!0,model:a.installData,"label-width":"80px",size:"small"}},[e("el-form-item",{attrs:{label:"发布名称"}},[e("el-input",{model:{value:a.installData.name,callback:function(t){a.$set(a.installData,"name",t)},expression:"installData.name"}})],1),e("el-form-item",{attrs:{label:"命名空间"}},[e("el-select",{attrs:{placeholder:""},model:{value:a.installData.namespace,callback:function(t){a.$set(a.installData,"namespace",t)},expression:"installData.namespace"}},a._l(a.namespaces,(function(a){return e("el-option",{key:a.name,attrs:{label:a.name,value:a.name}})})),1)],1)],1),a.installDialog?e("yaml",{attrs:{loading:a.yamlLoading},model:{value:a.yamlValue,callback:function(t){a.yamlValue=t},expression:"yamlValue"}}):a._e(),e("div",{staticStyle:{padding:"10px 0px 20px","text-align":"right"}},[e("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){a.installDialog=!1}}},[a._v("取 消")]),e("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){return a.install()}}},[a._v("确 定")])],1)],1)])],1)},s=[],i=(e("caad"),e("c975"),e("b0c0"),e("d3b7"),e("2532"),e("ddb0"),e("b85c")),l=e("61b2"),r=e("b562"),o=e("aad4"),c=e("5c96"),p=e("fa7d"),u=e("651e"),m={name:"Application",components:{Clusterbar:l["a"],Yaml:l["f"]},data:function(){return{installDialog:!1,yamlName:"",yamlValue:"",yamlLoading:!0,cellStyle:{border:0},titleName:["Applications"],maxHeight:window.innerHeight-150,loading:!0,originApps:[],installApp:{},installData:{name:"",namespace:"default"},search_ns:[],search_name:"",namespaces:[],delFunc:void 0,installLoading:!1}},created:function(){this.fetchData(),this.fetchNamespace()},mounted:function(){var a=this;window.onresize=function(){return function(){var t=window.innerHeight-150;a.maxHeight=t}()}},watch:{},computed:{apps:function(){var a,t=[],e=Object(i["a"])(this.originApps);try{for(e.s();!(a=e.n()).done;){var n=a.value;this.search_ns.length>0&&this.search_ns.indexOf(n.namespace)<0||(this.search_name&&!n.name.includes(this.search_name)||t.push(n))}}catch(s){e.e(s)}finally{e.f()}return t},appRow:function(){return this.apps?this.apps.length%3>0?parseInt(this.apps.length/3)+1:parseInt(this.apps.length/3):0},appCol:function(){return this.apps?this.apps.length%3>0?this.apps.length%3:3:0}},methods:{dateFormat:p["a"],index:function(a,t){return 3*(a-1)+t-1},fetchData:function(){var a=this;this.loading=!0,this.originApps=[];var t=this.$store.state.cluster;t?Object(r["e"])().then((function(t){a.loading=!1,a.originApps=t.data||[],a.originApps.sort((function(a,t){return a.name>t.name?1:-1}))})).catch((function(){a.loading=!1})):(this.loading=!1,c["Message"].error("获取集群异常，请刷新重试"))},nsSearch:function(a){this.search_ns=[];var t,e=Object(i["a"])(a);try{for(e.s();!(t=e.n()).done;){var n=t.value;this.search_ns.push(n)}}catch(s){e.e(s)}finally{e.f()}},nameSearch:function(a){this.search_name=a},installClick:function(a){this.installApp=a,this.installDialog=!0,this.installData.name=a.name,this.getAppValue(a.name,a.chart_version)},getAppValue:function(a,t){var e=this;a?(this.yamlValue="",this.yamlDialog=!0,this.yamlLoading=!0,Object(r["c"])(a,t).then((function(a){e.yamlLoading=!1,e.yamlValue=a.data.values})).catch((function(){e.yamlLoading=!1}))):c["Message"].error("获取应用名称参数异常，请刷新重试")},install:function(){var a=this,t=this.$store.state.cluster;if(t)if(this.installData.name)if(this.installData.namespace){try{var e=u.load(this.yamlValue,"utf8");console.log(e)}catch(s){return console.log(s),void c["Message"].error("解析values失败: "+s)}var n={name:this.installApp.name,namespace:this.installData.namespace,chart_version:this.installApp.chart_version,release_name:this.installData.name,values:e};this.installLoading=!0,Object(r["a"])(t,n).then((function(){c["Message"].success("安装成功"),a.installLoading=!1})).catch((function(t){console.log(t),a.installLoading=!1}))}else c["Message"].error("请选择命名空间");else c["Message"].error("请输入发布名称");else c["Message"].error("获取集群参数异常，请刷新重试")},createFunc:function(){},fetchNamespace:function(){var a=this;this.namespaces=[];var t=this.$store.state.cluster;t?Object(o["b"])(t).then((function(t){a.namespaces=t.data,a.namespaces.sort((function(a,t){return a.name>t.name?1:-1}))})).catch((function(a){console.log(a)})):c["Message"].error("获取集群异常，请刷新重试")}}},h=m,d=(e("2cd6"),e("4402"),e("2877")),f=Object(d["a"])(h,n,s,!1,null,"5dfe4c4e",null);t["default"]=f.exports},"60a0":function(a,t,e){},6766:function(a,t,e){},b562:function(a,t,e){"use strict";e.d(t,"f",(function(){return s})),e.d(t,"d",(function(){return i})),e.d(t,"e",(function(){return l})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return c}));var n=e("b775");function s(a){return Object(n["a"])({url:"helm/release/".concat(a),method:"get"})}function i(a,t){return Object(n["a"])({url:"helm/release/".concat(a,"/get"),method:"get",params:t})}function l(){return Object(n["a"])({url:"helm/app/list",method:"get"})}function r(a,t){return Object(n["a"])({url:"helm/app/get",method:"get",params:{name:a,chart_version:t}})}function o(a,t){return Object(n["a"])({url:"helm/release/".concat(a),method:"post",data:t})}function c(a,t){return Object(n["a"])({url:"helm/release/".concat(a),method:"delete",params:t})}}}]);