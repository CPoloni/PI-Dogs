const validate = ({
  name,
  height_min,
  height_max,
  weight_min,
  weight_max,
  life_span,
  image,
}) => {
  const errors = {};

  //valida que sea una cadena unicamente de letras y no contenga ningun otro caracter
  const regexName = /^[a-zA-Z\s]+$/;
  const regexIntegerNum = /^\d+$/; //!

  /* NAME VALIDATION*/
  if (!name.trim()) {
    errors.name = " is required";
  } else if (!regexName.test(name)) {
    errors.name = " The name entered must not contain numbers or symbols";
  } else if (name.length < 2 || name.length > 20) {
    errors.name =
      " The name entered must be a string between 2 and 35 characters.";
  }
  //! VALIDAR LOS ENTEROS SIN REGEX
  /* HEIGHT VALIDATION*/
  if (!height_min) {
    errors.height_min = " is required";
  } else if (!regexIntegerNum.test(height_min)) {
    errors.height_min = " The value entered must be an integer";
  }

  if (!height_max) {
    errors.height_max = " is required";
  } else if (!regexIntegerNum.test(height_max)) {
    errors.height_max = " The value entered must be an integer";
  } else if (height_max < height_min) {
    errors.height_max =
      " The value entered must be greater than the minimum weight";
    //validar que el minimo no sea mayor al menor y que sean numeros enteros
  }

  /* WEIGHT VALIDATION*/
  if (!weight_min) {
    errors.weight_min = " is required";
  } else if (!regexIntegerNum.test(weight_min)) {
    errors.weight_min = " The value entered must be an integer";
  }

  if (!weight_max) {
    errors.weight_max = " is required";
  } else if (!regexIntegerNum.test(weight_max)) {
    errors.weight_max = " The value entered must be an integer";
  } else if (weight_max < weight_min) {
    errors.weight_max =
      " The value entered must be greater than the minimum weight";
    //validar que el minimo no sea mayor al menor y que sean numeros enteros
  }

  /* LIFE SPAN VALIDATION*/
  if (!life_span) {
    errors.life_span = " is required";
  }

  /* IMAGE VALIDATION*/
  if (!image) {
    errors.image = " is required";
  }
  //validar que sea un archivo .jpg

  return errors;
};

export default validate;
