
const express = require('express')
const productsRouter = express.Router()

//products
productsRouter.get('/', (req, res) => {
    res.end('Get-Products')
})
productsRouter.post('/', (req, res) => {
    res.end('POST-products')
})
productsRouter.put('/', (req, res) => {
    res.end('PUT-products')
})
productsRouter.delete('/', (req, res) => {
    res.end('DELETE-products')
})
module.exports = productsRouter