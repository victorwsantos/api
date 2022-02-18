"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Upload = void 0;
const multer = require('multer');
class Upload {
    constructor() {
        const storage = multer.diskStorage({
            destination: function (req, file, callback) {
                callback(null, '/dist/files');
            },
            filename: function (req, file, cb) {
                cb(null, file.fieldname);
            }
        });
        this.storage = storage;
        this.upload = multer({ storage });
    }
}
exports.Upload = Upload;
