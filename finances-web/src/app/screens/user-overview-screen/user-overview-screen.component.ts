import { Component } from '@angular/core';

@Component({
  selector: 'app-user-overview-screen',
  templateUrl: './user-overview-screen.component.html',
  styleUrls: ['./user-overview-screen.component.css']
})
export class UserOverviewScreenComponent {
  public oldPassword: String = "";
  public newPassword: String = "";
  public reNewPassword: String = "";

  public deleteButton(e: Event) {
    e.preventDefault();
  }

  public changePasswordButton(e: Event) {
    e.preventDefault();
  }
}
