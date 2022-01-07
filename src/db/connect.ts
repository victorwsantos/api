import mongoose from 'mongoose'
import log from '../logger'
import config from 'config'


function connect(){
    const dbUrl = config.get('dbUrl') as string

    return mongoose.connect(dbUrl).then( () => {
        log.info('Servidor Conectado')
    
    }).catch( (err) =>{
        log.info('Erro ao se Conectar '+ err)
    })
}
export default connect