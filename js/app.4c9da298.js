(function(t){function e(e){for(var n,s,o=e[0],l=e[1],c=e[2],d=0,p=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},r=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/toolkit/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("a026"),i=a("f309");n["a"].use(i["a"]);var r=new i["a"]({}),s=a("8c4f"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-navigation-drawer",{attrs:{app:"","expand-on-hover":"","mini-variant":"","mobile-breakpoint":"0"}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-h6"},[t._v(" TRWL Toolkit ")]),a("v-list-item-subtitle",[t._v(" (Hopefully) all you need for trains ")])],1)],1),a("v-divider"),a("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(e){return a("v-list-item",{key:e.title,attrs:{link:""},on:{click:function(a){return t.$router.push(e.route)}}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1),a("v-main",[a("v-container",[a("router-view")],1)],1),a("v-footer",[a("Footer")],1)],1)},l=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{padless:""}},[a("v-col",{staticClass:"text-center"},[a("p",[t._v("Used datasets:")]),t._l(t.datasets,(function(e,n){return a("p",{key:n},[a("a",{attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.name))]),t._v(" by "),a("a",{attrs:{href:e.authorUrl,target:"_blank"}},[t._v(t._s(e.author))]),t._v(" is licensed under "),a("a",{attrs:{href:e.licenseUrl,target:"_blank"}},[t._v(t._s(e.license))])])}))],2)],1)},u=[],d={data:function(){return{datasets:[{name:"Betriebsstellenverzeichnis",url:"https://data.deutschebahn.com/dataset/data-betriebsstellen.html",author:"Deutsche Bahn AG",authorUrl:"https://deutschebahn.com",license:"CC BY 4.0",licenseUrl:"https://creativecommons.org/licenses/by/4.0/"},{name:"Haltestellendaten",url:"https://data.deutschebahn.com/dataset/data-haltestellen.html",author:"Deutsche Bahn AG",authorUrl:"https://deutschebahn.com",license:"CC BY 4.0",licenseUrl:"https://creativecommons.org/licenses/by/4.0/"}]}}},p=d,h=(a("760c"),a("2877")),f=a("6544"),v=a.n(f),m=a("62ad"),y=a("553a"),_=Object(h["a"])(p,c,u,!1,null,null,null),b=_.exports;v()(_,{VCol:m["a"],VFooter:y["a"]});var g={name:"App",components:{Footer:b},data:function(){return{items:[{title:"DS100 Lookup",icon:"mdi-text-search",route:"lookup"},{title:"Autocomplete",icon:"mdi-database-search",route:"autocomplete"}]}}},V=g,S=a("7496"),C=a("a523"),k=a("ce7e"),E=a("132d"),L=a("8860"),w=a("da13"),D=a("5d23"),q=a("34c3"),x=a("f6c4"),N=a("f774"),O=Object(h["a"])(V,o,l,!1,null,null,null),I=O.exports;v()(O,{VApp:S["a"],VContainer:C["a"],VDivider:k["a"],VFooter:y["a"],VIcon:E["a"],VList:L["a"],VListItem:w["a"],VListItemContent:D["a"],VListItemIcon:q["a"],VListItemSubtitle:D["b"],VListItemTitle:D["c"],VMain:x["a"],VNavigationDrawer:N["a"]});var A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",offset:"1",sm:"5"}},[a("h1",{staticClass:"primary--text display-3 font-weight-regular my-3"},[t._v("Stations "),a("v-btn",{attrs:{color:"primary",disabled:t.loading>0},on:{click:t.loadStations}},[t._v(" (Re-)load stations ")]),t._v("   "),t.loading>0?a("v-progress-circular",{attrs:{color:"primary",indeterminate:""}}):t._e()],1)])],1),a("v-row",[a("v-col",{attrs:{cols:"12",offset:"1",sm:"5"}},[a("v-card",[a("v-list",{staticClass:"pa-0"},[a("v-list-item",[a("v-text-field",{attrs:{autocomplete:"off",autofocus:"",clearable:"",flat:"","hide-details":"",label:"Station name / DS100 / IBNR",maxlength:"1023"},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}})],1)],1)],1),a("v-card",{staticClass:"mt-3"},[a("v-list",{staticClass:"pa-0",attrs:{dense:""}},[a("v-list-item-group",[t._l(t.typeaheadDisplay,(function(e){return[a("v-divider",{key:e.EVA_NR+e.DS100+"-divider"}),a("StationListEntry",{key:e.EVA_NR+e.DS100+"-entry",attrs:{query:t.query,station:e},on:{click:function(a){return t.selectStation(e)}}})]}))],2)],1)],1)],1),a("v-col",{attrs:{cols:"12",offset:"1",sm:"4"}},[t.selectedStation?a("StationCard",{attrs:{station:t.selectedStation}}):t._e()],1)],1)],1)},j=[],B=a("b85c"),R=(a("e9c4"),a("d81d"),a("99af"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-list-item",{key:t.station.EVA_NR,staticClass:"station-item",on:{click:function(e){return t.$emit("click",t.station)}}},[a("v-list-item-content",[a("v-list-item-title",[a("strong",[t._v(t._s(t.fieldBegin(t.station.NAME)))]),a("span",{staticClass:"font-weight-thin"},[t._v(t._s(t.fieldEnd(t.station.NAME)))])]),a("v-list-item-subtitle",{staticClass:"text--accent-3"},[a("code",[a("strong",[t._v(t._s(t.fieldBegin(t.station.DS100)))]),t._v(t._s(t.fieldEnd(t.station.DS100))+" ")]),t._v("  |  "),t.station.EVA_NR?a("span",[a("strong",[t._v(t._s(t.fieldBegin(t.station.EVA_NR)))]),t._v(t._s(t.fieldEnd(t.station.EVA_NR))+" ")]):a("span",[a("strong",[t._v(t._s(t.fieldBegin(t.station["RL100-Kurzname"])))]),t._v(t._s(t.fieldEnd(t.station["RL100-Kurzname"]))+" ")])])],1)],1)}),U=[],P={name:"StationListEntry",props:["station","query"],data:function(){return{}},methods:{fieldEnd:function(t){return t.substr(0,this.query.length).toUpperCase()===this.query.toUpperCase()?t.substr(this.query.length):t},fieldBegin:function(t){return this.fieldEnd(t)!==t?t.substr(0,this.query.length):""}}},M=P,T=Object(h["a"])(M,R,U,!1,null,"27e1676c",null),$=T.exports;v()(T,{VListItem:w["a"],VListItemContent:D["a"],VListItemSubtitle:D["b"],VListItemTitle:D["c"]});var z=a("369b"),F=a.n(z),J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-card-title",{domProps:{textContent:t._s(t.station.NAME)}}),a("v-card-subtitle"),a("v-list",[a("v-divider"),t._l(t.station,(function(e,n){return[a("v-list-item",{key:n},[a("strong",[t._v(t._s(n)+":")]),t._v(" "+t._s(e)+" ")])]}))],2)],1)},G=[],H={name:"DS100StationCard",props:["station"]},K=H,Y=a("b0af"),W=a("99d9"),Q=Object(h["a"])(K,J,G,!1,null,"55690969",null),X=Q.exports;v()(Q,{VCard:Y["a"],VCardSubtitle:W["a"],VCardTitle:W["b"],VDivider:k["a"],VList:L["a"],VListItem:w["a"]});var Z=a("5f35"),tt=a.n(Z),et={name:"Lookup",components:{StationCard:X,StationListEntry:$},data:function(){return{config:tt.a,query:"",loading:0,haltestellen:[],typeaheadDisplay:[],selectedStation:null}},watch:{query:function(){this.autocomplete()}},methods:{selectStation:function(t){this.query="",this.selectedStation=t},autocomplete:function(){if(this.query.length>1){this.typeaheadDisplay=[];var t,e=Object(B["a"])(this.haltestellen);try{for(e.s();!(t=e.n()).done;){var a=t.value;try{if(this.typeaheadDisplay.length>20)break;this.filterConditions(a)&&this.typeaheadDisplay.push(a)}catch(n){}}}catch(i){e.e(i)}finally{e.f()}}else this.typeaheadDisplay=[]},filterConditions:function(t){return!isNaN(this.query)&&this.query.length>5?t.EVA_NR.substr(0,this.query.length).toUpperCase()===this.query.toUpperCase():this.query.length>2&&t.NAME.substr(0,this.query.length).toUpperCase()===this.query.toUpperCase()||t.DS100.substr(0,this.query.length).toUpperCase()===this.query.toUpperCase()},loadStations:function(){var t=this;this.loading=2,localStorage.setItem("haltestellen",""),F.a.parse(tt.a.publicPath+"data/D_Bahnhof_2020_alle.CSV",{header:!0,download:!0,complete:function(e){t.haltestellen=e.data,localStorage.setItem("haltestellen",JSON.stringify(t.haltestellen)),t.loading=0},error:function(){t.loading=0}}),F.a.parse(tt.a.publicPath+"/data/DBNetz-Betriebsstellenverzeichnis-Stand2021-10.csv",{header:!0,download:!0,complete:function(e){var a=e.data.map((function(t){return t.NAME=t["RL100-Langname"],t.DS100=t["RL100-Code"],t}));t.haltestellen=t.haltestellen.concat(a),localStorage.setItem("haltestellen",JSON.stringify(t.haltestellen)),t.loading=0},error:function(){t.loading=0}})}},mounted:function(){var t=localStorage.getItem("haltestellen");t?this.haltestellen=JSON.parse(t):this.loadStations()}},at=et,nt=a("8336"),it=a("1baa"),rt=a("490a"),st=a("0fd9"),ot=a("8654"),lt=Object(h["a"])(at,A,j,!1,null,"79a91ccd",null),ct=lt.exports;v()(lt,{VBtn:nt["a"],VCard:Y["a"],VCol:m["a"],VContainer:C["a"],VDivider:k["a"],VList:L["a"],VListItem:w["a"],VListItemGroup:it["a"],VProgressCircular:rt["a"],VRow:st["a"],VTextField:ot["a"]}),n["a"].use(s["a"]);var ut=new s["a"]({routes:[{path:"/lookup",component:ct,name:"lookup"},{path:"*",redirect:"/lookup"}]});n["a"].config.productionTip=!1,n["a"].use(s["a"]),new n["a"]({el:"#app",vuetify:r,render:function(t){return t(I)},router:ut,data:function(){return{}}})},"5f35":function(t,e){t.exports={transpileDependencies:["vuetify"],runtimeCompiler:!0,publicPath:"/toolkit/"}},"760c":function(t,e,a){"use strict";a("c3f5")},c3f5:function(t,e,a){}});
//# sourceMappingURL=app.4c9da298.js.map