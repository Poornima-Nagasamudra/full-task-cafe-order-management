const Order = require('../models/order')

orderController = {}

orderController.list = (req, res) => {
    Order.find({ status: false}).populate('menuId')
       .then((orders) => {
          res.json(orders)
       })
       .catch((err) => {
          res.json(err)
       })
}

orderController.create = (req, res) => {
    const body = req.body 
    const order = new Order(body)
    order.save()
    .then((orders) => {
        Order.findById(orders._id).populate('menuId')
            .then((order) => {
                res.json(order) 
            })
    })
    .catch((err)=> {
        res.json(err)
    })
}

orderController.show = (req, res)  => {
    const id = req.params.id
    Order.findById(id)
       .then((orders) => {
          res.json(orders)
       })
       .catch((err)=> {
          res.json(err)
       })
}

orderController.update = (req, res) => {
    const id = req.params.id 
    Order.findByIdAndUpdate(id,  {status: true}, {new : true, runValidators: true})
        .then((orders) => {
                Order.findByIdAndUpdate(orders._id).populate('menuId')
                  .then((order) =>{
                    res.json(order)
                  })
        })
        .catch((err)=> {
            res.json(err)
        })
}

module.exports = orderController