import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserPasswordChange } from 'src/app/Entities';
import { DataService } from 'src/app/data-service.service';

@Component({
  selector: 'app-user-overview-screen',
  templateUrl: './user-overview-screen.component.html',
  styleUrls: ['./user-overview-screen.component.css']
})
export class UserOverviewScreenComponent implements OnInit {
  user: User = {
    id: -1,
    username: "",
    registrationDate: new Date()
  };
  dateAsString: string = "";
  passwordChangeData: UserPasswordChange = {
    oldpassword: "",
    newpassword: ""
  };
  reNewPassword: String = "";
  showWrongPasswordError: boolean = false;
  showWrongNewPasswordError: boolean = false;
  showPasswordChangeSuccess: boolean = false;

  constructor(private dataService: DataService) {}

  changePasswordButton(e: Event) {
    e.preventDefault();
    if (!(this.passwordChangeData.newpassword == this.reNewPassword) || this.passwordChangeData.newpassword.length < 6) {
      this.showWrongNewPasswordError = true;
      return;
    }
    this.dataService.buildAndSendRequest("/user", "PUT", JSON.stringify(this.passwordChangeData)).then((response) => {
      if (response.status == 204) {
        this.showPasswordChangeSuccess = true;
      } else if (response.status == 400) {
        this.showWrongPasswordError = true;
      }
    });
  }

  ngOnInit(): void {
    this.dataService.buildAndSendRequest("/user", "GET").then(async (response) => {
      this.user = (await response.json()) as User;
      this.dateAsString = new Date(this.user.registrationDate).toLocaleDateString();
    });
  }
}
