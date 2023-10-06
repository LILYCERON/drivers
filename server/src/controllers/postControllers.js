const { createDriverDB } = require("../controllers/createControl");

const postControllers = async (req, res) => {
    
    const { forename, surname, id, team, image, description, nationality, birth_date } = req.body

    try {

        if (forename.length < 21 && surname.length < 21 && description.length < 100) {

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
        }else {
        res.send("Uno de los datos ingresados no cumple las condiciones solicitadas")}

        if(forename === undefined || surname === undefined || team === undefined || birth_date === undefined){
            
            res.send("Algunos de los valores enviados son indefinidos")
        }
    } catch (error) {
        res.status(404).send(error.message)
    }
}

module.exports = {
    postControllers
}