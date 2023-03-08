import React, { createContext, useState } from 'react';
import PRODUCTS from '../product';
export const ShopContext=createContext(null);

const getDefaultCart=()=>{
    let cart={};
    for(let i=0;i<PRODUCTS.length +1;i++){
        cart[i]=0;
    }
    return cart;
};

export const ShopContextProvider=(props)=> {
    const[cartItems,setCartItems]=useState( getDefaultCart());
   const getTotal=()=>{
    let totalAmount=0;
    for(const item in cartItems){
        if(cartItems[item]>0){
            let iteminfo=PRODUCTS.find((product)=>product.id===Number(item))
            totalAmount+=cartItems[item]*iteminfo.price
        }
    }
    return totalAmount
   }
   
    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    }
    const removeCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const updateCart=(newAmount,itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:newAmount}))
    }
    const checkout=()=>{
        setCartItems(getDefaultCart())
    }
    const contextValue=
    {cartItems,addToCart,removeCart,updateCart,checkout,getTotal}
  return (
  <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}

