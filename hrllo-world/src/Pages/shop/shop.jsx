import './shop.css'
import React from 'react'
import PRODUCTS from '../../product'
import Products from './products'

function Shop() {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>My Shop</h1>
        </div>
        <div className='products'>
            {PRODUCTS.map((product)=>{
              return <Products key={product.id} data={product}/>
            })}
        </div>
    </div>
  )
}

export default Shop
