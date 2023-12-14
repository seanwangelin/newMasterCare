const express = require("express");
const managersRouter = express.Router();

const {
  createNewManager,
  getAllManagers,
  deleteManager,
  updateManagerName,
  updateManagerPhone,
  updateManagerEmail,
  updateManagerTitle,
} = require("../db/models/managers");

managersRouter.get("/", async (req, res, next) => {
  try {
    const managers = await getAllManagers();
    res.send(managers);
  } catch (err) {
    console.log(err, "error getting managers");
    next();
  }
});

managersRouter.post("/newManager", async (req, res) => {
  const { name, title, phone, email } = req.body;

  try {
    const newManager = await createNewManager(name, title, phone, email);
    res.send(newManager);
    console.log("manager added!");
  } catch (err) {
    console.error(err, req.body);
  }
});

managersRouter.put("/updateManagerName/:managerID", async (req, res) => {
  const { managerID } = req.params;
  const newName = req.body;

  try {
    const updatedManagerName = await updateManagerName(managerID, newName);
    res.send(updatedManagerName);
    console.log("manager name updated!");
  } catch (err) {
    throw err;
  }
});

managersRouter.put("/updateManagerPhone/:managerID", async (req, res) => {
  const { managerID } = req.params;
  const newPhone = req.body;

  try {
    const updatedManagerPhone = await updateManagerPhone(managerID, newPhone);
    res.send(updatedManagerPhone);
    console.log("manager phone updated!");
  } catch (err) {
    throw err;
  }
});

managersRouter.put("/updateManagerEmail/:managerID", async (req, res) => {
  const { managerID } = req.params;
  const newEmail = req.body;

  try {
    const updatedManagerEmail = await updateManagerEmail(managerID, newEmail);
    res.send(updatedManagerEmail);
    console.log("manager email updated!");
  } catch (err) {
    throw err;
  }
});

managersRouter.put("/updateManagerTitle/:managerID", async (req, res) => {
  const { managerID } = req.params;
  const newTitle = req.body;

  try {
    const updatedManagerTitle = await updateManagerTitle(managerID, newTitle);
    res.send(updatedManagerTitle);
    console.log("manager title updated!");
  } catch (err) {
    throw err;
  }
});

managersRouter.delete("/delete/:managerID", async (req, res, next) => {
  const { managerID } = req.params;
  try {
    const deletedManager = await deleteManager(managerID);
    res.status(200).json({ message: "manager removed" });

    return deletedManager;
  } catch (err) {
    throw err;
  }
});

module.exports = managersRouter;
