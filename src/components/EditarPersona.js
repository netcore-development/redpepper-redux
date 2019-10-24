import React, { useState, useEffect, Fragment, useRef } from "react";
import { FaUserEdit } from "react-icons/fa";
import InputMask from "react-input-mask";
// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  obtenerPersonaEditarAction,
  editarPersonaAction
} from "./../actions/personasAction";

import {
  validarFormularioAction,
  validacionExito,
  validacionError
} from "./../actions/validacionAction";

// Reactstrap
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  FormGroup,
  Form,
  Col,
  Row
} from "reactstrap";

// For moment JS
import moment from "moment";
import localization from "moment/locale/es";

// Setting spanish as global local for moment js
moment.updateLocale("es", localization);

const EditarPersona = ({ match, history }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  // Crear los refs
  const nombresRef = useRef("");
  const apellidosRef = useRef("");
  const sexoRef = useRef("");
  const fechaNacimientoRef = useRef("");
  const duiRef = useRef("");
  const nitRef = useRef("");
  const direccionRef = useRef("");
  const telefonoRef = useRef("");
  const correoElectronicoRef = useRef("");

  // Dispatch para ejecutar la funcion principal
  const dispatch = useDispatch();
  const editarProducto = producto => dispatch(editarPersonaAction(producto));
  const validarFormulario = () => dispatch(validarFormularioAction());
  const exitoValidacion = () => dispatch(validacionExito());
  const errorValidacion = () => dispatch(validacionError());

  // Obetener el id a editar
  const { id } = match.params;

  useEffect(() => {
    dispatch(obtenerPersonaEditarAction(id));
  }, [dispatch, id]);

  // Acceder al state
  const persona = useSelector(state => state.personas.persona);
  const error = useSelector(state => state.personas.error);
  const errorForm = useSelector(state => state.error.error);
  // cuando carga la API
  if (!persona) return "Cargando...";

  const submitEditarPersona = e => {
    e.preventDefault();

    // Validar el formulario
    validarFormulario();

    if (
      nombresRef.current.value.trim() === "" ||
      apellidosRef.current.value.trim() === "" ||
      sexoRef.current.value.trim() === "" ||
      fechaNacimientoRef.current.value.trim() === "" ||
      duiRef.current.value.trim() === "" ||
      nitRef.current.value.trim() === "" ||
      direccionRef.current.value.trim() === "" ||
      telefonoRef.current.value.trim() === "" ||
      correoElectronicoRef.current.value.trim() === ""
    ) {
      errorValidacion();
      return;
    }
    // No hay error
    exitoValidacion();
    // Guardar los  cambios
    editarProducto({
      id,
      nombres: nombresRef.current.value,
      apellidos: apellidosRef.current.value,
      sexo: sexoRef.current.value,
      fechaNacimiento: fechaNacimientoRef.current.value,
      dui: duiRef.current.value,
      nit: nitRef.current.value,
      direccion: direccionRef.current.value,
      telefono: telefonoRef.current.value,
      correoElectronico: correoElectronicoRef.current.value
    });

    // Redireccionar
    history.push("/");
  };

  return (
    <Fragment>
      <Row className="col-sm-6 col-md-4 offset-md-5 offset-sm-5">
        <Button
          className="btn btn-info d-block d-md-inline-block mt-3"
          onClick={() => {
            toggle();
            // dispatch(obtenerPersonaEditarAction(id));
          }}
        >
          Modificar
        </Button>
      </Row>
      {error ? (
        <div className="font-weight-bold alert alert-danger text-center mt-4">
          Hubo un error, intentalo de nuevo
        </div>
      ) : (
        <Modal
          isOpen={modal}
          toggle={toggle}
          size="lg"
          style={{ border: "0.5px solid black", borderRadius: "5px" }}
        >
          <Form className="py-5 px-5" onSubmit={submitEditarPersona}>
            <ModalHeader>Actualización Personas</ModalHeader>
            <ModalBody>
              <FormGroup row>
                <Col lg={1} />
                <Label for="nombres" lg={2} style={{ textAlign: "left" }}>
                  Nombres:
                </Label>
                <Col lg={8}>
                  <Input
                    type="text"
                    name="nombres"
                    id="personaNombres"
                    placeholder="Ingrese nombre de la persona"
                    defaultValue={persona.nombres}
                    innerRef={nombresRef}
                    //   onChange={e => guardarNombres(e.target.value)}
                  />
                </Col>
                <Col lg={1} />
              </FormGroup>
              {/*  .Nombre */}
              <FormGroup row>
                <Col lg={1} />
                <Label for="apellidos" lg={2} style={{ textAlign: "left" }}>
                  Apellidos:
                </Label>
                <Col lg={8}>
                  <Input
                    type="text"
                    name="apellidos"
                    id="personaApellidos"
                    placeholder="Ingrese apellidos de la persona"
                    defaultValue={persona.apellidos}
                    innerRef={apellidosRef}
                    //   onChange={e => guardarApellidos(e.target.value)}
                  />
                </Col>
                <Col lg={1} />
              </FormGroup>
              {/*  .Apellidos */}
              <FormGroup row>
                <Col lg={1} />
                <Label for="sexo" lg={2} style={{ textAlign: "left" }}>
                  Sexo:
                </Label>
                <Col lg={8}>
                  <Input
                    type="select"
                    name="sexo"
                    id="personaSexo"
                    defaultValue={persona.sexo}
                    innerRef={sexoRef}
                    //   onChange={e => guardarSexo(e.target.value)}
                  >
                    {/* <option value="" selected disabled hidden>
                      -- Seleccione una opción --
                    </option> */}
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                  </Input>
                </Col>
                <Col lg={1} />
              </FormGroup>
              <FormGroup row>
                <Col lg={1} />
                <Label
                  for="fechaNacimiento"
                  lg={2}
                  style={{ textAlign: "left" }}
                >
                  Fecha Nacimiento:
                </Label>
                <Col lg={8}>
                  <Input
                    type="date"
                    name="fechaNacimiento"
                    id="personaFechaNacimiento"
                    defaultValue={moment(persona.fechaNacimiento).format(
                      "YYYY-MM-DD"
                    )}
                    innerRef={fechaNacimientoRef}
                    //   onChange={e => guardarFechaNacimiento(e.target.value)}
                  />
                </Col>
                <Col lg={1} />
              </FormGroup>
              <FormGroup row>
                <Col lg={1} />
                <Label for="dui" lg={2} style={{ textAlign: "left" }}>
                  DUI:
                </Label>
                <Col lg={8}>
                  <Input
                    type="text"
                    name="dui"
                    id="personaDUI"
                    placeholder="Ingrese el DUI de la persona"
                    mask="99999999-9"
                    tag={InputMask}
                    defaultValue={persona.dui}
                    innerRef={duiRef}
                    //   onChange={e => guardarDui(e.target.value)}
                  />
                </Col>
                <Col lg={1} />
              </FormGroup>
              <FormGroup row>
                <Col lg={1} />
                <Label for="nit" lg={2} style={{ textAlign: "left" }}>
                  NIT:
                </Label>
                <Col lg={8}>
                  <Input
                    type="text"
                    name="nit"
                    id="personaNIT"
                    placeholder="Ingrese el NIT de la persona"
                    mask="9999-999999-999-9"
                    tag={InputMask}
                    defaultValue={persona.nit}
                    innerRef={nitRef}
                    //   onChange={e => guardarNit(e.target.value)}
                  />
                </Col>
                <Col lg={1} />
              </FormGroup>
              <FormGroup row>
                <Col lg={1} />
                <Label for="direccion" lg={2} style={{ textAlign: "left" }}>
                  Dirección:
                </Label>
                <Col lg={8}>
                  <Input
                    type="textarea"
                    name="direccion"
                    id="personaDireccion"
                    defaultValue={persona.direccion}
                    innerRef={direccionRef}
                    //   onChange={e => guardarDireccion(e.target.value)}
                  />
                </Col>
                <Col lg={1} />
              </FormGroup>
              <FormGroup row>
                <Col lg={1} />
                <Label for="telefono" lg={2} style={{ textAlign: "left" }}>
                  Teléfono:
                </Label>
                <Col lg={8}>
                  <Input
                    type="tel"
                    name="telefono"
                    id="personaTelefono"
                    mask="9999-9999"
                    tag={InputMask}
                    defaultValue={persona.telefono}
                    placeholder="Ingrese el teléfono de la persona"
                    innerRef={telefonoRef}
                    //   onChange={e => guardarTelefono(e.target.value)}
                  />
                </Col>
                <Col lg={1} />
              </FormGroup>
              <FormGroup row>
                <Col lg={1} />
                <Label
                  for="correoElectronico"
                  lg={2}
                  style={{ textAlign: "left" }}
                >
                  Correo electrónico:
                </Label>
                <Col lg={8}>
                  <Input
                    type="email"
                    name="correoElectronico"
                    id="personaEmail"
                    placeholder="Ingrese el correo electrónico de la persona"
                    defaultValue={persona.correoElectronico}
                    innerRef={correoElectronicoRef}
                    //   onChange={e => guardarCorreoElectronico(e.target.value)}
                  />
                  <Col lg={1} />
                </Col>
              </FormGroup>
            </ModalBody>

            {/* <div className="row"> */}
            <ModalFooter>
              <Button type="submit" color="primary">
                Actualizar
              </Button>{" "}
              {/* <Button color="secondary" onClick={"#!"}>
                Cancelar
              </Button> */}
            </ModalFooter>
            {/* </div> */}
          </Form>
          {errorForm ? (
          <div className="font-weight-bold alert alert-danger text-center mt-4">
            Todos los campos son obligatorios
          </div>
        ) : null}
        </Modal>
      )}
    </Fragment>
  );
};

export default EditarPersona;
