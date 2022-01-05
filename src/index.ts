import express from 'express'
import { Route } from './routes/route'
const cors = require('cors')


export class Server {
  app: express.Application;

  constructor() {
    this.app = express();
    this.middware()
    this.route()
    this.listen()
  }

  route(): void {
    this.app.get('/', (req, res) => {
      res.send('hello world test');
    });
  }
  middware(): void{
      this.app.use(express.json())
      this.app.use(cors())
      
  }
  listen(): void{
      this.app.listen(3004)
  }
}

const app = new Server().app