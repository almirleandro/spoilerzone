(this["webpackJsonpspoiler-zone"]=this["webpackJsonpspoiler-zone"]||[]).push([[4],{32:function(e,t,r){e.exports=r(34)},33:function(e,t,r){"use strict";function n(e,t,r,n,o,i,a){try{var s=e[i](a),c=s.value}catch(u){return void r(u)}s.done?t(c):Promise.resolve(c).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function s(e){n(a,o,i,s,c,"next",e)}function c(e){n(a,o,i,s,c,"throw",e)}s(void 0)}))}}r.d(t,"a",(function(){return o}))},34:function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(T){c=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),a=new E(n||[]);return i._invoke=function(e,t,r){var n=p;return function(o,i){if(n===f)throw new Error("Generator is already running");if(n===A){if("throw"===o)throw i;return C()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=S(a,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=A,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var c=l(e,t,r);if("normal"===c.type){if(n=r.done?A:h,c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=A,r.method="throw",r.arg=c.arg)}}}(e,r,a),i}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(T){return{type:"throw",arg:T}}}e.wrap=u;var p="suspendedStart",h="suspendedYield",f="executing",A="completed",d={};function m(){}function v(){}function y(){}var b={};b[i]=function(){return this};var g=Object.getPrototypeOf,j=g&&g(g(L([])));j&&j!==r&&n.call(j,i)&&(b=j);var x=y.prototype=m.prototype=Object.create(b);function O(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function r(o,i,a,s){var c=l(e[o],e,i);if("throw"!==c.type){var u=c.arg,p=u.value;return p&&"object"===typeof p&&n.call(p,"__await")?t.resolve(p.__await).then((function(e){r("next",e,a,s)}),(function(e){r("throw",e,a,s)})):t.resolve(p).then((function(e){u.value=e,a(u)}),(function(e){return r("throw",e,a,s)}))}s(c.arg)}var o;this._invoke=function(e,n){function i(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(i,i):i()}}function S(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,S(e,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=l(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function L(e){if(e){var r=e[i];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:C}}function C(){return{value:t,done:!0}}return v.prototype=x.constructor=y,y.constructor=v,v.displayName=c(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,s,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},O(w.prototype),w.prototype[a]=function(){return this},e.AsyncIterator=w,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new w(u(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},O(x),c(x,s,"Generator"),x[i]=function(){return this},x.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=L,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}(e.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},38:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return p}));var n=r(1),o=r(32),i=r.n(o),a=r(33),s=r(14),c=r(0),u=r(2);function l(e){var t=Object(c.useState)(""),r=Object(s.a)(t,2),o=r[0],u=r[1],l=Object(c.useState)(""),p=Object(s.a)(l,2),h=p[0],f=p[1],A=Object(c.useState)(),d=Object(s.a)(A,2),m=d[0],v=d[1],y=Object(c.useState)({}),b=Object(s.a)(y,2),g=b[0],j=b[1];function x(){return O.apply(this,arguments)}function O(){return(O=Object(a.a)(i.a.mark((function t(){var r,n,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://spoilerzone-server.herokuapp.com/fire/getdb",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filmeID:e.filmeID})});case 2:return r=t.sent,t.next=5,r.json();case 5:n=t.sent,null===(o=[n])[0]?v(!1):(j(o[0]),v(!0));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(){return(w=Object(a.a)(i.a.mark((function t(r){var n,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),n={id:e.filmeID,titulo:e.movieTitle,ano:e.movieYear,newInfo:[{spoilers:h,usuario:o}]},!m){t.next=9;break}return(a=g).newInfo.push(n.newInfo[0]),t.next=7,fetch("https://spoilerzone-server.herokuapp.com/fire/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filmeID:e.filmeID,content:a})});case 7:t.next=12;break;case 9:return t.next=11,fetch("https://spoilerzone-server.herokuapp.com/fire/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filmeID:e.filmeID,content:n})});case 11:x();case 12:f(""),alert("Obrigado por contribuir para o desenvolvimento do site!");case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(c.useEffect)((function(){u(""),f(""),x()}),[e.filmeID]),Object(n.jsxs)("div",{className:"AddSpoiler",children:[Object(n.jsxs)("p",{id:"SendSpoilerTitle",children:["J\xe1 assistiu esse filme? Envie",e.haveSpoilers?" mais":null," alguns spoilers!"]}),Object(n.jsxs)("form",{onSubmit:function(e){return function(e){return w.apply(this,arguments)}(e)},children:[Object(n.jsxs)("p",{id:"movieName",children:["Filme: ",e.movieTitle," ",e.movieYear?"(".concat(e.movieYear,")"):null]}),Object(n.jsx)("input",{placeholder:"Seu nome",value:o,onChange:function(e){return u(e.target.value)}}),Object(n.jsx)("br",{}),Object(n.jsx)("textarea",{placeholder:"Escreva os spoilers aqui",value:h,onChange:function(e){return f(e.target.value)},required:!0}),Object(n.jsx)("br",{}),Object(n.jsx)("p",{id:"sendSpoilerMsg",children:"* Ao enviar dados para o site, tanto o seu nome quanto os spoilers enviados ficar\xe3o vis\xedveis ao p\xfablico. Os spoilers ser\xe3o analisados e estar\xe3o sujeitos a altera\xe7\xe3o antes de serem publicados. Obrigado por sua contribui\xe7\xe3o!"}),Object(n.jsx)("button",{children:"Enviar"})]})]})}function p(){var e=Object(c.useState)(),t=Object(s.a)(e,2),r=t[0],o=t[1],p=Object(c.useState)(),h=Object(s.a)(p,2),f=h[0],A=h[1],d=Object(c.useState)(),m=Object(s.a)(d,2),v=m[0],y=m[1],b=Object(c.useState)([]),g=Object(s.a)(b,2),j=g[0],x=g[1],O=Object(u.h)().id,w=function(){var e=Object(a.a)(i.a.mark((function e(){var t,r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://spoilerzone-server.herokuapp.com/fire/film",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filmeID:O})});case 2:return t=e.sent,e.next=5,t.json();case 5:r=e.sent,x(null===(n=[r])[0]?[]:n[0].spoilers);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(a.a)(i.a.mark((function e(){var t,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://spoilerzone-server.herokuapp.com/tmdb/movie",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filmeID:O})});case 3:return t=e.sent,e.next=6,t.json();case 6:r=e.sent,o(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(a.a)(i.a.mark((function e(){var t,r,n,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://spoilerzone-server.herokuapp.com/tmdb/credits",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filmeID:O})});case 3:return t=e.sent,e.next=6,t.json();case 6:r=e.sent,n=r.crew.filter((function(e){return"Director"===e.job})),o=n.map((function(e,t){return n.length>1&&t+1===n.length?"e "+e.name:t+1===n.length-1?e.name+" ":t+1<n.length?e.name+", ":e.name})),A(o),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(a.a)(i.a.mark((function e(){var t,r,n,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://spoilerzone-server.herokuapp.com/tmdb/providers",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({filmeID:O})});case 3:return t=e.sent,e.next=6,t.json();case 6:r=e.sent,n=r.results.BR.flatrate,o=n.map((function(e,t){return n.length>1&&t+1===n.length?"e "+e.provider_name:t+1===n.length-1?e.provider_name+" ":t+1<n.length?e.provider_name+", ":e.provider_name})),y(o),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),y(!1);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){S(),k(),N(),w()}),[O]);var E=j.map((function(e){return Object(n.jsx)("li",{children:e.text},e.key)}));return Object(n.jsxs)("main",{className:"Filme",children:[r?Object(n.jsxs)("div",{className:"movieHeader",children:[Object(n.jsx)("img",{src:r.poster_path?"https://image.tmdb.org/t/p/w342"+r.poster_path:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVYAAAIBCAMAAAAlEmdjAAAAM1BMVEXZ2dmmpqbW1tbOzs6ysrLGxsapqanU1NTQ0NC4uLirq6utra3Ly8u1tbW/v7+vr6+8vLxeeYFLAAADiklEQVR42uzBgQAAAACAoP2pF6kCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGD27i63URgKoPAxwfyTZP+rHY1UZdQhjdsKAjbn2wFH5PrCA5EkSZIkbW7qb0N4o2acY0XZ2nsT9tB3FOwedtMXe8dWddjR2FKkdgy7asocBLews6HEOdCH3dUU5xIOIFKaMRxAcWNgCodQ2u16gMn610xZmnAMlCUcRGHPBOEgynokqMJBmHUTF0piVgCz5sGsAGbNg1kBzJoHswKYNQ9mBTBrHswKYNY8mBXArHkwK4BZ82BWALPmwawAZs2DWQHMmgezApg1D2YFMGsezApg1jyYFcCseTArgFnzYFYAs+bBrABmzYNZAcyaB7MCmDUPZgUwax7MCmDWPJgVwKx5MCuAWfNgVgCz5sGsAGbNw0ZZm9GsG5g6s67vDtGsa7sB9GZdV9MCMJo15TeFOrOu6cqHaNb11Dz0Zl3LUPHPaNYtPhjamXUdkU+iWdfQ85/erC81UxOSRhZGs74yMaXTdyx0Zk0so9d0+ieiWRPL6Jx6wfJUb9YvDC0A3BLpnxvN+vqa2ybxguWpzqyJZfTyqy7RrE/03ykUeaE368KNh6/XgZmXRrMmZuYcnhgrXurMmlhGq/E3/8gSzfrJlYev14FI0mzWxDJ6WZ5padVg1oehJf2LvvEdnVlTF3tfnmlp0aypmVkvz7S02ayJmVmNizMtrRrMmpiZj3Wg5vs6s6Zm5rQ809KiWVMzM/6mxnz6rFcS+sWZllYNJ89ak1SHmZ/qzp11aEmqZn4unjrrha3MJ84a2Uw1nDZrz4a6s2a9sal4zqxNy7bmU2ad2Fg1nDDrlc1158ta8wbxbFmHlneYT5b1wltUw6myRt6kO1XW+m2aM2Vdh98TCAdh1r/MatYks+bBrABmzYNZAcrN2lGUcBAtRWnCMVCWPhzCjbLEcAhXCjOEA2gKG60HuV3vFKcOuxsqitPuvwyU9SzwYdq7a6RIl327ThSqncNuboU9tn4Sx7CLsdAB8HC51k14q6a+F3lWSZIkSZIkSZIkSZIkSZIk6U97cEgAAAAAIOj/a28YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICXAOLpSW8b8xCBAAAAAElFTkSuQmCC",alt:r.title}),Object(n.jsxs)("div",{className:"movieDescription",children:[Object(n.jsxs)("h1",{children:[r.title," (",r.release_date.slice(0,4),")"]}),r.tagline?Object(n.jsx)("p",{id:"tagline",children:Object(n.jsxs)("em",{children:['"',r.tagline,'"']})}):null,Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"T\xedtulo original:"})," ",r.original_title]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Dire\xe7\xe3o:"})," ",f]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Sinopse:"})," ",r.overview?r.overview:"N\xe3o dispon\xedvel"]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Dispon\xedvel para streaming no Brasil em:"})," ",v||"N\xe3o dispon\xedvel"]})]})]}):null,Object(n.jsx)("div",{className:"spoilerDivision",children:"Spoilers a seguir"}),Object(n.jsx)("div",{className:"spoilers",children:E[0]?E:Object(n.jsxs)("p",{children:["Esse filme ainda n\xe3o tem spoilers adicionados. Consulte o ",Object(n.jsx)("a",{href:"#/catalogo",children:"Cat\xe1logo de Filmes"})," para acessar os filmes que j\xe1 cont\xeam spoilers."]})}),Object(n.jsx)(l,{haveSpoilers:!!E[0],filmeID:O,movieTitle:r?r.title:null,movieYear:r?r.release_date.slice(0,4):null})]})}}}]);
//# sourceMappingURL=4.463754ca.chunk.js.map