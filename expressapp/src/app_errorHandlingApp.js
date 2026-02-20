const express = require('express')
const fs = require('node:fs')
const morgan = require('morgan')
const path = require('node:path')

const app = express()
//register to serve static pages : it looks index.html automatically.
app.use(express.static(path.join(__dirname, "public")))

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

app.use(morgan('combined', { stream: accessLogStream }))


const PORT = 3000

//expose apis 
app.get('/', (req, res) => {
    res.send('index.html')
})

app.get('/api/user/:name', (req, res) => {
    const name = req.params.name
    if (name === 'admin') {
        res.send({ message: 'Welcome to Admin' })
    } else {
        throw new Error('User Is not valid')
    }
})

//404 Route not found error handler
//this must be placed before Global error handler
//it wont take next arg, because it terminates the request and response
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: `The route ${req.originalUrl} not Found`,
    });
});
//error handlers
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).json({
        success: false,
        message: err.message
    });

})


const server = app.listen(PORT, () => {
    console.log(server.address())
    console.log(`Server running on port ${server.address().port} `)
})
