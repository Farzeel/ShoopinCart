import React, { useContext } from 'react'
import {shop_context} from "./shopContext"

const ShowProduct = (props) => {
     const {id,productName,productImage,price}=props.data
     const{AddToCart,catrtitems} = useContext(shop_context)
    const cartitemAmount = catrtitems[id]
  return (
    <>
    <div className='  flex flex-col justify-center items-center  '>
        <div className=' '>
            <img className=' w-[250px] ' src={productImage} alt="" />
            </div>
            <div className=' mt-6 flex flex-col justify-center items-center'>
        <p className=' text-sm md:text-lg'><b>{productName} </b></p>
        <p className='text-sm md:text-lg mt-2'>${price}</p>
        <button onClick={()=>AddToCart(id)} className=' mt-2  text-sm p-2 border-2 w-[113px] rounded-[21px] hover:bg-black hover:text-white border-black '>Add To Cart {cartitemAmount>0 && <>({cartitemAmount})</>}</button>
        </div>
       
        </div>
       
        </>
  )
}

export default ShowProduct
