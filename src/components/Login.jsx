import React from "react";
import "../stylesCss/App.css";

const Login = () => {
  return (
    <div className="login">
      <div className="form-container">
        <form action="/" className="form">
          <label for="email" className="label">
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder=""
            className="input input-email"
          />

          <label for="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="*********"
            className="input input-password"
          />
          <form action="/" className="form">
            <input
              type="submit"
              value="Log in"
              className="primary-button login-b"
            />
          </form>
          <p className="resend">
            <span>Olvide mi contraseña</span>
            <a href="/"> Reenviar</a>
          </p>
          <button className="secondary-button login-b">Registrarme</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
