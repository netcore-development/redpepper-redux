import {
  AGREGAR_PERSONA,
  AGREGAR_PERSONA_EXITO,
  AGREGAR_PERSONA_ERROR,
  COMENZAR_DESCARGA_PERSONAS,
  DESCARGA_PERSONAS_EXITOSA,
  DESCARGA_PERSONAS_ERROR
} from "../types";

// axios
import clienteAxios from './../config/axios';

// añadir una nueva persona - Funcion Principal
export function crearNuevaPersonaAction(persona) {
    return (dispatch) => {
        dispatch(nuevaPersona());

        // insertar en la API
        clienteAxios.post('personas', persona).then(respuesta => {
            // console.log(respuesta);
            // Si se inserta correctamente
            dispatch(agregarPersonaExito(persona));
            
        })
        .catch(error => {
            console.log(error);

            // Si hay un error 
            dispatch(agregarProductoError(true));
        })
        
    }
}

export const nuevaPersona = () => ({
    type: AGREGAR_PERSONA
});

export const agregarPersonaExito = (persona) => ({
    type: AGREGAR_PERSONA_EXITO,
    payload: persona
})

export const agregarProductoError = error => ({
    type: AGREGAR_PERSONA_ERROR,
    payload: error
})

// Obtener Listado de Personas (Consultar API)
export function obtenerPersonasAction() {
    return(dispatch) => {
        dispatch(obtenerPersonasComienzo());
        
        // Consultar la API
        clienteAxios.get('/personasd')
            .then(respuesta => {
                // console.log(respuesta.data);
                dispatch(descargaPersonasExitosa(respuesta.data));
            }).catch(error => {
                // console.log(error);
                dispatch(descargaPersonasError())
            })
    }
}

export const obtenerPersonasComienzo = () => ({
    type: COMENZAR_DESCARGA_PERSONAS
})

export const descargaPersonasExitosa = (personas) => ({
    type: DESCARGA_PERSONAS_EXITOSA,
    payload: personas
})

export const descargaPersonasError = () => ({
    type: DESCARGA_PERSONAS_ERROR
})