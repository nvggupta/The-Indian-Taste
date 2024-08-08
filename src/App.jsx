import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";
import Landing from "./Components/LandingPage/Landing";
import Login from "./Components/Login";
import Menu from "./Components/Menu/Menu";
import PageNoteFOund from "./Components/PageNoteFOund";
import Signup from "./Components/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />}>

          
          </Route>
          <Route path="/signup" element={<Signup />}>
          </Route>
          <Route path="menu" element={<Menu />}></Route>
          <Route path="/checkout" element={<Cart />}></Route>
          <Route path="*" element={<PageNoteFOund/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
