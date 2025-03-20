import React from 'react'
import foodie from '../assets/foodie.png'
import twitter from "../assets/twitter_icon.png"
import fb from "../assets/facebook_icon.png"



function Footer() {
  return (
    <section
    className="footer bg-black p-[10px] pt-[40px] pb-[40px] grid grid-cols-1  gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:justify-items-center lg:pl-[120px] lg:pr-[80px]  ">
    <div className="f1 flex flex-col gap-4">
        <div>

          <img src={foodie} alt=""  className="w-[200px]"/>
        </div>
        
    </div>
    <div className="f2 flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-white">Support</h1>
        <a href="" className="text-md font-medium text-white hover:text-red-500">FAQ's</a>
        <a href="" className="text-md font-medium text-white hover:text-red-500">Privacy Policy</a>
        <a href="" className="text-md font-medium text-white hover:text-red-500">Terms & Conditions</a>
        <a href="" className="text-md font-medium text-white hover:text-red-500">Contact</a>
    </div>
    <div className="f3 flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-white hover:text-red-500">Phone</h1>
        <div>
            <a href="" className="text-md font-medium  hover:text-red-500"><i className="fa-solid fa-phone"></i></a>
            <a href="" className="text-md font-medium  text-white hover:text-red-500">+91 123456789</a>
        </div>
        <h1 className="text-2xl font-bold text-white">E-Mail</h1>
        <div>
            <a href="" className="text-md font-medium  text-white hover:text-red-500"><i className="fa-solid fa-envelope"> </i></a>
            <a href="" className="text-md font-medium  text-white hover:text-red-500"> burger@.co.in</a>
        </div>
    </div>
    <div className="f4 flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-white ">Address</h1>
        <div>
            
            <a href="" className="text-md font-medium text-white hover:text-red-500">Guntur</a>
        </div>

        <h1 className="text-2xl font-bold text-white">Follow Us</h1>
        <div className="flex gap-4">
            <a href="" className="text-md font-medium text-white hover:text-red-500"><img src={twitter} alt="" className='w-[30px]' /></a>
            <a href="" className="text-md font-medium text-white hover:text-red-500"><img src={fb} alt=""  className='w-[30px]'/></a>
           

        </div>

    </div>
</section>



  )
}

export default Footer
