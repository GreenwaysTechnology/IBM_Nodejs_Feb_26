const express = require('express')
const app = express()


//middlewares are registered at top level
app.use((req, res, next) => {
    console.log('middleware-1')
    next()
})
app.use((req, res, next) => {
    console.log('middleware-2')
    next()
})
app.use((req, res, next) => {
    console.log('middleware-3')
    next()
})
app.use((req, res, next) => {
    console.log('middleware-4',req.url ,req.method)
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
