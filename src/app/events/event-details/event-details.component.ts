import { Component, OnInit } from '@angular/core'
import { EventService } from '../shared/event.service'
//for routing with params i think
import { ActivatedRoute, Params } from '@angular/router'
import { IEvent, ISession } from '../shared';

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
  .container { padding-left:20px; padding-right:20px; }
  .event-image { height: 100px; }
  a {cursor:pointer}
  `]
})

export class EventDetailsComponent implements OnInit{
  addMode:boolean
  event : IEvent
  filterBy: string = 'all';
  sortBy: string='votes';
                                                        //add route : ActivatedRoute to the constructor
  constructor( private eventService: EventService, private route:ActivatedRoute){

  }

  ngOnInit(){

    this.route.data.forEach((data) => {
      this.event = data['event'];
      this.addMode = false;
    })

                                                  //pass the id from the route to the getEvent
    //this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
  }



  addSession() {
    this.addMode = true
  }

  saveNewSession(session:ISession){
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1
    this.event.sessions.push(session)
    this.eventService.saveEvent(this.event).subscribe();
    this.addMode = false
  }

  cancelAddSession(){
    this.addMode = false
  }

}
