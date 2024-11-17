/* eslint-disable react/prop-types */
import MenuCard from "./MenuCard";
import MenuList from "./MenuList";
import Dropdown from "../Dropdown/Dropdown";
import { CgSearch } from "react-icons/cg";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { filterItmes } from "../MenuSlice/MenuSlice";
// import { useEffect, useRef, useState } from "react";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import ReactMarkdown from 'react-markdown';
import AIDialogueBox from "../AI/AI";
function Menu({descShow}) {
  const Food = useSelector((state) => state.Menu[0].foodItems);
  const Menu = useSelector((state) => state.Menu[0].menu_list);
  const dispatch = useDispatch();


  return (
    <div className="flex flex-col items-center gap-10 mt-10 px-4 min-h-screen justify-center max-w-7xl mx-auto">
      <div className="w-full max-w-[800px] overflow-hidden">
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide hideSlider">
          {Menu.map((elem, index) => (
            <div key={index} className="flex-shrink-0 w-1/2 md:w-1/4 snap-start px-2 transition-transform duration-300 hover:scale-105">
              <MenuList
                name={elem.menu_name}
                pics={elem.menu_image}
              />
            </div>
          ))}
        </div>  
        
            </div>    
      <div className="w-full flex flex-col lg:flex-row justify-around items-center gap-6 lg:gap-0 ">
        <div className="flex flex-col w-full lg:w-1/2">
          <h1 className="font-semibold text-2xl">
            What would you like to order
          </h1>
          <div className="flex items-center gap-4 mt-2">
            <input
              type="text"
              className="border border-black w-full text-xl p-2"
              placeholder="Enter Your Dish"
              onChange={(e) => dispatch(filterItmes(e.target.value))}
            />
            <CgSearch className="text-2xl" />
          </div>
        </div>
        <Button
          variant="contained"
          onClick={() => dispatch(filterItmes("reset"))}
        >
          Complete Menu
        </Button>
        <Dropdown />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-10 w-full px-4">
        {Food.map((elem) => (
          <MenuCard
            key={elem._id}
            id={elem._id}
            name={elem.name}
            pics={elem.image}
            price={elem.price}
            quantity={elem.quantity}
            descShow={descShow}
          />
        ))}
      </div>
      <div className="fixed right-5 bottom-10 rounded-2xl z-30 text-white bg-black">
      <AIDialogueBox/>
      </div>
    </div>
  );
}

export default Menu;
