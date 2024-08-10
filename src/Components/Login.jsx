import { auth } from "./FireBase/firebase"; 
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword ,updateProfile } from "firebase/auth";
import { useState } from "react";
import { FaLock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUser } from "./MenuSlice/user";
function Login() {
  const dispatch = useDispatch()
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const SignInHandler = () => {
    if ( !values.email || !values.password) {
      setErrorMessage("!!Please fill all fields!!");
      return;
    }
    setErrorMessage("");
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async(res) => {
        // console.log(res);
         const user = res.user;
         await updateProfile(user , {
          displayName: values.name,
        })
        localStorage.setItem("user",values.email);
        console.log(user.reloadUserInfo);
        
        dispatch(updateUser(user.reloadUserInfo));
        navigate('/')
      })
      .catch(err => setErrorMessage(err.message));
  }

  return (
    <div className="main">
      <div className='container'>
        <h2>Login</h2>
        <form action=''>
            <div className='form-group'>
                <input id='email' type='email' placeholder="Enter Email" onChange={(e)=>setValues( prev =>({...prev ,email:e.target.value}))} required></input>
                <label htmlFor='email'></label>
                <MdEmail className="i"/>
            </div>
            <div className='form-group'>
                <input id='password' type='password' placeholder="Enter Password"onChange={(e)=>setValues( prev =>({...prev ,password:e.target.value}))} required></input>
                <label htmlFor='password'></label>
                <FaLock className="i"/>
            </div>
            <p className="para" style={{color:"red"}}>{errorMessage}</p>
            <button type='button' id="btn" className="btn" onClick={SignInHandler}>Login</button>
            <Link to={'/Signup'}><p className="para">Don't Have an Account <a href='#'>Register</a></p></Link>
        </form>
      </div>
    </div>
  )
}

export default Login
