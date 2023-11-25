import { Component, EventEmitter, Output } from '@angular/core';
import { FinanceItemConverters } from 'src/app/Entities';
import { DataService } from 'src/app/data-service.service';

@Component({
  selector: 'app-add-screen',
  templateUrl: './add-screen.component.html',
  styleUrls: ['./add-screen.component.css']
})
export class AddScreenComponent {
  itemToAdd = {
    id: -1,
    amount: undefined,
    name: "",
    date: new Date().toISOString().split("T")[0],
    description: null,
    type: "CLOTHING_SHOES"
  };

  showValidationErrorAmount: boolean = false;
  showValidationErrorName: boolean = false;
  @Output() updateRequestEmitter: EventEmitter<undefined> = new EventEmitter();
  readableCategories = FinanceItemConverters.toReadable;

  constructor(private dataService: DataService) {
  }

  get dateString(): string {
    return new Date(this.itemToAdd.date).toISOString().split("T")[0];
  }

  saveButtonHandler(e: Event) {
    e.preventDefault();
    if (this.itemToAdd.amount === undefined || this.itemToAdd.amount <= 0) {
      this.showValidationErrorAmount = true;
      return;
    }
    if (this.itemToAdd.name.length < 3) {
      this.showValidationErrorName = true;
      return;
    }
    this.dataService.buildAndSendRequest("/items", "POST", JSON.stringify(this.itemToAdd)).then((resp) => {
      if (resp.status == 201) {
        this.updateRequestEmitter.emit(undefined);
        document.getElementById("add-modal-dismiss-button")?.click();
      }
    });
  }

  dismissButtonHandler(e: Event) {
    e.preventDefault();
    this.itemToAdd = {
      id: -1,
      amount: undefined,
      name: "",
      date: new Date().toISOString().split("T")[0],
      description: null,
      type: "CLOTHING_SHOES"
    };
    this.showValidationErrorAmount = false;
    this.showValidationErrorName = false;
  }
}
