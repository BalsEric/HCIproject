import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../interfaces/user';
import {ApiService} from './api.service';


@Injectable()
export class LoginService {
  constructor(private http: HttpClient, private apiService: ApiService) {
  }
  loginUser(user: User): Observable<any> {
    return this.apiService.request({
        method: 'POST',
        url: 'api/users/login',
        payload: {user}
      }
    );
  }
}
