import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
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

     startTime(){
     this.hours = new Date().getHours();
     this.date = new Date().getDate();
     this.month = new Date().getMonth();
     this.year = new Date().getFullYear();
    }
}
