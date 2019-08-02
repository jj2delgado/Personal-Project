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
    },
    async removeFromCart(req, res){
        const {product_id} = req.params
        const db = req.app.get('db')
        let newCart = await db.delete_from_cart([product_id, req.session.user.id])
        res.send(newCart)
    },
    // async createOrder(req, res){
    //     const {user_id} = req.params
    //     const {total, list_id} = req.body
    //     console.log(user_id, total, list_id)
    //     let order = await db.create_order([user_id, total, list_id])
    //     res.send(order)
    // },
    async addPurchaseHistory(req, res){

    }
    // async emptyCart(req, res){
    //     const{}
    // }
}