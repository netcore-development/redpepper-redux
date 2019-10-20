import {
  AGREGAR_PERSONA,
  AGREGAR_PERSONA_EXITO,
  AGREGAR_PERSONA_ERROR
} from "../types";

// axios
import clienteAxios from './../config/axios';

// añadir una nueva persona - Funcion Principal
export function crearNuevaPersonaAction(persona) {
    return (dispatch) => {
        dispatch(nuevaPersona());

        // insertar en la API
        clienteAxios.post('personas', persona).then(respuesta => {
            console.log(respuesta);
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