/* --- CRUD --- */
const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", userSchema);

/*
const mongoose = require("mongoose");
const { Schema } = mongoose;

const UsuarioSchema = new Schema({
  nombre: { type: String, required: [true, "El nombre es obligatorio."] },
  correo: { type: String, required: [true, "El correo es obligatorio."] },
  contraseña: {
    type: String,
    required: [true, "La contraseña es obligatoria."],
  },
  // "rol" : {  type : String ,  required : [ true ,  "El rol es obligatorio." ]  },
  // "favoritos": [{
  //     type: Schema.Types.ObjectId,
  //     ref:'Proveedores.models'
  // }],
  // "negocio_id": {
  //     type: Schema.Types.ObjectId,
  //     ref:'Proveedores.models'
  // }
});

module.exports = mongoose.model("usuarios", UsuarioSchema);
*/
