// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";
import Stock from "components/content/Stock";
import Crypto from "components/content/Crypto";
import FGTable from "components/content/FGTable";
import { Heading } from "@chakra-ui/react";
import React from "react";

// Function to handle redirection
const handleRedirect = (url) => {
  window.location.href = url;
};

export default function UserReports() {
  return (
    <Box>
      <Heading as="h1" size="2xl" mb={4} mt={5} ml="20px" mr="20px">
        Fear & Greed Index
      </Heading>
      <SimpleGrid mb="20px" ml="20px" mr="20px" columns={{ sm: 1, md: 2 }} spacing={{ base: "20px", xl: "20px" }}>
        <Box onClick={() => handleRedirect("https://edition.cnn.com/markets/fear-and-greed")} cursor="pointer">
          <FGTable tableName="StockFGIndex" tableTitle="Stock Market" />
        </Box>
        <Box onClick={() => handleRedirect("https://alternative.me/crypto/fear-and-greed-index/")} cursor="pointer">
          <FGTable tableName="CryptoFGIndex" tableTitle="Crypto Market" />
        </Box>
      </SimpleGrid>

      <Heading as="h1" size="2xl" mb={5} mt={10} ml="20px" mr="20px">
        American Market
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }} gap="20px" mb="20px" ml="20px" mr="20px">
        <Box onClick={() => handleRedirect("https://finance.yahoo.com/quote/QQQ")} cursor="pointer">
          <Stock symbol="QQQ" />
        </Box>
        <Box onClick={() => handleRedirect("https://finance.yahoo.com/quote/QQQM")} cursor="pointer">
          <Stock symbol="QQQM" />
        </Box>
        <Box onClick={() => handleRedirect("https://finance.yahoo.com/quote/SPY")} cursor="pointer">
          <Stock symbol="SPY" />
        </Box>
        <Box onClick={() => handleRedirect("https://finance.yahoo.com/quote/SPYG")} cursor="pointer">
          <Stock symbol="SPYG" />
        </Box>
        <Box onClick={() => handleRedirect("https://finance.yahoo.com/quote/VGT")} cursor="pointer">
          <Stock symbol="VGT" />
        </Box>
      </SimpleGrid>

      <Heading as="h1" size="2xl" mb={4} mt={10} ml="20px" mr="20px">
        Australian Market
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }} gap="20px" mb="20px" ml="20px" mr="20px">
        <Box onClick={() => handleRedirect("https://finance.yahoo.com/quote/NDQ.AX")} cursor="pointer">
          <Stock symbol="NDQ" />
        </Box>
        <Box onClick={() => handleRedirect("https://finance.yahoo.com/quote/IVV.AX")} cursor="pointer">
          <Stock symbol="IVV" />
        </Box>
        <Box onClick={() => handleRedirect("https://finance.yahoo.com/quote/FANG.AX")} cursor="pointer">
          <Stock symbol="FANG" />
        </Box>
        <Box onClick={() => handleRedirect("https://finance.yahoo.com/quote/U100.AX")} cursor="pointer">
          <Stock symbol="U100" />
        </Box>
        <Box onClick={() => handleRedirect("https://finance.yahoo.com/quote/CRYP.AX")} cursor="pointer">
          <Stock symbol="CRYP" />
        </Box>
        <Box onClick={() => handleRedirect("https://finance.yahoo.com/quote/EBTC.XA")} cursor="pointer">
          <Stock symbol="EBTC" />
        </Box>
      </SimpleGrid>

      <Heading as="h1" size="2xl" mb={4} mt={10} ml="20px" mr="20px">
        Crypto Market
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }} gap="20px" mb="20px" ml="20px" mr="20px">
        <Box onClick={() => handleRedirect("https://finance.yahoo.com/quote/BTC-USD")} cursor="pointer">
          <Crypto symbol="BTC" />
        </Box>
        <Box onClick={() => handleRedirect("https://finance.yahoo.com/quote/ETH-USD")} cursor="pointer">
          <Crypto symbol="ETH" />
        </Box>
        <Box onClick={() => handleRedirect("https://finance.yahoo.com/quote/BNB-USD")} cursor="pointer">
          <Crypto symbol="BNB" />
        </Box>
      </SimpleGrid>
    </Box>
  );
}
