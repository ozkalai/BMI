import React from "react";
import { Box, Link, Text } from "@chakra-ui/react";

export default function Navigation() {
  return (
    <Box
      display="flex"
      borderBottom="5px"
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="red"
      p="20px"
    >
      <Box>
        <Link fontSize="lg">Vücud Kitle Endeksini Hesapla</Link>
      </Box>
      <Text fontSize="2xl">VKI </Text>
      <Link fontSize="lg">Vucüd Kitle Endeksi Nedir ? </Link>
    </Box>
  );
}
