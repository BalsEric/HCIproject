import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Formular} from '../interfaces/formular';
import {User} from '../interfaces/user';
import {ApiService} from './api.service';


@Injectable()
export class FormularService {
  constructor(private http: HttpClient, private apiService: ApiService) {
  }
  getFormulars(): Observable<any> {
    return this.apiService.request({
        method: 'GET',
        url: 'api/formular/all'
      }
    );
  }
  postFormular(formular: Formular): Observable<any>{
    return this.apiService.request({
      method: 'POST',
      url: 'api/formular/add',
      payload: {formular}
    });
  }


  deleteFormular(id: number): Observable<any> {
    return this.apiService.request({
      method: 'DELETE',
      url: 'api/formular/' + id
    });
  }

  putFormular(formular: Formular): Observable<Formular> {
    return this.apiService.request({
      method: 'PUT',
      url: 'api/formular/update/' + formular._id,
      payload: {formular}
    });
  }
}
