import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent {
  public username: String = "";
  public password: String = "";

  public loginButton(e: Event) {
    e.preventDefault();
  }
}
