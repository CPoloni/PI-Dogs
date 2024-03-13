const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogRoute = require("./route_dogs");
const temperamentRoute = require("./route_temperament");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/dogs", dogRoute);
router.use("/temperament", temperamentRoute);

module.exports = router;
