import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FinanceItem } from 'src/app/Entities';

@Component({
  selector: 'app-finance-stats',
  templateUrl: './finance-stats.component.html',
  styleUrls: ['./finance-stats.component.css']
})
export class FinanceStatsComponent {
  @Input()
  financeItems: FinanceItem[] = [];
  @Output()
  forwardUpdateRequests: EventEmitter<undefined> = new EventEmitter();
}
