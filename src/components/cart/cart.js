import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCart} from '../../ducks/cartReducer'
import CartProduct from '../cartProduct/CartProduct'

class Cart extends Component{

    componentDidMount(){
        console.log(this.props)
        this.props.getCart(this.props.user.user.id)
    }

    render(){
        return(
            <div>
                <h1>YOUR CART</h1>
                <div>
                    {this.props.cart.cart.map(item => (
                        <CartProduct key={item.id} item={item}/>
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