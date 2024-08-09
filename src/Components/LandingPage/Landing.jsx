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
  console.log("userData",userData.displayName)

  const handleLogin = () => {
    if (loggedIn) {
      navigate("/menu");
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    setLoggedIn(localStorage.getItem("user"));
  }, []);

  console.log(loggedIn)

  return (
    <>
      <div className="bg-black relative h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('path_to_your_image.jpg')" }}>
        <div className="overlay absolute inset-0 bg-black opacity-50"></div>
        <div className="content relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">Experience the Authentic Flavors of India</h1>
          <p className="text-xl sm:text-2xl mb-8">Discover a World of Exquisite Indian Dishes, Crafted with Love</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-10 w-full max-w-3xl">
            <Link to={"/reservation"}><button className="btn bg-purple-600 text-white py-2 px-4 rounded-lg w-full transition duration-300 hover:bg-purple-800">Reserve Your Table Today</button></Link>
            {(loggedIn) ? <button onClick={handleLogin} className="btn bg-purple-600 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-purple-800">Explore Our Menu</button>: navigate('/login')}
           <Link to={'/onlineOrder'}> <button  className="btn bg-purple-600 text-white w-full py-2 px-4 rounded-lg transition duration-300 hover:bg-purple-800">Order Online for Home Delivery</button></Link>
          </div>
        </div>
      </div>
      <div className="absolute right-5 bottom-10 rounded-2xl z-30">
      <AIDialogueBox/>
      </div>
      <>

      </>
    </>
  );
}

export default Landing;
