const mongoose = require('mongoose')

const Schema = mongoose.Schema 
const orderSchema = new Schema ( {
    
    menuId : {
        type: Schema.Types.ObjectId,
        required: true,
        ref : 'Menu'
    },
    status: {
        type: Boolean,
        default: false
    }
    
}, {timestamps:true})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order