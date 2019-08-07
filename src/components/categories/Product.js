import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addToCart} from '../../ducks/cartReducer'
import './Product.css'

class Product extends Component{
    constructor(props){
        super(props)
        this.state ={
            img: props.img,
            name: props.name,
            current_price: props.current_price,
            quantity: 1
        }
    }
    addCart = (productId, listId, quantity) => {
        this.props.addToCart(productId, listId, quantity)
    }
    incrementQty = () => {
        let newNum = this.state.quantity
        newNum++
        this.setState({quantity:newNum})
    }
    decrementQty = () => {
        let newNum = this.state.quantity
        newNum--
        this.setState({quantity:newNum})
    }
    render(){
        console.log(this.props)
        let {img, name, current_price} = this.props
        return(
            <div className="Product-Container">
                     <img className="Product-Image"src={img} alt=""/>
                     <h1 className="Product-Title">{name}</h1>
                     <p className="Product-Price">${current_price}</p>
                     <button className="Cart-Button"onClick={() => this.addCart(this.props.id, this.props.user.user.cart_id[0].id, this.state.quantity)}>Add to Cart</button>
                         <div className="quantity-container">
                             <h1 className="Quantity-Title">Qty.</h1>
                        <button  className="Increase-Button"onClick={this.incrementQty}>+</button>
                         <h2 className="Quantity-Display">{this.state.quantity}</h2>

                         {(this.state.quantity > 1) ? (<button className="Decrease-Button"onClick={this.decrementQty}>-</button>) :
                         (<button className="Decrease-Button"disabled>-</button>)
                        }
                         </div>
                     <button className="Wishlist-Button">Add to WishList</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        user:state.user
    }
}

export default connect(mapStateToProps,{addToCart})(Product)