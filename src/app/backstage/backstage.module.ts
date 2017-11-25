import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BackstageComponent} from './backstage.component';
import {UserManageComponent} from './user-manage/user-manage.component';
import {SidebarComponent} from '../common/component/sidebar/sidebar.component';
import {SidebarService} from '../common/component/sidebar/sidebar.service';
import {LayoutRoutingModule} from '../layout/layout.routing.module';
import {FormsModule} from '@angular/forms';
import {BootstrapModalModule} from 'ngx-bootstrap-modal';
import {NavigationComponent} from '../common/component/navigation/navigation.component';
import { UserAddComponent } from './user-add/user-add.component';

@NgModule({
  declarations: [
    BackstageComponent,
    UserManageComponent,
    SidebarComponent,
    NavigationComponent,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LayoutRoutingModule,
    BootstrapModalModule.forRoot({container: document.body})
  ],
  providers: [SidebarService],
  bootstrap: []
})
export class BackstageModule {
}
