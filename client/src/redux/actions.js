import axios from "axios";

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

// creo una funcion para cada action y las exporto
// las funciones retornan una funcion async que recibe por argumento(dispatch),
//   esta funcion asyncrona va a retornar al dispatch({
//     type:..,
//   payload:  })

export const getDogs = () => {
  return async (dispatch) => {
    try {
      const resp = await axios.get("http://localhost:3001/dogs");
      const data = resp.data; // ver este .data
      return dispatch({ type: GET_DOGS, payload: data });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const getDogsName = (name) => {
  return async (dispatch) => {
    try {
      const resp = await axios.get(`http://localhost:3001/dogs?name=${name}`);
      const data = resp.data;
      return dispatch({ type: GET_DOGS_NAME, payload: data });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const getDogsId = (id) => {
  return async (dispatch) => {
    try {
      const resp = await axios.get(`http://localhost:3001/dogs/${id}`);
      const data = resp.data;
      return dispatch({ type: GET_DOG_ID, payload: data });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const clearDetail = () => {
  return { type: CLEAR_DOG_ID };
};

export const getTemperament = () => {
  return async (dispatch) => {
    try {
      const resp = await axios.get("http://localhost:3001/temperament");
      const data = resp.data;
      return dispatch({ type: GET_TEMPERAMENTS, payload: data });
    } catch (error) {
      throw Error(error.message);
    }
  };
};

export const orderAlp = (order) => {
  return { type: ORDER_ALP, payload: order };
};

export const orderWeight = (order) => {
  return { type: ORDER_WEIGHT, payload: order };
};

export const filterCreated = (filter) => {
  return { type: FILTER_API_DB, payload: filter };
};

export const createDog = (dog) => {
  return async (dispatch) => {
    try {
      const newDog = await axios.post("http://localhost:3001/dogs", dog);
      const data = newDog.data;
      return dispatch({ type: CREATE_DOG, payload: data });
    } catch (error) {
      throw Error(error.message);
    }
  };
};
