import styles from "./Wheel.module.scss";
import React from "react";
import {
  Flex,
  Box,
  Image,
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
      minWidth={{
        base: "50%",
        sm: "50%",
        md: "50%",
        lg: "50%",
      }}
      height="auto"
      backgroundColor="whiteAlpha.500"
      minHeight={600}
    >
      <Box
        position="relative"
        display="flex"
        width="90%"
        minWidth="300px"
        height="500px"
        backgroundColor="whiteAlpha.500"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        mt="20px"
        boxShadow="xl"
        p="6"
        bg="white"
      >
        <Image
          position="absolute"
          objectFit="cover"
          src="https://www.aysetolga.com/wp-content/uploads/2021/02/vki-5.jpg"
          alt="Dan Abramov"
          objectPosition="center"
          padding={{ base: "50px", sm: "0px", md: "5px", lg: "50px" }}
        />
      </Box>
    </Flex>
  );
}
