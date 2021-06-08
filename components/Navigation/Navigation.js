import React from "react";
import { Box, Link, Text } from "@chakra-ui/react";
import styles from "./Navigation.module.scss";

export default function Navigation() {
  return (
    <Box
      background="#393939"
      border="5px"
      borderColor="gray.700"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p="30px 50px"
    >
      <Box>
        <Link fontSize="lg" color="white" href="/">
          Vücud Kitle Endeksini Hesapla
        </Link>
      </Box>
      <Text color="white" fontSize="3xl" fontWeight="bold" letterSpacing="5px">
        V<span className={styles.span}>ücud</span> K
        <span className={styles.span}>itle</span> E
        <span className={styles.span}>ndeksi</span>
      </Text>
      <Link href="/about" color="white" fontSize="lg">
        Vucüd Kitle Endeksi Nedir ?
      </Link>
    </Box>
  );
}
