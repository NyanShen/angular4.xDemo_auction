import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BootstrapModalModule} from 'ngx-bootstrap-modal';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing.module';
import {LayoutModule} from './layout/layout.module';
import {HomeModule} from './home/home.module';
import {BackstageModule} from './backstage/backstage.module';
import {JWTInterceptor} from './common/service/interceptor/JWTInterceptor';
import {ResponseInterceptor} from './common/service/interceptor/ResponseInterceptor';
import { DynamicFormComponent } from './common/component/dynamic-form/dynamic-form.component';
import { QuestionComponent } from './question/question.component';
import {QuestionModule} from './question/question.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    LayoutModule,
    HomeModule,
    BackstageModule,
    QuestionModule,
    BootstrapModalModule.forRoot({container: document.body})
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
