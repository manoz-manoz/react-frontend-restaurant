import React from 'react'
import assets from '..//assets/assets'
import foodie from '../assets/foodie.png'
import menu from '..//assets/menu.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);
  
 
  function showmenu()
  {
   setOpen(!open)
    
  }
  return (
    <div className='h-[100px] navbar flex  justify-evenly items-center  bg-white w-full sticky top-0 z-10 '>
      <div className="logo w-[40%] md:w-[20%] xl:[10%]" >
      <img src={foodie} alt=""  className='h-[150px] '/>
      </div>

      <div id="nav"    className={
    open
      ? "absolute right-[1rem] top-[5em] flex flex-col gap-4 rounded-lg bg-white p-[10px] md:static md:flex-row md:gap-8 md:flex"
      : "hidden md:static md:flex md:flex-row md:gap-8 flex-col gap-2 "
  }
>
        <Link to="" className='text-medium text-xl hover:text-red-500'>Home</Link>
        <Link to="about" className='text-medium text-xl  hover:text-red-500'>About</Link>
        <Link to="menu" className='text-medium text-xl hover:text-red-500'>Menu</Link>      
        <Link to="contact" className='text-medium text-xl hover:text-red-500'>Contact</Link>
        
      </div>

      <div className="btn w-[50%] flex  justify-around  items-center md:w-[22%] lg:w-[20%] xl:w-[10%]">
        <img src={assets.search_icon} alt=""  className='w-[20px] h-[20px]'/>
        <img src={assets.bag_icon} alt="" className='w-[20px] h-[20px]' />
        <button className='px-[10px] py-[5px] md:px-[30px] md:py-[5px] border-2 border-[#ff4c24] rounded-full hover:bg-red-400  hover:text-white duration-[0.4s]'>Sign In</button>
        <img src={!open ? menu : assets.cross_icon} alt="" className=' h-[20px] w-[20px] md:hidden' onClick={showmenu} />

      </div>
  
    </div>
  )
}

export default Navbar
