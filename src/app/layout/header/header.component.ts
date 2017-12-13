import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string;

  constructor(private router: Router,
              private loginService: LoginService) {
  }

  ngOnInit() {
  }

  isLogin() {
    this.username = this.loginService.isLogin();
    return this.username;
  }

  loginOut() {
    this.loginService.loginOut();
    this.router.navigate(['/auction/login']);
  }

}
