import React ,{ useContext }from 'react'
import { shop_context } from './shopContext'

const CartItem = (props) => {
    const {id,productName,productImage,price}=props.data
    const{AddToCart,catrtitems,RemoveItem,updateCart} = useContext(shop_context)
  return (
    <div className=' w-[562px] h-[244px] mb-7 bg-white shadow-lg  flex items-center justify-start rounded-[53px]'>
      <img className=' w-[215px]' src={productImage} alt="" />
     <div>
        <p className=' font-medium text-lg'><b>{productName}</b></p>
        <p>${price}</p>
        <div className=' '>
            <button onClick={()=>RemoveItem(id) } className=' font-medium'>-</button>
            <input onChange={(e)=>updateCart(Number(e.target.value),id)} value={catrtitems[id]} className=' ml-1 text-xs p-1 border w-6 h-4' />
            <button onClick={()=>AddToCart(id)} className='font-medium ml-1'>+</button>
        </div>
        </div> 
    </div>
  )
}

export default CartItem
