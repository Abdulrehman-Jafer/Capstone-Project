import React, { useContext, useState, useEffect } from "react";
import { Navbar } from "../Components/Navbar";
import { CapstoneContext } from "../CapstoneContext";
import CartItem from "../Components/CartItem";
import { Link } from "react-router-dom";
export const Cart = () => {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const { cartData, isCheckingOut, checkOut } = useContext(CapstoneContext);

  const cartMap = cartData.map(({ id, url, price }) => {
    return <CartItem key={id} id={id} url={url} price={price} />;
  });

  useEffect(() => {
    const MyFunc = () => {
      let globalPrice = 0;
      cartData.map((allData) => {
        return (globalPrice = globalPrice + allData.price);
      });
      setTotalPrice(globalPrice);
    };
    MyFunc();
  }, [cartData.length]);

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
        <div className="flex flex-col gap-5 flex-wrap justify-center">
          {cartData.length !== 0
            ? cartMap
            : "Your Cart Is Empty Please Add any Item in cart To Shop "}
        </div>
        <div className="flex justify-end items-center gap-3">
          {cartData.length !== 0 && (
            <button
              className="text-3xl border text-white px-3 bg-slate-700 rounded-[.4rem] hover:bg-slate-800 translate-y-[7%]"
              disabled={isCheckingOut}
              onClick={() => checkOut()}
            >
              {isCheckingOut ? "Your order is being Placed" : "Check Out"}
            </button>
          )}
          <span className="text-2xl">
            Total :{" "}
            {totalPrice.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </span>
        </div>
      </main>
    </main>
  );
};
