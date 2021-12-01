const mongoose = require('mongoose')
const {Schema}= mongoose

const ProveedorSchema = new Schema({

  "contacto_id" : {type: Schema.Types.ObjectId, ref:'Usuarios.models'},
  "nombre_empresa" : { type : String ,  required : [ true ,  "El nombre del negocio es obligatorio." ]  } ,
  "eslogan" :  { type : String ,  required : [ true ,  "El eslogan es obligatorio." ]  } ,
  "descripcion_corta" : String ,
  "descripcion_empresa" : String ,
  "imagen_destacada" :  { type : String , default:"" },
  "color_tema":{type : String , default:"gray" },
  "telefono" :  { type : Number ,  required : [ true ,  "El teléfono es obligatorio." ]  } ,
  "direccion" :  { type : String ,  required : [ true ,  "La dirección es obligatoria." ]  } ,
  "email" :  { type : String ,  required : [ true ,  "El email es obligatorio." ]  } ,
  "horario_atencion" : { type : String }  ,
  "ubicacion_mapa" :  [{ type : Object ,  required : [ true ,  "La ubicación en el mapa es obligatoria." ]  } ],
  "productos": [ {type : Object} ]
})

module.exports = mongoose.model('proveedores',ProveedorSchema)