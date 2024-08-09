import { useEffect, useRef, useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";
import Landing from "./Components/LandingPage/Landing";
import Login from "./Components/Login";
import Menu from "./Components/Menu/Menu";
import PageNoteFOund from "./Components/PageNoteFOund";
import Signup from "./Components/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "./Components/Footer/Footer";
import AI from "./Components/AI/AI";
function App() {
  const [showDesc, setShowDesc] = useState(false);
  const values = useSelector((state) => state.Menu[3]);
  const descShow = (isDesc) => {
    console.log(isDesc);
    setShowDesc(isDesc);
  }
  const showDescref = useRef();

  useEffect(() => {
    if (showDesc) {
      showDescref.current.classList.add("blur-bg");
     
    } else {
      showDescref.current.classList.remove("blur-bg");
    }
  }, [showDesc]);

  return (
    <>
      <Router>
        <Header />
        <div className="" ref={showDescref}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="menu" element={<Menu descShow={descShow} />} />
            <Route path="/checkout" element={<Cart />} />
         
            <Route path="*" element={<PageNoteFOund />} />
          </Routes>
          <Footer />
        </div>
        {showDesc && (
          <div className="backdrop" onClick={() => setShowDesc(false)}>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <img src={values.pics} alt="Description" className="w-full h-48 object-cover rounded-t-lg" />
              <div className="mt-4">
                <h2 className="text-xl font-semibold text-gray-800">{values.name}</h2>
                <p className="mt-2 text-gray-600">{values.desc}</p>
              </div>
            </div>
          </div>
        )}
      </Router>
    </>
  );
}

export default App;
