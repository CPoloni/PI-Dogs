const axios = require("axios");
require("dotenv").config();
const { Dog, Temperament } = require("../db");
const { dataApi } = require("../utils/index"); //FUNCION REUTILIZABLE PARA TRAER INFO DE API

const { API_KEY } = process.env;

//!---------------GET/DOGS ---------------
const allDogs = async () => {
  try {
    // dogs de la API
    const respApi = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
    );
    const dogsApi = dataApi(respApi);

    // dogs de la DB
    const dogsDB = await Dog.findAll({
      include: [
        {
          model: Temperament,
          attributes: ["name"],
          through: { attributes: [] },
        },
      ],
    });

    // dogs API + DB
    const dogs = [...dogsApi, ...dogsDB];
    return dogs;
  } catch {
    throw Error(error.message);
  }
};
//!---------------GET/DOGS/NAME?=---------------

module.exports = {
  allDogs,
  // dogByName,
  // dogById,
  //createDog,
};
