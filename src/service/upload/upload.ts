const multer = require('multer')


export class Upload {
  storage: any
  upload: any
  constructor() {
    const storage = multer.diskStorage({
      destination: function (req: any, file: any, callback: any) {
        callback(null, '/dist/files')
      },
      filename: function (req: any, file: any, cb: any) {
        cb(null, file.fieldname)
      }
    })
    this.storage = storage
    this.upload = multer({ storage })
  }
}