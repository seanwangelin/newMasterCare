const express = require("express");
const descriptionsRouter = express.Router();

const {
  getAllDescriptions,
  deleteDescription,
  createDescription,
  updateDescription,
  updateDescriptionTitle,
} = require("../db/models/descriptions");

descriptionsRouter.get("/", async (req, res, next) => {
  try {
    const descriptions = await getAllDescriptions();
    res.send(descriptions);
  } catch (err) {
    console.log(err, "error getting descriptions");
    next();
  }
});

descriptionsRouter.post("/newDescription", async (req, res, next) => {
  const description = req.body;
  const title = req.body;

  try {
    const newDescription = await createDescription(title, description);
    res.send(newDescription);
    console.log("description added!");
  } catch (err) {
    throw err;
  }
});

descriptionsRouter.put(
  "/updateDescription/:descriptionID",
  async (req, res) => {
    const { descriptionID } = req.params;
    const newDesc = req.body;

    try {
      const updatedDescription = await updateDescription(
        descriptionID,
        newDesc
      );
      res.send(updatedDescription);
      console.log("description updated!");
    } catch (err) {
      throw err;
    }
  }
);

descriptionsRouter.put(
  "/updateDescriptionTitle/:descriptionID",
  async (req, res) => {
    const { descriptionID } = req.params;
    const newDescTitle = req.body;

    try {
      const updatedDescriptionTitle = await updateDescriptionTitle(
        descriptionID,
        newDescTitle
      );
      res.send(updatedDescriptionTitle);
      console.log("description updated!");
    } catch (err) {
      throw err;
    }
  }
);

descriptionsRouter.delete("/delete/:descriptionID", async (req, res, next) => {
  const { descriptionID } = req.params;
  try {
    const deletedDescription = await deleteDescription(descriptionID);
    res.status(200).json({ message: "description removed" });

    return deletedDescription;
  } catch (err) {
    throw err;
  }
});

module.exports = descriptionsRouter;
