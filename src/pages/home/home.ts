import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import {DetoxComponent} from '../../app/components/detox/detox.component'
@Component({
  selector: 'page-home',
  template: `
  <h1>Home</h1>

<!--  <ion-header>
    <ion-navbar>
      <ion-title>Home</ion-title>
    </ion-navbar>
  </ion-header>-->

  <ion-content padding>
    <detox-component></detox-component>
  </ion-content>
  `
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
