import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { DetoxFormPage } from '../detox/detox_form';
@Component({
  template: `
  <ion-tabs>
    <ion-tab [root]="tab1" tabTitle="Quote" tabIcon="ios-flame-outline"></ion-tab>
    <ion-tab [root]="tab2" tabTitle="Detox" tabIcon="ios-leaf-outline"></ion-tab>
  </ion-tabs>
  `
})
export class TabsPage {
  tab1 = HomePage;
  tab2 = DetoxFormPage;
}
