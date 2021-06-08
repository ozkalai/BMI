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
import Navigation from "./Navigation";
import InputArea from "./InputArea";
import Wheel from "./wheel/Wheel";
const Calculator = () => {
  return (
    <ChakraProvider resetCSS>
      <Flex flexDirection="column" minHeight="full">
        <Navigation />
        <Flex width="100vh">
          <InputArea />
          <Wheel />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};
export default Calculator;
