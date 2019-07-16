import { Component } from '@angular/core';

@Component({
  // selector(way of accesing it in html)
  selector: 'events-app',
  // the html it sort of outputs
  template: `
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>`
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}