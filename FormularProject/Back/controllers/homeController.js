const mongoose = require('mongoose');
const Users = mongoose.model('Users');
const Formular = mongoose.model('Formular');

exports.addFormular = function(req,res){
    const { body: { formular } } = req;
    const newFormular = new Formular(formular);
    newFormular.save()
                .then( (form) => {
            res.send({formular:form});
    });
}

exports.getFormulars = function(req, res){
    Formular.find({}, function(err,formulars){
        if( err ) res.sendStatus(err.code);
        res.send({formulars:formulars});
    });
}