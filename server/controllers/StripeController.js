const stripe = require('stripe')(process.env.STRIPE_KEY)

module.exports = {
    pay:(req, res) => {
        // const db = req.app.get('db')
        const {token:{id}, amount} = req.body
        console.log(id, amount, stripe)
        stripe.charges.create(
            {
                amount: amount,
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
                    return res.status(200).send(charge)
                }
            }
        )
    }
}