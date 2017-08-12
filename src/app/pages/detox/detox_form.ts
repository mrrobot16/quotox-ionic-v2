import { Component } from '@angular/core';

@Component({
  template: `
  <ion-header>
     <ion-navbar>
       <ion-title>Time to Detox</ion-title>
     </ion-navbar>
   </ion-header>

  <ion-content padding>
<form (submit)="postDetox()">
  <ion-list>
    <ion-item>
      <ion-label fixed>Last Time</ion-label>
      <ion-datetime displayFormat="MMM DD, YYYY" [(ngModel)]='cleanDate' name='cleanDate'></ion-datetime>
    </ion-item>
    <div padding>
      <button ion-button color="primary" block>Start Detox</button>
    </div>
  </ion-list>
</form>
  </ion-content>
  `
})
export class DetoxFormPage {
  cleanDate:any;
  detox:any;
  constructor() {

  }

  postDetox(){
    console.log('detox ', this.cleanDate)
  }

}
