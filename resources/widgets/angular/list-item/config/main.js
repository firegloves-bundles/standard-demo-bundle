(this["webpackJsonpmy-widget-config"]=this["webpackJsonpmy-widget-config"]||[]).push([[0],{14:function(e,t,n){e.exports=n(20)},15:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);n(15);var a=n(3),r=n(4),i=n(5),c=n(9),l=n(13),o=n(0),u=n.n(o),s=n(12),h=n.n(s),d=n(8),f=n(10),m=n(7),v=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={serviceurl:"http://quickstart-sales-demo.lab.entando.org",title:"Transfer Money"},r.handleChange=r.handleChange.bind(Object(m.a)(r)),r}return Object(r.a)(n,[{key:"handleChange",value:function(e){var t=e.target.id,n=e.target.value;this.setState((function(e){return Object(f.a)(Object(f.a)({},e),{},Object(d.a)({},t,n))}))}},{key:"render",value:function(){var e=this.state,t=e.serviceurl,n=e.title;return u.a.createElement("div",null,u.a.createElement("h1",null,"Sample Entando 6 Widget Configuration"),u.a.createElement("div",null,u.a.createElement("label",{htmlFor:"serviceurl"},"Service url"),u.a.createElement("input",{id:"serviceurl",onChange:this.handleChange,value:t})),u.a.createElement("div",null,u.a.createElement("label",{htmlFor:"title"},"Title"),u.a.createElement("input",{id:"title",onChange:this.handleChange,value:n})))}}]),n}(u.a.Component),b=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).reactRootRef=u.a.createRef(),e.mountPoint=null,e}return Object(r.a)(n,[{key:"connectedCallback",value:function(){this.mountPoint=document.createElement("div"),this.appendChild(this.mountPoint),h.a.render(u.a.createElement(v,{ref:this.reactRootRef}),this.mountPoint)}},{key:"config",get:function(){return this.reactRootRef.current?this.reactRootRef.current.state:{}},set:function(e){return this.reactRootRef.current.setState(e)}}]),n}(Object(l.a)(HTMLElement));customElements.define("my-widget-config",b)}},[[14,1,2]]]);
//# sourceMappingURL=main.bf0d6121.chunk.js.map