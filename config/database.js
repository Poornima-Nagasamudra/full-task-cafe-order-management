const mongoose = require('mongoose')

const nameDB = () =>{
    const connection_uri = 'mongodb://127.0.0.1:27017/feb2020'
        mongoose.connect(connection_uri, { useNewUrlParser: true })
        .then(() => {
            console.log(' database: connected')
        })
        .catch((err) => {
            console.log(' database: error')
        })
}

module.exports = nameDB


