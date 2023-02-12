import React, { useState } from "react";
import "../stylesCss/App.css";
import DescriptionItem from "./DescriptionItem";

function Home() {
  const [show, setShow] = useState(false);
  return (
    <div className="">
      {show ? <DescriptionItem /> : null}
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
