import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactDOM from 'react-dom';
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from 'react-markdown';
import AIDialogueBox from "../AI/AI";
import { useDispatch, useSelector } from "react-redux";
function Landing() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const userData = useSelector(state=>state.User);
  console.log("userData",userData?.displayName)

 

  useEffect(() => {
    setLoggedIn(localStorage.getItem("user"));
  }, []);
 
  console.log(loggedIn)

  return (
    <>
      <div className="bg-black relative h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('path_to_your_image.jpg')" }}>
        <div className="overlay absolute inset-0 bg-black opacity-50"></div>
        <div className="content relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4 md:p-8 lg:p-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">Experience the Authentic Flavors of India</h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto">Discover a World of Exquisite Indian Dishes, Crafted with Love</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 w-full max-w-6xl px-4 md:px-8">
            <Link to={"/reservation"} className="w-full">
              <button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white py-4 px-8 rounded-xl w-full text-sm md:text-base transition-all duration-300 hover:from-orange-500 hover:to-orange-700 shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-1 font-semibold tracking-wide">Reserve Your Table Today</button>
            </Link>
            
              <Link to={'/Menu'} className="w-full">
              <button  className="bg-gradient-to-r from-orange-400 to-orange-600 text-white py-4 px-8 rounded-xl w-full text-sm md:text-base transition-all duration-300 hover:from-orange-500 hover:to-orange-700 shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-1 font-semibold tracking-wide">Explore Our Menu</button>
              </Link>
              
            <Link to={'/onlineOrder'} className="w-full">
              <button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white py-4 px-8 rounded-xl w-full text-sm md:text-base transition-all duration-300 hover:from-orange-500 hover:to-orange-700 shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-1 font-semibold tracking-wide">Order Online for Home Delivery</button>
            </Link>
          </div>        </div>      </div>
      <div className="fixed right-3 md:right-5 bottom-6 md:bottom-10 rounded-2xl z-30">
        <AIDialogueBox/>
      </div>      <>

      </>
    </>
  );
}

export default Landing;
