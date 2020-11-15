import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

    articles;

  constructor(private apiService: ApiService){}

  ionViewDidEnter(){

    this.apiService.getFinanceNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });
  }
}
