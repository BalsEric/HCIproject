import { Component, OnInit } from '@angular/core';
import {Formular} from '../../interfaces/formular';
import {Scene} from '../../interfaces/scene';
import {ErrorService} from '../../services/error.service';
import {FormularService} from '../../services/formular.service';

@Component({
  selector: 'app-view-scene',
  templateUrl: './view-scene.component.html',
  styleUrls: ['./view-scene.component.scss'],
  providers: [FormularService, ErrorService]
})
export class ViewSceneComponent implements OnInit {
  editedScene: Scene = {};
  constructor() {
    this.editedScene = {...history.state.data.scene};
  }

  ngOnInit(): void {
  }

}
