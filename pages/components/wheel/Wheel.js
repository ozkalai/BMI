import styles from "./Wheel.module.scss";
import React from "react";
import {
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

export default function Wheel() {
  return (
    <Flex
      display="flex"
      justifyContent="center"
      alignItems="center"
      minWidth="50%"
      height="auto"
      backgroundColor="whiteAlpha.500"
      minHeight={600}
    >
      <Box
        display="flex"
        width="90%"
        minWidth="300px"
        height="500px"
        backgroundColor="whiteAlpha.500"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        mt="20px"
        border="solid"
        boxShadow="xl"
        p="6"
        rounded="sm"
        bg="white"
        borderColor="#fff"
        borderRadius="5px"
        padding="40px"
      ></Box>
    </Flex>
  );
}
