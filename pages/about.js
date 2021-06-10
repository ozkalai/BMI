import Calculator from "../components/Calculator";
import Navigation from "../components/Navigation/Navigation";
import Info from "../components/Info";
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
const About = () => (
  <ChakraProvider>
    <Navigation />
    <Info />
  </ChakraProvider>
);

export default About;
