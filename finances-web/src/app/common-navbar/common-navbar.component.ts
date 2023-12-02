import { Component } from '@angular/core';
import { DataService } from '../data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-navbar',
  templateUrl: './common-navbar.component.html',
  styleUrls: ['./common-navbar.component.css']
})
export class CommonNavbarComponent {
  constructor(public dataService: DataService, private router: Router) {}

  async logoutButtonHandler(e: Event) {
    e.preventDefault();
    await this.dataService.buildAndSendRequest("/user/logout", "POST");
    this.dataService.setLogin(false);
    this.router.navigate(["/login"]);
  }
}
