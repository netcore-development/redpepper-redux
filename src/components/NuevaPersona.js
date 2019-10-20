import React, { useState } from "react";

// Redux
import { crearNuevaPersonaAction } from './../actions/personasAction';
import {useDispatch} from 'react-redux';

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
    
    // Crear nueva Persona
    const submitNuevaPersona = e => {
      e.preventDefault();

    }


  return (
    <p>Desde Agregar Persona...</p>
  );

};

export default NuevaPersona;
