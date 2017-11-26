import {Component, OnInit} from '@angular/core';
import {DialogService} from 'ngx-bootstrap-modal';
import {BuildOptions} from '@angular/cli/models/build-options';
import {Router} from '@angular/router';
import {User} from '../../common/entity/user';
import {UserService} from '../user-manage/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  model = new User();

  constructor(private dialogService: DialogService,
              private router: Router,
              private userService: UserService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.dialogService.show(<BuildOptions>{
      content: '保存成功',
      icon: 'success',
      size: 'sm',
      showCancelButton: false
    });
    const user = this.model;
    this.userService.addUser(user).subscribe();
    this.reset();
    this.router.navigate(['/auction/backstage/user-manage']);
  }

  reset() {
    this.model.id = '';
    this.model.password = '';
    this.model.userName = '';
    this.model.userName = '';
    this.model.fullName = '';
    this.model.group = '';
    this.model.desc = '';
  }
}
