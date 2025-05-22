import React from 'react'
import '../styles/product.css'

const Product = (props) => {
  return (
    <div id='maindiv'>
        <img src={props.products.image} alt="" />
        <div>
            <h2 className='font-bold'>{props.products.title}</h2>
            <h3>{props.products.price}</h3>
            <p>{props.products.description}</p>
            {
            props.products.qty>=1 
            ?<>
            <button>Add to cart</button>
            {props.products.qty>5
            ?<h6 className='red-text'>Limited Stocks</h6>
            :""
            } 
            </>
            :<h6 className='red-text'>Out of stock</h6>
            }
            
        </div>
    </div>
  )
}

export default Product