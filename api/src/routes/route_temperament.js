const { Router } = require("express");
const { getTemperament } = require("../handlers/handler_temperament");

const router = Router();

router.get("/", getTemperament);

module.exports = router;
