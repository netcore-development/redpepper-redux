import React, { Fragment } from "react";

const Personas = () => {
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
                className="table table-striped table-bordered"
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
    </Fragment>
  );
};

export default Personas;
