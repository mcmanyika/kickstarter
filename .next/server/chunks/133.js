exports.id = 133;
exports.ids = [133];
exports.modules = {

/***/ 6261:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": function() { return /* binding */ useUser; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9421);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5942);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _firebase_initFirebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3052);
/* harmony import */ var _userCookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6539);
/* harmony import */ var _mapUserData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2996);







(0,_firebase_initFirebase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)();

const useUser = () => {
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();

  const logout = async () => {
    return firebase_app__WEBPACK_IMPORTED_MODULE_2___default().auth().signOut().then(() => {
      // Sign-out successful.
      router.push('/auth');
    }).catch(e => {
      console.error(e);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Firebase updates the id token every hour, this
    // makes sure the react state and the cookie are
    // both kept up to date
    const cancelAuthListener = firebase_app__WEBPACK_IMPORTED_MODULE_2___default().auth().onIdTokenChanged(user => {
      if (user) {
        const userData = (0,_mapUserData__WEBPACK_IMPORTED_MODULE_6__/* .mapUserData */ .J)(user);
        (0,_userCookies__WEBPACK_IMPORTED_MODULE_5__/* .setUserCookie */ .rk)(userData);
        setUser(userData);
      } else {
        (0,_userCookies__WEBPACK_IMPORTED_MODULE_5__/* .removeUserCookie */ .gq)();
        setUser();
      }
    });
    const userFromCookie = (0,_userCookies__WEBPACK_IMPORTED_MODULE_5__/* .getUserFromCookie */ .Zl)();

    if (!userFromCookie) {
      router.push('/');
      return;
    }

    setUser(userFromCookie);
    return () => {
      cancelAuthListener();
    };
  }, []);
  return {
    user,
    logout
  };
};



/***/ }),

/***/ 6133:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1347);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase_useUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6261);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2879);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5777);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2990);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7904);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_7__);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);









function Home(props) {
  if (props.user) {
    return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Header, {
      block: true
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
      as: "h2",
      floated: "left",
      width: 5
    }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_7__.Link, {
      route: "/"
    }, __jsx("a", {
      className: "item"
    }, "MUKANDO"))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
      textAlign: "right",
      floated: "right",
      width: 7
    }, props.user.name, __jsx(_routes__WEBPACK_IMPORTED_MODULE_7__.Link, {
      route: "/campaigns/new"
    }, __jsx("a", {
      className: "item"
    }, "Campaigns")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_7__.Link, {
      route: "/campaigns/new"
    }, __jsx("a", {
      className: "item"
    }, "+")), __jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default()), {
      onClick: () => props.logout()
    }, " Log Out"))))));
  } else return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Header, {
    as: "h2",
    block: true
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
    floated: "left",
    width: 5
  }, "MUKANDO"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid.Column, {
    textAlign: "right",
    floated: "right",
    width: 5
  }, __jsx("a", {
    href: "/auth"
  }, __jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_5___default()), null, "Log In!")))))));
}

/***/ }),

/***/ 7904:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const routes = __webpack_require__(247)();

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');
module.exports = routes;

/***/ })

};
;