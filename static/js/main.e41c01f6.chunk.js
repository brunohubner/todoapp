(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(30),o=n.n(a),s=(n(39),n(40),n(41),n(42),n(43),n(0));function i(e){return Object(s.jsx)("header",{className:"header",children:Object(s.jsx)("h1",{children:"TodoApp"})})}n(45),n(46);var u=n(11);function l(e){return Object(s.jsxs)("footer",{className:"footer",children:[Object(s.jsxs)("span",{children:["\xa9 2021 ",Object(s.jsx)("a",{href:"https://github.com/brunohubner",target:"_blank",rel:"noreferrer",children:"Bruno Hubner"})]}),Object(s.jsx)(u.b,{to:e.path,children:e.label})]})}n(52);function d(e){return!e.hide&&e.children}n(53);function j(e){var t=e.color||"#00fa";return Object(s.jsx)(d,{hide:e.hide,children:Object(s.jsx)("button",{className:"icon-button",style:{backgroundColor:t},onClick:e.onClick,children:Object(s.jsx)("i",{className:"fa fa-".concat(e.icon)})})})}var p=r.a.createContext(null),f=n(3),h=n.n(f),b=n(9),x=n(20),O=n(33),v=n(34),m=n(13),k=n.n(m),g=(Object({NODE_ENV:"production",PUBLIC_URL:"/todoapp",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL||"http://localhost:3333")+"/todos",y=function(){function e(){Object(O.a)(this,e)}return Object(v.a)(e,[{key:"add",value:function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.trim()&&!(t.length>32)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,k.a.post(g,{description:t}).catch((function(e){return console.log("Failed\n"+e.message)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAll",value:function(){var e=Object(b.a)(h.a.mark((function e(){var t,n,c,r=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",n=t?"&description__regex=/".concat(t,"/"):"",c=[],e.next=5,k.a.get("".concat(g,"?sort=-createdAt").concat(n)).then((function(e){c=e.data||[]})).catch((function(e){console.log("Failed\n"+e.message)}));case 5:return e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"update",value:function(){var e=Object(b.a)(h.a.mark((function e(t,n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.put("".concat(g,"/").concat(t._id),Object(x.a)(Object(x.a)({},t),{},{done:n})).catch((function(e){return console.log("Failed\n"+e.message)}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"remove",value:function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.delete("".concat(g,"/").concat(t)).catch((function(e){return console.log("Failed\n"+e.message)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),C=new y;function A(){var e=Object(c.useContext)(p),t=e.description,n=e.setDescription,r=e.setList;function a(){return a=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.trim()&&!(t.length>32)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,C.add(t);case 4:u();case 5:case"end":return e.stop()}}),e)}))),a.apply(this,arguments)}function o(e){return s.apply(this,arguments)}function s(){return s=Object(b.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.getAll(t);case 2:n=e.sent,r(n);case 4:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function i(){return(i=Object(b.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.remove(n);case 2:u(t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";o(e),n(e)}function l(){return(l=Object(b.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.update(n,!0);case 2:u(t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return(d=Object(b.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.update(n,!1);case 2:u(t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)(u,[]),{add:function(e){return a.apply(this,arguments)},getAll:o,remove:function(e){return i.apply(this,arguments)},refresh:u,markAsDone:function(e){return l.apply(this,arguments)},markAsPending:function(e){return d.apply(this,arguments)},search:function(e){u(e)},clear:function(){u()}}}function w(e){var t=Object(c.useContext)(p).description,n=e.onClick,r=n.add,a=n.search,o=n.clear,i=function(){var e=A(),t=e.search,n=e.add,r=e.clear,a=Object(c.useContext)(p).description;return{keyHandler:function(e){"Enter"===e.key?e.shiftKey?t(a):n(a):"Escape"===e.key&&r()}}}(),u=i.keyHandler;return Object(s.jsxs)("div",{className:"form",children:[Object(s.jsx)("input",{type:"text",value:e.description,onChange:function(t){return e.setDescription(t.target.value)},onKeyUp:u,placeholder:"Adicione uma tarefa",maxLength:32}),Object(s.jsxs)("div",{className:"buttons",children:[Object(s.jsx)(j,{icon:"plus",color:"#00fa",onClick:function(){return r(t)}}),Object(s.jsx)(j,{icon:"search",color:"#00fa",onClick:function(){return a(t)}}),Object(s.jsx)(j,{icon:"close",color:"#00fa",onClick:function(){return o(t)}})]})]})}n(73);function N(e){var t=e.onClick,n=t.remove,c=t.markAsDone,r=t.markAsPending;return Object(s.jsx)("table",{className:"todo-list",children:Object(s.jsx)("tbody",{children:(e.list||[]).map((function(e){return Object(s.jsxs)("tr",{className:e.done?"mark-as-done":"",children:[Object(s.jsx)("td",{className:"task",children:e.description}),Object(s.jsxs)("td",{className:"buttons",children:[Object(s.jsx)(j,{onClick:function(){return c(e)},icon:"check",color:"#4caf50",hide:e.done}),Object(s.jsx)(j,{onClick:function(){return r(e)},icon:"undo",color:"#00fa",hide:!e.done}),Object(s.jsx)(j,{onClick:function(){return n(e._id)},icon:"trash-o",color:"#f44336",hide:!e.done})]})]},e._id)}))})})}function S(e){var t=Object(c.useContext)(p),n=t.description,r=t.setDescription,a=t.list,o=A(),i=o.add,u=o.remove,d=o.markAsDone,j=o.markAsPending,f=o.search,h=o.clear;return Object(s.jsxs)("div",{className:"todo",children:[Object(s.jsxs)("div",{className:"tasks",children:[Object(s.jsx)(w,{description:n,setDescription:r,onClick:{add:i,search:f,clear:h}}),Object(s.jsx)(N,{onClick:{remove:u,markAsDone:d,markAsPending:j},list:a})]}),Object(s.jsx)(l,{path:"/about",label:"Sobre"})]})}n(74);function _(e){return Object(s.jsxs)("div",{className:"about",children:[Object(s.jsxs)("div",{className:"content",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:"Por mais simples que pare\xe7a essa aplica\xe7\xe3o, h\xe1 toda uma complexidade envolvida nos bastidores de seu desenvolvimento. A parte visual, Frontend, foi desenvolvida utilizando as seguintes tecnologias: HTML, CSS, JavaScript e ReactJS a qual faz usos das melhores pr\xe1ticas de desenvolvimento Frontend, como uso de componentes, hooks, e controle de estado."}),Object(s.jsx)("p",{children:"Al\xe9m disso, as informa\xe7\xf5es das tarefas s\xe3o salvas em um banco de dados n\xe3o relacional, MongoDB, onde a conex\xe3o, \xe9 feita por uma RestAPI desenvolvida com NodeJS e Express."})]}),Object(s.jsx)("span",{children:"brunohubnerdev@gmail.com"})]}),Object(s.jsx)(l,{path:"/",label:"Tarefas"})]})}var D=n(2);function E(e){return Object(s.jsx)("div",{className:"content",children:Object(s.jsxs)(D.c,{children:[Object(s.jsx)(D.a,{path:"/about",children:Object(s.jsx)(_,{})}),Object(s.jsx)(D.a,{path:"/",children:Object(s.jsx)(S,{})})]})})}var P=n(19),T=[];function F(e){var t=Object(c.useState)(""),n=Object(P.a)(t,2),r=n[0],a=n[1],o=Object(c.useState)(T),i=Object(P.a)(o,2),u=i[0],l=i[1];return Object(s.jsx)(p.Provider,{value:{description:r,setDescription:a,list:u,setList:l},children:e.children})}var R=function(){return Object(s.jsx)(F,{children:Object(s.jsx)("div",{className:"App",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)(u.a,{children:[Object(s.jsx)(i,{}),Object(s.jsx)(E,{})]})})})})};o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(R,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.e41c01f6.chunk.js.map