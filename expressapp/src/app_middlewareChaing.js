const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.end('Home')
})

//way - 1 chaining
// app.get('/api/greet', function (req, res, next) {
//     console.log('chain-1')
//     next()
// }, function (req, res, next) {
//     console.log('chain-2')
//     next()
// }, (req, res) => {
//     res.end('Home')
// })

//way 2: writting middleware separatly 
// const chain1 = function (req, res, next) {
//     console.log('chain-1')
//     next()
// }
// const chain2 = function (req, res, next) {
//     console.log('chain-2')
//     next()
// }
// app.get('/api/greet', chain1, chain2, (req, res) => {
//     res.end('Home')
// })

const chain1 = function (req, res, next) {
    console.log('chain-1')
    next()
}
const chain2 = function (req, res, next) {
    console.log('chain-2')
    next()
}
const chains = [chain1, chain2]
app.get('/api/greet', chains, (req, res) => {
    res.end('Home')
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})
