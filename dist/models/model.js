"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongose = require('mongoose');
const Administrador = mongose.model('administrador', {
    tittle: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    }
});
exports.default = Administrador;
