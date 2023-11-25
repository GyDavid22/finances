import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FinanceItem } from 'src/app/Entities';
import { DataService } from 'src/app/data-service.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements AfterViewInit {
  @Input() item: FinanceItem = {
    id: -1,
    name: "",
    amount: 0,
    description: null,
    date: "",
    type: "CLOTHING_SHOES"
  };
  editCopyItem: FinanceItem = {
    id: -1,
    name: "",
    amount: 0,
    description: null,
    date: "",
    type: "CLOTHING_SHOES"
  }
  private _isInEditMode: boolean = false
  @Output() updateEmitter: EventEmitter<undefined> = new EventEmitter();

  constructor(private dataService: DataService) {
  }

  ngAfterViewInit(): void {
    this.isInEditMode = false;
    let deleteButton = document.getElementById(`delete-button-${this.item.id}`);
    if (deleteButton) {
      deleteButton.setAttribute("data-bs-target", `#delete-confirm-${this.item.id}`);
    }
  }

  editButtonHandler(e: Event) {
    e.preventDefault();
    this.editCopyItem.id = this.item.id;
    this.editCopyItem.name = this.item.name;
    this.editCopyItem.description = this.item.description ?? "";
    this.editCopyItem.amount = this.item.amount;
    this.editCopyItem.date = new Date(this.item.date).toISOString().split("T")[0];
    this.editCopyItem.type = this.item.type;
    this.isInEditMode = true;
  }

  saveButtonHandler(e: Event) {
    e.preventDefault();
    if (this.editCopyItem.description == "") {
      this.editCopyItem.description = null;
    }
    this.editCopyItem.date = new Date(this.editCopyItem.date).toISOString().split("T")[0];
    this.dataService.buildAndSendRequest(`/items/${this.editCopyItem.id}`, "PUT", JSON.stringify(this.editCopyItem)).then((resp) => {
      if (resp.status == 200) {
        this.isInEditMode = false;
        this.updateEmitter.emit(undefined);        
      }
    });
  }

  discardButtonHandler(e: Event) {
    e.preventDefault();
    this.isInEditMode = false;
  }

  deleteItem(e: Event) {
    e.preventDefault();
    this.dataService.buildAndSendRequest(`/items/${this.item.id}`, "DELETE").then((resp) => {
      if (resp.status == 204) {
        this.updateEmitter.emit(undefined);
      }
    })
  }

  get dateToLocale(): string {
    return new Date(this.item?.date ?? "").toLocaleDateString();
  }

  get isInEditMode() {
    return this._isInEditMode;
  }

  set isInEditMode(val: boolean) {
    this._isInEditMode = val;
    let details = document.getElementById(`details-view-${this.item?.id}`);
    let edit = document.getElementById(`edit-view-${this.item?.id}`);
    if (val) {
      if (details) {
        details.classList.remove("d-flex");
        details.classList.add("d-none");
      }
      if (edit) {
        edit.classList.remove("d-none");
        edit.classList.add("d-flex");
      }
    } else {
      if (details) {
        details.classList.remove("d-none");
        details.classList.add("d-flex");
      }
      if (edit) {
        edit.classList.remove("d-flex");
        edit.classList.add("d-none");
      }
    }
  }

  get deleteModalId(): string {
    return "#delete-confirm-{{this.item.id}}";
  }
}
