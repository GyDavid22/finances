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
import { AddScreenComponent } from './screens/finances-overview/add-screen/add-screen.component';
import { PlusIconSvgComponent } from './screens/finances-overview/plus-icon-svg/plus-icon-svg.component';
import { DataService } from './data-service.service';
import { LogoutIconSvgComponent } from './common-navbar/logout-icon-svg/logout-icon-svg.component';
import { UserDeleteConfirmModalComponent } from './screens/user-overview-screen/user-delete-confirm-modal/user-delete-confirm-modal.component';
import { WarningIconSvgComponent } from './dismissable-error-message/warning-icon-svg/warning-icon-svg.component';
import { DismissableSuccessMessageComponent } from './dismissable-success-message/dismissable-success-message.component';
import { SuccessIconSvgComponent } from './dismissable-success-message/success-icon-svg/success-icon-svg.component';

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
    CheckIconSvgComponent,
    AddScreenComponent,
    PlusIconSvgComponent,
    LogoutIconSvgComponent,
    UserDeleteConfirmModalComponent,
    WarningIconSvgComponent,
    DismissableSuccessMessageComponent,
    SuccessIconSvgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
