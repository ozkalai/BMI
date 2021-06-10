import React from "react";
import {
  ChakraProvider,
  Flex,
  Box,
  Link,
  Container,
  Text,
  InputGroup,
  InputLeftAddon,
  Input,
  Button,
} from "@chakra-ui/react";
import Navigation from "./Navigation/Navigation";
import InputArea from "./InputArea";
import Wheel from "./wheel/Wheel";
const Calculator = () => {
  return (
    <ChakraProvider resetCSS>
      <Flex flexDirection="column" minHeight="full">
        <Flex
          marginTop="70px"
          display="flex"
          flexDirection={["column", "column", "row", "row"]}
          justifyContent="space-between"
          marginX="0"
        >
          <InputArea />
          <Wheel />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};
export default Calculator;
