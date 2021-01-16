import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

const MD_COMPONENT_MODULES = [
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatTabsModule,
  MatFormFieldModule,
  MatDialogModule,
  MatTooltipModule,
  MatIconModule,
  MatSelectModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatProgressBarModule,
  MatTableModule,
  MatPaginatorModule
];

@NgModule({
  imports: MD_COMPONENT_MODULES,
  exports: MD_COMPONENT_MODULES
})
export class AppAngularMaterialModule {
}
