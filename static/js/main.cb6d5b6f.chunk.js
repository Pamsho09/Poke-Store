(this["webpackJsonppoke-store"]=this["webpackJsonppoke-store"]||[]).push([[0],{63:function(t,e,n){"use strict";n.r(e);var r=n(2),c=n(0),a=n.n(c),o=n(30),i=n.n(o),u=n(34),s=n(1),j=Object(c.createContext)({}),d=n(19),b={cart:[],buyer:[],order:[],pokemons:[]},p=n(16),f=n.n(p);var l=function(){var t=Object(c.useState)(b),e=Object(d.a)(t,2),n=e[0],r=(e[1],Object(c.useState)([])),a=Object(d.a)(r,2),o=a[0],i=a[1];return Object(c.useEffect)((function(){f.a.get("https://pokeapi.co/api/v2/pokemon?limit=802").then((function(t){return t.data.results})).then((function(t){return Promise.all(t.map((function(t){return f.a.get(t.url)})))})).then((function(t){i(t)}))}),[]),{state:n,pokemons:o}},h=n(35),g=n(12),O=n(13);function m(){var t=Object(g.a)(["\nwidth:100%;\n\nbackground-image: url(",");\nbackground-repeat: no-repeat;\nheight:100px;\n"]);return m=function(){return t},t}var v=function(t){var e=O.a.div(m(),t.data.sprites.front_default);return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(e,{})})};function x(){var t=Object(g.a)(["\n    width: 100%;\n    height: auto;\n\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n  "]);return x=function(){return t},t}var k=function(){var t=O.a.div(x()),e=Object(c.useContext)(j).pokemons;return Object(r.jsx)(t,{children:e.map((function(t,e){return Object(r.jsx)(v,Object(h.a)({},t),e)}))})},F=n.p+"static/media/loading.d8f29561.gif";var C=function(){var t=l(),e=t.pokemons.length;return console.log(e),Object(r.jsx)(r.Fragment,{children:e>=802?Object(r.jsx)(j.Provider,{value:t,children:Object(r.jsx)(u.a,{children:Object(r.jsx)(s.c,{children:Object(r.jsx)(s.a,{exact:!0,path:"/",component:k})})})}):Object(r.jsx)("img",{src:F})})},w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),r(t),c(t),a(t),o(t)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(C,{})}),document.getElementById("root")),w()}},[[63,1,2]]]);
//# sourceMappingURL=main.cb6d5b6f.chunk.js.map