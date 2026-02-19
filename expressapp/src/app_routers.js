const express = require('express')
// const userRouter = require('./routers/users.router')
// const productsRouter = require('./routers/products.router')
const app = express()
//bind/connect routers with main object
// app.use('/api/users',userRouter)
app.use('/api/users', require('./routers/users.router'))
app.use('/api/products', require('./routers/products.router'))
app.use('/api/customers', require('./routers/customers.router'))

const PORT = 3000

//expose apis 
app.get('/', (req, res) => {
    res.end('Home')
})


const server = app.listen(PORT, () => {
    console.log(server.address())
    console.log(`Server running on port ${server.address().port} `)
})
