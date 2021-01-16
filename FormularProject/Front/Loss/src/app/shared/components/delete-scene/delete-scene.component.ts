import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {messageDuration} from '../../constants';
import {ErrorService} from '../../services/error.service';
import {FormularService} from '../../services/formular.service';
import {SceneService} from '../../services/scene.service';

@Component({
  selector: 'app-delete-scene',
  templateUrl: './delete-scene.component.html',
  styleUrls: ['./delete-scene.component.css'],
  providers: [FormularService, ErrorService, SceneService]
})
export class DeleteSceneComponent implements OnInit {

  sceneId: string;

  constructor(public dialogRef:
                MatDialogRef<DeleteSceneComponent>,
              private sceneService: SceneService,
              private errorService: ErrorService,
              private snackBar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) data) {
    this.sceneId = data.id;
  }

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onYesClick() {
    this.sceneService.deleteScene(this.sceneId).subscribe({
      next: () => {
        this.dialogRef.close(true);
        this.snackBar.open('Brochure deleted.', 'Ok', {
          duration: messageDuration.valid,
        });
      },
      error: error => {
        this.dialogRef.close();
        this.snackBar.open(this.errorService.deleteErrorMessage(error.status, 'brochure'), 'Ok', {
          duration: messageDuration.error,
        });
      }
    });

  }

}
