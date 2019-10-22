import React, { Fragment, useEffect } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { obtenerPersonasAction } from "../actions/personasAction";

// React-table
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { FaUserEdit, FaTimes } from "react-icons/fa";
import { Button } from "reactstrap";
// For moment JS
import moment from "moment";
import localization from "moment/locale/es";

// Setting spanish as global local for moment js
moment.updateLocale("es", localization);

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

  // Para DataTable

  function buscar(searchText, result) {
    console.log("Tu texto de busqueda es: " + searchText);
    console.log("El resultado es:");
    for (let i = 0; i < result.length; i++) {
      console.log(
        "Persona: " +
          result[i].id +
          ", " +
          result[i].nombres +
          ", " +
          result[i].apellidos
      );
    }
  }

  const mostrarTotal = (start, to, total) => {
    return (
      <p className="font-weight-bold">
        Registros del {start} al {to}, total {total}&nbsp;&nbsp;
      </p>
    );
  };

  const options = {
    page: 1, // which page you want to show as default
    sizePerPageList: [
      {
        text: "5",
        value: 5
      },
      {
        text: "10",
        value: 10
      },
      {
        text: "25",
        value: 25
      },
      {
        text: "50",
        value: 50
      },
      {
        text: "Todos",
        value: personas.length
      }
    ], // you can change the dropdown list for size per page
    sizePerPage: 5, // which size per page you want to locate as default
    pageStartIndex: 1, // where to start counting the pages
    paginationSize: 3, // the pagination bar size.
    prePage: "Anterior", // Previous page button text
    nextPage: "Siguiente", // Next page button text
    firstPage: "Primera", // First page button text
    lastPage: "Última", // Last page button text
    paginationShowsTotal: mostrarTotal, // Accept bool or function
    paginationPosition: "bottom", // default is bottom, top and both is all available
    hideSizePerPage: true, // You can hide the dropdown for sizePerPage
    //alwaysShowAllBtns: true, // Always show next and previous button
    //withFirstAndLast: false // Hide the going to First and Last page button
    afterSearch: buscar
  };

  function dateFormatter(cell: any) {
    if (!cell) {
      return "";
    }
    return `${
      moment(cell).format("DD/MMM/YYYY")
        ? moment(cell).format("DD/MMM/YYYY")
        : moment(cell).format("DD/MMM/YYYY")
    }`;
  }

  const btnModificar = () => {
    return (
      <Button color="info">
        <FaUserEdit size="15" />
      </Button>
    );
  };
  // . Para DataTable

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

                  <BootstrapTable
                    data={personas}
                    version="4"
                    pagination
                    options={options}
                    search={true}
                    className="table table-striped"
                    searchPlaceholder={"Buscar"}
                    
                  >
                    <TableHeaderColumn isKey dataField="id">
                      ID
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="nombres">
                      Nombres
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="apellidos">
                      Apellidos
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="sexo">Sexo</TableHeaderColumn>
                    <TableHeaderColumn
                      dataField="fechaNacimiento"
                      dataFormat={dateFormatter}
                    >
                      Fecha Nacimiento
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="direccion">
                      Dirección
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField="correoElectronico">
                      Correo Electrónico
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField={btnModificar} >
                      Actualizar
                    </TableHeaderColumn>

                    <TableHeaderColumn>Eliminar</TableHeaderColumn>
                  </BootstrapTable>
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
