import mongoose from 'mongoose'
import { config } from '../config/default'


function connect() {
  const dbUrl = config.dbUrl
  return mongoose.connect(dbUrl).then(() => {
    console.log('Banco de dados conectado')
  }).catch((err) => {
    console.log('Não possivel conectar. Erro ' + err)
  })
}

export default connect