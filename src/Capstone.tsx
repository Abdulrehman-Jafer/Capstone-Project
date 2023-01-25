import React from "react";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Route, Routes } from "react-router-dom";
export const Capstone = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
  );
};
