import { Component, OnInit } from '@angular/core';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {BehaviorSubject, Observable} from 'rxjs';
import {messageDuration} from '../../constants';
import {Formular} from '../../interfaces/formular';
import {Question} from '../../interfaces/question';
import {ErrorService} from '../../services/error.service';
import {FormularService} from '../../services/formular.service';

@Component({
  selector: 'app-add-formular',
  templateUrl: './add-formular.component.html',
  styleUrls: ['./add-formular.component.scss'],
  providers: [FormularService, ErrorService]
})
export class AddFormularComponent implements OnInit {
  formular: Formular = {};
  questionNr = 0;
  qtypes = ['short-answer', 'check-answer', 'grade-answer'];
  questions: Question[] = [];
  type = 'short-answer';

  private buttonDisabler: BehaviorSubject<boolean>;

  constructor(public dialogRef: MatDialogRef<AddFormularComponent>,
              private formularService: FormularService,
              private errorService: ErrorService,
              private snackBar: MatSnackBar) {
    this.buttonDisabler = new BehaviorSubject<boolean>(false);
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getValue(): Observable<boolean> {
    return this.buttonDisabler.asObservable();
  }

  setValue(newValue): void {
    this.buttonDisabler.next(newValue);
  }

  addFormular() {
    this.setValue(true);
    this.formular.questions = this.questions;
    this.formularService.postFormular(this.formular).subscribe({
      next: (result: Formular) => {
        this.dialogRef.close(result);
        this.snackBar.open('Formular added.', 'Ok', {
          duration: messageDuration.valid
        });
      },
      error: error => {
        this.setValue(false);
        this.snackBar.open(this.errorService.modifyErrorMessage(error.status, 'formular'), 'Ok', {
          duration: messageDuration.error
        });
      }
    });
  }

  addQuestion() {
    this.questions.push( { text: null, type: this.type, answers: null });
    this.questionNr++;
    this.type = 'short-answer';
  }
}
