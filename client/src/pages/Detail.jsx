import React, { useEffect } from "react";
import { getDriverByid } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card/Card.component";
import { useParams } from "react-router-dom";
function Detail() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const infoDriver = useSelector((state) => state.driverDetail)
    useEffect(() => { dispatch(getDriverByid(id)) }, [])
    console.log('infoDriver', infoDriver)

    return (
        <div>
            {infoDriver.image ? <>
                <a href="/home">Regresar al Home</a>
                <img src={`${infoDriver.image}` } style={{width:"300px", height:"300px"} }/>
                <p>identificador: {infoDriver.id}</p>
                <p>Nombre: {infoDriver.forename}</p>
                <p>Apellido: {infoDriver.surname}</p>
                <p>nacionalidad: {infoDriver.nationality}</p>
                <p>nacimiento: {infoDriver.birth_date}</p>
                <p>Equipo: {infoDriver.teams}</p>
                <text>Descripción: {infoDriver.description}</text>
            </> : <h1>Loading...</h1>}
        </div>)
}
export default Detail;