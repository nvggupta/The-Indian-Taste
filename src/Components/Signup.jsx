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
    <div className="main">
      <div className="container">
        <h2>Sign-Up</h2>
        <form>
          <div className="form-group">
            <input
              id="name"
              type="text"
              placeholder="Enter Your Name"
              onChange={(e) => setValues(prev => ({ ...prev, name: e.target.value }))}
              required
            />
            <label htmlFor="name"></label>
          </div>
          <div className="form-group">
            <input
              id="email"
              type="email"
              placeholder="Enter Your Email"
              onChange={(e) => setValues(prev => ({ ...prev, email: e.target.value }))}
              required
            />
            <label htmlFor="email"></label>
            <MdEmail className="i" />
          </div>
          <div className="form-group">
            <input
              id="password"
              type="password"
              placeholder="Enter Your Password"
              onChange={(e) => setValues(prev => ({ ...prev, password: e.target.value }))}
              required
            />
            <label htmlFor="password"></label>
            <FaLock className="i" />
          </div>
          <p className="errorMessage text-red-500">{errorMessage}</p>
          <button type="button" id="btn" className="btn" onClick={SignUpHandler}>
            Sign-Up
          </button>
          <div className="flex items-center justify-center mb-5">
          <Link to={'/login'}><p className="text-center font-[400] text-2xl p-2 cursor-pointer  text-white" >Back To Login</p></Link>
          <FaLongArrowAltRight className="text-4xl text-white"/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
