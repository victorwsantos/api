"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verify = exports.sing = void 0;
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;
const sing = (payload) => { jwt.sing(payload, secret); };
exports.sing = sing;
const verify = (token) => { jwt.verify(token, secret); };
exports.verify = verify;
