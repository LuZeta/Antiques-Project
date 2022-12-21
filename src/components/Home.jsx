import React, { useState } from "react";
import "../stylesCss/App.css";
import ItemListContainer from "./ItemListContainer";

function Home() {
  const [show, setShow] = useState(false);
  return (
    <div className="">
      {show ? <ItemListContainer /> : null}
      <div className="login">
        <div className="form-container">
          <button
            className="primary-button login-b"
            onClick={() => setShow(!show)}
          >
            {" "}
            Conoce más{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
