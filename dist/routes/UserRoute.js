"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const jwt = __importStar(require("../config/jwt"));
class UserRoute {
    constructor(app) {
        this.authMiddler = (req, res, next) => {
            const authHeader = req.headers['authorization'];
            const token = authHeader && authHeader.split(' ')[1];
            if (!token) {
                return res.status(401).json({ msg: 'Acesso Negado' });
            }
            try {
                jwt.verify(token);
                next();
            }
            catch (error) {
                res.status(400)
                    .json({ msg: 'Invalide Access' });
            }
        };
        this.app = app;
        this.createUserRoute();
        this.findUsers();
        this.routeDelete();
        this.signIn();
    }
    createUserRoute() {
        this.app.post('/add-user', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { name, age, email, password, } = req.body;
            const user = {
                name,
                age,
                email,
                password,
            };
            try {
                yield userModel_1.default.create(user);
                res.send({ user: user });
            }
            catch (error) {
                res.status(400).json({ err: error });
            }
        }));
    }
    signIn() {
        this.app.get('/auth/login', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            try {
                const user = yield userModel_1.default.findOne({ email: email, password: password });
                const token = jwt.sing({ user: user.email });
                if (!email && !password) {
                    res.sendStatus(404).json('user not found');
                }
                res.send({ user: user, token });
            }
            catch (error) {
                res.sendStatus(404).json({ msg: 'user not found' });
            }
        }));
    }
    findUsers() {
        this.app.get('/users', this.authMiddler, (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const findUser = yield userModel_1.default.find();
                res.send(findUser);
            }
            catch (error) {
                res.send(error);
            }
        }));
        this.app.get('/auth', (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.send('rota');
        }));
    }
    routeDelete() {
        this.app.delete('/delete/:name', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const name = req.params.name;
            userModel_1.default.findOne({ name: name });
            try {
                yield userModel_1.default.deleteMany({ name: name }).then(() => { res.sendStatus(200).json({ message: 'apagou tudo' }); });
            }
            catch (error) {
                res.sendStatus(200).json({ message: 'rota errada' });
            }
        }));
    }
}
exports.UserRoute = UserRoute;
