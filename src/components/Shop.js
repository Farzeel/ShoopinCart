import React from 'react'
import { PRODUCT } from '../products'
import ShowProduct from './ShowProduct'
const Shop = () => {
  return (
    <>
    <div className=' mt-6'><h1 className=' text-center text-4xl font-medium'> SHOPPING CART</h1></div>
    <div className='grid grid-cols-3 gap-4 mt-11'>
      {PRODUCT.map(data=>{
      return <div key={data.id} className=' mt-4  '><ShowProduct data={data}/></div> 
      })}
    </div>
    </>
  )
}

export default Shop
