"use strict";
exports.__esModule = true;
exports.getKeypair = void 0;
var pollenium_ilex_1 = require("pollenium-ilex");
var keypairs = {};
function getKeypair(accountName) {
    if (keypairs[accountName]) {
        return keypairs[accountName];
    }
    keypairs[accountName] = pollenium_ilex_1.Keypair.generate();
    return keypairs[accountName];
}
exports.getKeypair = getKeypair;
