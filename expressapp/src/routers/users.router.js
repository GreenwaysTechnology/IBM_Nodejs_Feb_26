const express = require('express')
const userRouter = express.Router()

//user level middlwares
userRouter.use((req, res, next) => {
    console.log('Middleware for all users requests')
    next();
})

userRouter.get('/', (req, res) => {
    res.end('Get-Users')
})
userRouter.post('/', (req, res) => {
    res.end('POST-Users')
})
userRouter.put('/', (req, res) => {
    res.end('PUT-Users')
})
userRouter.delete('/', (req, res) => {
    res.end('DELETE-Users')
})
module.exports = userRouter