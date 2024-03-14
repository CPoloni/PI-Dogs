const axios = require("axios");
require("dotenv").config();
const { Dog, Temperament } = require("../db");
const { dataApi } = require("../utils/index"); //FUNCION REUTILIZABLE PARA TRAER INFO DE API

const { API_KEY } = process.env;

//!---------------GET/DOGS ---------------
const allDogs = async () => {
  try {
    // dogs from API
    const respApi = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
    );
    const dogsApi = dataApi(respApi);

    // dogs from DB
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

const dogByName = async (name) => {
  try {
    //by name from API
    const respApi = await axios.get(
      `https://api.thedogapi.com/v1/breeds/search?q=${name}&&api_key=${API_KEY}`
    );
    const dogsApi = dataApi(respApi);
    const dogsByNameApi = dogsApi.filter((el) => el.name === name);
    console.log(dogsByNameApi);

    //by name from DB
    const dogsDB = await Dog.findAll({
      where: {
        name: name,
      },
      include: [
        {
          model: Temperament,
          attributes: ["name"],
          through: { attributes: [] },
        },
      ],
    });

    // by name API + DB
    const dogs = [...dogsByNameApi, ...dogsDB];
    if (dogs.length > 1) {
      return dogs;
    } else {
      return "breed not found";
    }
  } catch {
    throw Error(error.message);
  }
};

module.exports = {
  allDogs,
  dogByName,
  // dogById,
  //createDog,
};
