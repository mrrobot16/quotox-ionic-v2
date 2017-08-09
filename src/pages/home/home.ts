import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  template: `
  <h1>Home</h1>

 <ion-header>
    <ion-navbar>
      <ion-title>Quote of the Day</ion-title>
    </ion-navbar>
  </ion-header>

  <ion-content padding>
    <detox-component></detox-component>
    <quote-component></quote-component>
  </ion-content>
  `
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
