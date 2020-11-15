import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  articles;

  constructor(private apiService: ApiService){}

  ionViewDidEnter(){

    this.apiService.getSportsNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });
  }
}

