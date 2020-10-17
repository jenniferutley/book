(this.webpackJsonpbook=this.webpackJsonpbook||[]).push([[0],{26:function(e,a,t){e.exports=t.p+"static/media/background1.73996fd6.jpg"},28:function(e,a,t){e.exports=t(56)},33:function(e,a,t){},56:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),l=t(25),c=t.n(l),s=(t(33),t(8)),r=t(7),m=t(1),i=t(26),u=t.n(i);function p(){var e=o.a.createElement("ion-icon",{name:"trending-up-sharp"}),a=o.a.createElement("ion-icon",{name:"book-sharp"}),t=o.a.createElement("ion-icon",{name:"chatbubbles-sharp"});return o.a.createElement("div",{className:"Home"},o.a.createElement("img",{className:"background-img",src:u.a,alt:"ladder in front of bookshelf"}),o.a.createElement("div",{className:"right-side"},o.a.createElement("h1",null,"Welcome"),o.a.createElement("div",{className:"browse-options"},o.a.createElement("p",null,"Here you will find an extensive catalog of book listings. If you have something specific in mind, please use the search bar in the top left. Otherwise you may explore one of our curated lists by choosing one of the options below."),o.a.createElement("div",{className:"collections"},o.a.createElement("p",{className:"collections-card"},e," Best Sellers"),o.a.createElement("p",{className:"collections-card"},a," Greatest of All Time"),o.a.createElement("p",{className:"collections-card"},t," Most Reviewed")))))}function b(){return o.a.createElement("div",null,o.a.createElement("h1",null,"I am about!"))}function E(e){var a=e.searchTerm,t=e.setSearchTerm,n=(e.searchType,e.setSearchType),l=o.a.createElement("ion-icon",{name:"search-sharp"});return o.a.createElement("div",null,o.a.createElement("form",{className:"search-bar"},o.a.createElement("select",{name:"search-options",id:"search-options",onChange:function(e){switch(console.log("you want to search thusly "+e.target.value),e.target.value){case"any":n("");break;case"title":n("intitle:");break;case"author":n("inauthor:");break;case"subject":n("subject:");break;case"isbn":n("isbn:");break;default:n("")}}},o.a.createElement("option",{value:"any"},"any"),o.a.createElement("option",{value:"title"},"title"),o.a.createElement("option",{value:"author"},"author"),o.a.createElement("option",{value:"subject"},"subject"),o.a.createElement("option",{value:"isbn"},"isbn")),o.a.createElement("input",{type:"text",onChange:function(e){t(e.target.value)},value:a}),o.a.createElement(r.b,{to:"/book/results"},o.a.createElement("button",{type:"submit"},l))))}var h=t(11),v=t.n(h);function f(e){var a=e.searchTerm,t=e.setSearchTerm,l=e.searchType,c=Object(n.useState)([]),m=Object(s.a)(c,2),i=m[0],u=m[1];return Object(n.useEffect)((function(){v.a.get("https://www.googleapis.com/books/v1/volumes?q="+l+a+"&maxResults=15").then((function(e){u(e.data.items),console.log(e.data.items),console.log("https://www.googleapis.com/books/v1/volumes?q="+l+a+"&maxResults=15")})).catch((function(e){console.log(e)}))}),[a,t,l]),o.a.createElement("div",{className:"Results"},i?o.a.createElement("div",{className:"book-container"},i.map((function(e,a){return o.a.createElement(r.b,{className:"book-link",to:"/book/details/"+e.id,key:a},o.a.createElement("div",{className:"book-card"},e.volumeInfo.imageLinks?o.a.createElement("img",{src:e.volumeInfo.imageLinks.thumbnail,alt:"cover"}):"",o.a.createElement("p",{className:"book-title"},e.volumeInfo.title),o.a.createElement("p",{className:"book-author"},e.volumeInfo.authors?"by "+e.volumeInfo.authors[0]:""),o.a.createElement("span",{className:"book-published"},e.volumeInfo.publishedDate?e.volumeInfo.publishedDate.substring(0,4):""),o.a.createElement("span",{className:"book-pages"},e.volumeInfo.pageCount?" / "+e.volumeInfo.pageCount+" pages":""," ")))}))):o.a.createElement("p",{className:"no-results"},"No results."))}function d(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],l=a[1],c=window.location.href.split("/").pop();return Object(n.useEffect)((function(){v.a.get("https://www.googleapis.com/books/v1/volumes/"+c).then((function(e){l(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))}),[c]),o.a.createElement("div",{className:"Book-Details"},t.volumeInfo?o.a.createElement("div",null,o.a.createElement("div",{className:"details-container"},t.volumeInfo.imageLinks?o.a.createElement("img",{src:t.volumeInfo.imageLinks.thumbnail.replace("&zoom=1","&zoom=2"),alt:"cover"}):"",o.a.createElement("div",{className:"inner-details-container"},o.a.createElement("p",{className:"details-title"},t.volumeInfo.title),o.a.createElement("p",{className:"details-subtitle"},t.volumeInfo.subtitle),t.volumeInfo.authors?o.a.createElement("p",{className:"details-author"},t.volumeInfo.authors.map((function(e,a){return o.a.createElement("span",{key:a,className:"author-span"},e)}))):"",t.volumeInfo.categories?o.a.createElement("p",null,t.volumeInfo.categories.map((function(e,a){return o.a.createElement("span",{key:a,className:"category-span"},e)}))):"",o.a.createElement("p",{className:"details-publication-date"},o.a.createElement("b",null,"Publication Date:")," ",t.volumeInfo.publishedDate),o.a.createElement("p",null,o.a.createElement("b",null,"Page Count:")," ",t.volumeInfo.pageCount),o.a.createElement("p",null,o.a.createElement("b",null,"Publisher:")," ",t.volumeInfo.publisher),t.volumeInfo.averageRating?o.a.createElement("p",null,o.a.createElement("b",null,"User Rating:")," ",t.volumeInfo.averageRating,"/5 (based on ",t.volumeInfo.ratingsCount>1?t.volumeInfo.ratingsCount+" ratings)":t.volumeInfo.ratingsCount+" rating)"):"",t.volumeInfo.industryIdentifiers?o.a.createElement("p",null,o.a.createElement("b",null,"ISBN-13:")," ",t.volumeInfo.industryIdentifiers[1].identifier):"",o.a.createElement("p",null))),o.a.createElement("p",{className:"details-description",dangerouslySetInnerHTML:{__html:t.volumeInfo.description}})):"")}var g=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),i=Object(s.a)(c,2),u=i[0],h=i[1];return o.a.createElement(r.a,null,o.a.createElement("nav",null,o.a.createElement(E,{searchTerm:t,setSearchTerm:l,searchType:u,setSearchType:h}),o.a.createElement("span",{className:"le-catalogue"},"le catalogue"),o.a.createElement(r.b,{className:"nav-link",to:"/book/"},"HOME"),o.a.createElement(r.b,{className:"nav-link",to:"/book/about"},"ABOUT")),o.a.createElement(m.a,{exact:!0,path:"/book/",component:p}),o.a.createElement(m.a,{exact:!0,path:"/book/about",component:b}),o.a.createElement(m.a,{exact:!0,path:"/book/results",render:function(){return o.a.createElement(f,{searchTerm:t,setSearchTerm:l,searchType:u})}}),o.a.createElement(m.a,{path:"/book/details/:id",component:d}))};c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.2a10ea70.chunk.js.map