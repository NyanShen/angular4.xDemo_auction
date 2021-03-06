import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import * as _ from 'lodash';

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

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('/api/users').subscribe(users => {
      this.users = users['users'];
    });
  }

  search() {
    const params = new HttpParams()
    .set('userName', this.userName)
    .set('fullName', this.fullName);
    this.http.get('/api/users', {params})
      .subscribe(data => {
        this.users = data['users'];
      });
  }
  reset() {
    this.userName = '';
    this.fullName = '';
    this.search();
  }
}
