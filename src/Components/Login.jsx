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
  const navigate = useNavigate();

  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "", firebase: "" });

  const validate = () => {
    let valid = true;
    const newErrors = { email: "", password: "", firebase: "" };

    if (!values.email.trim()) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      newErrors.email = "Enter a valid email address.";
      valid = false;
    }

    if (!values.password.trim()) {
      newErrors.password = "Password is required.";
      valid = false;
    } else if (values.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const SignInHandler = () => {
    if (!validate()) return;

    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        const user = res.user;

        await updateProfile(user, {
          displayName: user.displayName || values.email.split("@")[0],
        });

        const userInfo = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName || values.email.split("@")[0],
          photoURL: user.photoURL || null,
        };

        dispatch(updateUser(userInfo));
        localStorage.setItem("user", JSON.stringify(userInfo));
        navigate("/");
      })
      .catch((err) => {
        setErrors((prev) => ({ ...prev, firebase: err.message }));
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="relative">
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              value={values.email}
              onChange={(e) => setValues((prev) => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
            />
            <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="relative">
            <input
              id="password"
              type="password"
              placeholder="Enter Password"
              value={values.password}
              onChange={(e) => setValues((prev) => ({ ...prev, password: e.target.value }))}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
            />
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {errors.firebase && <p className="text-red-500 text-sm">{errors.firebase}</p>}

          <button
            type="button"
            onClick={SignInHandler}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>

          <Link to="/Signup" className="block text-center mt-2">
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
