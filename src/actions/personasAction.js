import {
  AGREGAR_PERSONA,
  AGREGAR_PERSONA_EXITO,
  AGREGAR_PERSONA_ERROR,
  COMENZAR_DESCARGA_PERSONAS,
  DESCARGA_PERSONAS_EXITOSA,
  DESCARGA_PERSONAS_ERROR,
  OBTENER_PERSONA_ELIMINAR,
  PERSONA_ELIMINADA_EXITO,
  PERSONA_ELIMINADA_ERROR,
  OBTENER_PERSONA_EDITAR,
  PERSONA_EDITAR_EXITO,
  PERSONA_EDITAR_ERROR,
  COMENZAR_EDICION_PERSONA,
  PERSONA_EDITADA_EXITO,
  PERSONA_EDITADA_ERROR
} from "../types";

import Swal from "sweetalert2";

// axios
import clienteAxios from "./../config/axios";

// añadir una nueva persona - Funcion Principal
export function crearNuevaPersonaAction(persona) {
  return dispatch => {
    dispatch(nuevaPersona());

    // insertar en la API
    clienteAxios
      .post("personas", persona)
      .then(respuesta => {
        // console.log(respuesta);
        // Si se inserta correctamente
        dispatch(agregarPersonaExito(persona));
        Swal.fire(
          "Almacenado",
          "La persona se añadió correctamente",
          "success"
        );
        // recargar el state
        dispatch(obtenerPersonasAction());
      })
      .catch(error => {
        console.log(error);

        // Si hay un error
        dispatch(agregarProductoError(true));
      });
  };
}

export const nuevaPersona = () => ({
  type: AGREGAR_PERSONA
});

export const agregarPersonaExito = persona => ({
  type: AGREGAR_PERSONA_EXITO,
  payload: persona
});

export const agregarProductoError = error => ({
  type: AGREGAR_PERSONA_ERROR,
  payload: error
});

// Obtener Listado de Personas (Consultar API)
export function obtenerPersonasAction() {
  return dispatch => {
    dispatch(obtenerPersonasComienzo());

    // Consultar la API
    clienteAxios
      .get("/personas")
      .then(respuesta => {
        // console.log(respuesta.data);
        dispatch(descargaPersonasExitosa(respuesta.data));
      })
      .catch(error => {
        // console.log(error);
        dispatch(descargaPersonasError());
      });
  };
}

export const obtenerPersonasComienzo = () => ({
  type: COMENZAR_DESCARGA_PERSONAS
});

export const descargaPersonasExitosa = personas => ({
  type: DESCARGA_PERSONAS_EXITOSA,
  payload: personas
});

export const descargaPersonasError = () => ({
  type: DESCARGA_PERSONAS_ERROR
});

// Funcion que elimina una persona en especifico
export function borrarPersonaAction(id) {
  return dispatch => {
    dispatch(obtenerPersonaEliminar());

    // Eliminado desde la API
    clienteAxios
      .delete(`/personas/${id}`)
      .then(respuesta => {
        // console.log(respuesta);
        dispatch(eliminarPersonaExito(id));
      })
      .catch(error => {
        // console.log(error);
        dispatch(eliminarPersonaError());
      });
  };
}

export const obtenerPersonaEliminar = () => ({
  type: OBTENER_PERSONA_ELIMINAR
});

export const eliminarPersonaExito = id => ({
  type: PERSONA_ELIMINADA_EXITO,
  payload: id
});

export const eliminarPersonaError = () => ({
  type: PERSONA_ELIMINADA_ERROR
});

// Obtener la Persona a Editar
export function obtenerPersonaEditarAction(id) {
  return dispatch => {
    dispatch(obtenerPersonaAction());

    // obtener persona de la api

    clienteAxios
      .get(`/personas/${id}`)
      .then(respuesta => {
        console.log(respuesta.data);
        dispatch(obtenerPersonaEditarExito(respuesta.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(obtenerPersonaEditarError());
      });
  };
}

export const obtenerPersonaAction = () => ({
  type: OBTENER_PERSONA_EDITAR
});

export const obtenerPersonaEditarExito = persona => ({
  type: PERSONA_EDITAR_EXITO,
  payload: persona
});

export const obtenerPersonaEditarError = () => ({
  type: PERSONA_EDITAR_ERROR
});

/**  Modifica una persona en la API y state */
export function editarPersonaAction(persona) {
  return dispatch => {
    dispatch(comenzarEdicionPersona());

    // Consultar la API
    clienteAxios
      .put(`/personas/${persona.id}`, persona)
      .then(respuesta => {
        // console.log(respuesta);
        dispatch(editarPersonaExito(respuesta.data));
        Swal.fire(
          "Almacenado",
          "La persona se actualizó correctamente",
          "success"
        );

        dispatch(obtenerPersonasAction());
      })
      .catch(error => {
        // console.log(error);
        dispatch(editarPersonaError());
      });
  };
}

export const comenzarEdicionPersona = () => ({
  type: COMENZAR_EDICION_PERSONA
});

export const editarPersonaExito = persona => ({
  type: PERSONA_EDITADA_EXITO,
  payload: persona
});

export const editarPersonaError = () => ({
  type: PERSONA_EDITADA_ERROR
});
