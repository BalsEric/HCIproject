import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Formular} from '../interfaces/formular';
import {Participant} from '../interfaces/participants';
import {Scene} from '../interfaces/scene';
import {User} from '../interfaces/user';
import {ApiService} from './api.service';


@Injectable()
export class ParticipantService {
  constructor(private http: HttpClient, private apiService: ApiService) {
  }
  getParticipants(): Observable<any> {
    return this.apiService.request({
        method: 'GET',
        url: 'api/participant/all'
      }
    );
  }

  addParticipant(participant: Participant, answers: string[][], brochure: Scene): Observable<any> {
    return this.apiService.request({
        method: 'POST',
        url: 'api/participant/add',
        payload: {participant, answers, brochure}
      }
    );
  }

  downloadScene(): Observable<any>{
    return this.apiService.request({
      method: 'GET',
      url: 'api/participant/download'
    });
  }
}
