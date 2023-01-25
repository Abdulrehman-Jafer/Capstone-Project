import React from "react";
import { apiDataType } from "../CapstoneContext";

const useLocalStorage = () => {
  const setLocalStorageData = (dataName: string, data: apiDataType[]) =>
    localStorage.setItem(dataName, JSON.stringify(data));
  const getLocalStorageData = (dataName: string) =>
    JSON.parse(localStorage.getItem(dataName));

  return { setLocalStorageData, getLocalStorageData };
};

export default useLocalStorage;
