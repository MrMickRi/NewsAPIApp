import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
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

  ngOnInit() {
  }

    startTime(){
     this.hours = new Date().getHours();
     this.date = new Date().getDate();
     this.month = new Date().getMonth();
     this.year = new Date().getFullYear();
    }
    
}
