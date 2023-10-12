
import { useNavigate } from "react-router-dom";
import "./landing.style.css"
import React from 'react';

function Landing() {
  const navigate = useNavigate()
  return (
    <div className="div1">
      <h1 className="h1">¡Bienvenido!</h1>
      <div className="text-container">
        <h2 className="h1">Has ingresado al mundo "Drivers"</h2>
        <div className="div2">
          <h5>El automovilismo ha sido una demostración del hombre por su pasión a la velocidad.</h5>
          <h5>Descubre y disfruta todos los personajes en el mundo de la adrenalina</h5>
        </div>
        <button type="button" onClick={() => navigate('/home')}>Iniciar</button>
      </div>
      <section className="Contact">
        <p>Ponte en contacto con nosotros para obtener más información </p>
        <a href="mailto:info@example.com">Enviar un correo electrónico</a>
      </section>
      <footer className="Footer">
        <p>&copy; 2024 Driver Company</p>
      </footer>
    </div>
  );
}

export default Landing;