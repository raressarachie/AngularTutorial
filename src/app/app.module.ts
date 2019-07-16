import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule, ActivatedRouteSnapshot } from '@angular/router';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  EventRouteActivator,
  CreateEventComponent,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent

} from './events/index'

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/nav.component';
import { ToastrService } from './common/common.toastr.service';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
@NgModule({
  // for declaring a component pipe or directive
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent
  ],
  // importing other modules
  imports: [
    // import the ng browser module
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  // for services
  providers: [EventService, ToastrService, EventRouteActivator,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    EventListResolver,
    AuthService
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