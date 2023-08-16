const mongoose = require('mongoose')

const Schema = mongoose.Schema 
const menuSchema = new Schema ({
    name : {
        type: String,
        required: true,
        searchable: true 
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min : 50
    }
}, {timestamps: true})


const Menu = mongoose.model('Menu', menuSchema)

module.exports = Menu