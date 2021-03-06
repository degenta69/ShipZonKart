import { useState, useEffect, useCallback } from "react";

export const useGetCategories = ({ category , limit=null,sort='asc' ,processData }) => {
  // Response state
  const [data, setData] = useState();

  // Turn objects into strings for useCallback & useEffect dependencies
//   const [stringifiedUrl, stringifiedInit] = [JSON.stringify(url), JSON.stringify(init)];

  // If no processing function is passed just return the data
  // The callback hook ensures that the function is only created once
  // and hence the effect hook below doesn't start an infinite loop
  const processJson = useCallback(processData || ((jsonBody) => jsonBody), []);

  useEffect(() => {
    // Define asynchronous function
    const fetchApi = async () => {
      try {
        // Fetch data from REST API
        const response = await fetch(category?`https://fakestoreapi.com/products/category/${category}?limit=${limit}&sort=${sort}`:'https://fakestoreapi.com/products/categories');

        if (response.status === 200) {
          // Extract json
          const rawData = await response.json();
          console.log('hi i am getcathook',rawData);
          const processedData = processJson(rawData);
          setData(processedData);
        } else {
          console.error(`Error ${response.status} ${response.statusText}`);
        }
      } catch (error) {
        console.error(`Error ${error}`);
      }
    };

    // Call async function
    fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [processJson]);

  return data;
};