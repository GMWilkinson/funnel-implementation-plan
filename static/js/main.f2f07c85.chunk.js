(this["webpackJsonpfunnel-implementation-plan"]=this["webpackJsonpfunnel-implementation-plan"]||[]).push([[0],{222:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(78),c=n.n(r),i=(n(89),n(43)),o=n.n(i),u=n(79),s=n(80),m=n(81),p=n(83),f=n(82),d=(n(91),n(92));d.configure({endpointUrl:"https://api.airtable.com",apiKey:"keySXM63if2KAGMln"});var h=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={},a}return Object(m.a)(n,[{key:"componentWillMount",value:function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,this.loadATBase(d.base("appL2LeTuuz9C5L0n"),"Implementation","Grid view",t);case 3:this.setState({arr:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadATBase",value:function(e,t,n,a){return new Promise((function(l,r){e(t).select({view:n}).eachPage((function(e,t){e.forEach((function(e){a.push(e.fields)})),t()}),(function(e){e&&(console.error(e),r()),l(a)}))}))}},{key:"render",value:function(){var e=this.state.arr;return l.a.createElement("div",{className:"App"},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Action"),l.a.createElement("th",null,"June"),l.a.createElement("th",null,"July"),l.a.createElement("th",null,"Aug"),l.a.createElement("th",null,"Sept"),l.a.createElement("th",null,"Oct"),l.a.createElement("th",null,"Nov"),l.a.createElement("th",null,"Dec")),e&&e.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e["Action(s)"]),l.a.createElement("td",{style:{textAlign:"center",background:"06"===e["Start Date"].split("-")[1]||"06"===e["Due Date"].split("-")[1]?"#03e8fc":""}}),l.a.createElement("td",{style:{textAlign:"center",background:"07"===e["Start Date"].split("-")[1]||"07"===e["Due Date"].split("-")[1]?"#03e8fc":""}}),l.a.createElement("td",{style:{textAlign:"center",background:"08"===e["Start Date"].split("-")[1]||"08"===e["Due Date"].split("-")[1]?"#03e8fc":""}}),l.a.createElement("td",{style:{textAlign:"center",background:"09"===e["Start Date"].split("-")[1]||"09"===e["Due Date"].split("-")[1]?"#03e8fc":""}}),l.a.createElement("td",{style:{textAlign:"center",background:"10"===e["Start Date"].split("-")[1]||"10"===e["Due Date"].split("-")[1]?"#03e8fc":""}}),l.a.createElement("td",{style:{textAlign:"center",background:"11"===e["Start Date"].split("-")[1]||"11"===e["Due Date"].split("-")[1]?"#03e8fc":""}}),l.a.createElement("td",{style:{textAlign:"center",background:"12"===e["Start Date"].split("-")[1]||"12"===e["Due Date"].split("-")[1]?"#03e8fc":""}}))})))))}}]),n}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},84:function(e,t,n){e.exports=n(222)},89:function(e,t,n){},91:function(e,t,n){}},[[84,1,2]]]);
//# sourceMappingURL=main.f2f07c85.chunk.js.map