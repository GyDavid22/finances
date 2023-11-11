import { Component } from '@angular/core';
import { DataService } from 'src/app/data-service.service';

@Component({
  selector: 'app-finances-overview-screen',
  templateUrl: './finances-overview-screen.component.html',
  styleUrls: ['./finances-overview-screen.component.css']
})
export class FinancesOverviewScreenComponent {
  dataService: DataService = DataService.getInstance();
}
