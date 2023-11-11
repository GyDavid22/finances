import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonNavbarComponent } from './common-navbar/common-navbar.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistrationScreenComponent } from './screens/registration-screen/registration-screen.component';
import { UserOverviewScreenComponent } from './screens/user-overview-screen/user-overview-screen.component';
import { FormsModule } from '@angular/forms';
import { DismissableErrorMessageComponent } from './dismissable-error-message/dismissable-error-message.component';
import { CardItemComponent } from './screens/finances-overview/card-item/card-item.component';
import { FinancesOverviewScreenComponent } from './screens/finances-overview/finances-overview-screen/finances-overview-screen.component';
import { PersonIconSvgComponent } from './person-icon-svg/person-icon-svg.component';
import { PencilIconSvgComponent } from './screens/finances-overview/card-item/pencil-icon-svg/pencil-icon-svg.component';
import { TrashIconSvgComponent } from './screens/finances-overview/card-item/trash-icon-svg/trash-icon-svg.component';
import { CheckIconSvgComponent } from './screens/finances-overview/card-item/check-icon-svg/check-icon-svg.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    RegistrationScreenComponent,
    UserOverviewScreenComponent,
    CommonNavbarComponent,
    DismissableErrorMessageComponent,
    CardItemComponent,
    FinancesOverviewScreenComponent,
    PersonIconSvgComponent,
    PencilIconSvgComponent,
    TrashIconSvgComponent,
    CheckIconSvgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
