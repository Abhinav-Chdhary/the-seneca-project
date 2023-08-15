import { Box, Card, CardBody } from "@chakra-ui/react";
import React from "react";

export default function SearchBox() {
  return (
    <Box
      backgroundImage="https://source.unsplash.com/YIfFVwDcgu8"
      backgroundRepeat="no-repeat"
      backgroundSize="100vw"
      display="flex"
      flexDirection="column"
      alignItems="center"
      pt={3}
      height="100vh"
      fontSize={25}
    >
      <Box p={2}>What did Seneca say about </Box>
      <Box p={2}>
        <input type="text" />
        <span> ?</span>
      </Box>
      <Card variant={"elevated"}>
        <CardBody>This is a card</CardBody>
      </Card>
    </Box>
  );
}
