import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { EventService } from './shared/event.service'
import { map } from 'rxjs/operators'

@Injectable()
export class EventListResolver implements Resolve <any>{
  constructor(private eventService: EventService) { }
  //here we usualy make an AJAX call
  resolve(){
    //get the events through the observable, pipe them to the map(which gives us acces to them) and return them
    //here pipe and map work like a subscribe, but returns an observable(which is what angular expects) instead of a subscription
    return this.eventService.getEvents();
  }
}
