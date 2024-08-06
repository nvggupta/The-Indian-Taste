import Header from "./Components/Header/Header";
import Landing from "./Components/LandingPage/Landing";
import Login from "./Components/Login";
import Menu from "./Components/Menu/Menu";
import Signup from "./Components/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/menu" element={<Menu />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
