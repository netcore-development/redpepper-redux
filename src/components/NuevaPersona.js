import React, { useState } from "react";

// Redux
import { crearNuevaPersonaAction } from './../actions/personasAction';
import {useDispatch} from 'react-redux';

const NuevaPersona = () => {
    //State
    const [nombres, guardarNombres] = useState('');
    const [apellidos, guardarApellidos] = useState('');
    const [sexo, guardarSexo] = useState('');
    



  return <p>Nueva Persona...</p>;
};

export default NuevaPersona;
