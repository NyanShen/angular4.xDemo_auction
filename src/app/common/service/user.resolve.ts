import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {User} from '../entity/user';
import {Observable} from 'rxjs/Observable';
import {UserService} from './user.service';

@Injectable()
export class UserResolve implements Resolve<User> {

  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
    return this.userService.getUserById(route.params.id);
  }
}
