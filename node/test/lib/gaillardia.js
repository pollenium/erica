"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.gaillardia = void 0;
var pollenium_gaillardia_1 = require("pollenium-gaillardia");
var fixtures_1 = require("./fixtures");
var getKeypair_1 = require("./getKeypair");
var pollenium_weigela_1 = require("pollenium-weigela");
exports.gaillardia = new pollenium_gaillardia_1.Gaillardia(__assign(__assign({}, pollenium_gaillardia_1.gaillardiaDefaults), { accounts: fixtures_1.accountNames.map(function (name) {
        var keypair = getKeypair_1.getKeypair(name);
        return {
            privateKey: keypair.privateKey,
            startBalance: pollenium_weigela_1.ETHER.opMul(10)
        };
    }) }));
