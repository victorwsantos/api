const mongose = require('mongoose')

const Administrador = mongose.model('administrador', {
    tittle: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    }
})

export default Administrador