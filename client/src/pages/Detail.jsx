import React, { useEffect } from "react";
import { getDriverByid } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card/Card.component";
import { useParams } from "react-router-dom";
function Detail() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const detailDriver = useSelector((state) => state.copyDrivers)
    useEffect(() => { dispatch(getDriverByid(id)) }, [])
    console.log('detailDriver', detailDriver)
    const url=detailDriver.url

    return (
        <div>
            <p>Referencia del conductor: {detailDriver.driverRef}</p>
            <p>nacionalidad: {detailDriver.nationality}</p>
            <text>Descripción: {detailDriver.description}</text>
        </div>)
}
export default Detail;