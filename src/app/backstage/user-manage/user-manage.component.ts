import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.css']
})
export class UserManageComponent implements OnInit {

  users = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('assets/json/user.json')
      .subscribe(data => {
        this.users = data['users'];
      });
  }

}
