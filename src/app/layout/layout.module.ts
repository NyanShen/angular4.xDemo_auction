import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LayoutComponent} from './layout.component';
import {AuthenticationService} from './authentication.service';
import {LayoutRoutingModule} from './layout.routing.module';
import {Code403Component} from './code403/code403.component';
import {Code404Component} from './code404/code404.component';
import {FormsModule} from '@angular/forms';
import {AuthGuardService} from '../common/service/util/auth.guard.service';

@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    Code404Component,
    Code403Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LayoutRoutingModule
  ],
  providers: [AuthenticationService, AuthGuardService],
  bootstrap: []
})
export class LayoutModule {
}
