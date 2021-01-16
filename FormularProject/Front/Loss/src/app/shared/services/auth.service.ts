import {HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class AuthService {
  private endpointURL: string;
  private authHeaders: HttpHeaders;

  constructor() {
    this.endpointURL = environment.apiEndpoint;
  }

  getLoginStatus(): boolean {
    return sessionStorage.getItem('userToken') !== null;
  }

  getAuthHeaders() {
    this.authHeaders = new HttpHeaders();

    if (sessionStorage.getItem('userToken') === null) {
      // It must not be null, otherwise an error is thrown
      sessionStorage.setItem('userToken', ' ');
    }

    this.authHeaders = this.authHeaders
     // .set('Authorization', sessionStorage.getItem('userToken'))
      .set('Authorization', 'Bearer ' + sessionStorage.getItem('userToken'))
      .set('Content-Type', 'application/json');
    return this.authHeaders;
  }
}
