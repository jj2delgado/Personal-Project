import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCart,createOrder} from '../../ducks/cartReducer'
import CartProduct from '../cartProduct/CartProduct'
import StripeCheckout from 'react-stripe-checkout'
import {toast} from 'react-toastify'
import Header from '../header/header'
import Footer from '../footer/footer'
import './cart.css'
require('dotenv').config()

toast.configure()

class Cart extends Component{
    constructor(){
        super()

        this.state = {
            total: 0
        }
    }

    componentDidMount(){
        console.log(this.props)
        this.props.getCart(this.props.user.user.id)
        
    }


    componentDidUpdate(prevProps){
        if(prevProps !== this.props){
            this.calcTotal()
        }
    }

    onOpened = () => {
        console.log('this is opened')
      }
    
    onClosed = () => {
        console.log('this is closed')
      }

    placeOrder = () => {
        this.props.createOrder(this.props.user.user.id, this.state.total,this.props.cart.cart[0].list_id)
      }
    onToken = (token) => {
        console.log(token)
        let { total } = this.state
        total *= 100
        console.log(total)
        token.card = void 0
        // axios.post(`/api/payment/${this.props.user.user.id}`, { token, amount: total}).then(res => {
        //   console.log(res)
        // })
        this.props.createOrder(this.props.user.user.id, total, this.props.cart.cart[0].list_id, token)
    }

    calcTotal = () => {
        let totalArr = this.props.cart.cart.reduce((acc, item) => {
            return acc + (+item.current_price * item.quantity)
        }, 0)
        let newNum = totalArr.toFixed(2)
        this.setState({total: newNum})
    }
    render(){
        if(this.props.cart.cart.length){
        console.log(this.props.cart.cart[0].list_id)
        }

        return(
            <div>
                <Header />
            <div className="Cart-Container">
                <h1 className='Cart-Title'>YOUR CART</h1>
                <div className="Cart-Title-Underline"></div>
                <div>
                    {this.props.cart.cart.map(item => (
                        <CartProduct key={item.id} item={item}/>
                    ))}
                </div>
                <div>Total Price ${this.state.total}</div>
                <StripeCheckout
                         name='Place Order' //header
                         description='Confirm your payment information below.' //subtitle - beneath header
                         stripeKey={process.env.REACT_APP_PUBLIC_STRIPE} //public key not secret key
                         token={this.onToken} //fires the call back
                         amount={+this.state.total * 100} //this will be in cents
                         currency="USD" 
                         // image={imageUrl} // the pop-in header image (default none)
                         // ComponentClass="div" //initial default button styling on block scope (defaults to span)
                         panelLabel="Submit Payment" //text on the submit button
                         locale="en" //locale or language (e.g. en=english, fr=french, zh=chinese)
                         opened={this.onOpened} //fires cb when stripe is opened
                         closed={this.onClosed} //fires cb when stripe is closed
                         allowRememberMe // "Remember Me" option (default true)
                         billingAddress = {false}
                         shippingAddress = {false} //you can collect their address
                         zipCode
                >
                    {/* <button>Checkout</button> */}
                </StripeCheckout>
            </div>
            <Footer />
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

export default connect(mapStateToProps, {getCart, createOrder})(Cart)