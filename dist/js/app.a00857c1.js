(function(e){function t(t){for(var i,r,u=t[0],c=t[1],o=t[2],l=0,m=[];l<u.length;l++)r=u[l],a[r]&&m.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);d&&d(t);while(m.length)m.shift()();return s.push.apply(s,o||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(i=!1)}i&&(s.splice(t--,1),e=u(u.s=n[0]))}return e}var i={},a={app:0},s=[];function r(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"19a943d4","chunk-2d0cb6c3":"dc75edbe","chunk-2d0efc70":"3c634972","chunk-2d216460":"2a32af13"}[e]+".js"}function u(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(function(t,i){n=a[e]=[t,i]});t.push(n[2]=i);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=r(e),s=function(t){c.onerror=c.onload=null,clearTimeout(o);var n=a[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,r=new Error("Loading chunk "+e+" failed.\n("+i+": "+s+")");r.type=i,r.request=s,n[1](r)}a[e]=void 0}};var o=setTimeout(function(){s({type:"timeout",target:c})},12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=i,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)u.d(n,i,function(t){return e[t]}.bind(null,i));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=o;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1bb9":function(e,t,n){"use strict";var i=n("917f"),a=n.n(i);a.a},"22d5":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("744f"),n("6c7b"),n("7514"),n("20d6"),n("1c4c"),n("6762"),n("cadf"),n("e804"),n("55dd"),n("d04f"),n("c8ce"),n("217b"),n("7f7f"),n("f400"),n("7f25"),n("536b"),n("d9ab"),n("f9ab"),n("32d7"),n("25c9"),n("9f3c"),n("042e"),n("c7c6"),n("f4ff"),n("049f"),n("7872"),n("a69f"),n("0b21"),n("6c1a"),n("c7c62"),n("84b4"),n("c5f6"),n("2e37"),n("fca0"),n("7cdf"),n("ee1d"),n("b1b1"),n("87f3"),n("9278"),n("5df2"),n("04ff"),n("f751"),n("4504"),n("fee7"),n("ffc1"),n("0d6d"),n("9986"),n("8e6e"),n("25db"),n("e4f7"),n("b9a1"),n("64d5"),n("9aea"),n("db97"),n("66c8"),n("57f0"),n("165b"),n("456d"),n("cf6a"),n("fd24"),n("8615"),n("551c"),n("097d"),n("df1b"),n("2397"),n("88ca"),n("ba16"),n("d185"),n("ebde"),n("2d34"),n("f6b3"),n("2251"),n("c698"),n("a19f"),n("9253"),n("9275"),n("3b2b"),n("3846"),n("4917"),n("a481"),n("28a5"),n("386d"),n("6b54"),n("4f7f"),n("8a81"),n("ac4d"),n("8449"),n("9c86"),n("fa83"),n("48c0"),n("a032"),n("aef6"),n("d263"),n("6c37"),n("9ec8"),n("5695"),n("2fdb"),n("d0b0"),n("5df3"),n("b54a"),n("f576"),n("ed50"),n("788d"),n("14b9"),n("f386"),n("f559"),n("1448"),n("673e"),n("242a"),n("c66f"),n("b05c"),n("34ef"),n("6aa2"),n("15ac"),n("af56"),n("b6e4"),n("9c29"),n("63d9"),n("4dda"),n("10ad"),n("c02b"),n("4795"),n("130f"),n("ac6a"),n("96cf");var i=n("2b0e"),a=n("ce5b"),s=n.n(a);n("bf40");i["default"].use(s.a,{iconfont:"mdi"});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("app-navigation"),n("v-content",{attrs:{transition:"slide-x-transition"}},[n("router-view")],1)],1)},u=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("v-navigation-drawer",{staticClass:"brown lighten-2",attrs:{app:"",dark:"","disable-resize-watcher":""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",[e._l(e.items,function(t,i){return[n("v-list-tile",{key:i},[n("v-list-tile-content",[e._v("\n                        "+e._s(t.title)+"\n                    ")])],1),n("v-divider",{key:"divider-"+i})]})],2)],1),n("v-toolbar",{attrs:{app:"",color:"brown darken-4",dark:""}},[n("v-toolbar-side-icon",{staticClass:"hidden-md-and-up",on:{click:function(t){e.drawer=!e.drawer}}}),n("v-spacer",{staticClass:"hidden-md-and-up"}),n("router-link",{attrs:{to:"/"}},[n("v-toolbar-title",{attrs:{to:"/"}},[e._v(e._s(e.appTitle))])],1),n("v-btn",{staticClass:"hidden-sm-and-down",attrs:{flat:"",to:"/menu"}},[e._v("Menu")]),n("v-spacer",{staticClass:"hidden-sm-and-down"}),e.isAuthenticated?n("div",[n("v-btn",{attrs:{flat:"",to:"/about"}},[e._v("PROFILE")]),n("v-btn",{attrs:{outline:"",color:"white"},on:{click:e.logout}},[e._v("Logout")])],1):n("div",{staticClass:"hidden-sm-and-down"},[n("v-btn",{attrs:{flat:"",to:"/sign-in"}},[e._v("SIGN IN")]),n("v-btn",{attrs:{color:"brown lighten-3",to:"/join"}},[e._v("JOIN")])],1)],1)],1)},o=[],l={name:"AppNavigation",data:function(){return{appTitle:"Meal Prep",drawer:!1,items:[{title:"Menu"},{title:"Sign In"},{title:"Join"}]}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}},methods:{logout:function(){this.$store.dispatch("userSignOut")}}},d=l,m=(n("e394"),n("2877")),p=Object(m["a"])(d,c,o,!1,null,"2dc3a4ad",null),f=p.exports,v={name:"App",components:{AppNavigation:f}},h=v,b=Object(m["a"])(h,r,u,!1,null,"2a5808d3",null),g=b.exports,_=n("8c4f"),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("home-hero"),n("home-details"),n("home-plans")],1)},w=[],E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"home-hero",staticStyle:{"max-height":"100vh"},attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"justify-center":"","align-center":"",column:"","pa-5":""}},[n("div",{staticClass:"display-4 font-weight-black white--text text-xs-center"},[e._v("\n            HEALTHY MEALS\n        ")]),n("div",{staticClass:"display-4 font-weight-black white--text text-xs-center mb-3"},[e._v("\n            FOR YOUR TABLE\n        ")]),n("div",{staticClass:"display-1 font-weight-bold white--text text-xs-center"},[e._v("\n            Finally be a foodie at home with fresh, chef-prepared meals\n            delivered daily to your door.\n        ")]),n("v-btn",{staticClass:"mt-5 brown darken-4",attrs:{fab:""}},[n("v-icon",{attrs:{large:"",color:"white"}},[e._v("expand_more")])],1)],1)],1)},y=[],q={name:"HomeHero"},A=q,C=(n("1bb9"),Object(m["a"])(A,E,y,!1,null,"6e5e211c",null)),O=C.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-layout",{attrs:{column:""}},[n("v-flex",{staticClass:"display-2 text-xs-center my-5"},[e._v("Big Title Goes Here")]),n("v-flex",[n("div",{staticClass:"headline mt-3"},[e._v("Lorem ipsum")]),n("p",{staticClass:"subheading mt-3"},[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Cras pulvinar risus quis mauris interdum, in euismod nibh\n                pretium. Etiam pulvinar tincidunt dapibus. Quisque\n                sollicitudin, mauris a consequat consectetur, turpis nisl\n                sollicitudin enim, id consectetur neque neque nec metus.\n                Pellentesque dolor nisi, vulputate quis lobortis ac,\n                tincidunt et quam. Mauris pulvinar blandit nisi nec mattis.\n                Aliquam accumsan ut sem eget efficitur. Vivamus in tortor\n                gravida eros laoreet condimentum nec vel dui. Nullam quam\n                massa, ultrices eget tincidunt a, pulvinar ac libero.\n            ")])]),n("v-flex",[n("div",{staticClass:"headline mt-3"},[e._v("Lorem ipsum")]),n("p",{staticClass:"subheading mt-3"},[e._v("\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                Cras pulvinar risus quis mauris interdum, in euismod nibh\n                pretium. Etiam pulvinar tincidunt dapibus. Quisque\n                sollicitudin, mauris a consequat consectetur, turpis nisl\n                sollicitudin enim, id consectetur neque neque nec metus.\n                Pellentesque dolor nisi, vulputate quis lobortis ac,\n                tincidunt et quam. Mauris pulvinar blandit nisi nec mattis.\n                Aliquam accumsan ut sem eget efficitur. Vivamus in tortor\n                gravida eros laoreet condimentum nec vel dui. Nullam quam\n                massa, ultrices eget tincidunt a, pulvinar ac libero.\n            ")]),n("p",{staticClass:"subheading mt-3"},[e._v("\n                Nullam nec massa eu est fringilla lobortis. Praesent in enim\n                in justo blandit varius. Cras placerat arcu in sapien\n                rhoncus aliquet. Sed interdum tortor et tincidunt\n                condimentum. Etiam consequat mi leo, in suscipit odio\n                scelerisque molestie. Nam et purus consequat, iaculis augue\n                vel, sagittis ligula. Vestibulum aliquet vulputate erat.\n                Phasellus id mauris mauris. Nunc a maximus dolor. Curabitur\n                ut vestibulum arcu. Curabitur non lacus justo. Cras varius a\n                magna in semper. Nulla eros ante, consectetur faucibus\n                sapien eu, rhoncus imperdiet dui. Sed viverra iaculis nunc,\n                id pulvinar massa egestas vitae.\n            ")]),n("p",{staticClass:"subheading mt-3"},[e._v("\n                Aenean erat metus, imperdiet eget nisl laoreet, venenatis\n                ultricies ante. In interdum ante vel dictum ullamcorper.\n                Pellentesque habitant morbi tristique senectus et netus et\n                malesuada fames ac turpis egestas. Integer sit amet gravida\n                diam. Aliquam in tempor metus. Fusce pellentesque pharetra\n                sem, et luctus justo tempor dictum. Ut feugiat est sed\n                tristique egestas. Nullam posuere a nunc in blandit.\n                Vestibulum ante ipsum primis in faucibus orci luctus et\n                ultrices posuere cubilia Curae; Suspendisse laoreet ultrices\n                eros, nec malesuada enim semper sit amet. Maecenas efficitur\n                consectetur accumsan. Etiam in aliquam turpis, ut pharetra\n                nulla. Vestibulum malesuada, nulla id elementum cursus, nibh\n                dui rhoncus felis, suscipit mattis felis enim sed ex.\n                Pellentesque scelerisque aliquam lorem, vel mattis nibh\n                tincidunt ac. Suspendisse ac nibh sit amet lacus ullamcorper\n                maximus.\n            ")])]),n("v-flex",[n("div",{staticClass:"headline mt-3"},[e._v("Lorem ipsum")]),n("p",{staticClass:"subheading mt-3"},[e._v("\n                Nullam nec massa eu est fringilla lobortis. Praesent in enim\n                in justo blandit varius. Cras placerat arcu in sapien\n                rhoncus aliquet. Sed interdum tortor et tincidunt\n                condimentum. Etiam consequat mi leo, in suscipit odio\n                scelerisque molestie. Nam et purus consequat, iaculis augue\n                vel, sagittis ligula. Vestibulum aliquet vulputate erat.\n                Phasellus id mauris mauris. Nunc a maximus dolor. Curabitur\n                ut vestibulum arcu. Curabitur non lacus justo. Cras varius a\n                magna in semper. Nulla eros ante, consectetur faucibus\n                sapien eu, rhoncus imperdiet dui. Sed viverra iaculis nunc,\n                id pulvinar massa egestas vitae.\n            ")])])],1)],1)},N=[],j={name:"HomeDetails"},k=j,P=Object(m["a"])(k,S,N,!1,null,"44bb8604",null),R=P.exports,U=n("8df8"),L={name:"Home",components:{HomeHero:O,HomeDetails:R,HomePlans:U["a"]}},I=L,T=Object(m["a"])(I,x,w,!1,null,null,null),D=T.exports,M=n("a34a"),V=n.n(M),H=n("2f62"),$=n("bc3a"),B=n.n($),G=n("8aa5"),J=n.n(G);function K(e,t,n,i,a,s,r){try{var u=e[s](r),c=u.value}catch(o){return void n(o)}u.done?t(c):Promise.resolve(c).then(i,a)}function F(e){return function(){var t=this,n=arguments;return new Promise(function(i,a){var s=e.apply(t,n);function r(e){K(s,i,a,r,u,"next",e)}function u(e){K(s,i,a,r,u,"throw",e)}r(void 0)})}}i["default"].use(H["a"]);var Q=new H["a"].Store({state:{recipes:[],apiUrl:"https://api.edamam.com/search",user:null,isAuthenticated:!1,userRecipes:[]},mutations:{setRecipes:function(e,t){e.recipes=t},setUser:function(e,t){e.user=t},setIsAuthenticated:function(e,t){e.isAuthenticated=t},setUserRecipes:function(e,t){e.userRecipes=t}},actions:{getRecipes:function(){var e=F(V.a.mark(function e(t,n){var i,a,s;return V.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return i=t.state,a=t.commit,e.prev=1,e.next=4,B.a.get("".concat(i.apiUrl),{params:{q:n,app_id:"ca1505da",app_key:"1a4fcb584e3fa30e6eb11919e7be10d6",from:0,to:9}});case 4:s=e.sent,a("setRecipes",s.data.hits),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),a("setRecipes",[]);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));function t(t,n){return e.apply(this,arguments)}return t}(),userJoin:function(e,t){var n=e.commit,i=t.email,a=t.password;J.a.auth().createUserWithEmailAndPassword(i,a).then(function(e){n("setUser",e),n("setIsAuthenticated",!0),z.push("/about")}).catch(function(){n("setUser",null),n("setIsAuthenticated",!1),z.push("/")})},userLogin:function(e,t){var n=e.commit,i=t.email,a=t.password;J.a.auth().signInWithEmailAndPassword(i,a).then(function(e){n("setUser",e),n("setIsAuthenticated",!0),z.push("/about")}).catch(function(){n("setUser",null),n("setIsAuthenticated",!1),z.push("/")})},userSignOut:function(e){var t=e.commit;J.a.auth().signOut().then(function(){t("setUser",null),t("setIsAuthenticated",!1),z.push("/")}).catch(function(){t("setUser",null),t("setIsAuthenticated",!1),z.push("/")})},addRecipe:function(e,t){var n=e.state;J.a.database().ref("users").child(n.user.user.uid).push(t.recipe.label)},getUserRecipes:function(e){var t=e.state,n=e.commit;return J.a.database().ref("users/"+t.user.user.uid).once("value",function(e){n("setUserRecipes",e.val())})}},getters:{isAuthenticated:function(e){return null!==e.user&&void 0!==e.user}}});i["default"].use(_["a"]);var Y=new _["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:D},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))},meta:{authRequired:!0}},{path:"/menu",name:"menu",component:function(){return n.e("chunk-2d0efc70").then(n.bind(null,"9a0b"))}},{path:"/sign-in",name:"signin",component:function(){return n.e("chunk-2d0cb6c3").then(n.bind(null,"4a33"))}},{path:"/join",name:"join",component:function(){return n.e("chunk-2d216460").then(n.bind(null,"c283"))}}]});Y.beforeEach(function(e,t,n){e.matched.some(function(e){return e.meta.authRequired})?Q.state.user?n():n({path:"/sign-in"}):n()});var z=Y;J.a.initializeApp(n("6761")),i["default"].config.productionTip=!1,new i["default"]({router:z,store:Q,render:function(e){return e(g)}}).$mount("#app")},6761:function(e,t){e.exports={apiKey:Object({NODE_ENV:"production",BASE_URL:"/"}).API_KEY,authDomain:Object({NODE_ENV:"production",BASE_URL:"/"}).AUTH_DOMAIN,databaseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).DATABASE_URL,projectId:Object({NODE_ENV:"production",BASE_URL:"/"}).PROJECT_ID,storageBucket:Object({NODE_ENV:"production",BASE_URL:"/"}).STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",BASE_URL:"/"}).MESSAGING_SENDER_ID}},"8df8":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{"grid-list-lg":""}},[n("v-layout",{attrs:{row:""}},[n("v-flex",{staticClass:"text-xs-center display-1 font-weight-black my-5",attrs:{xs12:""}},[e._v("Available Meal Plans")])],1),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",sm12:"",md4:""}},[n("v-card",[n("v-responsive",[n("v-img",{attrs:{src:"http://source.unsplash.com/hjCA3ecCXAQ",height:"500px"}},[n("v-container",{attrs:{"fill-height":"",fluid:""}},[n("v-layout",{attrs:{"fill-height":""}},[n("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[n("span",{staticClass:"headline white--text"},[e._v("KETO")])])],1)],1)],1)],1),n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0"},[e._v("Keto")]),n("div",[e._v("\n                            Lorem ipsum dolor sit amet, consectetur\n                            adipiscing elit. Nullam mauris felis, varius\n                            rutrum massa a, dignissim ornare dui. Cras eget\n                            velit eu dui tristique lobortis sit amet vel\n                            tellus.\n                        ")])])]),["menu"].includes(e.$route.name)?n("v-card-actions",[n("v-btn",{attrs:{outline:"",block:"",color:"green"},on:{click:function(t){return e.showRecipes("keto")}}},[e._v("Select This Plan")])],1):e._e()],1)],1),n("v-flex",{attrs:{xs12:"",sm12:"",md4:""}},[n("v-card",[n("v-responsive",[n("v-img",{attrs:{src:"http://source.unsplash.com/6S27S6pZ6o0",height:"500px"}},[n("v-container",{attrs:{"fill-height":"",fluid:""}},[n("v-layout",{attrs:{"fill-height":""}},[n("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[n("span",{staticClass:"headline white--text"},[e._v("PALEO")])])],1)],1)],1)],1),n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0"},[e._v("Paleo")]),n("div",[e._v("\n                            Lorem ipsum dolor sit amet, consectetur\n                            adipiscing elit. Nullam mauris felis, varius\n                            rutrum massa a, dignissim ornare dui. Cras eget\n                            velit eu dui tristique lobortis sit amet vel\n                            tellus.\n                        ")])])]),["menu"].includes(e.$route.name)?n("v-card-actions",[n("v-btn",{attrs:{outline:"",block:"",color:"green"},on:{click:function(t){return e.showRecipes("paleo")}}},[e._v("Select This Plan")])],1):e._e()],1)],1),n("v-flex",{attrs:{xs12:"",sm12:"",md4:""}},[n("v-card",[n("v-responsive",[n("v-img",{attrs:{src:"http://source.unsplash.com/1SPu0KT-Ejg",height:"500px"}},[n("v-container",{attrs:{"fill-height":"",fluid:""}},[n("v-layout",{attrs:{"fill-height":""}},[n("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[n("span",{staticClass:"headline white--text"},[e._v("VEGAN")])])],1)],1)],1)],1),n("v-card-title",{attrs:{"primary-title":""}},[n("div",[n("h3",{staticClass:"headline mb-0"},[e._v("Vegan")]),n("div",[e._v("\n                            Lorem ipsum dolor sit amet, consectetur\n                            adipiscing elit. Nullam mauris felis, varius\n                            rutrum massa a, dignissim ornare dui. Cras eget\n                            velit eu dui tristique lobortis sit amet vel\n                            tellus.\n                        ")])])]),["menu"].includes(e.$route.name)?n("v-card-actions",[n("v-btn",{attrs:{outline:"",block:"",color:"green"},on:{click:function(t){return e.showRecipes("vegan")}}},[e._v("Select This Plan")])],1):e._e()],1)],1)],1)],1)},a=[],s={name:"HomePlans",data:function(){return{recipes:[]}},methods:{showRecipes:function(e){this.$store.dispatch("getRecipes",e)}}},r=s,u=n("2877"),c=Object(u["a"])(r,i,a,!1,null,"12a74b44",null);t["a"]=c.exports},"917f":function(e,t,n){},e394:function(e,t,n){"use strict";var i=n("22d5"),a=n.n(i);a.a}});
//# sourceMappingURL=app.a00857c1.js.map