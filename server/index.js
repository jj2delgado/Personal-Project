require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
//everything above has been installed
const uc = require('./controllers/userController')

const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env

const app = express()
//below used for req.body to receive json objects
app.use(express.json())

app.use(
    session({
        secret: SESSION_SECRET,
        saveUninitialized: true,
        resave: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7
        }
    })
)

massive(CONNECTION_STRING).then(db =>
  {  app.listen(SERVER_PORT, () => console.log('Listening on port ', SERVER_PORT))
     app.set('db', db)})

// user endpoints
app.post('/api/register', uc.register)
app.post('/api/login', uc.login)
app.delete('/api/logout', uc.logout)


