import React from "react";

const Pagination = ({ lengthAllDrivers, driversPerPage, pagination }) => {
  const pageNumbers = [];
  
  for (let i = 1; i <= Math.ceil(lengthAllDrivers/ driversPerPage); i++) {
    pageNumbers.push(i);
  }
  
  return (
    <div >
      {pageNumbers.map((number) => (
        <button 
        key={number}
        onClick={() => pagination(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;