(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{31:function(e,a,t){e.exports=t(42)},36:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(27),c=t.n(r),i=(t(36),t(1)),m=t(2),s=t(4),u=t(3),o=t(14),d=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-inverse"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"navbar-header"},l.a.createElement("button",{type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":"#myNavbar"},l.a.createElement("span",{className:"icon-bar"}),l.a.createElement("span",{className:"icon-bar"}),l.a.createElement("span",{className:"icon-bar"})),l.a.createElement("div",{className:"navbar-brand"},l.a.createElement("img",{src:"images/logo.png",style:{width:"100%"},alt:""}))),l.a.createElement("div",{className:"collapse navbar-collapse",id:"myNavbar"},l.a.createElement("ul",{className:"nav navbar-nav nav-links"},l.a.createElement(o.b,{to:"/alamaison"},l.a.createElement("li",null,"Home")),l.a.createElement(o.b,{to:"/alamaison/story"},l.a.createElement("li",null,"Our story")),l.a.createElement(o.b,{to:"/alamaison/contact"},l.a.createElement("li",null,"Contact")),l.a.createElement(o.b,{to:"/alamaison/reservation"},l.a.createElement("li",null,"Reservation"))))))}}]),t}(n.Component),p=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("footer",{className:"container-fluid myfooter"},l.a.createElement("p",null,"\xa9 2020 Alamaison"))}}]),t}(n.Component),E=t(30),v=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Table reservation"),l.a.createElement(E.a,{initialValues:{people:"",email:"",date:"",time:""},validate:function(e){var a={};return e.people||(a.people="Required"),e.date||(a.date="Required"),e.time||(a.time="Required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(a.email="Invalid email address"):a.email="Required",a},onSubmit:function(e,a){var t=a.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),t(!1)}),400)}},(function(e){var a=e.values,t=e.errors,n=e.touched,r=e.handleChange,c=e.handleBlur,i=e.handleSubmit,m=e.isSubmitting;return l.a.createElement("form",{onSubmit:i},"Number of people",l.a.createElement("br",null),l.a.createElement("input",{type:"number",name:"people",onChange:r,onBlur:c,value:a.people}),t.people&&n.people&&t.people,l.a.createElement("br",null),"Email",l.a.createElement("br",null),l.a.createElement("input",{type:"email",name:"email",onChange:r,onBlur:c,value:a.email}),t.email&&n.email&&t.email,l.a.createElement("br",null),"Date",l.a.createElement("br",null),l.a.createElement("input",{type:"date",name:"date",onChange:r,onBlur:c,value:a.date}),t.date&&n.date&&t.date,l.a.createElement("br",null),"Time",l.a.createElement("br",null),l.a.createElement("input",{type:"time",name:"time",onChange:r,onBlur:c,value:a.time}),t.time&&n.time&&t.time,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{type:"submit",disabled:m},"Submit"))})))}}]),t}(l.a.Component),b=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,"CONTACT PAGE")}}]),t}(n.Component),h=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container",style:{padding:"2% 5%"}},l.a.createElement("h1",{className:"text-center"},"Our Story"),l.a.createElement("div",{className:"row"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eros risus, luctus non lobortis at, viverra vitae velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi rhoncus urna ac est aliquam vehicula nec in lectus. Donec sit amet nisl risus. Quisque at tellus finibus, laoreet nibh a, elementum neque. Pellentesque in pretium turpis, dignissim volutpat eros. Suspendisse diam tortor, blandit a sagittis ut, tincidunt eu odio. Curabitur bibendum, nisi id volutpat gravida, ante arcu faucibus eros, eu imperdiet sem tortor nec nibh. In ac lobortis risus. Vestibulum aliquet quam eu aliquet finibus. Fusce magna augue, malesuada in placerat non, tincidunt vel erat. Fusce rutrum, mi eget sollicitudin volutpat, mi leo dapibus mauris, eu efficitur eros tortor ac diam."),l.a.createElement("div",{className:"row"},"Sed vel ipsum eu elit fringilla egestas sed ac lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla porttitor erat at nisi molestie, et molestie purus sodales. Ut venenatis ante ut diam sollicitudin, viverra eleifend eros lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec consectetur enim aliquet ante pharetra pulvinar. Nullam tristique nunc risus, vel cursus diam lacinia eu. Etiam sed tempor odio, in feugiat neque. Cras molestie vitae magna lacinia varius. Fusce nec enim elementum, maximus mi eget, condimentum augue. Donec et ornare felis. Phasellus in scelerisque libero."))}}]),t}(n.Component),f=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"jumbotron"})}}]),t}(n.Component),g=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("h2",null,"Bienvenu alamaison"),l.a.createElement("p",null,"We are a family owned restaurant specialized in modern African and French cuisine."),l.a.createElement("p",null,"Hungry for comfort food? We guarantee you the freshest meal every time. We offer dine in and pick up."),l.a.createElement("p",null,"Thought you\u2019ve already had the best rice bowl? Stop by and let your palate be the judge!"),l.a.createElement("p",null,"Welcome Home !!!")),l.a.createElement("div",{className:"col-sm-4 contact"},l.a.createElement("h2",null,"Contact"),l.a.createElement("div",null,"1234 Rue des Elysee"),l.a.createElement("div",null,"Columbus, OH"),l.a.createElement("div",null,"43215"),l.a.createElement("br",null))))}}]),t}(n.Component),N=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"exploremenu"},l.a.createElement("div",{className:"container-fluid bg-3 text-center"},l.a.createElement("div",{className:"row"},l.a.createElement("h2",null,"Explore our menu")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("img",{src:"images/shareable.png",className:"img-responsive",alt:""}),l.a.createElement("br",null),l.a.createElement("p",null,"shareables")),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("img",{src:"images/salad.png",className:"img-responsive",alt:""}),l.a.createElement("br",null),l.a.createElement("p",null,"Soup & Salads")),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("img",{src:"images/main.png",className:"img-responsive",alt:""}),l.a.createElement("br",null),l.a.createElement("p",null,"Main dishes")))),l.a.createElement("br",null)),l.a.createElement("div",{className:"exploremenu-2"},l.a.createElement("div",{className:"container-fluid bg-3 text-center"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("img",{src:"images/desserts.png",className:"img-responsive",alt:""}),l.a.createElement("br",null),l.a.createElement("p",null,"Desserts")),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("img",{src:"images/drinks.png",className:"img-responsive",alt:""}),l.a.createElement("br",null),l.a.createElement("p",null,"Drinks")),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("img",{src:"images/specials.png",className:"img-responsive",alt:""}),l.a.createElement("br",null),l.a.createElement("p",null,"Specials")))),l.a.createElement("br",null)))}}]),t}(n.Component),y=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",{className:"container-fluid bg-3"},l.a.createElement("div",{className:"row text-center"},l.a.createElement("h2",null,"Our favorites")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("img",{src:"images/favorite1.png",className:"img-responsive",style:{width:"100%"},alt:""}),l.a.createElement("br",null),l.a.createElement("img",{src:"images/favorite2.png",className:"img-responsive",style:{width:"100%"},alt:""}),l.a.createElement("br",null)),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("h4",null,"Dibi lamb"),l.a.createElement("em",null,"Grilled and slow cooked lamb served with caramelized onions and your choice of French fries, white rice or steamed rice ")),l.a.createElement("div",{className:"col-sm-6  text-center"},"$20")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("h4",null,"Macaroni au boeuf"),l.a.createElement("em",null,"Pipe rigate served with beef cooked in spicy tomato sauce")),l.a.createElement("div",{className:"col-sm-6  text-center"},"$17")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("h4",null,"Riz Cr\xe9ole aux champignons"),l.a.createElement("em",null,"Rice cooked with fried vermicelli served with saute mushrooms")),l.a.createElement("div",{className:"col-sm-6  text-center"},"$13")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6"},l.a.createElement("h4",null,"Atti\xe9k\xe9 au poisson et aloko "),l.a.createElement("em",null,"Cassava couscous served with fried fish, fried plantains and fresh tomatoes and cucumber salad ")),l.a.createElement("div",{className:"col-sm-6  text-center"},"$20"))))),l.a.createElement("br",null)))}}]),t}(n.Component),O=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement(g,null),l.a.createElement(N,null),l.a.createElement(y,null),l.a.createElement("br",null),l.a.createElement("br",null))}}]),t}(n.Component),j=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,"DAILY MENU PAGE")}}]),t}(n.Component),w=t(5),C=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement(w.c,null,l.a.createElement(w.a,{path:"/alamaison",exact:!0,component:O}),l.a.createElement(w.a,{path:"/alamaison/story",component:h}),l.a.createElement(w.a,{path:"/alamaison/contact",component:b}),l.a.createElement(w.a,{path:"/alamaison/reservation",component:v}),l.a.createElement(w.a,{path:"/alamaison/menu",component:j})),l.a.createElement(p,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.6f984e50.chunk.js.map