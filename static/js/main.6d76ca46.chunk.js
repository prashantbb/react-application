(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports={recipe:"recipe_recipe__3iO6J"}},function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),i=a.n(r),s=(a(12),a(2)),o=a.n(s),l=a(5),u=a(1),m=a(6),p=a.n(m),f=function(e){var t=e.title,a=e.calories,n=e.image,r=e.ingredients;return c.a.createElement("div",{className:p.a.recipe},c.a.createElement("h1",{className:"recipe-headings"},t),c.a.createElement("ol",{className:"ingredients"},r.map((function(e){return c.a.createElement("li",null,e.text)}))),c.a.createElement("p",null,a),c.a.createElement("img",{src:n,alt:""}))},h=(a(14),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),s=Object(u.a)(i,2),m=s[0],p=s[1],h=Object(n.useState)("chicken"),d=Object(u.a)(h,2),E=d[0],b=d[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(E,"&app_id=").concat("70dda231","&app_key=").concat("9650d5c1191aabd58a7c8fe949f61a55"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a.hits),console.log(a.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[E]);return c.a.createElement("div",{className:"App"},c.a.createElement("h1",{className:"main-heading"},"RECIPE SEARCH"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),b(m),p("")},className:"search-form"},c.a.createElement("input",{className:"search-bar",type:"text",value:m,onChange:function(e){p(e.target.value)}}),c.a.createElement("button",{className:"search-button",type:"submit"},"Search")),c.a.createElement("div",{className:"recipes"},a.map((function(e){return c.a.createElement(f,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients})}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[7,1,2]]]);
//# sourceMappingURL=main.6d76ca46.chunk.js.map