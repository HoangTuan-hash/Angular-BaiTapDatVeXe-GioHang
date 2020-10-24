import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './BaiTapVeXeBuyt/home/home.component';
import { ChairBusComponent } from './BaiTapVeXeBuyt/chair-bus/chair-bus.component';
import { ListBookedComponent } from './BaiTapVeXeBuyt/list-booked/list-booked.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChairBusComponent,
    ListBookedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
