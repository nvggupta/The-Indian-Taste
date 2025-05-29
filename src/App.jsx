import { useEffect, useRef, useState, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import PrivateRoute from "./Components/PrivateRoute";
import PublicRoute from "./Components/PublicRoute";


const Landing = lazy(() => import("./Components/LandingPage/Landing"));
const Menu = lazy(() => import("./Components/Menu/Menu"));
const Cart = lazy(() => import("./Components/Cart/Cart"));
const Reservation = lazy(() => import("./Components/ReservedYourTable/Reservation"));
const OrderOnline = lazy(() => import("./Components/OrderOnline/OrderOnline"));
const PaymentSuccess = lazy(() => import("./Components/Payment/PaymentPaymentSuccess"));
const Login = lazy(() => import("./Components/Login"));
const Signup = lazy(() => import("./Components/Signup"));
const PageNotFound = lazy(() => import("./Components/PageNoteFOund"));

function App() {
  const [showDesc, setShowDesc] = useState(false);
  const values = useSelector((state) => state.Menu[3]);
  const showDescref = useRef();

  const descShow = (isDesc) => setShowDesc(isDesc);

  useEffect(() => {
    if (showDesc) {
      showDescref.current.classList.add("blur-bg");
    } else {
      showDescref.current.classList.remove("blur-bg");
    }
  }, [showDesc]);

  return (
    <Router>
      <Header />
      <div ref={showDescref}>
        <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
          <Routes>
            {/* Public Routes */}
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <PublicRoute>
                  <Signup />
                </PublicRoute>
              }
            />

            {/* Private Routes */}
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Landing />
                </PrivateRoute>
              }
            />
            <Route
              path="/menu"
              element={
                <PrivateRoute>
                  <Menu descShow={descShow} />
                </PrivateRoute>
              }
            />
            <Route
              path="/checkout"
              element={
                <PrivateRoute>
                  <Cart />
                </PrivateRoute>
              }
            />
            <Route
              path="/reservation"
              element={
                <PrivateRoute>
                  <Reservation />
                </PrivateRoute>
              }
            />
            <Route
              path="/onlineOrder"
              element={
                <PrivateRoute>
                  <OrderOnline />
                </PrivateRoute>
              }
            />
            <Route
              path="/paymentSuccess"
              element={
                <PrivateRoute>
                  <PaymentSuccess />
                </PrivateRoute>
              }
            />

            {/* Fallback Route */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>

      {showDesc && (
        <div className="backdrop" onClick={() => setShowDesc(false)}>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <img
              src={values.pics}
              alt="Description"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {values.name}
              </h2>
              <p className="mt-2 text-gray-600">{values.desc}</p>
            </div>
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
