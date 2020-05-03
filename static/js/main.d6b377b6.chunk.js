(this["webpackJsonpcorona-app"]=this["webpackJsonpcorona-app"]||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__2XqFC",card:"Cards_card__1ak5A",infected:"Cards_infected__bZ078",recovered:"Cards_recovered__1wTBM",deaths:"Cards_deaths__1YvrA"}},208:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(72),o=a.n(c),u=(a(92),a(6)),s=a.n(u),l=a(10),i=a(73),d=a(74),m=a(84),f=a(83),p=a(225),v=a(230),h=a(226),b=a(227),E=a(13),y=a.n(E),g=a(33),x=a.n(g),C=a(34),_=a.n(C),w=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:y.a.container},r.a.createElement(p.a,{container:!0,justify:"center",spacing:3},r.a.createElement(p.a,{item:!0,component:v.a,className:_()(y.a.card,y.a.infected),xs:12,sm:8,md:3},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"primary"},"Infected"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(x.a,{start:0,end:a.value,duration:2.75,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Total number of active cases of COVID-19"))),r.a.createElement(p.a,{item:!0,component:v.a,className:_()(y.a.card,y.a.recovered),xs:12,sm:8,md:3},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textPrimary"},"Recovered"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(x.a,{start:0,end:n.value,duration:2.75,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Total number of recoveries from COVID-19"))),r.a.createElement(p.a,{item:!0,component:v.a,className:_()(y.a.card,y.a.deaths),xs:12,sm:8,md:3},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"error"},"Deaths"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(x.a,{start:0,end:c.value,duration:2.75,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Total number of deaths caused by COVID-19"))))):"Loading..."},D=a(32),O=a(35),j=a.n(O),k="https://covid19.mathdro.id/api",S=function(){var e=Object(l.a)(s.a.mark((function e(t){var a,n,r,c,o,u,l,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=k,t&&(a="".concat(k,"/countries/").concat(t)),e.prev=2,e.next=5,j.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,l=r.lastUpdate,i={confirmed:c,recovered:o,deaths:u,lastUpdate:l},e.abrupt("return",i);case 15:e.prev=15,e.t0=e.catch(2),console.log("error",e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("".concat(k,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log("error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.get("".concat(k,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log("error",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),A=a(79),P=a.n(A),M=a(31),T=function(e){var t=e.dailyData;return 0!==t.length?r.a.createElement(M.b,{data:{labels:t.map((function(e){return e.date})),datasets:[{data:t.map((function(e){return e.confirmed})),label:"Infected",borderColor:"blue",fill:!0},{data:t.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.3)",fill:!0}]}}):null},V=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=e.country;return r.a.createElement(r.a.Fragment,null,a?r.a.createElement(M.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba( 0,255,0,0.5)","rgba(0,0,255,0.5)","rgba(255,0,0,0.5)"],data:[a.value,n.value,c.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current status in ".concat(o)}}}):null)},B=function(e){var t=e.data,a=e.country,c=Object(n.useState)([]),o=Object(D.a)(c,2),u=o[0],i=o[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=i,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:P.a.container},a?r.a.createElement(V,{data:t,country:a}):r.a.createElement(T,{dailyData:u}))},U=a(229),F=a(228),J=a(81),R=a.n(J),W=function(e){var t=e.handleCountry,a=Object(n.useState)([]),c=Object(D.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,N();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),r.a.createElement(U.a,{className:R.a.formControl},r.a.createElement(F.a,{defaultValue:"",onChange:function(e){t(e.target.value)}},r.a.createElement("option",{value:""},"Select Country"),o.map((function(e,t){return r.a.createElement("option",{value:e.name,key:t},e.name)}))))},q=a(46),z=a.n(q),H=a(82),L=a.n(H),Q=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.fetchedDataAPI=function(){var t=Object(l.a)(s.a.mark((function t(a){var n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0===a){t.next=7;break}return t.next=3,S(a);case 3:n=t.sent,e.setState({data:n,country:a}),t.next=11;break;case 7:return t.next=9,S();case 9:r=t.sent,e.setState({data:r});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleCountryChange=function(t){e.fetchedDataAPI(t)},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.fetchedDataAPI()}},{key:"render",value:function(){var e=this.state,t=e.country,a=e.data;return r.a.createElement("div",{className:z.a.container},r.a.createElement("img",{src:L.a,alt:"corona-19",className:z.a.image}),r.a.createElement(w,{data:a}),r.a.createElement(W,{handleCountry:this.handleCountryChange}),r.a.createElement(B,{data:a,country:t}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},46:function(e,t,a){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1"}},79:function(e,t,a){e.exports={container:"Chart_container__2bxln"}},81:function(e,t,a){e.exports={formControl:"CountrySelector_formControl__2jgHz"}},82:function(e,t,a){e.exports=a.p+"static/media/image1.04679d84.png"},87:function(e,t,a){e.exports=a(208)},92:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.d6b377b6.chunk.js.map