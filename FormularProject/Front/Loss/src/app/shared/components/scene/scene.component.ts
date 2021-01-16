import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {Formular} from '../../interfaces/formular';
import {Scene} from '../../interfaces/scene';
import {SceneService} from '../../services/scene.service';
import {DeleteFormularComponent} from '../delete-formular/delete-formular.component';
import {DeleteSceneComponent} from '../delete-scene/delete-scene.component';
import {EditFormularComponent} from '../edit-formular/edit-formular.component';
import {EditSceneComponent} from '../edit-scene/edit-scene.component';
import {LinkComponent} from '../link/link.component';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss'],
  providers: [SceneService]
})
export class SceneComponent implements OnInit {
  @Input() type: string;
  @Input() scene: Scene;
  @Output() handleDelete = new EventEmitter<void>();
  @Output() handleUpdate = new EventEmitter<any>();
  @Output() handleDeleteS = new EventEmitter<void>();
  constructor(public dialog: MatDialog,
              public router: Router,
              private sceneService: SceneService) {
  }

  ngOnInit(): void {
  }

  openEditDialog(scene: Scene) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      scene
    };

    this.dialog.open(EditSceneComponent, dialogConfig).afterClosed()
      .subscribe((result: Scene) => {
        if (result) {
          this.handleUpdate.emit({scene: result});
        }
      });
  }

  openDeleteDialog(id: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      id
    };

    this.dialog.open(DeleteSceneComponent, dialogConfig).afterClosed()
      .subscribe((result: boolean) => {
        if (result) {
          // Update the frontend list instead of refreshing the page.
          this.handleDelete.emit();
        }
      });
  }

  openView(scene: Scene) {
    this.router.navigate(['home/brochure/view'], {state: {data: {scene}}});
    // history.state.data
  }

  generateLink( id: string) {
    this.sceneService.postLink(id).subscribe( (response) => {
      if (response) {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.data = {
          response
        };
        this.dialog.open(LinkComponent, dialogConfig);
      }
    },
    error => {
      console.log(error);
    });

  }

  openDeleteEdit() {
    this.handleDeleteS.emit();
  }
}
