const { Router } = require("express");
const axios = require("axios");
const { getDriverForID, getAllDrivers, getForTeam } = require("../controllers/getControllers");
const { postControllers } = require("../controllers/postControllers");
const router = Router();

router.use('/drivers/:id', getDriverForID)

router.use('/drivers', getAllDrivers)

router.use("/teams",getForTeam )

router.post('/drivers',postControllers )


module.exports = router;
