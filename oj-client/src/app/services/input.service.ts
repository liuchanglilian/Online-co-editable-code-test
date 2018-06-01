import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class InputService {
   public inputSubject$ = new BehaviorSubject<string>('');
 // public inputSubject$ = new Observable<string>('');
  // avoid passing variable by reference, make an instance
  constructor() { }

  //setter
  changeInput(term) {
    this.inputSubject$.next(term);
  }

  //getter
  // BehaviorSubject
  getInput():Observable<string> {
    //return a new Observable instead of returning the reference
    return this.inputSubject$.asObservable();
    // this.inputSubject$ = new Observable();
    // return this.inputSubject$.asObservable();
  }
}
