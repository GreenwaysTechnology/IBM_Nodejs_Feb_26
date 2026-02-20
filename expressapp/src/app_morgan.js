const express = require('express')
const fs = require('node:fs')
const morgan = require('morgan')
const path = require('node:path')

const app = express()

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

app.use(morgan('combined', { stream: accessLogStream }))

const PORT = 3000

//expose apis 
app.get('/', (req, res) => {
    res.end('Home')
})

app.get('/api/greet',(req,res)=>{
    res.send('Hello')
})


const server = app.listen(PORT, () => {
    console.log(server.address())
    console.log(`Server running on port ${server.address().port} `)
})
