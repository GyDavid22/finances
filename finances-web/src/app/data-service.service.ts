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
      new FinanceItem(1000.25, "cost1", "2023.11.11", "random desc"),
      new FinanceItem(250, "cost2", "2023.11.11"),
      new FinanceItem(20, "cost3", "2023.11.11"),
      new FinanceItem(0.54, "cost4", "2023.11.11", "random desc random desc random desc random desc random desc random desc random desc random desc random desc random desc random desc random desc "),
      new FinanceItem(25.5, "cost5", "2023.11.11"),
      new FinanceItem(100, "cost1", "2023.11.11", "random desc"),
      new FinanceItem(250, "cost2", "2023.11.11"),
      new FinanceItem(20, "cost3", "2023.11.11"),
      new FinanceItem(0.54, "cost4", "2023.11.11", "random desc random desc random desc random desc random desc random desc random desc random desc random desc random desc random desc random desc "),
      new FinanceItem(25.5, "cost5", "2023.11.11"),
      new FinanceItem(100, "cost1", "2023.11.11", "random desc"),
      new FinanceItem(250, "cost2", "2023.11.11"),
      new FinanceItem(20, "cost3", "2023.11.11"),
      new FinanceItem(0.54, "cost4", "2023.11.11", "random desc random desc random desc random desc random desc random desc random desc random desc random desc random desc random desc random desc "),
      new FinanceItem(25.5, "cost5", "2023.11.11")
    ];
  }
}
