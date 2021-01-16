import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {BehaviorSubject} from 'rxjs';
import {messageDuration} from '../../constants';
import {Formular} from '../../interfaces/formular';
import {Question} from '../../interfaces/question';
import {Scene} from '../../interfaces/scene';
import {ErrorService} from '../../services/error.service';
import {FormularService} from '../../services/formular.service';
import {SceneService} from '../../services/scene.service';

@Component({
  selector: 'app-edit-scene',
  templateUrl: './edit-scene.component.html',
  styleUrls: ['./edit-scene.component.scss'],
  providers: [FormularService, ErrorService, SceneService]
})
export class EditSceneComponent implements OnInit {

  private buttonDisabler: BehaviorSubject<boolean>;
  questionsList: Question[] = [];
  scene: Scene;
  constructor(public dialogRef: MatDialogRef<EditSceneComponent>,
              private formularService: FormularService,
              private errorService: ErrorService,
              private sceneService: SceneService,
              private snackBar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) data) {
    this.scene = {...data.scene};
    this.buttonDisabler = new BehaviorSubject<boolean>(false);
  }

  ngOnInit(): void {
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onYesClick() {
    this.sceneService.putScene(this.scene).subscribe({
      next: (response) => {
        this.dialogRef.close(response);
        this.snackBar.open('Brosura updatata.', 'Ok', {
          duration: messageDuration.valid
        });
      },
      error: error => {
        this.snackBar.open(this.errorService.modifyErrorMessage(error.status, 'brosura'), 'Ok', {
          duration: messageDuration.error
        });
      }
    });
  }

  onDelete(i: number) {
    if (i === null || i < 0) {
      alert('Error! Index from delete is invalid.');
    } else {
      this.scene.scenes.splice(i, 1);
    }
  }

}

