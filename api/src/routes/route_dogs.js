const { Router } = require("express");
const { getDogs, getDogById, postDogs } = require("../handlers/handler_dogs");

const router = Router();

router.get("/", getDogs);
router.get("/:id", getDogById);
router.post("/", postDogs);

module.exports = router;
