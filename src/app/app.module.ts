import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing.module';
import {LayoutModule} from './layout/layout.module';
import {HomeModule} from './home/home.module';
import {BackstageModule} from './backstage/backstage.module';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    LayoutModule,
    HomeModule,
    BackstageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
