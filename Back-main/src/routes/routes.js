const {Router} = require('express')
const router = Router()
const usuarioController = require('../controllers/Usuario.controller')
const proveedorController = require('../controllers/Proveedor.controller')
const Auth = require('../helper/Auth')

//Rutas Usuarios

router.get("/usuario/all"       , usuarioController.getAllUsuarios);
router.get("/usuario/id/:id"    , usuarioController.getUsuariosById);
router.post('/usuario/create'   , usuarioController.createUsuario)
router.post('/usuario/login'    , usuarioController.login)
router.delete("/usuario/id/:id" ,Auth.verificarToken  , usuarioController.deleteUsuariosById);
router.put("/usuario/id/:id"    ,Auth.verificarToken  , usuarioController.updateUsuarioById);

//Rutas Proveedores

router.get("/proveedor/all"       , proveedorController.getAllProveedores);
router.get("/proveedor/id/:id"    , proveedorController.getProveedoresById);
router.post('/proveedor/create'   ,  Auth.verificarToken  , proveedorController.createProveedor)
router.put("/proveedor/id/:id"    ,   Auth.verificarToken, proveedorController.updateProveedorById);
router.delete("/proveedor/id/:id" ,  Auth.verificarToken  , proveedorController.deleteProveedorById);
router.post('/proveedor/favoritos/:idu/:idp'           ,  Auth.verificarToken, proveedorController.añadirFavoritos)
router.post('/proveedor/eliminar/favoritos/:idu/:idp'  ,  Auth.verificarToken, proveedorController.eliminarFavoritos)


module.exports = router