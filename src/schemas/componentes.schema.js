const Joi = require("joi");

const fabricanteSchema = Joi.object({
  nombre: Joi.string()
    .min(1)
    .required()
    .messages({
      "string.empty": "El nombre no puede estar vacío",
      "any.required": "El nombre del fabricante es obligatorio",
    }),
  
  direccion: Joi.string()
    .min(1)
    .required()
    .messages({
      "string.empty": "La dirección no puede estar vacía",
      "any.required": "La dirección es obligatoria",
    }),
  
  numeroContacto: Joi.number()
    .integer()
    .min(100000000) 
    .required()
    .messages({
      "number.base": "El número de contacto debe ser un número entero",
      "number.min": "El número de contacto debe tener al menos 9 dígitos",
      "any.required": "El número de contacto es obligatorio",
    }),
  
  pathImgPerfil: Joi.string()
    .uri()
    .optional()
    .messages({
      "string.uri": "La URL de la imagen de perfil debe ser válida",
    }),
});

module.exports = fabricanteSchema;
