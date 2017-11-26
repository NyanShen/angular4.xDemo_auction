import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../user.service';
import {DialogService} from 'ngx-bootstrap-modal';
import {BuildOptions} from '@angular/cli/models/build-options';

@Component({
  selector: 'app-user-modify',
  templateUrl: './user-modify.component.html',
  styleUrls: ['./user-modify.component.css']
})
export class UserModifyComponent implements OnInit {

  model = {};
  menu = '后台管理';
  subMenu = '用户管理';
  button = '用户修改';

  constructor(private router: Router,
              private userService: UserService,
              private dialogService: DialogService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => this.model = data.user);
  }

  onSubmit() {
    this.dialogService.show(<BuildOptions>{
      content: '修改成功',
      icon: 'success',
      size: 'sm',
      showCancelButton: false
    });
    this.userService.modifyUser(this.model).subscribe();
    this.cancel();
  }

  cancel() {
    this.router.navigate(['/auction/backstage/user-manage']);
  }
}
