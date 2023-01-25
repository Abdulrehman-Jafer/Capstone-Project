import { createContext, ReactNode, useEffect, useState } from "react";
import useLocalStorage from "./Hooks/useLocalStorage";
import { useFetcher } from "./Hooks/useFetcher";
import { ofProviderValue } from "./types";
import { ProviderProp } from "./types";
import { apiDataType } from "./types";


export const CapstoneContext = createContext({} as ofProviderValue);

const CapstoneContextProvider = ({ children }: ProviderProp) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const { setLocalStorageData, getLocalStorageData } = useLocalStorage();
  const [cartData, setCartData] = useState<apiDataType[]>(getLocalStorageData("carted"));

  //   Fetching Data
  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
    const {apiData,setApiData}=useFetcher(url)
  //   For Favouriting
  const FavrtHandler = (clickedId: number) => {
    let changedData: apiDataType[] = [];
    if (apiData.length !== 0) {
      apiData.map((data) => {
        const { id, isFavorite } = data;
        if (id == clickedId) {
          let newObject: apiDataType = { ...data, isFavorite: !isFavorite };
          changedData.push(newObject);
        } else {
          changedData.push(data);
        }
      });
    }
    setApiData(changedData);
  };

  //   For Adding and Removing Items From Cart
  const addtoCart = (para: number) => {
    const cartedImage = apiData.find(({ id }) => id == para);
    if (!cartData.includes(cartedImage as apiDataType)) {
        setCartData([...cartData,cartedImage as apiDataType])
    } else {
      alert("already Carted");
    }
  };

  useEffect(() => {
    setLocalStorageData("carted",cartData)
  }, [cartData]);

  const removeFromCart = (para: number) => {
    const filteredCartData = cartData.filter(({ id }) => {
      return id !== para;
    });
    setCartData(filteredCartData);
  };

  //   Checking Out Part
  const checkOut = () => {
    setCartData([]);
    setLocalStorageData("carted",cartData)
    console.log("Order Placed");
    setIsCheckingOut(false);
  };
  const setCheckOut = () => {
    if (cartData.length > 0) {
      setIsCheckingOut(true);
    } else {
      alert("Cart is Empty Please add Some Item First");
    }
  };
  useEffect(() => {
    if (isCheckingOut) {
      const timeOut = setTimeout(() => checkOut(), 3000);
      return () => {
        clearTimeout(timeOut);
      };
    }
  }, [isCheckingOut]);

  return (
    <CapstoneContext.Provider
      value={{
        imageData: apiData,
        FavrtHandler: FavrtHandler,
        cartData: cartData,
        addToCart: addtoCart,
        removeFromCart: removeFromCart,
        isCheckingOut: isCheckingOut,
        checkOut: setCheckOut,
      }}
    >
      {children}
    </CapstoneContext.Provider>
  );
};
export default CapstoneContextProvider;
