import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getProduct} from '../../ducks/productReducer'

class Category extends Component{
    constructor(){
        super()

        this.state = {
            products: []
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

    addToCart = () => {
        
    }
    addToWishList = () => {

    }

    render(){
        console.log(this.props)
        return(
            <div>
                {this.props.products.product.map(product => (
                    <div key={product.id}>
                    <img src={product.img}/>
                    <h1 className="Product-Title">{product.name}</h1>
                    <p className="Product-Price">${product.current_price}</p>
                    <button>Add to Cart</button>
                    <button>Add to WishList</button>
                    </div>
                ))}
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
       products: state.products
    }
}

export default connect(mapStateToProps, {getProduct})(Category)