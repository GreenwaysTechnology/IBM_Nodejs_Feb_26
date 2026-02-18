const http = require('node:http')

const PORT = 3000

//create server
const server = http.createServer((req, res) => {
    //request handling and sending response
    res.write('Hello!')
    res.end()
})
//start the server
server.listen(PORT, () => {
    console.log('Server running at http://localhost:3000')
})