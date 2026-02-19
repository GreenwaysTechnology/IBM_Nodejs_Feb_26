const express = require('express')
const app = express()


//middlewares are registered at top level
app.use((req, res, next) => {
    console.log('Global Middleware')
    next()
})

app.get('/', (req, res, next) => {
    console.log('Home Middleware')
    next()
})

app.get('/', (req, res) => {
    res.end('Home')
})

app.get('/api/greet', (req, res) => {
    res.end('Home')
})


app.listen(3000, () => {
    console.log('Server running on port 3000')
})
