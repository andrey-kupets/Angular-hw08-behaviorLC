import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  someValue: number;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCurrentState().subscribe(value => this.someValue = value);

  }

  increment(): void {
    this.dataService.setNewState();
  }
}


//1 st var
// ngOnInit(): void {
//   this.someValue = this.dataService.getCurrentState();
// }
//
// increment(): void {
//   this.dataService.setNewState();
// }
