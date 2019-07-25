import { Routes } from '@angular/router'
import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolver,
  CreateSessionComponent,
  EventResolver


} from './events/index'
import { Error404Component } from './errors/404.component';

export const appRoutes : Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  //the resolver basicaly says before you resolve this path call EventListResolver which will return us
  //some data which we put in the events porperty which we add to the path
  { path: 'events', component: EventsListComponent, resolve: {events: EventListResolver} },
  { path: 'events/:id', component: EventDetailsComponent, resolve: {event:EventResolver} },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  //loading the user module, everything will be prefixed by 'user' /user/
  //loadChildren is composed of path to our user module(child module), and name of the
  //exported user module class after a #
  //This says when a path is with /user/ load the UserModule from the path before the #
  { path: 'user', loadChildren: './user/user.module#UserModule'}
]
