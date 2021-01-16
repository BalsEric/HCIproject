const mongoose = require('mongoose');
const router = require('express').Router();
const Formular = mongoose.model('Formular');
const participant_controller = require('../../controllers/participantController');
//POST new user route (optional, everyone has access)


router.post('/add', participant_controller.addParticipant);

router.get('/all', participant_controller.getParticipants);

router.get('/download', participant_controller.download);

module.exports = router;