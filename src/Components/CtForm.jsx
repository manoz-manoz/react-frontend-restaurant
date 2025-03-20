import React from "react";

function CtForm() {
  return (
   
  
  <div className="flex flex-col justify-evenly items-center gap-6 w-[95vw] m-auto lg:w-[90vw] lg:flex-row">
      
      {/* Time Section */}
      <div className="flex flex-col gap-3 text -center lg:text-left">
        <h1 className="text-2xl font-bold text-red-500 text-center">Timings</h1>
        <div className="text-center flex gap-6"><h1 className="text-xl font-bold w-[100px]">Monday</h1> <h1 className="text-lg font-medium ">11:00 AM - 12:00 PM</h1></div>
        <div className="text-center flex gap-6"><h1 className="text-xl font-bold w-[100px]">Tuesday</h1> <h1 className="text-lg font-medium">11:00 AM - 12:00 PM</h1></div>
        <div className="text-center flex gap-6"><h1 className="text-xl font-bold w-[100px]">Wednesday</h1> <h1 className="text-lg font-medium">11:00 AM - 12:00 PM</h1></div>
        <div className="text-center flex gap-6"><h1 className="text-xl font-bold w-[100px]">Thursday</h1> <h1 className="text-lg font-medium">11:00 AM - 12:00 PM</h1></div>
        <div className="text-center flex gap-6"><h1 className="text-xl font-bold w-[100px]">Friday</h1> <h1 className="text-lg font-medium">11:00 AM - 12:00 PM</h1></div>
        <div className="text-center flex gap-6"><h1 className="text-xl font-bold w-[100px]">Saturday</h1> <h1 className="text-lg font-medium">11:00 AM - 12:00 PM</h1></div>
      </div>




      
  <form
          action=""
          className=" w-[100%] flex flex-col gap-4 justify-center items-center md:w-[700px]"
        >
          <div className="flex flex-col gap-4 justify-center items-center  w-full md:flex-row">
            <input
              type="text"
              name=""
              id=""
              placeholder="Name"
              className="font-custom px-[20px] py-[15px]  rounded-full  border-2 border-red-400 focus:border-red-400  focus:outline-none   w-[80%]    "
            />
            <input
              type="email"
              name=""
              id=""
              placeholder="E Mail"
              className="font-custom px-[20px] py-[15px]  rounded-full  border-2 border-red-400 focus:border-red-400  focus:outline-none w-[80%]"
            />
          </div>
          <div className="flex flex-col gap-4 justify-center items-center  w-full md:flex-row">
            <input
              type="number"
              name=""
              id=""
              placeholder="Phone"
              className="font-custom px-[20px] py-[15px]  rounded-full  border-2 border-red-400 focus:border-red-400  focus:outline-none w-[80%] "
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Subject"
              className="font-custom px-[20px] py-[15px]  rounded-full  border-2 border-red-400 focus:border-red-400  focus:outline-none w-[80%] "
            />
          </div>
          <textarea
            name=""
            id=""
            rows={4}
            placeholder="Message"
            className="font-custom px-[20px] py-[15px] w-[300px] rounded-lg  border-2 border-red-400 focus:border-red-400  focus:outline-none w-[80%] md:w-[700px]"
          ></textarea>
          <button
            type="submit"
            className=" bg-red-400 text-white font-bold py-2 px-[60px] py-[10px] rounded-full md:self-start"
          >
            Submit
          </button>
        </form>     
        </div>
  );
}

export default CtForm;
