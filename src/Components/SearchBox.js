import {
  Accordion,
  Box,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

export default function SearchBox() {
  const [articles, setArticles] = useState([]);
  const loadArticles = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/getArticles", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      response = await response.json();
      setArticles([...response]);
    } catch (error) {
      alert("An unexpected error occured");
    }
  };
  useEffect(() => {
    loadArticles();
  }, []);

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
      <Box>
        {articles.length > 0 ? (
          articles.map((item) => {
            return (
              <Accordion key={item._id} allowToggle>
                <ArticleCard {...item} />
              </Accordion>
            );
          })
        ) : (
          <Box></Box>
        )}
      </Box>
    </Box>
  );
}
