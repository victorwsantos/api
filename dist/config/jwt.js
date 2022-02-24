"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verify = exports.sing = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret = 'uhushUHSauhsaUhauxOAUOOans';
const sing = (payload) => jsonwebtoken_1.default.sign(payload, secret, { expiresIn: 86400 });
exports.sing = sing;
const verify = (token) => jsonwebtoken_1.default.verify(token, secret);
exports.verify = verify;
