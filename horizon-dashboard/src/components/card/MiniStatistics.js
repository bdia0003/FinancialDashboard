// Chakra imports
// Chakra imports
import {
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
// Custom icons
import React from "react";

export default function Default(props) {
  const { startContent, endContent, name, growth1, growth2, growth3, growth4, value, text1, text2, text3, text4 } = props;
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "secondaryGray.600";

  // Determine color based on the growth value (+ or -)
  const growthColor1 = growth1 && growth1.startsWith("+") ? "green.500" : growth1 && growth1.startsWith("-") ? "red.500" : "gray.500";
  const growthColor2 = growth2 && growth2.startsWith("+") ? "green.500" : growth2 && growth2.startsWith("-") ? "red.500" : "gray.500";
  const growthColor3 = growth3 && growth3.startsWith("+") ? "green.500" : growth3 && growth3.startsWith("-") ? "red.500" : "gray.500";
  const growthColor4 = growth4 && growth4.startsWith("+") ? "green.500" : growth4 && growth4.startsWith("-") ? "red.500" : "gray.500";
  return (
    <Card py='15px'>
      <Flex
        my='auto'
        h='100%'
        align={{ base: "center", xl: "start" }}
        justify={{ base: "center", xl: "center" }}>
        {startContent}

        <Stat my='auto' ms={startContent ? "18px" : "0px"}>
          <StatLabel
            lineHeight='100%'
            color={textColorSecondary}
            fontSize={{
              base: "sm",
            }}>
            {name}
          </StatLabel>
          <StatNumber
            color={textColor}
            fontSize={{
              base: "2xl",
            }}>
            {value}
          </StatNumber>
          {growth1 ? (
            <Flex align='center'>
              <Text color={growthColor1} fontSize='xs' fontWeight='700' me='5px'>
                {growth1}
              </Text>
              <Text color='secondaryGray.600' fontSize='xs' fontWeight='400'>
                {text1}
              </Text>
            </Flex>
          ) : null}
          {growth2 ? (
            <Flex align='center'>
              <Text color={growthColor2} fontSize='xs' fontWeight='700' me='5px'>
                {growth2}
              </Text>
              <Text color='secondaryGray.600' fontSize='xs' fontWeight='400'>
                {text2}
              </Text>
            </Flex>
          ) : null}
          {growth3 ? (
            <Flex align='center'>
              <Text color={growthColor3} fontSize='xs' fontWeight='700' me='5px'>
                {growth3}
              </Text>
              <Text color='secondaryGray.600' fontSize='xs' fontWeight='400'>
                {text3}
              </Text>
            </Flex>
          ) : null}
          {growth4 ? (
            <Flex align='center'>
              <Text color={growthColor4} fontSize='xs' fontWeight='700' me='5px'>
                {growth4}
              </Text>
              <Text color='secondaryGray.600' fontSize='xs' fontWeight='400'>
                {text4}
              </Text>
            </Flex>
          ) : null}
        </Stat>
        <Flex ms='auto' w='max-content'>
          {endContent}
        </Flex>
      </Flex>
    </Card>
  );
}