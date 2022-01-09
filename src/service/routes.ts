import { Express, Request, Response } from 'express'
import log from '../logger'
const Administrador = require('../model/model')
export default function(app: Express){
    app.get('/healthcheck', (req: Request, res: Response)=> res.sendStatus(200))
    
    app.get('/all', async (req: Request, res: Response)=> {
             
           const list = await Administrador.find()

           res.send(list)
        })
    
    app.post('/create', async (req: Request, res: Response)=> {
        const name: string =  'Victor Santos'
        const email: string = 'victor.santos@icloud.com'
        const password: string = '111111111'

        const user = {
            name,
            email,
            password
        }
        try {
           await Administrador.create(user)
           res.send('criado com sucesso')
        } catch (err) {
            res.send('erro: '+ err)    
        }
    })
    app.post('/login', async(req: Request, res: Response) =>{
        const email: string = req.body.email
        const password: string = req.body.password

        
        const article = await Administrador.findOne({email: email, password: password})
        
        if (!article){
            log.info('não encontrado')
        }else{
            res.send(true)
        }
        
    })
}