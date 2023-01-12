const router = require("express").Router();

const {
  createConnection,
  getMeetFromStudentId,
  getMeetFromMentorId,
} = require("./connect.controller");
router.post("/", createConnection);
router.get("/:stid",  getMeetFromStudentId);
router.get("/:mtid", getMeetFromMentorId);

module.exports = router;