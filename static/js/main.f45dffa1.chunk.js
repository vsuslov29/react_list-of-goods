(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var r=n(3),s=n.n(r),c=n(7),o=n(4),i=n(5),a=n(8),l=n(6),h=n(1),u=n.n(h),b=(n(13),n(0)),j=function(t){var e=t.reverse,n=t.sortBy,r=t.goods,s=t.minLength,c=r.filter((function(t){return t.length>=s}));switch(n){case"alphabet":c.sort();break;case"length":c.sort((function(t,e){return t.length-e.length}))}return e&&c.reverse(),Object(b.jsx)("ul",{children:c.map((function(t){return Object(b.jsx)("li",{children:t},t)}))})},g=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],d=function(t){Object(a.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={isStarted:!1,reverse:!1,reset:!1,sortBy:"",goods:g,minLength:1},t.start=function(){t.setState({isStarted:!0})},t.reverse=function(){t.setState((function(t){return{reverse:!t.reverse}}))},t.sortAlphabetically=function(){t.setState({sortBy:"alphabet",reverse:!1})},t.reset=function(){t.setState({reverse:!1,sortBy:"",minLength:1})},t.sortByLength=function(){t.setState({sortBy:"length",reverse:!1})},t.setMinLength=function(e){var n=+e.target.value;t.setState({minLength:n})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=this.start,n=this.reverse,r=this.sortAlphabetically,s=this.reset,o=this.sortByLength,i=this.setMinLength,a=t.isStarted,l=t.minLength,h=Array.from(Array(10).keys());return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Goods"}),Object(b.jsx)("button",{type:"button",onClick:e,children:"Start"}),a&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j,Object(c.a)({},t)),Object(b.jsx)("button",{type:"button",onClick:n,children:"Reverse"}),Object(b.jsx)("button",{type:"button",onClick:r,children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",onClick:s,children:"Reset"}),Object(b.jsx)("button",{type:"button",onClick:o,children:"Sort by length"}),Object(b.jsx)("select",{onChange:i,value:l,children:h.map((function(t){return Object(b.jsx)("option",{value:t+1,children:t+1},t)}))})]})]})}}]),n}(u.a.Component),p=d;s.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f45dffa1.chunk.js.map