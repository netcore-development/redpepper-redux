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
  PERSONA_EDITAR_ERROR
} from "../types";

// creando su propio state
const initialState = {
  personas: [],
  error: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AGREGAR_PERSONA:
      return {
        ...state,
        error: null
      };
    case AGREGAR_PERSONA_EXITO:
      return {
        ...state,
        error: null,
        personas: [...state.personas, action.payload]
      };
    case AGREGAR_PERSONA_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case COMENZAR_DESCARGA_PERSONAS:
      return {
        ...state,
        loading: true
      };
    case DESCARGA_PERSONAS_EXITOSA:
      return {
        ...state,
        personas: action.payload,
        loading: false,
        error: false
      };
    case DESCARGA_PERSONAS_ERROR:
      return {
        ...state,
        personas: [],
        error: true,
        loading: false
      };
    case OBTENER_PERSONA_ELIMINAR:
      return {
        ...state,
        error: null
      };
    case PERSONA_ELIMINADA_EXITO:
      return {
        ...state,
        error: null,
        personas: state.personas.filter(
          persona => persona.id !== action.payload
        )
      };
    case PERSONA_ELIMINADA_ERROR:
      return {
        ...state,
        error: true
      };
    case OBTENER_PERSONA_EDITAR:
      return {
        ...state,
        error: null
      };
    case PERSONA_EDITAR_EXITO:
      return {
        ...state,
        error: null,
        persona: action.payload
      };
    case PERSONA_EDITAR_ERROR:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
}
