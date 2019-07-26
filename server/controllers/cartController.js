module.exports = {
    async addToCart(req, res){
        const {product_id, list_id, quantity} = req.body
        const db = req.app.get('db')
        let cart = await db.add_to_cart([product_id, list_id, quantity])
        res.send(cart)
    },
    async getCart(req, res){
        const {id} = req.params
        const db = req.app.get('db')
        let cart = await db.get_cart_by_user(id)
        res.send(cart)
    }
}