webpackJsonp([1],[,,,,,,,,,,,,,function(t,e,a){"use strict";a.d(e,"d",function(){return s}),a.d(e,"e",function(){return n}),a.d(e,"c",function(){return i}),a.d(e,"b",function(){return o}),a.d(e,"a",function(){return r});var s="CHANGE_MOVIES_TAB",n="FETCH_MOVIES",i="FETCH_MOVIES_QUERY",o="CLEAR_MOVIES_QUERY",r="UPDATE_MOVIE_SEARCH_STEP"},,,,,,,,,,,,,,,function(t,e,a){a(127);var s=a(3)(a(79),a(145),"data-v-3cab3bd4",null);t.exports=s.exports},,function(t,e,a){"use strict";var s=a(12),n=a.n(s),i=a(154),o=a(51),r=a.n(o),c=a(142),u=a.n(c),l=a(141),v=a.n(l),m=a(140),f=a.n(m),p=a(137),d=a.n(p),_=a(143),h=a.n(_);n.a.use(i.a),e.a=new i.a({mode:"history",routes:[{path:"/test",component:h.a},{path:"/",redirect:"/movie/home",name:"Home",component:r.a},{path:"/movie/home",name:"MovieHome",component:u.a},{path:"/movie/subject/:id",name:"MovieSubject",component:v.a},{path:"/movie/search",name:"MovieSearch",component:f.a},{path:"/about",name:"About",component:d.a},{path:"/Vdo",redirect:"/movie/home"},{path:"/vdo",redirect:"/movie/home"},{path:"/vue-douban",redirect:"/movie/home"},{path:"/douban",redirect:"/movie/home"}]})},,,,,,function(t,e,a){"use strict";function s(t){var e=t.name;return a.i(o.a)("https://miaobbs.herokuapp.com/api/avers/search",{name:e})}function n(t){return a.i(o.a)("https://miaobbs.herokuapp.com/api/avers/"+t)}function i(){return a.i(o.a)("https://miaobbs.herokuapp.com/api/avers")}a.d(e,"d",function(){return r}),e.c=s,e.a=n,e.b=i;var o=a(76),r={inTheaters:"in_theaters",comingSoon:"coming_soon",avers:"avers"}},,,,,,,,,,,,,,,function(t,e,a){var s=a(3)(null,a(151),null,null);t.exports=s.exports},function(t,e,a){"use strict";var s=a(18),n=a(12),i=a.n(n),o=a(77);i.a.use(s.b),e.a=new s.b.Store({modules:{movie:o.a}})},function(t,e){},function(t,e){},,function(t,e,a){a(129);var s=a(3)(a(78),a(147),null,null);t.exports=s.exports},,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(12),n=a.n(s),i=a(55),o=a.n(i),r=a(53),c=(a.n(r),a(54)),u=(a.n(c),a(56)),l=a.n(u),v=a(30),m=a(52);n.a.use(o.a),n.a.filter("arr2string",function(t){return t.join(" / ")}),n.a.filter("fixNum",function(t){return t?Number(t).toFixed(1):"暂无评分"}),window.t=new n.a({el:"#app",store:m.a,router:v.a,template:"<App/>",components:{App:l.a}})},function(t,e,a){"use strict";var s=a(87),n=a.n(s),i=a(57),o=a.n(i);e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new n.a(function(a,s){o.a.get(t,{params:e}).then(function(t){a(t.data)}).catch(function(t){return s(t)})})}},function(t,e,a){"use strict";var s,n,i,o=a(88),r=a.n(o),c=a(13),u=a(36),l=(s={},r()(s,c.e,function(t,e){t.movies[e.type].subjects=t.movies[e.type].subjects.concat(e.subjects),t.movies[e.type].total=t.movies[e.type].subjects.length}),r()(s,c.c,function(t,e){console.log("111"),t.movieQuery.subjects=e.data.data,console.log(t.movieQuery.subjects.length),console.log("222"),t.movieQuery.total=t.movieQuery.subjects.length,console.log("333")}),r()(s,c.b,function(t){t.movieQuery.total=0,console.log("444"),t.movieQuery.subjects=[],console.log("555")}),r()(s,c.d,function(t,e){t.tab=e}),r()(s,c.a,function(t,e){t.searchStep=e}),s),v=(n={},r()(n,c.e,function(t,e){u.b().then(function(a){return t.commit(c.e,{type:e.type,subjects:a.data})})}),r()(n,c.c,function(t,e){u.c({name:e.name}).then(function(a){return t.commit(c.c,{data:a,name:e.name})})}),r()(n,c.b,function(t){t.commit(c.b)}),r()(n,c.d,function(t,e){t.commit(c.d,e)}),r()(n,c.a,function(t,e){t.commit(c.a,e)}),n);e.a={state:{movies:(i={},r()(i,u.d.inTheaters,{total:0,subjects:[],describe:""}),r()(i,u.d.comingSoon,{total:0,subjects:[],describe:""}),i),movieQuery:{total:0,subjects:[],describe:"",q:""},tab:"in_theaters",searchStep:1},mutations:l,actions:v}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(51),n=a.n(s),i=a(138),o=a.n(i);e.default={name:"app",components:{Home:n.a,Copyright:o.a}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["rating"],computed:{ratingObj:function(){var t=Math.round(this.rating),e=Math.floor(t/2),a=t%2,s=5-e-a;return console.log(this.rating,e,a,s),{star:e,half:a,left:s}}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{back:function(){this.$router.go(-1)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(18),n=a(28),i=a.n(n),o=a(13);e.default={name:"aversList",components:{Star:i.a},data:function(){return{}},props:["tabName"],computed:a.i(s.a)({subjects:function(t){return t.movie.movies[this.tabName].subjects}}),mounted:function(){this.fetchData()},beforeUpdate:function(){console.log("[beforeUpdate], tabName: "+this.tabName),this.fetchData()},destroyed:function(){console.log("[destroyed]")},methods:{fetchData:function(){console.log("=====miao====="),console.log(this.$store.state.movie.movies[this.tabName].subjects),this.$store.state.movie.movies[this.tabName].subjects&&this.$store.state.movie.movies[this.tabName].subjects.length>0||this.$store.dispatch(o.e,{type:this.tabName})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(18),n=a(28),i=a.n(n),o=a(13);e.default={name:"movieSearch",components:{Star:i.a},data:function(){return{count:20,start:0,total:0,q:""}},computed:a.i(s.a)({subjects:function(t){return t.movie.movieQuery.subjects},text:function(t){return t.movie.movieQuery.q}}),created:function(){this.q=this.text},mounted:function(){console.log("search mounted-------"+Math.random()),this.getQuery()},watch:{$route:"getQuery"},methods:{ratingStar:function(t){var e=Math.round(t),a=Math.floor(e/2),s=e%2;return{star:a,half:s,left:5-a-s}},gotoTab:function(){this.$router.go(-this.$store.state.movie.searchStep),this.$store.dispatch(o.a,1),this.$store.dispatch(o.b)},clearText:function(){this.q=""},search:function(){console.log("q",this.q),0!==(""+this.q).length&&(this.$store.dispatch(o.a,this.$store.state.movie.searchStep+1),this.$router.push({name:"MovieSearch",query:{name:this.q}}))},getQuery:function(){this.$route.query.name&&this.$route.query.name!==this.$store.state.movie.movieQuery.name&&(console.log("dispatch..."),this.$store.dispatch(o.c,{name:this.$route.query.name}))}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(28),n=a.n(s),i=a(30),o=a(36);e.default={name:"averSubject",components:{Star:n.a},data:function(){return{movie:{}}},watch:{$route:function(t){this.setPage(t.params.id)}},mounted:function(){this.setPage(this.$route.params.id)},methods:{goBack:function(){i.a.go(-1)},setPage:function(t){var e=this;a.i(o.a)(t).then(function(t){console.log(t),e.movie=t})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(18),n=a(139),i=a.n(n),o=a(13);e.default={data:function(){return{dialog:!1,open:!1,docked:!0,value:"moive"}},components:{Card:i.a},computed:a.i(s.a)({activeTab:function(t){return t.movie.tab}}),methods:{page:function(t){"about"===t&&this.$router.push({name:"About"})},openDia:function(){this.dialog=!0},closeDia:function(){this.dialog=!1},toggle:function(t){console.log("flag",t,this),this.open=!this.open,this.docked=!t},handleTabChange:function(t){this.$store.dispatch(o.d,t)},handleActive:function(t){console.log("---------tab active-------------"+t)},gotoSearch:function(){this.$router.push({name:"MovieSearch"})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{isLoading:!0}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,a){a(131);var s=a(3)(a(80),a(149),"data-v-605fc026",null);t.exports=s.exports},function(t,e,a){a(132);var s=a(3)(null,a(150),"data-v-618651c4",null);t.exports=s.exports},function(t,e,a){a(133);var s=a(3)(a(81),a(152),"data-v-74093782",null);t.exports=s.exports},function(t,e,a){a(134);var s=a(3)(a(82),a(153),"data-v-f71df0cc",null);t.exports=s.exports},function(t,e,a){a(126);var s=a(3)(a(83),a(144),"data-v-087ff9aa",null);t.exports=s.exports},function(t,e,a){a(128);var s=a(3)(a(84),a(146),null,null);t.exports=s.exports},function(t,e,a){a(130);var s=a(3)(a(85),a(148),"data-v-46a77c25",null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{position:"relative"}},[a("mu-icon-button",{staticClass:"icon-back",attrs:{slot:"left",icon:"arrow_back"},on:{click:function(e){t.goBack()}},slot:"left"}),t._v(" "),a("div",{staticClass:"image-wrap",style:"background-image: url("+t.movie.cover+")"}),t._v(" "),a("div",{staticClass:"title-border"},[a("div",{staticClass:"title-info"},[a("div",{staticClass:"title-image"},[a("img",{attrs:{src:t.movie.cover}})]),t._v(" "),a("div",{staticClass:"title-text"},[a("p",[t._v(t._s(t.movie.av_name))])])])]),t._v(" "),a("div",{staticClass:"info"},[a("p",{staticClass:"info-content"},[a("span",{staticClass:"info-title"},[t._v("AV女优名")]),a("span",{staticClass:"info-text"},[t._v(t._s(t.movie.av_name))])]),t._v(" "),a("p",{staticClass:"info-content"},[a("span",{staticClass:"info-title"},[t._v("源氏名")]),a("span",{staticClass:"info-text"},[t._v(t._s(t.movie.name))])]),t._v(" "),a("p",{staticClass:"info-content"},[a("span",{staticClass:"info-title"},[t._v("身高")]),a("span",{staticClass:"info-text"},[t._v(t._s(t.movie.height)+"cm")])]),t._v(" "),a("p",{staticClass:"info-content"},[a("span",{staticClass:"info-title"},[t._v("胸围")]),a("span",{staticClass:"info-text"},[t._v(t._s(t.movie.size_b))])]),t._v(" "),a("p",{staticClass:"info-content"},[a("span",{staticClass:"info-title"},[t._v("腰围")]),a("span",{staticClass:"info-text"},[t._v(t._s(t.movie.size_w))])]),t._v(" "),a("p",{staticClass:"info-content"},[a("span",{staticClass:"info-title"},[t._v("臀围")]),a("span",{staticClass:"info-text"},[t._v(t._s(t.movie.size_h))])]),t._v(" "),a("p",{staticClass:"info-content"},[a("span",{staticClass:"info-title"},[t._v("在籍店舗名")]),a("span",{staticClass:"info-text"},[a("a",{attrs:{href:t.movie.shop_url,target:"_blank"}},[t._v(t._s(t.movie.shop_name))])])]),t._v(" "),a("p",{staticClass:"info-content"},[a("span",{staticClass:"info-title"},[t._v("种类")]),a("span",{staticClass:"info-text"},[t._v(t._s(t.movie.genre))])]),t._v(" "),a("p",{staticClass:"info-content"},[a("span",{staticClass:"info-title"},[t._v("区域")]),a("span",{staticClass:"info-text"},[t._v(t._s(t.movie.area))])]),t._v(" "),a("p",{staticClass:"info-content"},[a("span",{staticClass:"info-title"},[t._v("电话")]),a("span",{staticClass:"info-text"},[a("a",{attrs:{href:"tel:"+t.movie.tel}},[t._v(t._s(t.movie.tel))])])]),t._v(" "),a("p",{staticClass:"info-content"},[a("span",{staticClass:"info-title"},[t._v("女优新闻")]),a("span",{staticClass:"info-text"},[a("a",{attrs:{href:"https://cse.google.com/cse?cx=005344802183955803914%3Ascary4-gbfe&q="+t.movie.av_name+"&searchsubmit=true",target:"_blank"}},[t._v(t._s(t.movie.av_name))])])]),t._v(" "),a("p",{staticClass:"info-content"},[a("span",{staticClass:"info-title"},[t._v("女优参考片源")]),a("span",{staticClass:"info-text"},[a("a",{attrs:{href:"https://avgle.com/search/videos?search_query="+t.movie.av_name+"&search_type=videos",target:"_blank"}},[t._v(t._s(t.movie.av_name))])])]),t._v(" "),a("p",{staticClass:"info-content"},[a("span",{staticClass:"info-title"},[t._v("女优DMM")]),a("span",{staticClass:"info-text"},[a("a",{attrs:{href:"https://www.dmm.co.jp/search/=/searchstr="+t.movie.av_name+"/analyze=V1EBAVcHUAE_/n1=FgRCTw9VBA4GAVhfWkIHWw__/n2=Aw1fVhQKX1ZRAlhMUlo5QQgBU1lR/sort=ranking/",target:"_blank"}},[t._v(t._s(t.movie.av_name))])])])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"star"},[t._l(t.ratingObj.star,function(t){return a("mu-icon",{key:"star"+t,staticClass:"star-icon",attrs:{value:"star"}})}),t._v(" "),t._l(t.ratingObj.half,function(t){return a("mu-icon",{key:"half"+t,staticClass:"star-icon",attrs:{value:"star_half"}})}),t._v(" "),t._l(t.ratingObj.left,function(t){return a("mu-icon",{key:"left"+t,staticClass:"star-icon",attrs:{value:"star_border"}})})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"tab"}},[a("mu-drawer",{staticClass:"drawer",attrs:{open:t.open,docked:t.docked},on:{close:function(e){t.toggle()}}},[a("div",{staticClass:"drawer-pic",staticStyle:{background:"#474a4f",padding:"70px 0","text-align":"center",color:"#fff"}},[a("div",{staticClass:"title",staticStyle:{"font-size":"32px"}},[t._v("艾薇豆 AVdo")]),t._v(" "),a("div",{staticClass:"description",staticStyle:{"font-size":"16px",color:"#e0e0e0"}},[t._v("一个移动端Web 应用")])]),t._v(" "),a("mu-list",{attrs:{value:"movie"},on:{itemClick:function(e){t.docked||t.toggle()},change:t.page}},[a("mu-list-item",{attrs:{value:"movie",title:"约会AV女优"}},[a("mu-icon",{attrs:{slot:"left",value:"movie"},slot:"left"})],1),t._v(" "),a("mu-divider",{attrs:{shallowInset:""}})],1)],1),t._v(" "),a("mu-paper",{attrs:{zDepth:2}},[a("mu-appbar",{attrs:{title:"约会AV女优"}},[a("mu-icon-button",{attrs:{slot:"left",icon:"menu"},on:{click:function(e){t.toggle(!0)}},slot:"left"}),t._v(" "),a("mu-icon-button",{attrs:{slot:"right",icon:"search"},on:{click:function(e){t.gotoSearch()}},slot:"right"})],1),t._v(" "),a("mu-tabs",{attrs:{value:t.activeTab},on:{change:t.handleTabChange}},[a("mu-tab",{attrs:{value:"in_theaters",title:"美女一栏"},on:{active:t.handleActive}})],1)],1),t._v(" "),"in_theaters"===t.activeTab?a("div",[a("Card",{attrs:{"tab-name":"in_theaters"}})],1):t._e()],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view"),t._v(" "),a("Copyright")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loading"},[a("mu-infinite-scroll",{attrs:{loading:t.isLoading,loadingText:""}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("mu-appbar",{attrs:{title:"关于"}},[a("mu-icon-button",{attrs:{slot:"left",icon:"arrow_back"},on:{click:t.back},slot:"left"})],1),t._v(" "),a("div",[t._m(0),t._v(" "),a("mu-divider"),t._v(" "),a("mu-list",[a("mu-sub-header",[t._v("访问项目在 GitHub 上的源码")]),t._v(" "),a("mu-paper",[a("mu-list-item",{attrs:{title:"GitHub",href:"https://github.com/RalfZhang/Vdo"}},[a("mu-icon",{attrs:{slot:"left",value:"link"},slot:"left"})],1)],1),t._v(" "),a("mu-sub-header",[t._v("联系我")]),t._v(" "),a("mu-paper",[a("mu-list-item",{attrs:{title:"ralfz.zhang@gmail.com"}},[a("mu-icon",{attrs:{slot:"left",value:"email"},slot:"left"})],1),t._v(" "),a("mu-list-item",{attrs:{title:"@SBZKang",href:"http://telegram.me/SBZKang"}},[a("mu-icon",{staticClass:"icon-telegram",attrs:{slot:"left",value:" "},slot:"left"})],1)],1)],1)],1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("div",[t._v("微豆 Vdo")]),t._v(" "),a("div",{staticClass:"description",staticStyle:{"font-size":"16px"}},[t._v("一个移动端豆瓣 Web 应用")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[t._v("\n    Powered By JPdriver\n    "),a("br"),t._v("\n    ©2018\n")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap"},[a("mu-row",{staticClass:"paper-row"},t._l(t.subjects,function(e){return a("mu-col",{key:e.id,staticClass:"paper-elem",attrs:{width:"33",tablet:"25",desktop:"20"}},[a("router-link",{attrs:{to:{name:"MovieSubject",params:{id:e.id}}}},[a("mu-paper",[a("div",{staticClass:"paper-border"},[a("div",{staticClass:"paper-img",style:"background-image: url("+e.cover+")"})]),t._v(" "),a("div",{staticClass:"paper-text"},[a("p",[t._v(" "+t._s(e.shop_name)+" ")]),t._v(" "),a("p",[t._v(" "+t._s(e.av_name)+" ")])])])],1)],1)}))],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"search"}},[a("mu-paper",{staticClass:"demo-paper",attrs:{zDepth:1}},[a("mu-appbar",{staticClass:"search-bar",attrs:{title:"Title"}},[a("mu-icon-button",{staticClass:"bar-icon",attrs:{slot:"left",icon:"arrow_back"},on:{click:function(e){t.gotoTab()}},slot:"left"}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.q,expression:"q",modifiers:{trim:!0}}],staticClass:"bar-text",attrs:{autofocus:"true",underlineShow:!1,hintText:"请输入关键字"},domProps:{value:t.q},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.search(e):null},input:function(e){e.target.composing||(t.q=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),a("mu-icon-button",{staticClass:"bar-icon",attrs:{slot:"right",icon:"close"},on:{click:function(e){t.clearText()}},slot:"right"})],1)],1),t._v(" "),a("div",{staticClass:"result"},t._l(t.subjects,function(e){return a("router-link",{key:e.id,attrs:{to:{name:"MovieSubject",params:{id:e.id}}}},[a("mu-paper",{staticClass:"elem",attrs:{zDepth:1}},[a("div",{staticClass:"image",style:"background-image: url("+e.cover+")"}),t._v(" "),a("div",{staticClass:"text"},[a("div",{staticClass:"name"},[a("span",{staticClass:"title"},[t._v(t._s(e.av_name))]),t._v(" "),a("span",{staticClass:"name"},[t._v(t._s(e.name))])]),t._v(" "),a("div",{staticClass:"genres"},[t._v("种类："+t._s(e.genre))]),t._v(" "),a("div",{staticClass:"director"},[t._v("在籍店舗名："+t._s(e.shop_name))]),t._v(" "),a("div",{staticClass:"cast"},[t._v("区域："+t._s(e.area))])])])],1)}))],1)},staticRenderFns:[]}}],[75]);
//# sourceMappingURL=app.f8fad8f2b4e38bf919d1.js.map