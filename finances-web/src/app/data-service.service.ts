import { Injectable } from '@angular/core';
import { FinanceItem } from './Entities';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private static instance: DataService | undefined;

  static getInstance() : DataService {
    if (DataService.instance === undefined) {
      DataService.instance = new DataService();
    }
    return DataService.instance;
  }

  private constructor() {

  }

  getAllFinanceEntries(): FinanceItem[] {
    return [
      new FinanceItem(0, 1000.25, "cost1", "2023.11.11", "random desc"),
      new FinanceItem(1, 250, "cost2", "2023.11.11"),
      new FinanceItem(2, 20, "cost3", "2023.11.11"),
      new FinanceItem(3, 0.54, "cost4", "2023.11.11", "random desc random desc random desc random desc random desc random desc random desc random desc random desc random desc random desc random desc "),
      new FinanceItem(4, 25.5, "cost5", "2023.11.11"),
      new FinanceItem(5, 100, "cost1", "2023.11.11", "random desc"),
      new FinanceItem(6, 250, "cost2", "2023.11.11"),
      new FinanceItem(7, 20, "cost3", "2023.11.11"),
      new FinanceItem(8, 0.54, "cost4", "2023.11.11", "random desc random desc random desc random desc random desc random desc random desc random desc random desc random desc random desc random desc "),
      new FinanceItem(9, 25.5, "cost5", "2023.11.11"),
      new FinanceItem(10, 100, "cost1", "2023.11.11", "random desc"),
      new FinanceItem(11, 250, "cost2", "2023.11.11"),
      new FinanceItem(12, 20, "cost3", "2023.11.11"),
      new FinanceItem(13, 0.54, "cost4", "2023.11.11", "random desc random desc random desc random desc random desc random desc random desc random desc random desc random desc random desc random desc "),
      new FinanceItem(14, 25.5, "cost5", "2023.11.11")
    ];
  }
}
