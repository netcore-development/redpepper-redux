import React from "react";
import { Link } from "react-router-dom";


import NuevaPersona from "./NuevaPersona";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-context-between">
      <div className="container">
        <h1>
          <Link to={"/"} className="text-light" style={{textDecoration: 'none'}}>
            Red Pepper
          </Link>
        </h1>
        {/* <Link className="btn btn-success d-block d-md-inline-block"> */}
          <NuevaPersona />
        {/* </Link> */}
      </div>
    </nav>
  );
};

export default Header;
