const mongoose = require('mongoose');
const Users = mongoose.model('Users');
const ParticipantData = mongoose.model('ParticipantData');
const Participant = mongoose.model('Participant');

exports.addParticipant = function(req,res){
    const { body: { participant } } = req;
    const { body: { answers } } = req;
    const { body: { brochure } } = req;
    console.log(participant);
    console.log(answers);
    console.log(brochure);
    const newParticipant = new Participant(participant);
    newParticipant.save()
                .then( (Newparticipant) => {
                    const partData = new ParticipantData({
                        participant:Newparticipant, 
                        brochure:brochure, 
                        answers:answers});
                    partData.save()
                                .then(  (finalPart) => {
                                    console.log(finalPart);
                                    res.send({participant:Newparticipant});
                                });
    });
}

exports.getParticipants = function(req, res){
    Participant.find({}, function(err,participants){
        if( err ) res.sendStatus(err.code);
        console.log(participants);
        res.send({participants:participants});
    });
}

const createCsvWriter = require('csv-writer').createObjectCsvWriter;

exports.download = function(req,res){
console.log("hello");

let header = [ 
    {id: 'agree', title: 'Agree'},
    {id: 'personalCode', title: 'PersonalCode'},
    {id: 'firstLetterOfTheTownBornIn', title: 'FirstLetterOfTheTownBornIn'},
    {id: 'firstLetterOfTheRegionBornIn', title: 'FirstLetterOfTheRegionBornIn'},
    {id: 'sumOfTheLast2DigitsOfBirthYear', title: 'SumOfTheLast2DigitsOfBirthYear'},
    {id: 'sumOfDayAndMonth', title: 'SumOfDayAndMonth'},
    {id: 'age', title: 'Age'},
    {id: 'type', title: 'Type'},
    {id: 'personalType', title: 'PersonalType'},
    {id: 'militaryGrade', title: 'MilitaryGrade'},
    {id: 'workedFor', title: 'WorkedFor'},
    {id: 'workedInThisMilitaryUnityFor', title: 'WorkedInThisMilitaryUnityFor'},
    {id: 'hoursPerDay', title: 'HoursPerDay'},
    {id: 'workingInTours', title: 'WorkingInTours'},
    {id: 'program', title: 'Program'}
  ]

let s0,s1,s2,s0qt0,s0qt1,s0qt2,s0qt3,s0qt4,s0qt5,s0qt6
ParticipantData.find({}, function(err, allParticipants){
    allParticipants.forEach( participant=>{
         var i=-1;
      participant.brochure.scenes.forEach(scene => {
              i++;
              header.push({id: 's'+i.toString(), title: 'Scena'});
              header.push({id: 'sd'+i.toString(), title: 'Descriere'});
              var j=-1;
              scene.questions.forEach( question => {
                  j++;
                  console.log(i)
                  header.push({id: 's'+i.toString()+'qt'+j.toString(), title: 'Intrebare'});
                  if (participant.answers[i][j] == '')
                  {
                       header.push({id: 'empty', title: 'Raspuns'});
                  } else {
                     header.push({id: 's'+i.toString()+'qtr'+j.toString(), title: 'Raspuns'});
                  }
              });
          });
        });
      });

const csvWriter = createCsvWriter({
  path: 'out.csv',
  header: header
  
});

let data;

Participant.find({}, function(err, participants){
    console.log("downloaded");
    data = participants;
    
    csvWriter
    .writeRecords(data)
    .then(()=> console.log('The CSV file was written successfully'));
    res.sendStatus(200);

})

}