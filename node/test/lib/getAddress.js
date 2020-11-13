"use strict";
exports.__esModule = true;
exports.getAddress = void 0;
var getKeypair_1 = require("./getKeypair");
function getAddress(accountName) {
    return getKeypair_1.getKeypair(accountName).getAddress();
}
exports.getAddress = getAddress;
