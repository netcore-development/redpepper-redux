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

// creando su propio state
const initialState = {
  personas: [],
  error: null,
  loading: false,
  persona: {}
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
        loading: true,
        persona: {}
      };
    case DESCARGA_PERSONAS_EXITOSA:
      return {
        ...state,
        personas: action.payload,
        loading: false,
        error: false,
        persona: {}
      };
    case DESCARGA_PERSONAS_ERROR:
      return {
        ...state,
        personas: [],
        error: true,
        loading: false,
        persona: {}
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
    case COMENZAR_EDICION_PERSONA:
      return {
        ...state,
        error: null
      };
      case PERSONA_EDITADA_EXITO:
        return{
          ...state,
          error: null,
          personas: state.personas.map(persona  => persona.id === action.payload.id ? persona = action.payload : persona)
        };
      case PERSONA_EDITADA_ERROR:
        return{
          ...state,
          error: true
        };
    default:
      return state;
  }
}
