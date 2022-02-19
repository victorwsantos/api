"use strict";
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
exports.Route = void 0;
const model_1 = __importDefault(require("../models/model"));
class Route {
    constructor(app) {
        this.app = app;
        this.routersGet();
        this.routerPost();
        this.routeUpdate();
        this.routeDelet();
    }
    routersGet() {
        this.app.get('/', (req, res) => {
            res.send('hello World');
        });
        this.app.get('/articles', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const article = yield model_1.default.find();
                res.status(200).json(article);
            }
            catch (error) {
                res.status(500).json({ message: error });
            }
        }));
        this.app.get('/articles/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            try {
                const article = yield model_1.default.findOne({ _id: id });
                res.send(article);
            }
            catch (error) {
                res.send(402).json({ message: error });
            }
        }));
    }
    routerPost() {
        this.app.post('/add-article', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { tittle, text, img } = req.body;
            const article = {
                tittle,
                text,
                img
            };
            try {
                yield model_1.default.create(article);
                res.status(200).json({ message: 'Artigo criado com sucesso.' });
            }
            catch (error) {
                res.status(501).json({ err: error });
            }
        }));
    }
    routeUpdate() {
        this.app.put('/update/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const { text } = req.body;
            const article = {
                text,
            };
            try {
                yield model_1.default.updateOne({ _id: id }, article);
                res.send(202).json({ message: 'Atualizou' });
            }
            catch (error) {
                res.status(500).json({ message: 'rota errada' });
            }
        }));
    }
    routeDelet() {
        this.app.delete('/delete/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const article = model_1.default.findOne({ _id: id });
            try {
                yield model_1.default.deleteOne({ _id: id });
                res.send(202).json({ message: 'apagou tudo' }).redirect('http://localhost:3000/Artigos');
            }
            catch (error) {
                res.status(500).json({ message: 'rota errada' });
            }
        }));
    }
}
exports.Route = Route;
