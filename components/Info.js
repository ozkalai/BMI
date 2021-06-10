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
  Heading,
} from "@chakra-ui/react";

export default function Info() {
  return (
    <Container
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop="200px"
    >
      <Box
        maxWidth="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        boxShadow="xl"
        rounded="sm"
        bg="whitesmoke"
        padding="50px"
        marginX={{ sm: "10px" }}
      >
        <Heading>Vücut Kitle Endeksi</Heading>
        <Text textAlign="center" fontSize="20px">
          Vücut kitle indeksi, vücut kütlesinin, uzunluğunun metre cinsinden
          karesine bölünmesiyle hesaplanır. İdeal ağırlık ise ulaşılmak istenen
          VKİ' nin, boy uzunluğunun karesi ile çarpılmasıyla elde edilir.
        </Text>
      </Box>
    </Container>
  );
}
