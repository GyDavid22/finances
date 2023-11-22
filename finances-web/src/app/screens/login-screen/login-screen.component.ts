import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRegistration } from 'src/app/Entities';
import { DataService } from 'src/app/data-service.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent {
  loginData: LoginRegistration = {
    username: "",
    password: ""
  };
  show: boolean = false;

  constructor(private router: Router, private dataService: DataService) {
  }

  loginButton(e: Event) {
    e.preventDefault();
    this.dataService.buildAndSendRequest("/user/auth", "POST", JSON.stringify(this.loginData), true).then((value) => {
      if (value.status == 200) {
        this.dataService.setLogin(true, this.loginData.username);
        this.router.navigate(["/overview"]);
      } else if (value.status == 401) {
        this.show = true;
      }
    });
  }
}
