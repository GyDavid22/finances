import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-screen',
  templateUrl: './registration-screen.component.html',
  styleUrls: ['./registration-screen.component.css']
})
export class RegistrationScreenComponent {
  public username: String = "";
  public password: String = "";
  public repassword: String = "";

  public registrationButton(e: Event) {
    e.preventDefault();
  }
}
