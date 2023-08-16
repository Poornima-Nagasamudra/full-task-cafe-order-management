const express = require('express')
const cors = require('cors')
const app = express()
const port = 4002
const nameDB = require('./config/database')
const routes = require('./config/routes')


app.use(express.json())
app.use(cors())
nameDB()
app.use('/', routes)

app.listen(port, function(){
    console.log('server runs ', port)
})
