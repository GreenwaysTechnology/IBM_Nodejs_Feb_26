const http = require('node:http')
const { findAll } = require('./services/todo.service')

const PORT = 3000

//create server
const server = http.createServer(async (req, res) => {
    try {
        const todos = await findAll()
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(todos)
    } catch (err) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end({ err })
    }
})
//start the server
server.listen(PORT, () => {
    console.log('Server running at http://localhost:3000')
})