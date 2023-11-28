import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FinanceItem } from 'src/app/Entities';

@Component({
  selector: 'app-finance-item-list',
  templateUrl: './finance-item-list.component.html',
  styleUrls: ['./finance-item-list.component.css']
})
export class FinanceItemListComponent {
  @Input()
  financeItems: FinanceItem[] = [];
  @Output()
  forwardUpdateRequests: EventEmitter<undefined> = new EventEmitter();

  set recieveUpdateRequest(val: undefined) {
    this.forwardUpdateRequests.emit(undefined);
  }
}
