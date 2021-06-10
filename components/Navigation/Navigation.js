import React, { useState } from "react";
import { Box, Button, Icon, Link, Text } from "@chakra-ui/react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./Navigation.module.scss";
import Menu from "../Menu";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState("true");
  const handleClickMenu = () => {
    setIsOpen("true");
    console.log(isOpen);
  };
  return (
    <Box position="relative">
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      <Box
        position="relative"
        fontSize={["14px", "16px", "18px", "20px"]}
        width="full"
        background="#393939"
        border="5px"
        borderColor="gray.700"
        display="flex"
        justifyContent={{ lg: "space-between", sm: "center" }}
        p="30px 50px"
      >
        <Box
          color="white"
          fontSize="30px"
          position="absolute"
          right="20px"
          display={{ lg: "none", sm: "block", base: "none" }}
          onClick={handleClickMenu}
        >
          <BiMenuAltRight />
        </Box>
        <Link
          display={{ lg: "block", sm: "none", base: "none" }}
          color="white"
          href="/"
        >
          Vücud Kitle Endeksini Hesapla
        </Link>
        <Text
          color="white"
          fontWeight="bold"
          letterSpacing="5px"
          textAlign="center"
        >
          V<span className={styles.span}>ücud</span> K
          <span className={styles.span}>itle</span> E
          <span className={styles.span}>ndeksi</span>
        </Text>
        <Link
          href="/about"
          color="white"
          textAlign="end"
          display={{ lg: "block", sm: "none", base: "none" }}
        >
          Vucüd Kitle Endeksi Nedir ?
        </Link>
      </Box>
    </Box>
  );
}
