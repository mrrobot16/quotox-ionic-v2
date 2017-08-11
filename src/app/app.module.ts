import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CORE_DECLARATIONS, CORE_ENTRIES, CORE_PROVIDERS} from './'
@NgModule({
  declarations: [
    CORE_DECLARATIONS
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(CORE_DECLARATIONS[0]) // CORE_DECLARATIONS[0] App Component
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CORE_ENTRIES
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CORE_PROVIDERS
  ]
})
export class AppModule {}
