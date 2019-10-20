import React, { useState } from "react";

// Redux
import { crearNuevaPersonaAction } from './../actions/personasAction';
import {useDispatch} from 'react-redux';

// Reactstrap
//reactstrap
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

const NuevaPersona = () => {
    //State
    const [nombres, guardarNombres] = useState('');
    const [apellidos, guardarApellidos] = useState('');
    const [sexo, guardarSexo] = useState('');
    const [fechaNacimiento, guardarFechaNacimiento] = useState('');
    const [dui, guardarDui] = useState('');
    const [nit, guardarNit] = useState('');
    const [direccion,guardarDireccion] = useState('');
    const [telefono, guardarTelefono] = useState('');
    const [correoElectronico, guardarCorreoElectronico] = useState('');
    
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);


    

    // Crear nueva Persona
    const submitNuevaPersona = e => {
      e.preventDefault();

    }


  return (
    <div>
      
      <Button className="btn btn-success d-block d-md-inline-block" onClick={toggle}>
        Agregar Persona &#43;
      </Button>

      <Modal
        isOpen={modal}
        toggle={toggle}
        size="md"
        style={{ border: "0.5px solid black", borderRadius: "5px" }}
      >
        <Form >
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
                  id="personName"
                  placeholder="Ingrese nombre de la persona"
                  // onChange={handleChange}
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
                  id="personLastName"
                  placeholder="Ingrese apellidos de la persona"
                  // onChange={handleChange}
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
                  id="selectSex"
                  // onChange={handleChange}
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
                  id="personBirthDate"
                  // onChange={handleChange}
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
                  id="personDUI"
                  placeholder="Ingrese el DUI de la persona"
                  mask="99999999-9"
                  tag={InputMask}
                  // onChange={handleChange}
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
                  id="personNIT"
                  placeholder="Ingrese el NIT de la persona"
                  mask="9999-999999-999-9"
                  tag={InputMask}
                  // onChange={handleChange}
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
                  id="personDireccion"
                  // onChange={handleChange}
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
                  id="personTel"
                  mask="9999-9999"
                  tag={InputMask}
                  placeholder="Ingrese el teléfono de la persona"
                  // onChange={handleChange}
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
                  id="personEmail"
                  placeholder="Ingrese el correo electrónico de la persona"
                  // onChange={handleChange}
                />
                <Col lg={1} />
              </Col>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            {/* <Button color="primary" onClick={toggle}>
              Agregar
            </Button> */}
            <input
              type="submit"
              className="btn btn-primary btn-md"
              value="Agregar" onClick={toggle}
            />{" "}
            <Button color="secondary" onClick={toggle}>
              Cancelar
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );

};

export default NuevaPersona;
