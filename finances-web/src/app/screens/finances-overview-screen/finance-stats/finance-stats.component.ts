import { Component, Input } from '@angular/core';
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
      this.updateCharts();
    }
    this.amountSums = this.countSum();
  }
  @Input()
  set prevInterval(val: FinanceItem[]) {
    this._prevInterval = val;
    this.amountSums = this.countSum();
  }
  @Input()
  interval: "ALL" | "YEAR" | "MONTH" | "WEEK" = "MONTH";
  @Input()
  cursor: Date = new Date();
  private colorValues = [
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
  private pieChart: any;
  private lineChart: any;
  private _finItems: FinanceItem[] = [];
  private _prevInterval: FinanceItem[] = []
  amountSums: { current: number, prev: number } = { current: 0, prev: 0 };

  constructor() {
  }

  private updatePieChart() {
    setTimeout(() => {
      if (!document.getElementById("piechart")) {
        return;
      }
      if (this.pieChart instanceof Chart) {
        (this.pieChart as Chart).destroy();
      }
      this.pieChart = new Chart("piechart", {
        type: "pie",
        data: this.pieDataSet()
      });
    }, 0);
  }

  private updateLineChart() {
    setTimeout(() => {
      if (!document.getElementById("linechart")) {
        return;
      }
      if (this.lineChart instanceof Chart) {
        (this.lineChart as Chart).destroy();
      }
      this.lineChart = new Chart("linechart", {
        type: "line",
        data: this.lineDataSet()
      });
    }, 0);
  }

  private updateCharts() {
    this.updatePieChart();
    this.updateLineChart();
  }

  private pieDataSet() {
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

  private lineDataSet() {
    let data = {
      labels: [] as string[],
      datasets: [{
        label: "Spendings (€)",
        data: [] as number[],
        fill: true,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.2
      }]
    };
    let dates = []
    let label = new Date();
    let end = "";
    if (this.interval == "YEAR") {
      label = new Date(this.cursor.getFullYear(), 0, 1);
      end = `${label.getFullYear()}-12-31`;
    } else if (this.interval == "MONTH") {
      label = new Date(this.cursor.getFullYear(), this.cursor.getMonth(), 1);
      end = this.isoDateInCurrentTimeZone(new Date(this.cursor.getFullYear(), this.cursor.getMonth() + 1, 0));
    } else if (this.interval == "WEEK") {
      label = new Date(this.cursor);
      let endDate = new Date(label);
      endDate.setDate(endDate.getDate() + 6);
      end = this.isoDateInCurrentTimeZone(endDate);
    } else { // ALL
      let first = this.financeItems[0].date
      let last = this.financeItems[this.financeItems.length - 1].date;
      if (first < last) {
        label = new Date(first);
        end = last;
      } else {
        label = new Date(last);
        end = first;
      }
    }
    data.labels.push(this.localDateInCurrentTimeZone(label));
    let isoDate = this.isoDateInCurrentTimeZone(label);
    dates.push(isoDate);
    while (isoDate != end) {
      label.setDate(label.getDate() + 1);
      data.labels.push(this.localDateInCurrentTimeZone(label));
      isoDate = this.isoDateInCurrentTimeZone(label);
      dates.push(isoDate);
    }
    data.datasets[0].data = this.lineChartData(dates);
    return data;
  }

  private isoDateInCurrentTimeZone(date: Date): string {
    let copy = new Date(date);
    copy.setMinutes(copy.getMinutes() - copy.getTimezoneOffset());
    return copy.toISOString().split("T")[0];
  }

  private localDateInCurrentTimeZone(date: Date): string {
    let copy = new Date(date);
    copy.setMinutes(copy.getMinutes() - copy.getTimezoneOffset());
    return copy.toLocaleDateString();
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

  // dates are already sorted ascending, also called only when financeItems.length > 0
  lineChartData(dates: string[]): number[] {
    let copyArray: FinanceItem[] = JSON.parse(JSON.stringify(this.financeItems));
    copyArray.sort((a, b) => (a.date < b.date ? -1 : 1));
    let sum = 0;
    let amounts = [];
    let j = 0;
    for (let i of dates) {
      while (j < copyArray.length && copyArray[j].date == i) {
        sum += copyArray[j++].amount;
      }
      amounts.push(sum);
    }
    return amounts;
  }
}
