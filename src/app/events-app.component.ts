import { Component } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  // selector(way of accesing it in html)
  selector: 'events-app',
  // the html it sort of outputs
  template: `
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>`
})
export class EventsAppComponent {
  constructor(private auth: AuthService) {}

  ngOnInit(){
    this.auth.checkAuthenticationStatus();
  }

}
