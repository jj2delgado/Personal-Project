const stripe = require('stripe')(process.env.REACT_APP_STRIPE_KEY)

module.exports = {
    pay:(req, res) => {
        console.log('Req stuff',req.params, req.body)
        const db = req.app.get('db')
        const {user_id} = req.params
        const {token:{id}, total, list_id} = req.body
        console.log('From stripe controller',user_id, id, total)
        stripe.charges.create(
            {
                amount: total,
                currency: 'usd',
                source: id,
                description: 'Test Charge'
            },
            (err, charge) => {
                if(err){
                    console.log(err)
                    return res.status(500).send(err)
                } else{
                    console.log('Payment Successful, order placed', charge)
                    //where you can use db function to save inside of db
                    db.create_order([user_id, total, list_id]).then(order => res.status(200).send(order))
                }
            }
        )
    }
}