import React,{useEffect,useState} from 'react'
import { apiDataType } from '../types';

export const useFetcher = (url:string) => {
  const [apiData, setApiData] = useState<apiDataType[]>([]);

  useEffect(() => {
    const DataFetcher = async () => {
      const data = await fetch(url).then((response) => response.json());
      const pricedData = data.map((allData:apiDataType) => {
        return {
          ...allData,
          price: Math.floor(Math.random() * 10) + Math.random(),
        };
      });
      setApiData(pricedData);
    };
    DataFetcher();
  }, []);
  return {apiData,setApiData}
}

