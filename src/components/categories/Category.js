import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getProduct} from '../../ducks/productReducer'
import Product from './Product'

class Category extends Component{
    constructor(){
        super()

        this.state = {
            products: [],
            quantity: 1
        }
    }
    componentDidMount(){
        this.props.getProduct(this.props.match.params.category)
    }

    componentDidUpdate(prevProps) {
        if(prevProps !== this.props) {
            this.render()
        }
    }

    addCart = (productId, listId) => {
        this.props.addToCart(productId, listId)
    }
    render(){
        console.log(this.props)
        return(
            <div>
                {this.props.products.product.map(product => (
                    <Product key={product.id} {...product}/>
                ))}
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
       products: state.products,
       user: state.user
    }
}

export default connect(mapStateToProps, {getProduct})(Category)