(function() {
var exports = {};
exports.id = 189;
exports.ids = [189,459];
exports.modules = {

/***/ 2717:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1347);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7513);
/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8251);
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3542);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7904);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class RequestNew extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      value: '',
      description: '',
      recipient: '',
      loading: false,
      errorMessage: ''
    });

    _defineProperty(this, "onSubmit", async event => {
      event.preventDefault();
      const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(this.props.address);
      const {
        description,
        value,
        recipient
      } = this.state;
      this.setState({
        loading: true,
        errorMessage: ''
      });

      try {
        const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__/* .default.eth.getAccounts */ .Z.eth.getAccounts();
        await campaign.methods.createRequest(description, _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__/* .default.utils.toWei */ .Z.utils.toWei(value, 'ether'), recipient).send({
          from: accounts[0]
        });
        _routes__WEBPACK_IMPORTED_MODULE_5__.Router.pushRoute(`/campaigns/${this.props.address}/requests`);
      } catch (err) {
        this.setState({
          errorMessage: err.message
        });
      }

      this.setState({
        loading: false
      });
    });
  }

  static async getInitialProps(props) {
    const {
      address
    } = props.query;
    return {
      address
    };
  }

  render() {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, null, __jsx(_routes__WEBPACK_IMPORTED_MODULE_5__.Link, {
      route: `/campaigns/${this.props.address}/requests`
    }, __jsx("a", null, "Back")), __jsx("h3", null, "Create a Request"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {
      onSubmit: this.onSubmit,
      error: !!this.state.errorMessage
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, null, __jsx("label", null, "Description"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
      value: this.state.description,
      onChange: event => this.setState({
        description: event.target.value
      })
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, null, __jsx("label", null, "Value in Ether"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
      value: this.state.value,
      onChange: event => this.setState({
        value: event.target.value
      })
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, null, __jsx("label", null, "Recipient"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
      value: this.state.recipient,
      onChange: event => this.setState({
        recipient: event.target.value
      })
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
      error: true,
      header: "Oops!",
      content: this.state.errorMessage
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
      primary: true,
      loading: this.state.loading
    }, "Create!")));
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (RequestNew);

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [852,133,884,251], function() { return __webpack_exec__(2717); });
module.exports = __webpack_exports__;

})();