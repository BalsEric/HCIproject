const mongoose = require('mongoose');
const router = require('express').Router();
const Formular = mongoose.model('Formular');
const formular_controller = require('../../controllers/formularController');
//POST new user route (optional, everyone has access)


router.post('/add', formular_controller.addFormular);

router.get('/all', formular_controller.getFormulars);

router.put('/update/:id', formular_controller.putFormular);

router.delete('/:id', formular_controller.deleteFormular);




module.exports = router;