import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {IRequestParams} from '../interfaces/IRequestParams';
import {AuthService} from './auth.service';

@Injectable({providedIn: 'root'})
export class ApiService {
  private endpointURL: string;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.endpointURL = environment.apiEndpoint;
  }

  request<TResponse>(requestParams: IRequestParams): Observable<any> {
    return this.http.request(
      requestParams.method,
      this.endpointURL + requestParams.url,
      {
        body: requestParams.payload,
        params: requestParams.params,
        headers: this.authService.getAuthHeaders()
      }
    );
  }
}
