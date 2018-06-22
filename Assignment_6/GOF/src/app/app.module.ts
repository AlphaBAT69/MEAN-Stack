import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlagComponent } from './flag/flag.component';

import { FormsModule } from '@angular/forms';

import {RoundProgressModule} from 'angular-svg-round-progressbar';
@NgModule({
  declarations: [
    AppComponent,
    FlagComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoundProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }