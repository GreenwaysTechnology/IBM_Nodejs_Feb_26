const express = require('express')
const app = express()


//middlewares are registered at top level
app.use((req, res, next) => {
    console.log('middlware code goes here')
    console.log(next)
    next()
})



app.get('/', (req, res) => {
    res.end('Home')
})



app.listen(3000, () => {
    console.log('Server running on port 3000')
})
