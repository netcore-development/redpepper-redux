import React, { useState, useEffect } from "react";
import { FaUserEdit } from "react-icons/fa";


// Redux
import { useDispatch, useSelector } from "react-redux";
import { obtenerPersonaEditarAction } from './../actions/personasAction';

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
  Col
} from "reactstrap";

import InputMask from "react-input-mask";


const EditarPersona = ({id}) => {

    
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  // Dispatch para ejecutar la funcion principal
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(obtenerPersonaEditarAction(id));
  },[dispatch, id]);

  // Acceder al state
  const persona = useSelector((state)=> state.personas.persona);

  // cuando carga la API
  if(!persona) return 'Cargando...'


  return (
    <div>
      <Button
        className="btn btn-info d-block d-md-inline-block"
        onClick={toggle}
      >
        <FaUserEdit size="15" />

      </Button>

      <Modal
        isOpen={modal}
        toggle={toggle}
        size="lg"
        style={{ border: "0.5px solid black", borderRadius: "5px" }}
      >
        <Form>
          <ModalHeader toggle={toggle}>Registro Personas</ModalHeader>
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
                //   onChange={e => guardarSexo(e.target.value)}
                >
                  <option value="" selected disabled hidden>
                    -- Seleccione una opción --
                  </option>
                  <option value="M">Masculino</option>
                  <option value="F">Femenino</option>
                </Input>
              </Col>
              <Col lg={1} />
            </FormGroup>
            <FormGroup row>
              <Col lg={1} />
              <Label for="fechaNacimiento" lg={2} style={{ textAlign: "left" }}>
                Fecha Nacimiento:
              </Label>
              <Col lg={8}>
                <Input
                  type="date"
                  name="fechaNacimiento"
                  id="personaFechaNacimiento"
                  defaultValue={persona.fechaNacimiento}
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
                //   onChange={e => guardarCorreoElectronico(e.target.value)}
                />
                <Col lg={1} />
              </Col>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              type="submit"
              color="primary"
              onClick={toggle}
            >
              Agregar
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancelar
            </Button>
          </ModalFooter>
        </Form>
        {/* {error ? (
          <div className="font-weight-bold alert alert-danger text-center mt-4">
            Todos los campos son obligatorios
          </div>
        ) : null} */}
      </Modal>
    </div>
  );
};

export default EditarPersona;
