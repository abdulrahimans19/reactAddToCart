import React, { useContext } from 'react'
import { ShopContext } from '../../context/shopContext';

export const CartItem=(props)=> {
    const{id,productName,price,productImage}=props.data;
    const{cartItems,addToCart,removeCart,updateCart}=useContext(ShopContext)

  return (
    <div className='CartItem'>
      <img src={productImage} alt={productName}/>
      <div className='description'>
        <p>
            <b>{productName}</b>
        </p>
        <p>Price:${price}</p>
        <div className='countHandler'>
            <button onClick={()=>removeCart(id)}>-</button>
            <input value={cartItems[id]} onChange={
                (e)=>updateCart(Number(e.target.value),id)
            }/>
            <button onClick={()=>addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem