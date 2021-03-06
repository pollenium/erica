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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.EricaReader = void 0;
var ethers_1 = require("ethers");
var pollenium_buttercup_1 = require("pollenium-buttercup");
var pollenium_uvaursi_1 = require("pollenium-uvaursi");
var pollenium_clover_1 = require("pollenium-clover");
var __1 = require("../../");
var EricaReader = /** @class */ (function (_super) {
    __extends(EricaReader, _super);
    function EricaReader(struct) {
        return _super.call(this, __assign(__assign({}, __1.erica), struct)) || this;
    }
    EricaReader.prototype.fetchOwner = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = pollenium_buttercup_1.Address.bind;
                        _c = (_b = pollenium_uvaursi_1.Uu).fromHexish;
                        return [4 /*yield*/, this.ethersContract.owner()];
                    case 1: return [2 /*return*/, new (_a.apply(pollenium_buttercup_1.Address, [void 0, _c.apply(_b, [_d.sent()])]))()];
                }
            });
        });
    };
    EricaReader.prototype.fetchName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = pollenium_uvaursi_1.Uu).fromUtf8;
                        return [4 /*yield*/, this.ethersContract.name()];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    EricaReader.prototype.fetchSymbol = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = pollenium_uvaursi_1.Uu).fromUtf8;
                        return [4 /*yield*/, this.ethersContract.symbol()];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    EricaReader.prototype.fetchDecimals = function () {
        return __awaiter(this, void 0, void 0, function () {
            var decimalsBignumber, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.ethersContract.decimals()];
                    case 1:
                        decimalsBignumber = _d.sent();
                        _a = pollenium_buttercup_1.Uint8.bind;
                        _c = (_b = pollenium_uvaursi_1.Uu).fromHexish;
                        return [4 /*yield*/, ethers_1.ethers.utils.hexlify(decimalsBignumber)];
                    case 2: return [2 /*return*/, new (_a.apply(pollenium_buttercup_1.Uint8, [void 0, _c.apply(_b, [_d.sent()])]))()];
                }
            });
        });
    };
    EricaReader.prototype.fetchTotalSupply = function () {
        return __awaiter(this, void 0, void 0, function () {
            var totalSupplyBignumber, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.ethersContract.totalSupply()];
                    case 1:
                        totalSupplyBignumber = _d.sent();
                        _a = pollenium_buttercup_1.Uint256.bind;
                        _c = (_b = pollenium_uvaursi_1.Uu).fromHexish;
                        return [4 /*yield*/, ethers_1.ethers.utils.hexlify(totalSupplyBignumber)];
                    case 2: return [2 /*return*/, new (_a.apply(pollenium_buttercup_1.Uint256, [void 0, _c.apply(_b, [_d.sent()])]))()];
                }
            });
        });
    };
    EricaReader.prototype.fetchBalance = function (holderUish) {
        return __awaiter(this, void 0, void 0, function () {
            var holder, holderBignumber, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        holder = new pollenium_buttercup_1.Address(holderUish);
                        return [4 /*yield*/, this.ethersContract.balanceOf(holder.uu.toPhex())];
                    case 1:
                        holderBignumber = _d.sent();
                        _a = pollenium_buttercup_1.Uint256.bind;
                        _c = (_b = pollenium_uvaursi_1.Uu).fromHexish;
                        return [4 /*yield*/, ethers_1.ethers.utils.hexlify(holderBignumber)];
                    case 2: return [2 /*return*/, new (_a.apply(pollenium_buttercup_1.Uint256, [void 0, _c.apply(_b, [_d.sent()])]))()];
                }
            });
        });
    };
    EricaReader.prototype.fetchAllowance = function (struct) {
        return __awaiter(this, void 0, void 0, function () {
            var holder, spender, allowanceBignumber, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        holder = new pollenium_buttercup_1.Address(struct.holder);
                        spender = new pollenium_buttercup_1.Address(struct.spender);
                        return [4 /*yield*/, this.ethersContract.allowance(holder.uu.toPhex(), spender.uu.toPhex())];
                    case 1:
                        allowanceBignumber = _d.sent();
                        _a = pollenium_buttercup_1.Uint256.bind;
                        _c = (_b = pollenium_uvaursi_1.Uu).fromHexish;
                        return [4 /*yield*/, ethers_1.ethers.utils.hexlify(allowanceBignumber)];
                    case 2: return [2 /*return*/, new (_a.apply(pollenium_buttercup_1.Uint256, [void 0, _c.apply(_b, [_d.sent()])]))()];
                }
            });
        });
    };
    EricaReader.prototype.fetchIsPaused = function () {
        return this.ethersContract.isPaused();
    };
    EricaReader.prototype.fetchIsMemberAccount = function (address) {
        return this.ethersContract.isMemberAccount((new pollenium_buttercup_1.Address(address)).uu.toPhex());
    };
    EricaReader.prototype.fetchMintWithReasonLogs = function (range) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetchLogs({
                        filter: this.ethersContract.filters.MintWithReason(),
                        range: range,
                        transformEthersLogArgsToLogValues: function (args) {
                            return {
                                to: new pollenium_buttercup_1.Address(pollenium_uvaursi_1.Uu.fromHexish(args.to)),
                                value: new pollenium_buttercup_1.Uint256(pollenium_uvaursi_1.Uu.fromHexish(args.value.toHexString())),
                                reason: pollenium_uvaursi_1.Uu.fromHexish(args.reason)
                            };
                        }
                    })];
            });
        });
    };
    EricaReader.prototype.fetchBurnWithReasonLogs = function (range) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetchLogs({
                        filter: this.ethersContract.filters.BurnWithReason(),
                        range: range,
                        transformEthersLogArgsToLogValues: function (args) {
                            return {
                                from: new pollenium_buttercup_1.Address(pollenium_uvaursi_1.Uu.fromHexish(args.from)),
                                value: new pollenium_buttercup_1.Uint256(pollenium_uvaursi_1.Uu.fromHexish(args.value.toHexString())),
                                reason: pollenium_uvaursi_1.Uu.fromHexish(args.reason)
                            };
                        }
                    })];
            });
        });
    };
    EricaReader.prototype.fetchTransferLogs = function (range) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetchLogs({
                        filter: this.ethersContract.filters.Transfer(),
                        range: range,
                        transformEthersLogArgsToLogValues: function (args) {
                            return {
                                to: new pollenium_buttercup_1.Address(pollenium_uvaursi_1.Uu.fromHexish(args.to)),
                                from: new pollenium_buttercup_1.Address(pollenium_uvaursi_1.Uu.fromHexish(args.from)),
                                value: new pollenium_buttercup_1.Uint256(pollenium_uvaursi_1.Uu.fromHexish(args.value.toHexString()))
                            };
                        }
                    })];
            });
        });
    };
    EricaReader.prototype.fetchSetIsPausedWithReasonLogs = function (range) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetchLogs({
                        filter: this.ethersContract.filters.SetIsPausedWithReason(),
                        range: range,
                        transformEthersLogArgsToLogValues: function (args) {
                            return {
                                isPaused: args.isPaused,
                                reason: pollenium_uvaursi_1.Uu.fromHexish(args.reason)
                            };
                        }
                    })];
            });
        });
    };
    return EricaReader;
}(pollenium_clover_1.ContractReader));
exports.EricaReader = EricaReader;
