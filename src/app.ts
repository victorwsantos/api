import express from 'express'

import config from 'config'
import log from './logger'
import connect from './db/connect'
import routes from './service/routes'

const cors = require('cors')

const port = config.get('port') as number
const host = config.get('host') as string

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(port, host, ()=>{
    log.info(`Servidor rodando em https://${host}:${port}/`)
    connect()
    routes(app)
})