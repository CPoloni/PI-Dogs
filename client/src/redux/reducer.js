/*ACTIONS TYPES*/
import {
  GET_DOGS,
  GET_DOGS_NAME,
  GET_DOG_ID,
  CLEAR_DOG_ID,
  GET_TEMPERAMENTS,
  CREATE_DOG,
  ORDER_ALP,
  ORDER_WEIGHT,
  FILTER_API_DB,
  // FILTER_TEMPERAMENT,
} from "./actionsTypes";

const initialState = {
  allDogs: [],
  dogsCopy: [],
  dogDetail: [],
  temperaments: [],
};

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
    case GET_DOG_ID:
      return {
        ...state,
        dogDetail: action.payload,
      };
    case CLEAR_DOG_ID:
      return {
        ...state,
        dogDetail: [],
      };

    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };

    case CREATE_DOG:
      return {
        ...state,
      };

    case ORDER_ALP:
      const nameOrder =
        action.payload === "asc"
          ? [...state.allDogs].sort((a, b) => a.name.localeCompare(b.name))
          : [...state.allDogs].sort((a, b) => b.name.localeCompare(a.name));
      return {
        ...state,
        allDogs: nameOrder,
      };
    case ORDER_WEIGHT:
      const weightOrder =
        action.payload === "asc"
          ? [...state.allDogs].sort((a, b) => a.weight_min - b.weight_min)
          : [...state.allDogs].sort((a, b) => b.weight_min - a.weight_min);
      return {
        ...state,
        allDogs: weightOrder,
      };
    //! trabajando aca

    //Filtro dogs segun origen (API - DB)
    case FILTER_API_DB:
      const createFilter =
        action.payload === "created"
          ? state.allDogs.filter((dog) => dog.created === true)
          : state.allDogs.filter((dog) => !dog.created);
      return {
        ...state,
        allDogs: createFilter,
      };

    default:
      return state;
  }
};

export default reducer;
