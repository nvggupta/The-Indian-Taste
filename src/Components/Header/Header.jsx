import { MdLocationPin } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../FireBase/firebase";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState(
    localStorage.getItem("user") || false
  );
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const humBurgerRef = useRef(null);

  const handleHumburgerMenu = () => {
    humBurgerRef.current.style.display = "none";
  };

  const openHumbburgerMenu = () => {
    humBurgerRef.current.style.display = "block";
  };
  const handleLogOut = ()=>{
   localStorage.removeItem('user');
    navigate('/');
  }
  return (
    <>
      <div className="h-20">
        <div className="fixed top-0 z-50 w-full bg-gray-800 pb-4 pt-4">
          <div className="flex justify-between items-center px-4">
            <Link to={"/"}>
              <div className="flex flex-col items-center text-[25px] md:text-3xl">
                <h3 className="text-center flex gap-2">
                  <span className="text-orange-600 "> 𝕋𝕙𝕖</span>
                  <span className="text-white"> 𝕀𝕟𝕕𝕚𝕒𝕟</span>
                  <span className="text-green-600"> 𝕋𝕒𝕤𝕥𝕖</span>
                </h3>
                <span className="text-white text-sm sm:text-base">
                  𝑭𝒐𝒐𝒅 𝑪𝒐𝒖𝒓𝒕 𝑶𝒏 𝑨𝒏 𝑨𝒑𝒑
                </span>
              </div>
            </Link>
            <div className="flex items-center text-white gap-5">
              <div className="hidden sm:flex sm:w-fit py-2 items-center">
                <div className="flex items-center">
                  <MdLocationPin />
                  <h4>Delhi, New Delhi</h4>
                  <MdKeyboardArrowDown />
                </div>
                <p className="text-xs">Connaught Place Minto Road, New Delhi</p>
              </div>
              <div className="hidden sm:flex max-w-xl text-right items-center">
                {isLoggedIn ? (
                  <>
                    <p className="mr-4 w-fit px-2 flex gap-5 ">
                     <span>{profileData && profileData.slice(0, 2).toUpperCase()}</span> 
                      <span className="cursor-pointer mr-4" onClick={handleLogOut}>Logout</span>
                    </p>
                  </>
                ) : (
                  <span className="w-[500px] mr-4">Sign-In</span>
                )}
                <Link to={"/checkout"}>
                  <FaCartArrowDown className="text-2xl" />
                </Link>
              </div>
              <IoMenu
                className="text-2xl cursor-pointer sm:hidden"
                onClick={openHumbburgerMenu}
              />
            </div>
          </div>
          <div
            className="absolute right-2 bg-slate-100 top-[100px] w-full sm:w-1/5 hidden p-5"
            ref={humBurgerRef}
          >
            <div className="flex flex-col gap-5 h-full w-full">
              <RxCross2
                onClick={handleHumburgerMenu}
                className="text-2xl self-end cursor-pointer"
              />
              <div className="flex items-center gap-5 text-xl cursor-pointer hover:bg-gray-200 p-2 rounded-md">
                <IoIosLogOut />
                <p>Log Out</p>
              </div>
              <div className="flex flex-col gap-5 text-xl">
                <div className="flex items-center gap-5 cursor-pointer hover:bg-gray-200 p-2 rounded-md">
                  <MdLocationPin />
                  <p>Location</p>
                </div>
                <div className="flex items-center gap-5 cursor-pointer hover:bg-gray-200 p-2 rounded-md">
                  <CiSearch />
                  <p>Search</p>
                </div>
                <div className="flex items-center gap-5 cursor-pointer hover:bg-gray-200 p-2 rounded-md">
                  <FaCartArrowDown />
                  <p>Cart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
