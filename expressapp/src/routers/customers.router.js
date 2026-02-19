
const express = require('express')
const customerRouter = express.Router()

//products
customerRouter.get('/', (req, res) => {
    res.end('GET-Customers')
})
customerRouter.post('/', (req, res) => {
    res.end('POST-Customers')
})
customerRouter.put('/', (req, res) => {
    res.end('PUT-Customers')
})
customerRouter.delete('/', (req, res) => {
    res.end('DELETE-Customers')
})
module.exports = customerRouter