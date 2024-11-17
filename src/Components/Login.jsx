import { auth } from "./FireBase/firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { FaLock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUser } from "./MenuSlice/user";

function Login() {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const SignInHandler = () => {
    if (!values.email || !values.password) {
      setErrorMessage("!!Please fill all fields!!");
      return;
    }
    setErrorMessage("");

    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        const user = res.user;

        // Optional: Update profile (if required)
        await updateProfile(user, {
          displayName: user.displayName || values.email.split("@")[0], // Default to email prefix if no name
        });

        // Prepare user data for Redux
        const userInfo = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName || values.email.split("@")[0],
          photoURL: user.photoURL || null,
        };

        // Store user info in Redux
        dispatch(updateUser(userInfo));

        // Store in localStorage (optional for persistence)
        localStorage.setItem("user", JSON.stringify(userInfo));

        // Navigate to the homepage or dashboard
        navigate("/");
      })
      .catch((err) => setErrorMessage(err.message));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form className="space-y-4">
          <div className="relative">
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              onChange={(e) =>
                setValues((prev) => ({ ...prev, email: e.target.value }))
              }
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
            />
            <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="relative">
            <input
              id="password"
              type="password"
              placeholder="Enter Password"
              onChange={(e) =>
                setValues((prev) => ({ ...prev, password: e.target.value }))
              }
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
            />
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <p className="text-red-500 text-sm">{errorMessage}</p>
          <button
            type="button"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={SignInHandler}
          >
            Login
          </button>
          <Link to="/Signup" className="block text-center">
            <p className="text-gray-600">
              Don't Have an Account?{" "}
              <span className="text-blue-500 hover:text-blue-700">Register</span>
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
