import React from "react";
import Card from "../Card/Card.component";
import "./cards.style.css"

function Cards({allDrivers}) {
    return (
        <div className="cards">
            {allDrivers.map((driver) => {
                const name = driver.forename + " " + driver.surname
                const image = driver.image
                const teams = driver.teams ? driver.teams.split(",") : ["There's no information"]
                const id = driver.id
                const date = driver.birth_date
                return <Card key={id} id={id} name={name} image={image} teams={teams} date={date} />
            })}
        </div>
    )
}

export default Cards;
