import { apiDataType } from "../types";

const useLocalStorage = () => {
  // Set Local Storage
  const setLocalStorageData = (dataName: string, data: apiDataType[]) =>
    localStorage.setItem(dataName, JSON.stringify(data));
 // Get Local Storage 
  const getLocalStorageData = (dataName:string) =>{
   const data = localStorage.getItem(dataName)!
   return JSON.parse(data)
  }

  return { setLocalStorageData, getLocalStorageData };
};

export default useLocalStorage;
