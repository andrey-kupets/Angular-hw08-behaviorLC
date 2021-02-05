import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = new BehaviorSubject<number>(0);

  constructor() { }

  getCurrentState(): BehaviorSubject<number> {
    return this.data;
  }

  setNewState(): void {
    this.data.next(this.data.getValue() + 1);
  }
}


// 1st var
// getCurrentState(): number {
//   return this.data.getValue();
// }
//
// setNewState(): void {
//   this.data.next(this.getCurrentState() + 1);
// }
