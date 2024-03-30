const validate = ({
  name,
  height_min,
  height_max,
  weight_min,
  weight_max,
  life_span,
  image,
  temperament,
}) => {
  const errors = {};

  //valida que sea una cadena unicamente de letras y no contenga ningun otro caracter
  const regexName = /^[a-zA-Z]+$/;
  const regexIntegerNum = /^\\d+$/;

  /* NAME VALIDATION*/
  if (!name.trim()) {
    errors.name = "Name is required";
  } else if (!regexName.test(name)) {
    errors.name = "The name entered must not contain numbers or symbols";
  } else if (name.lenght > 35 || name.length < 2) {
    errors.name =
      "The name entered must be a string between 2 and 35 characters.";
  }

  /* HEIGHT VALIDATION*/
  if (!height_min) {
    errors.height_min = "Minimun height is required";
  } else if (!regexIntegerNum.test(height_min)) {
    errors.height_min = "The value entered must be an integer";
  }

  if (!height_max) {
    errors.height_max = "Maximum height is required";
  } else if (!regexIntegerNum.test(height_max)) {
    errors.height_max = "The value entered must be an integer";
  } else if (height_max < height_min) {
    errors.height_max =
      "The value entered must be greater than the minimum height";
    //validar que el minimo no sea mayor al menor y que sean numeros enteros
  }

  /* WEIGHT VALIDATION*/
  if (!weight_min) {
    errors.weight_min = "Minimun weight is required";
  } else if (!regexIntegerNum.test(weight_min)) {
    errors.weight_min = "The value entered must be an integer";
  }

  if (!weight_max) {
    errors.weight_max = "Maximum weight is required";
  } else if (!regexIntegerNum.test(weight_max)) {
    errors.weight_max = "The value entered must be an integer";
  } else if (weight_max < weight_min) {
    errors.weight_max =
      "The value entered must be greater than the minimum weight";
    //validar que el minimo no sea mayor al menor y que sean numeros enteros
  }

  /* WEIGHT VALIDATION*/
  if (!life_span) {
    errors.life_span = "Life span is required";
  } else if (!regexIntegerNum.test(life_span)) {
    errors.life_span = "The value entered must be an integer";
  }

  /* IMAGE VALIDATION*/
  if (!image) {
    errors.image = "Image is required";
  }

  /*TEMPERAMENT VALIDATION*/
  if (!temperament) {
    errors.temperament = "Select at least one temperament";
  } else if (temperament.lenght > 6) {
    errors.temperament = "Select up to 6 temperaments";
  }

  //ver de podes ingresar otros

  return errors;
};

export default validate;
