import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConfigurationsComponent} from './pages/configurations/configurations.component';
import {FormularDashboardComponent} from './pages/formular-dashboard/formular-dashboard.component';
import {HomeComponent} from './pages/home/home.component';
import {ImportDashboardComponent} from './pages/import-dashboard/import-dashboard.component';
import {LoginComponent} from './shared/components/login/login.component';
import {ParticipantiComponent} from './shared/components/participanti/participanti.component';
import {RegisterComponent} from './shared/components/register/register.component';
import {ScenariiComponent} from './shared/components/scenarii/scenarii.component';
import {SubmitFormComponent} from './shared/components/submit-form/submit-form.component';
import {SuccessComponent} from './shared/components/success/success.component';
import {ViewFormularComponent} from './shared/components/view-formular/view-formular.component';
import {ViewSceneComponent} from './shared/components/view-scene/view-scene.component';
import {AuthGuard} from './util/auth.guard';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'configurations', component: ConfigurationsComponent, canActivate: [AuthGuard]},
  // TODO : {path: 'home', component: HomeComponent, canActivate: [AuthGuard]}
  {path: 'home', component: HomeComponent},
  {path: 'home/formular', component: FormularDashboardComponent},
  {path: 'home/formular/view', component: ViewFormularComponent},
  {path: 'home/participanti', component: ParticipantiComponent},
  {path: 'home/brochure', component: ScenariiComponent},
  {path: 'home/brochure/view', component: ViewSceneComponent},
  {path: 'submit/success', component: SuccessComponent},
  {path: 'submit/:id', component: SubmitFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
