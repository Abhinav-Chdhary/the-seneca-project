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
    <AccordionItem bg="#1e1c6b">
      <h2>
        <AccordionButton _expanded={{ bg: "tomato" }}>
          <Box as="span" flex="1" textAlign="left" fontSize={25}>
            {articleDetails.title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} fontSize={16} width="100%" border="1px">
        {articleDetails.body}
      </AccordionPanel>
    </AccordionItem>
  );
}
