import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;
 time;
    hours;
    date;
    month;
    year;
  constructor() { 
        setInterval(() => {this.time = new Date();
                            this.date = new Date();
                        }, 1000);
  }

  ngOnInit() {}
     startTime(){
     this.hours = new Date().getHours();
     this.date = new Date().getDate();
     this.month = new Date().getMonth();
     this.year = new Date().getFullYear();
    }
}
