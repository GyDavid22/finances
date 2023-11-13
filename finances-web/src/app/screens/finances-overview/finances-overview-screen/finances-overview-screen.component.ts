import { Component } from '@angular/core';
import { FinanceItem } from 'src/app/Entities';
import { DataService } from 'src/app/data-service.service';

@Component({
  selector: 'app-finances-overview-screen',
  templateUrl: './finances-overview-screen.component.html',
  styleUrls: ['./finances-overview-screen.component.css']
})
export class FinancesOverviewScreenComponent {
  dataService: DataService = DataService.getInstance();

  itemToEdit: FinanceItem | undefined;

  prepareItemToEdit(f: FinanceItem) {
    this.itemToEdit = f;
  }
}
