const { Router } = require("express");
const axios = require("axios");
const { response, set } = require("../server");
const React = require("react")
const { useEffect, useState } = require("react");
const { getDriverForID, getAllDrivers } = require("../controllers/getControllers");

const router = Router();

router.use('/drivers/:id',getDriverForID )

router.use('/drivers', getAllDrivers)



router.post('/drivers', async (req, res) => {
    const { forename, surname, id, team, image } = req.body

    if (forename.length < 21 && surname.length < 21) {

        try {
            const response = await createDriverDB(forename, surname, id, team, image)
            res.json(response)
        } catch (error) {
            res.send(error.message, error)
        }
    } else {
        res.send("Los datos ingresados no cumplen las condiciones mencionadas debajo de cada recuadro")
    }


})

router.use("/teams", async (req, res) => {
 
    try {
        const allInfo = await axios("http://localhost:5000/drivers")
    
        const drivers = allInfo.data

        const teams = [];
        const chooseTeam = drivers.map((obj) => teams.push(obj.teams))
        res.send(teams)
     
    } catch (error) {
        res.send(error.message, error)

    }
})

module.exports = router;
