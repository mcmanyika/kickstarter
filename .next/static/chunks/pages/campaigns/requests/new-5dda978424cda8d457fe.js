(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[189],{2717:function(e,t,r){"use strict";r.r(t);var n=r(87757),a=r.n(n),s=r(92137),u=r(6610),i=r(5991),c=r(63349),o=r(65255),l=r(86089),p=r(77608),f=r(96156),h=r(67294),d=r(36243),v=r(60416),Z=r(68788),g=r(48237),m=r(77513),y=r(68251),w=r(3542),_=r(27904),k=h.createElement;function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,p.Z)(e);if(t){var a=(0,p.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,l.Z)(this,r)}}var R=function(e){(0,o.Z)(r,e);var t=b(r);function r(){var e;(0,u.Z)(this,r);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return e=t.call.apply(t,[this].concat(i)),(0,f.Z)((0,c.Z)(e),"state",{value:"",description:"",recipient:"",loading:!1,errorMessage:""}),(0,f.Z)((0,c.Z)(e),"onSubmit",function(){var t=(0,s.Z)(a().mark((function t(r){var n,s,u,i,c,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),n=(0,y.Z)(e.props.address),s=e.state,u=s.description,i=s.value,c=s.recipient,e.setState({loading:!0,errorMessage:""}),t.prev=4,t.next=7,w.Z.eth.getAccounts();case 7:return o=t.sent,t.next=10,n.methods.createRequest(u,w.Z.utils.toWei(i,"ether"),c).send({from:o[0]});case 10:_.Router.pushRoute("/campaigns/".concat(e.props.address,"/requests")),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(4),e.setState({errorMessage:t.t0.message});case 16:e.setState({loading:!1});case 17:case"end":return t.stop()}}),t,null,[[4,13]])})));return function(e){return t.apply(this,arguments)}}()),e}return(0,i.Z)(r,[{key:"render",value:function(){var e=this;return k(m.Z,null,k(_.Link,{route:"/campaigns/".concat(this.props.address,"/requests")},k("a",null,"Back")),k("h3",null,"Create a Request"),k(d.Z,{onSubmit:this.onSubmit,error:!!this.state.errorMessage},k(d.Z.Field,null,k("label",null,"Description"),k(v.Z,{value:this.state.description,onChange:function(t){return e.setState({description:t.target.value})}})),k(d.Z.Field,null,k("label",null,"Value in Ether"),k(v.Z,{value:this.state.value,onChange:function(t){return e.setState({value:t.target.value})}})),k(d.Z.Field,null,k("label",null,"Recipient"),k(v.Z,{value:this.state.recipient,onChange:function(t){return e.setState({recipient:t.target.value})}})),k(Z.Z,{error:!0,header:"Oops!",content:this.state.errorMessage}),k(g.Z,{primary:!0,loading:this.state.loading},"Create!")))}}],[{key:"getInitialProps",value:function(){var e=(0,s.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query.address,e.abrupt("return",{address:r});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),r}(h.Component);t.default=R},76306:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/campaigns/requests/new",function(){return r(2717)}])}},function(e){e.O(0,[774,828,735,834,456,873,417,978,406,888,179],(function(){return t=76306,e(e.s=t);var t}));var t=e.O();_N_E=t}]);