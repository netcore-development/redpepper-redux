import React, { Fragment, useEffect } from "react";

// Sweet Alert
import Swal from "sweetalert2";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { obtenerPersonasAction } from "../actions/personasAction";
import { borrarPersonaAction } from "../actions/personasAction";

// React-table
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import { FaTimes } from "react-icons/fa";
import { Button } from "reactstrap";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

// Componentes
import { obtenerPersonaEditarAction } from "./../actions/personasAction";

// For moment JS
import moment from "moment";
import localization from "moment/locale/es";
import EditarPersona from "./EditarPersona";

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

  const mostrarTotal = (from, to, size) => {
    return (
      <span className="react-bootstrap-table-pagination-total pl-2">
        Mostrando {from} al {to} de {size} Resultados
      </span>
    );
  };

  const options = {
    page: 1, // which page you want to show as default
    sizePerPage: 5, // which size per page you want to locate as default
    pageStartIndex: 1, // where to start counting the pages
    paginationSize: 3, // the pagination bar size.
    firstPageText: "Primera", // First page button text
    prePageText: "Anterior", // Previous page button text
    nextPageText: "Siguiente", // Next page button text
    lastPageText: "Última", // Last page button text
    nextPageTitle: "Primera página",
    prePageTitle: "Página Anterior",
    firstPageTitle: "Siguiente página",
    lastPageTitle: "última pagina",
    showTotal: true,
    paginationTotalRenderer: mostrarTotal, // Accept bool or function
    // paginationPosition: "bottom", // default is bottom, top and both is all available
    noDataText: "No se encontraron registros",
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
    ] // you can change the dropdown list for size per page
  };

  const dateFormatter = (cell: any) => {
    if (!cell) {
      return "";
    }
    return `${
      moment(cell).format("DD/MMM/YYYY")
        ? moment(cell).format("DD/MMM/YYYY")
        : moment(cell).format("DD/MMM/YYYY")
    }`;
  };

  // Btn Modificar

  // const [modal, setModal] = useState(false);
  // const toggle = () => setModal(!modal);

  const btnModificar = (cell, row) => {
    const personaSeleccionada = () => {
      dispatch(obtenerPersonaEditarAction(row.id));
    };
    return (
      <EditarPersona
        id={row.id}
        personaSeleccionada={personaSeleccionada}
      />
    );
  };

  // Acceder al state

  // Btn Eliminar
  const btnEliminar = (cell, row) => {
    return (
      <Button color="danger" onClick={() => confirmarEliminarProducto(row.id)}>
        <FaTimes size="15" />
      </Button>
    );
  };

  const columns = [
    {
      dataField: "id",
      text: "ID"
    },
    {
      dataField: "nombres",
      text: "Nombres"
    },
    {
      dataField: "apellidos",
      text: "Apellidos"
    },
    {
      dataField: "fechaNacimiento",
      text: "Fecha Nacimiento",
      formatter: dateFormatter
    },
    {
      dataField: "direccion",
      text: "Dirección"
    },
    {
      dataField: "telefono",
      text: "Teléfono"
    },
    {
      text: "Modificar",
      dataField: "modificar",
      isDummyField: true,
      formatter: btnModificar
    },
    {
      text: "Eliminar",
      dataField: "eliminar",
      isDummyField: true,
      formatter: btnEliminar
    }
  ];

  const TituloTabla = () => (
    <h2
      style={{
        borderRadius: "0.25em",
        textAlign: "center",
        color: "black",
        border: "1px solid green",
        padding: "0.5em"
      }}
    >
      Administración de Personas
    </h2>
  );

  const { SearchBar } = Search;

  // Preguntar al usuario
  const confirmarEliminarProducto = id => {
    Swal.fire({
      title: "¿Estás seguro/a?",
      text: "Una persona eliminada no se puede recuperar",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar!",
      cancelButtonText: "Cancelar"
    }).then(result => {
      if (result.value) {
        Swal.fire(
          "Eliminado!",
          "El registro se eliminó correctamente.",
          "success"
        );
        console.log(id);
        dispatch(borrarPersonaAction(id));
      }
    });
  };

  // . Para DataTable

  return (
    <Fragment>
      {error ? (
        <div className="font-weight-bold alert alert-danger text-center mt-4">
          Hubo un error...
        </div>
      ) : null}
      <div>
        <div id="contenedorClientes" className="container">
          <div className="row">
            <div className="col-md-12 center-block text-center py-5">
              <div className="card py-5 px-5">
                {<TituloTabla />}
                <br />
                <ToolkitProvider
                  keyField="id"
                  data={personas}
                  columns={columns}
                  search
                >
                  {props => (
                    <div>
                      <SearchBar
                        placeholder="Buscar..."
                        {...props.searchProps}
                      />
                      <button
                        className="btn btn-info mb-1 ml-3"
                        onClick={() => props.searchProps.onSearch("")}
                      >
                        Limpiar
                      </button>
                      <hr />

                      <BootstrapTable
                        {...props.baseProps}
                        bootstrap4
                        striped
                        hover
                        condensed
                        noDataIndication="No hay registros disponibles"
                        pagination={paginationFactory(options)}
                      />
                    </div>
                  )}
                </ToolkitProvider>
              </div>
              {/* .card */}
            </div>
            {/* /col-md-12  donde va  contenido card */}
          </div>
          {/* .row */}
        </div>
        {/* .container */}
      </div>

      {loading ? "Cargando..." : null}
    </Fragment>
  );
};

export default Personas;
