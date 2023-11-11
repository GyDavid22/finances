import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-screen',
  templateUrl: './registration-screen.component.html',
  styleUrls: ['./registration-screen.component.css']
})
export class RegistrationScreenComponent {
  username: String = "";
  password: String = "";
  repassword: String = "";

  registrationButton(e: Event) {
    e.preventDefault();
  }
}
