(this["webpackJsonpcontact-book"]=this["webpackJsonpcontact-book"]||[]).push([[0],{35:function(e,t,a){e.exports=a(64)},40:function(e,t,a){},42:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),l=a.n(c),s=(a(40),a(9)),o=a(2),i=a.n(o),u=a(4),m=a(12),d=a(13),p=a(14),f=a(15),h=(a(42),a(5)),v=a.n(h),g=(a(17),a(45),function(){var e=Object(u.a)(i.a.mark((function e(t,a){var n,r,c,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=E.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,c=t.email,l=new Date,e.prev=9,e.next=12,n.set(Object(s.a)({id:t.uid,displayName:r,email:c,createdAt:l},a));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.error(e.t0);case 17:return e.abrupt("return",n);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,a){return e.apply(this,arguments)}}());v.a.initializeApp({apiKey:"AIzaSyCBiPMdqsVnzvH4A3QmAE6xa-LXVjjV5mI",authDomain:"se-esa.firebaseapp.com",databaseURL:"https://se-esa.firebaseio.com",projectId:"se-esa",storageBucket:"se-esa.appspot.com",messagingSenderId:"250628917541",appId:"1:250628917541:web:2229c4a4ded61e0022b2cc",measurementId:"G-QHJG8EDF3E"});var b=v.a.auth(),E=v.a.firestore(),y=(v.a,a(3)),w=(a(47),a(8)),C=a(10),N=a(20),O=(a(48),function(e){var t=e.handleChange,a=e.label,n=Object(N.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},n)),a?r.a.createElement("label",{className:"".concat(n.value.length?"shrink":""," form-input-label")},a):null)});a(49);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var j=r.a.createElement("path",{d:"M0,172v-172h172v172z",fill:"none"}),S=r.a.createElement("g",null,r.a.createElement("path",{d:"M83.3125,8.0625c-41.55943,0 -75.25,33.69057 -75.25,75.25c0,41.55943 33.69057,75.25 75.25,75.25c41.55943,0 75.25,-33.69057 75.25,-75.25c0,-41.55943 -33.69057,-75.25 -75.25,-75.25z",fill:"#85cbf8"}),r.a.createElement("path",{d:"M83.3125,8.0625c-41.55943,0 -75.25,33.69057 -75.25,75.25c0,41.55943 33.69057,75.25 75.25,75.25c41.55943,0 75.25,-33.69057 75.25,-75.25c0,-41.55943 -33.69057,-75.25 -75.25,-75.25zM83.3125,142.4375c-26.58344,0.00423 -49.90126,-17.7336 -56.99218,-43.35387c-7.09093,-25.62026 3.78871,-52.82293 26.59142,-66.48731c22.80271,-13.66439 51.92131,-10.43041 71.17014,7.90431l1.8275,1.80063c0.69875,0.71667 1.37063,1.45125 2.01563,2.20375c15.20791,17.48044 18.80386,42.23289 9.19863,63.31809c-9.60522,21.0852 -30.64119,34.61675 -53.81113,34.61441z",fill:"#f9e3ae"}),r.a.createElement("path",{d:"M83.3125,142.4375c-32.65384,0 -59.125,-26.47116 -59.125,-59.125h-4.46125c-3.19133,-0.01079 -6.22247,1.39692 -8.27317,3.84219c-2.0507,2.44526 -2.90893,5.67527 -2.34245,8.81594c6.14263,36.1815 37.48922,62.65483 74.18844,62.65483c36.69922,0 68.04581,-26.47333 74.18844,-62.65483c0.56563,-3.13603 -0.28923,-6.36139 -2.33385,-8.8056c-2.04462,-2.44421 -5.06827,-3.85533 -8.2549,-3.85253h-4.46125c0,32.65384 -26.47116,59.125 -59.125,59.125z",fill:"#f6d397"}),r.a.createElement("path",{d:"M83.3125,5.375c-43.04369,0 -77.9375,34.89381 -77.9375,77.9375c0,43.04369 34.89381,77.9375 77.9375,77.9375c43.04369,0 77.9375,-34.89381 77.9375,-77.9375c0,-43.04369 -34.89381,-77.9375 -77.9375,-77.9375zM83.3125,155.875c-40.07516,0 -72.5625,-32.48734 -72.5625,-72.5625c0,-40.07516 32.48734,-72.5625 72.5625,-72.5625c40.07516,0 72.5625,32.48734 72.5625,72.5625c0,40.07516 -32.48734,72.5625 -72.5625,72.5625z",fill:"#8d6c9f"}),r.a.createElement("path",{d:"M83.3125,134.375c-1.48427,0 -2.6875,1.20323 -2.6875,2.6875v5.375c0,1.48427 1.20323,2.6875 2.6875,2.6875c1.48427,0 2.6875,-1.20323 2.6875,-2.6875v-5.375c0,-1.48427 -1.20323,-2.6875 -2.6875,-2.6875zM99.4375,134.59c-0.42453,-1.3848 -1.8701,-2.18407 -3.26863,-1.80726c-1.39854,0.37681 -2.24689,1.79413 -1.91824,3.20476l1.3975,5.18687c0.39333,1.43974 1.87933,2.28802 3.31906,1.89469c1.43974,-0.39333 2.28802,-1.87933 1.89469,-3.31906zM58.45313,127.71c-0.61953,-0.3589 -1.35667,-0.45576 -2.04788,-0.26908c-0.69122,0.18668 -1.27937,0.64146 -1.63399,1.26345l-2.6875,4.64937c-0.66758,1.27616 -0.21049,2.85172 1.03641,3.57248c1.2469,0.72075 2.84032,0.33045 3.61297,-0.88498l2.6875,-4.64937c0.36113,-0.61627 0.46208,-1.35094 0.28054,-2.04177c-0.18153,-0.69083 -0.63061,-1.28098 -1.24804,-1.6401zM111.85375,128.70438c-0.77265,-1.21543 -2.36607,-1.60573 -3.61297,-0.88498c-1.2469,0.72075 -1.70399,2.29632 -1.03641,3.57248l2.6875,4.64937c0.45758,0.87472 1.35789,1.42817 2.34498,1.44153c0.98709,0.01336 1.90205,-0.51552 2.38314,-1.37753c0.48109,-0.86202 0.45086,-1.9184 -0.07874,-2.7515zM70.43938,132.68188c-1.43191,-0.37551 -2.89787,0.47763 -3.27875,1.90813l-1.3975,5.16c-0.28786,0.939 -0.04058,1.96024 0.64494,2.66355c0.68552,0.70331 1.70009,0.97667 2.64616,0.71295c0.94606,-0.26371 1.67293,-1.02249 1.89578,-1.97901l1.3975,-5.18687c0.37551,-1.43191 -0.47763,-2.89787 -1.90812,-3.27875z",fill:"#8d6c9f"}),r.a.createElement("path",{d:"M113.65438,59.90437l-38.40437,38.43125l-19.59187,-19.59188c-1.06629,-0.91315 -2.65577,-0.85176 -3.64845,0.14092c-0.99268,0.99268 -1.05407,2.58216 -0.14092,3.64845l21.5,21.5c1.04823,1.04201 2.74115,1.04201 3.78937,0l40.3125,-40.3125c0.91315,-1.06629 0.85176,-2.65577 -0.14092,-3.64845c-0.99268,-0.99268 -2.58216,-1.05407 -3.64845,-0.14092z",fill:"#faefde"}),r.a.createElement("path",{d:"M103.06563,30.4225c1.92467,0.72128 3.8087,1.54666 5.64375,2.4725c0.37443,0.19184 0.78867,0.2931 1.20938,0.29562c1.23851,-0.00734 2.31162,-0.86012 2.59849,-2.06497c0.28687,-1.20485 -0.2868,-2.44972 -1.38911,-3.0144c-2.00934,-1.00901 -4.0729,-1.90621 -6.18125,-2.6875c-1.36051,-0.42223 -2.81412,0.29045 -3.31352,1.62456c-0.4994,1.33411 0.12893,2.82613 1.43227,3.40106zM43.40313,43.40313c12.83048,-12.78206 31.00096,-18.65575 48.88563,-15.8025c1.48427,0.23748 2.88002,-0.77323 3.1175,-2.2575c0.23748,-1.48427 -0.77323,-2.88002 -2.2575,-3.1175c-26.50189,-4.30919 -52.75478,8.98318 -64.968,32.89461c-12.21322,23.91143 -7.59326,52.9727 11.433,71.91789c1.06629,0.91315 2.65577,0.85176 3.64845,-0.14092c0.99268,-0.99268 1.05407,-2.58216 0.14092,-3.64845c-10.59355,-10.58534 -16.54564,-24.94707 -16.54564,-39.92281c0,-14.97574 5.95209,-29.33747 16.54564,-39.92281zM127.01125,39.61375c-1.76984,-1.77792 -3.64556,-3.44722 -5.61687,-4.99875c-0.745,-0.67906 -1.80736,-0.88412 -2.75157,-0.53111c-0.94421,0.35301 -1.61148,1.20472 -1.72825,2.20598c-0.11678,1.00126 0.33657,1.98367 1.1742,2.5445c1.80111,1.4186 3.51525,2.94427 5.13312,4.56875c10.58533,10.58425 16.5322,24.94022 16.5322,39.90937c0,14.96915 -5.94687,29.32513 -16.5322,39.90937c-0.76695,0.6568 -1.10102,1.68807 -0.86486,2.66981c0.23616,0.98175 1.00268,1.74827 1.98443,1.98443c0.98175,0.23616 2.01302,-0.09792 2.66981,-0.86486c24.1269,-24.13716 24.1269,-63.26034 0,-87.3975z",fill:"#8d6c9f"})),U=function(e){var t=e.svgRef,a=e.title,n=k(e,["svgRef","title"]);return r.a.createElement("svg",x({x:"0px",y:"0px",width:64,height:64,viewBox:"0 0 172 172",style:{fill:"#000000"},ref:t},n),a?r.a.createElement("title",null,a):null,r.a.createElement("g",{fill:"none",fillRule:"nonzero",stroke:"none",strokeWidth:1,strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,strokeDasharray:"",strokeDashoffset:0,fontFamily:"none",fontWeight:"none",fontSize:"none",textAnchor:"none",style:{mixBlendMode:"normal"}},j,S))},A=r.a.forwardRef((function(e,t){return r.a.createElement(U,x({svgRef:t},e))})),M=(a.p,function(e){var t=e.currentUser,a=e.newContactAdded,c=Object(n.useState)({name:"",number:"",email:"",location:"",gender:""}),l=Object(C.a)(c,2),o=l[0],m=l[1],d=Object(n.useState)(!1),p=Object(C.a)(d,2),f=p[0],h=p[1],g=o.name,b=o.number,E=o.email,y=o.location,N=o.gender,x=function(e){var t=e.target,a=t.name,n=t.value;m(Object(s.a)({},o,Object(w.a)({},a,n)))};function k(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}var j=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g&&b&&E&&y&&y&&N){e.next=2;break}return e.abrupt("return",alert("All fields are required"));case 2:if(!(b.length<10)&&/^\d+$/.test(b)){e.next=4;break}return e.abrupt("return",alert("Phone number needs to be atleast 10 digits and a valid number"));case 4:if(k(E)){e.next=6;break}return e.abrupt("return",alert("Please enter a valid email address"));case 6:v.a.firestore().collection("users").doc("".concat(t.id)).collection("contacts").doc("".concat(o.email)).set({name:g,email:E,location:y,number:b,gender:N}).then((function(e){m({name:"",number:"",email:"",location:"",gender:""}),a(),h(!0)}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){f&&setTimeout((function(){return h(!1)}),1e3)}),[f]),r.a.createElement("div",{className:"add-contact-card",style:{backgroundColor:"".concat(f?"#72caaf":""),border:"".concat(f?"2px solid white":"")}},f?r.a.createElement("div",{className:"success-card"},r.a.createElement("div",{className:"svg-cont"},r.a.createElement(A,null)),r.a.createElement("div",{className:"svg-cont"},r.a.createElement("p",null,"Added contact successfully"))):r.a.createElement("div",null,r.a.createElement("h3",null,"Add contact"),r.a.createElement("div",{className:"form"},r.a.createElement("form",null,r.a.createElement(O,{type:"text",name:"name",label:"Name",value:g,onChange:x}),r.a.createElement("div",{className:"gender-select"},r.a.createElement("span",null,"Gender:"),r.a.createElement("div",{className:"gender"},r.a.createElement("input",{type:"radio",name:"gender",value:"M",onChange:x}),r.a.createElement("label",null,"M")),r.a.createElement("div",{className:"gender"},r.a.createElement("input",{type:"radio",name:"gender",value:"F",onChange:x}),r.a.createElement("label",null,"F"))),r.a.createElement(O,{type:"text",name:"number",label:"Contact no.",value:b,onChange:x}),r.a.createElement(O,{type:"email",name:"email",label:"Email",value:E,onChange:x}),r.a.createElement(O,{type:"text",name:"location",label:"City",value:y,onChange:x}))),r.a.createElement("div",{className:"add-contact",onClick:j,style:{margin:"auto"}},r.a.createElement("p",null,"ADD CONTACT"))))}),z=(a(50),function(e){var t=e.contact,a=e.currentUser,c=e.contactUpdated,l=Object(n.useState)(t),o=Object(C.a)(l,2),m=o[0],d=o[1],p=Object(n.useState)(!1),f=Object(C.a)(p,2),h=f[0],g=f[1],b=t.name,E=t.email,y=t.location,N=t.number,O=t.gender,x=v.a.firestore(),k=function(e){var a=e.target,n=a.name,r=a.value;d(Object(s.a)({},t,Object(w.a)({},n,r)))},j=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h){e.next=2;break}return e.abrupt("return",g(!0));case 2:return e.next=4,x.collection("users/".concat(a.id,"/contacts")).doc("".concat(E)).update(Object(s.a)({},m));case 4:return c(),e.abrupt("return",g(!1));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.collection("users/".concat(a.id,"/contacts")).doc("".concat(E)).delete();case 2:c();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"contact-card"},r.a.createElement("div",{className:"icon-row"},r.a.createElement("div",{className:"data-row",onClick:j,style:{display:"flex",justifyContent:"flex-end"}},h?r.a.createElement("img",{src:"https://img.icons8.com/dusk/24/000000/save.png",alt:"save-ico"}):r.a.createElement("img",{src:"https://img.icons8.com/dusk/24/000000/edit.png",alt:"edit-ico"})),r.a.createElement("div",{className:"data-row",onClick:S,style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("img",{src:"https://img.icons8.com/dusk/24/000000/delete-forever.png",alt:"delete-ico"}))),r.a.createElement("div",{className:"contact-logo"},"M"===m.gender?r.a.createElement("img",{src:"https://img.icons8.com/dusk/64/000000/user.png",alt:"male-ico"}):r.a.createElement("img",{src:"https://img.icons8.com/dusk/64/000000/user-female.png",alt:"female-ico"})),r.a.createElement("div",{className:"data"},r.a.createElement("div",{className:"data-row"},r.a.createElement("span",null,"Name: "),h?r.a.createElement("input",{type:"text",name:"name",value:m.name,onChange:k}):r.a.createElement("span",{style:{marginLeft:"0.5rem"}},b)),r.a.createElement("div",{className:"data-row",style:{display:"flex"}},r.a.createElement("span",null,"Gender: "),h?r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{className:"gender"},r.a.createElement("input",{type:"radio",name:"gender",value:"M",onChange:k,checked:"M"===m.gender}),r.a.createElement("label",null,"M")),r.a.createElement("div",{className:"gender"},r.a.createElement("input",{type:"radio",name:"gender",value:"F",onChange:k,checked:"F"===m.gender}),r.a.createElement("label",null,"F"))):r.a.createElement("span",{style:{marginLeft:"0.5rem"}},O)),r.a.createElement("div",{className:"data-row"},r.a.createElement("span",null,"Phone no.: "),h?r.a.createElement("input",{type:"text",name:"number",value:m.number,onChange:k}):r.a.createElement("span",null,N)),r.a.createElement("div",{className:"data-row"},r.a.createElement("span",null,"Email: "),r.a.createElement("span",{style:{marginLeft:"0.5rem"}},E)),r.a.createElement("div",{className:"data-row"},r.a.createElement("span",null,"City: "),h?r.a.createElement("input",{type:"text",name:"location",value:m.location,onChange:k}):r.a.createElement("span",{style:{marginLeft:"0.5rem"}},y))))}),P=(a(51),function(e){var t=e.filterContacts,a=Object(n.useState)({name:"",number:"",email:"",location:"",gender:""}),c=Object(C.a)(a,2),l=c[0],s=(c[1],Object(n.useState)("name")),o=Object(C.a)(s,2),i=o[0],u=o[1];return r.a.createElement("div",{className:"search-box"},r.a.createElement("input",{className:"search-bar",onChange:function(e){t({name:i,value:e.target.value})},type:"text",placeholder:"Search by category using dropdown..."}),r.a.createElement("select",{name:"category",onChange:function(e){u(e.target.value)},className:"dropdown"},Object.keys(l).map((function(e){return r.a.createElement("option",{value:e,key:e,className:"option"},e[0].toUpperCase()+e.slice(1))}))))}),I=a(33),F=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).toggleFunc=function(){n.setState({toggleNewContact:!n.state.toggleNewContact})},n.filterContacts=function(e){var t=e.name,a=e.value;n.props.searchFilter({name:t,value:a})},n.state={toggleNewContact:!1},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return this.props.currentUser?r.a.createElement("div",{className:"home-container"},r.a.createElement("div",{className:"full-row"}," ",r.a.createElement(P,{filterContacts:this.filterContacts})),r.a.createElement("div",{className:"directory"},r.a.createElement("div",{style:{display:"flex",width:"100%",margin:"1rem"}}," ",r.a.createElement("div",{className:"add-contact",onClick:function(){return e.toggleFunc()}},r.a.createElement("img",{src:"https://img.icons8.com/dusk/32/000000/add-user-group-man-woman.png",alt:"add"}),r.a.createElement("p",null,"ADD CONTACT")),this.state.toggleNewContact?r.a.createElement(M,{currentUser:this.props.currentUser,newContactAdded:this.props.newContactAdded}):null,r.a.createElement("div",{className:"csv-box",onClick:this.exportToCsv},r.a.createElement("img",{src:"https://img.icons8.com/dusk/32/000000/export-csv.png",alt:"export-to-csv"}),r.a.createElement(I.CSVLink,{data:this.props.contacts},"EXPORT TO CSV"))),this.props.contacts.map((function(t){return r.a.createElement(z,{contact:t,key:t.email,currentUser:e.props.currentUser,contactUpdated:e.props.contactUpdated})})))):r.a.createElement("div",{className:"home-container"},r.a.createElement("h2",null,"Please sign in to view your contacts!"))}}]),a}(r.a.Component),D=(a(57),a(58),a(59),function(e){var t=e.children,a=e.isGoogleSignIn,n=Object(N.a)(e,["children","isGoogleSignIn"]);return r.a.createElement("div",Object.assign({className:"".concat(a?"google-sign-in":""," custom-button")},n),t)}),L=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleSubmit=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.state,r=a.email,c=a.password,e.prev=2,e.next=5,b.signInWithEmailAndPassword(r,c);case 5:n.setState({email:"",password:""}),n.props.history.push("/"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0),alert(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(w.a)({},r,a))},n.state={email:"",password:""},n}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",null,r.a.createElement(O,{name:"email",value:this.state.email,type:"email",onChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(O,{name:"password",value:this.state.password,type:"password",onChange:this.handleChange,label:"Password",required:!0})),r.a.createElement("div",{className:"button-group"}," ",r.a.createElement(D,{onClick:this.handleSubmit},"Sign In")))}}]),a}(r.a.Component),G=Object(y.f)(L),T=(a(62),function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleSubmit=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,r,c,l,s,o,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=n.state,r=a.displayName,c=a.email,l=a.password,s=a.confirmPassword,l===s){e.next=5;break}return alert("Passwords don't match"),e.abrupt("return");case 5:return e.prev=5,e.next=8,b.createUserWithEmailAndPassword(c,l);case 8:return o=e.sent,u=o.user,e.next=12,g(u,{displayName:r});case 12:n.setState({email:"",password:"",displayName:"",confirmPassword:""}),n.props.history.push("/"),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(5),console.error(e.t0),alert(e.t0);case 20:case"end":return e.stop()}}),e,null,[[5,16]])})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(w.a)({},a,r))},n.state={email:"",password:"",displayName:"",confirmPassword:""},n}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.displayName,a=e.email,n=e.password,c=e.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have an account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form"},r.a.createElement(O,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name"}),r.a.createElement(O,{type:"email",name:"email",value:a,onChange:this.handleChange,label:"Email"}),r.a.createElement(O,{type:"password",name:"password",value:n,onChange:this.handleChange,label:"Password"}),r.a.createElement(O,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm Password"})),r.a.createElement(D,{onClick:this.handleSubmit},"SIGN UP"))}}]),a}(r.a.Component)),R=Object(y.f)(T),W=function(){return r.a.createElement("div",{className:"auth"},r.a.createElement(G,null),r.a.createElement(R,null))},B=(a(63),a(11)),V=function(e){var t=e.currentUser;return r.a.createElement("div",{className:"header"},r.a.createElement(B.b,{to:"/",className:"logo-container"},r.a.createElement("img",{src:"https://img.icons8.com/dusk/64/000000/contact-card.png",className:"logo",alt:"contacts"})),r.a.createElement("div",{className:"options"},t?r.a.createElement("div",{className:"option"}," ","Hi,"," ",t.displayName[0].toUpperCase()+t.displayName.slice(1),"!"):null,t?r.a.createElement("div",{className:"option option-link",onClick:function(){return b.signOut()}},"SIGN OUT"):r.a.createElement(B.b,{className:"option option-link",to:"/auth"},"SIGN IN")))},q=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).unsubscribeFromAuth=null,n.newContactAdded=Object(u.a)(i.a.mark((function e(){var t,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],a=v.a.firestore(),e.next=4,a.doc("users/".concat(n.state.currentUser.id)).collection("contacts").get();case 4:return r=e.sent,e.next=7,r.docs.map((function(e){return t.push(e.data())}));case 7:n.setState({contacts:t,unfilteredContacts:t});case 8:case"end":return e.stop()}}),e)}))),n.contactUpdated=Object(u.a)(i.a.mark((function e(){var t,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],a=v.a.firestore(),e.next=4,a.doc("users/".concat(n.state.currentUser.id)).collection("contacts").get();case 4:return r=e.sent,e.next=7,r.docs.map((function(e){return t.push(e.data())}));case 7:n.setState({contacts:t,unfilteredContacts:t});case 8:case"end":return e.stop()}}),e)}))),n.searchFilter=function(e){var t=e.name,a=e.value,r=n.state.unfilteredContacts.filter((function(e){return e[t].toLowerCase().includes(a.toLowerCase())}));n.setState({contacts:r})},n.state={currentUser:null,contacts:[],unfilteredContacts:[]},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.onAuthStateChanged(function(){var t=Object(u.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=7;break}return t.next=3,g(a);case 3:t.sent.onSnapshot(function(){var t=Object(u.a)(i.a.mark((function t(a){var n,r,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],r=v.a.firestore(),t.next=4,r.doc("users/".concat(a.id)).collection("contacts").get();case 4:return c=t.sent,t.next=7,c.docs.map((function(e){return n.push(e.data())}));case 7:e.setState({currentUser:Object(s.a)({id:a.id},a.data()),contacts:n,unfilteredContacts:n});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=8;break;case 7:e.setState({currentUser:a});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(V,{currentUser:this.state.currentUser}),r.a.createElement(y.c,null,r.a.createElement(y.a,{path:"/",exact:!0,render:function(t){return r.a.createElement(F,Object.assign({},t,{currentUser:e.state.currentUser,contacts:e.state.contacts,newContactAdded:e.newContactAdded,contactUpdated:e.contactUpdated,searchFilter:e.searchFilter}))}}),r.a.createElement(y.a,{path:"/auth",exact:!0,component:W})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(B.a,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.931be997.chunk.js.map