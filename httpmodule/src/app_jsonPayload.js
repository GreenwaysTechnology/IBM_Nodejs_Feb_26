const http = require('node:http')

const PORT = 3000

//create server
const server = http.createServer((req, res) => {
    const data = { name: 'Alice', age: 30 }
    const jsonData = JSON.stringify(data)
    //we have to set header
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(jsonData)
})
//start the server
server.listen(PORT, () => {
    console.log('Server running at http://localhost:3000')
})