(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[473],{53052:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(15503),u=(t(16690),t(83759),t(49140),t(4539),t(7514),{apiKey:"AIzaSyB41LhoVmWPCHSMpJ1r5qesNmUbzGdSSDE",authDomain:"auth-development-f1620.firebaseapp.com",projectId:"auth-development-f1620",storageBucket:"auth-development-f1620.appspot.com",messagingSenderId:"581508123043",appId:"1:581508123043:web:4fc95cf8b0d48ba80cf216"});function i(){r.Z.apps.length||(r.Z.initializeApp(u),"measurementId"in u&&(r.Z.analytics(),r.Z.performance()),console.log("Firebase was successfully init."))}},52996:function(e,n,t){"use strict";t.d(n,{J:function(){return r}});var r=function(e){return{id:e.uid,email:e.email,token:e.xa,name:e.displayName,profilePic:e.photoUrl}}},36539:function(e,n,t){"use strict";t.d(n,{Zl:function(){return i},rk:function(){return a},gq:function(){return c}});var r=t(36808),u=t.n(r),i=function(){var e=u().get("auth");if(e)return JSON.parse(e)},a=function(e){u().set("auth",e,{expires:1/24})},c=function(){return u().remove("auth")}},10862:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return _}});var r=t(67294),u=t(87757),i=t.n(u),a=t(92137),c=t(53052),s=t(75913),o=t.n(s),f=t(15503),l=(t(16690),t(36539)),p=t(52996),d=r.createElement;(0,c.Z)();var h={signInFlow:"popup",signInOptions:[{provider:f.Z.auth.EmailAuthProvider.PROVIDER_ID,requireDisplayName:!0},f.Z.auth.GoogleAuthProvider.PROVIDER_ID],signInSuccessUrl:"/",credentialHelper:"none",callbacks:{signInSuccessWithAuthResult:function(){var e=(0,a.Z)(i().mark((function e(n,t){var r,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.user,u=(0,p.J)(r),(0,l.rk)(u);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}},m=function(){var e=(0,r.useState)(!1),n=e[0],t=e[1];return(0,r.useEffect)((function(){t(!0)}),[]),d("div",null,n?d(o(),{uiConfig:h,firebaseAuth:f.Z.auth()}):null)},v=(t(22189),t(95712)),g=r.createElement,_=function(){return g(v.Z,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"}},g("div",{className:"w-100",style:{maxWidth:"400px"}},g(m,null)))}},39221:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth",function(){return t(10862)}])}},function(e){e.O(0,[774,828,735,834,717,456,208,888,179],(function(){return n=39221,e(e.s=n);var n}));var n=e.O();_N_E=n}]);