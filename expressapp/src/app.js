const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//register middlware
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.end('Home')
})

// app.post('/api/users', (req, res) => {
//     let data = ''
//     req.on('data', (chunk) => {
//         data += chunk
//     })
//     req.on('end', () => {
//         res.send(data)
//     })
// })
app.post('/api/users', (req, res) => {
    const payload = req.body 
    res.json(payload)
})
app.listen(3000, () => {
    console.log('Server running on port 3000')
})
