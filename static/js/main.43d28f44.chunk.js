(this["webpackJsonpreactjs-starter"]=this["webpackJsonpreactjs-starter"]||[]).push([[0],{134:function(e,t,a){e.exports=a.p+"static/media/notfoundicon.ad36f209.png"},139:function(e,t,a){e.exports=a(412)},410:function(e,t,a){},411:function(e,t,a){},412:function(e,t,a){"use strict";a.r(t);var l=a(0),r=a.n(l),n=a(8),s=a.n(n),c=a(130),o=(a(150),a(9)),i=a(10),m=a(131),d="https://React-sites.cdn.prismic.io/api/v2",p=e=>"page"===e.type?"/page/".concat(e.uid):"/",u=a.n(m).a.client(d,{accessToken:""}),x=a(21),E=(a(132),a(133)),f=a.n(E),b=({history:e,location:t})=>(Object(l.useEffect)(()=>{var a=f.a.parse(t.search.slice(1));if(!a.token)return console.warn("Unable to retrieve session token from provided url. \n\n      Check https://prismic.io/docs/rest-api/beyond-the-api/the-preview-feature for more info");u.previewSession(a.token,p,"/").then(t=>e.push(t))}),null),g=a(134),h=a.n(g),y=()=>r.a.createElement("div",{className:"py-30 h-screen flex justify-items-center flex-col items-center"},r.a.createElement("img",{className:"h-1/2",src:h.a,alt:"logo"}),r.a.createElement("h2",{className:"py-4"},"Document not found"),r.a.createElement("p",{className:"text-blue-400"},r.a.createElement(o.b,{to:"/"},"Return to homepage"))),v=a(50),N=a.n(v),w=a(67),j=a(20),O=({match:e})=>{var t=Object(l.useState)(null),a=Object(x.a)(t,2),n=a[0],s=a[1],c=Object(l.useState)(!1),o=Object(x.a)(c,2),i=o[0],m=o[1],d=e.params.uid;return Object(l.useEffect)(()=>{(function(){var e=Object(w.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.getByUID("page",d);case 2:if(!(t=e.sent)){e.next=7;break}return e.abrupt("return",s(t));case 7:console.warn("Page document not found. Make sure it exists in your Prismic repository"),m(!0);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()},[d]),n?r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},className:"pt-30"},r.a.createElement("div",{style:{textAlign:"center",fontSize:"30px",fontStyle:"bold",padding:"30px"}},r.a.createElement("h1",{className:"text-4xl font-bold text-gray-900"},j.RichText.asText(n.data.title)),r.a.createElement("img",{className:"py-10",src:n.data.image.url,alt:n.data.image.alt}),r.a.createElement(j.RichText,{render:n.data.description,linkResolver:p}))):i?r.a.createElement(y,null):null};class k extends l.Component{render(){return r.a.createElement("div",null,r.a.createElement("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-200"},r.a.createElement("div",{className:"max-w-md w-full p-6 bg-white rounded-lg shadow-lg bg-opacity-75"},r.a.createElement("div",null,r.a.createElement("img",{className:"mx-auto h-12 w-auto",src:"https://prismic.io/doc-assets/images/logo-dark.svg",alt:"Workflow"}),r.a.createElement("h2",{className:"px-4 text-red-600 text-center font-bold"},"TheSeeed"),r.a.createElement("h2",{className:"mt-6 text-center text-xl leading-9 font-extrabold text-gray-900"},"Sign in to your account"),r.a.createElement("p",{className:"mt-2 text-center text-sm leading-5 text-gray-600"},"Or ",r.a.createElement(o.b,{to:"/signup",href:"#",className:"font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"},"Sign Up"))),r.a.createElement("form",{className:"mt-8",action:"#",method:"POST"},r.a.createElement("input",{type:"hidden",name:"remember",value:"true"}),r.a.createElement("div",{className:"rounded-md shadow-sm"},r.a.createElement("div",null,r.a.createElement("input",{"aria-label":"Email address",name:"email",type:"email",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5",placeholder:"Email address"})),r.a.createElement("div",{className:"-mt-px"},r.a.createElement("input",{"aria-label":"Password",name:"password",type:"password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5",placeholder:"Password"}))),r.a.createElement("div",{className:"mt-6 flex items-center justify-between"},r.a.createElement("div",{className:"flex items-center"},r.a.createElement("input",{id:"remember_me",type:"checkbox",className:"form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"}),r.a.createElement("label",{for:"remember_me",className:"ml-2 block text-sm leading-5 text-gray-900"},"Remember me")),r.a.createElement("div",{className:"text-sm leading-5"},r.a.createElement("a",{href:"#",className:"font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"},"Forgot your password?"))),r.a.createElement("div",{className:"mt-6"},r.a.createElement(o.b,{to:"/student"},r.a.createElement("button",{type:"submit",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"},r.a.createElement("span",{className:"absolute left-0 inset-y-0 flex items-center pl-3"},r.a.createElement("svg",{className:"h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150",fill:"currentColor",viewBox:"0 0 20 20"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z","clip-rule":"evenodd"}))),"Login")))))))}}var T=k;class S extends l.Component{render(){return r.a.createElement("div",null,r.a.createElement("div",{className:"min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8  bg-gray-200"},r.a.createElement("div",{className:"max-w-md w-full bg-white bg-opacity-75 p-6 shadow-lg rounded-lg"},r.a.createElement("div",{className:""},r.a.createElement("img",{className:"mx-auto h-12 w-auto",src:"https://prismic.io/doc-assets/images/logo-dark.svg",alt:"Workflow"}),r.a.createElement("h2",{className:"px-4 text-red-600 text-center font-bold"},"TheSeeed"),r.a.createElement("h2",{className:"mt-6 text-center text-xl leading-9 font-extrabold text-gray-900"},"Sign Up a New Account with few step!"),r.a.createElement("p",{className:"mt-2 text-center text-sm leading-5 text-gray-600"},"Or ",r.a.createElement(o.b,{to:"/login",href:"#",className:"font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"},"Login"))),r.a.createElement("form",{className:"mt-8",action:"#",method:"POST"},r.a.createElement("input",{type:"hidden",name:"remember",value:"true"}),r.a.createElement("div",{className:"rounded-md shadow-sm"},r.a.createElement("div",null,r.a.createElement("input",{"aria-label":"Full Name",name:"fullname",type:"text",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5",placeholder:"Full Name"})),r.a.createElement("div",null,r.a.createElement("input",{"aria-label":"Email address",name:"email",type:"email",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5",placeholder:"Email address"})),r.a.createElement("div",{className:"-mt-px"},r.a.createElement("input",{"aria-label":"Password",name:"password",type:"password",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5",placeholder:"Password"}))),r.a.createElement("div",{className:"mt-6"},r.a.createElement("button",{type:"submit",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"},r.a.createElement("span",{className:"absolute left-0 inset-y-0 flex items-center pl-3"},r.a.createElement("svg",{className:"h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150",fill:"currentColor",viewBox:"0 0 20 20"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z","clip-rule":"evenodd"}))),"Sign Up"))))))}}var _=S,C=a(24),A=()=>({type:"FETCH_POST_REQUEST"}),R=()=>{var e=[{id:1,title:"Today",icon:"menu"},{id:2,title:"Weekly",icon:"menu"},{id:3,title:"Monthly",icon:"menu"},{id:4,title:"Socail",icon:"menu"},{id:5,title:"Sport",icon:"menu"},{id:6,title:"Sport",icon:"menu"},{id:7,title:"Sport",icon:"menu"}],t=Object(l.useState)(e[0]),a=Object(x.a)(t,2),n=a[0],s=a[1],c=e.map((e,t)=>r.a.createElement("div",{key:t,onClick:()=>s(e),className:"relative transistion duration-100 cursor-pointer px-4 border border-t-0 border-r-0 border-l-0 border-solid"},r.a.createElement("p",{className:"text-lg font-medium hover:text-red-600 ".concat(n.id===e.id&&"text-red-600 border-red-600 border-2 border-t-0 border-r-0 border-l-0 border-solid")},e.title)));return r.a.createElement("div",{className:"flex overflow-scroll"},c)},D=()=>{var e=Object(C.b)(),t=Object(C.c)(e=>e.post.posts);Object(l.useEffect)(()=>{e(e=>{e(A),u.getSingle("homepage").then(t=>{console.log(t.data),e({type:"FETCH_POST_SUCCESS",payload:t.data})}).catch(t=>{console.log(t),e((e=>({type:"FETCH_POST_FAILURE",payload:e}))(t))})})},[]);var a=t.body&&t.body.map((function(e,t){if("text"===e.slice_type)return j.RichText.render(e.primary.rich_text,p);if("list_of_articles"===e.slice_type){var a=e.items&&e.items.map((function(e,a){return r.a.createElement("div",{key:t+10,className:"flex flex-wrap p-4 m-4 relative"},r.a.createElement("div",{className:"w-full sm:w-2/5"},r.a.createElement("img",{className:"w-full h-64 object-cover",src:e.thumbnail.url,alt:""})),r.a.createElement("div",{className:"flex-1 sm:px-4 pb-20 sm:pb-0"},r.a.createElement("div",{className:"text-gray-900 text-xl font-bold leading-none"},j.RichText.render(e.title1)),r.a.createElement("p",{className:"text-xs text-red-800"},r.a.createElement("span",{className:""},"Author: JONH DF",e.author," ")," | ",r.a.createElement("span",{className:"font-light"},e.publish_date)),r.a.createElement("div",{className:"text-sm text-gary-600 font-light pt-4"},j.RichText.render(e.subtitle)),r.a.createElement("div",{className:"absolute bottom-0 pb-4 text-xs font-bold text-gray-900 flex-1 flex items-end"},r.a.createElement(o.b,{to:"/detail/",target:"_blank"},r.a.createElement("div",{className:" hover:bg-red-600 hover:text-white py-1 px-4 mx-1 border border-solid "},"READ")),r.a.createElement(o.b,{to:"/login",target:"_blank"},r.a.createElement("div",{className:" hover:bg-red-600 hover:text-white py-1 px-4 mx-1 border border-solid "},"SAVE")))))}));return r.a.createElement("div",{className:"image-gallery",key:t},r.a.createElement("div",{className:"gallery-title text-2xl font-bold px-4"}),r.a.createElement("div",{className:"flex flex-col divide-y"},a))}return null})),n=t.body&&t.body.map((function(e,t){if("text"===e.slice_type)return j.RichText.render(e.primary.rich_text,p);if("list_of_articles"===e.slice_type){var a=e.items&&e.items.map((function(e,a){return r.a.createElement("div",{key:t+10,className:"flex flex-wrap p-4 relative border border-t-0 border-l-0 border-r-0"},r.a.createElement("div",{className:"flex-1 sm:px-4 pb-10"},r.a.createElement("div",{className:"text-gray-900 text-sm font-bold leading-none"},j.RichText.render(e.title1)),r.a.createElement("p",{className:"text-xs text-red-800 py-2"},r.a.createElement("span",{className:""},"Author: JONH DF",e.author," ")," | ",r.a.createElement("span",{className:"font-light"},e.publish_date)),r.a.createElement("div",{className:"absolute bottom-4 right-4 text-xs font-bold text-gray-900 flex-1 flex items-end justify-end"},r.a.createElement(o.b,{to:"/detail/",target:"_blank"},r.a.createElement("div",{className:" hover:bg-red-600 hover:text-white py-1 px-4 mx-1 border border-solid "},"READ")),r.a.createElement(o.b,{to:"/login",target:"_blank"},r.a.createElement("div",{className:" hover:bg-red-600 hover:text-white py-1 px-4 mx-1 border border-solid "},"SAVE")))))}));return r.a.createElement("div",{className:"image-gallery",key:t},r.a.createElement("div",{className:"gallery-title text-2xl font-bold px-4"}),r.a.createElement("div",{className:"flex flex-col"},a))}return null}));return r.a.createElement("div",{className:""},r.a.createElement("img",{className:" w-full h-30vh object-cover",src:t.slider&&t.slider.url}),r.a.createElement("div",{className:"z-100  w-full flex justify-center text-6xl font-bold  py-20"},j.RichText.render(t.title,p)),r.a.createElement("div",{className:"sm:px-10 px-2"},r.a.createElement(R,null)),r.a.createElement("div",{className:"w-full border border-dash border-t-0 border-r-0 border-l-0"},r.a.createElement("div",{className:""})),r.a.createElement("div",{className:"flex flex-wrap divide-x divide-gray-300"},r.a.createElement("div",{className:"w-full sm:w-2/3"},a),r.a.createElement("div",{className:"w-full sm:w-1/3"},r.a.createElement("h1",{className:"text-xl font-bold text-center pt-10 sm:py-4 text-red-600"},"HOT TOPIC"),n)))},H=()=>{var e=[{id:1,question:"what is the site?",answer:"this site provide News, Tips and other information."},{id:2,question:"what is the site?",answer:"this site provide News, Tips and other information."},{id:3,question:"what is the site?",answer:"this site provide News, Tips and other information."},{id:4,question:"what is the site?",answer:"this site provide News, Tips and other information."}].map((e,t)=>r.a.createElement("div",{className:"py-4"},r.a.createElement("div",{"data-open":"0",className:"flex justify-between items-center"},r.a.createElement("div",{className:""},r.a.createElement("h4",{className:"font-meduim text-2xl"},e.question)),r.a.createElement("div",null,r.a.createElement("button",{className:"w-8 h-8"},"^"))),r.a.createElement("div",{className:"text-gray-600"},r.a.createElement("p",null,e.answer))));return r.a.createElement("div",{className:"py-30 bg-gray-200"},r.a.createElement("h1",{className:"text-3xl text-center font-bold py-8"},"How Could We Do to Help You?"),r.a.createElement("div",{className:"flex justify-center"},r.a.createElement("div",{className:" w-1/2 h-10 p-2 rounded-lg shadow-xl bg-white"},r.a.createElement("input",{className:"border-none w-full",type:"text",placeholder:"What are you looking for?"}))),r.a.createElement("div",{className:"flex justify-center py-8"},r.a.createElement("div",{className:"flex flex-col divide-y"},e)))},L=()=>{var e=[{id:1,title:"Facebook",icon:"https://cdn.iconscout.com/icon/free/png-512/facebook-logo-2019-1597680-1350125.png",url:""},{id:1,title:"Twitter",icon:"https://cdn2.iconfinder.com/data/icons/metro-uinvert-dock/256/Twitter_NEW.png",url:""},{id:1,title:"Instagram",icon:"https://image.flaticon.com/icons/png/512/174/174855.png",url:""},{id:1,title:"Line",icon:"https://cdn.worldvectorlogo.com/logos/line-messenger.svg",url:""}].map((e,t)=>r.a.createElement("a",{href:e.url,target:"_blank",key:t,className:"px-4 cursor-pointer"},r.a.createElement("img",{className:"w-10 h-10 object-contain mx-auto",src:e.icon,alt:""}),r.a.createElement("p",{className:"text-bold text-center text-sm pt-4"},e.title)));return r.a.createElement("div",{className:"py-30 bg-gray-200"},r.a.createElement("h1",{className:"text-3xl text-center font-bold py-8"},"CONTACT US"),r.a.createElement("div",{className:"flex justify-center"},r.a.createElement("div",{className:" w-1/2  p-10 rounded-lg shadow-xl bg-white flex divide-x"},r.a.createElement("div",{className:"w-1/2 "},r.a.createElement("img",{className:"mx-auto h-10 w-auto",src:"https://prismic.io/doc-assets/images/logo-dark.svg",alt:"Workflow"}),r.a.createElement("h1",{className:"text-lg text-red-600 font-bold text-center py-10"},"THE SEEED")),r.a.createElement("div",{className:"w-1/2 flex justify-center items-center"},r.a.createElement("div",{className:"px-4"},r.a.createElement("p",{className:"text-sm text-gray-600"},"LOCATION: ",r.a.createElement("span",{className:"text-sm text-gray-800 font-medium"},"WORLD WIDE")),r.a.createElement("p",{className:"text-sm text-gray-600"},"TEL: ",r.a.createElement("span",{className:"text-sm text-gray-800 font-medium"},"00-11-222-333")),r.a.createElement("p",{className:"text-sm text-gray-600"},"MAIL: ",r.a.createElement("span",{className:"text-sm text-gray-800 font-medium"},"ADMIN@THESEEED.COM")))))),r.a.createElement("div",{className:"flex justify-center"},r.a.createElement("div",{className:"flex py-10"},e)))},P=()=>r.a.createElement("div",{className:"py-30 bg-gray-200"},r.a.createElement("h1",{className:"text-3xl text-center font-bold py-8"},"ABOUT US"),r.a.createElement("div",{className:"flex justify-center"},r.a.createElement("div",{className:" w-1/2  p-10 rounded-lg shadow-xl bg-white flex divide-x"},r.a.createElement("div",{className:"w-1/2 "},r.a.createElement("img",{className:"mx-auto h-10 w-auto",src:"https://prismic.io/doc-assets/images/logo-dark.svg",alt:"Workflow"}),r.a.createElement("h1",{className:"text-lg text-red-600 font-bold text-center py-10"},"THE SEEED")),r.a.createElement("div",{className:"w-1/2 flex justify-center items-center"},r.a.createElement("div",{className:"px-4"},r.a.createElement("p",{className:"text-sm text-gray-600"},"LOCATION: ",r.a.createElement("span",{className:"text-sm text-gray-800 font-medium"},"WORLD WIDE")),r.a.createElement("p",{className:"text-sm text-gray-600"},"TEL: ",r.a.createElement("span",{className:"text-sm text-gray-800 font-medium"},"00-11-222-333")),r.a.createElement("p",{className:"text-sm text-gray-600"},"MAIL: ",r.a.createElement("span",{className:"text-sm text-gray-800 font-medium"},"ADMIN@THESEEED.COM")))))),r.a.createElement("div",{className:" flex justify-center"},r.a.createElement("div",{className:"py-10 w-1/2"},r.a.createElement("p",{className:"text-gray-600 text-lg text-center"},"Why does The Economist call itself a newspaper? When James Wilson published the prospectus for The Economist, a new periodical he planned to launch, he described it as \u201ca weekly paper, to be published every Saturday\u201d. To modern eyes the 19th-century black-and-white incarnation of The Economist is clearly a newspaper, and it looked very similar until the middle of the 20th century. The red logo appeared for the first time in 1959, the first colour cover in 1971, and it was only in 2001 that full colour was introduced on all inside pages. By the time the transformation from newspaper to magazine format had been completed, the habit of referring to ourselves as \u201cthis newspaper\u201d had stuck.")))),I=({match:e})=>{var t=Object(l.useState)(null),a=Object(x.a)(t,2),n=a[0],s=a[1],c=Object(l.useState)(!1),o=Object(x.a)(c,2),i=o[0],m=o[1],d=e.params.uid;return Object(l.useEffect)(()=>{(function(){var e=Object(w.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.getByUID("page",d);case 2:if(!(t=e.sent)){e.next=7;break}return e.abrupt("return",s(t));case 7:console.warn("Page document not found. Make sure it exists in your Prismic repository"),m(!0);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()},[d]),n?r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},className:"pt-30"},r.a.createElement("div",{style:{textAlign:"center",fontSize:"30px",fontStyle:"bold",padding:"30px"}},r.a.createElement("h1",{className:"text-4xl font-bold text-gray-900"},j.RichText.asText(n.data.title)),r.a.createElement("img",{className:"py-10",src:n.data.image.url,alt:n.data.image.alt}),r.a.createElement(j.RichText,{render:n.data.description,linkResolver:p}))):i?r.a.createElement(y,null):null},W=({match:e,history:t})=>{var a=Object(l.useState)(!1),n=Object(x.a)(a,2),s=n[0],c=n[1],m=()=>{c(!s),console.log("click")},d=Object(i.g)(),p=Object(C.c)(e=>e.nav.links),u=Object(C.c)(e=>e.nav.selectedLink),E=Object(C.b)(),f=p.map(e=>r.a.createElement(o.b,{onClick:()=>{},key:e.path,className:"hover:text-red-600 ".concat(u&&u.path===e.path&&"text-red-500"),to:e.path},e.title));Object(l.useEffect)(()=>{console.log(d.pathname),E({type:"NAV_SELECT_BY_PATHG",payload:d.pathname})},[d]);return r.a.createElement("div",{style:{zIndex:999},className:"fixed top-0 inset-x-0 bg-gray-200  shadow-lg font-semibold text-gray-900 flex p-4 sm:pl-10  bg-opacity-75"},r.a.createElement("div",{className:"flex items-center"},r.a.createElement(o.b,{className:"hover:text-red-600",to:"/"},r.a.createElement("div",{className:"flex justify-center items-center"},r.a.createElement("img",{className:"mx-auto h-10 w-auto",src:"https://prismic.io/doc-assets/images/logo-dark.svg",alt:"Workflow"}),r.a.createElement("h2",{className:"px-4 text-red-600"},"TheSeeed")))),r.a.createElement("div",{className:"hidden sm:flex flex-1  justify-end items-center px-4 space-x-4 text-sm"},f,r.a.createElement("div",{className:"px-4 space-x-2 pl-8"},r.a.createElement(o.b,{className:" rounded-lg p-2 px-4 text-gray-800",to:"/login"},"Login"),r.a.createElement(o.b,{className:"rounded-lg p-2 px-4 border-solid border-2 border-red-600",to:"/signup"},"Sign up"))),r.a.createElement("div",{className:"sm:hidden flex-1 flex justify-end"},r.a.createElement("button",{onClick:m,className:"px-4 p-2  rounded-lg shadow-lg text-red-600"},"=")),s&&r.a.createElement("div",{className:"transition  duration-500 transform ease-in-out fixed top-0 right-0 h-screen w-2/3 bg-white shadow-lg"},r.a.createElement("div",{className:"flex justify-end p-2"},r.a.createElement("button",{onClick:m,className:"px-4 p-2  rounded-lg shadow-lg text-red-600"},"X")),r.a.createElement("div",{className:"flex flex-col p-4 space-y-2"},f,r.a.createElement("div",{className:"p-2 flex flex-col space-y-2 text-center"},r.a.createElement(o.b,{className:"bg-red-600 rounded-lg p-2 px-4 text-white  shadow-lg",to:"/login"},"Login"),r.a.createElement(o.b,{className:"bg-white rounded-lg p-2 px-4 text-red-600 shadow-lg",to:"/signup"},"Sign up")))))},U=()=>{var e=Object(C.c)(e=>e.nav.links).map(e=>r.a.createElement(o.b,{key:e.path,className:"hover:text-red-600",to:e.path},e.title));return r.a.createElement("div",{className:"bg-gray-100 relative border border-b-0 border-r-0 border-l-0 border-solid "},r.a.createElement("div",{className:"flex flex-wrap p-6 py-20 "},r.a.createElement("div",{className:"w-1/2 sm:w-1/4 flex-1 flex flex-col justify-start  space-y-4 text-gray-800 text-sm font-semibold px-8"},e),r.a.createElement("div",{className:"w-full sm:w-2/4 relative flex"},r.a.createElement("div",{style:{width:"1px"},className:"hidden sm:inline-block h-full bg-gray-300"}),r.a.createElement("div",{className:"flex-1 flex items-center justify-start px-6 sm:px-10  text-gray-800"},r.a.createElement("div",{className:"space-y-4"},r.a.createElement("h3",{className:"text-lg font-bold"},"Web Info"),r.a.createElement("ul",{className:"list-disc space-y-4"},r.a.createElement("li",null,"Location: ",r.a.createElement("span",null,"WORLDWIDE")),r.a.createElement("li",null,"Tel: ",r.a.createElement("span",null,"00-111-222-3333")),r.a.createElement("li",null,"Email: ",r.a.createElement("span",null,"admin@maiil.com"))))))),r.a.createElement("div",{className:"h-10 absolute bottom-0 inset-x-0 bg-gray-900 flex items-center"},r.a.createElement("div",{className:"text-white"},r.a.createElement("p",{className:"text-sm font-bold px-2 "},"\xa9 2020 Powered by THE SEEED"))))},F=Object(i.h)(e=>{var t=/([^/]+)\.cdn.prismic\.io\/api/.exec(d)[1],a=[{path:"/page:uid",component:O},{path:"/contact",component:L},{path:"/about",component:P},{path:"/help",component:H},{path:"/preview",component:b},{path:"/home",component:D},{path:"/login",component:T},{path:"/signup",component:_}];return r.a.createElement(l.Fragment,null,r.a.createElement(c.Helmet,null,r.a.createElement("script",{async:!0,defer:!0,src:"//static.cdn.prismic.io/prismic.js?repo=".concat(t,"&new=true")})),r.a.createElement(o.a,null,r.a.createElement(W,e),r.a.createElement(i.d,null,r.a.createElement(i.a,{exact:!0,from:"/",to:"/home"}),a.map(e=>r.a.createElement(i.b,{key:e.path,exact:!0,path:e.path,component:e.component})),r.a.createElement(i.b,{exact:!0,path:"/page/:uid",component:O}),r.a.createElement(i.b,{exact:!0,path:"/detail/:uid",component:I}),r.a.createElement(i.b,{component:y})),r.a.createElement(U,null)))}),z=(a(410),a(411),a(42)),M=a(137),q=a(16),V={loading:!1,posts:[],error:""},B=(e=V,t)=>{switch(t.type){case"FETCH_POST_REQUEST":return Object(q.a)(Object(q.a)({},e),{},{loading:!0,error:""});case"FETCH_POST_FAILURE":return Object(q.a)(Object(q.a)({},e),{},{loading:!1,error:t.payload});case"FETCH_POST_SUCCESS":return Object(q.a)(Object(q.a)({},e),{},{loading:!1,error:"",posts:t.payload});case"POST_ADD":case"POST_UPDATE":case"POST_REMOVE":return Object(q.a)({},e);default:return e}},J={loading:!1,links:[{path:"/home",title:"Home",icon:"menu"},{path:"/contact",title:"Contact",icon:"menu"},{path:"/about",title:"About",icon:"menu"},{path:"/help",title:"Help",icon:"menu"}],selectedLink:null,error:""},Y=(e=J,t)=>{switch(t.type){case"NAV_SELECT":return Object(q.a)(Object(q.a)({},e),{},{selectedLink:t.payload});case"NAV_SELECT_BY_PATHG":return Object(q.a)(Object(q.a)({},e),{},{selectedLink:e.links.find(e=>e.path===t.payload)});default:return Object(q.a)({},e)}},G=a(138),Q=Object(z.combineReducers)({post:B,nav:Y}),X=Object(z.createStore)(Q,Object(M.composeWithDevTools)(Object(z.applyMiddleware)(G.a)));s.a.render(r.a.createElement(o.a,{basename:"".concat("/theseeed")},r.a.createElement(C.a,{store:X},r.a.createElement(F,null))),document.getElementById("root"))}},[[139,1,2]]]);
//# sourceMappingURL=main.43d28f44.chunk.js.map