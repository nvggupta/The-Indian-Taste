import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
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

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    firebase: "",
  });

  const navigate = useNavigate();

  const validate = () => {
    let valid = true;
    let newErrors = { name: "", email: "", password: "", firebase: "" };

    if (!values.name.trim()) {
      newErrors.name = "Name is required.";
      valid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(values.name)) {
      newErrors.name = "Name can only contain letters and spaces.";
      valid = false;
    }

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
    } else if (!/[a-zA-Z]/.test(values.password) || !/[0-9]/.test(values.password)) {
      newErrors.password = "Password must include letters and numbers.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const SignUpHandler = async () => {
    if (!validate()) return;

    try {
      const res = await createUserWithEmailAndPassword(auth, values.email, values.password);
      const user = res.user;

      await updateProfile(user, {
        displayName: values.name,
      });

      localStorage.setItem("name", values.name);
      navigate("/login");
    } catch (err) {
      setErrors(prev => ({ ...prev, firebase: err.message }));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Sign-Up</h2>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="relative">
            <input
              id="name"
              type="text"
              placeholder="Enter Your Name"
              value={values.name}
              onChange={(e) => setValues(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div className="relative">
            <input
              id="email"
              type="email"
              placeholder="Enter Your Email"
              value={values.email}
              onChange={(e) => setValues(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <MdEmail className="absolute right-3 top-3 text-gray-400" />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="relative">
            <input
              id="password"
              type="password"
              placeholder="Enter Your Password"
              value={values.password}
              onChange={(e) => setValues(prev => ({ ...prev, password: e.target.value }))}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaLock className="absolute right-3 top-3 text-gray-400" />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {errors.firebase && <p className="text-red-500 text-sm">{errors.firebase}</p>}

          <button
            type="button"
            onClick={SignUpHandler}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Sign-Up
          </button>

          <div className="flex items-center justify-center space-x-2 mt-4">
            <Link to={"/login"}>
              <p className="text-blue-500 hover:text-blue-600 transition-colors duration-200 text-lg font-medium cursor-pointer">Back To Login</p>
            </Link>
            <FaLongArrowAltRight className="text-blue-500 text-xl animate-pulse" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
