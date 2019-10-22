import React, { Fragment, useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { obtenerPersonasAction } from "../actions/personasAction";

import Persona from "./Persona";



const Personas = () => {
  // Mandar a llamar la action principal para retornar los personas
  const dispatch = useDispatch();

  useEffect(() => {
    // Personas cuando el componente este listo
    const cargarPersonas = () => dispatch(obtenerPersonasAction());
    cargarPersonas();
  }, [dispatch]);

  // Acceder al state
  const loading = useSelector(state => state.personas.loading);
  const error = useSelector(state => state.personas.error);
  const personas = useSelector(state => state.personas.personas);

  return (
    <Fragment>
      {error ? (
        <div className="font-weight-bold alert alert-danger text-center mt-4">
          Hubo un error...
        </div>
      ) : (
        <Fragment>
          <div id="contenedorClientes" className="container">
            <div className="row">
              <div className="col-md-12 center-block text-center py-5">
                <div className="card py-5 px-5">
                  <h2 style={{ textDecoration: "underline" }}>
                    Lista de Personas
                  </h2>
                  <br />
                  <table
                    id="personasDT"
                    className="table table-striped table-bordered table-responsive"
                    // style={{ width: "100%" }}
                  >
                    <thead>
                      <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Apellidos</th>
                      <th>Sexo</th>
                      <th>Fecha Nacimiento</th>
                      <th>Dirección</th>
                      <th>NIT</th>
                      <th>Modificar</th>
                      <th>Eliminar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {personas.map(persona => (
                        <Persona 
                          key={persona.id} 
                          persona={persona} 
                        />
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Apellidos</th>
                      <th>Sexo</th>
                      <th>Fecha Nacimiento</th>
                      <th>Dirección</th>
                      <th>NIT</th>
                      <th>Modificar</th>
                      <th>Eliminar</th>
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
          {/* .container */}
        </Fragment>
      )}

      {loading ? "Cargando..." : null}
    </Fragment>
  );
};

export default Personas;
