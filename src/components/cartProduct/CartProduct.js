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

    deleteFromCart(){
        
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <img src={this.props.item.img} alt=""/>
                <h1>{this.props.item.name}</h1>
                <p>{this.props.item.current_price}</p>
                <p>Quantity {this.props.item.quantity}</p>
                <button>Remove</button>
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

export default connect(mapStateToProps)(cartProduct)