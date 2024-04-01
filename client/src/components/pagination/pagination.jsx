import React, { useState } from "react";

const Pagination = ({ lengthAllDrivers, driversPerPage, pagination }) => {
  const pageNumbers = [];
  const [page, setPage] = useState(1)

  for (let i = 1; i <= Math.ceil(lengthAllDrivers / driversPerPage); i++) {
    pageNumbers.push(i);
  }


  const handlePage = (e, number) => {
    e.preventDefault()
    setPage(number)
    pagination(number)
  }

  return (
    <div style={{ justifyContent: 'flex-end' }} >
      <label>Total Pages {pageNumbers.length}, </label>
      <label>Number Page</label>
      <select style={{
        marginLeft: '1rem',
        marginRight: '1rem'
      }}>
        {pageNumbers.map((number) => {
          return <option
            name={number}
            key={number}
            onClick={(e) => handlePage(e, number)}
          >
            {number}
          </option>
        })}
      </select>
    </div>
  );
};

export default Pagination;