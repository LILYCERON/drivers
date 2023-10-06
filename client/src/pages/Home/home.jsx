import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar.component";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import Cards from "../../components/Cards/Cards.component";
import { filterAZ, getAllDrivers, getDriverByid,getAllTeams } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch()
  const allDrivers = useSelector((state) => state.allDrivers)
  //necesito ingresar al estado global para renderizar las cards
  useEffect(() => {
      dispatch(getAllDrivers())}, [])
  
  return (
    <div className='home'>
      <h2 className='home-title'>Mundo "Drivers"</h2>
      <div>
        <Navbar />
        <Cards/>
      </div>
    </div>
  )
}
export default Home;