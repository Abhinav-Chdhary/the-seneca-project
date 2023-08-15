import { Box, Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import React from "react";
import ArticleCard from "./ArticleCard";

export default function SearchBox() {
  return (
    <Box
      backgroundImage="https://source.unsplash.com/qVotvbsuM_c"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      display="flex"
      flexDirection="column"
      alignItems="center"
      pt={3}
      height="100vh"
      fontSize={25}
    >
      <Box p={2}>What did Seneca say about </Box>
      <Box p={2}>
        <InputGroup size="md">
          <Input placeholder="shortness of life" />
          <InputRightAddon children="?" />
        </InputGroup>
      </Box>
      <ArticleCard />
      <ArticleCard />
    </Box>
  );
}
