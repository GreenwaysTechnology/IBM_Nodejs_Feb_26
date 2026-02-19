const express = require('express')
const app = express()

const myConfigMiddleware = function (param) {
    //middleware 
    return function (req, res, next) {
        console.log(param)
        next()
    }
}

app.use(myConfigMiddleware('Your param'))

app.get('/', (req, res) => {
    res.end('Home')
})

app.get('/api/greet', (req, res) => {
    res.end('Home')
})


app.listen(3000, () => {
    console.log('Server running on port 3000')
})
