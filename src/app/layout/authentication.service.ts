import {Injectable} from '@angular/core';

@Injectable()
export class AuthenticationService {

  isLogin() {
    return localStorage.getItem('currentUser');
  }

  login(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('currentUser', username);
      return true;
    }
    return false;
  }

  loginOut() {
    localStorage.removeItem('currentUser');
  }
}
