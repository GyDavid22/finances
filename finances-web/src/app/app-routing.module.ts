import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistrationScreenComponent } from './screens/registration-screen/registration-screen.component';
import { UserOverviewScreenComponent } from './screens/user-overview-screen/user-overview-screen.component';

const routes: Routes = [
  {
  path: "login",
  component: LoginScreenComponent
  },
  {
    path: "registration",
    component: RegistrationScreenComponent
  },
  {
    path: "overview",
    component: UserOverviewScreenComponent
  },
  {
    path: "**",
    pathMatch: "full",
    redirectTo: "login"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
