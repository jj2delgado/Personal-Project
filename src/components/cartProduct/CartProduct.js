import React, {Component} from 'react'
import {connect} from 'react-redux'
import {removeFromCart} from '../../ducks/cartReducer'
import './CartProduct.css'

class cartProduct extends Component{

    deleteFromCart = () => {
        console.log('Hit delete from cart', this.props.item.product_id)
        this.props.removeFromCart(this.props.item.product_id)
    }
    // updateCust = () => {
    //     toast.success("Item removed from cart.", {autoClose: 7000}, {position: toast.POSITION.TOP_CENTER})
    // }
    // multipleOnClick = () => {
    //     this.deleteFromCart()
    //     this.updateCust()
    // }

    render(){
        console.log(this.props)
        return(
            <div className="CartProduct-Container">
                <img className="CartProduct-Image"src={this.props.item.img} alt=""/>
                <h1 className="CartProduct-Title">{this.props.item.name}</h1>
                <p className="CartProduct-Price">${this.props.item.current_price}</p>
                <p className="CartProduct-Qty">Quantity: {this.props.item.quantity}</p>
                <button className="Remove-Button" 
                onClick={() => this.deleteFromCart()}>Remove</button>
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