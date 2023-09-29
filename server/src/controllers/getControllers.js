const axios = require('axios')

const getDriverForID = async(req, res) => {

    const { id } = req.params
    const idDriver = parseInt(id);

    if (idDriver < 508 && Number(idDriver)) {
        const allInfo = await axios(`http://localhost:5000/drivers/${idDriver}`).then(
            (response) => res.send(response.data)
        )
    }else{
        res.send("El id ingresado debe ser un número menor a 508")
    }
}

const getAllDrivers= async (req, res) => {

    const { name } = req.query
    
    console.log(typeof name)
    try {
        
        const allInfo = await axios("http://localhost:5000/drivers");
        infoDrivers = allInfo.data

        if (name !== undefined) {

            if (name.length < 20){
                const searchName = name.toLowerCase()
                const similarToSearch = infoDrivers.filter((obj) =>
                    ((obj.name.forename).includes(searchName) || (obj.name.surname).includes(searchName)));

                if (similarToSearch.length > 0) {
                    res.send(similarToSearch.slice(0, 16))
                } else {
                    res.send("No existen resultados para su búsqueda")
                }
            } else {
                res.send("Dato de búsqueda ingresado excede los 20 caracteres")
            }
        } else {

            res.send(infoDrivers)
        }
    } catch (error) {
        res.status(404).send(error.message)
    }
}

module.exports ={
    getDriverForID,
    getAllDrivers
}