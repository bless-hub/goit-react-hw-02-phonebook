(this["webpackJsonphw2-phonebook"]=this["webpackJsonphw2-phonebook"]||[]).push([[0],[,function(t,e,n){t.exports={form:"ContactForm_form__vBTUx",label:"ContactForm_label__1zGyQ",input:"ContactForm_input__1AiNA",button:"ContactForm_button__2u6fT"}},,,,,function(t,e,n){t.exports={list:"ContactList_list__3ub9W",item:"ContactList_item__3lFYF",button:"ContactList_button__1N4eR"}},function(t,e,n){t.exports={section:"container_section__3ogav",mainHead:"container_mainHead__1NT5c"}},,,,function(t,e,n){t.exports={input:"Filter_input__3_1V7"}},,function(t,e,n){t.exports=n(19)},,,,,,function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(9),o=n.n(c),l=n(12),i=n(2),u=n(3),s=n(5),m=n(4),f=n(7),b=n.n(f);function h(t){var e=t.title,n=t.children;return r.a.createElement("section",{className:b.a.section},r.a.createElement("h2",{className:b.a.mainHead},e),n)}var p=n(6),v=n.n(p),C=function(t){var e=t.contacts,n=t.removeContact;return r.a.createElement("ul",{className:v.a.list},e.map((function(t){var e=t.id,a=t.name,c=t.number;return r.a.createElement("li",{key:e,className:v.a.item},a,": ",c,r.a.createElement("button",{type:"button",className:v.a.button,onClick:function(){return n(e)}},"Delete Contact"))})))},_=n(10),d=n(1),g=n.n(d),E=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(_.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault(),t.props.addContact(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return r.a.createElement("form",{className:g.a.form,onSubmit:this.handleSubmit},r.a.createElement("label",{className:g.a.label},"Name",r.a.createElement("input",{className:g.a.input,type:"text",name:"name",value:e,onChange:this.handleChange})),r.a.createElement("label",{className:g.a.label},"Number",r.a.createElement("input",{className:g.a.input,type:"text",name:"number",value:n,onChange:this.handleChange})),r.a.createElement("button",{className:g.a.button,type:"submit"},"Add Contact"))}}]),n}(a.Component),N=n(21),F=n(11),y=n.n(F);function j(t){var e=t.value,n=t.onChangeFilter;return r.a.createElement("div",null,r.a.createElement("input",{className:y.a.input,type:"text",value:e,onChange:function(t){return n(t.target.value)}}))}var O=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:""},t.changeFilter=function(e){t.setState({filter:e})},t.addContact=function(e){var n=e.name,a=e.number,r={id:Object(N.a)(),name:n,number:a};t.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[r])}})),t.state.contacts.some((function(t){return t.name.toLowerCase()===n.toLowerCase()}))&&alert("hello")},t.getFilter=function(){var e=t.state,n=e.filter;return e.contacts.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.getFilter();return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{title:"PhoneBook"},r.a.createElement(E,{addContact:this.addContact})),r.a.createElement(h,{title:"Contacts"},a.length>1&&r.a.createElement(j,{title:"Find",value:n,onChangeFilter:this.changeFilter}),e.length>0&&r.a.createElement(C,{contacts:a,removeContact:this.removeContact})))}}]),n}(a.Component);n(18);o.a.render(r.a.createElement(O,null),document.querySelector("#root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.b3ca5ac3.chunk.js.map