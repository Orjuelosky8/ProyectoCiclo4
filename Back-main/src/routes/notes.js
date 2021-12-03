const { Router } = require('express');
const router = Router();

const { getNotes, createNote, getNote, deleteNote, updateNote } = require('../controllers/notes.controller');
//const validateLoginInput = require("../validation/ingresar");

router.route('/')
    .get(getNotes)
    .post(createNote);

router.route('/:id')
    .get(getNote)
    .delete(deleteNote)
    .put(updateNote);

module.exports = router;