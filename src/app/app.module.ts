import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/nav.component';
import { EventService } from './events/shared/event.service'
import { ToastrService } from './common/common.toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { appRoutes } from './routes'
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './events/create-event.component'
import { Error404Component } from './errors/404.component'
import { EventRouteActivator } from './events/event-details/event-route-activator.service'
import { EventListResolver } from './events/events-list-resolver.service'

@NgModule({
  // for declaring a component pipe or directive
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  // importing other modules
  imports: [
    // import the ng browser module
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  // for services
  providers: [EventService, ToastrService, EventRouteActivator,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    EventListResolver
  ],
  // bootstraps the app component
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent){
  if(component.isDirty)
    return window.confirm('You have not saved this event, do you realy want to cancel?')
  return true
}
