import React from "react";
import "../stylesCss/App.css";
import sendmail from "../assets/sendmail.png";

const RecoveryPassword = () => {
  return (
    <div className="login">
      <div className="form-container">
        <h1 className="title">El Email ha sido enviado!</h1>
        <p className="subtitle">
          Por favor, revisa tu bandeja de entrada y sigue las instucciones
        </p>
        <div className="email-image">
          <img src={sendmail} alt="logo" />
        </div>
        <form action="/" className="form">
          <form action="/" className="form">
            <input
              type="submit"
              value="Log in"
              class="primary-button login-b"
            />
          </form>
          <p className="resend">
            <span>No ha recibido su email?</span>
            <a href="/"> Reenviar</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RecoveryPassword;
