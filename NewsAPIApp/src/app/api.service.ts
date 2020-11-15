import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = 'a3bc547e53304162b1463b9380b83f20';
  proxyUrl = "https://cors-anywhere.herokuapp.com/";

  constructor(private httpClient: HttpClient) { }

  getNews(){
    return this.httpClient.get(`${this.proxyUrl}http://newsapi.org/v2/everything?q=business&sortBy=publishedAt&language=en&apiKey=${this.API_KEY}`);
  }

    getBusinessNews(){
    return this.httpClient.get(`${this.proxyUrl}http://newsapi.org/v2/everything?q=business&sortBy=publishedAt&language=en&apiKey=${this.API_KEY}`);
  }
    getSportsNews(){
    return this.httpClient.get(`${this.proxyUrl}http://newsapi.org/v2/everything?q=sports&sortBy=publishedAt&language=enh&apiKey=${this.API_KEY}`);
  }
    getFinanceNews(){
    return this.httpClient.get(`${this.proxyUrl}http://newsapi.org/v2/everything?q=finance&sortBy=publishedAt&language=en&apiKey=${this.API_KEY}`);
  }
}