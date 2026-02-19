const express = require('express')
const app = express()
const USERS = require('./data/users')


const PORT = 3000

//expose apis 
app.get('/', (req, res) => {
    res.end('Home')
})
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

const server = app.listen(PORT, () => {
    console.log(server.address())
    console.log(`Server running on port ${server.address().port} `)
})
