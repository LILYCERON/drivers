const { Driver, Teams } = require('../db')
const axios = require('axios')

const getInfoDB = async () => {

    const driverDB = await Driver.findAll({
        include: {
            model: Teams,
            attributes: ["name"],
            through: {
                attributes: [],
            },
        },
    });

    const driverArrayDB = driverDB.map((dri) => {
        const parseDriver = dri.toJSON()

        return ({
            id: parseDriver.id,
            forename: parseDriver.forename,
            surname: parseDriver.surname,
            nationality: parseDriver.nationality,
            description: parseDriver.description,
            image: parseDriver.image,
            birth_date: parseDriver.birth_date,
            teams: parseDriver.teams.map((team) => team.name).join(', '),
            createdInDb: true
        })
    })

    return driverArrayDB
}

const getInfoApi = async () => {

    const allInfo = await axios("http://localhost:5000/drivers");
    const infoDrivers = allInfo.data.map((driver) => {
        return ({
            id: driver.id,
            forename: driver.name.forename,
            surname: driver.name.surname,
            nationality: driver.nationality,
            description: driver.description,
            image: driver.image.url || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbjDADpg95dAE9nmG_8onYdgVfkeDySCqpJmNNy5GiUTa-LS8zTXgg3q4CM0XB3UicC8&usqp=CAU",
            birth_date: driver.dob,
            teams:driver.teams,
            createdInDb: false
        })
    })

    return infoDrivers
}

const getInfoApiById = async (idDriver) => {

    const allInfo = await axios(`http://localhost:5000/drivers/${idDriver}`);

    return ({
        id: allInfo.data.id,
        forename: allInfo.data.name.forename,
        surname: allInfo.data.name.surname,
        nationality: allInfo.data.nationality,
        description: allInfo.data.description,
        image: allInfo.data.image.url,
        birth_date: allInfo.data.dob,
        teams: allInfo.data.teams
    })
}

module.exports = {
    getInfoDB,
    getInfoApi,
    getInfoApiById
}