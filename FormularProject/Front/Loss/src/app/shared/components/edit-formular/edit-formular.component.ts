import {Component, Inject, OnInit} from '@angular/core';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {BehaviorSubject, Observable} from 'rxjs';
import {messageDuration} from '../../constants';
import {Formular} from '../../interfaces/formular';
import {Question} from '../../interfaces/question';
import {ErrorService} from '../../services/error.service';
import {FormularService} from '../../services/formular.service';

@Component({
  selector: 'app-edit-formular',
  templateUrl: './edit-formular.component.html',
  styleUrls: ['./edit-formular.component.scss'],
  providers: [FormularService, ErrorService]
})
export class EditFormularComponent implements OnInit {

  private buttonDisabler: BehaviorSubject<boolean>;
  questionsList: Question[] = [];
  editedFormular: Formular;
  constructor(public dialogRef: MatDialogRef<EditFormularComponent>,
              private formularService: FormularService,
              private errorService: ErrorService,
              private snackBar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) data) {
    this.editedFormular = {...data.formular};
    this.buttonDisabler = new BehaviorSubject<boolean>(false);
  }

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onYesClick() {
    this.formularService.putFormular(this.editedFormular).subscribe({
      next: (response) => {
        this.dialogRef.close(response);
        this.snackBar.open('Formular updated.', 'Ok', {
          duration: messageDuration.valid
        });
      },
      error: error => {
        this.snackBar.open(this.errorService.modifyErrorMessage(error.status, 'formular'), 'Ok', {
          duration: messageDuration.error
        });
      }
    });
  }
  onDelete(i: number) {
    if (i === null || i < 0) {
      alert('Error! Index from delete is invalid.');
    } else {
      this.editedFormular.questions.splice(i, 1);
    }
  }

}
