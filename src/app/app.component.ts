import { Component } from '@angular/core';
import {DataService} from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-hw08-behaviorLC';

  constructor(private dataService: DataService) {
  }

  increment(): void {
    this.dataService.setNewState();
  }
}
