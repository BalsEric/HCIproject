import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Formular} from '../../interfaces/formular';
import {Scene} from '../../interfaces/scene';
import {FormularService} from '../../services/formular.service';
import {SceneService} from '../../services/scene.service';
import {AddFormularComponent} from '../add-formular/add-formular.component';
import {AddSceneComponent} from '../add-scene/add-scene.component';

@Component({
  selector: 'app-scenarii',
  templateUrl: './scenarii.component.html',
  styleUrls: ['./scenarii.component.scss'],
  providers: [SceneService]
})
export class ScenariiComponent implements OnInit {

  scenes: Scene[] = [];
  constructor(private sceneService: SceneService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.sceneService.getScenes().subscribe(
      (response) => {
        this.scenes = response.scenes;
      },
      error => {
        console.log(error);
        this.scenes = [];
      });
  }

  openAddDialog() {
    this.dialog.open(AddSceneComponent).afterClosed().subscribe((result: any) => {
      if (result) {
        this.scenes.push(result.scene);
      }
    });
  }

  /**
   * Delete one element on index i from the departments list.
   * (handleDelete) Output from DepartmentComponent can call this function.
   * @param i - index of the list
   */
  onDelete(i: number) {
    if (i === null || i < 0) {
      alert('Error! Index from delete is invalid.');
    } else {
      this.scenes.splice(i, 1);
    }
  }

  /**
   * Updates an element from the list with a new object passed by $event.
   * (handleUpdate) Output from DepartmentComponent can call this function.
   * @param $event contains the new updated object
   */
  onUpdate($event: any) {
    const sceneEdited = $event.scene.scene[0];
    const checkIdFunction = (entity) => entity._id === sceneEdited._id;
    const res = this.scenes.findIndex(checkIdFunction);
    this.scenes[res] = sceneEdited;
  }
}
