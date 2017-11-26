import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {DialogService} from 'ngx-bootstrap-modal';
import {Router} from '@angular/router';
import {UserService} from './user.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {UserDetailModalComponent} from "./user-detail-modal/user-detail-modal.component";

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.css']
})
export class UserManageComponent implements OnInit {

  users = [];
  userName = '';
  fullName = '';
  users$: Observable<any>;

  constructor(private userService: UserService,
              private dialogService: DialogService,
              private router: Router) {
  }

  ngOnInit() {
    this.search();
  }

  search() {
    this.users$ = this.userService.queryUsers(this.userName, this.fullName);
    this.users$.subscribe((data) => {
      this.users = data['users'];
    });
  }

  reset() {
    this.userName = '';
    this.fullName = '';
    this.search();
  }

  detail(user) {
    this.dialogService.addDialog(UserDetailModalComponent,
      {title: '用户信息详情', user: user}).subscribe();
  }

  deleteUser(user) {
    this.dialogService.confirm('提示', '确认要删除吗？')
      .then((result: boolean) => {
        if (result) {
          this.userService.deleteUser(user.id).subscribe();
          this.search();
        }
      });
  }

  modifyUser(user) {
    this.router.navigate(['/auction/users', user.id]);
  }
}
