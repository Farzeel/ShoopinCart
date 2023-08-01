import React,{ useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { PRODUCT } from '../products'
import CartItem from './CartItem'
import { shop_context } from './shopContext'




const Cart = () => {
    const navigate = useNavigate()
    const{catrtitems,TotalAmount} = useContext(shop_context)
    const finalamount = TotalAmount()

  return (
    <div>
      <div>
        <h1 className=' text-center text-4xl font-medium mt-10'>Your Cart Items</h1>
      </div>
      <div className=' flex flex-col justify-center items-center mt-[36px]'>
        {PRODUCT.map((prod)=>{
            if(catrtitems[prod.id]!==0){
         return <CartItem data ={prod}/>
            }
        })}
      </div>
      
      
      {finalamount>0 &&<div  >
        
        <p className=' text-center'> ${finalamount}</p>
        <div  className=' mt-4 flex items-center justify-center gap-2'>
            <button onClick={()=>navigate("/")} className=' text-sm p-1 w-29 rounded-[21px] border-2 border-black bg-black text-white hover:bg-white hover:text-black'>Continoue Shooping</button>
            <button className=' text-sm p-1 rounded-[21px] w-32 border-2 border-black bg-black text-white hover:bg-white hover:text-black'>Checkout</button>
        </div>
      </div>}
    </div>
    
  )
}

export default Cart
