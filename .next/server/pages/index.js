(function() {
var exports = {};
exports.id = 405;
exports.ids = [405,459];
exports.modules = {

/***/ 8474:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1347);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3074);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7513);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7904);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _firebase_useUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6261);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);








class CampaignIndex extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  static async getInitialProps() {
    const campaigns = await _ethereum_factory__WEBPACK_IMPORTED_MODULE_2__/* .default.methods.getDeployedCampaigns */ .Z.methods.getDeployedCampaigns().call();
    console.log(campaigns);
    return {
      campaigns
    };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        description: __jsx(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {
          route: `/campaigns/${address}`
        }, __jsx("a", null, __jsx("h3", null, address))),
        fluid: true
      };
    });
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card.Group, {
      items: items
    });
  }

  render() {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, null, __jsx("div", null, this.renderCampaigns()));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CampaignIndex);

/***/ }),

/***/ 4285:
/***/ (function(module) {

"use strict";
module.exports = require("firebase/analytics");;

/***/ }),

/***/ 9421:
/***/ (function(module) {

"use strict";
module.exports = require("firebase/app");;

/***/ }),

/***/ 5942:
/***/ (function(module) {

"use strict";
module.exports = require("firebase/auth");;

/***/ }),

/***/ 9714:
/***/ (function(module) {

"use strict";
module.exports = require("firebase/firestore");;

/***/ }),

/***/ 6192:
/***/ (function(module) {

"use strict";
module.exports = require("firebase/performance");;

/***/ }),

/***/ 8828:
/***/ (function(module) {

"use strict";
module.exports = require("firebase/storage");;

/***/ }),

/***/ 6155:
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

/***/ }),

/***/ 247:
/***/ (function(module) {

"use strict";
module.exports = require("next-routes");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5777:
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap/Button");;

/***/ }),

/***/ 2879:
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap/Card");;

/***/ }),

/***/ 2990:
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap/Navbar");;

/***/ }),

/***/ 1347:
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ 4409:
/***/ (function(module) {

"use strict";
module.exports = require("web3");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [852,133,884,74], function() { return __webpack_exec__(8474); });
module.exports = __webpack_exports__;

})();