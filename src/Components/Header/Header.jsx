import { MdLocationPin } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth, db } from "../FireBase/firebase";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../MenuSlice/user";
import { clear } from "toastr";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [profileData, setProfileData] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userData = useSelector((state) => state.User);

  useEffect(() => {
    if (userData.email) {
      setProfileData(userData.email);
    }
  }, [userData]);

  const handleHumburgerMenu = () => {
    setIsMenuOpen(false);
  };

  const openHumbburgerMenu = () => {
    setIsMenuOpen(true);
  };

  const handleLogOut = () => {
    localStorage.removeItem("user");
    dispatch(clearUser());
    navigate("/login");
  };

  const handleSignIn = () => {
    navigate("/login");
  };

  const UserLinks = () => (
    <>
      {userData.email ? (
        <p className="mr-4 w-fit px-2 flex gap-5">
          <span>Welcome {userData.displayName}</span>
          <span className="cursor-pointer mr-4" onClick={handleLogOut}>
            Logout
          </span>
          <Link to={"/checkout"}>
            <FaCartArrowDown className="text-2xl" />
          </Link>
        </p>
      ) : (
        <Link to={"/login"}>
          <span className="cursor-pointer mr-4" onClick={handleSignIn}>
            Sign-In
          </span>
        </Link>
      )}
    </>
  );

  return (
    <>
      <div className="h-20">
        <div className="fixed top-0 z-50 w-full bg-gray-800 pb-4 pt-4">
          <div className="flex justify-between items-center px-4">
            <Link to={"/"}>
              <div className="flex flex-col items-center text-[25px] md:text-3xl">
                <h3 className="text-center flex gap-2">
                  <span className="text-orange-600">𝕋𝕙𝕖</span>
                  <span className="text-white">𝕀𝕟𝕕𝕚𝕒𝕟</span>
                  <span className="text-green-600">𝕋𝕒𝕤𝕥𝕖</span>
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
                <UserLinks />
              </div>
              <IoMenu
                className="text-2xl cursor-pointer sm:hidden"
                onClick={openHumbburgerMenu}
                aria-label="Open Menu"
                role="button"
              />
            </div>
          </div>
          <div
            className={`absolute right-2 bg-slate-100 top-[100px] w-full sm:w-1/5 p-5 ${isMenuOpen ? 'block' : 'hidden'}`}
          >
            <div className="flex flex-col gap-5 h-full w-full">
              <RxCross2
                onClick={handleHumburgerMenu}
                className="text-2xl self-end cursor-pointer"
                aria-label="Close Menu"
                role="button"
              />
              <UserLinks />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
