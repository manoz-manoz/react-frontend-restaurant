import React from 'react'
import Navbar from './Components/Navbar'
import Home  from './Components/pages/Home'
import About from './Components/pages/About'
import Contact from './Components/pages/Contact'
import { Route,Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Menu from './Components/pages/Menu'
import Scrool from './Components/Scrool'
import top from './assets/top.png'
import { FaArrowUpLong } from "react-icons/fa6";


const App = () => {
  window.addEventListener("scroll", () => {
    const topBtn = document.getElementById("top-btn");
  
    if (window.scrollY > window.innerHeight) {
      topBtn.style.display = "block"; 
    } else {
      topBtn.style.display = "none"; 
    }
  });
  

  
  return (
    <div className=''>
   
      <Navbar />
      <Scrool />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu /> } />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div className='h-[100px]'></div>
      <Footer />
      <div id="top-btn" className=' hidden fixed bottom-[50px] right-[40px] z-10   rounded-full border-4  border-red-500'>
      <button 
  className='bg-white rounded-full p-[15px] text-2xl hover:text-red-500' 
  onClick={() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }}
>

        <FaArrowUpLong />
        </button>
      </div>
    
     
     
    </div>
  )
}

export default App

