import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ErrorService} from '../../services/error.service';
import {messageDuration} from '../../constants';
import {FormularService} from '../../services/formular.service';

@Component({
  selector: 'app-delete-formular',
  templateUrl: './delete-formular.component.html',
  styleUrls: ['./delete-formular.component.css'],
  providers: [FormularService, ErrorService]
})
export class DeleteFormularComponent implements OnInit {

  formularId: number;

  constructor(public dialogRef:
                MatDialogRef<DeleteFormularComponent>,
              private formularService: FormularService,
              private errorService: ErrorService,
              private snackBar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) data) {
    this.formularId = data.id;
  }

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onYesClick() {
    this.formularService.deleteFormular(this.formularId).subscribe({
      next: () => {
        this.dialogRef.close(true);
        this.snackBar.open('Formular deleted.', 'Ok', {
          duration: messageDuration.valid,
        });
      },
      error: error => {
        this.dialogRef.close();
        this.snackBar.open(this.errorService.deleteErrorMessage(error.status, 'formular'), 'Ok', {
          duration: messageDuration.error,
        });
      }
    });

  }

}
