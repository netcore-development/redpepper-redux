import {
    VALIDAR_FORMULARIO,
    VALIDAR_FORMULARIO_EXITO,
    VALDIDAR_FORMULARIO_ERROR
  } from "../types";

  // Funcion principal
  export function validarFormularioAction() {
    return dispatch => {
        dispatch(iniciarValidacion());
    }
  }

  export const iniciarValidacion = () => ({
      type: VALIDAR_FORMULARIO
  })