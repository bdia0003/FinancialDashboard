import React, { useEffect, useState } from "react";
import MiniStatistics from "components/card/MiniStatistics";
import supabase from "components/supabase/Client"; // Adjust the path as needed.

const Stock = ({ symbol }) => {
  const [price, setPrice] = useState(null);
  const [change, setChange] = useState(null);
  const [change_5d, setChange_5d] = useState(null);
  const [change_1m, setChange_1m] = useState(null);
  const [change_1y, setChange_1y] = useState(null);
  
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const { data: stockData, error: stockError } = await supabase
        .from("StockData")
        .select("price, change, change_5d, change_1m, change_1y")
        .eq("name", symbol)
        .single();

        setPrice(stockData.price);
        setChange(stockData.change);
        setChange_5d(stockData.change_5d);
        setChange_1m(stockData.change_1m);
        setChange_1y(stockData.change_1y);

        if (stockError) {
          console.error("Error from Supabase query:", stockError);
          return;
        }

      } catch (err) {
        console.error("Error fetching or updating prices:", err);
      }
    };

    fetchPrices();
  }, [symbol]);

  return (
    <div>
      {change ? (
        <MiniStatistics name={symbol} value={price} growth1={change} growth2={change_5d} growth3={change_1m} growth4={change_1y} text1="since yesterday" text2="since last week" text3="since last month" text4="since last year"/>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Stock;
