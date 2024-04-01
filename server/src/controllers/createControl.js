const { Driver, Teams } = require("../db")

const createDriverDB = async (
  forename,
  surname,
  id,
  team,
  image,
  description,
  nationality,
  birth_date) => {

  const newDriver = await Driver.create({
    forename,
    surname,
    id, team,
    image,
    description,
    nationality,
    birth_date
  })

  let driverDb = await Teams.findAll({
    where: { name: team },
  });
  newDriver.addTeams(driverDb);

  return newDriver;
}

module.exports = { createDriverDB }