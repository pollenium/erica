"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var fixtures_1 = require("./lib/fixtures");
var __1 = require("../../");
var getAddress_1 = require("./lib/getAddress");
var getWallet_1 = require("./lib/getWallet");
var gaillardia_1 = require("./lib/gaillardia");
var pollenium_uvaursi_1 = require("pollenium-uvaursi");
var async_q_1 = __importDefault(require("async-q"));
var deployer = getAddress_1.getAddress('deployer');
var admin = getAddress_1.getAddress('admin');
var attacker = getAddress_1.getAddress('attacker');
var alice = getAddress_1.getAddress('alice');
var bob = getAddress_1.getAddress('bob');
var charlie = getAddress_1.getAddress('charlie');
var name0 = pollenium_uvaursi_1.Uu.fromUtf8('name:0');
var symbol0 = pollenium_uvaursi_1.Uu.fromUtf8('symbol:0');
var erica;
var ericaReader;
var writers = {};
function getWriter(accountName) {
    if (!erica) {
        throw new Error('Set erica');
    }
    if (writers[accountName]) {
        return writers[accountName];
    }
    writers[accountName] = new __1.EricaWriter({
        address: erica,
        signer: getWallet_1.getWallet(accountName)
    });
    return writers[accountName];
}
var expected = {
    owner: deployer,
    name: pollenium_uvaursi_1.Uu.genEmpty(),
    symbol: pollenium_uvaursi_1.Uu.genEmpty(),
    isPaused: false,
    totalSupply: 0,
    balances: {
        alice: 0,
        bob: 0
    }
};
test("deploy erica", function () { return __awaiter(void 0, void 0, void 0, function () {
    var ericaDeployer, address;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                ericaDeployer = new __1.EricaDeployer({ signer: getWallet_1.getWallet('deployer') });
                return [4 /*yield*/, ericaDeployer.deploy()];
            case 1:
                address = (_a.sent()).address;
                erica = address;
                ericaReader = new __1.EricaReader({
                    provider: gaillardia_1.gaillardia.ethersWeb3Provider,
                    address: erica
                });
                return [2 /*return*/];
        }
    });
}); });
test('defaults should be correct', function () { return __awaiter(void 0, void 0, void 0, function () {
    var owner, name, symbol, totalSupply, isPaused;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ericaReader.fetchOwner()];
            case 1:
                owner = _a.sent();
                return [4 /*yield*/, ericaReader.fetchName()];
            case 2:
                name = _a.sent();
                return [4 /*yield*/, ericaReader.fetchSymbol()];
            case 3:
                symbol = _a.sent();
                return [4 /*yield*/, ericaReader.fetchTotalSupply()];
            case 4:
                totalSupply = _a.sent();
                return [4 /*yield*/, ericaReader.fetchIsPaused()];
            case 5:
                isPaused = _a.sent();
                expect(owner.uu.toHex()).toStrictEqual(expected.owner.uu.toHex());
                expect(name.toHex()).toEqual(expected.name.toHex());
                expect(symbol.toHex()).toEqual(expected.symbol.toHex());
                expect(totalSupply.toNumber()).toEqual(expected.totalSupply);
                expect(isPaused).toEqual(expected.isPaused);
                return [2 /*return*/];
        }
    });
}); });
test("individualNames (" + fixtures_1.individualNames + ") should be not be memberAccounts", function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, async_q_1["default"].forEach(fixtures_1.individualNames, function (individualNames) { return __awaiter(void 0, void 0, void 0, function () {
                    var isMemberAccount;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, ericaReader.fetchIsMemberAccount(getAddress_1.getAddress(individualNames))];
                            case 1:
                                isMemberAccount = _a.sent();
                                expect(isMemberAccount).toEqual(false);
                                return [2 /*return*/];
                        }
                    });
                }); })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
test("attacker cannot setOwner", function () { return __awaiter(void 0, void 0, void 0, function () {
    var owner;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, expect(getWriter('attacker').setOwner(attacker)).rejects.toBeInstanceOf(Error)];
            case 1:
                _a.sent();
                return [4 /*yield*/, ericaReader.fetchOwner()];
            case 2:
                owner = _a.sent();
                expect(owner.uu.toHex()).toStrictEqual(deployer.uu.toHex());
                return [2 /*return*/];
        }
    });
}); });
test("deployer should setOwner to admin ", function () { return __awaiter(void 0, void 0, void 0, function () {
    var owner;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getWriter('deployer').setOwner(admin)];
            case 1:
                _a.sent();
                return [4 /*yield*/, ericaReader.fetchOwner()];
            case 2:
                owner = _a.sent();
                expect(owner.uu.toHex()).toStrictEqual(admin.uu.toHex());
                return [2 /*return*/];
        }
    });
}); });
test("attacker cannot setName", function () { return __awaiter(void 0, void 0, void 0, function () {
    var name;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, expect(getWriter('attacker').setName(name0)).rejects.toBeInstanceOf(Error)];
            case 1:
                _a.sent();
                return [4 /*yield*/, ericaReader.fetchName()];
            case 2:
                name = _a.sent();
                expect(name.toHex()).toEqual(expected.name.toHex());
                return [2 /*return*/];
        }
    });
}); });
test("attacker cannot setSymbol", function () { return __awaiter(void 0, void 0, void 0, function () {
    var symbol;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, expect(getWriter('attacker').setSymbol(symbol0)).rejects.toBeInstanceOf(Error)];
            case 1:
                _a.sent();
                return [4 /*yield*/, ericaReader.fetchSymbol()];
            case 2:
                symbol = _a.sent();
                expect(symbol.toHex()).toEqual(expected.symbol.toHex());
                return [2 /*return*/];
        }
    });
}); });
test("attacker cannot setIsMemberAccount", function () { return __awaiter(void 0, void 0, void 0, function () {
    var isMemberAccount;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, expect(getWriter('attacker').setIsMemberAccount(attacker, true)).rejects.toBeInstanceOf(Error)];
            case 1:
                _a.sent();
                return [4 /*yield*/, ericaReader.fetchIsMemberAccount(attacker)];
            case 2:
                isMemberAccount = _a.sent();
                expect(isMemberAccount).toStrictEqual(false);
                return [2 /*return*/];
        }
    });
}); });
test("admin should set memberNames (" + fixtures_1.memberNames + ") setIsMemberAccount to true", function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, async_q_1["default"].forEachLimit(fixtures_1.memberNames, 1, function (memberName) { return __awaiter(void 0, void 0, void 0, function () {
                    var member, isMemberAccount;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                member = getAddress_1.getAddress(memberName);
                                return [4 /*yield*/, getWriter('admin').setIsMemberAccount(member, true)];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, ericaReader.fetchIsMemberAccount(member)];
                            case 2:
                                isMemberAccount = _a.sent();
                                expect(isMemberAccount).toStrictEqual(true);
                                return [2 /*return*/];
                        }
                    });
                }); })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
test("admin should be able to setName", function () { return __awaiter(void 0, void 0, void 0, function () {
    var name;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                expected.name = name0;
                return [4 /*yield*/, getWriter('admin').setName(name0)];
            case 1:
                _a.sent();
                return [4 /*yield*/, ericaReader.fetchName()];
            case 2:
                name = _a.sent();
                expect(name.toHex()).toEqual(expected.name.toHex());
                return [2 /*return*/];
        }
    });
}); });
test("admin should be able to setSymbol", function () { return __awaiter(void 0, void 0, void 0, function () {
    var symbol;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                expected.symbol = symbol0;
                return [4 /*yield*/, getWriter('admin').setSymbol(symbol0)];
            case 1:
                _a.sent();
                return [4 /*yield*/, ericaReader.fetchSymbol()];
            case 2:
                symbol = _a.sent();
                expect(symbol.toHex()).toEqual(expected.symbol.toHex());
                return [2 /*return*/];
        }
    });
}); });
test("attacker cannot mint", function () { return __awaiter(void 0, void 0, void 0, function () {
    var totalSupply;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, expect(getWriter('attacker').mint({
                    to: attacker,
                    amount: 10,
                    reason: pollenium_uvaursi_1.Uu.fromUtf8('hack')
                })).rejects.toBeInstanceOf(Error)];
            case 1:
                _a.sent();
                return [4 /*yield*/, ericaReader.fetchTotalSupply()];
            case 2:
                totalSupply = _a.sent();
                expect(totalSupply.toNumber()).toEqual(expected.totalSupply);
                return [2 /*return*/];
        }
    });
}); });
test("admin can mint 10 to alice", function () { return __awaiter(void 0, void 0, void 0, function () {
    var totalSupply, aliceBalance;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                expected.totalSupply += 10;
                expected.balances.alice += 10;
                return [4 /*yield*/, getWriter('admin').mint({
                        to: alice,
                        amount: 10,
                        reason: pollenium_uvaursi_1.Uu.fromUtf8('give alice tokens')
                    })];
            case 1:
                _a.sent();
                return [4 /*yield*/, ericaReader.fetchTotalSupply()];
            case 2:
                totalSupply = _a.sent();
                return [4 /*yield*/, ericaReader.fetchBalance(alice)];
            case 3:
                aliceBalance = _a.sent();
                expect(totalSupply.toNumber()).toEqual(expected.totalSupply);
                expect(aliceBalance.toNumber()).toEqual(expected.balances.alice);
                return [2 /*return*/];
        }
    });
}); });
test("admin can mint 20 to bob", function () { return __awaiter(void 0, void 0, void 0, function () {
    var totalSupply, bobBalance;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                expected.totalSupply += 20;
                expected.balances.bob += 20;
                return [4 /*yield*/, getWriter('admin').mint({
                        to: bob,
                        amount: 20,
                        reason: pollenium_uvaursi_1.Uu.fromUtf8('give bob tokens')
                    })];
            case 1:
                _a.sent();
                return [4 /*yield*/, ericaReader.fetchTotalSupply()];
            case 2:
                totalSupply = _a.sent();
                return [4 /*yield*/, ericaReader.fetchBalance(bob)];
            case 3:
                bobBalance = _a.sent();
                expect(totalSupply.toNumber()).toEqual(expected.totalSupply);
                expect(bobBalance.toNumber()).toEqual(expected.balances.bob);
                return [2 /*return*/];
        }
    });
}); });
test("attacker cannot burn", function () { return __awaiter(void 0, void 0, void 0, function () {
    var totalSupply, bobBalance;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, expect(getWriter('attacker').burn({
                    from: bob,
                    amount: 5,
                    reason: pollenium_uvaursi_1.Uu.fromUtf8('hack')
                })).rejects.toBeInstanceOf(Error)];
            case 1:
                _a.sent();
                return [4 /*yield*/, ericaReader.fetchTotalSupply()];
            case 2:
                totalSupply = _a.sent();
                return [4 /*yield*/, ericaReader.fetchBalance(bob)];
            case 3:
                bobBalance = _a.sent();
                expect(totalSupply.toNumber()).toEqual(expected.totalSupply);
                expect(bobBalance.toNumber()).toEqual(expected.balances.bob);
                return [2 /*return*/];
        }
    });
}); });
test("admin can burn 5 from bob", function () { return __awaiter(void 0, void 0, void 0, function () {
    var totalSupply, bobBalance;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                expected.totalSupply -= 5;
                expected.balances.bob -= 5;
                return [4 /*yield*/, getWriter('admin').burn({
                        from: bob,
                        amount: 5,
                        reason: pollenium_uvaursi_1.Uu.fromUtf8('burn bobby burn')
                    })];
            case 1:
                _a.sent();
                return [4 /*yield*/, ericaReader.fetchTotalSupply()];
            case 2:
                totalSupply = _a.sent();
                return [4 /*yield*/, ericaReader.fetchBalance(bob)];
            case 3:
                bobBalance = _a.sent();
                expect(totalSupply.toNumber()).toEqual(expected.totalSupply);
                expect(bobBalance.toNumber()).toEqual(expected.balances.bob);
                return [2 /*return*/];
        }
    });
}); });
test("alice can transfer 5 to bob ", function () { return __awaiter(void 0, void 0, void 0, function () {
    var totalSupply, aliceBalance, bobBalance;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                expected.balances.alice -= 5;
                expected.balances.bob += 5;
                return [4 /*yield*/, getWriter('alice').transfer({
                        to: bob,
                        amount: 5
                    })];
            case 1:
                _a.sent();
                return [4 /*yield*/, ericaReader.fetchTotalSupply()];
            case 2:
                totalSupply = _a.sent();
                return [4 /*yield*/, ericaReader.fetchBalance(alice)];
            case 3:
                aliceBalance = _a.sent();
                return [4 /*yield*/, ericaReader.fetchBalance(bob)];
            case 4:
                bobBalance = _a.sent();
                expect(totalSupply.toNumber()).toEqual(expected.totalSupply);
                expect(aliceBalance.toNumber()).toEqual(expected.balances.alice);
                expect(bobBalance.toNumber()).toEqual(expected.balances.bob);
                return [2 /*return*/];
        }
    });
}); });
test("alice cannot transfer 5 to charlie ", function () { return __awaiter(void 0, void 0, void 0, function () {
    var totalSupply, aliceBalance, bobBalance;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, expect(getWriter('alice').transfer({
                    to: charlie,
                    amount: 5
                })).rejects.toBeInstanceOf(Error)];
            case 1:
                _a.sent();
                return [4 /*yield*/, ericaReader.fetchTotalSupply()];
            case 2:
                totalSupply = _a.sent();
                return [4 /*yield*/, ericaReader.fetchBalance(alice)];
            case 3:
                aliceBalance = _a.sent();
                return [4 /*yield*/, ericaReader.fetchBalance(bob)];
            case 4:
                bobBalance = _a.sent();
                expect(totalSupply.toNumber()).toEqual(expected.totalSupply);
                expect(aliceBalance.toNumber()).toEqual(expected.balances.alice);
                expect(bobBalance.toNumber()).toEqual(expected.balances.bob);
                return [2 /*return*/];
        }
    });
}); });
test("attacker should not be able to setIsPaused ", function () { return __awaiter(void 0, void 0, void 0, function () {
    var isPaused;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, expect(getWriter('attacker').setIsPaused(true)).rejects.toBeInstanceOf(Error)];
            case 1:
                _a.sent();
                return [4 /*yield*/, ericaReader.fetchIsPaused()];
            case 2:
                isPaused = _a.sent();
                expect(isPaused).toEqual(expected.isPaused);
                return [2 /*return*/];
        }
    });
}); });
test("admin should not be able to setIsPaused to true", function () { return __awaiter(void 0, void 0, void 0, function () {
    var isPaused;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                expected.isPaused = true;
                return [4 /*yield*/, getWriter('admin').setIsPaused(true)];
            case 1:
                _a.sent();
                return [4 /*yield*/, ericaReader.fetchIsPaused()];
            case 2:
                isPaused = _a.sent();
                expect(isPaused).toEqual(expected.isPaused);
                return [2 /*return*/];
        }
    });
}); });
test("alice cannot transfer 5 to bob ", function () { return __awaiter(void 0, void 0, void 0, function () {
    var totalSupply, aliceBalance, bobBalance;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, expect(getWriter('alice').transfer({
                    to: bob,
                    amount: 5
                })).rejects.toBeInstanceOf(Error)];
            case 1:
                _a.sent();
                return [4 /*yield*/, ericaReader.fetchTotalSupply()];
            case 2:
                totalSupply = _a.sent();
                return [4 /*yield*/, ericaReader.fetchBalance(alice)];
            case 3:
                aliceBalance = _a.sent();
                return [4 /*yield*/, ericaReader.fetchBalance(bob)];
            case 4:
                bobBalance = _a.sent();
                expect(totalSupply.toNumber()).toEqual(expected.totalSupply);
                expect(aliceBalance.toNumber()).toEqual(expected.balances.alice);
                expect(bobBalance.toNumber()).toEqual(expected.balances.bob);
                return [2 /*return*/];
        }
    });
}); });
test("admin should not be able to setIsPaused to false", function () { return __awaiter(void 0, void 0, void 0, function () {
    var isPaused;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                expected.isPaused = false;
                return [4 /*yield*/, getWriter('admin').setIsPaused(false)];
            case 1:
                _a.sent();
                return [4 /*yield*/, ericaReader.fetchIsPaused()];
            case 2:
                isPaused = _a.sent();
                expect(isPaused).toEqual(expected.isPaused);
                return [2 /*return*/];
        }
    });
}); });
test("alice can transfer 5 to bob ", function () { return __awaiter(void 0, void 0, void 0, function () {
    var totalSupply, aliceBalance, bobBalance;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                expected.balances.alice -= 5;
                expected.balances.bob += 5;
                return [4 /*yield*/, getWriter('alice').transfer({
                        to: bob,
                        amount: 5
                    })];
            case 1:
                _a.sent();
                return [4 /*yield*/, ericaReader.fetchTotalSupply()];
            case 2:
                totalSupply = _a.sent();
                return [4 /*yield*/, ericaReader.fetchBalance(alice)];
            case 3:
                aliceBalance = _a.sent();
                return [4 /*yield*/, ericaReader.fetchBalance(bob)];
            case 4:
                bobBalance = _a.sent();
                expect(totalSupply.toNumber()).toEqual(expected.totalSupply);
                expect(aliceBalance.toNumber()).toEqual(expected.balances.alice);
                expect(bobBalance.toNumber()).toEqual(expected.balances.bob);
                return [2 /*return*/];
        }
    });
}); });
