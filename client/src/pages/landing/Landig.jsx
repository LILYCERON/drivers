
import { useNavigate } from "react-router-dom";
import "./landing.style.css"
import React from 'react';

function Landing() {
  const navigate = useNavigate()
  return (
    <>
      <div className="div1">
        <div style={{ width: '95%', marginTop: '0.5rem' }}>
          <img width='180px' height='45px' src="src/utils/F1.webp" />
        </div>
        <hr style={{ width: '96%', color:'black' }}></hr>
        <div style={{ width: '80%', display: 'flex', flexDirection: 'column', paddingRight: '9rem', alignItems: 'center' }}>
          <h1>Welcome!</h1>
          <h2>you have arrived to the drivers world  </h2>
          <h4>click on 'start' to browse our API</h4>
          <button type="button" onClick={() => navigate('/home')}>Start</button>
        </div>
        <footer className="Footer">
          <p>&copy; 2024 Driver Company</p>
        </footer>
      </div>
    </>
  );
}

export default Landing;