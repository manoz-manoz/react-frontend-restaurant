import React from 'react'
import Hersection from '../Hersection'
import Explore from '../Explore'
import Store from '../Store'
import Playstore from '../Playstore'
import Reviews from '../Reviews'
import Footer from '../Footer'



function Home() {
  return (
    <div>
      <Hersection />

      <div className='h-[100px]'></div>
      <Explore />
      <div className='h-[100px]'></div>
      <Store />
      
      <div className='h-[100px]'></div>
      <Reviews />
      <div className='h-[100px]'></div>

      
    </div>
  )
}

export default Home
