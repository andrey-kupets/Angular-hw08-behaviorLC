import {AfterViewInit, Component, DoCheck, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {DataService} from './services/data.service';
import {AComponent} from './components/a/a.component';
import {BComponent} from './components/b/b.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit, DoCheck, OnDestroy, AfterViewInit{

  @ViewChild(AComponent)
  a: AComponent;
  @ViewChild(BComponent)
  b: BComponent;

  @ViewChild('xxx')
  xxx: ElementRef;

  constructor(private dataService: DataService) {
    console.log('constructor');
    console.log(this.a);
    console.log(this.b);
  }

  increment(): void {
  this.dataService.setNewState();
}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes');
  }

  //didMount
  ngOnInit(): void {
    console.log('init');
    console.log(this.a);
    console.log(this.b);

  }

  //didUpdate
  ngDoCheck(): void {
    console.log('doCheck');
    // console.log(this.a);
    // console.log(this.b);
  }

  ngOnDestroy(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.a);
    console.log(this.b);
    this.a.asd = 'qwe'; // это возможность не делать инпуты
    this.b.asd = 'zxc'; // это возможность не делать инпуты

    console.log(this.xxx.nativeElement.innerText = 'fercrrvr');
  }


}


// increment(): void {
//   this.dataService.setNewState();
// }
