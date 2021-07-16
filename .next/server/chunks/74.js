exports.id = 74;
exports.ids = [74];
exports.modules = {

/***/ 3074:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ factory; }
});

// EXTERNAL MODULE: ./ethereum/web3.js
var web3 = __webpack_require__(3542);
;// CONCATENATED MODULE: ./ethereum/build/CampaignFactory.json
var CampaignFactory_namespaceObject = JSON.parse('{"w3":"[{\\"constant\\":true,\\"inputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"deployedCampaigns\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":true,\\"inputs\\":[],\\"name\\":\\"getDeployedCampaigns\\",\\"outputs\\":[{\\"name\\":\\"\\",\\"type\\":\\"address[]\\"}],\\"payable\\":false,\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"constant\\":false,\\"inputs\\":[{\\"name\\":\\"minimum\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"createCampaign\\",\\"outputs\\":[],\\"payable\\":false,\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"}]"}');
;// CONCATENATED MODULE: ./ethereum/factory.js


const instance = new web3/* default.eth.Contract */.Z.eth.Contract(JSON.parse(CampaignFactory_namespaceObject.w3), '0x4F9AE3cef1Dc7Ab51fA0304D107A82acFCCF266F');
/* harmony default export */ var factory = (instance);

/***/ })

};
;