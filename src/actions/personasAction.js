import {
  AGREGAR_PERSONA,
  AGREGAR_PERSONA_EXITO,
  AGREGAR_PERSONA_ERROR
} from "../types";

// añadir una nueva persona - Funcion Principal
export function crearNuevaPersonaAction(persona) {
    return (dispatch) => {
        dispatch(nuevaPersona());
        agregarPersonaExito(persona);
    }
}

export const nuevaPersona = () => ({
    type: AGREGAR_PERSONA
});

export const agregarPersonaExito = (producto) => ({
    type: AGREGAR_PERSONA_EXITO,
    payload: producto
})