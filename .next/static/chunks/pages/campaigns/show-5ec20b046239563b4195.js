(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[634],{16043:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return G}});var n=r(87757),a=r.n(n),s=r(92137),o=r(6610),c=r(5991),i=r(65255),l=r(86089),u=r(77608),d=r(67294),p=r(73626),h=r(14309),m=r(48237),f=r(77513),Z=r(68251),v=r(3542),g=r(63349),y=r(96156),k=r(36243),C=r(60416),w=r(68788),b=r(27904),N=d.createElement;function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.Z)(e);if(t){var a=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,l.Z)(this,r)}}var E=function(e){(0,i.Z)(r,e);var t=x(r);function r(){var e;(0,o.Z)(this,r);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return e=t.call.apply(t,[this].concat(c)),(0,y.Z)((0,g.Z)(e),"state",{value:"",errorMessage:"",loading:!1}),(0,y.Z)((0,g.Z)(e),"onSubmit",function(){var t=(0,s.Z)(a().mark((function t(r){var n,s;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),n=(0,Z.Z)(e.props.address),e.setState({loading:!0,errorMessage:""}),t.prev=3,t.next=6,v.Z.eth.getAccounts();case 6:return s=t.sent,t.next=9,n.methods.contribute().send({from:s[0],value:v.Z.utils.toWei(e.state.value,"ether")});case 9:b.Router.replaceRoute("/campaigns/".concat(e.props.address)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(3),e.setState({errorMessage:t.t0.message});case 15:e.setState({loading:!1,value:""});case 16:case"end":return t.stop()}}),t,null,[[3,12]])})));return function(e){return t.apply(this,arguments)}}()),e}return(0,c.Z)(r,[{key:"render",value:function(){var e=this;return N(k.Z,{onSubmit:this.onSubmit,error:!!this.state.errorMessage},N(k.Z.Field,null,N(h.Z,null,N(h.Z.Row,null,N(h.Z.Column,null,N("label",null,"Amount to Contribute"),N(C.Z,{value:this.state.value,onChange:function(t){return e.setState({value:t.target.value})},label:"ether",labelPosition:"right"}))),N(h.Z.Row,null,N(h.Z.Column,null,N(w.Z,{error:!0,header:"Oops",content:this.state.errorMessage}),N(m.Z,{primary:!0,loading:this.state.loading},"Contribute!"))))))}}]),r}(d.Component),R=d.createElement;function A(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.Z)(e);if(t){var a=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,l.Z)(this,r)}}var G=function(e){(0,i.Z)(r,e);var t=A(r);function r(){return(0,o.Z)(this,r),t.apply(this,arguments)}return(0,c.Z)(r,[{key:"renderCards",value:function(){var e=this.props,t=e.balance,r=[{header:e.manager,meta:"Address of Manager",description:"The manager created this campaign and can create requests to withdraw money",style:{overflowWrap:"break-word"}},{header:e.minimumContribution,meta:"Minimum Contribution (wei)",description:"You must contribute at least this much of wei to contribute"},{header:e.requestsCount,meta:"Number of Requests",description:"A request tries to withdraw from the contract"},{header:e.approversCount,meta:"Number of Approvers",description:"Number of people who have already contributed"},{header:v.Z.utils.fromWei(t,"ether"),meta:"Campaign Balance (ether)",description:"The balance is how much this campaign has left to spend"}];return R(p.Z.Group,{items:r})}},{key:"render",value:function(){return R(f.Z,null,R("h3",null,"Campaign Show"),R(h.Z,null,R(h.Z.Row,null,R(h.Z.Column,{width:10},this.renderCards()),R(h.Z.Column,{width:6},R(E,{address:this.props.address}))),R(h.Z.Row,null,R(h.Z.Column,null,R(b.Link,{route:"/campaigns/".concat(this.props.address,"/requests")},R("a",null,R(m.Z,{primary:!0},"View Requests")))))))}}],[{key:"getInitialProps",value:function(){var e=(0,s.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,Z.Z)(t.query.address),e.next=3,r.methods.getSummary().call();case 3:return n=e.sent,e.abrupt("return",{address:t.query.address,minimumContribution:n[0],balance:n[1],requestsCount:n[2],approversCount:n[3],manager:n[4]});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),r}(d.Component)},86374:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/campaigns/show",function(){return r(16043)}])},73626:function(e,t,r){"use strict";r.d(t,{Z:function(){return N}});var n=r(22122),a=r(41788),s=r(86010),o=(r(45697),r(67294)),c=r(92063),i=r(28935),l=r(12519),u=r(92248),d=r(68867),p=r(17186);function h(e){var t=e.children,r=e.className,a=e.content,d=e.textAlign,p=(0,s.Z)((0,c.X4)(d),"description",r),m=(0,i.Z)(h,e),f=(0,l.Z)(h,e);return o.createElement(f,(0,n.Z)({},m,{className:p}),u.kK(t)?a:t)}h.handledProps=["as","children","className","content","textAlign"],h.propTypes={};var m=h;function f(e){var t=e.children,r=e.className,a=e.content,d=e.textAlign,p=(0,s.Z)((0,c.X4)(d),"header",r),h=(0,i.Z)(f,e),m=(0,l.Z)(f,e);return o.createElement(m,(0,n.Z)({},h,{className:p}),u.kK(t)?a:t)}f.handledProps=["as","children","className","content","textAlign"],f.propTypes={};var Z=f;function v(e){var t=e.children,r=e.className,a=e.content,d=e.textAlign,p=(0,s.Z)((0,c.X4)(d),"meta",r),h=(0,i.Z)(v,e),m=(0,l.Z)(v,e);return o.createElement(m,(0,n.Z)({},h,{className:p}),u.kK(t)?a:t)}v.handledProps=["as","children","className","content","textAlign"],v.propTypes={};var g=v;function y(e){var t=e.children,r=e.className,a=e.content,d=e.description,h=e.extra,f=e.header,v=e.meta,k=e.textAlign,C=(0,s.Z)((0,c.lG)(h,"extra"),(0,c.X4)(k),"content",r),w=(0,i.Z)(y,e),b=(0,l.Z)(y,e);return u.kK(t)?u.kK(a)?o.createElement(b,(0,n.Z)({},w,{className:C}),(0,p.Go)(Z,(function(e){return{content:e}}),f,{autoGenerateKey:!1}),(0,p.Go)(g,(function(e){return{content:e}}),v,{autoGenerateKey:!1}),(0,p.Go)(m,(function(e){return{content:e}}),d,{autoGenerateKey:!1})):o.createElement(b,(0,n.Z)({},w,{className:C}),a):o.createElement(b,(0,n.Z)({},w,{className:C}),t)}y.handledProps=["as","children","className","content","description","extra","header","meta","textAlign"],y.propTypes={};var k=y,C=r(36744);function w(e){var t=e.centered,r=e.children,a=e.className,d=e.content,p=e.doubling,h=e.items,m=e.itemsPerRow,f=e.stackable,Z=e.textAlign,v=(0,s.Z)("ui",(0,c.lG)(t,"centered"),(0,c.lG)(p,"doubling"),(0,c.lG)(f,"stackable"),(0,c.X4)(Z),(0,c.H0)(m),"cards",a),g=(0,i.Z)(w,e),y=(0,l.Z)(w,e);if(!u.kK(r))return o.createElement(y,(0,n.Z)({},g,{className:v}),r);if(!u.kK(d))return o.createElement(y,(0,n.Z)({},g,{className:v}),d);var k=(0,C.Z)(h,(function(e){var t,r=null!=(t=e.key)?t:[e.header,e.description].join("-");return o.createElement(N,(0,n.Z)({key:r},e))}));return o.createElement(y,(0,n.Z)({},g,{className:v}),k)}w.handledProps=["as","centered","children","className","content","doubling","items","itemsPerRow","stackable","textAlign"],w.propTypes={};var b=w,N=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).handleClick=function(e){var r=t.props.onClick;r&&r(e,t.props)},t}return(0,a.Z)(t,e),t.prototype.render=function(){var e=this.props,r=e.centered,a=e.children,p=e.className,h=e.color,m=e.content,f=e.description,Z=e.extra,v=e.fluid,g=e.header,y=e.href,C=e.image,w=e.link,b=e.meta,N=e.onClick,x=e.raised,E=(0,s.Z)("ui",h,(0,c.lG)(r,"centered"),(0,c.lG)(v,"fluid"),(0,c.lG)(w,"link"),(0,c.lG)(x,"raised"),"card",p),R=(0,i.Z)(t,this.props),A=(0,l.Z)(t,this.props,(function(){if(N)return"a"}));return u.kK(a)?u.kK(m)?o.createElement(A,(0,n.Z)({},R,{className:E,href:y,onClick:this.handleClick}),d.Z.create(C,{autoGenerateKey:!1,defaultProps:{ui:!1,wrapped:!0}}),(f||g||b)&&o.createElement(k,{description:f,header:g,meta:b}),Z&&o.createElement(k,{extra:!0},Z)):o.createElement(A,(0,n.Z)({},R,{className:E,href:y,onClick:this.handleClick}),m):o.createElement(A,(0,n.Z)({},R,{className:E,href:y,onClick:this.handleClick}),a)},t}(o.Component);N.handledProps=["as","centered","children","className","color","content","description","extra","fluid","header","href","image","link","meta","onClick","raised"],N.propTypes={},N.Content=k,N.Description=m,N.Group=b,N.Header=Z,N.Meta=g}},function(e){e.O(0,[774,828,735,834,456,873,417,978,406,888,179],(function(){return t=86374,e(e.s=t);var t}));var t=e.O();_N_E=t}]);