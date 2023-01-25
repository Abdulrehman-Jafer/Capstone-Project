import React,{useContext} from "react";
import { BsCart2 } from "react-icons/bs";
import {BsCartX} from "react-icons/bs"
import { Link } from "react-router-dom";
import { CapstoneContext } from "../CapstoneContext";


export const Navbar = () => {
  const {cartData} =useContext(CapstoneContext)
  const CartIcon=cartData.length !== 0 ? <BsCart2/> : <BsCartX/>
  return (
    <main className="flex bg-orange-400 p-3 items-center justify-between boxShadow">
      <div className="text-[2.5em] font-bold text-gray-800 cursor-pointer hover:text-black">
        {<Link to="/">Pic Some</Link>}
      </div>
      <i className="text-[3em] text-gray-800 cursor-pointer hover:text-black hover:font-bold">
        {
          <Link to={"/cart"}>
            {CartIcon}
          </Link>
        }
      </i>
    </main>
  );
};
