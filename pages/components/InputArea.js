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

export default function InputArea() {
  // States
  const [kilogram, setKilogram] = React.useState("");
  const [height, setHeight] = React.useState("");

  // Event handlers
  const handleKilogramChange = (event) => setKilogram(event.target.value);
  const handleHeightChange = (event) => setHeight(event.target.value);
  const handleClick = () => {
    console.log(kilogram * height);
  };
  return (
    <Flex
      display="flex"
      justifyContent="center"
      alignItems="center"
      minWidth="full"
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
      >
        <InputGroup mb={50}>
          <InputLeftAddon>Kilonuz</InputLeftAddon>
          <Input
            value={kilogram}
            onChange={handleKilogramChange}
            placeholder="kg"
            type="number"
          />
        </InputGroup>
        <InputGroup mb="30px">
          <InputLeftAddon>Boyunuz</InputLeftAddon>
          <Input type="number" placeholder="cm" onChange={handleHeightChange} />
        </InputGroup>
        <Button
          variant="solid"
          size="md"
          mb="20px"
          pl="20px"
          pr="20px"
          pt="10px"
          pb="10px"
          onClick={handleClick}
        >
          Hesapla
        </Button>
        <Text mb="20px">vücud kitle endeksiniz: 23.21324</Text>
        <Text>Normal Kilolu</Text>
      </Box>
    </Flex>
  );
}
