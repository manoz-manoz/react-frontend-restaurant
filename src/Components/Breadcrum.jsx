import React from 'react'
import delivery from "../assets/delivery.jpg";

function Breadcrum(props) {
  return (
    <div className='mb-5 bg-[url("/src/assets/breadcrumb.jpg")] bg-cover  bg-no-repeat  flex justify-center items-center py-[100px]'>
        <h1 className='text-center text-red-500 text-8xl font-bold font-custom '>{props.page}</h1>

      
    </div>
  )
}

export default Breadcrum
