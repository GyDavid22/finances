import { AfterViewInit, Component } from '@angular/core';
import { FinanceItem } from 'src/app/Entities';
import { DataService } from 'src/app/data-service.service';

@Component({
  selector: 'app-finances-overview-screen',
  templateUrl: './finances-overview-screen.component.html',
  styleUrls: ['./finances-overview-screen.component.css']
})
export class FinancesOverviewScreenComponent implements AfterViewInit {
  financeItems: FinanceItem[] = [];
  prevInterval: FinanceItem[] = [];
  private _interval: "ALL" | "YEAR" | "MONTH" | "WEEK" = "MONTH";
  cursor: Date = new Date();
  private isInStatsMode: boolean = false;
  sort: "ASC" | "DESC" = "DESC";

  constructor(public dataService: DataService) {
  }

  ngAfterViewInit(): void {
    this.interval = "MONTH";
    this.update();
  }

  update() {
    this.dataService.buildAndSendRequest(`/items${this.queryBuilder(this.cursor)}`, "GET").then((resp) => {
      (async (json: Promise<FinanceItem[]>) => {
        this.financeItems = await json;
      })(resp.json());
    });
    if (this.interval != "ALL") {
      this.dataService.buildAndSendRequest(`/items${this.queryBuilder(this.stepDate(false))}`, "GET").then((resp) => {
        (async (json: Promise<FinanceItem[]>) => {
          this.prevInterval = await json;
        })(resp.json());
      }); 
    }
  }

  set recieveUpdateRequest(val: undefined) {
    this.update();
  }

  set interval(val: "ALL" | "YEAR" | "MONTH" | "WEEK") {
    this._interval = val;
    let bar = document.getElementById("pager-bar");
    if (val == "ALL") {
      if (bar) {
        bar.classList.remove("d-flex")
        bar.classList.add("d-none");
      }
    } else {
      if (bar) {
        bar.classList.remove("d-none")
        bar.classList.add("d-flex");
      }
    }
    if (val == "WEEK") {
      this.cursor.setDate(this.cursor.getDate() - this.cursor.getDay() + 1);
    }
    this.update();
  }

  get interval() {
    return this._interval;
  }

  get currentIntervalString(): string {
    if (this.interval == "YEAR") {
      return this.cursor.getFullYear().toString();
    } else if (this.interval == "MONTH") {
      return `${this.cursor.getFullYear()} - ${this.cursor.getMonth() + 1}`;
    } else {
      let endOfWeek = new Date(this.cursor.toISOString());
      endOfWeek.setDate(endOfWeek.getDate() + 6);
      return `${this.cursor.toLocaleDateString()} - ${endOfWeek.toLocaleDateString()}`
    }
  }

  stepHandler(e: Event, forward: boolean) {
    e.preventDefault();
    this.cursor = this.stepDate(forward);
    this.update();
  }

  stepDate(forward: boolean): Date {
    let multiplier: number;
    if (forward) {
      multiplier = 1;
    } else {
      multiplier = -1;
    }
    let newDate = new Date(this.cursor);
    if (this.interval == "YEAR") {
      newDate.setFullYear(this.cursor.getFullYear() + multiplier);
    } else if (this.interval == "MONTH") {
      newDate.setMonth(this.cursor.getMonth() + multiplier);
    } else {
      newDate.setDate(this.cursor.getDate() + multiplier * 7);
    }
    return newDate;
  }

  private queryBuilder(dateToUse: Date): string {
    if (this.interval == "ALL") {
      return `?sort=${this.sort}`;
    }
    let formattedDate: string = "";
    if (this.interval == "YEAR") {
      formattedDate = dateToUse.getFullYear().toString();
    } else if (this.interval == "MONTH") {
      formattedDate = `${dateToUse.getFullYear()}-${dateToUse.getMonth() + 1}`;
    } else {
      formattedDate = dateToUse.toISOString().split("T")[0];
    }
    return `?type=${this.interval}&date=${formattedDate}&sort=${this.sort}`;
  }

  statsModeButtonHandler(e: Event) {
    e.preventDefault();
    this.isInStatsMode = !this.isInStatsMode;
    let financeItemList = document.getElementById("finance-item-list-box");
    let financeStats = document.getElementById("finance-stats-box");
    let chartButton = document.getElementById("chart-button");
    if (this.isInStatsMode) {
      if (financeItemList) {
        financeItemList.classList.remove("d-block");
        financeItemList.classList.add("d-none");
      }
      if (financeStats) {
        financeStats.classList.remove("d-none");
        financeStats.classList.add("d-block");
      }
      if (chartButton) {
        chartButton.classList.remove("btn-outline-primary");
        chartButton.classList.add("btn-primary");
      }
    } else {
      if (financeStats) {
        financeStats.classList.remove("d-block");
        financeStats.classList.add("d-none");
      }
      if (financeItemList) {
        financeItemList.classList.remove("d-none");
        financeItemList.classList.add("d-block");
      }
      if (chartButton) {
        chartButton.classList.remove("btn-primary");
        chartButton.classList.add("btn-outline-primary");
      }
    }
  }

  switchSortHandler(e: Event) {
    e.preventDefault();
    if (this.sort == "ASC") {
      this.sort = "DESC";
    } else {
      this.sort = "ASC";
    }
    this.update();
  }
}
