import React from "react";
import '../stylesCss/App.css';

const Login = () => {
  return (
    <div className="login">
      <div className="form-container">
        <h1 className="title">Cambiar contraseña</h1>
        <p className="subtitle">
         Ingresa una nueva contraseña para tu cuenta
        </p>
        <form action="/" className="form">
          <label for="password" className="label">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            placeholder="*********"
            className="input input-password"
          />
          <label for="new-password" className="label">
            Contraseña
          </label>
          <input
            type="password"
            id="new-password"
            placeholder="*********"
            className="input input-password"
          />
          <input
            type="submit"
            value="Confirmar"
            className="primary-button login-b"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
