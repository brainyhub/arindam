import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  template: 
  `
    <div ng-app="">
        <form class="pure-form" >
          <fieldset>
            <legend>Registration</legend>
            <div>
              <label for=firstname>First Name :  </label>
              <input type="text" ng-model="firstname" placeholder="Arindam"><br>
            </div>       
            <div>
              <label for=lastname>Lastt Name : </label>
              <input type="text" ng-model="laststname" placeholder="Mondal"><br>
            </div>
            <div>
              <label for=userid>User Id : </label>
              <input type="text" ng-model="userid" placeholder="arin123"><br>
            </div>
            <div>
              <label for="email">Email : </label>
              <input type = "text" name = "email" ng-model= "email" placeholder="abc@gmail.com" minlength = "4" maxlength = "100" pattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"  required/><br>
    	        <label for="gender">Gender  : </label>
              <input type="radio" id="male" name="gender" value="male">
              <label for="male">Male</label>
              <input type="radio" id="female" name="gender" value="female">
              <label for="female">Female</label>
              <input type="radio" id="other" name="gender" value="other">
              <label for="other">Other</label><br>
            </div>
            <div>
              <label for="phone">Phone Number : </label>
            </div>
            <div *ngFor ="let obj of dataArray; let i = index">
              <input type="text" name="phone {{i}}" [(ngModel)]="obj.phone">
              <button (click)="addPhone()">+</button>
              <button (click)="removePhone(i)" *ngIf="i!=0">-</button>
            </div>
            <div>
              <label for="birthdaytime">Birthday (date and time):</label>
              <input type="datetime-local" id="birthdaytime" name="birthdaytime"><br>
              <label for="skill"> Skill : </label>
              <input type="checkbox" id="skill1" name="skill1" value="c++">
              <label for="skill"> c++ </label>
              <input type="checkbox" id="skill2" name="skill2" value="java">
              <label for="skill2"> java </label>
              <input type="checkbox" id="skill3" name="skill3" value="Html">
              <label for="skill3"> Html</label>
              <input type="checkbox" id="skill4" name="skill4" value="Angular">
              <label for="skill3"> Angular</label><br>
            </div>
            <div>
              <label for="password"> Enter Password</label><br>
              <input type="password" name="password1" [(ngModel)]="password1" required><br>
              <label for="password"> Confirm Password</label><br>
              <input type="password" name="password2" [(ngModel)]="password2" required>
              <button type="submit" (click)="checkPassword()">confirm</button><br>
              <button onclick="confirmation for submit!">submit</button>
            </div>
          </fieldset>
        </form>
    </div>
   
  `,
  styles: [
  ]
})
export class RegistrationComponent{
  phone:any
  password1:string;
  password2:string;
  checkPassword(){
    if(this.password1==this.password2){
   }
   else 
   {
     alert("confirm password not match");
   }
  }
  newPhone= new Object();
  dataArray=[];

  ngOnInit(){
    this.newPhone=new Object();
    this.dataArray.push(this.newPhone);
  }
  addPhone(){
    this.newPhone=new Object();
    this.dataArray.push(this.newPhone);
  }
  removePhone(index){
    this.dataArray.splice(index);
  }
}

