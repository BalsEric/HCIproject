import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {Formular} from '../../interfaces/formular';
import {DeleteFormularComponent} from '../delete-formular/delete-formular.component';
import {EditFormularComponent} from '../edit-formular/edit-formular.component';

@Component({
  selector: 'app-formular',
  templateUrl: './formular.component.html',
  styleUrls: ['./formular.component.scss']
})
export class FormularComponent implements OnInit {
  @Input() type: string;
  @Input() formular: Formular;
  @Output() handleDelete = new EventEmitter<void>();
  @Output() handleUpdate = new EventEmitter<any>();
  constructor(public dialog: MatDialog,
              public router: Router) {
  }

  ngOnInit(): void {
  }

  openEditDialog(formular: Formular) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      formular
    };

    this.dialog.open(EditFormularComponent, dialogConfig).afterClosed()
      .subscribe((result: Formular) => {
        if (result) {
          this.handleUpdate.emit({formular: result});
        }
      });
  }

  openDeleteDialog(id: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      id
    };

    this.dialog.open(DeleteFormularComponent, dialogConfig).afterClosed()
      .subscribe((result: boolean) => {
        if (result) {
          // Update the frontend list instead of refreshing the page.
          this.handleDelete.emit();
        }
      });
  }

  openView(formular: Formular) {
    this.router.navigate(['home/formular/view'], {state: {data: {formular}}});
    // history.state.data
  }

}
