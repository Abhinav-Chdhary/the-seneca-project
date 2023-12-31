import {
  AccordionItem,
  Box,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
} from "@chakra-ui/react";
import React from "react";

export default function ArticleCard({ ...articleDetails }) {
  return (
    <AccordionItem bg="#1e1c6b" w={"xl"}>
      <AccordionButton _expanded={{ bg: "tomato" }}>
        <Box as="span" flex="1" textAlign="left" fontSize={25}>
          {articleDetails.title}
        </Box>
        <AccordionIcon />
      </AccordionButton>

      <AccordionPanel pb={4} fontSize={16} border="1px">
        <Box style={{ wordWrap: "break-word" }}>{articleDetails.body}</Box>
      </AccordionPanel>
    </AccordionItem>
  );
}
