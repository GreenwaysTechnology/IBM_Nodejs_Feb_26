const http = require('node:http')
const fs = require('node:fs')
const path = require('node:path')

const PORT = 3000

//create server
const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, '../index.html')
    fs.readFile(filePath, null, (err, data) => {
        if (err) {
            console.log(err)
            res.writeHead(500)
            return res.end('Error Loading File...')
        }
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(data)
    })
})
//start the server
server.listen(PORT, () => {
    console.log('Server running at http://localhost:3000')
})