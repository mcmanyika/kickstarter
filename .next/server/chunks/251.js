exports.id = 251;
exports.ids = [251];
exports.modules = {

/***/ 8251:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ campaign; }
});

// EXTERNAL MODULE: ./ethereum/web3.js
var web3 = __webpack_require__(3542);
;// CONCATENATED MODULE: ./ethereum/build/Campaign.json
var Campaign_namespaceObject = JSON.parse('{"w3":"[{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"index\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"finalizeRequest\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"name\\":\\"approvers\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"bool\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"getRequestsCount\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"getSummary\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"manager\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"requests\\",\\"outputs\\":[{\\"name\\":\\"description\\",\\"type\\":\\"string\\"},{\\"name\\":\\"value\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"recipient\\",\\"type\\":\\"address\\"},{\\"name\\":\\"complete\\",\\"type\\":\\"bool\\"},{\\"name\\":\\"approvalCount\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"approversCount\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"description\\",\\"type\\":\\"string\\"},{\\"name\\":\\"value\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"recipient\\",\\"type\\":\\"address\\"}],\\"name\\":\\"createRequest\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"minimumContribution\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[],\\"name\\":\\"contribute\\",\\"outputs\\":[],\\"payable\\":true,\\"stateMutability\\":\\"payable\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"index\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"approveRequest\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"name\\":\\"minimum\\",\\"type\\":\\"uint256\\"},{\\"name\\":\\"creator\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"constructor\\"}]"}');
;// CONCATENATED MODULE: ./ethereum/campaign.js


/* harmony default export */ var campaign = (address => {
  return new web3/* default.eth.Contract */.Z.eth.Contract(JSON.parse(Campaign_namespaceObject.w3), address);
});

/***/ })

};
;