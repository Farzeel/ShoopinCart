import { createContext,useState } from 'react';
import { PRODUCT } from '../products';

export const shop_context = createContext(null)
 const getDefaultCart = ()=>{
    let cart = {}
    for(let i=1 ; i<PRODUCT.length+1; i++){
        cart[i]=0
    }
    return cart
 }

export const ShopContextProvider = (props)=>{
const [catrtitems, setcatrtitems] = useState(getDefaultCart());
const AddToCart = (itemId)=>{
setcatrtitems((prev)=>({...prev ,  [itemId] : prev[itemId]+1}))
}
const RemoveItem = (itemId)=>{
setcatrtitems((prev)=>({...prev ,  [itemId] : prev[itemId]-1}))
}
const updateCart =(newamount,itemId)=>{
    setcatrtitems((prev)=>({...prev,[itemId]:newamount}))
}
const TotalAmount = ()=>{
    let total = 0
    for (const item in catrtitems){
        if(catrtitems[item]>0){
            let itemInfo = PRODUCT.find((prod)=>prod.id===Number(item))
            
                total += catrtitems[item] * itemInfo.price;
              
            
        }
    }
    return total
}
const contextValue = {RemoveItem,AddToCart,catrtitems,updateCart,TotalAmount}
console.log(catrtitems)
return <shop_context.Provider value={contextValue}>{props.children}</shop_context.Provider>
}