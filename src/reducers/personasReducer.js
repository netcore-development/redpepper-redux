import {
  AGREGAR_PERSONA,
  AGREGAR_PERSONA_EXITO,
  AGREGAR_PERSONA_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTOS_EXITOSA,
  DESCARGA_PRODUCTOS_ERROR
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
    case COMENZAR_DESCARGA_PRODUCTOS:
      return {
        ...state,
        loading: true
      };
    case DESCARGA_PRODUCTOS_EXITOSA:
      return {
        ...state,
        productos: action.payload,
        loading: false,
        error: false
      };
    case DESCARGA_PRODUCTOS_ERROR:
      return {
        ...state,
        productos: [],
        error: true,
        loading: false
      };
    default:
      return state;
  }
}
