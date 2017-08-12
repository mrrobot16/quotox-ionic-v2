import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import {logError} from '../../helpers/helpers';
@Component({
  selector: 'detox-component',
  template: `
  <p>Days free {{daysFree}}</p>
  `
})
export class DetoxComponent implements OnInit {
  daysFree:any;
  @Input() detox;
  constructor(private shared_service: SharedService) {

  }

  ngOnInit(){
    this.getDetox()
  }

  getDetox(){
    let detox = this.shared_service.getDetox()
    detox.subscribe(data=>{
      this.getExactDate(data)
    }, logError)
  }

  getExactDate(detox){
    let real_date = detox[detox.length-1].last_time.split('-')
    let cleanDay:any = new Date(real_date[0]+'-'+real_date[1]+'-'+(parseInt(real_date[2])+1).toString())
    let today:any = new Date()
    this.daysFree = Math.floor(((today-cleanDay)/(864*Math.pow(10,5))));
  }

}
