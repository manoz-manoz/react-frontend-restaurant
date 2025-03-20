import React from 'react'
import  Form  from '../CtForm';
import CtForm from '../CtForm';
import Breadcrum from '../Breadcrum';


function Contact() {
  return (
    <div>

      <Breadcrum page="Contact Us"/>
     
    
      <div>
        
        
        <h1 className='text-center text-red-500 text-6xl font-bold font-bebas tracking-wider'>Get in Touch</h1>
        <hr className='my-10 border-2 border-slate-400 w-[90%] m-auto' />
        </div>
        
      <CtForm />
    </div>
  )
}

export default Contact
