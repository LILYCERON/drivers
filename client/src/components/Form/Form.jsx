import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { createDriver, getAllTeams, getTeamsByfilter } from "../../redux/actions";
import { useDispatch } from "react-redux";


function Form() {
    const dispatch = useDispatch()
    useEffect(() => { dispatch(getAllTeams()) }, [])
    const teams = useSelector((state) => state.teams)

    console.log('teams', teams)

    const [form, setForm] = useState(
        {
            forename: "",
            surname: "",
            team: "Ferrari",
            image: "",
            description: "",
            nationality: "",
            birth_date: "",
        }
    )

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createDriver(form))
    }
    const handleChange = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div>
            <a href="/home">Regresar al Home</a>
            <h3>Ingresa los datos para tu personaje en este mundo</h3>
            <form onSubmit={handleSubmit}>
                <label>forename:</label>
                <input name="forename" type="text" onChange={handleChange}></input>
                <label>surname:</label>
                <input name="surname" type="text" onChange={handleChange}></input>
                <label>Nationality:</label>
                <input name="nationality" type="text" onChange={handleChange}></input>
                <label>birth date:</label>
                <input name="birth_date" type="date" onChange={handleChange}></input>
                <label>Description:</label>
                <textarea name="description" onChange={handleChange}></textarea>
                <label>Imagen:</label>
                <input name="image" type="url" onChange={handleChange}></input>
                <select name="select">
                    <option key="sel" selected>select</option>
                    {teams.map((team) => {
                        return (<option value={team} name={team}  key={team}>{team}</option>)
                    })}
                </select>
                <button type="submit">Send Driver</button>
            </form>
        </div>
    )
}

export default Form;