const express = require('express')
const router = express.Router()

const menuController = require('../app/controllers/menuCtrl')
const orderController = require('../app/controllers/orderCtrl')

//menu
router.get('/key/menu', menuController.list)
router.post('/key/menu', menuController.create)
//router.get('/key/menu/:id', menuController.show)
router.put('/key/menu/:id', menuController.update)

router.get('/key/menu/search', menuController.search)
router.get('/key/menu/radio', menuController.radio)

//order
router.get('/key/order', orderController.list)
router.post('/key/order', orderController.create)
router.get('/key/order/:id', orderController.show)
router.put('/key/order/:id', orderController.update)

module.exports = router
