const http = require('node:http')

const PORT = 3000

//create server
const server = http.createServer((req, res) => {
    let data = ''
    req.on('data', chunk => {
        console.log(chunk)
        console.log(chunk.toString())
        data += chunk

    })
    req.on('end', () => {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ data }))
    })
})
//start the server
server.listen(PORT, () => {
    console.log('Server running at http://localhost:3000')
})