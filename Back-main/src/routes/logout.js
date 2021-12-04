const { Router } = require('express');
const router = Router();

router.get('/', (req, res, next) => {
    console.log("Sign out");
    req.logout();
    res.redirect('/Ingresar');
});