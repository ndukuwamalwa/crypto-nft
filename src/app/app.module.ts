import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PlaceBidComponent } from './place-bid/place-bid.component';
import { LandingComponent } from './landing/landing.component';
import { CryptoGraphComponent } from './crypto-graph/crypto-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaceBidComponent,
    LandingComponent,
    CryptoGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
