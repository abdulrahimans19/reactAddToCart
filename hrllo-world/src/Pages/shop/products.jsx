import React, { useContext } from 'react'
import { ShopContext } from '../../context/shopContext'

function Products(props) {
    const {id,productName,price,productImage}=props.data
    const{addToCart,cartItems}=useContext(ShopContext)
    const cartItemCount=cartItems[id];
  return (
    <div className='product'>
    <img src={productImage} alt={productName}/>
    <div className='description'>
    <p><b>{productName}</b></p>
        <p>${price}</p>  
         </div>
         <button className='addToCartBttn'onClick={()=>addToCart(id)}>
          Add ToCart{cartItemCount }
         </button>
    </div>
  )
}

export default Products
