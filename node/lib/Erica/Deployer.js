"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.EricaDeployer = void 0;
var pollenium_clover_1 = require("pollenium-clover");
var __1 = require("../../");
var EricaDeployer = /** @class */ (function (_super) {
    __extends(EricaDeployer, _super);
    function EricaDeployer(struct) {
        return _super.call(this, __assign(__assign({}, __1.erica), struct)) || this;
    }
    return EricaDeployer;
}(pollenium_clover_1.ContractDeployer));
exports.EricaDeployer = EricaDeployer;
