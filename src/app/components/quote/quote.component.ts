import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';
@Component({
  selector: 'quote-component',
  template: `
  <h1>Quote Component</h1>
  `
})
export class QuoteComponent {
  quotes:any;
  constructor(private shared_service:SharedService) {
    this.quotes = this.shared_service.getQuotes();
    console.log('this.quotes: ', this.quotes)
  }

}
