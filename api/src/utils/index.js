const axios = require("axios");
require("dotenv").config();
const { Dog, Temperament } = require("../db");

const { API_KEY } = process.env;

//---TRAIGO LA INFO QUE NECESITO DE DOGS DE LA API---/ /
const dataApi = async () => {
  try {
    const respApi = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
    );
    return respApi.data.map((e) => {
      return {
        id: e.id,
        name: e.name,
        height_min: parseInt(e.height.metric.split("-")[0]),
        height_max: parseInt(e.height.metric.split("-")[1]),
        weight_min: parseInt(e.weight.metric.split("-")[0]),
        weight_max: parseInt(e.weight.metric.split("-")[1]),
        life_span: e.life_span,
        temperament: e.temperament,
        image: e.image.url,
        created: false,
      };
    });
  } catch {
    throw Error(error.message);
  }
};

//---TRAIGO LA INFO QUE NECESITO DE DOGS DE LA DB---/ /

const dataDb = async () => {
  try {
    const dogsFromDb = await Dog.findAll({
      include: [
        {
          model: Temperament,
          attributes: ["name"],
          through: { attributes: [] },
        },
      ],
    });
    return dogsFromDb;
  } catch {
    throw Error(error.message);
  }
};

module.exports = { dataApi, dataDb };
