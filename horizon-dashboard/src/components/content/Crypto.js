import React, { useEffect, useState } from "react";
import MiniStatistics from "components/card/MiniStatistics";
import supabase from "components/supabase/Client"; // Adjust the path as needed.

const Crypto = ({ symbol }) => {
  const [price, setPrice] = useState(null);
  const [change, setChange] = useState(null);
  const [change_5d, setChange_5d] = useState(null);
  const [change_1m, setChange_1m] = useState(null);
  const [change_1y, setChange_1y] = useState(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const { data: cryptoData, error: cryptoError } = await supabase
        .from("CryptoData")
        .select("price, change ,change_5d, change_1m, change_1y")
        .eq("name", symbol)
        .single();

        setPrice(cryptoData.price);
        setChange(cryptoData.change);
        setChange_5d(cryptoData.change_5d);
        setChange_1m(cryptoData.change_1m);
        setChange_1y(cryptoData.change_1y);

        if (cryptoError) {
          console.error("Error from Supabase query:", cryptoError);
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

export default Crypto;
