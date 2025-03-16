import "./Stocks.css";
import { LoadingCircle } from "../Loading/Loading";
import { useEffect, useState } from "react";

const StockGraphSmall = ({ stock }) => {
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    console.log("Fetching data for stock:", stock);
    const response = await fetch(`http://localhost:8080/api/stock/${stock}`);
    console.log("Response:", response);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <div className="stock-small">
      <div className="container" />
      <span className="stock-text">{stock}</span>
      {loading ? (
        <LoadingCircle />
      ) : (
        <>
          <div></div>
        </>
      )}
    </div>
  );
};

export { StockGraphSmall };
