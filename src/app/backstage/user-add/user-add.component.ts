import {Component, OnInit} from '@angular/core';
import {User} from '../../common/entity/user';
import {DialogService} from 'ngx-bootstrap-modal';
import {BuildOptions} from '@angular/cli/models/build-options';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  model = new User();

  constructor(private dialogService: DialogService,
              private router: Router,
              private http: HttpClient) {
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
    this.http.post('/api/users', {user: user})
      .subscribe();
    this.reset();
    // this.router.navigate(['/auction/backstage/user-manage']);
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
