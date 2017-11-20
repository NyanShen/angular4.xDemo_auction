import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(private activeRoute: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.authenticationService.loginOut();
    if (this.authenticationService.login(this.model.username, this.model.password)) {
      this.router.navigate([this.returnUrl]);
    } else {
      this.loading = false;
    }
  }

  login() {
    const isLogin = this.authenticationService.login(this.model.username, this.model.password);
    if (isLogin) {
      this.router.navigate(['/auction/home']);
    }
  }
}
