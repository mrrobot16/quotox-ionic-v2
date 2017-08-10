import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CORE_DECLARATIONS, CORE_ENTRIES} from './'
@NgModule({
  declarations: [
    CORE_DECLARATIONS
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(CORE_DECLARATIONS[0]) // CORE_DECLARATIONS[0] App Component
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CORE_ENTRIES
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
