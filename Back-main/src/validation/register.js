const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Nombre obligatorio";
  }

  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email obligatorio";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email inválido";
  }

  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Contraseña obligatoria";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirme contraseña obligatoria";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "La contraseña debe tener al menos 6 caracteres";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Las contraseñas deben coincidir";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};