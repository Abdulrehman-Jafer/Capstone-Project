import { useContext, useState} from "react";
import { Navbar } from "../Components/Navbar";
import { CapstoneContext } from "../Context/CapstoneContext";
import CartItem from "../Components/CartItem";
import { Link } from "react-router-dom";



export const Cart = () => {
  const { cartData, isCheckingOut, checkOut } = useContext(CapstoneContext);
  let total = 0
  const cartMap = cartData.map(({ id, url,price }) => {
    total = total + (price ?  price : 1)
    return <CartItem key={id} id={id} url={url} price={price!} />;
  });
  return (
    <main>
      {<Navbar />}
      <main className="w-[100%] px-5">
        <div className="text-[3em] mb-5 text-center">Your Cart</div>
        <div className="flex text-2xl text-orange-300">Your Cart Items</div>
        <div className="flex justify-center items-center  ">
          <Link to="/">
            <button className="border px-3 py-1 hover:border-black">
              Add {cartData.length >= 1 && "More"} Items
            </button>
          </Link>
        </div>
        <div className="flex flex-col gap-5 flex-wrap justify-center my-[1rem]">
          {cartData.length !== 0
            ? cartMap
            : "Your Cart Is Empty Please Add any Item in cart To Shop "}
        </div>
        <div className="flex justify-end items-center gap-3">
          {cartData.length !== 0 && (
            <button
              className="sm:text-3xl border text-white px-3 bg-slate-700 rounded-[.4rem] hover:bg-slate-800 translate-y-[7%]"
              disabled={isCheckingOut}
              onClick={() => checkOut()}
            >
              {isCheckingOut ? "Your order is being Placed" : "Check Out"}
            </button>
          )}
          <span className="sm:text-2xl">
            Total :{" "}
            {total.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </span>
        </div>
      </main>
    </main>
  );
};
