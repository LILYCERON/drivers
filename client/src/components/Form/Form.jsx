import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { createDriver, getAllTeams } from "../../redux/actions";
import { useDispatch } from "react-redux";


function Form() {
    const dispatch = useDispatch()
    const teams = useSelector((state) => state.teams)
    
    const [filteredTeams, setfilteredTeams] = useState(teams)

    const [form, setForm] = useState(
        {
            forename: "",
            surname: "",
            team: [],
            image: "",
            description: "",
            nationality: "",
            birth_date: "",
        }
    )

    useEffect(() => { dispatch(getAllTeams()) }, [])

    useEffect(() => {
      setfilteredTeams(teams)
    }, [teams])
    


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form', form)
        dispatch(createDriver(form))
        setfilteredTeams(teams)
        setForm({
            forename: "",
            surname: "",
            team: [],
            image: "",
            description: "",
            nationality: "",
            birth_date: "",
        })
    }
    const handleChange = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSelect = (e) => {
        const cleanedTeams = filteredTeams.filter((team) => team !== e.target.value)
            setForm({
            ...form,
            team: [...form.team, e.target.value]
        })
        setfilteredTeams(cleanedTeams)
    }

    const handleSelectedTeams = (event) => {
        event.preventDefault()
        console.log('event.target.value', event.target.value)
        const reFilteredTeams = form.team.filter((team) => team !== event.target.value)
         filteredTeams.push(event.target.value)
        console.log('fixFilteredTeams', filteredTeams)
        setForm({
            ...form,
            team: reFilteredTeams
        })
    }


    return (
        <div>
            {filteredTeams && <>
                <a href="/home">Regresar al Home</a>
                <h3>Ingresa los datos para tu personaje en este mundo</h3>
                <form onSubmit={handleSubmit}>
                    <label>forename:</label>
                    <input name="forename" type="text" value={form.forename} onChange={handleChange}></input>
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
                     <select name="select" onChange={handleSelect}>
                        <option key="sel" value="selected">select</option>
                        {filteredTeams.map((team, index) => {
                            return (<option value={team} name={team}  key={team + index}>{team}</option>)
                        })}
                    </select>
                    {
                        form.team.map((team, index) => {
                            return (<p key={team + index + "1"}>{team} <button type="button" value={team} onClick={(e) => handleSelectedTeams(e)}>X</button> </p>)
                        })
                    }
                    <button type="submit">Send Driver</button>
                </form>
            </>}
        </div>
    )
}

export default Form;