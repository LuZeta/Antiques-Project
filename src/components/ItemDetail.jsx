import React, { useState } from "react";
import "../stylesCss/App.css";
import  DescriptionItem from "./DescriptionItem";

function ItemDetail() {
  const [show, setShow] = useState(false);

  return (
    <div className="">
      {show ? < DescriptionItem /> : null}
      <div className="login">
        <div className="form-container">
          <button
            className="primary-button login-b"
            onClick={() => setShow(!show)}
          >
            {" "}
            Detalle{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
