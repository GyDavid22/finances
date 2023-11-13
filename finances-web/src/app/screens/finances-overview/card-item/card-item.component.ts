import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FinanceItem } from 'src/app/Entities';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent {
  @Input() item: FinanceItem | undefined;
  @Output() itemOutput: EventEmitter<FinanceItem> = new EventEmitter<FinanceItem>();

  editButtonHandler(e: Event) {
    e.preventDefault();
    this.itemOutput.emit(this.item);
  }
}
