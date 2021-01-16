import {Component, Inject, OnInit} from '@angular/core';
import {Formular} from '../../interfaces/formular';
import {ErrorService} from '../../services/error.service';
import {FormularService} from '../../services/formular.service';

@Component({
  selector: 'app-view-formular',
  templateUrl: './view-formular.component.html',
  styleUrls: ['./view-formular.component.scss'],
  providers: [FormularService, ErrorService]
})
export class ViewFormularComponent implements OnInit {
  editedFormular: Formular;
  constructor() {
    this.editedFormular = {...history.state.data.formular};
  }

  ngOnInit(): void {
  }

}
