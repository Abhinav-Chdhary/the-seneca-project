import { Card, CardBody } from "@chakra-ui/react";
import React from "react";

export default function ArticleCard() {
  return (
    <Card
      variant={"elevated"}
      bg="#1e1c6b"
      boxShadow="4px 4px #ffffff"
      mt={1}
      mb={2}
    >
      <CardBody>This is a card</CardBody>
    </Card>
  );
}
