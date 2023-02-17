import {ReactNode} from "react"
export type ProviderProp = {
    children: ReactNode;
  };
  export type apiDataType = {
    id: number;
    isFavorite: boolean;
    url: string;
    price?: number;
  };
 export type ofProviderValue = {
    imageData: apiDataType[];
    FavrtHandler: (id: number) => void;
    cartData: apiDataType[];
    addToCart: (id: number) => void;
    removeFromCart: (id: number) => void;
    isCheckingOut: boolean;
    checkOut: () => void;
  };
  