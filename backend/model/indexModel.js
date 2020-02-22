const moongose = require('mongoose')

const indexSchema = new moongose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})

module.exports = moongose.model('Index', indexSchema)