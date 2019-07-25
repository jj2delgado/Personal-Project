const bcrypt = require('bcrypt')
const saltRounds = 12

module.exports = {
    async register(req, res){
        //receives username and password from body
        let {name_first, name_last, username, password, email} = req.body
        //accesses database object that was created from massive
        const db = req.app.get('db')

        //checks to see if username already exists in database
        let [existingUser] = await db.get_user_by_username(username)
        //response if username already exists
        if (existingUser) return res.status(400).send('Username not available')
        let salt = await bcrypt.genSalt(saltRounds)
        //encrypts password for safekeeping in our database
        let hash = await bcrypt.hash(password, salt)
        let [user] = await db.create_user([name_first, name_last, username, hash, email])
        let cartID = await db.create_list([user.id, "cart"])
        console.log(cartID)
        req.session.user = { username: user.username, id: user.id, loggedIn: true, cart_id: cartID}
        res.send(req.session.user)
    },
    async login( req, res){
        let {username, password} = req.body
        const db = req.app.get('db')
        let [existingUser] = await db.get_user_by_username(username)
        if(!existingUser) return res.status(401).send('Username not found')
        //comparing if user entered correct password
        let result = await bcrypt.compare(password, existingUser.password)
        if (result){
            let cartID = await db.get_cart(existingUser.id)
            console.log(cartID)
            req.session.user = {
                username: existingUser.username,
                id: existingUser.id,
                loggedIn: true,
                cart_id: cartID
            }
            res.send(req.session.user)
        }
        else res.status(401).send('Username or Password incorrect')
    },
    logout(req, res){
        req.session.destroy()
        res.sendStatus(200)
    }
}