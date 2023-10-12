import React, {useState} from "react";
import './pagination.style.css'

const Pagination = ({ lengthAllDrivers, driversPerPage, pagination }) => {
  const pageNumbers = [];
  
  for (let i = 1; i <= Math.ceil(lengthAllDrivers/ driversPerPage); i++) {
    pageNumbers.push(i);
  }

  const [page, setPage] = useState(1)

  const handlePage = (e, number) => {
    e.preventDefault()
    setPage(number)
    pagination(number)
  }
  
  return (
    <div className="div" >
      {pageNumbers.map((number) => (
        <button 
        className={page === number && "active"}
        name={number}
        key={number}
        onClick={(e) => handlePage(e, number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;