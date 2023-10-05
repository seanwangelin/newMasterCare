const express = require("express");
const managersRouter = express.Router();

const { getAllManagers } = require("../db/models/managers");

managersRouter.get("/", async (req, res, next) => {
  try {
    const managers = await getAllManagers();
    res.send(managers);
  } catch (err) {
    console.log(err, "error getting managers");
    next()
  }
});

module.exports = managersRouter;
