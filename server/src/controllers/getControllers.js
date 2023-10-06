const axios = require('axios')

const getForTeam = async (req, res) => {

    try{
        const allInfo = await axios("http://localhost:5000/drivers")

        const drivers = allInfo.data

        const teams = [];
        drivers.map((obj) => {
            if(obj.teams !== undefined || null){
                teams.push((obj.teams.split(",")))
            }
        })
        const onlyTeams = teams.flat(Infinity)
        const cleanTeams = onlyTeams.map((str) => str.trim())
        const uniTeams = [... new Set(cleanTeams)]
        res.send(uniTeams)

    }catch(error){
        
        res.status(404).send(error.message)  
    }
}
const getDriverForID = async(req, res) => {

    const { id } = req.params
    const idDriver = parseInt(id);

    if(id.length === 0){
        res.send("Dato ingresado es indefinido. EL detalle de busqueda es tipo nùmero")
    }

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
    
    try {
        
        const allInfo = await axios("http://localhost:5000/drivers");
        infoDrivers = allInfo.data

        if (name !== undefined) {

            if (name.length < 20){
                const searchName = name.toLowerCase()
                const similarToSearch = infoDrivers.filter((obj) =>
                    ((obj.name.forename).toLowerCase() + " " + (obj.name.surname).toLowerCase()).includes(searchName));

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
    getAllDrivers,
    getForTeam
}