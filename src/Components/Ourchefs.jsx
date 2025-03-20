import React from 'react'
import chef1 from"../assets/chef1.jpg";
import chef2 from"../assets/chef2.jpg";
import chef3 from"../assets/chef3.jpg";
function Ourchefs() {
  return (
    <div className=' w-[95vw]  m-auto lg:w-[90vw]'>
        <div>
    <h1 className='text-center text-red-500 text-6xl font-bold font-bebas tracking-wider'>Our Experts</h1>
    <hr className='my-10 border-2 border-slate-400 w-[90%] m-auto' />
    </div>
    <div className=' w-[95vw]  m-auto lg:w-[90vw] grid grid-cols-1  place-items-center sm:grid-cols-2 md:grid-cols-3  '>
      <div className='p-[20px] flex flex-col gap-4'>
        <img src={chef1} alt="hi" className='rounded-xl' />
        <p className='text-center text-md font-medium '>Head Chef</p>
        <h1 className='text-center text-2xl font-medium'>Alexander</h1>
        
      </div>



      <div className='p-[20px] flex flex-col gap-4'>
        <img src={chef2} alt="hi" className='rounded-xl' />
        <p className='text-center text-md font-medium '>Table Manager</p>
        <h1 className='text-center text-2xl font-medium'>Lilly</h1>
        
      </div>



      <div className='p-[20px] flex flex-col gap-4'>
        <img src={chef3} alt="hi" className='rounded-xl' />
        <p className='text-center text-md font-medium '>MasterChef</p>
        <h1 className='text-center text-2xl font-medium'>Henry</h1>
        
      </div>
     
     
    </div>

    </div>
  )
}

export default Ourchefs
