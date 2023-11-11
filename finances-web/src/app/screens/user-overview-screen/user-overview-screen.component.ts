import { Component } from '@angular/core';

@Component({
  selector: 'app-user-overview-screen',
  templateUrl: './user-overview-screen.component.html',
  styleUrls: ['./user-overview-screen.component.css']
})
export class UserOverviewScreenComponent {
  oldPassword: String = "";
  newPassword: String = "";
  reNewPassword: String = "";

  deleteButton(e: Event) {
    e.preventDefault();
  }

  changePasswordButton(e: Event) {
    e.preventDefault();
  }
}
