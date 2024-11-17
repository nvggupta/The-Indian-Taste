import { createUserWithEmailAndPassword ,updateProfile } from "firebase/auth";
import { useState } from "react";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { auth } from "./FireBase/firebase"; 
import { Link, useNavigate } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const SignUpHandler = () => {
    if (!values.name || !values.email || !values.password) {
      setErrorMessage("Please fill all fields!");
      return;
    }
    setErrorMessage("");
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async(res) => {
        console.log(res);
        
         const user = res.user;
         await updateProfile(user , {
          displayName: values.name,
          
        })
        localStorage.setItem("name" , values.name);
        navigate('/login')
        
      })
      .catch(err => setErrorMessage(err.message));
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Sign-Up</h2>
        <form className="space-y-4">
          <div className="relative">
            <input
              id="name"
              type="text"
              placeholder="Enter Your Name"
              onChange={(e) => setValues(prev => ({ ...prev, name: e.target.value }))}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="name"></label>
          </div>
          <div className="relative">
            <input
              id="email"
              type="email"
              placeholder="Enter Your Email"
              onChange={(e) => setValues(prev => ({ ...prev, email: e.target.value }))}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="email"></label>
            <MdEmail className="absolute right-3 top-3 text-gray-400" />
          </div>
          <div className="relative">
            <input
              id="password"
              type="password"
              placeholder="Enter Your Password"
              onChange={(e) => setValues(prev => ({ ...prev, password: e.target.value }))}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="password"></label>
            <FaLock className="absolute right-3 top-3 text-gray-400" />
          </div>
          <p className="text-red-500 text-sm">{errorMessage}</p>
          <button 
            type="button" 
            onClick={SignUpHandler}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Sign-Up
          </button>
          <div className="flex items-center justify-center space-x-2 mt-4">
            <Link to={'/login'}>
              <p className="text-blue-500 hover:text-blue-600 transition-colors duration-200 text-lg font-medium cursor-pointer">Back To Login</p>
            </Link>
            <FaLongArrowAltRight className="text-blue-500 text-xl animate-pulse"/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
