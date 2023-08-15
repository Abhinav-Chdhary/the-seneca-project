const express = require("express");
const router = express.Router();

router.get("/getArticles", (req, res) => {
  try {
    res.send(global.fetched_articles);
  } catch (error) {
    console.error(error.message);
    res.send("Server Error");
  }
});

module.exports = router;
