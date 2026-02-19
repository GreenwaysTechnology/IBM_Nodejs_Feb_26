const express = require('express')
const app = express()
const USERS = require('./data/users')


const PORT = 3000

//expose apis 
app.get('/', (req, res) => {
    res.end('Home')
})

//multi resources
//users 
app.get('/api/users', (req, res) => {
    res.json(USERS)
})
app.post('/api/users', (req, res) => {
   res.end('POST-Users')
})
app.put('/api/users', (req, res) => {
    res.end('PUT-Users')
})
app.delete('/api/users', (req, res) => {
    res.end('DELETE-Users')
})
//products
app.get('/api/products', (req, res) => {
    res.end('Get-Products')
})
app.post('/api/products', (req, res) => {
   res.end('POST-products')
})
app.put('/api/products', (req, res) => {
    res.end('PUT-products')
})
app.delete('/api/products', (req, res) => {
    res.end('DELETE-products')
})
//customers
app.get('/api/customers', (req, res) => {
    res.end('GET-Customers')
})
app.post('/api/customers', (req, res) => {
   res.end('POST-customers')
})
app.put('/api/customers', (req, res) => {
    res.end('PUT-customers')
})
app.delete('/api/customers', (req, res) => {
    res.end('DELETE-customers')
})

const server = app.listen(PORT, () => {
    console.log(server.address())
    console.log(`Server running on port ${server.address().port} `)
})
