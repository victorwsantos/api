import { Express,Request, Response } from 'express'
import authModel from '../models/userModel'
import * as jwt from '../config/jwt'

export class UserRoute {
  app: any
  
  authMiddler = (req: Request, res: Response, next: any): any =>{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    
    if(!token){
      return res.status(401).json({msg: 'Acesso Negado'})
    }

    try {
      jwt.verify(token)
      next()

    } catch (error) {
      res.status(400)
      .json({msg: 'Invalide Access'})
    }
  }
  constructor(app: any) {
    this.app = app
    
    this.createUserRoute()
    this.findUsers()
    this.routeDelete()
    this.signIn()
  
  }
 

  createUserRoute() {
    this.app.post('/add-user', async (req: Request, res: Response): Promise<any> => {
      
      const { 
        name,
        age,
        email,
        password,
       } = req.body

      const user = {
        name,
        age,
        email,
        password,

      }
      
      try {

        await authModel.create(user)
        res.send({user: user})

      } catch (error) {
        res.status(400).json({err: error})
      }
    })
  }

  signIn(){
    this.app.get('/auth/login', async (req: Request, res: Response)=>{
      const {email, password} = req.body

      
      try {
        const user = await authModel.findOne({email: email, password: password})
        
        const token = jwt.sing({user: user.email})
        
        if(!email && !password){
          res.sendStatus(404).json('user not found')
        }
        res.send({user: user, token})

      } catch (error) {
        res.sendStatus(404).json({msg: 'user not found'})
      }
     
    })
  }

  findUsers() {
    this.app.get('/users',this.authMiddler, async (req: Request, res: Response) => {
      
      try {
        const findUser = await authModel.find()
        res.send(findUser)

        
      } catch (error) {
        res.send(error)
      }

    })
    this.app.get('/auth', async (req: Request, res: Response): Promise<any> => {
      res.send('rota')
      
    })
    
  }
  routeDelete() {
    this.app.delete('/delete/:name', async (req: Request, res: Response): Promise<any> => {
      const name = req.params.name
      authModel.findOne({ name: name })

      try {

        await authModel.deleteMany({ name: name }).then(()=>{res.sendStatus(200).json({ message: 'apagou tudo' })})
        

      } catch (error) {
        res.sendStatus(200).json({ message: 'rota errada' })
      }
    })}
}