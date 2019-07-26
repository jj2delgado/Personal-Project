import React, {Component} from 'react'
import {connect} from 'react-redux'


class cartProduct extends Component{
    constructor(props){
        super(props)

        this.state ={
            editing: false
        }
    }
    render(){
        let {img} = this.props.cart.cart
        console.log(this.props)
        return(
            <div>
                <img src={img} />
                <h1></h1>
                <p></p>
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