import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar.component";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import Cards from "../../components/Cards/Cards.component";
import Pagination from "../../components/pagination/pagination"
import {getAllDrivers, getDriverByid,getAllTeams } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch()
  const allDrivers = useSelector((state) => state.allDrivers)
  const [currentPage, setCurrentPage] = useState(1)
  const [driversForPage, setDriversForpage] = useState(9)
  
  const indexOfLastDriver = currentPage * driversForPage;
  const indexOfFirstDriver = indexOfLastDriver - driversForPage;
  const currentDrivers = allDrivers.slice(indexOfFirstDriver, indexOfLastDriver)

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  //necesito ingresar al estado global para renderizar las cards
  useEffect(() => {
      dispatch(getAllDrivers())}, [currentPage])
  
  return (
    <div className='home'>
      <h2 className='home-title'>Mundo "Drivers"</h2>
      <div>
        <Navbar />
        <div>
        {allDrivers.length > 9 ? (
          <Pagination
            lengthAllDrivers={allDrivers.length}
            driversPerPage={driversForPage}
            pagination={pagination}
          />
        ) : null}
      </div>
        <Cards allDrivers={currentDrivers}/>
      </div>
    </div>
  )
}
export default Home;