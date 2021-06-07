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
const App = () => (
  <ChakraProvider resetCSS>
    <Flex flexDirection="column" minHeight="full">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        backgroundColor="whiteAlpha.500"
        p="20px"
        border="0px 0px 5px 0px"
      >
        <Box>
          <Link fontSize="lg">Vücud Kitle Endeksini Hesapla</Link>
        </Box>
        <Text fontSize="2xl">VKI </Text>
        <Link fontSize="lg">Vucüd Kitle Endeksi Nedir ? </Link>
      </Flex>
      <Container
        display="flex"
        justifyContent="center"
        alignItems="center"
        minWidth="full"
        height="auyo"
        backgroundColor="whiteAlpha.500"
        minHeight={600}
      >
        <Flex
          width="50%"
          height="500px"
          border="10px"
          borderRadius="5px"
          backgroundColor="whiteAlpha.500"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          mt="20px"
        >
          <InputGroup mb={50}>
            <InputLeftAddon>Kilonuz</InputLeftAddon>
            <Input />
          </InputGroup>
          <InputGroup mb="30px">
            <InputLeftAddon>Boyunuz</InputLeftAddon>
            <Input />
          </InputGroup>
          <Button
            variant="solid"
            size="md"
            mb="20px"
            pl="20px"
            pr="20px"
            pt="10px"
            pb="10px"
          >
            Hesapla
          </Button>
          <Text mb="20px">vücud kitle endeksiniz: 23.21324</Text>
          <Text>Normal Kilolu</Text>
        </Flex>
      </Container>
    </Flex>
  </ChakraProvider>
);
export default App;
