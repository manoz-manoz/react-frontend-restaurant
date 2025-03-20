import React, { useState } from 'react'
import assets from '..//assets/assets'
import { menu_list } from '..//assets/assets';
import { Link } from 'react-router-dom';


function Explore() {

  let [filter,setfilter]=useState("All");
 

  return (
    <div className='flex flex-col gap-8 w-[95vw] m-auto lg:w-[90vw]' id="explore">
        <div>
        <h1 className='text-center text-red-500 text-5xl font-bold font-bebas tracking-wider'>Explore Our Menu</h1>
        <hr className='my-10 border-2 border-slate-400 w-[90%] m-auto' />
      <br />
      <p className='text-xl '>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your <br />

      cravings and elevate your dining experience, one delicious meal at a time.</p>
      </div>
      <div className="menu-items grid grid-cols-2  gap-y-8  place-items-center justify-between sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8" >
  {menu_list.map((item, index) => {
    return (
      <div href='#explore' key={index} className='menu-item'> <Link to="menu">
        <img src={item.menu_image} alt={item.menu_name} title={item.menu_name} className="menu-image rounded-full" onClick={(e)=>{setfilter(filter=e.target.title)
          console.log(filter)
        }} />
       </Link>
        <h1 className='text-center text-lg font-medium mt-[15px]  '>{item.menu_name}</h1>
      </div>
    );
  })}
</div>


      </div>
    


  )
}

export default Explore
