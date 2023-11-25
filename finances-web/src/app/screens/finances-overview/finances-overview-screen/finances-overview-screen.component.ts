import { Component } from '@angular/core';
import { FinanceItem } from 'src/app/Entities';
import { DataService } from 'src/app/data-service.service';

@Component({
  selector: 'app-finances-overview-screen',
  templateUrl: './finances-overview-screen.component.html',
  styleUrls: ['./finances-overview-screen.component.css']
})
export class FinancesOverviewScreenComponent {
  financeItems: FinanceItem[] = [];

  constructor(public dataService: DataService) {
    this.update();
  }

  update() {
    this.dataService.buildAndSendRequest("/items", "GET").then((resp) => {
      (async (json: Promise<FinanceItem[]>) => {
        this.financeItems = await json;
      })(resp.json());
    });
  }

  set recieveUpdateRequest(val: undefined) {
    this.update();
  }
}
