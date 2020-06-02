import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';   // tutorial said to go through rxjs/BehaviorSubject, but there is no BehaviorSubject folder in rxjs apparently. Just have to grab it from the regular rxjs folder, and things seem to work just fine

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal);
  }

}
