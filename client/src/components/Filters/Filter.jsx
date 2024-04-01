import React, {useEffect}from "react";
import { useDispatch, useSelector} from "react-redux";
import {
    getAllDrivers,
    getDriverByTeam,
    getAllTeams,
    inOrderByDOB,
    inOrderByAlphabet,
    inOrderBySourceApi,
    inOrderBySourceDb
} from "../../redux/actions";



export default function Filters() {

    const onChangeFilterType = (event) => {
        event.preventDefault()
    
        const dataToFilter = event.target.value
        dispatch(getDriverByTeam(dataToFilter))
    
        if (event.target.value === "todos") {
            dispatch(getAllDrivers())
        }
        setCurrentPage(1)
    }
    
    const handleOrderBySource = (event) => {
        event.preventDefault()
        if (event.target.value === "api") {
            dispatch(inOrderBySourceApi(event.target.value))
        }
        if (event.target.value === "db") {
            dispatch(inOrderBySourceDb(event.target.value))
        }
        if (event.target.value === "todos") {
            dispatch(getAllDrivers())
        }
        setCurrentPage(1)
    }
    
    const handleOrderByDOB = (event) => {
        event.preventDefault()
        dispatch(inOrderByDOB(event.target.value))
        
        if (event.target.value === "todos") {
            dispatch(getAllDrivers())
        }
        setCurrentPage(1)
    }
    
    const handleOrderByAlphabet = (event) => {
        event.preventDefault()
        dispatch(inOrderByAlphabet(event.target.value))
        if (event.target.value === "todos") {
            dispatch(getAllDrivers())
        }
        setCurrentPage(1)
    }

    const teams = useSelector((state) => state.teams)
    const dispatch =useDispatch()
    
    useEffect(() => {
        dispatch(getAllDrivers())
        dispatch(getAllTeams())
    }, [])

    return (
        <>
            <main style={{ backgroundColor: 'red' }}>
                <div
                    style={{
                        marginLeft: '2rem',
                        marginRight: '2rem',
                        backgroundColor: "rgb(115, 110, 128) ",
                        display: "flex",
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        padding: '0rem 1rem 0 1rem',
                    }}>
                    <h4 >Filter by:</h4>
                    <select
                        style={{
                            margin: '1rem',
                        }}
                        name="alphabetic"
                        onChange={(event) => handleOrderByAlphabet(event)}>
                        <option value="todos" selected>alphabet</option>
                        <option value="az" >A - Z</option>
                        <option value="za" >Z - A</option>
                    </select>
                    <select
                        style={{
                            margin: '1rem'
                        }}
                        name="birth_date"
                        onChange={(event) => handleOrderByDOB(event)}>
                        <option value="todos" selected>Birth of date</option>
                        <option value="asc" >Ascending</option>
                        <option value="desc" >Descending</option>
                    </select>
                    <select
                        style={{
                            margin: '1rem'
                        }}
                        name="source"
                        onChange={(event) => handleOrderBySource(event)}>
                        <option value="todos" selected>All drivers</option>
                        <option value="api" >Api</option>
                        <option value="db" >Db</option>
                    </select>
                    <h4
                        style={{
                            margin: '1.5rem 0 0 ',
                        }}
                        for="Team"> Team: </h4>
                    <select
                        style={{
                            margin: '1rem'
                        }}
                        name="teams"
                        id="teams"
                        onChange={onChangeFilterType} >
                        <option value="todos" selected>Teams</option>
                        {teams.map((team) => {
                            return (
                                <option key={team} value={team}>
                                    {team}
                                </option>)
                        })}
                    </select>
                </div>
            </main >
        </>
    )
}