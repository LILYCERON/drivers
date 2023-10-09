const { createDriverDB } = require("../controllers/createControl");

const postControllers = async (req, res) => {
    
    const { forename, surname, id, team, image, description, nationality, birth_date } = req.body

    try {

        if ((forename.length > 1 && forename.length < 12) && (surname.length > 1 && surname.length < 12) && (description.length < 150)) {
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

        if(forename === "" || surname === "" || team === "" || birth_date === ""){
            
            res.send("Algunos de los valores enviados son indefinidos")
        }
    } catch (error) {
        res.status(404).send(error)
    }
}

module.exports = {
    postControllers
}