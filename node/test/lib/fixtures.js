"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.accountNames = exports.individualNames = exports.memberNames = void 0;
exports.memberNames = ['alice', 'bob'];
exports.individualNames = __spreadArrays(exports.memberNames, ['charlie']);
exports.accountNames = __spreadArrays(exports.individualNames, ['attacker', 'deployer', 'admin']);
