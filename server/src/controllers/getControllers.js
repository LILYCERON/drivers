const axios = require('axios')
const { Teams } = require('../db')
const { getInfoApi, getInfoDB, getInfoApiById } = require('../utils')

const getForTeam = async (req, res) => {

    try {
        const allInfo = await axios("http://localhost:5000/drivers")
        const drivers = allInfo.data
        const teams = [];

        drivers.map((obj) => {
            if (obj.teams !== undefined || null) {
                teams.push((obj.teams.split(",")))
            }
        })

        const onlyTeams = teams.flat(Infinity)
        const cleanTeams = onlyTeams.map((str) => str.trim())

        uniTeams = [... new Set(cleanTeams)]
        uniTeams.map((team) => {
            Teams.findOrCreate({ where: { name: team } })
        })

        res.send(uniTeams)

    } catch (error) {
        res.status(404).send(error.message)
    }
}
const getDriverForID = async (req, res) => {

    try {
        const { id } = req.params
        const infoDriversDb = await getInfoDB()

        if (id.length === 0) {
            throw "Data entered is undefined. The search detail is of type number."
        }

        if (id < 508 && Number(id)) {

            const idDriver = parseInt(id)
            const infoDriversApi = await getInfoApiById(idDriver)

            res.status(200).send(infoDriversApi)

        } else if (id) {

            const filteredById = infoDriversDb.filter(driver => driver.id === id)

            res.status(200).send(filteredById[0])
        } else {
            throw "El id ingresado debe ser un número menor a 508"
        }

    } catch (error) {
        res.status(404).send(error)
    }
}

const getAllDrivers = async (req, res) => {

    const { name } = req.query

    try {
        const infoDrivers = await getInfoApi()
        const driverArrayDB = await getInfoDB()
        const allDrivers = infoDrivers.concat(driverArrayDB)

        if (name !== undefined) {
            if (name.length < 23) {
                const searchName = name.toLowerCase()
                const similarToSearch = allDrivers.filter((obj) =>(obj.forename).toLowerCase().includes(searchName) || (obj.surname).toLowerCase().includes(searchName));

                if (similarToSearch.length > 0) {
                    res.send(similarToSearch.slice(0, 15))

                } else {
                    throw "There are no results for your search"
                }

            } else {
                throw "the data entered must not exceed twenty characters in length"
            }

        } else {
            res.json(allDrivers)
        }

    } catch (error) {
        res.status(404).json(error)
    }
}

module.exports = {
    getDriverForID,
    getAllDrivers,
    getForTeam
}