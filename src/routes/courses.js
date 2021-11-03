
const express = require("express");
const CourseController = require("../app/controllers/CourseController");

const router = express.Router();



//newController
router.get("/:slug", CourseController.show);


module.exports = router;
