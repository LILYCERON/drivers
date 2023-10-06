
import "./landing.style.css" 
import React from 'react';

function Landing() {
  return (
    <div className="landing">
    <header className="header">
      <h1 className="h1">¡Bienvenido!</h1>
      <h1 className="h1">Has ingresado al mundo "Drivers"</h1>
      <div className="div1">
      <h5>El automovilismo ha sido una demostración del hombre por su pasión a la velocidad.</h5>
      <h5>Descubre y disfruta todos los personajes en el mundo de la adrenalina</h5>
      <a href="/home">Iniciar</a>
      </div>
    </header>
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