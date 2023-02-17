import React from "react";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Route, Routes } from "react-router-dom";
import MyToastContainer from "./Components/MyToastContainer";
export const Capstone = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <MyToastContainer />
    </>
  );
};
