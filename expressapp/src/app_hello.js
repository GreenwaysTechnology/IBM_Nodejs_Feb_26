const express = require('express')
const app = express()
// console.log(app)

//expose apis 

app.get('/', (req, res) => {
    res.end('Home')
})



app.listen(3000, () => {
    console.log('Server running on port 3000')
})
