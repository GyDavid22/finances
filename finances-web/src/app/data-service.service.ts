import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './Entities';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private static readonly SERVICE_URL: string = "https://finances-evn4.onrender.com/api";

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
