const mongose = require('mongoose')

const Article = mongose.model('Artigo', {
    title: {
        type: String,
        require: true
    },
    subtitle: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    }
})

module.exports = Article