import { Request, Response } from 'express'
import authModel from '../models/userModel'

export class UserRoute {
  app: any
  constructor(app: any) {
    this.app = app

    this.createUserRoute()
    this.findUsers()
  }
  createUserRoute() {

    this.app.post('/route', async (req: Request, res: Response): Promise<any> => {
      const { name, age, email, password } = req.body
      const user = {
        name,
        age,
        email,
        password
      }
      try {
        const newUser = await authModel.create(user)
        res.status(200).json({ message: 'usuario criado com sucesso' })
      } catch (error) {
        res.send(error)
      }
    })
  }
  findUsers() {
    this.app.get('/users', async (req: Request, res: Response) => {
      try {
        const findUser = await authModel.find()
        res.send(findUser)
      } catch (error) {
        res.send(error)
      }

    })
  }
}