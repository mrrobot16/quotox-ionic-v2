import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
@Component({
  selector: 'quote-component',
  template: `
  <div>
      <p>Quote of the Day: {{ quoteOfDay }}</p>
  </div>
  `
})
export class QuoteComponent implements OnInit {
  quotes:any;
  quoteOfDay:string;
  constructor(private shared_service:SharedService) {

  }

  ngOnInit(){
    this.getQuotes();
  }

  getQuotes(){
    let quotes = this.shared_service.getQuotes()
    quotes.subscribe(data=>{
      this.quotes=data
      this.quoteOfDay = this.quotes[0].description
    })
  }

}
