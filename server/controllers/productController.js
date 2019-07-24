module.exports = {
    async getProduct(req, res){
        const {category} = req.params
        const db = req.app.get('db')
        let product = await db.get_products_by_category(category)
        res.send(product)
    }   
}