import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getAllDrivers } from '../../redux/actions';
import React, { useEffect } from "react";
import Card from "../Card/Card.component";
import "./cards.style.css"

function Cards({allDrivers}) {
    return (
        <div className="cards">
            {allDrivers.map((driver) => {
                const name = driver.name.forename + " " + driver.name.surname
                const image = driver.image.url
                const teams = driver.teams
                const id = parseInt(driver.id)
                const date = driver.dob
                return <Card key={id} id={id} name={name} image={image} teams={teams} date={date} />
            })}
        </div>
    )
}

export default Cards;
