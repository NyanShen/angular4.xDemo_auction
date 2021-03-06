import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BackstageComponent} from './backstage.component';
import {UserManageComponent} from './user-manage/user-manage.component';
import {SidebarComponent} from '../common/component/sidebar/sidebar.component';
import {SidebarService} from '../common/component/sidebar/sidebar.service';
import {LayoutRoutingModule} from '../layout/layout.routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    BackstageComponent,
    UserManageComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LayoutRoutingModule
  ],
  providers: [SidebarService],
  bootstrap: []
})
export class BackstageModule {
}
