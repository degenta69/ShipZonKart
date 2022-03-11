import { useState, useEffect, useCallback } from "react";

export const useGetPhotoFromQuery = ({ query ,  page=1, client_id },processData) => {
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
        const response = await fetch(query?`https://api.unsplash.com/search/photos?client_id=${client_id}&page=${page}&query=${query.replace(/\s/g,'%20')}`:`https://api.unsplash.com/search/photos?client_id=${client_id}&page=${page}&query=random`,{mode:'cors'});

        if (response.status === 200) {
          // Extract json
          const rawData = await response.json();
          console.log('hi i am unsplash hook',rawData);
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