import { Express, Request, Response } from 'express'

const Article = require('../model/model')
export default function(app: Express){
    app.get('/healthcheck', (req: Request, res: Response)=> res.sendStatus(200))
    
    app.get('/all', async (req: Request, res: Response)=> {
             
           const list = await Article.find()

           res.send(list)
        })
    
    app.post('/create', async (req: Request, res: Response)=> {
        const title: string =  'Teste Artigo 2'
        const subtitle: string = 'teste 2'
        const text: string = '111111111'

        const postagem = {
            title,
            subtitle,
            text
        }
        try {
           await Article.create(postagem)
           res.send('criado com sucesso')
        } catch (err) {
            res.send('erro: '+ err)    
        }
    })
}