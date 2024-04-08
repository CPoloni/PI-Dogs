const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { Temperament } = require("../db");

const tempDogs = async () => {
  try {
    const respApi = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
    );

    const temperaments = await respApi.data
      .map((e) => (e.temperament ? e.temperament : "Info not found"))
      .map((e) => e?.split(", "))
      .flat();
    // set()elimina los elementos duplicados de la matriz
    const tempUni = [...new Set(temperaments)];
   
    tempUni.map((e) => {
      Temperament.findOrCreate({
        // lo busco, si no esta lo creo
        where: { name: e },
      });
    });

    const allTemperament = await Temperament.findAll();
    return allTemperament;
  } catch (error) {
    throw Error(error.message);
  }
};

module.exports = { tempDogs };
