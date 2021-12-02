const { Router } = require('express');
const router = Router();

const validateRegisterInput = require("./../validation/register");

router.route('/')
    .get(validateRegisterInput)

module.exports = router;