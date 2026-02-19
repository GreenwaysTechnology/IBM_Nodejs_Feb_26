const express = require('express')
const app = express()
// console.log(app)

//expose apis 
app.get('/', (req, res) => {
    res.end('Home')
})
//users 
app.get('/api/users', (req, res) => {
    res.end('GET-Users')
})
//users by city - /api/users/address?city='xxx'&state='xxx'
app.get('/api/users/address', (req, res) => {
    const queryparams = req.query
    console.log(queryparams.city)
    res.json({ message: queryparams })
})
//users by id-route parameters
app.get('/api/users/:id', (req, res) => {
    const params = req.params
    res.json({ message: params.id })
})

app.post('/api/users', (req, res) => {
    let data = ''
    req.on('data', (chunk) => {
        data += chunk
    })
    req.on('end', () => {
        console.log(data)
        //save
        console.log(JSON.parse(data))
        res.end('Data is Posted')
    })
})
app.put('/api/users', (req, res) => {
    res.end('PUT-Users')
})
app.delete('/api/users', (req, res) => {
    res.end('DELETE-Users')
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})
