import { Component, Input } from '@angular/core';
import { FinanceItem } from 'src/app/Entities';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent {
  @Input() item: FinanceItem | undefined;

  isInEditMode: Boolean = false;

  editModeButton(e: Event) {
    e.preventDefault();
    this.isInEditMode = true;
    console.log(this.isInEditMode);
  }
}
