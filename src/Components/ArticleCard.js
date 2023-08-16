import { Card, CardBody } from "@chakra-ui/react";
import React from "react";

export default function ArticleCard({ ...articleDetails }) {
  return (
    <Card
      variant={"elevated"}
      bg="#1e1c6b"
      boxShadow="4px 4px #ffffff"
      mt={1}
      mb={2.5}
    >
      <CardBody>{articleDetails.title}</CardBody>
    </Card>
  );
}
