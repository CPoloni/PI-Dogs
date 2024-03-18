const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { Dog } = require("../db");

const tempDogs = async () => {
  try {
    const respApi = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
    );
    //! ver este doble mapeo
    const temperaments = await respApi.data
      .map((e) => (e.temperament ? e.temperament : "Info not found"))
      .map((e) => e?.split(", "))
      .flat();
    // set()elimina los elementos duplicados de la matriz
    const tempUniq = [...new Set(temperaments)];

    return tempUniq;
  } catch {
    throw Error("acaaaaaaa");
  }
};

module.exports = { tempDogs };
