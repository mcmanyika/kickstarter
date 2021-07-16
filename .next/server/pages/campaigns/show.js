(function() {
var exports = {};
exports.id = 634;
exports.ids = [634,459];
exports.modules = {

/***/ 6043:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ show; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1347);
// EXTERNAL MODULE: ./components/Layout.js + 1 modules
var Layout = __webpack_require__(7513);
// EXTERNAL MODULE: ./ethereum/campaign.js + 1 modules
var ethereum_campaign = __webpack_require__(8251);
// EXTERNAL MODULE: ./ethereum/web3.js
var web3 = __webpack_require__(3542);
// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(7904);
;// CONCATENATED MODULE: ./components/ContributeForm.js
var __jsx = (external_react_default()).createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class ContributeForm extends external_react_.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      value: '',
      errorMessage: '',
      loading: false
    });

    _defineProperty(this, "onSubmit", async event => {
      event.preventDefault();
      const campaign = (0,ethereum_campaign/* default */.Z)(this.props.address);
      this.setState({
        loading: true,
        errorMessage: ''
      });

      try {
        const accounts = await web3/* default.eth.getAccounts */.Z.eth.getAccounts();
        await campaign.methods.contribute().send({
          from: accounts[0],
          value: web3/* default.utils.toWei */.Z.utils.toWei(this.state.value, 'ether')
        }); // Refresh to current page

        routes.Router.replaceRoute(`/campaigns/${this.props.address}`);
      } catch (err) {
        this.setState({
          errorMessage: err.message
        });
      }

      this.setState({
        loading: false,
        value: ''
      });
    });
  }

  render() {
    return __jsx(external_semantic_ui_react_.Form, {
      onSubmit: this.onSubmit,
      error: !!this.state.errorMessage
    }, __jsx(external_semantic_ui_react_.Form.Field, null, __jsx(external_semantic_ui_react_.Grid, null, __jsx(external_semantic_ui_react_.Grid.Row, null, __jsx(external_semantic_ui_react_.Grid.Column, null, __jsx("label", null, "Amount to Contribute"), __jsx(external_semantic_ui_react_.Input, {
      value: this.state.value,
      onChange: event => this.setState({
        value: event.target.value
      }),
      label: "ether",
      labelPosition: "right"
    }))), __jsx(external_semantic_ui_react_.Grid.Row, null, __jsx(external_semantic_ui_react_.Grid.Column, null, __jsx(external_semantic_ui_react_.Message, {
      error: true,
      header: "Oops",
      content: this.state.errorMessage
    }), __jsx(external_semantic_ui_react_.Button, {
      primary: true,
      loading: this.state.loading
    }, "Contribute!"))))));
  }

}

/* harmony default export */ var components_ContributeForm = (ContributeForm);
;// CONCATENATED MODULE: ./pages/campaigns/show.js
var show_jsx = (external_react_default()).createElement;








class CampaignShow extends external_react_.Component {
  static async getInitialProps(props) {
    const campaign = (0,ethereum_campaign/* default */.Z)(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount
    } = this.props;
    const items = [{
      header: manager,
      meta: 'Address of Manager',
      description: 'The manager created this campaign and can create requests to withdraw money',
      style: {
        overflowWrap: 'break-word'
      }
    }, {
      header: minimumContribution,
      meta: 'Minimum Contribution (wei)',
      description: 'You must contribute at least this much of wei to contribute'
    }, {
      header: requestsCount,
      meta: 'Number of Requests',
      description: 'A request tries to withdraw from the contract'
    }, {
      header: approversCount,
      meta: 'Number of Approvers',
      description: 'Number of people who have already contributed'
    }, {
      header: web3/* default.utils.fromWei */.Z.utils.fromWei(balance, 'ether'),
      meta: 'Campaign Balance (ether)',
      description: 'The balance is how much this campaign has left to spend'
    }];
    return show_jsx(external_semantic_ui_react_.Card.Group, {
      items: items
    });
  }

  render() {
    return show_jsx(Layout/* default */.Z, null, show_jsx("h3", null, "Campaign Show"), show_jsx(external_semantic_ui_react_.Grid, null, show_jsx(external_semantic_ui_react_.Grid.Row, null, show_jsx(external_semantic_ui_react_.Grid.Column, {
      width: 10
    }, this.renderCards()), show_jsx(external_semantic_ui_react_.Grid.Column, {
      width: 6
    }, show_jsx(components_ContributeForm, {
      address: this.props.address
    }))), show_jsx(external_semantic_ui_react_.Grid.Row, null, show_jsx(external_semantic_ui_react_.Grid.Column, null, show_jsx(routes.Link, {
      route: `/campaigns/${this.props.address}/requests`
    }, show_jsx("a", null, show_jsx(external_semantic_ui_react_.Button, {
      primary: true
    }, "View Requests")))))));
  }

}

;
/* harmony default export */ var show = (CampaignShow);

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
var __webpack_exports__ = __webpack_require__.X(0, [852,133,884,251], function() { return __webpack_exec__(6043); });
module.exports = __webpack_exports__;

})();