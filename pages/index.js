import React from "react";
import Calculator from "../components/Calculator";
import Navigation from "../components/Navigation/Navigation";

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
const App = () => {
  return (
    <ChakraProvider>
      <Flex display="flex" flexDirection="column">
        <Navigation background="red" />
        <Calculator />
      </Flex>
    </ChakraProvider>
  );
};
export default App;
