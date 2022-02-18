"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const model_1 = __importDefault(require("../models/model"));
const db_1 = __importDefault(require("../db/db"));
const routes_1 = require("../routes/routes");
class Service {
    constructor() {
        this.connect = model_1.default;
        this.db = (0, db_1.default)();
        this.db;
        this.connect;
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.static('public'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.routes = new routes_1.Route(this.app);
    }
}
const app = new Service().app;
exports.default = app;
