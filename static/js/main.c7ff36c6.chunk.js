(this.webpackJsonpexpenses=this.webpackJsonpexpenses||[]).push([[0],{16:function(e,t,s){},18:function(e,t,s){},19:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),a=s(6),r=s.n(a),l=(s(16),s(10)),i=s(7),d=s(8),o=s(11),j=s(9),u=s(2),b=s(0),x={width:"150px",display:"inline",padding:"4px"},h={padding:"23px"},m=function(e){var t=e.onBudgetSetValue,s=e.budget,c=e.remainingBudget,a=e.spentBudget,r=Object(n.useState)(!1),l=Object(u.a)(r,2),i=l[0],d=l[1],o=Object(n.useState)(0),j=Object(u.a)(o,2),m=j[0],p=j[1];return Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("h2",{children:"My Expense Tracker"})})}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-lg-4 ",children:Object(b.jsxs)("div",{className:"alert alert-secondary",role:"alert",children:["Budget: $ ",Object(b.jsx)("input",{type:"number",className:"form-control",onChange:function(e){p(e.target.value)},style:x,defaultValue:s,disabled:!0})," ",Object(b.jsx)("button",{className:"btn btn-primary",onClick:i?function(){t(m),document.querySelector(".form-control").disabled=!0,d(!1)}:function(){document.querySelector(".form-control").disabled=!1,d(!0)},children:i?"Save":"Edit"})]})}),Object(b.jsx)("div",{className:"col-lg-4",children:Object(b.jsxs)("div",{className:"alert alert-success",style:h,role:"alert",children:["Remaining: $ ",c]})}),Object(b.jsx)("div",{className:"col-lg-4",children:Object(b.jsxs)("div",{className:"alert alert-primary",style:h,role:"alert",children:["Spent so far: $ ",a]})})]})]})},p=function(e){var t=e.lastId,s=e.addNewExpense,c=Object(n.useState)(""),a=Object(u.a)(c,2),r=a[0],l=a[1],i=Object(n.useState)(0),d=Object(u.a)(i,2),o=d[0],j=d[1],x=t+1;return Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("h3",{children:"Add Expense"})})}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-lg-6",children:Object(b.jsx)("input",{type:"text",className:"form-control",id:"name",placeholder:"Name",onChange:function(e){l(e.target.value)}})}),Object(b.jsx)("div",{className:"col-lg-6",children:Object(b.jsx)("input",{type:"number",className:"form-control",id:"cost",placeholder:"Cost",onChange:function(e){j(Number(e.target.value))}})})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-6 col-sm"}),Object(b.jsx)("div",{className:"col-6 d-flex justify-content-end col-sm",children:Object(b.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){r.length>0&&(s({id:x,name:r,cost:o},x),document.querySelector("#name").value="",document.querySelector("#cost").value="",j(0),l(""))},children:"Save"})})]})]})},O=(s(18),function(e){var t=e.expenses,s=e.onExpenseDelete,n=e.onSearchItemTextChange;return Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("h2",{children:"Expenses"})})}),Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Type to Search","aria-label":"Search",onChange:n})})}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("table",{className:"table table-striped table-hover",children:Object(b.jsx)("tbody",{children:t.map((function(e){if(e.name.length>0)return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.name}),Object(b.jsx)("td",{}),Object(b.jsx)("td",{}),Object(b.jsxs)("td",{children:[Object(b.jsxs)("span",{class:"priceBox",children:["$",e.cost]})," ",Object(b.jsx)("i",{class:"fas fa-trash-alt",onClick:function(){return s(e.id)}})]})]},e.id)}))})})})})]})}),g=function(e){Object(o.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(i.a)(this,s),(e=t.call(this)).onBudgetSetValue=function(t){e.setState({budget:t}),e.state.expenses.length>0?e.setState({remainingBudget:t-e.state.spentBudget}):e.setState({remainingBudget:0})},e.addNewExpense=function(t,s){var n=[].concat(Object(l.a)(e.state.expenses),[t]);e.setState({expenses:n}),e.setState({lastId:s});var c=n.reduce((function(e,t){return e+t.cost}),0);e.setState({spentBudget:c}),e.setState({remainingBudget:e.state.budget-c})},e.onExpenseDelete=function(t){var s=e.state.expenses.filter((function(e){return e.id!==t}));e.setState({expenses:s});var n=s.reduce((function(e,t){return e+t.cost}),0);e.setState({spentBudget:n}),e.setState({remainingBudget:e.state.budget-n})},e.onSearchItemTextChange=function(t){e.setState({searchExpenseText:t.target.value})},e.state={budget:0,remainingBudget:0,spentBudget:0,expenses:[],lastId:0,searchExpenseText:""},e}return Object(d.a)(s,[{key:"render",value:function(){var e=this.state,t=e.budget,s=e.remainingBudget,n=e.spentBudget,c=e.expenses,a=e.lastId,r=e.searchExpenseText,l=c.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}));return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(m,{onBudgetSetValue:this.onBudgetSetValue,budget:t,remainingBudget:s,spentBudget:n}),Object(b.jsx)(O,{expenses:l,onExpenseDelete:this.onExpenseDelete,onSearchItemTextChange:this.onSearchItemTextChange}),Object(b.jsx)(p,{lastId:a,addNewExpense:this.addNewExpense})]})}}]),s}(n.Component),v=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,20)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;s(e),n(e),c(e),a(e),r(e)}))};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),v()}},[[19,1,2]]]);
//# sourceMappingURL=main.c7ff36c6.chunk.js.map