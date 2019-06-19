import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs'


@Injectable()
export class SidenavService {

  // With this subject you can save the sidenav state and consumed later into other pages.
  public sideNavState$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor() { }

}