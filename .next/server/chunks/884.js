exports.id = 884;
exports.ids = [884];
exports.modules = {

/***/ 7513:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Layout; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./firebase/useUser.js
var useUser = __webpack_require__(6261);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1347);
// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(7904);
;// CONCATENATED MODULE: ./components/Header.js
var __jsx = (external_react_default()).createElement;




const Header = props => {
  if (props.email) {
    return __jsx("div", {
      style: {
        height: '100px',
        backgroundColor: '#ccc'
      }
    }, props.email.email);
  } else return __jsx(React.Fragment, null);
};

/* harmony default export */ var components_Header = ((/* unused pure expression or super */ null && (Header)));
// EXTERNAL MODULE: ./pages/login.js
var login = __webpack_require__(6133);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./components/Layout.js
var Layout_jsx = (external_react_default()).createElement;





 // import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


/* harmony default export */ var Layout = (props => {
  const {
    user,
    logout
  } = (0,useUser/* useUser */.a)();
  return Layout_jsx((external_react_default()).Fragment, null, Layout_jsx(login.default, {
    user: user,
    logout: logout
  }), Layout_jsx(external_semantic_ui_react_.Container, null, Layout_jsx((head_default()), null), props.children));
});

/***/ }),

/***/ 3542:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4409);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);

let web3;

const ethEnabled = () => {
  if (false) {} else {
    const provider = new (web3__WEBPACK_IMPORTED_MODULE_0___default().providers.HttpProvider)('https://rinkeby.infura.io/v3/16697f3c94754b18828da39e491a4ad1');
    web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(provider);
  }
};

ethEnabled();
/* harmony default export */ __webpack_exports__["Z"] = (web3);

/***/ })

};
;