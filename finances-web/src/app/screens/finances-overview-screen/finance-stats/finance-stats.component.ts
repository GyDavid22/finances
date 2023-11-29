import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FinanceItem, FinanceItemHelpers } from 'src/app/Entities';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-finance-stats',
  templateUrl: './finance-stats.component.html',
  styleUrls: ['./finance-stats.component.css']
})
export class FinanceStatsComponent {
  @Input()
  set financeItems(val: FinanceItem[]) {
    this._finItems = val;
    if (val.length > 0) {
      this.updateChart();      
    }
    this.amountSums = this.countSum();
  }
  @Input()
  set prevInterval(val: FinanceItem[]) {
    this._prevInterval = val;
    this.amountSums = this.countSum();
  }
  private _prevInterval: FinanceItem[] = []
  @Input()
  interval: "ALL" | "YEAR" | "MONTH" | "WEEK" = "MONTH";
  @Output()
  forwardUpdateRequests: EventEmitter<undefined> = new EventEmitter();
  colorValues = [
    "rgb(255, 182, 193)",
    "rgb(135, 206, 250)",
    "rgb(216, 191, 216)",
    "rgb(255, 236, 139)",
    "rgb(152, 251, 152)",
    "rgb(255, 192, 128)",
    "rgb(230, 230, 250)",
    "rgb(192, 192, 192)",
    "rgb(176, 224, 230)"
  ];
  categories: string[] = [];
  pieChart: any;
  private _finItems: FinanceItem[] = [];
  amountSums: { current: number, prev: number } = { current: 0, prev: 0};

  constructor() {
    for (let i of FinanceItemHelpers.toReadable) {
      this.categories.push(i.raw);
    }
  }

  updateChart() {
    setTimeout(() => {
      if (!document.getElementById("piechart")) {
        return;
      }
      if (this.pieChart instanceof Chart) {
        (this.pieChart as Chart).destroy();
      }
      this.pieChart = new Chart("piechart", {
        type: "pie",
        data: this.pieDataSet
      });
    }, 200);
  }

  private get pieDataSet() {
    let data = {
      labels: [] as string[],
      datasets: [{
        data: [] as number[],
        backgroundColor: [] as string[]
      }]
    }
    let categories: { [category: string]: number } = {};
    for (let i of FinanceItemHelpers.toReadable) {
      categories[i.raw] = 0;
    }
    for (let i of this.financeItems) {
      categories[i.type] += i.amount;
    }
    let numOfCategories = 0;
    for (let i of FinanceItemHelpers.toReadable) {
      if (categories[i.raw] > 0) {
        data.labels.push(FinanceItemHelpers.readableAsDict[i.raw]);
        data.datasets[0].data.push(categories[i.raw]);
        data.datasets[0].backgroundColor.push(this.colorValues[numOfCategories++]);
      }
    }
    return data;
  }

  private countSum() {
    let res = {
      current: 0,
      prev: 0
    }
    for (let i of this.financeItems) {
      res.current += i.amount;
    }
    for (let i of this.prevInterval) {
      res.prev += i.amount;
    }
    return res;
  }

  get financeItems() {
    return this._finItems;
  }

  get prevInterval() {
    return this._prevInterval;
  }
}
