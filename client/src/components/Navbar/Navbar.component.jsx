import { useDispatch, useSelector } from "react-redux";
import { inOrder, getAllTeams, getDriversName, getAllDrivers, getDriverFordate, getDriverByTeam } from "../../redux/actions";
import { useEffect, useState } from "react";
function Navbar({pagination}) {
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
        <div>
            <form onSubmit={handleSearch}>
                <input value={name} id="inputSearch" type="text" name="search" onChange={changeInputSearch}></input>
                <button type="submit">Buscar</button>
            </form>
            <main>
                <div className="checkbox-container">
                    <h3>Filtrar por:</h3>
                    <div className="input-checkbox" />
                    <hr />
                    <input
                        type="checkbox" name="filtrar por" value="az" id="az" onChange={handleOnCheckbox} />
                    <label for="az">A-Z</label>
                </div>
                <div className="input-checkbox">
                    <input type="checkbox" name="filtrar por" value="za" id="za" onChange={handleOnCheckbox} />
                    <label for="za">Z-A</label>
                </div>
                <div className="input-checkbox">
                    <input type="checkbox" name="filtrar por" value="nacimiento" id="nacimiento" onChange={handleOnCheckbox} />
                    <label for="nacimiento">Año de nacimiento</label>
                </div>
                <input type="checkbox" name="filtrar por" value="Equipo" id="Equipo" onChange={handleOnCheckbox} />
                <label for="Equipo">(Equipo)</label>
                <select name="teams" value="teams" id="teams" onChange={onChangeFilterType}>

                    {teams.map((team) => {
                        return (
                            <option key={team} value={team}>
                                {team}
                            </option>)
                    })}
                </select>
            </main >
            <a href="/create">Crear Personaje</a>
            <button type="button" onClick={handleResetFilters}>Reset</button>
        </div>
    )
}
export default Navbar;