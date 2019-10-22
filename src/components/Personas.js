import React, { Fragment, useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { obtenerPersonasAction } from "../actions/personasAction";

// For icons
import { FaUserEdit, FaTimes } from "react-icons/fa";

// For moment JS
import moment from "moment";
import localization from "moment/locale/es";

// Setting spanish as global local for moment js
moment.updateLocale("es", localization);

const Personas = () => {
  // Mandar a llamar la action principal para retornar los productos
  const dispatch = useDispatch();

  useEffect(()=>{
    // Productos cuando el componente este listo
    const cargarPersonas = () => dispatch(obtenerPersonasAction());
    cargarPersonas();
  }, []);

  // Acceder al state
  const loading = useSelector((state) => state.personas.loading);

  return (
    <Fragment>
      <div id="contenedorClientes" className="container">
        <div className="row">
          <div className="col-md-12 center-block text-center py-5">
            <div className="card py-5 px-5">
              <h2 style={{ textDecoration: "underline" }}>Lista de Personas</h2>
              <br />
              <table
                id="personasDT"
                className="table table-striped table-bordered table-responsive"
                // style={{ width: "100%" }}
              >
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>Sexo</th>
                    <th>Fecha Nacimiento</th>
                    <th>Dirección</th>
                    <th>NIT</th>
                  </tr>
                </thead>
                <tbody></tbody>
                <tfoot>
                  <tr>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Sexo</th>
                    <th>Fecha Nacimiento</th>
                    <th>Dirección</th>
                    <th>NIT</th>
                  </tr>
                </tfoot>
              </table>
              
            </div>
            {/* .card */}
          </div>
          {/* /col-md-12  donde va  contenido card */}
        </div>
        {/* .row */}
      </div>
      {/*  .container */}
      {loading ? 'Cargando...' : null}
    </Fragment>
  );
};

export default Personas;
