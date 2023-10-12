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
            } else {
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
        } else {
            if (e.target.value === "az" || e.target.value === "za" || e.target.value === "nacimiento") {
                dispatch(inOrder(e.target.value))
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
        pagination(1)
    }
    const handleOrder = (event) => {
        
        event.preventDefault()
        dispatch(inOrder(event.target.value))
        if (event.target.value === "todos") {
            dispatch(getAllDrivers())
        }
        pagination(1)

    }

    /* const handleOrderBirthDate = (event) => {
        console.log('event.target.value', event.target.value)
        event.preventDefault()
        dispatch(inOrder(event.target.value))
        if(event.target.value === "todos") {
            dispatch(getAllDrivers())
        }
    } */

    return (
        <div className="div">
            <form className="form" onSubmit={handleSearch}>
                <a href="/" className="regresar">Regresar</a>
                <a href="/create" className="crear">Crear Personaje</a>
                <input value={name} id="inputSearch" type="text" name="search" onChange={changeInputSearch}></input>
                <button type="submit">Buscar</button>
            </form>
            <main className="Nav">
                <div>
                    <h3 >Filtrar por:</h3>
                </div>
                <select name="alphabetic" onChange={(event) => handleOrder(event)}>
                    <option value="todos" selected>Alfabeto</option>
                    <option value="az" >A - Z</option>
                    <option value="za" >Z - A</option>
                </select>

                {/* <input
                    type="checkbox" name="filtrar por" value="az" id="az" onChange={handleOnCheckbox} />
                <label className="label" for="az"> A-Z </label>
                <div className="input-checkbox">
                    <input type="checkbox" name="filtrar por" value="za" id="za" onChange={handleOnCheckbox} />
                    <label className="label" for="za"> Z-A </label>
                </div> */}
                <select name="birth_date" onChange={(event) => handleOrder(event)}>
                    <option value="todos" selected>Nacimiento</option>
                    <option value="asc" >Ascendente</option>
                    <option value="desc" >Descendente</option>
                </select>
                {/* <div>
                    <input type="checkbox" name="filtrar por" value="nacimiento" id="nacimiento" onChange={handleOnCheckbox} />
                    <label className="label" for="nacimiento">Año de nacimiento</label>
                </div> */}
                <select name="source" onChange={(event) => handleOrder(event)}>
                    <option value="todos" selected>Todos</option>
                    <option value="api" >Api</option>
                    <option value="db" >Db</option>
                </select>

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