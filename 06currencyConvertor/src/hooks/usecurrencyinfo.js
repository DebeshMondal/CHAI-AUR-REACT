import { useEffect, useState } from "react";

function useCurrencyInfo() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${Currency}.json`
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((error) => console.error("Error fetching currency info:", error));
  }, []);
  return data;
}

export default useCurrencyInfo;
