import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from '../shared/index'
import { AuthService } from '../../user/auth.service'
import { VoterService } from './voter.service'

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})

export class SessionListComponent implements OnChanges{
  @Input() sessions:ISession[] ;
  @Input() filterBy: string ;
  @Input() sortBy: string ;
  visibleSessions: ISession[] = []

  constructor(public auth:AuthService, private voterService: VoterService) {

  }

  //called everytime one of the input parameters changes
  ngOnChanges(){
    if(this.sessions){
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  toggleVote(session: ISession){
    if(this.userHasVoted(session)){
      this.voterService.deleteVoter(session, this.auth.currentUser.userName)
    } else {
      this.voterService.addVoter(session, this.auth.currentUser.userName)
    }
    if(this.sortBy === 'votes')
      this.visibleSessions.sort(sortByVotesDesc);


  }

  userHasVoted(session : ISession){
    return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
  }

  filterSessions(filter){
    if(filter === 'all'){
      //we don't just assign the value, we create a complete duplicate in orrther for
      //to not point at the same object
      this.visibleSessions = this.sessions.slice(0);
    } else {
      //filter by level
      this.visibleSessions = this.visibleSessions.filter( session => {
        return session.level.toLocaleLowerCase() === filter;
      });
    }
  }
}

function sortByNameAsc(s1: ISession, s2: ISession){
  if(s1.name > s2.name) return 1
  else if(s1.name === s2.name) return 0
  else return -1
}

function sortByVotesDesc(s1: ISession, s2: ISession){
 return s2.voters.length - s1.voters.length
}
