const express = require("express");
const collections = require("../models/models");
const router = express.Router();

router.get("/", (req, res) => {
  collections.find((err, docs) => {
    if (err) console.log(err);
    res.json(docs);
  });
});

module.exports = router;
