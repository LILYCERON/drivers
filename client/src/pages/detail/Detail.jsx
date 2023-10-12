import React, { useEffect } from "react";
import { getDriverByid } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/Card.component";
import { useParams } from "react-router-dom";
import "./detail.style.css"
function Detail() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const infoDriver = useSelector((state) => state.driverDetail)
    useEffect(() => { dispatch(getDriverByid(id)) }, [])
    console.log('infoDriver', infoDriver)

    return (
        <div className="DetailCard">
                <a className= "buttonD" href="/home">Regresar al Home</a>
            {infoDriver.image ? <>
                <img  className="image"src={`${infoDriver.image}` } style={{width:"300px", height:"300px"} }/>
                <label>identificador: {infoDriver.id}</label>
                <label>Nombre: {infoDriver.forename}</label>
                <label>Alabelellido: {infoDriver.surname}</label>
                <label>nacionalidad: {infoDriver.nationality}</label>
                <label>nacimiento: {infoDriver.birth_date}</label>
                <label>Equipo: {infoDriver.teams}</label>
                <text>Descripción: {infoDriver.description}</text>
            </> : <h1>Loading...</h1>}
        </div>)
}
export default Detail;