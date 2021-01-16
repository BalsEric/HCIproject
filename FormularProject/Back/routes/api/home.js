const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const auth = require('../auth');
const Users = mongoose.model('Users');
const Formular = mongoose.model('Formular');
const formular_controller = require('../../controllers/formularController');
//POST new user route (optional, everyone has access)


router.post('/add', formular_controller.addFormular);

router.get('/all', formular_controller.getFormulars);


module.exports = router;