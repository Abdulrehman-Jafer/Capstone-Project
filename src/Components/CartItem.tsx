import React, { useContext } from "react";
import { RxMinus } from "react-icons/rx";
import { CapstoneContext } from "../CapstoneContext";

type propType = {
  id: number;
  url: string;
  price: number;
};

const CartItem = ({ id, url, price }: propType) => {
  const { removeFromCart } = useContext(CapstoneContext);
  return (
    <div key={id}>
      <div className="flex justify-between">
        <div className="relative">
          <img src={url} alt="cartImage" className="w-[300px] h-[200px] rounded-[1rem] object-cover" />
          {
            <RxMinus
              className="absolute right-0 top-0 text-white text-3xl bg-slate-400 cursor-pointer hover:bg-slate-500 rounded-[.5rem]"
              onClick={() => removeFromCart(id)}
            />
          }
        </div>
        <div className="text-2xl">
          {price?.toLocaleString("en-Us", {
            style: "currency",
            currency: "USD",
          })}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
