import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  template: `
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
export class HomePage implements OnInit{
  constructor(public navCtrl: NavController) {}

  ngOnInit(){

  }
}
