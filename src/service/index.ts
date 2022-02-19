import express from 'express'
import cors from 'cors'
import { config } from '../config/default'
import Administrador from '../models/model'
import connect from '../db/db'
import { Route } from '../routes/routes'
import { UserRoute } from '../routes/UserRoute'

class Service {
  app
  connect = Administrador
  db = connect()
  routes: any
  userRoutes: any
  constructor() {
    this.db
    this.connect
    this.app = express()
    this.app.use(express.static('public'))
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: false }))
    this.userRoutes = new UserRoute(this.app)
    this.routes = new Route(this.app)

  }
}

const app = new Service().app

export default app
