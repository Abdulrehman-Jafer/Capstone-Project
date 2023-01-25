import React, { useState, useContext } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { CapstoneContext } from "../CapstoneContext";
import { apiDataType } from "../CapstoneContext";
import { BsCart2 } from "react-icons/bs";

export const Image = ({ url, id, isFavorite }: apiDataType) => {
  const { FavrtHandler, addToCart, cartData, removeFromCart } =
    useContext(CapstoneContext);
  const [hovered, setHovered] = useState(false);


  const alreadyCarted = cartData.some((data) => {
    return data.id == id;
  });

  const HeartIcon = isFavorite ? (
    <AiFillHeart
      className={`absolute left-0 text-3xl rounded-[50%] text-red-400 cursor-pointer ${
        isFavorite ? "" : "hidden"
      }`}
      onClick={() => FavrtHandler(id)}
    />
  ) : (
    <AiOutlineHeart
      className={`absolute left-0 text-3xl rounded-[50%] text-red-400 cursor-pointer hover:text-red-500  ${
        hovered ? "" : "hidden"
      }`}
      onClick={() => FavrtHandler(id)}
    />
  );

  const cartOrPlusIcon = !alreadyCarted ? (
    <AiOutlinePlus
      className={`absolute right-0 text-3xl text-white bg-slate-400 hover:bg-slate-500 rounded-[20%] cursor-pointer ${
        hovered ? "" : "hidden"
      }`}
      onClick={() => {
        addToCart(id);
      }}
    />
  ) : (
      <BsCart2
        className={`absolute right-0 text-3xl text-white bg-slate-400 hover:bg-slate-500 rounded-[20%] cursor-pointer`}
        onClick={()=>removeFromCart(id)}
      />
  );
  return (
    <div
      id={id.toString()}
      className="inline-block relative hover:scale-[1.01] transition-all "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {HeartIcon}
      {cartOrPlusIcon}
      <img
        src={url}
        alt="text"
        className={`max-w-[300px] rounded-[1rem] boxShadow `}
      />
    </div>
  );
};
