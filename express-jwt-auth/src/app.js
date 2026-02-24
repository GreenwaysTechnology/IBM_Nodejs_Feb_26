const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const app = express()
const PORT = 3000
app.use(bodyParser.json())

const privateKey = 'your-secrete-key'

//inmemory database
const users = []
//user registeration

app.post('/register', async (req, res) => {
    //extract user name and password
    const { username, password } = req.body
    //hash the password before storing into db.
    const hashedPassword = await bcrypt.hash(password, 10)
    //store the user details into db
    users.push({ username, password: hashedPassword })
    console.log(users)
    res.status(201).json({ message: 'User Registered' })
})

//login
app.post('/login', async (req, res) => {
    const { username, password } = req.body
    //find users in the database or not
    const user = users.find(u => u.username === username)
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid Credentials' })
    }
    //if valid user generate token and send that token to user
    const token = jwt.sign({ username: user.username }, privateKey, { 'expiresIn': '1hr' })
    res.json({ token })
})

//middleware to protect route -  autherization logic
function authenticateToken(req, res, next) {
    //get auth header
    const authHeader = req.headers['authorization']
    console.log(authHeader)
    const token = authHeader && authHeader.split(' ')[1]
    console.log('token',token)
    if (!token) {
        return res.status({ message: 'Access Denied, No TOken proved' })
    }
    //token is available, then validate token is valid or not
    jwt.verify(token, privateKey, (err, user) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid or Expired Token' })
        }
        req.user = user
        next()
    })
}
//route to be protected
app.get('/dashboard', authenticateToken, (req, res) => {
    res.json({ message: `Welcome to ${req.user.username}` })
})

app.listen(PORT, () => {
    console.log('Server is running at 3000')
})