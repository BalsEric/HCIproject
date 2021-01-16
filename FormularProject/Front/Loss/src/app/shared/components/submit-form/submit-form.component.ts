import {Component, Input, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute, Router} from '@angular/router';
import {messageDuration} from '../../constants';
import {Participant} from '../../interfaces/participants';
import {Scene} from '../../interfaces/scene';
import {ErrorService} from '../../services/error.service';
import {ParticipantService} from '../../services/participant.service';
import {SceneService} from '../../services/scene.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.scss'],
  providers: [SceneService, ErrorService, ParticipantService]
})
export class SubmitFormComponent implements OnInit {
  id: string;
  brochure: Scene = {};
  personalInfo: Participant = {};
  answers: string[][];
  constructor( public router: Router,
               private route: ActivatedRoute,
               private participantService: ParticipantService,
               private errorService: ErrorService,
               private sceneService: SceneService,
               private snackBar: MatSnackBar) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.sceneService.getFormById(this.id).subscribe(
      (response) => {
        this.brochure = response.brochure;
        this.answers = [];
        for(let i = 0; i < this.brochure.scenes.length; i++) {
          this.answers[i] = [];
          for(let j = 0; j < this.brochure.scenes[i].questions.length; j++) {
            this.answers[i][j] = '';
          }
        }
        console.log(this.brochure);
      },
      error => {
        console.log(error);
      });
  }

  ngOnInit(): void {
  }

  sendData(personalInfo: Participant, answers: string[][], brochure: Scene) {
    personalInfo.personalCode = personalInfo.firstLetterOfTheTownBornIn + personalInfo.firstLetterOfTheRegionBornIn + personalInfo.sumOfDayAndMonth.toString() + personalInfo.sumOfTheLast2DigitsOfBirthYear.toString();

    console.log(this.personalInfo);
    this.participantService.addParticipant(this.personalInfo, answers, brochure).subscribe({
      next: (response) => {
        if (response){
          console.log(response);
        }
        this.snackBar.open('Participant adaugat', 'Ok', {
          duration: messageDuration.valid
        });
        this.router.navigate(['submit/success']);
      },
      error: error => {
        this.snackBar.open(this.errorService.modifyErrorMessage(error.status, 'participant'), 'Ok', {
          duration: messageDuration.error
        });
      }
    });
  }
}
