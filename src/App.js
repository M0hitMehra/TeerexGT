import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import React from "react";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import { toast } from "react-toastify";

function App() {
  const [cart, setCart] = React.useState([]);
  const [mode, setmode] = React.useState("Home");

  const handleMode = () => {
    if(mode === "Home") {
      setmode("cart");
    }else{
      setmode("Home");
    }
 
  };

  const cartOption = {
    cart,
    setCart,
  };
  return (
    <div className="">
      <Header handleMode={handleMode} mode={mode} />

      {mode==="Home" ? <Home {...cartOption} /> : <Cart {...cartOption} />}
    </div>
  );
}

export default App;
