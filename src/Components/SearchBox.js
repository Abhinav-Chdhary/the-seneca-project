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
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

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
  //for search suggestions
  const url =
    "https://web-search-autocomplete.p.rapidapi.com/autocomplete?query=to&language=en&region=us";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "96c6d1bb3emsh36e1c6665ba1936p1902bdjsn80a504f557e1",
      "X-RapidAPI-Host": "web-search-autocomplete.p.rapidapi.com",
    },
  };
  useEffect(() => {
    const loadSuggestions = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        setSuggestions(result);
      } catch (error) {
        console.error(error);
      }
    };
    loadSuggestions();
  }, [search]);
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
      <Box p={2}>What would Seneca say about </Box>
      <Box p={2}>
        <InputGroup size="md">
          <Input
            placeholder="shortness of life"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <InputRightAddon children="?" />
        </InputGroup>
      </Box>
      <Accordion allowToggle>
        {articles.length > 0 ? (
          articles
            .filter((item) =>
              item.body.toLowerCase().includes(search.toLowerCase())
            )
            .map((item) => {
              return (
                <Box key={item._id}>
                  <ArticleCard {...item} />
                </Box>
              );
            })
        ) : (
          <Box></Box>
        )}
      </Accordion>
    </Box>
  );
}
