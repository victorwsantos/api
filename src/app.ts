import { config } from './config/default'
import app from './service/index'

const host = config.host
const port = config.port

app.listen(config.port, () => {
  console.log(`server http://${host}:${port}/ rodando na porta ${port}`)
})