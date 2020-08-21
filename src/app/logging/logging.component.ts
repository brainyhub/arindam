import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-logging',
  template: `
  <div ng-app="">
  <form >
  <fieldset>
  <legend>Logging</legend>
  <label for="userid">User Id : </label><br>
  <input type="text" name="userid" [(ngModel)]="userid"><br>
  <label for="password">Password : </label><br>
  <input type="text" name="password" [(ngModel)]="password" placeholder="**********"><br>
  <button type="submit" (click)="login()">Log In</button>
  </fieldset>
  </form>
  </div>
  `,
  styles: [
  ]
})
export class LoggingComponent{
  constructor(private router:Router){}
  userid:string;
  password:string;
  login(){
    if(this.userid=="admin" && this.password == "admin")
    {
      this.router.navigate(["/home"]);
    }
    else 
    {
      alert("unseccessful login error");
    }
  }
}
