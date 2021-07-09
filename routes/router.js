const express = require("express");
const router = express.router;
const {
  getPeople,
  createPeople,
  updatePeople,
  deletePeople,
} = require("../controller");

router.get("/", getPeople);
router.post("/", createPeople);
router.put("/:id", updatePeople);
router.delete("/:id", deletePeople);


