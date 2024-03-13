const { tempDogs } = require("../controllers/controller_temperament");

//---GET TEMPERAMENTS---//

getTemperament = async (req, res) => {
  try {
    const respTemperament = await tempDogs();
    return res.status(200).json(respTemperament);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getTemperament };
