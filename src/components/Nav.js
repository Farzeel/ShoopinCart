import React from 'react'
import {BsCart4} from "react-icons/bs"
import {FcSearch} from "react-icons/fc"
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className=' flex items-center justify-between border-b-2 border-yellow-300 h-[60px] bg-[#0000008f]  text-white'>
      <div className=' md:ml-5'>
        <Link className=' text-lg hover:text-black' to={"/"}>Shop</Link>
      </div>
      <div className=' relative flex items-cenetr h-[29px] md:w-[342px] '>
       <div className=' flex items-center justify-center'><FcSearch size={25}  className=' absolute left-1 '/></div> 
        <input className='outline-none rounded-md  text-black w-full  flex items-center text-lg pl-8' placeholder='Search' type="text" />
        </div>
      <div>
       <Link to={"/cart"}> <button className='  p-1 gap-1 hover:text-black md:mr-8 w-20 flex items-center justify-center '><BsCart4 size={20} />Cart</button></Link>
      </div>
    </div>
  )
}

export default Nav
