const { Router } = require("express");
const { getForTeam } = require("../controllers/getControllers");

const getDriversTeamsroute = Router();

getDriversTeamsroute.get("/", getForTeam)

module.exports = getDriversTeamsroute;
