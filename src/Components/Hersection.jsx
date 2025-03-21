import React from 'react'
import assets from '..//assets/assets'
import { Link } from 'react-router-dom'

function Hersection() {
  return (
    <div className={`w-[95vw] m-auto pb-[20px] lg:w-[90vw] bg-[url("/src/assets/header_img.png")]  bg-cover bg-no-repeat  flex flex-col justify-end  m-auto items-center h-[80vh] p-[10px] rounded-ee-[25px] rounded-se-[25px] md:pl-[3em] md:pb-[6em] lg:pl-[4em] lg:pb-[7em] `}> 
     <div className='self-start  pl-[1rem] pb- lg:w-[50%] '>
     <h1 className='text-6xl font-bold text-white leading-snug font-bebas tracking-wider'>Order your favourite
      <br /> food here</h1>
     <p className='text-white text-2xl font-semibold mt-[1em]' > Enjoy a diverse menu crafted with fresh ingredients and culinary mastery one delicious bite at a time</p>
     <button className='px-[2.5rem] py-[0.8rem] bg-white text-lg font-semibold mt-[2em] duration-[0.5s] rounded-full hover:text-white hover:bg-black  '> <Link to="/menu">View Menu</Link></button>

     </div>

     

      
    </div>
  )
}

export default Hersection
