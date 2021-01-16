import { Component, OnInit } from '@angular/core';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {BehaviorSubject, Observable} from 'rxjs';
import {messageDuration} from '../../constants';
import {Formular} from '../../interfaces/formular';
import {Question} from '../../interfaces/question';
import {Scene} from '../../interfaces/scene';
import {ErrorService} from '../../services/error.service';
import {FormularService} from '../../services/formular.service';
import {SceneService} from '../../services/scene.service';

@Component({
  selector: 'app-add-scene',
  templateUrl: './add-scene.component.html',
  styleUrls: ['./add-scene.component.scss'],
  providers: [FormularService, ErrorService, SceneService]
})
export class AddSceneComponent implements OnInit {
  checked: boolean[] = [];
  scene: Scene = { title: '', scenes: []};
  formulars: Formular[] = [];
  private buttonDisabler: BehaviorSubject<boolean>;

  constructor(public dialogRef: MatDialogRef<AddSceneComponent>,
              private sceneService: SceneService,
              private errorService: ErrorService,
              private formularService: FormularService,
              private snackBar: MatSnackBar) {
    this.buttonDisabler = new BehaviorSubject<boolean>(false);
    this.formularService.getFormulars().subscribe(
      (response) => {
        this.formulars = [...response.formulars];
        for ( let j = 0; j < this.formulars.length; j++){
          this.checked.push(false);
        }
      },
      error => {
        console.log(error);
        this.formulars = [];
      });
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

  addScene() {
    this.setValue(true);
    for ( let j = 0; j < this.formulars.length; j++){
      if (this.checked[j] === true ) {
        this.scene.scenes.push(this.formulars[j]);
      }
    }
    this.sceneService.postScene(this.scene).subscribe({
      next: (result: Scene) => {
        this.dialogRef.close(result);
        this.snackBar.open('Brochure added.', 'Ok', {
          duration: messageDuration.valid
        });
      },
      error: error => {
        this.setValue(false);
        this.snackBar.open(this.errorService.modifyErrorMessage(error.status, 'brochure'), 'Ok', {
          duration: messageDuration.error
        });
      }
    });
  }
  onToggle($event: MatCheckboxChange, i: number) {
    this.checked[i] = $event.checked;
  }

}
