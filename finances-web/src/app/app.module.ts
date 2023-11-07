import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { RegistrationScreenComponent } from './registration-screen/registration-screen.component';
import { UserOverviewScreenComponent } from './user-overview-screen/user-overview-screen.component';
import { CommonNavbarComponent } from './common-navbar/common-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    RegistrationScreenComponent,
    UserOverviewScreenComponent,
    CommonNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
