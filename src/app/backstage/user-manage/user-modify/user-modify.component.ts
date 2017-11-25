import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

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

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => this.model = data.user);
  }

  cancel() {
    this.router.navigate(['/auction/backstage/user-manage']);
  }
}
