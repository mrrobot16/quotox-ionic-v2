import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import {DetoxFormComponent} from '../../app'
@Component({
  template: `
  <ion-tabs>
    <ion-tab [root]="tab1Root" tabTitle="Quote" tabIcon="ios-flame-outline"></ion-tab>
    <ion-tab [root]="tab2Root" tabTitle="Detox" tabIcon="ios-leaf-outline"></ion-tab>
  </ion-tabs>

  `
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = DetoxFormComponent;

  constructor() {

  }
}
