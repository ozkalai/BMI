import React, { useEffect } from "react";
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
  const [bodyIndex, setBodyIndex] = React.useState("");
  const [bodyType, setBodyType] = React.useState("");
  const [bodyColor, setBodyColor] = React.useState("");
  const [alert, setAlert] = React.useState("");

  console.log(bodyIndex);
  console.log(bodyType);

  // Event handlers
  const handleKilogramChange = (event) => setKilogram(event.target.value);
  const handleHeightChange = (event) => setHeight(event.target.value);
  const handleClick = () => {
    const heightAsMeter = height / 100;
    const bmi = kilogram / heightAsMeter ** 2;
    if (bmi > 0) {
      setBodyIndex(bmi.toFixed(1));
    } else {
      setAlert("Lütfen boy ve kilonuzu girin!");
    }
  };
  const getBodyType = (bmi) => {
    if (18.5 > bmi) {
      return { type: "Zayıf", color: "#639dcd" };
    } else if (18.5 < bmi && bmi < 24.9) {
      return { type: "Normal", color: "#40a770" };
    } else if (25 < bmi && bmi < 29.9) {
      return { type: "Fazla Kilolu", color: "#fdc800" };
    } else if (30 < bmi && bmi < 39.9) {
      return { type: "Obez", color: "#f2720f" };
    } else if (40 < bmi) {
      return { type: "Morbid Obez", color: "#de060b" };
    }
  };
  useEffect(() => setBodyType(getBodyType(bodyIndex).type), [bodyIndex]);
  useEffect(() => setBodyColor(getBodyType(bodyIndex).color), [bodyType]);

  // functions

  return (
    <Flex
      display="flex"
      justifyContent="center"
      minWidth="50%"
      alignItems="center"
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
          <InputLeftAddon minWidth="100px">Kilonuz</InputLeftAddon>
          <Input
            value={kilogram}
            onChange={handleKilogramChange}
            placeholder="kg"
            type="number"
          />
        </InputGroup>
        <InputGroup mb="30px">
          <InputLeftAddon minWidth="100px">Boyunuz</InputLeftAddon>
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
        {bodyIndex && (
          <>
            <Text mb="20px">Vücud Kitle Endeksiniz: {bodyIndex}</Text>
            <Text fontSize="2xl" fontWeight="bold" color={bodyColor}>
              {bodyType}
            </Text>
          </>
        )}
        {alert && !bodyIndex && <Text>{alert}</Text>}
      </Box>
    </Flex>
  );
}
