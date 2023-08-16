const Menu = require('../models/menu')

menuController = {}

menuController.list = (req, res) => {
    Menu.find()
      .then((list) =>{
          res.json(list)
      })
      .catch((err) => {
        res.json(err)
      })
}

menuController.create = (req, res) => {
     const body = req.body
     const menu = new Menu(body)
     menu.save()
        .then((list) => {
            res.json(list)
        })
        .catch((err)=>{
          res.json(err)
        })

}

menuController.show =  (req, res) =>{
    const id = req.params.id 
    Menu.findById(id)
      .then((list) => {
         res.json(list)
      })
      .catch((err) => {
          res.json(err)
      })
}

menuController.update = (req,res) => {
    const id = req.params.id 
    const body = req.body 
    Menu.findByIdAndUpdate( id, body, { new: true, runValidators: true})
       .then((list) => {
          res.json(list)
       })
       .catch((err) =>{
          res.json(err)
       })
}

menuController.search = (req, res) => {
    const {name} = req.query
    Menu.find({ 'name' : { $regex: name, $options: 'i' } })
        .then((list) => {
            res.json(list)
        })
        .catch((err) => {
            res.json(err)
        })
}

menuController.radio = (req, res) => {
    const {type} = req.query
    Menu.find({ 'type' : {$regex: type, $options: 'i'}})
       .then((list) => {
          const result = list.filter(function(ele){
            return ele._id !== type._id
          })
          res.json(result)
       })
       .catch((err) => {
          res.json(err)
       })
}

module.exports = menuController