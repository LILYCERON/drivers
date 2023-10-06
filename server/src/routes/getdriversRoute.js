const { Router } = require("express");
const { getDriverForID, getAllDrivers} = require("../controllers/getControllers");
const { postControllers } = require("../controllers/postControllers");
const driversRoute = Router();

driversRoute.get('/', getAllDrivers)

driversRoute.get('/:id', getDriverForID)

driversRoute.post('/drivers',postControllers )

module.exports = driversRoute;
