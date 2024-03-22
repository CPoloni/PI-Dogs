/*ACTIONS TYPES*/
import {
  GET_DOGS,
  GET_DOGS_NAME,
  // GET_DOGS_NAME,
  // GET_DOG_ID,
  // GET_TEMPERAMENTS,
  // CREATE_DOG,
  // ORDER_ALP,
  // ORDER_WEIGHT,
  // FILTER_API_DB,
  // FILTER_TEMPERAMENT,
} from "./actionsTypes";

const initialState = { allDogs: [], dogsCopy: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state, //devuelve una copia del estado
        allDogs: action.payload, //modifica allDogs
        dogsCopy: action.payload, //copia del estado alldogs para poder regresar al estado original
      };
    case GET_DOGS_NAME:
      return {
        ...state,
        allDogs: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
