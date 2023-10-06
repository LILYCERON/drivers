const { Router } = require("express");
const { getDriverForID, getAllDrivers, getForTeam } = require("../controllers/getControllers");
const { postControllers } = require("../controllers/postControllers");
const postDriversRoute = Router();

postDriversRoute.post('/drivers',postControllers )