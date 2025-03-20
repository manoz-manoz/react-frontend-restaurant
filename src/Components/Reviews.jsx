import React from 'react';
import review1 from '../assets/review-1.jpg'
import review2 from '../assets/review-3.jpg'
import review3 from '../assets/review-4.jpg'
function Reviews() {
  return (
    <div className="reviews w-[95vw]  m-auto lg:w-[90vw]">  
    <div>
    <h1 className='text-center text-red-500 text-6xl font-bold font-bebas tracking-wider'>Our Customer Reviews</h1>
    <hr className='my-10 border-2 border-slate-400 w-[90%] m-auto' />
    </div>
    <div className="customers grid grid-cols-1 gap-[30px] md:grid-cols-2 justify-items-center md:w-[95%] lg:grid-cols-3">

      {/** First Review */}
      <div className="customer border-se-red flex flex-col gap-2 w-[350px] shadow-2xl p-[15px] rounded-xl lg:w-[300px] xl:w-[400px]">
        <p className="text-xl font-custom">
          The atmosphere was cozy and the staff was friendly. I had the steak, and it was cooked perfectly. Overall, a wonderful dining experience that I’ll definitely repeat!
        </p>
        <div className="c-details flex justify-between items-center">
          <div className="flex gap-4 justify-center items-center">
            <img src={review1} alt="" className="w-[50px] h-[55px] rounded-[50%]" />
            <h1 className="text-lg font-bold">John Doe</h1>
          </div>
          <div className="text-8xl font-bold text-red-500">❞</div>
        </div>
      </div>

      {/** Second Review */}
      <div className="customer flex flex-col gap-2 w-[350px] shadow-2xl p-[15px] rounded-xl lg:w-[300px] xl:w-[400px]">
        <p className="text-xl font-custom">
          It was a great experience for me. The food was flavorful, but the service was a bit slow. The ambiance was nice, though it got a little noisy as the restaurant filled up. Still, a solid choice for dinner.
        </p>
        <div className="c-details flex justify-between items-center">
          <div className="flex gap-4 justify-center items-center">
            <img src={review2} alt="" className="w-[50px] h-[55px] rounded-[50%]" />
            <h1 className="text-lg font-bold">Roy</h1>
          </div>
          <div className="text-8xl font-bold text-red-500">❞</div>
        </div>
      </div>

      {/** Third Review */}
      <div className="customer flex flex-col gap-2 w-[350px] shadow-2xl p-[15px] rounded-xl lg:w-[300px] xl:w-[400px]">
        <p className="text-xl font-custom">
          Delicious food and great presentation, but I was disappointed with the long wait time. The staff was attentive, and the dessert was amazing. Worth visiting again, though!
        </p>
        <div className="c-details flex justify-between items-center">
          <div className="flex gap-4 justify-center items-center">
            <img src={review3} alt="" className="w-[50px] h-[55px] rounded-[50%]" />
            <h1 className="text-lg font-bold">Sarah</h1>
          </div>
          <div className="text-8xl font-bold text-red-500 ">❞</div>
        </div>
      </div>

    </div>



    </div>
  );
}

export default Reviews;
