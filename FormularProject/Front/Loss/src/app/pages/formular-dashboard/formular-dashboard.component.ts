import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddFormularComponent} from '../../shared/components/add-formular/add-formular.component';
import {FormularComponent} from '../../shared/components/formular/formular.component';
import {Formular} from '../../shared/interfaces/formular';
import {FormularService} from '../../shared/services/formular.service';

@Component({
  selector: 'app-formular-dashboard',
  templateUrl: './formular-dashboard.component.html',
  styleUrls: ['./formular-dashboard.component.scss'],
  providers: [FormularService]
})
export class FormularDashboardComponent implements OnInit {
  formulars: Formular[] = [];
  constructor(private formularService: FormularService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.formularService.getFormulars().subscribe(
      (response) => {
          this.formulars = response.formulars;
      },
      error => {
        this.formulars = [];
      });
  }

  openAddDialog() {
    this.dialog.open(AddFormularComponent).afterClosed().subscribe((result: any) => {
      if (result) {
        this.formulars.push(result.formular);
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
      this.formulars.splice(i, 1);
    }
  }

  /**
   * Updates an element from the list with a new object passed by $event.
   * (handleUpdate) Output from DepartmentComponent can call this function.
   * @param $event contains the new updated object
   */
  onUpdate($event: any) {
    const formularEdited = $event.formular.formular[0];
    const checkIdFunction = (entity) => entity._id === formularEdited._id;
    const res = this.formulars.findIndex(checkIdFunction);
    this.formulars[res] = formularEdited;
  }
}
