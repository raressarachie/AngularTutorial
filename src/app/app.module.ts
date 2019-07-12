import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/nav.component';

@NgModule({
  // for declaring a component pipe or directive
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent
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
