"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const default_1 = require("../config/default");
function connect() {
    const dbUrl = default_1.config.dbUrl;
    return mongoose_1.default.connect(dbUrl).then(() => {
        console.log('Banco de dados conectado');
    }).catch((err) => {
        console.log('Não possivel conectar. Erro ' + err);
    });
}
exports.default = connect;
