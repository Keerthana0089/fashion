const express = require("express");
const router = express.Router();
const postTshirtDesignController = require("../Controller/addDesign");
router.post('/save-design',postTshirtDesignController);

// can import signinpage here if require
module.exports = router;