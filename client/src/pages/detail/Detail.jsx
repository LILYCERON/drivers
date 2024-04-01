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
            <div style={{ display: "flex", flexDirection: 'row', alignItems:'flex-start', width:'90%', justifyContent:'space-between' }}>
                <a href="/home">Go Home</a>
                <img style={{ width: "180px", height: "45px"}} src="../src/utils/F1.webp" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', borderTop:'solid 0.5rem red', borderRadius:'2rem',paddingTop:'1rem'}}>
                <div style={{margin:'1rem'}}>
                    <label>Nationality: {infoDriver.nationality}</label>
                    <hr></hr>
                    <label>Born: {infoDriver.birth_date}</label>
                    <hr></hr>
                    <label>Teams: {infoDriver.teams}</label>
                    <hr></hr>
                    <text>Description: {infoDriver.description}</text>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center', width: '95%'}}>
                    {infoDriver.image ? <>
                        <img src={`${infoDriver.image}`} style={{ width: "300px", height: "300px", borderRadius: '10rem' }} />
                    </> : <h1>Loading...</h1>}
                    <label>Number Driver: {infoDriver.id}</label>
                    <label>Name: {infoDriver.forename}</label>
                    <label>Last Name: {infoDriver.surname}</label>
                </div>
            </div>
        </div>)
}
export default Detail;