import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout.component';
import {HomeComponent} from '../home/home.component';
import {LoginComponent} from './login/login.component';
import {Code403Component} from './code403/code403.component';
import {Code404Component} from './code404/code404.component';
import {BackstageComponent} from '../backstage/backstage.component';
import {UserManageComponent} from '../backstage/user-manage/user-manage.component';
import {UserModifyComponent} from '../backstage/user-manage/user-modify/user-modify.component';
import {UserAddComponent} from '../backstage/user-add/user-add.component';
import {AuthGuardService} from '../common/service/util/auth.guard.service';

const routes: Routes = [
  {
    path: 'auction', component: LayoutComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {
        path: 'backstage', component: BackstageComponent,
        children: [
          {
            path: 'user-manage',
            component: UserManageComponent,
            canActivate: [AuthGuardService]
          },
          {
            path: 'user-add',
            component: UserAddComponent,
            canActivate: [AuthGuardService]
          }
        ]
      },
      {path: 'users/:id', component: UserModifyComponent},
      {path: 'forbidden', component: Code403Component},
      {path: '**', component: Code404Component}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class LayoutRoutingModule {
}
