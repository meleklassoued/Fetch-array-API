const express = require("express");
const router = express.Router();
const {
  getPeople,
  createPerson,
  updatePerson,
  deletePerson,
} = require("../controller/controller");

router.get("/", getPeople);
router.post("/", createPerson);
router.put("/:id", updatePerson);
router.delete("/:id", deletePerson);

module.exports = router;
