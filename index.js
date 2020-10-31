const express = require('express')
var customer = require('./routes/customer')

const app = express()
const port = 3000

app.use('/customer', customer);

app.listen(port, () => {
    console.log("Server running on port " + port)
})