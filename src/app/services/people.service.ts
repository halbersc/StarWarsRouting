import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  endpoint = "people/";

  constructor(public httpClient: HttpClient) { 

  }

  getPeople(): Observable <any> {
    return this.httpClient.get (environment.URL_SWAPI + this.endpoint);
  }

  getOnePerson(idPerson: number): Observable <any> {
    return this.httpClient.get (environment.URL_SWAPI + this.endpoint + idPerson);
  }
}
