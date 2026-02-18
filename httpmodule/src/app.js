const http = require('node:http')
const fs = require('node:fs')
const path = require('node:path')

const PORT = 3000

//create server
const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, '../index.html')
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' })
            return res.end('The Requested file not found')
        }
        res.writeHead(200, { 'Content-Type': 'text/html' })
        //create stream
        const readStream = fs.createReadStream(filePath)
        //pipe
        readStream.pipe(res)

        readStream.on('error', (streamErr) => {
            console.log('Stream Error', streamErr)
            res.end('Streaming Error')
        })

    })

})
//start the server
server.listen(PORT, () => {
    console.log('Server running at http://localhost:3000')
})