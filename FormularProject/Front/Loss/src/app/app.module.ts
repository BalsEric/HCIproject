import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppAngularMaterialModule} from './app-angular-material.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ConfigurationsComponent} from './pages/configurations/configurations.component';
import {HomeComponent} from './pages/home/home.component';
import {EmptyListMessageComponent} from './shared/components/empty-list-message/empty-list-message.component';
import {LoginComponent} from './shared/components/login/login.component';
import {AuthGuard} from './util/auth.guard';
import { RegisterComponent } from './shared/components/register/register.component';
import { FormularDashboardComponent } from './pages/formular-dashboard/formular-dashboard.component';
import { ImportDashboardComponent } from './pages/import-dashboard/import-dashboard.component';
import { AddFormularComponent } from './shared/components/add-formular/add-formular.component';
import { EditFormularComponent } from './shared/components/edit-formular/edit-formular.component';
import { DeleteFormularComponent } from './shared/components/delete-formular/delete-formular.component';
import { FormularComponent } from './shared/components/formular/formular.component';
import { QtypeComponent } from './shared/components/qtype/qtype.component';
import { ParticipantiComponent } from './shared/components/participanti/participanti.component';
import { ScenariiComponent } from './shared/components/scenarii/scenarii.component';
import { ViewFormularComponent } from './shared/components/view-formular/view-formular.component';
import { SceneComponent } from './shared/components/scene/scene.component';
import { DeleteSceneComponent } from './shared/components/delete-scene/delete-scene.component';
import { EditSceneComponent } from './shared/components/edit-scene/edit-scene.component';
import { ViewSceneComponent } from './shared/components/view-scene/view-scene.component';
import { AddSceneComponent } from './shared/components/add-scene/add-scene.component';
import { LinkComponent } from './shared/components/link/link.component';
import { SubmitFormComponent } from './shared/components/submit-form/submit-form.component';
import { SuccessComponent } from './shared/components/success/success.component';


@NgModule({
  declarations: [
    AppComponent,
    ConfigurationsComponent,
    HomeComponent,
    LoginComponent,
    EmptyListMessageComponent,
    RegisterComponent,
    FormularDashboardComponent,
    ImportDashboardComponent,
    AddFormularComponent,
    EditFormularComponent,
    DeleteFormularComponent,
    FormularComponent,
    QtypeComponent,
    ParticipantiComponent,
    ScenariiComponent,
    ViewFormularComponent,
    SceneComponent,
    DeleteSceneComponent,
    EditSceneComponent,
    ViewSceneComponent,
    AddSceneComponent,
    LinkComponent,
    SubmitFormComponent,
    SuccessComponent
  ],
  entryComponents: [
    AddFormularComponent,
    EditFormularComponent,
    DeleteFormularComponent,
    AddSceneComponent,
    DeleteSceneComponent,
    EditSceneComponent,
    LinkComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppAngularMaterialModule,
    MatRadioModule
  ],
  exports: [
    AppAngularMaterialModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
