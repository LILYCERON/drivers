const {createDriverDB} = require("../controllers/createControl");

const postControllers = async (req, res) => {
    const { forename, surname, id, team, image, description, nationality, birth_date } = req.body

    if (forename.length < 21 && surname.length < 21) {

        try {
            const response = await
                createDriverDB(
                    forename,
                    surname,
                    id,
                    team,
                    image,
                    description,
                    nationality,
                    birth_date)

            res.json(response)
        } catch (error) {
            res.status(404).send(error.message)
        }
    } else {
        res.send("Los datos ingresados no cumplen las condiciones mencionadas debajo de cada recuadro")
    }
}

module.exports={
    postControllers
}