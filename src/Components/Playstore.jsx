import React from 'react'
import playstore from '../assets/play_store.png'
import appstore from '../assets/app_store.png'

function Playstore() {
  return (
    <div className='w-[95vw]  m-auto lg:w-[90vw]'>
      <h1 className='text-center text-red-500 text-5xl font-bold font-bebas tracking-wider'>For Better Experience Download our App</h1>
      <hr className='my-10 border-2 border-slate-400 w-[90%] m-auto' />
      <div className='flex flex-col justify-center items-center gap-4 sm:flex-row sm:gap-8'>
        <img src={playstore} alt="" className='w-[250px]'/>
        <img src={appstore} alt="" className='w-[250px]'/>
      </div>
    </div>
  )
}

export default Playstore
