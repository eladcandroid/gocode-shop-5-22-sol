import "./App.css";
import React, { useEffect, useState, useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProductDetails from "./Views/ProductDetails";
import About from "./Views/About";
import Home from "./Views/Home";
// import FromApp from "./contexts/FromApp"

function App() {
  // const [CartArray, setCartArray] = useState([]);
  // const [fixedArray, setFixedArray] = useState([]);

  // function addToCart(id) {
  //   let increasingCartArray = [
  //     ...CartArray,
  //     fixedArray.find(function (item) {
  //       return item.id === id;
  //     }),
  //   ];
  //   setCartArray(increasingCartArray);
  // }

  return (
    // <FromApp.Provider value={{addToCart:addToCart}}>

    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Products/:dynamicProductID" element={<ProductDetails />} />
      <Route path="about" element={<About />} />
    </Routes>
    // </FromApp.Provider>
  );
}
export default App;
