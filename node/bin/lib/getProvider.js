"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.getProvider = void 0;
var ethers_1 = require("ethers");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
function getProvider(endpoint) {
    return new ethers_1.ethers.providers.InfuraProvider(endpoint, process.env.INFURA_ID);
}
exports.getProvider = getProvider;
