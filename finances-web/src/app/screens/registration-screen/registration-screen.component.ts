import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRegistration } from 'src/app/Entities';
import { DataService } from 'src/app/data-service.service';

@Component({
  selector: 'app-registration-screen',
  templateUrl: './registration-screen.component.html',
  styleUrls: ['./registration-screen.component.css']
})
export class RegistrationScreenComponent {
  registrationData: LoginRegistration = {
    username: "",
    password: ""
  }
  repassword: string = "";
  showUserNameTaken: boolean = false;
  showPasswordsDontMatch: boolean = false;

  constructor(private dataService: DataService, private router: Router) { }

  registrationButton(e: Event) {
    e.preventDefault();
    if (this.registrationData.username.length < 3) {
      this.showUserNameTaken = true;
      return;
    }
    if (!(this.registrationData.password == this.repassword) || this.registrationData.password.length < 6) {
      this.showPasswordsDontMatch = true;
      return;
    }
    this.dataService.buildAndSendRequest("/user", "POST", JSON.stringify(this.registrationData)).then((resp) => {
      if (resp.status == 200) {
        this.dataService.buildAndSendRequest("/user/auth", "POST", JSON.stringify(this.registrationData)).then((resp2) => {
          if (resp2.status == 200) {
            this.dataService.setLogin(true, this.registrationData.username);
            this.router.navigate(["/overview"])
          }
        })
      } else if (resp.status == 400) {
        this.showUserNameTaken = true;
      }
    });
  }
}
