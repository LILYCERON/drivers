import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { createDriver, getAllTeams } from "../../redux/actions";
import { useDispatch } from "react-redux";
import "./form.style.css"


function Form() {
    const dispatch = useDispatch()
    const teams = useSelector((state) => state.teams)

    const [filteredTeams, setfilteredTeams] = useState(teams)

    const [form, setForm] = useState(
        {
            forename: "",
            surname: "",
            team: [],
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbjDADpg95dAE9nmG_8onYdgVfkeDySCqpJmNNy5GiUTa-LS8zTXgg3q4CM0XB3UicC8&usqp=CAU",
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

        const array = Object.keys(form).map((clave) => form[clave]);

        if (array.some((value) => { value === "" })) {
            return alert("there are unfilled fields")
        }

        const infointheArray = array.filter((el) => el !== "")
        if (infointheArray.length > 1) {
            console.log('form.team', form.team)
            if ((form.team.length >= 1) && (form.forename !== "") && (form.birth_date !== "")) {
                dispatch(createDriver(form))
                setfilteredTeams(teams)
                setForm({
                    forename: "",
                    surname: "",
                    team: [],
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXbjDADpg95dAE9nmG_8onYdgVfkeDySCqpJmNNy5GiUTa-LS8zTXgg3q4CM0XB3UicC8&usqp=CAU",
                    description: "",
                    nationality: "",
                    birth_date: "",
                })
            } else {
                alert("faltan campos por rellenar")
            }
        } else (
            alert("No data to create driver,complete the fields")
        )
    }

    const handleChange = (e) => {
        e.preventDefault()

        const onlyLetters = /^[a-zA-Z\s]*$/

        if (e.target.name !== "description") {

            if (e.target.value.length < 12 || e.target.type === "url") {

                if (onlyLetters.test(e.target.value) || e.target.type === "date" || e.target.type === "url") {
                    setForm({
                        ...form,
                        [e.target.name]: e.target.value
                    })
                } else if (!onlyLetters.test(e.target.value)) {
                    alert("enter only letters (a-z)")

                } else {
                    return "enter dates is not valid"
                }
            } else {
                alert(`${e.target.name} should be minor to 12 characters`)
            }
        } else if (e.target.name === "description") {

            if (e.target.value.length < 150) {
                setForm({
                    ...form,
                    [e.target.name]: e.target.value
                })
            } else {
                alert(`${e.target.name} should be minor to 150 characters`)
            }

        }
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
        <div className="contenedor">
            {filteredTeams && <>
                <a href="/home">Regresar al Home</a>
                <form className="formulario" onSubmit={handleSubmit}>
                    <h2>Enter your driver's information</h2>
                    <div style={{margin:'2rem'}}>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', margin: '2rem' }}>
                            <div >
                                <label>Forename:</label>
                                <input
                                    className="inputForm"
                                    name="forename"
                                    type="text"
                                    value={form.forename}
                                    onChange={handleChange}>
                                </input>
                            </div>
                            <div>
                                <label>Surname:</label>
                                <input
                                    className="inputForm"
                                    name="surname"
                                    type="text"
                                    value={form.surname}
                                    onChange={handleChange}>
                                </input>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: '2rem' }}>
                            <div>
                                <label>Nationality:</label>
                                <input
                                    className="inputForm"
                                    name="nationality"
                                    type="text"
                                    value={form.nationality}
                                    onChange={handleChange}>
                                </input>
                            </div>
                            <div>
                                <label>Birth date:</label>
                                <input
                                    className="inputForm"
                                    name="birth_date"
                                    type="date"
                                    value={form.birth_date}
                                    onChange={handleChange}>
                                </input>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent:'space-between', margin: '2rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                                <label>Description:</label>
                                <input  className='inputForm' name="description" value={form.description} onChange={handleChange}>
                                </input>
                            </div>
                            <div>
                                <label>Imagen:</label>
                                <input className="inputForm" name="image" type="url" onChange={handleChange}></input>
                            </div>
                        </div>
                    </div>
                    <div style={{paddingBottom:'1rem', height:'6%'}}>
                    <select name="select" onChange={handleSelect}>
                        <option key="sel" value="selected">Select Team</option>
                        {filteredTeams.map((team, index) => {
                            return (<option value={team} name={team} key={team + index}>{team}</option>)
                        })}
                    </select>
                    {
                        form.team.map((team, index) => {
                            return (<p key={team + index + "1"}>{team} <button type="button" value={team} onClick={(e) => handleSelectedTeams(e)}>X</button> </p>)
                        })
                    }
                    </div>
                    <button type="submit">Send Driver</button>
                </form>
            </>}
        </div>
    )
}

export default Form;