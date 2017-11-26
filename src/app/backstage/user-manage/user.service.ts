import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  queryUsers(userName, fullName): Observable<any> {
    const params = new HttpParams()
      .set('userName', userName)
      .set('fullName', fullName);
    return this.http.get('/api/users', {params});
  }

  getUserById(id): Observable<any> {
    const url = '/api/users/' + id;
    return this.http.get(url);
  }

  deleteUser(id): Observable<any> {
    const url = '/api/users/' + id;
    return this.http.delete(url);
  }

  addUser(user): Observable<any> {
    const url = '/api/users';
    return this.http.post(url, {user: user});
  }

  modifyUser(user): Observable<any> {
    const url = '/api/users/' + user.id;
    return this.http.patch(url, {user: user});
  }
}
