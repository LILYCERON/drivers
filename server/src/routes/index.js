const { Router } = require("express");
const getdriversRoute = require("./getdriversRoute")
const getDriversTeamsroute =require("./getDriversTeamsroute")
const router = Router();

router.use('/drivers', getdriversRoute)

router.use("/teams",getDriversTeamsroute)

module.exports = router;
