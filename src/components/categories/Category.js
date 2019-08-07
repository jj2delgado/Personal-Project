import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getProduct} from '../../ducks/productReducer'
import Product from './Product'
import Header from '../header/header'
// import Footer from '../footer/footer'
import './Category.css'

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
        <div className="Category-Header-Container">
        <Header />
        </div>
            <div>
                <h1 className="Category-Title">{this.props.match.params.category}</h1>
                <div className="Category-Container">
                {this.props.products.product.map(product => (
                    <Product key={product.id} {...product}/>
                ))}
                </div>
            </div>
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