import { Component, OnInit } from '@angular/core'
import { EventService } from '../shared/event.service'
//for routing with params i think
import { ActivatedRoute } from '@angular/router'

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
  .container { padding-left:20px; padding-right:20px; }
  .event-image { height: 100px; }
  `]
})

export class EventDetailsComponent implements OnInit{
  event : any
                                                        //add route : ActivatedRoute to the constructor
  constructor( private eventService: EventService, private route:ActivatedRoute){

  }

  ngOnInit(){
                                                  //pass the id from the route to the getEvent
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
  }

}
