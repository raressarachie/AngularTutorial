import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';

@NgModule({
  // for declaring a component pipe or directive
  declarations: [
    EventsAppComponent
  ],
  // importing other modules
  imports: [
    // import the ng browser module
    BrowserModule
  ],
  // for services
  providers: [],
  // bootstraps the app component
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
