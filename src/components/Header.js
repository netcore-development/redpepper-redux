import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-context-between">
      <div className="container">
        <h1>
          <Link to={"/"} className="text-light">
            Red Pepper
          </Link>
        </h1>
        <Link
          to={"/personas/nueva"}
          className="btn btn-success d-block d-md-inline-block"
        >
          Agregar Persona &#43;
        </Link>
      </div>
    </nav>
  );
};

export default Header;
