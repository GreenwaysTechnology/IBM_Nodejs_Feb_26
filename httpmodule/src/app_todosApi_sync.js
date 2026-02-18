const http = require('node:http')
const { findAll } = require('./services/todo.service')

const PORT = 3000

//create server
const server = http.createServer((req, res) => {
    const todos = findAll()
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(todos)
})
//start the server
server.listen(PORT, () => {
    console.log('Server running at http://localhost:3000')
})