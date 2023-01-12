const router = require("express").Router();

const {
  createUser,
  login,
  getUserByUserId,
  getUsers,
  updateUsers,
  deleteUser
} = require("./student.controller");
router.get("/",  getUsers);
router.post("/", createUser);
router.get("/:id",  getUserByUserId);
router.post("/login", login);
router.patch("/",  updateUsers);
router.delete("/",  deleteUser);

module.exports = router;