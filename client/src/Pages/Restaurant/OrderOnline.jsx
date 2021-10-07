import React from "react";

// components
import FloatMenuBtn from "../../components/restaurant/Order-Online/FloatMenuBtn";
import MenuListContainer from "../../components/restaurant/Order-Online/MenuListContainer";
import FoodList from "../../components/restaurant/Order-Online/FoodList";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

const OrderOnline = () => {
  return (
    <>
      <div className="w-full h-screen flex">
        <aside className="hidden md:flex flex-col gap-3 border-r lg:overflow-hidden overflow-y-scroll border-gray-200 h-screen w-1/4">
          <MenuListContainer />
          <MenuListContainer />
        </aside>
        <div className="w-full  px-3 md:w-3/4">
          <div className="pl-3 mb-4">
            <h2 className="text-xl font-semibold">Order Online</h2>
            <h4 className="flex items-center gap-2 font-light text-gray-500">
              <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
            </h4>
          </div>
          <section className="flex  h-screen overflow-y-scroll flex-col gap-3 md:gap-5">
           
          </section>
        </div>
      </div>
      <FloatMenuBtn />
    </>
  );
};

export default OrderOnline;