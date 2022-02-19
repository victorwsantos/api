import { Request, Response } from 'express'
import authModel from '../models/userModel'
import jwt from 'jsonwebtoken'

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
    this.app.post('/auth', async (req: Request, res: Response) => {
      const { email } = req.body
      console.log(email)
      const findUser = await authModel.findOne({ email: email })
      const secret = 'process.env.SECRET'
      try {
        const token = jwt.sign({ user: findUser.email }, secret)
        res.send({ msg: 'logado', token })
        console.log(token)
      } catch (error) {
        res.sendStatus(401)
        console.log('error')
      }

    })
  }
}