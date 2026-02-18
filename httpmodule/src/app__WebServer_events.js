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

//server listener
server.on('request',(req,res)=>{
    console.log('Request Recived on', `[${new Date().toISOString()}]`, "URL is", req.url, "method ", req.method)

})