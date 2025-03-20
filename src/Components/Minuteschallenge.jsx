import React from "react";
import delivery from "../assets/delivery-man.png";
import tomato from "../assets/tomato.png";
import chilli from "../assets/chilli.png";
import { Link } from "react-router-dom";

function Minuteschallenge() {
  return (
    <div className=' relative w-[95vw]  m-auto lg:w-[90vw] bg-[url("/src/assets/delivery.jpg")] bg-cover p-[30px] flex flex-col justify-evenly items-center rounded-2xl md:flex-row  '>
      <div >
        <img src={tomato} alt="" className="absolute left-0 bottom-5" />
        <img src={chilli} alt="  " className="absolute right-3 top-4" />
        <p className="text-red-500 font-extrabold text-3xl font-custom text-center">
          crispy, every bite taste
        </p>
        <h1 className="text-6xl text-white font-bebas p-[10px] text-center md:text5xl">30 minutes fast <span className="text-red-500">delivery</span> challage</h1>
      </div>
      <div>
        <img src={delivery} alt="" />

      </div>
        <Link  to="menu" className="px-[2.5rem] py-[0.8rem] bg-white text-lg font-semibold mt-[2em] duration-[0.5s] rounded-full hover:text-white hover:bg-black">Order Now
      </Link>
      <div>
    </div>
        </div>
        );
}

export default Minuteschallenge;
