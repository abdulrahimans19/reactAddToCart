import "./cart.css"
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from '../../context/shopContext'
import PRODUCTS from '../../product'
import { CartItem } from './cartItem'

 const Cart=()=> {
  const{cartItems,getTotal,checkout}=useContext(ShopContext)
 const totalAmount=getTotal()

 const navigate=useNavigate()


  return (
    <div className='cart'>  
      <div>
        <h1>Cart Items</h1>
      </div>
      <div className='cart'>
        {PRODUCTS.map((product)=>{
          if(cartItems[product.id]!==0){
          return <CartItem key={product.id} data={product}/>
          }else{
            return null
          }
        })}
      </div>

{totalAmount > 0 ? (
  <div className='checkout'>
    <p>Subtotal:${totalAmount}</p>
    <button onClick={()=>navigate("/")}>Continue Shopping</button>
    <button onClick={()=>{checkout(); navigate("/checkout")}}>{""}Checkout{""}</button>

  </div>
):(
  <h1> Your Shopping Cart Is Empty</h1>
)};
    </div>
  );
};

export default Cart