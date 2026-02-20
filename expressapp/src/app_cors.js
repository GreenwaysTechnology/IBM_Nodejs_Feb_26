const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3000

//this means any body from outside can access our resources
// app.use(cors())

// const corsOptions = {
//     origin: 'http://www.abc.com'
// }
//allow only from this url.
// const corsOptions = {
//     origin: 'http://127.0.0.1:5500'
// }
// app.use(cors(corsOptions))

//white list - many origins
const whiteList = [
    'http://127.0.0.1:5500',
    'http://localhost:8080',
    'http://example.com',
    'http://jsbin.com'
]
app.use(cors({
    // methods: ['GET'],
    origin: (origin, callback) => {
        //allow requests with no origin(mobile,apps,curl,postman)
        if (!origin) return callback(null, true);
        if (whiteList.includes(origin)) {
            callback(null, true) // allowed
        } else {
            callback(new Error('CorsBlocked: ${origin} not allowed'))
        }
    },
}))


app.get('/api/customers/:id', (req, res, next) => {
    res.json({ msg: 'cors enabled for only this particular' })
})

app.post('/api/customers', (req, res) => {
    res.status(201).json({ message: 'post' })
})


const server = app.listen(PORT, () => {
    console.log(server.address())
    console.log(`Server running on port ${server.address().port} `)
})