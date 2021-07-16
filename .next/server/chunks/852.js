exports.id = 852;
exports.ids = [852];
exports.modules = {

/***/ 3052:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ initFirebase; }
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9421);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5942);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9714);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8828);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4285);
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_analytics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var firebase_performance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6192);
/* harmony import */ var firebase_performance__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_performance__WEBPACK_IMPORTED_MODULE_5__);
 // the below imports are option - comment out what you don't need






const clientCredentials = {
  apiKey: "AIzaSyB41LhoVmWPCHSMpJ1r5qesNmUbzGdSSDE",
  authDomain: "auth-development-f1620.firebaseapp.com",
  projectId: "auth-development-f1620",
  storageBucket: "auth-development-f1620.appspot.com",
  messagingSenderId: "581508123043",
  appId: "1:581508123043:web:4fc95cf8b0d48ba80cf216"
};
function initFirebase() {
  if (!(firebase_app__WEBPACK_IMPORTED_MODULE_0___default().apps.length)) {
    firebase_app__WEBPACK_IMPORTED_MODULE_0___default().initializeApp(clientCredentials); // Check that `window` is in scope for the analytics module!

    if (false) {}

    console.log('Firebase was successfully init.');
  }
}

/***/ }),

/***/ 2996:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": function() { return /* binding */ mapUserData; }
/* harmony export */ });
const mapUserData = user => {
  const {
    uid,
    email,
    xa,
    displayName,
    photoUrl
  } = user;
  return {
    id: uid,
    email,
    token: xa,
    name: displayName,
    profilePic: photoUrl
  };
};

/***/ }),

/***/ 6539:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zl": function() { return /* binding */ getUserFromCookie; },
/* harmony export */   "rk": function() { return /* binding */ setUserCookie; },
/* harmony export */   "gq": function() { return /* binding */ removeUserCookie; }
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6155);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);

const getUserFromCookie = () => {
  const cookie = js_cookie__WEBPACK_IMPORTED_MODULE_0___default().get('auth');

  if (!cookie) {
    return;
  }

  return JSON.parse(cookie);
};
const setUserCookie = user => {
  js_cookie__WEBPACK_IMPORTED_MODULE_0___default().set('auth', user, {
    // firebase id tokens expire in one hour
    // set cookie expiry to match
    expires: 1 / 24
  });
};
const removeUserCookie = () => js_cookie__WEBPACK_IMPORTED_MODULE_0___default().remove('auth');

/***/ })

};
;