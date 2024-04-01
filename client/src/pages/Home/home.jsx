import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllDrivers, getAllTeams } from "../../redux/actions";
import Navbar from "../../components/Navbar/Navbar.component";
import Cards from "../../components/Cards/Cards.component";
import Pagination from "../../components/pagination/pagination"
import Filters from "../../components/Filters/Filter";

const Home = () => {

  const dispatch = useDispatch()
  const allDrivers = useSelector((state) => state.allDrivers)

  const [currentPage, setCurrentPage] = useState(1)
  const [driversForPage, setDriversForpage] = useState(9)
  const indexOfLastDriver = currentPage * driversForPage;
  const indexOfFirstDriver = indexOfLastDriver - driversForPage;
  const currentDrivers = [...allDrivers.slice(indexOfFirstDriver, indexOfLastDriver)]
  const [reset, setReset] = useState(false)
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //necesito ingresar al estado global para renderizar las cards
  useEffect(() => {
    dispatch(getAllDrivers())
    dispatch(getAllTeams())
  }, [])

  const handleResetFilters = () => {
    dispatch(getAllDrivers())
    pagination(1)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: '100%', paddingTop: '1rem' }}>
        <img style={{ marginLeft: '2rem' }} width='180px' height='45px' src="src/utils/F1.webp" />
      </div>
      <hr style={{ width: '100%' }}></hr>
      <div style={{ backgroundColor: 'red', width: '100%' }}>
        <Navbar pagination={pagination} />
        <Filters />
      </div>
      <button
        style={{
          width: 'fit-content',
          padding: '0.2rem 0.5rem',
          fontSize: '1rem',
          borderBlockEndWidth: '0.2rem',
          margin: '0.5rem',
          fontStyle: 'oblique',
          borderColor: 'rgba(36, 36, 33, 0.815)',
          borderRadius: '0.5rem',
          fontWeight: 'bold'
        }}
        type="button"
        onClick={handleResetFilters}>Reset</button>
      <div style={{ display: 'flex', width: '77rem', justifyContent: 'flex-end' }}>
        {allDrivers.length > 9 ? (
          <Pagination
            lengthAllDrivers={allDrivers.length}
            driversPerPage={driversForPage}
            pagination={pagination}
            reset={reset}
          />
        ) : null}
      </div>
      <Cards allDrivers={currentDrivers} />
    </div>
  )
}

export default Home;