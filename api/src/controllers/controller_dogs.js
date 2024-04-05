const { Dog, Temperament } = require("../db");
const { dataApi, dataDb } = require("../utils/index"); //FUNCION REUTILIZABLE PARA TRAER INFO DE API

//---------------GET/DOGS ---------------
const allDogs = async () => {
  try {
    // dogs from API
    dogsApi = await dataApi();

    // dogs from DB
    dogssDB = await dataDb();

    // dogs API + DB
    const dogs = [...dogsApi, ...dogssDB];

    return dogs;
  } catch {
    throw Error(error.message);
  }
};
//---------------GET/DOGS/NAME?=---------------
const dogByName = async (name) => {
  try {
    // dogs API + DB
    const dogs = await allDogs();
    //filtro por nombre
    const dogFilterByName = await dogs.filter((e) =>
      e.name.toLowerCase().includes(name.toLowerCase())
    );
    if (dogFilterByName.length > 0) {
      return dogFilterByName;
    }
    //else {
  } catch (error) {
    throw Error(error.message);
  }
};

//---------------GET/DOGS/:ID---------------
const dogById = async (id) => {
  try {
    const dogs = await allDogs();
    const searchDog = await dogs.find((dog) => dog.id == id);
    return searchDog;
  } catch {
    throw Error(error.message);
  }
};

//---------------POST/DOGS---------------
const createDog = async ({
  name,
  height_min,
  height_max,
  weight_min,
  weight_max,
  life_span,
  image,
}) => {
  try {
    //verifico que el usuario complet todos los datos
    if (
      !name ||
      !height_min ||
      !height_max ||
      !weight_min ||
      !weight_max ||
      !life_span ||
      !image
    ) {
      throw new Error("All fields must be complete");
    }
    // verifico por nombre, que dog no exista en la base de datos ni la api

    // dogs from API
    dogsApi = await dataApi();
    searchDog = dogsApi.find(
      (e) => e.name.toLowerCase() === name.toLowerCase()
    );

    if (!searchDog) {
      const newDog = await Dog.create({
        name,
        height_min,
        height_max,
        weight_min,
        weight_max,
        life_span,
        image,
      });

      const temperamentDb = await Temperament.findAll({
        where: { name: temperament },
      });

      await newDog.addTemperament(temperamentDb);
      console.log(newDog);
      return newDog;

      //return "The dog was created successfully";
    } else {
      throw new Error("The dog you are trying to create already exists");
    }
  } catch (error) {
    throw Error(error.message);
  }
};

module.exports = {
  allDogs,
  dogByName,
  dogById,
  createDog,
};
