import React from 'react'
import Aboutus from '../Aboutus'
import Reviews from '../Reviews'
import Minuteschallenge from '../Minuteschallenge'
import Ourchefs from '../Ourchefs'
import Breadcrum from '../Breadcrum'


function About() {
  return (
    <div>
      <Breadcrum page="About"/>
      <div className='h-[100px]'></div>
      <Aboutus />
      <div className='h-[100px]'></div>
      <Minuteschallenge />
      <div className='h-[100px]'></div>
      <Ourchefs />
      <div className='h-[100px]'></div>
      <Reviews />
      <div className='h-[100px]'></div>
    </div>
  )
}

export default About
