const http = require('node:http')

const PORT = 3000

//create server
const server = http.createServer((req, res) => {
    //url  - '/'
    if (req.url === '/') {
        res.end('Home Page')
    } else if (req.url === '/about') {
        res.end('About Page')
    } else if (req.url === '/services') {
        res.end('Service Page')
    } else {
        res.end('404 Not Found Page')
    }
})
//start the server
server.listen(PORT, () => {
    console.log('Server running at http://localhost:3000')
})

//server listener
server.on('request', (req, res) => {
    console.log('Request Recived on', `[${new Date().toISOString()}]`, "URL is", req.url, "method ", req.method)

})