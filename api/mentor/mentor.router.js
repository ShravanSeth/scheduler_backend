const router = require("express").Router();

const {
  createUser,
  login,
  getUserByUserId,
  getUsers,
  getUsersFromAOE,
  updateUsers,
  deleteUser
} = require("./mentor.controller");
router.get("/",  getUsers);
router.get("/:area",  getUsersFromAOE);
router.post("/", createUser);
router.get("/:id",  getUserByUserId);
router.post("/login", login);
router.patch("/",  updateUsers);
router.delete("/",  deleteUser);

module.exports = router;