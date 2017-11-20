import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string;

  constructor(private router: Router,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }

  isLogin() {
    this.username = this.authenticationService.isLogin();
    return this.username;
  }

  loginOut() {
    this.authenticationService.loginOut();
    this.router.navigate(['/auction/login']);
  }

}
