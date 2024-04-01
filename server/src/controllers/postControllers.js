const { createDriverDB } = require("../controllers/createControl");

const postControllers = async (req, res) => {

    const {
        forename,
        surname,
        id,
        team,
        image,
        description,
        nationality,
        birth_date } = req.body

    try {

        if ((forename.length > 1 && forename.length < 12)
            && (surname.length > 1 && surname.length < 12)
            && (description.length < 150)) {
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

        } else {
            throw "One of the data entered does not comply with the requested conditions."
        }

        if (forename === "" || surname === "" || team === "" || birth_date === "") {
            throw "Some of the values sent are undefined"
        }

    } catch (error) {
        res.status(404).send(error)
    }
}

module.exports = {
    postControllers
}