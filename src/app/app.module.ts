import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxSlideConfirmModule } from 'projects/ngx-slide-confirm/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxSlideConfirmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
