import React, {Component} from 'react'
import {connect} from 'react-redux'
import {removeFromCart} from '../../ducks/cartReducer'


class cartProduct extends Component{
    constructor(props){
        super(props)

        this.state ={
            editing: false
        }
    }

    deleteFromCart = () => {
        console.log('Hit delete from cart', this.props.item.product_id)
        this.props.removeFromCart(this.props.item.product_id)
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <img src={this.props.item.img} alt=""/>
                <h1>{this.props.item.name}</h1>
                <p>{this.props.item.current_price}</p>
                <p>Quantity {this.props.item.quantity}</p>
                <button onClick={() => this.deleteFromCart()}>Remove</button>
                <button>Checkout</button>
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

export default connect(mapStateToProps, {removeFromCart})(cartProduct)