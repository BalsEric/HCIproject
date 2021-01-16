const mongoose = require('mongoose');
const Users = mongoose.model('Users');
const Scene = mongoose.model('Scene');
const Link = mongoose.model('Link');

var uuid = require('uuid');
const formular = require('../models/formular');

exports.addScene = function(req,res){
    const { body: { scene } } = req;
    const newScene = new Scene(scene);
    newScene.save()
                .then( (form) => {
            res.send({scene:form});
    });
}

exports.getScenes = function(req, res){
    Scene.find({}, function(err,Scenes){
        if( err ) res.sendStatus(err.code);
        res.send({scenes:Scenes});
    });
}


exports.deleteScene = function(req, res){
    Scene.deleteOne({"_id": req.params.id}, function(err){
        if( err ) res.sendStatus(err.code);
        res.send();
    });
}

exports.putScene = function(req, res){
    const { body: { scene } } = req;
    Scene.findOneAndUpdate({"_id": scene._id}, {$set: { "title": scene.title, "scenes": scene.scenes}}, function(err){
        if( err ) res.sendStatus(err.code);
        Scene.find({"_id": scene._id}, function(err2, newscene){
            if( err2 ) res.sendStatus(err2.code);
            console.log(newscene);
            res.send({scene: newscene});
        });
    });
}

exports.generateLink = function(req,res){
    const token = uuid.v4();
    const newLink = new Link({'brochure':req.params.id, 'url': token});
    newLink.save();
    res.send({token: "localhost:4200/submit/"+token.toString()});
}

exports.getForm = function(req,res){
    Link.findOne({"url": req.params.id}, function(err, link){
        if( err ) res.sendStatus(err.code);
        console.log(link);
        Scene.findOne({"_id": link.brochure}, function( err2, scene){
             if( err2 ) res.sendStatus(err2.code);
             console.log(scene);
             res.send({brochure: scene});
        });
    });
}
