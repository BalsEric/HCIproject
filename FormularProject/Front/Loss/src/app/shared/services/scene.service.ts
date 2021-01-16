import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Formular} from '../interfaces/formular';
import {Scene} from '../interfaces/scene';
import {User} from '../interfaces/user';
import {ApiService} from './api.service';


@Injectable()
export class SceneService {
  constructor(private http: HttpClient, private apiService: ApiService) {
  }
  getScenes(): Observable<any> {
    return this.apiService.request({
        method: 'GET',
        url: 'api/scene/all'
      }
    );
  }

  postScene(scene: Scene): Observable<any>{
    return this.apiService.request({
      method: 'POST',
      url: 'api/scene/add',
      payload: {scene}
    });
  }


  deleteScene(id: string): Observable<any> {
    return this.apiService.request({
      method: 'DELETE',
      url: 'api/scene/' + id
    });
  }

  putScene(scene: Scene): Observable<Scene> {
    return this.apiService.request({
      method: 'PUT',
      url: 'api/scene/update/' + scene._id,
      payload: {scene}
    });
  }

  postLink(id: string): Observable<string> {
    return this.apiService.request({
      method: 'POST',
      url: 'api/scene/generate/' + id,
    });
  }

  getFormById(id: string): Observable<any> {
    return this.apiService.request({
      method: 'POST',
      url: 'api/scene/getForm/' + id,
    });
  }

}
