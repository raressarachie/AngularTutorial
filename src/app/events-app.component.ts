import { Component } from '@angular/core';

@Component({
  // selector(way of accesing it in html)
  selector: 'events-app',
  // the html it sort of outputs
  template: `
  <nav-bar></nav-bar>
  <events-list></events-list>`
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
