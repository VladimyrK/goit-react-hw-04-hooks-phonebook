(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(7),o=n.n(c),u=(n(13),n(8)),i=n(2),s=n(5),b=(n(14),n(0));var l=function(e){var t=e.onSubmit,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],o=r[1],u=Object(a.useState)(""),l=Object(i.a)(u,2),j=l[0],d=l[1],f=Object(a.useState)((function(){return Object(s.a)()})),m=Object(i.a)(f,2),O=m[0],h=m[1],p=function(){o(""),d(""),h(Object(s.a)())};return Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h(Object(s.a)()),t({name:c,number:j,id:O}),p()},children:[Object(b.jsxs)("label",{children:["Name",Object(b.jsx)("input",{type:"text",name:"name",value:c,onChange:function(e){return o(e.currentTarget.value)},pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),Object(b.jsxs)("label",{children:["Number",Object(b.jsx)("input",{type:"tel",name:"number",value:j,onChange:function(e){return d(e.currentTarget.value)},pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),Object(b.jsx)("button",{children:"Add contact"})]})};n(16);var j=function(e){var t=e.id,n=e.name,a=e.number,r=e.onDeleteContact;return Object(b.jsxs)("li",{children:[Object(b.jsxs)("p",{children:[n,": ",a]}),Object(b.jsx)("button",{type:"button",onClick:function(){return r(t)},children:"Delete"})]})},d=(n(17),function(e){var t=e.items,n=e.onDeleteContact;return Object(b.jsx)("ul",{children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(b.jsx)(j,{id:t,name:a,number:r,onDeleteContact:n},t)}))})}),f=(n(18),function(e){var t=e.value,n=e.onFilter;return Object(b.jsxs)("label",{children:["Find contacts by name",Object(b.jsx)("input",{type:"text",name:"filter",value:t,onChange:n})]})});var m=function(){var e=Object(a.useState)((function(){var e;return null!==(e=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==e?e:[]})),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),o=Object(i.a)(c,2),s=o[0],j=o[1];Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var m=function(){var e=s.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}();return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Phonebook"}),Object(b.jsx)(l,{onSubmit:function(e){n.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))?alert("This name already in contacts"):r((function(t){return[].concat(Object(u.a)(t),[e])}))}}),Object(b.jsx)("h2",{children:"Contacts"}),Object(b.jsx)(f,{value:s,onFilter:function(e){return j(e.currentTarget.value)}}),Object(b.jsx)(d,{items:m,onDeleteContact:function(e){r((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})};o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.e7fc704d.chunk.js.map