const express = require("express");
const servicesRouter = express.Router();

const {
  getAllServices,
  deleteService,
  createService,
} = require("../db/models/services");

servicesRouter.get("/", async (req, res, next) => {
  try {
    const services = await getAllServices();
    res.send(services);
  } catch (err) {
    console.log(err, "error getting services");
    next();
  }
});

servicesRouter.post("/newService", async (req, res, next) => {
  const service = req.body;

  try {
    const newService = await createService(service);
    res.send(newService);
    console.log("service added!");
  } catch (err) {
    throw err;
  }
});

servicesRouter.delete("/delete/:serviceID", async (req, res, next) => {
  const { serviceID } = req.params;
  try {
    const deletedService = await deleteService(serviceID);
    res.status(200).json({ message: "service removed" });

    return deletedService;
  } catch (err) {
    throw err;
  }
});

module.exports = servicesRouter;
