import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { AppComponent } from './app.component';
import { RegistrationScreenComponent } from './registration-screen/registration-screen.component';
import { UserOverviewScreenComponent } from './user-overview-screen/user-overview-screen.component';

const routes: Routes = [
  {
    path: "",
    component: AppComponent
  },
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
