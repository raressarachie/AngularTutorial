import { Component } from '@angular/core';

@Component({
  // selector(way of accesing it in html)
  selector: 'events-app',
  // the html it sort of outputs
  template: `
    <h2>Hello World</h2>
    <img src="/assets/images/basic-shield.png"/>
    `
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
