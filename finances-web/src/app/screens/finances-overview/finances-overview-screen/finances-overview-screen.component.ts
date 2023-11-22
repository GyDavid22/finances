import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { FinanceItem } from 'src/app/Entities';
import { DataService } from 'src/app/data-service.service';

@Component({
  selector: 'app-finances-overview-screen',
  templateUrl: './finances-overview-screen.component.html',
  styleUrls: ['./finances-overview-screen.component.css']
})
export class FinancesOverviewScreenComponent {
  itemToEdit: FinanceItem | undefined;

  constructor(public dataService: DataService) {
  }

  prepareItemToEdit(f: FinanceItem) {
    this.itemToEdit = f;
  }
}
