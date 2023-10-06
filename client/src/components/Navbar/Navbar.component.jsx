import { useDispatch, useSelector } from "react-redux";
import { filterAZ, getAllTeams, getTeamsByfilter, getDriversName, getAllDrivers } from "../../redux/actions";
import { useEffect, useState } from "react";
function Navbar() {
    const dispatch = useDispatch();
    const allDrivers = useSelector((state) => state.allDrivers)
    const teams = useSelector((state) => state.teams)

    const [name, setName] = useState("")
    const [checked, setChecked] = useState(false)

    useEffect(() => { dispatch(getAllTeams()) }, [])

    const onChangeFilterType = (event) => {
        event.preventDefault()
        const dataToFilter = event.target.value
        dispatch(getTeamsByfilter(dataToFilter))
    }

    const changeInputSearch = (evento) => {
        const stringSearch = evento.target.value
        const differentCharacters = stringSearch.match(/[^A-Za-z\s]/);

        if (differentCharacters !== null) {
            alert(`caracter ${differentCharacters} no permitido, ingresa solo letras`)
            evento.target.value = ""
        }
        setName(stringSearch)
    }

    const handleSearch = (event) => {
        event.preventDefault()
        dispatch(getDriversName(name))
        setName('')

    }
    const handleisCheckAZ = (e) => {
        console.log(checked)
        if (checked) {
            dispatch(getAllDrivers())
            setChecked(e.target.checked)
        } else {
            e.preventDefault()
            dispatch(filterAZ(allDrivers))
            setChecked(e.target.checked)
        }
        console.log(e.target.checked)
    }



    return (
        <div>
            <form onSubmit={handleSearch}>
                <input value={name} id="inputSearch" type="text" name="search" onChange={changeInputSearch}></input>
                <button type="submit">Buscar</button>
            </form>
            <a href="/create">Crear Personaje</a>
            <hr />
            <label>
                (A-Z): <input checked={checked} id="CheckAZ" onChange={handleisCheckAZ} type="checkbox" name="myCheckbox" />
            </label>
            <label>
                (Z-A): <input type="checkbox" name="myCheckbox" />
            </label>
            <label for="teams">Filtrar por equipo: </label>
            <select name="teams" id="teams" onChange={onChangeFilterType}>
                {teams.map((team) => {
                    return (
                        <option key={team} value={team}>
                            {team}
                        </option>)
                })}
            </select>
        </div>
    )
}
export default Navbar;