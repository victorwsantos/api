"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtConfig = void 0;
const jwt = require('jsonwebtoken');
const secret = 'spiadnPNPANDadnpNPIASNFF2P3N';
exports.jwtConfig = {
    sing: (payload) => { jwt.sing(payload, secret); },
    verify: (token) => { jwt.verify(token, secret); }
};
