import { Component, Input,OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import {logError} from '../../helpers/helpers';
@Component({
  selector: 'quote-component',
  template: `
  <div>
      <p>Quote of the Day: {{ quoteOfDay }}</p>
  </div>
  `
})
export class QuoteComponent implements OnInit {
  quoteOfDay:string;
  @Input() quote;
  constructor(private shared_service:SharedService) {

  }

  ngOnInit(){
    this.getQuotes();
  }

  getQuotes(){
    let quotes = this.shared_service.getQuotes()
    quotes.subscribe(data=>{
      this.quoteOfDay = data[0].description
    }, logError)
  }

}
