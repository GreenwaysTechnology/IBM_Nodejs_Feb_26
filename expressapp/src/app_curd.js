const express = require('express')
const app = express()
// console.log(app)

//expose apis 
app.get('/', (req, res) => {
    res.end('Home')
})
//users 
app.get('/api/users',(req,res)=>{
    res.end('GET-Users')
})
app.post('/api/users',(req,res)=>{
    res.end('POST-Users')
})
app.put('/api/users',(req,res)=>{
    res.end('PUT-Users')
})
app.delete('/api/users',(req,res)=>{
    res.end('DELETE-Users')
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})
