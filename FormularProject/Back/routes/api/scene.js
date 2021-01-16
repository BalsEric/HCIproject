const mongoose = require('mongoose');
const router = require('express').Router();
const Formular = mongoose.model('Formular');
const scene_controller = require('../../controllers/sceneController');
//POST new user route (optional, everyone has access)


router.post('/add', scene_controller.addScene);

router.post('/generate/:id', scene_controller.generateLink);

router.post('/getForm/:id', scene_controller.getForm);

router.get('/all', scene_controller.getScenes);

router.put('/update/:id', scene_controller.putScene);

router.delete('/:id', scene_controller.deleteScene);




module.exports = router;