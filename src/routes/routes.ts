import { Request, Response } from 'express'
import Administrador from '../models/model'
import { jwtConfig } from '../service/auth'

export class Route {
  app

  constructor(app: any) {
    this.app = app
    this.routersGet()
    this.routerPost()
    this.routeUpdate()
    this.routeDelet()
  }
  routersGet() {
    this.app.get('/', (req: Request, res: Response): void => {
      res.send('hello World')
    })

    this.app.get('/articles', async (req: Request, res: Response): Promise<any> => {

      try {
        const article = await Administrador.find()
        res.status(200).json(article)
      } catch (error) {
        res.status(500).json({ message: error })
      }
    })

    this.app.get('/articles/:id', async (req: Request, res: Response): Promise<any> => {
      const id = req.params.id

      try {
        const article = await Administrador.findOne({ _id: id })
        res.send(article)
      } catch (error) {
        res.send(402).json({ message: error })
      }
    })
  }


  routerPost() {
    this.app.post('/add-article', async (req: Request, res: Response): Promise<any> => {

      const { tittle, text, img } = req.body
      const article = {
        tittle,
        text,
        img
      }

      try {
        await Administrador.create(article)
        res.status(200).json({ message: 'Artigo criado com sucesso.' })
      } catch (error) {
        res.status(501).json({ err: error })
      }

    })

  }

  routeUpdate() {
    this.app.put('/update/:id', async (req: Request, res: Response): Promise<any> => {
      const id = req.params.id
      const { text } = req.body
      const article = {
        text,
      }

      try {
        await Administrador.updateOne({ _id: id }, article)
        res.send(202).json({ message: 'Atualizou' })
      } catch (error) {
        res.status(500).json({ message: 'rota errada' })
      }
    })
  }

  routeDelet() {
    this.app.delete('/delete/:id', async (req: Request, res: Response): Promise<any> => {
      const id = req.params.id
      const article = Administrador.findOne({ _id: id })

      try {
        await Administrador.deleteOne({ _id: id })
        res.send(202).json({ message: 'apagou tudo' }).redirect('http://localhost:3000/Artigos')
      } catch (error) {
        res.status(500).json({ message: 'rota errada' })
      }
    })

  }
}
