import React from "react";
import { food_list } from "../assets/assets";
import { assets } from "../assets/assets";
import { useState } from "react";

function Store() {
  const [products, setProducts] = useState(
    food_list.map((item) => ({ ...item, count: 0 }))
  );
  const [cart, setCart] = useState({});
  const increment = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].count += 1;
    setProducts(updatedProducts);
  };

  const decrement = (index) => {
    const updatedProducts = [...products];
    if (updatedProducts[index].count > 0) {
      updatedProducts[index].count -= 1;
    }
    setProducts(updatedProducts);
  };

  return (
    <div className="w-[95vw]  m-auto lg:w-[90vw]">
      <div>
        <h1 className="text-center text-red-500 text-5xl font-bold font-bebas tracking-wider">
          Top Dishes
        </h1>

        <hr className="my-10 border-2 border-slate-400 w-[90%] m-auto " />
      </div>

      <div className="w-[95vw]  m-auto lg:w-[90vw] food-list  grid gap-y-8  grid-cols-[repeat(auto-fill,minmax(250px,1fr))]    place-items-center gap-4">
        {products.map((item, index) => (
          <div key={item._id} className="w-[260px] shadow-lg rounded-xl">
            <div className="food-img relative  ">
              <img
                src={item.image}
                alt=""
                className="rounded-tl-xl rounded-tr-xl"
              />
              {item.count == 0 ? (
                <img
                  src={assets.add_icon_white}
                  onClick={() => increment(index)}
                  alt="Add"
                  className="absolute rounded-full right-2 bottom-2 transition-all duration-[1500ms] ease-linear "
                />
              ) : (
                <div className="flex items-center gap-2 bg-white rounded-full absolute right-2 bottom-2 p-[5px]">
                  <img
                    src={assets.remove_icon_red}
                    onClick={() => decrement(index)}
                    alt="Remove"
                  />
                  <p className="text-md">{item.count}</p>
                  <img
                    src={assets.add_icon_green}
                    onClick={() => increment(index)}
                    alt="Add"
                  />
                </div>
              )}
            </div>

            <div className="food-rating h-[60px] flex justify-between items-center w-full p-[1em]">
              <h1 className="font-bold text-2xl w-[70%] font-custom">
                {item.name}
              </h1>
              <img
                src={assets.rating_starts}
                alt=""
                className="w-[30%] h-[20px]"
              />
            </div>

            <div className="w-full p-[1em]">
              <p className="text-lg font-medium text-slate-500 font-custom">
                {item.description}
              </p>
              <p className="text-lg font-medium mt-[5px] text-[#f07a45] font-custom">
                ${item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Store;
