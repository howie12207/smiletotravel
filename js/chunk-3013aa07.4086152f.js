(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3013aa07"],{"19cf":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"breadcrumb"},[e("ul",[e("i",{staticClass:"el-icon-s-home"}),t._l(t.breadcrumbList,(function(n,a){return e("li",{key:a,on:{click:function(n){return t.routeTo(a)}}},[t._v(t._s(n.name))])}))],2)])},r=[],i=(e("9911"),{name:"breadcrumb",data:function(){return{breadcrumbList:[]}},mounted:function(){this.updateList()},watch:{$route:function(){this.updateList()}},methods:{routeTo:function(t){this.breadcrumbList[t].link&&this.$router.push(this.breadcrumbList[t].link)},updateList:function(){this.breadcrumbList=this.$route.meta.breadcrumb}}}),s=i,u=(e("8170"),e("2877")),c=Object(u["a"])(s,a,r,!1,null,"1b0db2fd",null);n["a"]=c.exports},"46a7":function(t,n,e){},8170:function(t,n,e){"use strict";var a=e("46a7"),r=e.n(a);r.a},"857a":function(t,n,e){var a=e("1d80"),r=/"/g;t.exports=function(t,n,e,i){var s=String(a(t)),u="<"+n;return""!==e&&(u+=" "+e+'="'+String(i).replace(r,"&quot;")+'"'),u+">"+s+"</"+n+">"}},9911:function(t,n,e){"use strict";var a=e("23e7"),r=e("857a"),i=e("af03");a({target:"String",proto:!0,forced:i("link")},{link:function(t){return r(this,"a","href",t)}})},af03:function(t,n,e){var a=e("d039");t.exports=function(t){return a((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},c988:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"qa"},[e("div",{staticClass:"auto"},[e("breadcrumb"),e("h2",{staticClass:"title"},[t._v("常見問題 FAQs")]),e("ul",t._l(t.qa,(function(n,a){return e("li",{key:a},[e("p",{staticClass:"question"},[t._v(t._s(n.q))]),e("p",{staticClass:"answer"},[t._v(t._s(n.a))])])})),0),e("div",{staticClass:"section"},[t._v(" 有任何問題歡迎使用 Line 客服 ID:samile333，或撥專線 0905-190571。 我們將竭誠的為您解答 ! ")])],1)])},r=[],i=e("19cf"),s={name:"qa",components:{breadcrumb:i["a"]},computed:{qa:function(){return this.$store.state.qa}}},u=s,c=(e("e6d1"),e("2877")),o=Object(c["a"])(u,a,r,!1,null,"856aa314",null);n["default"]=o.exports},dbf1:function(t,n,e){},e6d1:function(t,n,e){"use strict";var a=e("dbf1"),r=e.n(a);r.a}}]);
//# sourceMappingURL=chunk-3013aa07.4086152f.js.map