const mongoose = require('mongoose');
const Users = mongoose.model('Users');
const Formular = mongoose.model('Formular');

exports.addFormular = function(req,res){
    const { body: { formular } } = req;
    const newFormular = new Formular(formular);
    newFormular.save()
                .then( (form) => {
                    console.log(form);
            res.send({formular:form});
    });
}

exports.getFormulars = function(req, res){
    Formular.find({}, function(err,formulars){
        if( err ) res.sendStatus(err.code);
        console.log(formulars);
        res.send({formulars:formulars});
    });
}

exports.deleteFormular = function(req, res){
    Formular.deleteOne({"_id": req.params.id}, function(err){
        if( err ) res.sendStatus(err.code);
        res.send();
    });
}

exports.putFormular = function(req, res){
    const { body: { formular } } = req;
    console.log(formular);
    Formular.findOneAndUpdate({"_id": formular._id}, {$set: { "title": formular.title, "description": formular.description, "questions": formular.questions}}, function(err){
        if( err ) res.sendStatus(err.code);
        Formular.find({"_id": formular._id}, function(err2, newFormular){
            if( err2 ) res.sendStatus(err2.code);
            console.log(newFormular);
            res.send({formular: newFormular});
        });
    });
}