(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(30)},27:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(7),c=n.n(a),i=n(8),s=n(6),l=n(15),u=n(16),h=(n(27),n(1)),d=n(2),f=n(4),b=n(3),p=n(5),g=function(e){var t=e.name,n=e.email,o=e.id;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-s"},r.a.createElement("img",{src:"https://robohash.org/".concat(o,"?size=200x200"),alt:"robots"}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},m=function(e){var t=e.robots;return r.a.createElement("div",null,t.map(function(e,n){return r.a.createElement(g,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}))},v=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(f.a)(this,Object(b.a)(t).call(this,e))).state={count:1},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){var e=this;return r.a.createElement("button",{color:this.props.color,onClick:function(){return e.setState(function(e){return{count:e.count+1}})}},"Count: ",this.state.count)}}]),t}(o.Component),E=function(e){function t(){return Object(h.a)(this,t),Object(f.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return console.log("header"),r.a.createElement("div",null,r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(v,{color:"red"}))}}]),t}(o.Component),O=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{"aria-label":"Search Robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},w=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"3px solid white",height:"800px"}},e.children)},j=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(f.a)(this,Object(b.a)(t).call(this,e))).state={hasError:!1},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Ooops. That is not good"):this.props.children}}]),t}(o.Component),y=(n(28),function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(f.a)(this,Object(b.a)(t).call(this))).state={count:1},e}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchchange,o=e.robots,a=e.isPending,c=o.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return r.a.createElement("div",{className:"tc"},r.a.createElement(E,{count:this.state.count}),r.a.createElement(O,{searchChange:n}),r.a.createElement(w,null,a?r.a.createElement("h1",null,"Loading"):r.a.createElement(j,null,r.a.createElement(m,{robots:c}))))}}]),t}(o.Component)),R=Object(i.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchchange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(t){return t.json().then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})})})}}})(y),S=(n(29),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function C(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var k={searchField:""},_={isPending:!1,robots:[],error:""},T=Object(l.createLogger)(),N=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),U=Object(s.d)(N,Object(s.a)(u.a,T));c.a.render(r.a.createElement(i.a,{store:U},r.a.createElement(R,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/react-robofriends","/service-worker.js");S?(function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):C(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):C(t,e)})}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.c9fccfba.chunk.js.map