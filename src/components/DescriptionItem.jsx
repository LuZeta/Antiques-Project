import React from "react";
import "../stylesCss/App.css";

function DescriptionItem({name, description,id}) {
  return (
    <div className="mensajeItem">
      <div className="cardMensaje">
        <h1 className="titleMensaje">{name}</h1>
        <p className="subtitleMensaje">
          {description}
        </p>
      </div>
    </div>
  );
}

export default  DescriptionItem;