const Driver = require("../models/Driver");
const Teams = require("../models/Teams");

const createDriverDB = async (forename, surname, id, team, image) => {
    const newDriver = await Driver.create({forename, surname, id, team, image})
    let driverDb = await Teams.findAll({
        where: { DriverTeams },
      });
      newDriver.addType(driverDb);
    return newDriver;
}

module.exports= {createDriverDB}