import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCart} from '../../ducks/cartReducer'
import CartProduct from '../cartProduct/CartProduct'

class Cart extends Component{
    constructor(){
        super()

        this.state ={
            cart:[],
        }
    }

    componentDidMount(){
        console.log(this.props)
        this.props.getCart(this.props.user.user.id)
    }

    render(){
        this.state.cart = this.props.cart.cart[0]
        return(
            <div>
                <h1>YOUR CART</h1>
                <div>
                    {this.props.cart.cart.map(item => (
                        <CartProduct key={item.id} />
                    ))}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        cart: state.cart,
        user: state.user
    }
}

export default connect(mapStateToProps, {getCart})(Cart)