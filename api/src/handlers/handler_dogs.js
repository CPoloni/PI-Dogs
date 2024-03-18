const {
  allDogs,
  dogByName,
  dogById,
  createDog,
} = require("../controllers/controller_dogs");

//---GET DOGS---//
getDogs = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const respDogs = await dogByName(name);
      return res.status(200).json(respDogs);
    } else {
      const respDogs = await allDogs(name);
      return res.status(200).json(respDogs);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//---GET DOG BY ID---//
getDogById = async (req, res) => {
  const { id } = req.params;
  //const source = isNaN(id) ? "DB" : "API"; //!probar esto
  try {
    const respDogId = await dogById(id); //id params al controler
    return res.status(200).json(respDogId);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//---POST DOGS---//
postDogs = async (req, res) => {
  const input = req.body;
  try {
    const newDog = await createDog(input); //input se lo paso por params al controler
    return res.status(200).json(newDog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getDogs, getDogById, postDogs };
