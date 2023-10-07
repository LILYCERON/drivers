const{Driver, Teams}= require("../db")

const createDriverDB = async (forename, surname, id, team, image, description, nationality, birth_date) => {
  console.log('forename', forename)
    const newDriver = await Driver.create({forename, surname, id, team, image, description, nationality, birth_date})
    console.log('newDriver', newDriver)
    let driverDb = await Teams.findAll({
        where: { name: team },
      });
      newDriver.addTeams(driverDb);
    return newDriver;
}

module.exports= {createDriverDB}