import React from "react";
import "./Login.css"; // Importa los estilos
import logo from "./Marca Hidden Diamond sin fondo.png";

const LogIn = () => {
  return (
    <div className="login-container">
      <div className="login-logo">
        <img src={logo} alt="Logo" />
      </div>
      <h2 className="login-title">Iniciar Sesión</h2>
      <form>
        <input
          type="email"
          placeholder="Correo electrónico"
          className="login-input"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="login-input"
        />
        <div className="login-options">
          <label>
            <input type="checkbox" /> Recuérdame
          </label>
          <a href="/" className="forgot-password">
            ¿Contraseña olvidada?
          </a>
        </div>
        <button type="submit" className="login-button">
          Acceder
        </button>
      </form>
      <p className="register-link">
        ¿No estás registrado? <a href="/">Regístrate</a>
      </p>
    </div>
  );
};

export default LogIn;
