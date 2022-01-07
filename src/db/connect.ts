import mongoose from 'mongoose'
import log from '../logger'
import config from 'config'

function connect(){
    
    const dbUri = config.get("dbUri") as string
    log.info(dbUri)
    
    return mongoose
    .connect(dbUri).then(() => {

        log.info('Mongo Conectado')

    }).catch((err) => {
        
        log.info('Erro ao conectar '+ err)
        process.exit(1)
    })
}
export default connect