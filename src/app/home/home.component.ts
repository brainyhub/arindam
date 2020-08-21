import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <form >
  <fieldset>
  <legend>Home</legend>
  <p>I am from home</p>
  </fieldset>
  </form>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
