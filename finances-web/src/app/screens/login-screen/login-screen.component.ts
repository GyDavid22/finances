import { Component } from '@angular/core';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent {
  username: String = "";
  password: String = "";

  loginButton(e: Event) {
    e.preventDefault();
  }
}
