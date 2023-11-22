import { Injectable } from '@angular/core';
import { FinanceItem, LoginRegistration, User } from './Entities';
import { Data, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private static readonly SERVICE_URL: string = "http://localhost:8080";

  private isLoggedIn: boolean = false;
  private username: string = "";

  constructor(private router: Router) {
    this.buildAndSendRequest("/user", "GET").then((value) => {
      if (value.status == 200) {
        (async (resp: Response) => {
          let user = (await resp.json()) as User;
          this.setLogin(true, user.username);
          if (this.router.url == "/login" || this.router.url == "/registration") {
            this.router.navigate(["/overview"]);
          }
        })(value);
      }
    });
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

  buildAndSendRequest(url: string, method: "GET" | "POST" | "PUT" | "DELETE", body: string | undefined = undefined, loginScreen = false): Promise<Response> {
    let res = fetch(`${DataService.SERVICE_URL}${url}`, {
      method: method,
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: body,
      credentials: "include"
    });
    res.then((value) => {
      if (value.status == 401) {
        this.setLogin(false);
        if (!loginScreen) {
          this.router.navigate(["/login"]);
        }
      }
    });
    return res;
  }

  setLogin(isLoggedIn: boolean, username: string = "") {
    this.isLoggedIn = isLoggedIn;
    this.username = username;
  }

  getIsLoggedIn(): Boolean {
    return this.isLoggedIn;
  }

  getUserName(): string {
    return this.username;
  }
}
