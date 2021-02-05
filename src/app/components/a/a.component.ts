import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  someValue: number;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCurrentState().subscribe(value => this.someValue = value);
  }

  increment(): void {
    this.dataService.setNewState();
  }

}


// 1 st var
// ngOnInit(): void {
//   this.someValue = this.dataService.getCurrentState();
// }
//
// increment(): void {
//   this.dataService.setNewState();
// }
