require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
//everything above has been installed

const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env

const app = express()
//below used for req.body to receive json objects
app.use(express.json())

app.use(
    session({
        secret: SESSION_SECRET,
        saveUninitialized: true,
        resave: false
    })
)

massive(CONNECTION_STRING).then(db => app.set('db', db))

app.listen(SERVER_PORT, () => console.log('Listening on port ', SERVER_PORT))
