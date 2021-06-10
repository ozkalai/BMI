import { Box, Link } from "@chakra-ui/layout";
import React from "react";

import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Menu({ isOpen, setIsOpen }) {
  const handleClick = () => {
    setIsOpen("false");
    console.log(isOpen);
  };
  if (isOpen) {
    return (
      <Box
        position="absolute"
        width="50%"
        top="0"
        right="0"
        bg="#393939"
        height="100vh"
        zIndex="999"
      >
        <Box
          color="white"
          position="absolute"
          fontSize="30px"
          top="20px"
          right="20px"
          cursor="pointer"
          onClick={handleClick}
        >
          <AiOutlineCloseCircle />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt="150px"
          flexDirection="column"
          fontSize="18px"
          fontWeight="semibold"
        >
          <Link color="white " href="/" mb="10px" mx="10px">
            Vücud Kitle Endeksini Hesapla
          </Link>
          <Link href="/about" color="white" textAlign="end">
            Vucüd Kitle Endeksi Nedir ?
          </Link>
        </Box>
      </Box>
    );
  }
}
