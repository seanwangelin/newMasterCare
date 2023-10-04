const express = require("express");
const router = express.Router();

const {
    createManager,
    getAllManagers
} = require('../db/models/managers');

router.get('/', async (req, res) => {
    const managers = await getAllManagers();

    res.send({
        managers,
    });
});


module.exports = router;
