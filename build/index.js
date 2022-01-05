"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors = require('cors');
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.middware();
        this.route();
        this.listen();
    }
    route() {
        this.app.get('/', (req, res) => {
            res.send('hello world test');
        });
    }
    middware() {
        this.app.use(express_1.default.json());
        this.app.use(cors());
    }
    listen() {
        this.app.listen(3004);
    }
}
exports.Server = Server;
const app = new Server().app;
