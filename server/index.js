require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
//everything above has been installed
const uc = require('./controllers/userController')
const pc = require('./controllers/productController')
const cc = require('./controllers/cartController')
const sc = require('./controllers/StripeController')
const initSession = require('./middleware/initSession')

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

app.use(initSession)

massive(CONNECTION_STRING).then(db =>
  {  app.listen(SERVER_PORT, () => console.log('Listening on port ', SERVER_PORT))
     app.set('db', db)})

     app.get('/api/test', (req, res) => {
         res.sendStatus(209)
     })
// user endpoints
app.post('/api/register', uc.register)
app.post('/api/login', uc.login)
app.delete('/api/logout', uc.logout)
app.put('/api/user/:id', uc.editUser)

//product endpoints
app.get('/api/product/:category', pc.getProduct)

//cart endpoints
app.post('/api/add/cart', cc.addToCart)
app.get('/api/cart/:id', cc.getCart)
app.delete('/api/cart/delete/:product_id', cc.removeFromCart)
// app.post('/api/cart/placeorder/:user_id', cc.createOrder)

//stripe endpoint
app.post('/api/payment/:user_id', sc.pay)