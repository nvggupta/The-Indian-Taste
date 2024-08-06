import { MdLocationPin } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../FireBase/firebase";

function Header() {
  const [profileData, setProfileData] = useState(null);

  // useEffect(() => {
  //   const fetchUserDetails = async () => {
  //     const user = auth.currentUser;
  //     if (user) {
  //       const userDocRef = doc(db, "users", user.uid);
  //       const userDoc = await getDoc(userDocRef);
  //       if (userDoc.exists()) {
  //         setProfileData(userDoc.data());
  //       } else {
  //         console.log("No Data");
  //       }
  //     }
  //   };
   
  //   fetchUserDetails();
  // }, []);
  useEffect(()=>{
    setProfileData(localStorage.getItem("name"));
  },[])
    
  return (
    <>
      <div className="bg-gray-800 pb-4 pt-4">
        <Link to={'/'}>
          <div className="flex flex-col items-center text-3xl">
            <h3 style={{ color: "#800080" }}>
              ❚█══<span style={{ color: "#ff9933" }}> 𝕋𝕙𝕖</span>
              <span style={{ color: "#ffffff" }}> 𝕀𝕟𝕕𝕚𝕒𝕟</span>
              <span style={{ color: "#138808" }}> 𝕋𝕒𝕤𝕥𝕖</span> ══█❚
            </h3>
            <span style={{ color: "#fff" }}>𝑭𝒐𝒐𝒅 𝑪𝒐𝒖𝒓𝒕 𝑶𝒏 𝑨𝒏 𝑨𝒑𝒑</span>
          </div>
        </Link>
        <div className="flex justify-between items-center px-4">
          <div className="w-1/2">
            <div className="flex flex-wrap items-center text-white">
              <MdLocationPin />
              <h4>Delhi, New Delhi</h4>
              <MdKeyboardArrowDown />
            </div>
            <p className="text-white">Connaught Place Minto Road, New Delhi</p>
          </div>
          <div className="flex justify-around items-center w-1/2">
            <div className="ms-48 flex justify-around items-center w-1/3">
              <div className="flex items-center justify-center gap-5 text-white">
                <IoMdCall />
                <div>
                  <p>Call Us At</p>
                  <p>9999999999</p>
                </div>
                <CiSearch className="text-2xl" />
                <FaCartArrowDown className="text-2xl" />
              </div>
              <div className="vertical-row mx-4 h-10 border-l border-white"></div>
              <div className="flex items-center justify-around flex-1">
                <Link to={'/Login'}>
                  <div className="Sign-in text-white flex items-center justify-around w-1/3">
                    <div className="profile">
                      <img src="" alt="profile" />
                    </div>
                    <span>{profileData ? profileData : "Sign In"}</span>
                  </div>
                </Link>
                <div className="vertical-row mx-4 h-10 border-l border-white"></div>
                <div className="flex justify-center">
                  <IoMenu className="text-2xl text-white" />
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
