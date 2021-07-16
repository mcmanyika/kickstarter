(function() {
var exports = {};
exports.id = 73;
exports.ids = [73,459];
exports.modules = {

/***/ 1684:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ requests; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1347);
// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(7904);
// EXTERNAL MODULE: ./components/Layout.js + 1 modules
var Layout = __webpack_require__(7513);
// EXTERNAL MODULE: ./ethereum/campaign.js + 1 modules
var ethereum_campaign = __webpack_require__(8251);
// EXTERNAL MODULE: ./ethereum/web3.js
var web3 = __webpack_require__(3542);
;// CONCATENATED MODULE: ./components/RequestRow.js
var __jsx = (external_react_default()).createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class RequestRow extends external_react_.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onApprove", async () => {
      const campaign = (0,ethereum_campaign/* default */.Z)(this.props.address);
      const accounts = await web3/* default.eth.getAccounts */.Z.eth.getAccounts();
      await campaign.methods.approveRequest(this.props.id).send({
        from: accounts[0]
      });
    });

    _defineProperty(this, "onFinalize", async () => {
      const campaign = (0,ethereum_campaign/* default */.Z)(this.props.address);
      const accounts = await web3/* default.eth.getAccounts */.Z.eth.getAccounts();
      await campaign.methods.finalizeRequest(this.props.id).send({
        from: accounts[0]
      });
    });
  }

  render() {
    const {
      Row,
      Cell
    } = external_semantic_ui_react_.Table;
    const {
      id,
      request,
      approversCount
    } = this.props;
    const readyToFinalize = request.approvalCount > approversCount / 2;
    return __jsx(Row, {
      disabled: request.complete,
      positive: readyToFinalize && !request.complete
    }, __jsx(Cell, null, id), __jsx(Cell, null, request.description), __jsx(Cell, null, web3/* default.utils.fromWei */.Z.utils.fromWei(request.value, 'ether')), __jsx(Cell, null, request.recipient), __jsx(Cell, null, request.approvalCount, "/", approversCount), __jsx(Cell, null, request.complete ? null : __jsx(external_semantic_ui_react_.Button, {
      color: "green",
      basic: true,
      onClick: this.onApprove
    }, "Approve")), __jsx(Cell, null, request.complete ? null : __jsx(external_semantic_ui_react_.Button, {
      color: "teal",
      basic: true,
      onClick: this.onFinalize
    }, "Finalize")));
  }

}

/* harmony default export */ var components_RequestRow = (RequestRow);
;// CONCATENATED MODULE: ./pages/campaigns/requests/index.js
var requests_jsx = (external_react_default()).createElement;







class RequestIndex extends external_react_.Component {
  static async getInitialProps(props) {
    const {
      address
    } = props.query;
    const campaign = (0,ethereum_campaign/* default */.Z)(address);
    const requestCount = await campaign.methods.getRequestsCount().call();
    const approversCount = await campaign.methods.approversCount().call();
    const requests = await Promise.all(Array(parseInt(requestCount)).fill().map((element, index) => {
      return campaign.methods.requests(index).call();
    }));
    return {
      address,
      requests,
      requestCount,
      approversCount
    };
  }

  renderRows() {
    return this.props.requests.map((request, index) => {
      return requests_jsx(components_RequestRow, {
        key: index,
        id: index,
        request: request,
        address: this.props.address,
        approversCount: this.props.approversCount
      });
    });
  }

  render() {
    const {
      Header,
      Row,
      HeaderCell,
      Body
    } = external_semantic_ui_react_.Table;
    return requests_jsx(Layout/* default */.Z, null, requests_jsx("h3", null, "Requests"), requests_jsx(routes.Link, {
      route: `/campaigns/${this.props.address}/requests/new`
    }, requests_jsx("a", null, requests_jsx(external_semantic_ui_react_.Button, {
      primary: true,
      floated: "right",
      style: {
        marginBottom: 10
      }
    }, "Add Request"))), requests_jsx(external_semantic_ui_react_.Table, null, requests_jsx(Header, null, requests_jsx(Row, null, requests_jsx(HeaderCell, null, "ID"), requests_jsx(HeaderCell, null, "Description"), requests_jsx(HeaderCell, null, "Amount"), requests_jsx(HeaderCell, null, "Recipient"), requests_jsx(HeaderCell, null, "Approval Count"), requests_jsx(HeaderCell, null, "Approve"), requests_jsx(HeaderCell, null, "Finalize"))), requests_jsx(Body, null, this.renderRows())), requests_jsx("div", null, "Found ", this.props.requestCount, " requests."));
  }

}

/* harmony default export */ var requests = (RequestIndex);

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [852,133,884,251], function() { return __webpack_exec__(1684); });
module.exports = __webpack_exports__;

})();