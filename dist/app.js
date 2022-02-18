"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const default_1 = require("./config/default");
const index_1 = __importDefault(require("./service/index"));
const host = default_1.config.host;
const port = default_1.config.port;
index_1.default.listen(default_1.config.port, () => {
    console.log(`server http://${host}:${port}/ rodando na porta ${port}`);
});
