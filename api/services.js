const express = require("express");
const servicesRouter = express.Router();

const { getAllServices } = require("../db/models/services");

servicesRouter.get("/", async (req, res, next) => {
    try {
      const services = await getAllServices();
      res.send(services);
    } catch (err) {
      console.log(err, "error getting services");
      next()
    }
  });


module.exports = servicesRouter;