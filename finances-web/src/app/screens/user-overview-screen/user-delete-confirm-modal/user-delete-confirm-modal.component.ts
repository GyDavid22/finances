import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data-service.service';

@Component({
  selector: 'app-user-delete-confirm-modal',
  templateUrl: './user-delete-confirm-modal.component.html',
  styleUrls: ['./user-delete-confirm-modal.component.css']
})
export class UserDeleteConfirmModalComponent {
  constructor(private dataService: DataService, private router: Router) {}

  async confirmDeleteButtonHandler(e: Event) {
    e.preventDefault();
    await this.dataService.buildAndSendRequest("/user", "DELETE");
    this.dataService.setLogin(false);
    this.router.navigate(["/login"]);
  }
}
