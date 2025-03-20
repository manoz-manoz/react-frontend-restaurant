import React from 'react'
import about from "..//assets/about.avif"
import abt from "..//assets/abt.png"
import { Link } from 'react-router-dom'

function Aboutus() {
  return (
    <section className="flex flex-col justify-center p-[10px] gap-4 items-center md:flex lg:flex-row md:justify-center">

        <div className="">
            <img src={abt} alt="" />
        </div>

        <div className="flex flex-col gap-4 lg:w-[50%] md:pl-[50px] md:pr-[50px] lg:p-[10px] lg:gap-8">
            <h1 className="text-4xl font-bold font-custom">Bringing the Best Tastes Together, All in One Place.</h1>

            <p className="text-xl font-custom font-normal">Experience a wide variety of delicious food, crafted with care for your enjoyment.
Each dish is made fresh, using healthy and quality ingredients.
Our menu is full of bold, mouthwatering flavors you'll love.
Whether you're craving something light or indulgent, we’ve got you covered.
There’s something tasty here for everyone to enjoy.</p>
            
            <Link  to="menu"
                className="text-xl text-white font-custom font-medium  bg-red-500 text-center rounded-lg p-[8px] w-[130px]">Shop
                Now
                </Link>
        </div>



    </section>
  )
}


export default Aboutus
