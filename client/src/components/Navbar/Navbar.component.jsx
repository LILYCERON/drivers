import { useDispatch, useSelector } from "react-redux";
import { inOrder, getAllTeams, getDriversName, getAllDrivers, getDriverFordate, getDriverByTeam } from "../../redux/actions";
import { useEffect, useState } from "react";
import "./Navbar.style.css"
function Navbar({ pagination }) {
    const dispatch = useDispatch();
    const allDrivers = useSelector((state) => state.allDrivers)
    const date = useSelector((state) => state.date)
    const teams = useSelector((state) => state.teams)


    const [name, setName] = useState("")
    const [checked, setChecked] = useState(false)
    const [selectFilter, setSelectFilter] = useState(
        {
            az: "false",
            za: "false",
            Equipo: "false",
            nacimiento: "false"
        }
    )

    useEffect(() => { dispatch(getAllTeams()) }, [])

    const handleOnCheckbox = (e) => {
        if (e.target.checked) {
            if (e.target.value === "az") {
                dispatch(inOrder(e.target.value))
            }
            if (e.target.value === "za") {
                dispatch(inOrder(e.target.value))
            }
            if (e.target.value === "nacimiento") {
                alert("Desde fecha más reciente hasta la más antigua")
                dispatch(inOrder(e.target.value))
            }
            setSelectFilter({
                ...selectFilter,
                [e.target.value]: e.target.checked
            })
        }
        if (!e.target.checked) {
            if (e.target.value === "az" || e.target.value === "za" || e.target.value === "nacimiento") {
                dispatch(getAllDrivers())
                setSelectFilter({
                    ...selectFilter,
                    [e.target.value]: e.target.checked
                })
            }
        }

    }

    const onChangeFilterType = (event) => {
        event.preventDefault()
        const dataToFilter = event.target.value
        dispatch(getDriverByTeam(dataToFilter))
        pagination(1)
    }

    const changeInputSearch = (evento) => {
        const stringSearch = evento.target.value

        if (evento.target.value.length < 23) {
            const differentCharacters = stringSearch.match(/[^A-Za-z\s]/); //busca caracteres distintos a letras mayúsculas, minúsculas y espacios

            if (differentCharacters !== null) {
                alert(`${differentCharacters} it is not permitted, enter only letters (a-z)`)
                e.target.value = name
            }
            setName(stringSearch)
            pagination(1)

        } else {
            alert("your search must be less than 23 characters")
        }
    }

    const handleSearch = (event) => {
        event.preventDefault()
        if (name === "") {
            alert("Input something please")
        } else {
            dispatch(getDriversName(name))
            setName('')
        }
    }
    const handleResetFilters = () => {
        dispatch(getAllDrivers())
    }


    return (
        <div className="div">   
            <form className="form" onSubmit={handleSearch}>
                <a href="/" className="regresar">Regresar</a>
                <a href="/create" className="crear">Crear Personaje</a>
                <input value={name} id="inputSearch" type="text" name="search" onChange={changeInputSearch}></input>
                <button type="submit">Buscar</button>
            </form>
            <main className="main">
                <div>
                    <h3 >Filtrar por:</h3>
                </div>
                    <div className="input-checkbox" />
                    <input
                        type="checkbox" name="filtrar por" value="az" id="az" onChange={handleOnCheckbox} />
                    <label className="label" for="az"> A-Z </label>
                <div className="input-checkbox">
                    <input type="checkbox" name="filtrar por" value="za" id="za" onChange={handleOnCheckbox} />
                    <label className="label" for="za"> Z-A </label>
                </div>
                <div>
                    <input type="checkbox" name="filtrar por" value="nacimiento" id="nacimiento" onChange={handleOnCheckbox} />
                    <label className="label" for="nacimiento">Año de nacimiento</label>
                </div>
                <label for="Team"> Team: </label>
                <select name="teams" value="teams" id="teams" onChange={onChangeFilterType} >
                    {teams.map((team) => {
                        return (
                            <option key={team} value={team}>
                                {team}
                            </option>)
                    })}
                </select>
            </main >
            <button className="button" type="button" onClick={handleResetFilters}>Reset</button>
        </div>
    )
}
export default Navbar;