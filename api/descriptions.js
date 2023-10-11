const express = require("express");
const descriptionsRouter = express.Router();

const { getAllDescriptions } = require("../db/models/descriptions");

descriptionsRouter.get("/", async (req, res, next) => {
    try {
      const descriptions = await getAllDescriptions();
      res.send(descriptions);
    } catch (err) {
      console.log(err, "error getting descriptions");
      next()
    }
  });


module.exports = descriptionsRouter;