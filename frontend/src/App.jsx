import { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Home from "./components/pages/Home/Home";
import Cart from "./components/pages/Cart/Cart";
import Placeorder from "./components/pages/Placeorder/Placeorder";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Placeorder" element={<Placeorder />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
